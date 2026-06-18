<template>
  <div class="report-detail">
    <header class="report-header">
      <div>
        <div class="report-kicker">{{ report.marketScope }} · {{ report.providerCode }}</div>
        <h2>{{ report.themeName || report.themeCode || '全市场投资分析' }}</h2>
        <div class="muted">
          {{ report.modelCode }} · 生成于 {{ formatDateTime(report.generatedAt) }}
        </div>
      </div>
      <a-tag :color="report.status === 'SUCCEEDED' ? 'success' : 'error'">
        {{ report.status === 'SUCCEEDED' ? '分析完成' : '分析失败' }}
      </a-tag>
    </header>

    <a-alert
      v-if="report.failureReason"
      type="error"
      show-icon
      :message="report.failureReason"
      class="report-alert"
    />

    <section class="metric-grid">
      <div class="metric">
        <span>资讯样本</span>
        <strong>{{ summary.newsCount ?? 0 }}</strong>
        <small>近 {{ trend.lookbackDays ?? '-' }} 天</small>
      </div>
      <div class="metric">
        <span>市场方向</span>
        <strong :class="directionClass">{{ directionLabel }}</strong>
        <small>资讯热度 {{ trend.newsHeat ?? 0 }}</small>
      </div>
      <div class="metric">
        <span>平均收益</span>
        <strong :class="numberClass(summary.averageReturn)">
          {{ formatPercent(summary.averageReturn) }}
        </strong>
        <small>{{ summary.sampleCount ?? 0 }} 个快照样本</small>
      </div>
      <div class="metric">
        <span>模拟期末资金</span>
        <strong>{{ formatMoney(simulation.estimatedFinalCapital) }}</strong>
        <small>初始 {{ formatMoney(simulation.initialCapital) }}</small>
      </div>
    </section>

    <section class="report-section">
      <div class="section-heading">
        <div>
          <span>市场研判</span>
          <h3>趋势与指标</h3>
        </div>
        <a-segmented v-model:value="chartMode" :options="chartModeOptions" size="small" />
      </div>
      <div ref="chartElement" class="trend-chart" />
      <a-empty v-if="!chartSeries.length" description="暂无时序数据" class="chart-empty" />
    </section>

    <section class="report-grid">
      <div class="report-section plan-section">
        <div class="section-heading">
          <div>
            <span>投资方案</span>
            <h3>{{ plan.suggestedAction || '暂无建议' }}</h3>
          </div>
          <a-tag color="blue">{{ plan.planType || 'REFERENCE' }}</a-tag>
        </div>
        <div class="allocation-row">
          <div>
            <span>模拟收益率</span>
            <strong :class="numberClass(simulation.returnRate)">
              {{ formatPercent(simulation.returnRate) }}
            </strong>
          </div>
          <div>
            <span>预计收益</span>
            <strong :class="numberClass(simulation.estimatedProfit)">
              {{ formatMoney(simulation.estimatedProfit) }}
            </strong>
          </div>
        </div>
        <a-alert
          :message="plan.riskNotice || '分析结果仅供参考，不构成投资建议。'"
          type="warning"
          show-icon
        />
      </div>

      <div class="report-section">
        <div class="section-heading">
          <div>
            <span>数据范围</span>
            <h3>分析上下文</h3>
          </div>
        </div>
        <a-descriptions size="small" :column="1">
          <a-descriptions-item label="市场">{{ summary.marketScope || report.marketScope }}</a-descriptions-item>
          <a-descriptions-item label="主题">{{ summary.themeCode || report.themeCode || '全部主题' }}</a-descriptions-item>
          <a-descriptions-item label="最新快照">{{ formatBackendDate(summary.latestSnapshotTime) }}</a-descriptions-item>
          <a-descriptions-item label="请求 ID">{{ report.requestId }}</a-descriptions-item>
        </a-descriptions>
      </div>
    </section>

    <section class="report-section">
      <div class="section-heading">
        <div>
          <span>信息汇总</span>
          <h3>近期资讯</h3>
        </div>
        <span class="muted">共 {{ newsItems.length }} 条</span>
      </div>
      <a-list :data-source="newsItems" item-layout="vertical" :pagination="newsPagination">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>{{ item.title }}</template>
              <template #description>
                {{ item.sourceCode || '未知来源' }} · {{ formatBackendDate(item.publishTime || item.time) }}
              </template>
            </a-list-item-meta>
            <p v-if="item.summary" class="news-summary">{{ decodeHtml(item.summary) }}</p>
          </a-list-item>
        </template>
      </a-list>
    </section>

    <a-collapse v-if="report.promptSnapshot">
      <a-collapse-panel key="prompt" header="分析请求快照">
        <pre class="raw-json">{{ formatJson(report.promptSnapshot) }}</pre>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { BarChart, LineChart } from 'echarts/charts'
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsType } from 'echarts/core'
import type { InvestmentAnalysisReport } from '@/api/types'

