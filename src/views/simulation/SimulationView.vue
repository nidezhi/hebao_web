<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-alert
      show-icon
      type="warning"
      message="Simulation 仅展示 Mock 组合与模拟收益，不代表真实资产、真实订单或收益承诺。现金不足、产品不可 Mock、行情缺失等失败原因以后端风控为准。"
    />

    <a-card class="page-card" :bordered="false">
      <a-table
        row-key="bizId"
        :columns="portfolioColumns"
        :data-source="portfolios"
        :loading="loading"
        :pagination="pagination"
        :scroll="{ x: 980 }"
        @change="handleTableChange"
        @row="portfolioRow"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'portfolio'">
            <strong>{{ record.portfolioName }}</strong>
            <div class="muted">{{ record.portfolioNo || record.bizId }}</div>
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag :color="record.status === 1 ? 'success' : 'default'">
              {{ portfolioStatus(record.status) }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'totalAsset'">
            {{ formatMoney(record.latestValuation?.totalAsset, record.baseCurrency) }}
          </template>
          <template v-else-if="column.key === 'returnRate'">
            <span :class="returnClass(record.latestValuation?.totalReturnRate)">
              {{ formatPercent(record.latestValuation?.totalReturnRate) }}
            </span>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :xl="14">
        <a-card
          class="page-card"
          :bordered="false"
          :title="selectedPortfolio ? `${selectedPortfolio.portfolioName} 资产曲线` : '资产曲线'"
        >
          <div ref="chartElement" class="curve-chart" />
        </a-card>
      </a-col>
      <a-col :xs="24" :xl="10">
        <a-card class="page-card" :bordered="false" title="持仓与现金">
          <a-descriptions v-if="selectedPortfolio" bordered size="small" :column="1">
            <a-descriptions-item label="现金">
              {{ formatMoney(selectedPortfolio.latestValuation?.cashBalance, selectedPortfolio.baseCurrency) }}
            </a-descriptions-item>
            <a-descriptions-item label="持仓市值">
              {{ formatMoney(selectedPortfolio.latestValuation?.positionValue, selectedPortfolio.baseCurrency) }}
            </a-descriptions-item>
            <a-descriptions-item label="估值来源">
              {{ selectedPortfolio.latestValuation?.sourceCode || '-' }}
            </a-descriptions-item>
          </a-descriptions>
          <a-table
            row-key="bizId"
            size="small"
            class="positions-table"
            :columns="positionColumns"
            :data-source="selectedPortfolio?.positions || []"
            :pagination="false"
          />
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import type { EChartsType } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { getMockPortfolio, getMockPortfolios, getPortfolioPerformanceCurve } from '@/api/mockPortfolios'
import type { MockPortfolio, MockPosition, PortfolioPerformancePoint } from '@/api/types'

echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

const loading = ref(false)
const portfolios = ref<MockPortfolio[]>([])
const selectedPortfolio = ref<MockPortfolio>()
const curve = ref<PortfolioPerformancePoint[]>([])
const total = ref(0)
const page = ref(1)
const size = ref(10)
const chartElement = ref<HTMLElement>()
let chart: EChartsType | undefined
let resizeObserver: ResizeObserver | undefined

const portfolioColumns: TableColumnsType<MockPortfolio> = [
  { title: '组合', key: 'portfolio', fixed: 'left', width: 260 },
  { title: '状态', key: 'status', width: 100 },
  { title: '总资产', key: 'totalAsset', width: 170 },
  { title: '现金', dataIndex: ['latestValuation', 'cashBalance'], width: 130 },
  { title: '持仓市值', dataIndex: ['latestValuation', 'positionValue'], width: 130 },
  { title: '累计收益率', key: 'returnRate', width: 140 },
  { title: '更新时间', dataIndex: 'updatedAt', width: 180 },
]
const positionColumns: TableColumnsType<MockPosition> = [
  { title: '产品', dataIndex: 'productBizId', width: 160 },
  { title: '方向', dataIndex: 'positionSide', width: 80 },
  { title: '数量', dataIndex: 'quantity', width: 110 },
  { title: '可用', dataIndex: 'availableQuantity', width: 110 },
  { title: '均价', dataIndex: 'averageCost', width: 110 },
]
const pagination = computed<TablePaginationConfig>(() => ({
  current: page.value,
  pageSize: size.value,
  total: total.value,
  showSizeChanger: true,
}))

const fetchPortfolios = async () => {
  loading.value = true
  try {
    const result = await getMockPortfolios({
      page: page.value,
      size: size.value,
      sort: 'updatedAt',
      direction: 'desc',
    })
    portfolios.value = result.items
    total.value = result.total
    if (!selectedPortfolio.value && result.items.length) await selectPortfolio(result.items[0])
  } finally {
    loading.value = false
  }
}
const selectPortfolio = async (portfolio: MockPortfolio) => {
  selectedPortfolio.value = await getMockPortfolio(portfolio.bizId)
  curve.value = await getPortfolioPerformanceCurve(portfolio.bizId)
  renderChart()
}
const renderChart = async () => {
  await nextTick()
  if (!chartElement.value) return
  chart ||= echarts.init(chartElement.value)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    grid: { left: 56, right: 24, top: 30, bottom: 58 },
    xAxis: {
      type: 'category',
      data: curve.value.map((point) => formatShortTime(point.valuationTime)),
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '总资产',
        type: 'line',
        smooth: true,
        data: curve.value.map((point) => point.totalAsset ?? 0),
      },
      {
        name: '收益率',
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        data: curve.value.map((point) => point.totalReturnRate ?? 0),
      },
    ],
  }, true)
}
const portfolioRow = (portfolio: MockPortfolio) => ({ onClick: () => selectPortfolio(portfolio) })
const handleTableChange = (paginationConfig: TablePaginationConfig) => {
  page.value = paginationConfig.current || 1
  size.value = paginationConfig.pageSize || 10
  fetchPortfolios()
}
const portfolioStatus = (status?: number) => {
  if (status === 1) return '正常'
  if (status === 2) return '冻结'
  if (status === 0) return '关闭'
  return '-'
}
const returnClass = (value?: number) => {
  if (typeof value !== 'number') return ''
  return value >= 0 ? 'positive-text' : 'danger-text'
}
const formatMoney = (value?: number, currency = 'CNY') =>
  typeof value === 'number' ? `${value.toLocaleString('zh-CN')} ${currency}` : '-'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatShortTime = (value?: string) =>
  value ? new Date(value).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }) : '-'

onMounted(() => {
  fetchPortfolios()
  resizeObserver = new ResizeObserver(() => chart?.resize())
  if (chartElement.value) resizeObserver.observe(chartElement.value)
})
onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chart?.dispose()
})
</script>

<style scoped>
.page {
  width: 100%;
}

.curve-chart {
  width: 100%;
  height: 360px;
}

.positions-table {
  margin-top: 16px;
}

.positive-text {
  color: #389e0d;
}
</style>
