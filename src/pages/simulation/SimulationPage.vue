<template>
  <BusinessPageShell
    title="Simulation 模拟交易"
    description="Mock 组合、订单、持仓、估值、收益曲线和再平衡工作区。所有收益均标记为模拟结果。"
    :endpoints="[endpoints.portfolio.mine, endpoints.portfolio.create, endpoints.portfolio.buy, endpoints.portfolio.buyFromReport, endpoints.portfolio.sell, endpoints.portfolio.cancelOrder, endpoints.portfolio.refreshValuation, endpoints.portfolio.performanceCurve, endpoints.portfolio.rebalance]"
    :icon="StockOutlined"
    status-text="MOCK ONLY"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <a-alert class="mb-12" type="warning" show-icon message="这里展示的是 Mock 模拟交易结果，不构成真实收益承诺或投资建议。" />
      <MetricStrip :metrics="metrics" />
      <div class="simulation-workbench">
        <aside class="simulation-sidebar page-card">
          <div class="simulation-sidebar__head">
            <div>
              <span class="eyebrow">PORTFOLIOS</span>
              <h3>我的 Mock 组合</h3>
            </div>
            <a-button type="primary" size="small" @click="portfolioOpen = true">新建组合</a-button>
          </div>
          <a-list :data-source="portfolios" size="small" class="simulation-portfolio-list">
            <template #renderItem="{ item }">
              <a-list-item
                class="simulation-portfolio-item"
                :class="{ 'simulation-portfolio-item--active': item.bizId === selectedPortfolio?.bizId }"
                @click="selectPortfolio(item)"
              >
                <div class="simulation-portfolio-item__main">
                  <div>
                    <strong>{{ item.portfolioName }}</strong>
                    <span>{{ item.portfolioNo || item.bizId }}</span>
                  </div>
                  <a-tag color="blue">{{ portfolioStatusText(item.status) }}</a-tag>
                  <small>总资产 {{ formatMoney(item.latestValuation?.totalAsset, item.baseCurrency) }}</small>
                  <small>现金 {{ formatMoney(item.latestValuation?.cashBalance, item.baseCurrency) }}</small>
                </div>
              </a-list-item>
            </template>
            <template #empty><EmptyEvidence description="暂无 Mock 组合。" /></template>
          </a-list>
        </aside>

        <main class="simulation-main">
          <section v-if="!selectedPortfolio" class="simulation-empty page-card">
            <div>
              <span class="eyebrow">CREATE PORTFOLIO</span>
              <h2>创建 Mock 组合</h2>
            </div>
            <a-form layout="vertical" class="simulation-empty__form">
              <a-form-item label="组合名称"><a-input v-model:value="portfolioForm.portfolioName" /></a-form-item>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12"><a-form-item label="基础币种"><a-input v-model:value="portfolioForm.baseCurrency" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="初始现金"><a-input-number v-model:value="portfolioForm.initialCash" class="full-width" :min="0" /></a-form-item></a-col>
              </a-row>
              <a-button type="primary" :loading="portfolioSaving" @click="createPortfolio">创建组合</a-button>
            </a-form>
          </section>
          <template v-else>
            <section class="simulation-hero page-card">
              <div class="simulation-hero__head">
                <div>
                  <a-space wrap>
                    <a-tag v-if="isAutomationPool(selectedPortfolio)" color="purple">AI资金池</a-tag>
                    <a-tag color="blue">{{ portfolioStatusText(selectedPortfolio.status) }}</a-tag>
                    <a-tag>{{ selectedPortfolio.baseCurrency || 'CNY' }}</a-tag>
                    <a-tag>{{ selectedPortfolio.latestValuation?.sourceCode || 'NO VALUATION' }}</a-tag>
                  </a-space>
                  <h2>{{ selectedPortfolio.portfolioName }}</h2>
                  <p>{{ selectedPortfolio.portfolioNo || selectedPortfolio.bizId }} · 自动估值 {{ autoRefreshText }}</p>
                </div>
                <a-space wrap>
                  <a-button :loading="valuationRefreshing" @click="() => refreshValuation()">刷新估值</a-button>
                  <a-button type="primary" @click="tradeMode = 'buy'">去交易</a-button>
                </a-space>
              </div>
              <div class="simulation-kpi-grid">
                <div v-for="item in valuationCards" :key="item.label" class="simulation-kpi">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.value }}</strong>
                  <small>{{ item.hint }}</small>
                </div>
              </div>
            </section>

            <section class="simulation-grid">
              <div class="simulation-chart-card page-card">
                <BusinessChart title="Mock 资产曲线" unit="totalAsset / returnRate" :empty="performanceCurve.length === 0" :option="performanceOption" />
              </div>

              <div class="simulation-trade-card page-card">
                <div class="simulation-card-head">
                  <div>
                    <span class="eyebrow">TRADE DESK</span>
                    <h3>交易工作台</h3>
                  </div>
                  <a-radio-group v-model:value="tradeMode" size="small">
                    <a-radio-button value="buy">买入</a-radio-button>
                    <a-radio-button value="sell">卖出</a-radio-button>
                    <a-radio-button value="report">报告买入</a-radio-button>
                    <a-radio-button value="cancel">撤单</a-radio-button>
                  </a-radio-group>
                </div>

                <a-form v-if="tradeMode === 'buy' || tradeMode === 'sell'" layout="vertical">
                  <a-form-item label="产品">
                    <a-select
                      v-model:value="orderForm.productBizId"
                      show-search
                      option-filter-prop="label"
                      placeholder="选择可模拟交易产品"
                      :options="productOptions"
                    />
                  </a-form-item>
                  <a-form-item :label="tradeMode === 'buy' ? '买入金额' : '卖出数量'"><a-input-number v-model:value="orderForm.amount" class="full-width" /></a-form-item>
                  <a-button v-if="tradeMode === 'buy'" type="primary" :loading="ordering" @click="buy">提交买入</a-button>
                  <a-button v-else danger :loading="ordering" @click="sell">提交卖出</a-button>
                </a-form>

                <a-form v-else-if="tradeMode === 'report'" layout="vertical">
                  <a-form-item label="投资报告">
                    <a-select
                      v-model:value="reportOrderForm.reportBizId"
                      show-search
                      option-filter-prop="label"
                      placeholder="选择结构化投资报告"
                      :options="reportOptions"
                    />
                  </a-form-item>
                  <a-form-item label="产品（可选）">
                    <a-select
                      v-model:value="reportOrderForm.productBizId"
                      allow-clear
                      show-search
                      option-filter-prop="label"
                      placeholder="选择产品；为空时由报告策略决定"
                      :options="productOptions"
                    />
                  </a-form-item>
                  <a-button type="primary" :loading="reportOrdering" @click="buyFromReport">从报告买入</a-button>
                </a-form>

                <a-form v-else layout="vertical">
                  <a-form-item label="订单">
                    <a-select
                      v-model:value="cancelForm.orderBizId"
                      show-search
                      option-filter-prop="label"
                      placeholder="选择需要撤销的订单"
                      :options="orderOptions"
                    />
                  </a-form-item>
                  <a-button danger :loading="canceling" @click="cancelOrder">撤销订单</a-button>
                </a-form>
              </div>
            </section>

            <a-tabs class="simulation-detail-tabs">
              <a-tab-pane key="positions" tab="持仓">
                <a-table row-key="bizId" size="small" :pagination="false" :data-source="selectedPortfolio.positions || []" :columns="positionColumns">
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'product'">{{ productLabel(record.productBizId) }}</template>
                    <template v-else-if="column.key === 'cost'">{{ formatMoney(record.costAmount, selectedPortfolio?.baseCurrency) }}</template>
                    <template v-else-if="column.key === 'actions'">
                      <a-space>
                        <a-button size="small" type="link" @click="fillProduct(record, 'buy')">买入</a-button>
                        <a-button size="small" type="link" @click="fillProduct(record, 'sell')">卖出</a-button>
                      </a-space>
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="orders" tab="订单事件">
                <a-table row-key="rowKey" size="small" :pagination="{ pageSize: 8 }" :data-source="orderRows" :columns="orderColumns">
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'product'">{{ productLabel(record.productBizId) }}</template>
                    <template v-else-if="column.key === 'status'"><a-tag>{{ record.status }}</a-tag></template>
                    <template v-else-if="column.key === 'amount'">{{ record.amount }}</template>
                    <template v-else-if="column.key === 'actions'">
                      <a-button v-if="record.orderBizId" size="small" type="link" danger @click="fillCancel(record.orderBizId)">撤单</a-button>
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="rebalance" tab="再平衡">
                <a-alert type="info" show-icon message="目标权重必须合规；现金不足、产品不可 Mock、行情缺失会由后端风控拒绝并可在 Risk Audit 追踪。" />
                <div class="rebalance-targets mt-12">
                  <div v-for="(target, index) in rebalanceTargets" :key="index" class="rebalance-target-row">
                    <a-select
                      v-model:value="target.productBizId"
                      show-search
                      option-filter-prop="label"
                      placeholder="选择产品"
                      :options="productOptions"
                    />
                    <a-input-number v-model:value="target.targetWeight" class="rebalance-target-row__weight" :min="0" :max="1" :step="0.01" />
                    <a-button danger @click="removeRebalanceTarget(index)">删除</a-button>
                  </div>
                  <a-button @click="addRebalanceTarget">新增目标</a-button>
                </div>
                <a-button class="mt-12" type="primary" :loading="rebalancing" @click="rebalance">执行再平衡</a-button>
              </a-tab-pane>
            </a-tabs>
          </template>
        </main>
      </div>
    </PageState>

    <a-drawer v-model:open="portfolioOpen" width="520" title="创建 Mock 组合">
      <a-form layout="vertical">
        <a-form-item label="组合名称"><a-input v-model:value="portfolioForm.portfolioName" /></a-form-item>
        <a-form-item label="基础币种"><a-input v-model:value="portfolioForm.baseCurrency" /></a-form-item>
        <a-form-item label="初始现金"><a-input-number v-model:value="portfolioForm.initialCash" class="full-width" :min="0" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="portfolioSaving" @click="createPortfolio">创建组合</a-button>
          <a-button @click="portfolioOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { StockOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatMoney, formatPercent } from '@/shared/utils/format'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import { buyMockOrder, buyMockOrderFromReport, cancelMockOrder, createMockPortfolio, executeMockRebalance, getAutomationMockPortfolio, getMockPortfolio, getPortfolioPerformanceCurve, listMyMockPortfolios, listPortfolioOrderEvents, refreshPortfolioValuation, sellMockOrder } from '@/entities/portfolio/api'