echarts.use([
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  CanvasRenderer,
])

type BackendDate = string | number[]
interface SummaryData {
  newsCount?: number
  themeCode?: string
  recentNews?: NewsItem[]
  marketScope?: string
  sampleCount?: number
  averageReturn?: number
  latestSnapshotTime?: BackendDate
}
interface TrendData {
  newsHeat?: number
  direction?: string
  lookbackDays?: number
  averageReturn?: number
}
interface PlanData {
  planType?: string
  riskNotice?: string
  suggestedAction?: string
}
interface SimulationData {
  returnRate?: number
  initialCapital?: number
  estimatedProfit?: number
  estimatedFinalCapital?: number
}
interface NewsItem {
  time?: BackendDate
  publishTime?: BackendDate
  title: string
  summary?: string
  sourceCode?: string
}
interface SeriesItem {
  time: BackendDate
  heatScore?: number
  returnRate?: number
  snapshotType?: string
  momentumScore?: number
}
interface ChartData {
  news?: NewsItem[]
  series?: SeriesItem[]
}

const props = defineProps<{ report: InvestmentAnalysisReport }>()
const summary = computed(() => parseJson<SummaryData>(props.report.investmentSummary, {}))
const trend = computed(() => parseJson<TrendData>(props.report.trend, {}))
const plan = computed(() => parseJson<PlanData>(props.report.investmentPlan, {}))
const simulation = computed(() => parseJson<SimulationData>(props.report.simulatedReturn, {}))
const chart = computed(() => parseJson<ChartData>(props.report.chartPayload, {}))
const newsItems = computed(() => summary.value.recentNews || chart.value.news || [])
const chartSeries = computed(() => chart.value.series || [])
const chartElement = ref<HTMLElement>()
const chartMode = ref<'all' | 'return' | 'momentum' | 'heat'>('all')
const chartModeOptions = [
  { label: '综合', value: 'all' },
  { label: '收益', value: 'return' },
  { label: '动量', value: 'momentum' },
  { label: '热度', value: 'heat' },
]
const newsPagination = computed(() =>
  newsItems.value.length > 5 ? { pageSize: 5, size: 'small' as const } : false,
)
const directionLabel = computed(() => {
  const labels: Record<string, string> = { UP: '上行', DOWN: '下行', FLAT: '震荡' }
  return labels[trend.value.direction || ''] || trend.value.direction || '-'
})
const directionClass = computed(() =>
  trend.value.direction === 'UP' ? 'positive' : trend.value.direction === 'DOWN' ? 'negative' : '',
)

let chartInstance: EChartsType | undefined
let resizeObserver: ResizeObserver | undefined

const renderChart = async () => {
  await nextTick()
  if (!chartElement.value || !chartSeries.value.length) {
    chartInstance?.clear()
    return
  }
  chartInstance ||= echarts.init(chartElement.value)
  const rows = [...chartSeries.value].sort(
    (a, b) => backendDateValue(a.time) - backendDateValue(b.time),
  )
  const dataFor = (
    field: 'returnRate' | 'momentumScore' | 'heatScore',
    types: string[],
  ) =>
    rows
      .filter((item) => types.includes(item.snapshotType || ''))
      .map((item) => [backendDateValue(item.time), Number(item[field] || 0)])
  const series = [
    {
      name: '收益率',
      type: 'line',
      showSymbol: false,
      smooth: true,
      yAxisIndex: 0,
      data: dataFor('returnRate', ['RETURN']).map(([time, value]) => [time, Number(value) * 100]),
      lineStyle: { width: 2, color: '#1677ff' },
      itemStyle: { color: '#1677ff' },
    },
    {
      name: '动量',
      type: 'line',
      showSymbol: false,
      smooth: true,
      yAxisIndex: 1,
      data: dataFor('momentumScore', ['MOMENTUM']),
      lineStyle: { width: 2, color: '#52c41a' },
      itemStyle: { color: '#52c41a' },
    },
    {
      name: '资讯热度',
      type: 'bar',
      yAxisIndex: 1,
      data: dataFor('heatScore', ['NEWS_HEAT', 'HEAT']),
      itemStyle: { color: '#faad14', opacity: 0.65 },
      barMaxWidth: 10,
    },
  ].filter((_, index) => chartMode.value === 'all' || chartMode.value === ['return', 'momentum', 'heat'][index])

  chartInstance.setOption(
    {
      animationDuration: 350,
      color: ['#1677ff', '#52c41a', '#faad14'],
      grid: { left: 54, right: 54, top: 42, bottom: 54 },
      legend: { top: 4 },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value: unknown) => Number(value).toFixed(2),
      },
      xAxis: {
        type: 'time',
        axisLabel: { hideOverlap: true, color: '#8c8c8c' },
        splitLine: { show: false },
      },
      yAxis: [
        {
          type: 'value',
          name: '收益率 %',
          axisLabel: { formatter: '{value}%' },
          splitLine: { lineStyle: { color: '#f0f0f0' } },
        },
        {
          type: 'value',
          name: '分数',
          splitLine: { show: false },
        },
      ],
      dataZoom: [{ type: 'inside' }, { type: 'slider', height: 18, bottom: 8 }],
      series,
    },
    true,
  )
}

