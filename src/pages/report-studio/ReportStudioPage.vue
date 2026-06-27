<template>
  <BusinessPageShell
    compact
    title="Report Studio 投资报告"
    description="先看门禁、结论和图表；细节下钻，JSON 只做证据。"
    :endpoints="[endpoints.report.list, endpoints.report.generate]"
    :icon="FileSearchOutlined"
    status-text="REPORT"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <div class="report-workbench">
        <aside class="report-sidebar page-card">
          <div class="report-sidebar__head">
            <div>
              <span class="eyebrow">REPORTS</span>
              <h3>报告</h3>
            </div>
            <a-tag color="blue">{{ summary.total }}</a-tag>
          </div>

          <div class="report-generate-bar">
            <a-input v-model:value="generateForm.themeCode" placeholder="主题，如 GOLD" />
            <a-input-number v-model:value="generateForm.lookbackDays" :min="1" :max="365" />
            <a-button type="primary" :loading="generating" @click="generateReport">
              <template #icon><FileTextOutlined /></template>
              生成
            </a-button>
          </div>

          <a-list :data-source="reportViews" size="small" class="report-list">
            <template #renderItem="{ item }">
              <a-list-item
                class="report-list-item"
                :class="{ 'report-list-item--active': item.bizId === selectedReport?.bizId }"
                @click="selectReport(item)"
              >
                <div class="report-list-item__main">
                  <div class="report-list-item__head">
                    <strong>{{ item.themeName || item.themeCode || item.bizId }}</strong>
                    <a-tag :color="reportQualityGatePassed(item) ? 'green' : 'orange'">
                      {{ reportQualityGatePassed(item) ? '通过' : '缺口' }}
                    </a-tag>
                  </div>
                  <div class="report-list-item__meta">
                    <span>{{ formatDateTime(item.generatedAt || item.createdAt) }}</span>
                    <span>{{ item.confidenceLevel || '-' }}</span>
                  </div>
                  <div class="report-list-item__signals">
                    <span>质量 {{ formatPercent(item.normalizedQualityScore) }}</span>
                    <span>序列 {{ item.seriesCount }}</span>
                    <span>新闻 {{ item.newsCount }}</span>
                  </div>
                </div>
              </a-list-item>
            </template>
            <template #empty><EmptyEvidence description="暂无投资报告。" /></template>
          </a-list>
        </aside>

        <main class="report-main page-card">
          <EmptyEvidence v-if="!selectedReportView" description="请选择报告查看结论和图表。" />
          <template v-else>
            <section class="report-brief" :class="{ 'report-brief--blocked': !reportQualityGatePassed(selectedReportView) }">
              <div class="report-brief__copy">
                <a-space wrap>
                  <a-tag :color="gateAlertType === 'success' ? 'green' : gateAlertType === 'error' ? 'red' : 'orange'">
                    {{ gateHeadline }}
                  </a-tag>
                  <StatusTag :value="selectedReportView.status" :options="investmentAnalysisStatusOptions" />
                  <a-tag>{{ selectedReportView.providerCode || '-' }} / {{ selectedReportView.modelCode || '-' }}</a-tag>
                </a-space>
                <h2>{{ reportTitle }}</h2>
                <p>{{ conciseConclusion }}</p>
              </div>

              <div class="report-brief__stats">
                <div v-for="stat in coreStats" :key="stat.label" class="report-core-stat">
                  <span>{{ stat.label }}</span>
                  <strong>{{ stat.value }}</strong>
                  <small>{{ stat.hint }}</small>
                </div>
              </div>
            </section>

            <section class="report-chart-panel">
              <div class="report-panel-head">
                <div>
                  <span class="eyebrow">CHART</span>
                  <h3>收益 / 动量 / 热度</h3>
                </div>
                <a-space wrap>
                  <a-tag color="blue">series {{ selectedReportView.seriesCount }}</a-tag>
                  <a-tag :color="selectedReportView.newsCount ? 'green' : 'default'">news {{ selectedReportView.newsCount }}</a-tag>
                </a-space>
              </div>
              <a-alert
                v-if="!reportQualityGatePassed(selectedReportView)"
                class="mb-12"
                type="warning"
                show-icon
                message="门禁未通过：图表仅用于观察数据缺口，不生成投资建议。"
              />
              <BusinessChart
                :empty="selectedReportView.seriesCount === 0"
                empty-text="暂无可绘制时间序列；不会生成假图表。"
                :option="reportChartOption"
              />
              <div class="report-news-strip">
                <template v-if="selectedReportView.newsCount">
                  <span v-for="news in selectedReportView.chartPayloadView.news.slice(0, 3)" :key="`${news.time}-${news.title}`">
                    {{ formatDateTime(news.time) }} · {{ news.title }}
                  </span>
                </template>
                <span v-else>暂无可关联新闻事件；主图行情与主题序列仍有效。</span>
              </div>
            </section>

            <section class="report-action-row">
              <a-button :disabled="!promptAllowed" @click="go('/prompt-lab')">
                <template #icon><ExperimentOutlined /></template>
                {{ promptAllowed ? '生成 Prompt' : '数据不足，先补采集' }}
              </a-button>
              <a-button :disabled="!mockAllowed" @click="go('/simulation')">
                <template #icon><ShoppingCartOutlined /></template>
                Mock 买入
              </a-button>
              <a-button @click="go('/review-loop')">
                <template #icon><LineChartOutlined /></template>
                回测
              </a-button>
            </section>

            <a-tabs class="report-detail-tabs">
              <a-tab-pane key="summary" tab="结论">
                <div class="report-info-grid">
                  <div class="report-info-block">
                    <span class="eyebrow">SUMMARY</span>
                    <h3>投资摘要</h3>
                    <div class="report-metric-grid">
                      <div class="report-metric">
                        <span>样本数</span>
                        <strong>{{ selectedReportView.investmentSummaryView?.sampleCount ?? '-' }}</strong>
                      </div>
                      <div class="report-metric">
                        <span>新闻数</span>
                        <strong>{{ selectedReportView.investmentSummaryView?.newsCount ?? '-' }}</strong>
                      </div>
                      <div class="report-metric">
                        <span>平均收益</span>
                        <strong>{{ formatPercent(selectedReportView.investmentSummaryView?.averageReturn) }}</strong>
                      </div>
                      <div class="report-metric">
                        <span>平均热度</span>
                        <strong>{{ formatNumber(selectedReportView.investmentSummaryView?.averageHeat) }}</strong>
                      </div>
                    </div>
                  </div>

                  <div class="report-info-block" :class="{ 'report-info-block--muted': !reportQualityGatePassed(selectedReportView) }">
                    <span class="eyebrow">PLAN</span>
                    <h3>投资方案</h3>
                    <p>{{ selectedReportView.investmentPlanView?.suggestedAction || '-' }}</p>
                    <div class="report-plan-line">
                      <span>仓位 {{ formatPercent(planAllocationRate) }}</span>
                      <span>金额 {{ formatMoney(planAmount) }}</span>
                    </div>
                    <small>{{ selectedReportView.investmentPlanView?.riskNotice || 'AI 分析仅为辅助信息。' }}</small>
                  </div>
                </div>
              </a-tab-pane>

              <a-tab-pane key="gate" tab="门禁">
                <a-descriptions bordered size="small" :column="{ xs: 1, md: 2 }">
                  <a-descriptions-item label="可信等级">{{ selectedReportView.confidenceLevel || '-' }}</a-descriptions-item>
                  <a-descriptions-item label="质量分">{{ formatPercent(selectedReportView.normalizedQualityScore) }}</a-descriptions-item>
                  <a-descriptions-item label="样本数">{{ selectedReportView.dataQualityGateView?.snapshotCount ?? selectedReportView.investmentSummaryView?.sampleCount ?? '-' }}</a-descriptions-item>
                  <a-descriptions-item label="新闻数">{{ selectedReportView.dataQualityGateView?.newsCount ?? selectedReportView.investmentSummaryView?.newsCount ?? '-' }}</a-descriptions-item>
                  <a-descriptions-item label="说明" :span="2">{{ reportGateMessage(selectedReportView) }}</a-descriptions-item>
                  <a-descriptions-item label="原因" :span="2">
                    <a-space v-if="gateReasons.length" wrap>
                      <a-tag v-for="reason in gateReasons" :key="reason" color="orange">{{ reason }}</a-tag>
                    </a-space>
                    <span v-else>-</span>
                  </a-descriptions-item>
                  <a-descriptions-item label="允许动作" :span="2">
                    <a-space v-if="selectedReportView.allowedActions.length" wrap>
                      <a-tag v-for="action in selectedReportView.allowedActions" :key="action" color="blue">{{ action }}</a-tag>
                    </a-space>
                    <span v-else>按状态与门禁自动降级</span>
                  </a-descriptions-item>
                </a-descriptions>
              </a-tab-pane>

              <a-tab-pane key="simulation" tab="模拟">
                <div class="return-scenario-grid">
                  <div class="return-scenario">
                    <span>本金</span>
                    <strong>{{ formatMoney(simulatedPrincipal) }}</strong>
                    <small>初始资金 {{ formatMoney(selectedReportView.simulatedReturnView?.initialCapital) }}</small>
                  </div>
                  <div class="return-scenario">
                    <span>基准收益</span>
                    <strong>{{ formatMoney(selectedReportView.simulatedReturnView?.estimatedProfit) }}</strong>
                    <small>期末 {{ formatMoney(selectedReportView.simulatedReturnView?.estimatedFinalCapital) }}</small>
                  </div>
                  <div class="return-scenario return-scenario--stress">
                    <span>压力情景</span>
                    <strong>{{ formatMoney(selectedReportView.simulatedReturnView?.stressLoss) }}</strong>
                    <small>使用历史样本估算</small>
                  </div>
                  <div class="return-scenario return-scenario--optimistic">
                    <span>乐观情景</span>
                    <strong>{{ formatMoney(selectedReportView.simulatedReturnView?.optimisticProfit) }}</strong>
                    <small>收益率 {{ formatPercent(selectedReportView.simulatedReturnView?.returnRate) }}</small>
                  </div>
                </div>
                <a-alert class="mt-12" type="info" show-icon :message="selectedReportView.simulatedReturnView?.assumption || '模拟收益只反映历史样本，不代表未来收益。'" />
              </a-tab-pane>

              <a-tab-pane key="evidence" tab="证据">
                <a-collapse ghost>
                  <a-collapse-panel key="debug" header="调试 JSON">
                    <a-row :gutter="[16, 16]">
                      <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView.investmentSummaryView" :raw="selectedReportView.investmentSummary" /></a-col>
                      <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView.trendView" :raw="selectedReportView.trend" /></a-col>
                      <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView.investmentPlanView" :raw="selectedReportView.investmentPlan" /></a-col>
                      <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView.chartPayloadView" :raw="selectedReportView.chartPayload" /></a-col>
                    </a-row>
                  </a-collapse-panel>
                </a-collapse>
              </a-tab-pane>
            </a-tabs>
          </template>
        </main>
      </div>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import {
  ExperimentOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  LineChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatMoney, formatPercent } from '@/shared/utils/format'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { generateInvestmentReport, listInvestmentReports } from '@/entities/report/api'