import { portfolioStatusText } from '@/entities/portfolio/adapter'
import type { MockPortfolioDto, MockPositionDto, PortfolioOrderEventDto, PortfolioPerformancePointDto } from '@/entities/portfolio/model'
import { listProducts } from '@/entities/product/api'
import type { ProductDto } from '@/entities/product/model'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'

const loading = ref(false)
const route = useRoute()
const ordering = ref(false)
const reportOrdering = ref(false)
const canceling = ref(false)
const rebalancing = ref(false)
const portfolioSaving = ref(false)
const valuationRefreshing = ref(false)
const errorMessage = ref('')
const portfolios = ref<MockPortfolioDto[]>([])
const products = ref<ProductDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedPortfolio = ref<MockPortfolioDto>()
const automationPortfolioBizId = ref('')
const performanceCurve = ref<PortfolioPerformancePointDto[]>([])
const orderEvents = ref<PortfolioOrderEventDto[]>([])
const autoRefreshTimer = ref<number>()
const lastAutoRefreshAt = ref<string>()
const portfolioOpen = ref(false)
const portfolioForm = reactive({ portfolioName: '我的模拟组合', baseCurrency: 'CNY', initialCash: 100000 })
const orderForm = reactive({ productBizId: '', amount: 1000 })
const reportOrderForm = reactive({ reportBizId: '', productBizId: '' })
const cancelForm = reactive({ orderBizId: '' })
const rebalanceTargets = ref([{ productBizId: '', targetWeight: 0.4 }])
const tradeMode = ref<'buy' | 'sell' | 'report' | 'cancel'>('buy')
const AUTO_REFRESH_MS = 120000