const parseJson = <T,>(value: string | undefined, fallback: T): T => {
  if (!value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}
const backendDateValue = (value?: BackendDate) => {
  if (!value) return 0
  if (Array.isArray(value)) {
    const [year, month, day, hour = 0, minute = 0, second = 0, nanos = 0] = value
    return new Date(year, month - 1, day, hour, minute, second, Math.floor(nanos / 1_000_000)).getTime()
  }
  return new Date(value).getTime()
}
const formatBackendDate = (value?: BackendDate) => {
  const timestamp = backendDateValue(value)
  return timestamp ? new Date(timestamp).toLocaleString('zh-CN', { hour12: false }) : '-'
}
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatMoney = (value?: number) =>
  typeof value === 'number'
    ? new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(value)
    : '-'
const numberClass = (value?: number) => (value && value > 0 ? 'positive' : value && value < 0 ? 'negative' : '')
const decodeHtml = (value: string) => {
  const element = document.createElement('textarea')
  element.innerHTML = value
  return element.value
}
const formatJson = (value?: string) => {
  if (!value) return '-'
  try {
    return JSON.stringify(JSON.parse(value), null, 2)
  } catch {
    return value
  }
}

watch([chartSeries, chartMode], renderChart, { deep: true })
onMounted(() => {
  renderChart()
  if (chartElement.value) {
    resizeObserver = new ResizeObserver(() => chartInstance?.resize())
    resizeObserver.observe(chartElement.value)
  }
})
onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chartInstance?.dispose()
})
</script>

<style scoped>
.report-detail {
  color: #262626;
}

.report-header,
.section-heading,
.allocation-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.report-header {
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.report-header h2 {
  margin: 4px 0 6px;
  font-size: 24px;
  letter-spacing: 0;
}

.report-kicker,
.section-heading span,
.metric span,
.allocation-row span {
  color: #8c8c8c;
  font-size: 12px;
}

.report-alert {
  margin-top: 16px;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin: 20px 0;
  overflow: hidden;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
}

.metric {
  min-width: 0;
  padding: 16px;
  background: #fff;
}

.metric strong,
.allocation-row strong {
  display: block;
  margin: 5px 0 2px;
  overflow-wrap: anywhere;
  font-size: 22px;
}

.metric small {
  color: #8c8c8c;
}

.report-section {
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
}

.section-heading {
  align-items: center;
  margin-bottom: 16px;
}

.section-heading h3 {
  margin: 2px 0 0;
  font-size: 18px;
}

.trend-chart {
  width: 100%;
  height: 360px;
}

.chart-empty {
  margin-top: -360px;
  padding-top: 120px;
  height: 360px;
}

.report-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 1fr);
  gap: 24px;
}

.plan-section .allocation-row {
  margin: 8px 0 18px;
}

.allocation-row > div {
  flex: 1;
}

.news-summary {
  margin: 0;
  color: #595959;
  line-height: 1.65;
}

.raw-json {
  max-height: 260px;
  margin: 0;
  overflow: auto;
  white-space: pre-wrap;
}

.positive {
  color: #cf1322;
}

.negative {
  color: #389e0d;
}

@media (max-width: 800px) {
  .metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
