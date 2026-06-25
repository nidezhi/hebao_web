<template>
  <BusinessPageShell
    title="Simulation 模拟交易"
    description="查看 Mock 组合、现金、持仓市值、估值来源、收益曲线、订单事件与回测结果；收益必须标记为 Mock 结果。"
    :endpoints="[
      endpoints.portfolio.mine,
      endpoints.portfolio.detail,
      endpoints.portfolio.performanceCurve,
      endpoints.portfolio.orderEvents,
      endpoints.backtest.list,
    ]"
    :icon="RocketOutlined"
    :status-text="errorMessage ? 'MOCK WAITING' : 'SIMULATION OPS'"
    risk-notice="本页面所有组合与收益均为 Mock 模拟结果，不代表真实账户资产或真实投资收益。"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && portfolios.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="14">
          <a-card class="cockpit-card" :bordered="false">
            <template #title>我的 Mock 组合</template>
            <template #extra>
              <a-space>
                <a-button :disabled="!selectedPortfolio" :loading="refreshing" @click="handleRefreshValuation">
                  刷新估值
                </a-button>
                <a-button type="primary" ghost :disabled="!selectedPortfolio" :loading="generatingBacktest" @click="handleGenerateBacktest">
                  生成回测
                </a-button>
              </a-space>
            </template>
            <a-table
              row-key="bizId"
              size="small"
              :data-source="portfolios"
              :columns="columns"
              :pagination="{ pageSize: 8 }"
              :row-class-name="rowClassName"
              @row="rowHandlers"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="portfolioIsActive(record) ? 'success' : 'default'">
                    {{ portfolioStatusText(record.status) }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'totalAsset'">
                  {{ formatMoney(record.latestValuation?.totalAsset, record.baseCurrency) }}
                </template>
                <template v-if="column.key === 'cash'">
                  {{ formatMoney(record.latestValuation?.cashBalance, record.baseCurrency) }}
                </template>
                <template v-if="column.key === 'returnRate'">
                  <a-tag :color="Number(record.latestValuation?.totalReturnRate || 0) >= 0 ? 'success' : 'error'">
                    {{ formatPercent(record.latestValuation?.totalReturnRate) }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'valuationTime'">
                  {{ formatDateTime(record.latestValuation?.valuationTime) }}
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="10">
          <a-card class="cockpit-card" :bordered="false" title="组合收益曲线">
            <BusinessChart :option="curveChartOption" height="320px" />
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="8">
          <a-card class="cockpit-card" :bordered="false" title="组合详情">
            <a-empty v-if="!selectedPortfolio" description="选择组合查看详情" />
            <a-descriptions v-else bordered size="small" :column="1">
              <a-descriptions-item label="组合名称">{{ selectedPortfolio.portfolioName }}</a-descriptions-item>
              <a-descriptions-item label="组合编号">{{ selectedPortfolio.portfolioNo || '-' }}</a-descriptions-item>
              <a-descriptions-item label="类型">{{ selectedPortfolio.portfolioType || '-' }}</a-descriptions-item>
              <a-descriptions-item label="币种">{{ selectedPortfolio.baseCurrency || '-' }}</a-descriptions-item>
              <a-descriptions-item label="总资产">
                {{ formatMoney(selectedPortfolio.latestValuation?.totalAsset, selectedPortfolio.baseCurrency) }}
              </a-descriptions-item>
              <a-descriptions-item label="持仓市值">
                {{ formatMoney(selectedPortfolio.latestValuation?.positionValue, selectedPortfolio.baseCurrency) }}
              </a-descriptions-item>
              <a-descriptions-item label="现金余额">
                {{ formatMoney(selectedPortfolio.latestValuation?.cashBalance, selectedPortfolio.baseCurrency) }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="16">
          <a-card class="cockpit-card" :bordered="false" title="持仓明细">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="selectedPortfolio?.positions || []"
              :columns="positionColumns"
              :pagination="{ pageSize: 6 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'averageCost'">
                  {{ formatMoney(record.averageCost, selectedPortfolio?.baseCurrency) }}
                </template>
                <template v-if="column.key === 'costAmount'">
                  {{ formatMoney(record.costAmount, selectedPortfolio?.baseCurrency) }}
                </template>
                <template v-if="column.key === 'realizedProfit'">
                  <span :class="Number(record.realizedProfit || 0) >= 0 ? 'profit-text' : 'loss-text'">
                    {{ formatMoney(record.realizedProfit, selectedPortfolio?.baseCurrency) }}
                  </span>
                </template>
                <template v-if="column.key === 'lastTradeAt'">
                  {{ formatDateTime(record.lastTradeAt) }}
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="订单事件">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="orderEvents"
              :columns="eventColumns"
              :pagination="{ pageSize: 6 }"
            />
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="回测结果">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="backtests"
              :columns="backtestColumns"
              :pagination="{ pageSize: 6 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="record.status === 'SUCCEEDED' ? 'success' : record.status === 'FAILED' ? 'error' : 'processing'">
                    {{ record.status || '-' }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'range'">
                  {{ record.startDate || '-' }} ~ {{ record.endDate || '-' }}
                </template>
                <template v-if="column.key === 'updatedAt'">
                  {{ formatDateTime(record.updatedAt || record.createdAt) }}
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'
import { RocketOutlined } from '@ant-design/icons-vue'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { generateBacktestFromPortfolio, listBacktests } from '@/entities/backtest/api'
import type { BacktestResultDto } from '@/entities/backtest/model'
import {
  getMockPortfolio,
  getPortfolioPerformanceCurve,
  listMockOrderEvents,
  listMyMockPortfolios,
  refreshPortfolioValuation,
} from '@/entities/portfolio/api'
import { portfolioIsActive, portfolioStatusText } from '@/entities/portfolio/adapter'
import type { MockPortfolioDto, PortfolioPerformancePointDto } from '@/entities/portfolio/model'
import { formatDateTime, formatMoney, formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const refreshing = ref(false)
const generatingBacktest = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const portfolios = ref<MockPortfolioDto[]>([])
const selectedPortfolio = ref<MockPortfolioDto>()
const performanceCurve = ref<PortfolioPerformancePointDto[]>([])
const orderEvents = ref<Record<string, unknown>[]>([])
const backtests = ref<BacktestResultDto[]>([])

const totalAsset = computed(() =>
  portfolios.value.reduce((sum, item) => sum + (item.latestValuation?.totalAsset || 0), 0),
)
const totalCash = computed(() =>
  portfolios.value.reduce((sum, item) => sum + (item.latestValuation?.cashBalance || 0), 0),
)
const metrics = computed(() => [
  { label: 'Mock 组合', value: portfolios.value.length, hint: '当前用户可见' },
  { label: '总资产', value: formatMoney(totalAsset.value), hint: '估值汇总' },
  { label: '现金余额', value: formatMoney(totalCash.value), hint: '现金不足由后端拦截' },
  { label: '持仓数', value: portfolios.value.reduce((sum, item) => sum + (item.positions?.length || 0), 0), hint: '组合持仓' },
  { label: '回测数', value: backtests.value.length, hint: '策略复盘' },
])

const curveChartOption = computed<EChartsCoreOption>(() => ({
  color: ['#2563eb', '#16a34a', '#f59e0b'],
  tooltip: { trigger: 'axis' },
  legend: { bottom: 0, data: ['总资产', '收益率', '最大回撤'] },
  grid: { left: 44, right: 28, top: 24, bottom: 48 },
  xAxis: {
    type: 'category',
    data: performanceCurve.value.map((item) => formatDateTime(item.valuationTime)),
  },
  yAxis: [
    { type: 'value', name: '资产' },
    { type: 'value', name: '比例', axisLabel: { formatter: '{value}' } },
  ],
  series: [
    {
      name: '总资产',
      type: 'line',
      smooth: true,
      yAxisIndex: 0,
      data: performanceCurve.value.map((item) => item.totalAsset || 0),
    },
    {
      name: '收益率',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data: performanceCurve.value.map((item) => item.totalReturnRate || 0),
    },
    {
      name: '最大回撤',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data: performanceCurve.value.map((item) => item.maxDrawdown || 0),
    },
  ],
}))

const columns = [
  { title: '组合名称', dataIndex: 'portfolioName', key: 'portfolioName' },
  { title: '组合编号', dataIndex: 'portfolioNo', key: 'portfolioNo' },
  { title: '状态', key: 'status' },
  { title: '总资产', key: 'totalAsset' },
  { title: '现金', key: 'cash' },
  { title: '收益率', key: 'returnRate' },
  { title: '估值来源', key: 'sourceCode', customRender: ({ record }: { record: MockPortfolioDto }) => record.latestValuation?.sourceCode || '-' },
  { title: '估值时间', key: 'valuationTime' },
]

const positionColumns = [
  { title: '产品', dataIndex: 'productBizId', key: 'productBizId' },
  { title: '方向', dataIndex: 'positionSide', key: 'positionSide' },
  { title: '数量', dataIndex: 'quantity', key: 'quantity' },
  { title: '可用', dataIndex: 'availableQuantity', key: 'availableQuantity' },
  { title: '均价', key: 'averageCost' },
  { title: '成本', key: 'costAmount' },
  { title: '已实现收益', key: 'realizedProfit' },
  { title: '最近交易', key: 'lastTradeAt' },
]

const eventColumns = [
  { title: '事件', dataIndex: 'eventType', key: 'eventType' },
  { title: '订单', dataIndex: 'orderBizId', key: 'orderBizId' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '说明', dataIndex: 'message', key: 'message' },
  { title: '时间', dataIndex: 'createdAt', key: 'createdAt' },
]

const backtestColumns = [
  { title: '策略', dataIndex: 'strategyCode', key: 'strategyCode' },
  { title: '版本', dataIndex: 'strategyVersion', key: 'strategyVersion' },
  { title: '状态', key: 'status' },
  { title: '区间', key: 'range' },
  { title: '更新时间', key: 'updatedAt' },
]

const rowHandlers = (record: MockPortfolioDto) => ({
  onClick: () => {
    selectedPortfolio.value = record
  },
})

const rowClassName = (record: MockPortfolioDto) =>
  record.bizId === selectedPortfolio.value?.bizId ? 'selected-business-row' : ''

const loadPortfolioSideData = async (portfolio?: MockPortfolioDto) => {
  if (!portfolio?.bizId) {
    performanceCurve.value = []
    orderEvents.value = []
    backtests.value = []
    return
  }

  const [detail, curve, events, backtestPage] = await Promise.all([
    getMockPortfolio(portfolio.bizId),
    getPortfolioPerformanceCurve({ portfolioBizId: portfolio.bizId, limit: 60 }),
    listMockOrderEvents({ portfolioBizId: portfolio.bizId, page: 1, size: 20 }),
    listBacktests({ page: 1, size: 20 }),
  ])

  selectedPortfolio.value = detail
  portfolios.value = portfolios.value.map((item) => (item.bizId === detail.bizId ? detail : item))
  performanceCurve.value = curve || []
  orderEvents.value = Array.isArray(events) ? events : []
  backtests.value = (backtestPage.items || []).filter(
    (item) => !item.portfolioBizId || item.portfolioBizId === portfolio.bizId,
  )
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listMyMockPortfolios({ page: 1, size: 50 })
    portfolios.value = page.items || []
    selectedPortfolio.value = portfolios.value[0]
    await loadPortfolioSideData(selectedPortfolio.value)
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

const handleRefreshValuation = async () => {
  if (!selectedPortfolio.value) return
  refreshing.value = true
  errorMessage.value = ''
  try {
    await refreshPortfolioValuation({ portfolioBizId: selectedPortfolio.value.bizId })
    await loadPortfolioSideData(selectedPortfolio.value)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '刷新估值失败，请稍后重试'
  } finally {
    refreshing.value = false
  }
}

const handleGenerateBacktest = async () => {
  if (!selectedPortfolio.value) return
  generatingBacktest.value = true
  errorMessage.value = ''
  try {
    const backtest = await generateBacktestFromPortfolio({ portfolioBizId: selectedPortfolio.value.bizId })
    backtests.value = [backtest, ...backtests.value.filter((item) => item.bizId !== backtest.bizId)]
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '生成回测失败，请稍后重试'
  } finally {
    generatingBacktest.value = false
  }
}

watch(selectedPortfolio, async (portfolio, previous) => {
  if (!portfolio || portfolio.bizId === previous?.bizId) return
  try {
    await loadPortfolioSideData(portfolio)
  } catch {
    performanceCurve.value = []
    orderEvents.value = []
    backtests.value = []
  }
})

onMounted(load)
</script>