const metrics = computed(() => [
  { label: 'Mock 组合', value: portfolios.value.length, hint: '仅模拟' },
  { label: '总资产', value: formatMoney(selectedPortfolio.value?.latestValuation?.totalAsset, selectedPortfolio.value?.baseCurrency), hint: '选中组合' },
  { label: '现金', value: formatMoney(selectedPortfolio.value?.latestValuation?.cashBalance, selectedPortfolio.value?.baseCurrency), hint: '可用模拟现金' },
  { label: '累计收益', value: formatPercent(selectedPortfolio.value?.latestValuation?.totalReturnRate), hint: 'Mock 结果' },
])
const valuationCards = computed(() => [
  { label: '总资产', value: formatMoney(selectedPortfolio.value?.latestValuation?.totalAsset, selectedPortfolio.value?.baseCurrency), hint: '现金 + 持仓市值' },
  { label: '现金', value: formatMoney(selectedPortfolio.value?.latestValuation?.cashBalance, selectedPortfolio.value?.baseCurrency), hint: '可用模拟资金' },
  { label: '持仓市值', value: formatMoney(selectedPortfolio.value?.latestValuation?.positionValue, selectedPortfolio.value?.baseCurrency), hint: `${selectedPortfolio.value?.positions?.length || 0} 个持仓` },
  { label: '累计收益', value: formatPercent(selectedPortfolio.value?.latestValuation?.totalReturnRate), hint: '仅 Mock 估算' },
  { label: '浮动盈亏', value: formatMoney(selectedPortfolio.value?.latestValuation?.unrealizedProfit, selectedPortfolio.value?.baseCurrency), hint: '未实现' },
  { label: '已实现盈亏', value: formatMoney(selectedPortfolio.value?.latestValuation?.realizedProfit, selectedPortfolio.value?.baseCurrency), hint: '已成交' },
])
const autoRefreshText = computed(() =>
  lastAutoRefreshAt.value ? `每2分钟 · ${formatDateTime(lastAutoRefreshAt.value)}` : '每2分钟',
)

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
  { title: '产品', key: 'product' },
  { title: '方向', dataIndex: 'positionSide', width: 90 },
  { title: '数量', dataIndex: 'quantity', width: 100 },
  { title: '可用', dataIndex: 'availableQuantity', width: 100 },
  { title: '成本', key: 'cost', width: 120 },
  { title: '操作', key: 'actions', width: 120 },
]
const orderColumns = [
  { title: '订单', dataIndex: 'orderBizId', width: 150 },
  { title: '产品', key: 'product', width: 180 },
  { title: '方向', dataIndex: 'orderSide', width: 90 },
  { title: '事件', dataIndex: 'eventType', width: 110 },
  { title: '状态', key: 'status', width: 100 },
  { title: '金额/数量', key: 'amount', width: 120 },
  { title: '时间', dataIndex: 'eventTime', width: 160 },
  { title: '操作', key: 'actions', width: 80 },
]