import {
  normalizeReport,
  reportActionAllowed,
  reportGateMessage,
  reportQualityGatePassed,
  summarizeReports,
  type ReportView,
} from '@/entities/report/adapter'
import { investmentAnalysisStatusOptions } from '@/entities/report/dictionary'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'

const router = useRouter()
const loading = ref(false)
const generating = ref(false)
const errorMessage = ref('')
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedReport = ref<InvestmentAnalysisReportDto>()
const generateForm = reactive({
  providerCode: 'OPENAI_COMPATIBLE',
  modelCode: 'openai-compatible-analysis',
  marketScope: 'CN_MAINLAND',
  themeCode: '',
  lookbackDays: 30,
  initialCapital: 100000,
})

const reportViews = computed(() => reports.value.map(normalizeReport))
const selectedReportView = computed(() => selectedReport.value ? normalizeReport(selectedReport.value) : undefined)
const summary = computed(() => summarizeReports(reports.value))
const gateReasons = computed(() => [
  ...(selectedReportView.value?.dataQualityGateView?.reasons || []),
  ...(selectedReportView.value?.dataQualityGateView?.missingReasons || []),
  ...(selectedReportView.value?.investmentSummaryView?.dataGapReasons || []),
])

const gateAlertType = computed(() => {
  if (selectedReportView.value?.status !== 'SUCCEEDED') return 'error'
  return selectedReportView.value && reportQualityGatePassed(selectedReportView.value) ? 'success' : 'warning'
})
const gateHeadline = computed(() => {
  if (selectedReportView.value?.status !== 'SUCCEEDED') return '生成失败'
  return selectedReportView.value && reportQualityGatePassed(selectedReportView.value) ? '门禁通过' : '数据缺口'
})
const reportTitle = computed(() =>
  selectedReportView.value?.themeName
  || selectedReportView.value?.themeCode
  || selectedReportView.value?.bizId
  || '投资报告',
)
const conciseConclusion = computed(() => {
  if (!selectedReportView.value) return ''
  return selectedReportView.value.investmentPlanView?.suggestedAction
    || reportGateMessage(selectedReportView.value)
    || '请选择报告查看结构化结论。'
})
const coreStats = computed(() => [
  {
    label: '质量',
    value: formatPercent(selectedReportView.value?.normalizedQualityScore),
    hint: selectedReportView.value?.confidenceLevel || '-',
  },
  {
    label: '趋势',
    value: selectedReportView.value?.trendView?.direction || '-',
    hint: `${selectedReportView.value?.trendView?.lookbackDays ?? '-'} 天`,
  },
  {
    label: '样本',
    value: String(selectedReportView.value?.investmentSummaryView?.sampleCount ?? selectedReportView.value?.dataQualityGateView?.snapshotCount ?? '-'),
    hint: `新闻 ${selectedReportView.value?.investmentSummaryView?.newsCount ?? selectedReportView.value?.dataQualityGateView?.newsCount ?? '-'}`,
  },
  {
    label: '序列',
    value: String(selectedReportView.value?.seriesCount ?? 0),
    hint: `事件 ${selectedReportView.value?.newsCount ?? 0}`,
  },
])
const planAllocationRate = computed(() =>
  selectedReportView.value?.investmentPlanView?.referenceAllocationRate
  ?? selectedReportView.value?.investmentPlanView?.allocationRate,
)
const planAmount = computed(() =>
  selectedReportView.value?.investmentPlanView?.referenceAllocationAmount
  ?? selectedReportView.value?.investmentPlanView?.amount,
)
const simulatedPrincipal = computed(() =>
  selectedReportView.value?.simulatedReturnView?.simulatedPrincipal
  ?? selectedReportView.value?.simulatedReturnView?.principal,
)
const promptAllowed = computed(() =>
  selectedReport.value ? reportActionAllowed(selectedReport.value, 'GENERATE_PROMPT') : false,
)
const mockAllowed = computed(() =>
  selectedReport.value ? reportActionAllowed(selectedReport.value, 'MOCK_TRADE') : false,
)

