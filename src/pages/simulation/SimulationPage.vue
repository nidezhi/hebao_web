<template>
  <BusinessPageShell
    title="Simulation 模拟交易"
    description="Mock 组合、订单、持仓、估值、收益曲线和再平衡工作区。所有收益均标记为模拟结果。"
    :endpoints="[endpoints.portfolio.mine, endpoints.portfolio.buy, endpoints.portfolio.sell, endpoints.portfolio.performanceCurve, endpoints.portfolio.rebalance]"
    :icon="StockOutlined"
    status-text="MOCK ONLY"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <a-alert class="mb-12" type="warning" show-icon message="这里展示的是 Mock 模拟交易结果，不构成真实收益承诺或投资建议。" />
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="9">
          <a-card class="page-card" :bordered="false" title="我的 Mock 组合">
            <a-list :data-source="portfolios" size="small">
              <template #renderItem="{ item }">
                <a-list-item @click="selectPortfolio(item)" class="clickable-row">
                  <a-list-item-meta :title="item.portfolioName" :description="`现金 ${formatMoney(item.latestValuation?.cashBalance, item.baseCurrency)}`" />
                  <a-tag color="blue">{{ portfolioStatusText(item.status) }}</a-tag>
                </a-list-item>
              </template>
              <template #empty><EmptyEvidence description="暂无 Mock 组合。" /></template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="15">
          <a-card class="page-card" :bordered="false" title="组合详情">
            <EmptyEvidence v-if="!selectedPortfolio" description="请选择 Mock 组合。" />
            <a-space v-else direction="vertical" :size="16" class="full-width">
              <a-descriptions bordered size="small" :column="3">
                <a-descriptions-item label="组合">{{ selectedPortfolio.portfolioName }}</a-descriptions-item>
                <a-descriptions-item label="总资产">{{ formatMoney(selectedPortfolio.latestValuation?.totalAsset, selectedPortfolio.baseCurrency) }}</a-descriptions-item>
                <a-descriptions-item label="收益率">{{ formatPercent(selectedPortfolio.latestValuation?.totalReturnRate) }}</a-descriptions-item>
                <a-descriptions-item label="现金">{{ formatMoney(selectedPortfolio.latestValuation?.cashBalance, selectedPortfolio.baseCurrency) }}</a-descriptions-item>
                <a-descriptions-item label="持仓市值">{{ formatMoney(selectedPortfolio.latestValuation?.positionValue, selectedPortfolio.baseCurrency) }}</a-descriptions-item>
                <a-descriptions-item label="估值来源">{{ selectedPortfolio.latestValuation?.sourceCode || '-' }}</a-descriptions-item>
              </a-descriptions>
              <BusinessChart title="Mock 资产曲线" unit="totalAsset / returnRate" :empty="performanceCurve.length === 0" :option="performanceOption" />
              <a-tabs>
                <a-tab-pane key="positions" tab="持仓">
                  <a-table row-key="bizId" size="small" :pagination="false" :data-source="selectedPortfolio.positions || []" :columns="positionColumns" />
                </a-tab-pane>
                <a-tab-pane key="orders" tab="订单工作区">
                  <a-form layout="inline">
                    <a-form-item label="产品 BizId"><a-input v-model:value="orderForm.productBizId" /></a-form-item>
                    <a-form-item label="金额/数量"><a-input-number v-model:value="orderForm.amount" /></a-form-item>
                    <a-button :loading="ordering" @click="buy">买入</a-button>
                    <a-button :loading="ordering" @click="sell">卖出</a-button>
                  </a-form>
                  <a-divider>订单事件</a-divider>
                  <JsonPreview :value="orderEvents" />
                </a-tab-pane>
                <a-tab-pane key="rebalance" tab="再平衡">
                  <a-alert type="info" show-icon message="目标权重必须合规；现金不足、产品不可 Mock、行情缺失会由后端风控拒绝并可在 Risk Audit 追踪。" />
                  <a-textarea v-model:value="rebalanceText" :auto-size="{ minRows: 5, maxRows: 8 }" />
                  <a-button class="mt-12" type="primary" :loading="rebalancing" @click="rebalance">执行再平衡</a-button>
                </a-tab-pane>
              </a-tabs>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { StockOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatMoney, formatPercent, safeParseJson } from '@/shared/utils/format'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import { buyMockOrder, executeMockRebalance, getPortfolioPerformanceCurve, listMockOrderEvents, listMyMockPortfolios, sellMockOrder } from '@/entities/portfolio/api'
import { portfolioStatusText } from '@/entities/portfolio/adapter'
import type { MockPortfolioDto, MockPositionDto, PortfolioPerformancePointDto } from '@/entities/portfolio/model'