const orderRows = computed(() => orderEvents.value.map((event, index) => ({
  rowKey: event.bizId || `${event.orderBizId}-${index}`,
  orderBizId: event.orderBizId,
  productBizId: event.productBizId,
  orderSide: event.orderSide || '-',
  eventType: event.eventType || '-',
  status: event.orderStatus || event.toStatus || '-',
  amount: orderAmountText(event),
  eventTime: formatDateTime(event.occurredAt),
})))
const productOptions = computed(() => products.value.map((item) => ({
  value: item.bizId,
  label: `${item.productName || item.productCode} · ${item.productCode || item.productNo} · ${item.tradeStatus || 'UNKNOWN'}`,
})))
const reportOptions = computed(() => reports.value.map((item) => ({
  value: item.bizId,
  label: `${item.themeName || item.themeCode || item.marketScope || item.requestId} · ${item.status || 'UNKNOWN'} · ${formatDateTime(item.generatedAt || item.createdAt)}`,
})))
const orderOptions = computed(() => orderRows.value
  .filter((item) => item.orderBizId && item.orderBizId !== '-')
  .map((item) => ({
    value: item.orderBizId,
    label: `${productLabel(item.productBizId)} · ${item.eventType} · ${item.status} · ${item.eventTime}`,
  })))

const productLabel = (productBizId?: string) => {
  const product = products.value.find((item) => item.bizId === productBizId)
  if (!product) return productBizId || '-'
  return `${product.productName || product.productCode} · ${product.productCode || product.productNo}`
}