const reportChartOption = computed(() => {
  const series = selectedReportView.value?.chartPayloadView.series || []
  return {
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: unknown) => typeof value === 'number' ? formatNumber(value) : String(value ?? '-'),
    },
    legend: { data: ['收益率', '动量', '热度'], top: 0 },
    grid: { left: 46, right: 46, top: 46, bottom: 34 },
    xAxis: { type: 'category', data: series.map((item) => formatDateTime(item.time)) },
    yAxis: [
      {
        type: 'value',
        name: '收益率',
        axisLabel: { formatter: (value: number) => `${(value * 100).toFixed(0)}%` },
      },
      { type: 'value', name: '评分' },
    ],
    series: [
      { name: '收益率', type: 'line', yAxisIndex: 0, data: series.map((item) => item.returnRate ?? null), smooth: true, symbolSize: 3 },
      { name: '动量', type: 'line', yAxisIndex: 1, data: series.map((item) => item.momentumScore ?? null), smooth: true, symbolSize: 3 },
      { name: '热度', type: 'line', yAxisIndex: 1, data: series.map((item) => item.heatScore ?? null), smooth: true, symbolSize: 3 },
    ],
  }
})

const formatNumber = (value?: number) =>
  typeof value === 'number' ? value.toLocaleString('zh-CN', { maximumFractionDigits: 4 }) : '-'

const go = (path: string) => router.push(path)
const selectReport = (report: InvestmentAnalysisReportDto | ReportView) => { selectedReport.value = report }

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listInvestmentReports({ page: 1, size: 30, sort: 'generatedAt', direction: 'desc' })
    reports.value = page.items || []
    selectedReport.value = reports.value[0]
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '投资报告接口加载失败'
  } finally {
    loading.value = false
  }
}

const generateReport = async () => {
  generating.value = true
  try {
    const report = await generateInvestmentReport({ ...generateForm, themeCode: generateForm.themeCode || undefined })
    message.success('报告生成任务已返回')
    selectedReport.value = report
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '生成失败')
  } finally {
    generating.value = false
  }
}

onMounted(load)
</script>