const loading = ref(false)
const ordering = ref(false)
const rebalancing = ref(false)
const errorMessage = ref('')
const portfolios = ref<MockPortfolioDto[]>([])
const selectedPortfolio = ref<MockPortfolioDto>()
const performanceCurve = ref<PortfolioPerformancePointDto[]>([])
const orderEvents = ref<Record<string, unknown>[]>([])
const orderForm = reactive({ productBizId: '', amount: 1000 })
const rebalanceText = ref('[\n  { "productBizId": "", "targetWeight": 0.4 }\n]')

const metrics = computed(() => [
  { label: 'Mock 组合', value: portfolios.value.length, hint: '仅模拟' },
  { label: '总资产', value: formatMoney(selectedPortfolio.value?.latestValuation?.totalAsset, selectedPortfolio.value?.baseCurrency), hint: '选中组合' },
  { label: '现金', value: formatMoney(selectedPortfolio.value?.latestValuation?.cashBalance, selectedPortfolio.value?.baseCurrency), hint: '可用模拟现金' },
  { label: '累计收益', value: formatPercent(selectedPortfolio.value?.latestValuation?.totalReturnRate), hint: 'Mock 结果' },
])

const performanceOption = computed(() => ({
  tooltip: { trigger: 'axis' },
  legend: { data: ['总资产', '收益率'] },
  grid: { left: 46, right: 20, top: 36, bottom: 36 },
  xAxis: { type: 'category', data: performanceCurve.value.map((item) => formatDateTime(item.valuationTime)) },
  yAxis: [{ type: 'value' }, { type: 'value' }],
  series: [
    { name: '总资产', type: 'line', data: performanceCurve.value.map((item) => item.totalAsset) },
    { name: '收益率', type: 'line', yAxisIndex: 1, data: performanceCurve.value.map((item) => item.totalReturnRate) },
  ],
}))

const positionColumns = [
  { title: '产品', dataIndex: 'productBizId' },
  { title: '数量', dataIndex: 'quantity' },
  { title: '可用', dataIndex: 'availableQuantity' },
  { title: '成本', customRender: ({ record }: { record: MockPositionDto }) => formatMoney(record.costAmount) },
]

const selectPortfolio = async (portfolio: MockPortfolioDto) => {
  selectedPortfolio.value = portfolio
  performanceCurve.value = []
  orderEvents.value = []
  try {
    const [curve, events] = await Promise.all([
      getPortfolioPerformanceCurve({ portfolioBizId: portfolio.bizId, limit: 120 }),
      listMockOrderEvents({ portfolioBizId: portfolio.bizId, page: 1, size: 20 }),
    ])
    performanceCurve.value = curve || []
    orderEvents.value = Array.isArray(events) ? events : []
  } catch (error) {
    message.warning(error instanceof Error ? error.message : '组合子数据加载失败')
  }
}

const buy = async () => {
  if (!selectedPortfolio.value) return
  ordering.value = true
  try {
    await buyMockOrder({ portfolioBizId: selectedPortfolio.value.bizId, productBizId: orderForm.productBizId, amount: orderForm.amount, idempotencyKey: `BUY-${Date.now()}` })
    message.success('Mock 买入已提交')
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '买入失败')
  } finally {
    ordering.value = false
  }
}

const sell = async () => {
  if (!selectedPortfolio.value) return
  ordering.value = true
  try {
    await sellMockOrder({ portfolioBizId: selectedPortfolio.value.bizId, productBizId: orderForm.productBizId, quantity: orderForm.amount, idempotencyKey: `SELL-${Date.now()}` })
    message.success('Mock 卖出已提交')
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '卖出失败')
  } finally {
    ordering.value = false
  }
}

const rebalance = async () => {
  if (!selectedPortfolio.value) return
  const targets = safeParseJson<Array<Record<string, unknown>>>(rebalanceText.value)
  if (!targets) {
    message.warning('再平衡 JSON 不可解析')
    return
  }
  rebalancing.value = true
  try {
    await executeMockRebalance({ portfolioBizId: selectedPortfolio.value.bizId, targets, minTradeAmount: 100, idempotencyKey: `REBALANCE-${Date.now()}` })
    message.success('再平衡已提交')
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '再平衡失败')
  } finally {
    rebalancing.value = false
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listMyMockPortfolios({ page: 1, size: 20, sort: 'createdAt', direction: 'desc' })
    portfolios.value = page.items || []
    if (portfolios.value[0]) await selectPortfolio(portfolios.value[0])
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模拟交易接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