const isAutomationPool = (portfolio?: MockPortfolioDto) =>
  Boolean(portfolio?.bizId && portfolio.bizId === automationPortfolioBizId.value)

const orderAmountText = (event: PortfolioOrderEventDto) => {
  const amount = event.executedAmount ?? event.requestedAmount
  const quantity = event.executedQuantity ?? event.requestedQuantity
  if (amount != null && quantity != null) return `${amount} / ${quantity}`
  if (amount != null) return String(amount)
  if (quantity != null) return String(quantity)
  return '-'
}

const addRebalanceTarget = () => {
  rebalanceTargets.value.push({ productBizId: '', targetWeight: 0 })
}

const removeRebalanceTarget = (index: number) => {
  if (rebalanceTargets.value.length === 1) {
    rebalanceTargets.value = [{ productBizId: '', targetWeight: 0 }]
    return
  }
  rebalanceTargets.value.splice(index, 1)
}

const fillProduct = (position: MockPositionDto, mode: 'buy' | 'sell') => {
  orderForm.productBizId = position.productBizId
  orderForm.amount = mode === 'sell' ? position.availableQuantity || position.quantity || 1 : orderForm.amount
  tradeMode.value = mode
}

const fillCancel = (orderBizId: string) => {
  cancelForm.orderBizId = orderBizId
  tradeMode.value = 'cancel'
}

const applyOrderQuery = () => {
  const orderBizId = typeof route.query.orderBizId === 'string' ? route.query.orderBizId : ''
  if (!orderBizId) return
  cancelForm.orderBizId = orderBizId
  tradeMode.value = 'cancel'
}

const selectPortfolio = async (portfolio: MockPortfolioDto) => {
  selectedPortfolio.value = portfolio
  performanceCurve.value = []
  orderEvents.value = []
  try {
    const [curve, events] = await Promise.all([
      getPortfolioPerformanceCurve({ portfolioBizId: portfolio.bizId, limit: 120 }),
      listPortfolioOrderEvents({ portfolioBizId: portfolio.bizId, limit: 20 }),
    ])
    performanceCurve.value = curve?.valuations || []
    orderEvents.value = Array.isArray(events) ? events : []
    applyOrderQuery()
  } catch (error) {
    message.warning(error instanceof Error ? error.message : '组合子数据加载失败')
  }
}

const startAutoRefresh = () => {
  if (autoRefreshTimer.value) {
    window.clearInterval(autoRefreshTimer.value)
  }
  autoRefreshTimer.value = window.setInterval(() => {
    void refreshValuation(true)
  }, AUTO_REFRESH_MS)
}

const reloadSelectedPortfolio = async () => {
  if (!selectedPortfolio.value) return
  const latest = await getMockPortfolio(selectedPortfolio.value.bizId)
  portfolios.value = portfolios.value.map((item) => item.bizId === latest.bizId ? latest : item)
  await selectPortfolio(latest)
}

const createPortfolio = async () => {
  portfolioSaving.value = true
  try {
    const portfolio = await createMockPortfolio({ ...portfolioForm })
    message.success('Mock 组合已创建')
    portfolioOpen.value = false
    await load(portfolio.bizId)
  } catch (error) {
    message.error(error instanceof Error ? error.message : '组合创建失败')
  } finally {
    portfolioSaving.value = false
  }
}

const buy = async () => {
  if (!selectedPortfolio.value) return
  if (!orderForm.productBizId) {
    message.warning('请选择产品')
    return
  }
  ordering.value = true
  try {
    await buyMockOrder({ portfolioBizId: selectedPortfolio.value.bizId, productBizId: orderForm.productBizId, amount: orderForm.amount, idempotencyKey: `BUY-${Date.now()}` })
    message.success('Mock 买入已提交')
    await reloadSelectedPortfolio()
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '买入失败')
  } finally {
    ordering.value = false
  }
}

const sell = async () => {
  if (!selectedPortfolio.value) return
  if (!orderForm.productBizId) {
    message.warning('请选择产品')
    return
  }
  ordering.value = true
  try {
    await sellMockOrder({ portfolioBizId: selectedPortfolio.value.bizId, productBizId: orderForm.productBizId, quantity: orderForm.amount, idempotencyKey: `SELL-${Date.now()}` })
    message.success('Mock 卖出已提交')
    await reloadSelectedPortfolio()
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '卖出失败')
  } finally {
    ordering.value = false
  }
}

const buyFromReport = async () => {
  if (!selectedPortfolio.value) return
  if (!reportOrderForm.reportBizId) {
    message.warning('请选择投资报告')
    return
  }
  reportOrdering.value = true
  try {
    await buyMockOrderFromReport({
      portfolioBizId: selectedPortfolio.value.bizId,
      reportBizId: reportOrderForm.reportBizId,
      productBizId: reportOrderForm.productBizId,
      idempotencyKey: `REPORT-${Date.now()}`,
    })
    message.success('报告 Mock 买入已提交')
    await reloadSelectedPortfolio()
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '报告买入失败')
  } finally {
    reportOrdering.value = false
  }
}

const cancelOrder = async () => {
  if (!cancelForm.orderBizId) {
    message.warning('请选择订单')
    return
  }
  canceling.value = true
  try {
    await cancelMockOrder({ orderBizId: cancelForm.orderBizId })
    message.success('订单已撤销')
    cancelForm.orderBizId = ''
    await reloadSelectedPortfolio()
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '撤销订单失败')
  } finally {
    canceling.value = false
  }
}

const rebalance = async () => {
  if (!selectedPortfolio.value) return
  const targets = rebalanceTargets.value
    .filter((item) => item.productBizId && Number(item.targetWeight) >= 0)
    .map((item) => ({ productBizId: item.productBizId, targetWeight: Number(item.targetWeight) }))
  if (!targets.length) {
    message.warning('请至少选择一个再平衡目标')
    return
  }
  rebalancing.value = true
  try {
    await executeMockRebalance({ portfolioBizId: selectedPortfolio.value.bizId, targets, minTradeAmount: 100, idempotencyKey: `REBALANCE-${Date.now()}` })
    message.success('再平衡已提交')
    await reloadSelectedPortfolio()
  } catch (error) {
    message.error(error instanceof Error ? `${error.message}；请到 Risk Audit 查看审计原因` : '再平衡失败')
  } finally {
    rebalancing.value = false
  }
}

const refreshValuation = async (silent = false) => {
  if (!selectedPortfolio.value) return
  valuationRefreshing.value = true
  try {
    await refreshPortfolioValuation({ portfolioBizId: selectedPortfolio.value.bizId })
    lastAutoRefreshAt.value = new Date().toISOString()
    if (!silent) message.success('组合估值已刷新')
    await reloadSelectedPortfolio()
  } catch (error) {
    if (!silent) message.error(error instanceof Error ? error.message : '估值刷新失败')
  } finally {
    valuationRefreshing.value = false
  }
}

const load = async (preferredBizId?: string) => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [portfolioPage, productPage, reportPage, automationPortfolio] = await Promise.all([
      listMyMockPortfolios({ page: 1, size: 20, sort: 'createdAt', direction: 'desc' }),
      listProducts({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
      listInvestmentReports({ page: 1, size: 50, sort: 'generatedAt', direction: 'desc' }),
      getAutomationMockPortfolio(),
    ])
    automationPortfolioBizId.value = automationPortfolio.bizId
    const mine = portfolioPage.items || []
    portfolios.value = [
      automationPortfolio,
      ...mine.filter((item) => item.bizId !== automationPortfolio.bizId),
    ]
    products.value = productPage.items || []
    reports.value = reportPage.items || []
    const nextPortfolio = portfolios.value.find((item) => item.bizId === preferredBizId)
      || portfolios.value.find((item) => item.bizId === selectedPortfolio.value?.bizId)
      || portfolios.value[0]
    if (nextPortfolio) await selectPortfolio(nextPortfolio)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模拟交易接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const preferredPortfolioBizId = typeof route.query.portfolioBizId === 'string' ? route.query.portfolioBizId : undefined
  void load(preferredPortfolioBizId)
  startAutoRefresh()
})

onBeforeUnmount(() => {
  if (autoRefreshTimer.value) {
    window.clearInterval(autoRefreshTimer.value)
  }
})
</script>
