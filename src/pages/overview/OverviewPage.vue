<template>
  <BusinessPageShell
    title="Overview 投资驾驶舱"
    description="按自动闭环主链路展示数据质量、报告、Prompt、Mock、回测与风控状态。第一屏直接看真实运行状态，不做欢迎页。"
    :endpoints="[
      endpoints.closedLoop.runs,
      endpoints.aiSkill.list,
      endpoints.aiModelSkill.list,
      endpoints.dataSource.list,
      endpoints.report.list,
      endpoints.portfolio.mine,
      endpoints.risk.checks,
    ]"
    :icon="FundProjectionScreenOutlined"
    status-text="CLOSED LOOP"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <section class="runtime-control-bar page-card">
        <div class="runtime-control-bar__signal">
          <span class="runtime-pulse" :class="{ 'runtime-pulse--paused': !autoRefreshEnabled }" />
          <div>
            <span class="eyebrow">LIVE RUNTIME</span>
            <strong>{{ runtimeStatusText }}</strong>
          </div>
        </div>
        <div class="runtime-control-bar__meter">
          <div class="runtime-control-bar__meta">
            <span>{{ refreshCountdownText }}</span>
            <span>上次刷新 {{ lastRefreshText }}</span>
          </div>
          <a-progress :percent="refreshProgress" :show-info="false" size="small" />
        </div>
        <a-space wrap>
          <a-switch v-model:checked="autoRefreshEnabled" checked-children="自动" un-checked-children="暂停" />
          <a-button :loading="refreshing" @click="manualRefresh">立即刷新</a-button>
        </a-space>
      </section>

      <section class="ops-command-grid">
        <div class="ops-command-card ops-command-card--primary">
          <span class="eyebrow">CURRENT RUN</span>
          <div class="ops-command-card__title">
            <strong>{{ latestRun?.runNo || '暂无闭环运行' }}</strong>
            <StatusTag :value="latestRun?.runStatus || 'NO_RUN'" :options="closedLoopRunStatusOptions" />
          </div>
          <p>{{ latestRunSignal }}</p>
          <div class="ops-command-card__meta">
            <span>质量 {{ formatPercent(latestRun?.qualityScore) }}</span>
            <span>门禁 {{ latestRun?.gateResult || '-' }}</span>
            <span>{{ formatDateTime(latestRun?.startedAt) }}</span>
          </div>
        </div>

        <div class="ops-command-card" :class="{ 'ops-command-card--blocked': latestReportBlocked }">
          <span class="eyebrow">REPORT GATE</span>
          <div class="ops-command-card__title">
            <strong>{{ latestReportView?.themeName || latestReportView?.themeCode || '暂无报告' }}</strong>
            <a-tag :color="latestReportBlocked ? 'orange' : 'green'">{{ latestReportView?.confidenceLevel || '-' }}</a-tag>
          </div>
          <p>{{ latestReportGateText }}</p>
          <div class="ops-command-card__meta">
            <span>质量 {{ formatPercent(latestReportView?.normalizedQualityScore) }}</span>
            <span>序列 {{ latestReportView?.seriesCount ?? 0 }}</span>
            <span>新闻 {{ latestReportView?.newsCount ?? 0 }}</span>
          </div>
        </div>

        <div class="ops-command-card" :class="{ 'ops-command-card--blocked': !realDataReady }">
          <span class="eyebrow">REAL DATA</span>
          <div class="ops-readiness-grid">
            <div v-for="item in readinessItems" :key="item.label" class="ops-readiness-item" :class="{ 'ops-readiness-item--ok': item.ready }">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
              <small>{{ item.hint }}</small>
            </div>
          </div>
        </div>
      </section>

      <section class="closed-loop-workbench page-card">
        <aside class="run-tree-panel">
          <div class="run-tree-panel__head">
            <div>
              <span class="eyebrow">RUN TREE</span>
              <h3>运行实例</h3>
            </div>
            <a-tag>{{ closedLoopRuns.length }}</a-tag>
          </div>
          <a-input-search
            v-model:value="runKeyword"
            class="run-tree-search"
            placeholder="搜索运行号 / 状态 / 门禁 / 任务"
            allow-clear
          />
          <div class="run-tree-list">
            <EmptyEvidence
              v-if="!filteredRunOptions.length"
              description="暂无自动闭环运行记录，可先在采集编排页触发自动闭环任务。"
            />
            <button
              v-for="option in filteredRunOptions"
              v-else
              :key="option.value"
              type="button"
              class="run-tree-node"
              :class="[runStatusClass(option.run.runStatus), { 'run-tree-node--active': option.value === selectedRunBizId }]"
              :aria-pressed="option.value === selectedRunBizId"
              @click="selectRun(option.value)"
            >
              <span class="run-tree-node__branch" />
              <span class="run-tree-node__main">
                <span class="run-tree-node__title">
                  <strong>{{ option.run.runNo || option.run.bizId }}</strong>
                  <StatusTag :value="option.run.runStatus" :options="closedLoopRunStatusOptions" />
                </span>
                <span class="run-tree-node__reason">{{ runNodeReason(option.run) }}</span>
                <span class="run-tree-node__meta">
                  <small>{{ formatDateTime(option.run.startedAt) }}</small>
                  <small>质量 {{ formatPercent(option.run.qualityScore) }}</small>
                  <small>门禁 {{ option.run.gateResult || '-' }}</small>
                </span>
              </span>
            </button>
          </div>
        </aside>

        <section class="closed-loop-timeline-panel">
          <div class="closed-loop-timeline-panel__head">
            <div>
              <span class="eyebrow">RUN TIMELINE</span>
              <h3>自动闭环时间线</h3>
            </div>
            <StatusTag :value="selectedRun?.runStatus" :options="closedLoopRunStatusOptions" />
          </div>
          <div v-if="selectedRun" class="selected-run-summary">
            <strong>{{ selectedRun.runNo || selectedRun.bizId }}</strong>
            <span>{{ formatDateTime(selectedRun.startedAt) }}</span>
            <span>质量 {{ formatPercent(selectedRun.qualityScore) }}</span>
            <span>门禁 {{ selectedRun.gateResult || '-' }}</span>
          </div>
          <EmptyEvidence
            v-if="!closedLoopRuns.length"
            description="暂无自动闭环运行记录，可先在采集编排页触发自动闭环任务。"
          />
          <ClosedLoopTimeline
            v-else
            :run="selectedRun"
            @select-step="openStep"
          />
        </section>

        <AutomationGuardPanel
          :allow-mock="Boolean(selectedRun && selectedRun.gateResult !== 'BLOCK')"
          :gate-result="selectedRun?.gateResult"
          :run-status="selectedRun?.runStatus"
        />
      </section>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="8">
          <a-card class="page-card" :bordered="false" title="机会雷达">
            <a-list :data-source="reports" size="small">
              <template #renderItem="{ item }">
                <a-list-item @click="navigate('/report-studio')" class="clickable-row">
                  <a-list-item-meta
                    :title="item.themeName || item.themeCode || item.bizId"
                    :description="item.investmentSummary || item.failureReason || '报告已生成，等待详情解析'"
                  />
                  <QualityBar :value="normalizeReport(item).normalizedQualityScore" label="质量" />
                </a-list-item>
              </template>
              <template #empty>
                <EmptyEvidence description="暂无投资报告。" />
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="8">
          <ActionQueue :items="actionQueue" />
        </a-col>
        <a-col :xs="24" :xl="8">
          <a-card class="page-card" :bordered="false" title="风险审计流">
            <a-list :data-source="riskChecks" size="small">
              <template #renderItem="{ item }">
                <a-list-item @click="navigate('/risk-audit')" class="clickable-row">
                  <a-list-item-meta
                    :title="normalizeRiskCheck(item).targetTypeView || item.ruleCode || '风控检查'"
                    :description="item.reasonMessage || item.reasonCode || item.detail || '查看审计详情'"
                  />
                  <RiskReasonTag :reason-code="item.reasonCode" :risk-level="item.riskLevel" />
                </a-list-item>
              </template>
              <template #empty>
                <EmptyEvidence description="暂无风控拦截记录。" />
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :lg="12">
          <a-card class="page-card" :bordered="false" title="Mock 资产摘要">
            <a-table
              size="small"
              row-key="bizId"
              :pagination="false"
              :data-source="portfolios"
              :columns="portfolioColumns"
            />
          </a-card>
        </a-col>
        <a-col :xs="24" :lg="12">
          <a-card class="page-card" :bordered="false" title="回测摘要">
            <a-table
              size="small"
              row-key="bizId"
              :pagination="false"
              :data-source="backtests"
              :columns="backtestColumns"
            />
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="detailOpen" width="720" title="闭环步骤证据">
      <a-descriptions v-if="selectedStep" bordered size="small" :column="1">
        <a-descriptions-item label="节点">{{ selectedStep.displayName }}</a-descriptions-item>
        <a-descriptions-item label="状态">
          <StatusTag :value="selectedStep.stepStatus" :options="closedLoopStepStatusOptions" />
        </a-descriptions-item>
        <a-descriptions-item label="失败/阻断">{{ selectedStep.failureReason || '-' }}</a-descriptions-item>
      </a-descriptions>
      <section v-if="stepEvidenceCards.length" class="step-evidence-grid">
        <div v-for="item in stepEvidenceCards" :key="item.label" class="step-evidence-card">
          <span class="eyebrow">{{ item.kind }}</span>
          <strong>{{ item.label }}</strong>
          <p>{{ item.value }}</p>
        </div>
      </section>
      <a-divider>闭环产物追溯</a-divider>
      <div class="step-trace-list">
        <EmptyEvidence
          v-if="!selectedStepTraceItems.length"
          description="这个节点没有返回可跳转的产物 ID；可在输入/输出摘要中查看任务执行证据。"
        />
        <div v-for="item in selectedStepTraceItems" :key="`${item.kind}-${item.value}`" class="step-trace-card">
          <div>
            <span class="eyebrow">{{ item.kind }}</span>
            <strong>{{ item.title }}</strong>
            <small>{{ item.value }}</small>
          </div>
          <a-button size="small" type="primary" @click="router.push(item.to)">查看</a-button>
        </div>
      </div>
      <div v-if="promptArtifact" class="prompt-artifact-card">
        <div class="prompt-artifact-card__head">
          <div>
            <span class="eyebrow">PROMPT ARTIFACT</span>
            <strong>{{ promptArtifact.promptCode }}@{{ promptArtifact.promptVersion }}</strong>
          </div>
          <a-tag :color="promptArtifact.readyForModel ? 'green' : 'orange'">
            {{ promptArtifact.readyForModel ? '可用于后续模型' : '变量未就绪' }}
          </a-tag>
        </div>
        <a-space v-if="promptArtifact.missingVariables.length" wrap>
          <a-tag v-for="name in promptArtifact.missingVariables" :key="name" color="orange">{{ name }}</a-tag>
        </a-space>
        <p>{{ promptArtifact.renderedPromptPreview }}</p>
      </div>
      <a-divider>输入摘要</a-divider>
      <JsonPreview :value="selectedStep?.inputJson" :raw="selectedStep?.inputSummary" />
      <a-divider>输出摘要</a-divider>
      <JsonPreview :value="selectedStep?.outputJson" :raw="selectedStep?.outputSummary" />
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { FundProjectionScreenOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatMoney, formatPercent } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import QualityBar from '@/shared/components/visual/QualityBar.vue'
import RiskReasonTag from '@/shared/components/visual/RiskReasonTag.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listClosedLoopRuns, getClosedLoopRunDetail } from '@/entities/closed-loop/api'
import { normalizeClosedLoopRun, summarizeClosedLoopRuns, type ClosedLoopRunView, type ClosedLoopStepView } from '@/entities/closed-loop/adapter'
import { closedLoopRunStatusOptions, closedLoopStepStatusOptions } from '@/entities/closed-loop/dictionary'
import { listAiSkills } from '@/entities/ai-skill/api'
import { listAiModelSkillBindings } from '@/entities/ai-model-skill/api'
import { listDataSources } from '@/entities/data-source/api'
import type { DataSourceDto } from '@/entities/data-source/model'
import { listTaskExecutions } from '@/entities/task/api'
import type { ScheduledTaskExecutionDto } from '@/entities/task/model'
import { listInvestmentReports } from '@/entities/report/api'
import { normalizeReport, reportGateMessage, reportQualityGatePassed, type ReportView } from '@/entities/report/adapter'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { listProducts } from '@/entities/product/api'
import type { ProductDto } from '@/entities/product/model'
import { listMyMockPortfolios } from '@/entities/portfolio/api'
import type { MockPortfolioDto } from '@/entities/portfolio/model'
import { listRiskChecks } from '@/entities/risk/api'
import { normalizeRiskCheck } from '@/entities/risk/adapter'
import type { RiskCheckDto } from '@/entities/risk/model'
import { listBacktests } from '@/entities/backtest/api'
import type { BacktestResultDto } from '@/entities/backtest/model'
import { listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto } from '@/entities/feedback/model'
import ActionQueue from './components/ActionQueue.vue'
import AutomationGuardPanel from './components/AutomationGuardPanel.vue'
import ClosedLoopTimeline from './components/ClosedLoopTimeline.vue'

const router = useRouter()
const REFRESH_INTERVAL_SECONDS = 5
const loading = ref(false)
const refreshing = ref(false)
const errorMessage = ref('')
const closedLoopRuns = ref<ClosedLoopRunView[]>([])
const selectedRunBizId = ref<string>()
const selectedRun = ref<ClosedLoopRunView>()
const runKeyword = ref('')
const autoRefreshEnabled = ref(true)
const lastRefreshAt = ref<Date>()
const nextRefreshInSeconds = ref(REFRESH_INTERVAL_SECONDS)
let refreshTimer: ReturnType<typeof window.setInterval> | undefined
const dataSources = ref<DataSourceDto[]>([])
const aiSkillTotal = ref(0)
const activeDiscoverySkillCount = ref(0)
const activeDiscoveryBindingCount = ref(0)
const taskExecutions = ref<ScheduledTaskExecutionDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const products = ref<ProductDto[]>([])
const portfolios = ref<MockPortfolioDto[]>([])
const riskChecks = ref<RiskCheckDto[]>([])
const backtests = ref<BacktestResultDto[]>([])
const promptEvaluations = ref<AiPromptEvaluationDto[]>([])
const detailOpen = ref(false)
const selectedStep = ref<ClosedLoopStepView>()

interface TraceItem {
  kind: string
  title: string
  value: string
  to: { path: string, query: Record<string, string> }
}

interface PromptArtifactView {
  promptCode: string
  promptVersion: string
  readyForModel: boolean
  missingVariables: string[]
  renderedPromptPreview: string
}

interface StepEvidenceCard {
  kind: string
  label: string
  value: string
}

const latestRun = computed(() => closedLoopRuns.value[0])
const latestReportView = computed<ReportView | undefined>(() => reports.value[0] ? normalizeReport(reports.value[0]) : undefined)
const latestReportBlocked = computed(() => latestReportView.value ? !reportQualityGatePassed(latestReportView.value) : true)
const loopSummary = computed(() => summarizeClosedLoopRuns(closedLoopRuns.value))
const highRiskCount = computed(() => riskChecks.value.filter((item) => item.riskLevel === 'HIGH' || item.checkResult === 'REJECT').length)
const latestBlockedStep = computed(() =>
  selectedRun.value?.stepsView.find((step) => ['BLOCKED', 'FAILED'].includes(step.stepStatus)),
)
const latestRunSignal = computed(() => {
  if (!latestRun.value) return '还没有闭环运行证据，先从采集编排触发手动验证。'
  return latestBlockedStep.value?.failureReason
    || latestRun.value.failureReason
    || latestRun.value.summary
    || '闭环运行中，查看时间线确认每个步骤的证据。'
})
const latestReportGateText = computed(() => {
  if (!latestReportView.value) return '还没有投资报告，需先完成真实数据准备和报告生成。'
  if (latestReportBlocked.value) return reportGateMessage(latestReportView.value)
  return '质量门禁通过，可继续进入 Prompt、Mock 和回测链路。'
})
const productQuoteReadyCount = computed(() =>
  products.value.filter((item) => item.latestQuoteTime || item.latestNav !== undefined).length,
)
const qualitySnapshotReadyCount = computed(() =>
  dataSources.value.filter((item) => typeof item.latestQuality?.qualityScore === 'number' || Number(item.latestQuality?.sampleCount || 0) > 0).length,
)
const recentNewsCount = computed(() =>
  latestReportView.value?.investmentSummaryView?.newsCount
  ?? latestReportView.value?.dataQualityGateView?.newsCount
  ?? latestReportView.value?.newsCount
  ?? 0,
)
const realDataReady = computed(() =>
  products.value.length > 0
  && productQuoteReadyCount.value > 0
  && recentNewsCount.value > 0
  && qualitySnapshotReadyCount.value > 0,
)
const readinessItems = computed(() => [
  { label: '产品池', value: products.value.length, hint: products.value.length ? '已有标的' : '待同步', ready: products.value.length > 0 },
  { label: '行情', value: productQuoteReadyCount.value, hint: '有净值/报价', ready: productQuoteReadyCount.value > 0 },
  { label: '新闻', value: recentNewsCount.value, hint: '报告关联', ready: recentNewsCount.value > 0 },
  { label: '质量', value: qualitySnapshotReadyCount.value, hint: '快照源', ready: qualitySnapshotReadyCount.value > 0 },
])
const runtimeStatusText = computed(() => {
  if (refreshing.value) return '正在同步最新闭环状态'
  if (!autoRefreshEnabled.value) return '自动刷新已暂停'
  return latestRun.value?.runStatus === 'RUNNING' ? '闭环运行中，5秒级刷新' : '实时监听最近闭环状态'
})
const refreshCountdownText = computed(() =>
  autoRefreshEnabled.value ? `${nextRefreshInSeconds.value}s 后自动刷新` : '自动刷新暂停',
)
const refreshProgress = computed(() =>
  Math.max(0, Math.min(100, Math.round(((REFRESH_INTERVAL_SECONDS - nextRefreshInSeconds.value) / REFRESH_INTERVAL_SECONDS) * 100))),
)
const lastRefreshText = computed(() => lastRefreshAt.value ? formatDateTime(lastRefreshAt.value.toISOString()) : '-')

const metrics = computed(() => [
  { label: '闭环运行', value: loopSummary.value.total, hint: `运行中 ${loopSummary.value.running}` },
  { label: '闭环成功率', value: formatPercent(loopSummary.value.successRate), hint: `阻断 ${loopSummary.value.blocked}` },
  { label: '方向化发现治理', value: activeDiscoveryBindingCount.value, hint: `Skill ${activeDiscoverySkillCount.value}/${aiSkillTotal.value}` },
  { label: '高风险拦截', value: highRiskCount.value, hint: '拒绝 / 高风险' },
])

const statusLabel = (value?: string) =>
  closedLoopRunStatusOptions.find((item) => item.value === value)?.label || value || '-'

const runOptionLabel = (run: ClosedLoopRunView) => [
  run.runNo || run.bizId,
  statusLabel(run.runStatus),
  formatDateTime(run.startedAt),
].filter(Boolean).join(' · ')

const runSearchText = (run: ClosedLoopRunView) => [
  run.bizId,
  run.runNo,
  run.runStatus,
  statusLabel(run.runStatus),
  run.taskCode,
  run.themeCode,
  run.marketScope,
  run.gateResult,
  formatDateTime(run.startedAt),
].filter(Boolean).join(' ').toLowerCase()

const runOptions = computed(() => closedLoopRuns.value.map((run) => ({
  value: run.bizId,
  label: runOptionLabel(run),
  run,
  searchText: runSearchText(run),
})))

const filteredRunOptions = computed(() => {
  const keyword = runKeyword.value.trim().toLowerCase()
  if (!keyword) return runOptions.value
  return runOptions.value.filter((option) => option.searchText.includes(keyword))
})

const runStatusClass = (status?: string) => `run-tree-node--${String(status || 'default').toLowerCase()}`

const runNodeReason = (run: ClosedLoopRunView) =>
  run.failureReason || run.summary || run.themeCode || run.marketScope || run.taskCode || '自动闭环实例'

const actionQueue = computed(() => [
  ...(activeDiscoverySkillCount.value === 0
    ? [{
        title: '缺少 ACTIVE 方向化采集 Skill',
        description: '请在 AI Skill 工作台启用 DATA_COLLECTION_* 或 DATA_SOURCE_DISCOVERY Skill',
        level: '治理',
        color: 'warning',
      }]
    : []),
  ...(activeDiscoveryBindingCount.value === 0
    ? [{
        title: '缺少启用中的模型 Skill 绑定',
        description: '请在模型 Skill 绑定页配置 DATA_SOURCE_DISCOVERY 场景，并确认方向化采集 Skill 可用',
        level: '模型',
        color: 'warning',
      }]
    : []),
  ...taskExecutions.value
    .filter((item) => item.status === 'FAILED')
    .slice(0, 3)
    .map((item) => ({
      title: `失败任务：${item.taskCode}`,
      description: item.failureReason || item.resultSummary || '任务失败，等待处理',
      level: '任务',
      color: 'error',
    })),
  ...promptEvaluations.value
    .filter((item) => item.reviewStatus !== 'APPROVED')
    .slice(0, 3)
    .map((item) => ({
      title: `Prompt 待复核：${item.promptCode}`,
      description: `版本 ${item.promptVersion} · 评分 ${item.score ?? '-'}`,
      level: '复核',
      color: 'warning',
    })),
])

const portfolioColumns = [
  { title: '组合', dataIndex: 'portfolioName' },
  { title: '总资产', customRender: ({ record }: { record: MockPortfolioDto }) => formatMoney(record.latestValuation?.totalAsset, record.baseCurrency) },
  { title: '收益率', customRender: ({ record }: { record: MockPortfolioDto }) => formatPercent(record.latestValuation?.totalReturnRate) },
]

const backtestColumns = [
  { title: '策略', dataIndex: 'strategyCode' },
  { title: '版本', dataIndex: 'strategyVersion' },
  { title: '状态', dataIndex: 'status' },
]

const navigate = (path: string) => router.push(path)

const objectValue = (source: unknown, key: string): string | undefined => {
  if (!source || typeof source !== 'object') return undefined
  const value = (source as Record<string, unknown>)[key]
  if (value === undefined || value === null || value === '') return undefined
  return String(value)
}

const firstValue = (...values: Array<string | undefined>) => values.find((value) => value && value.trim())

const traceContext = computed(() => {
  const input = selectedStep.value?.inputJson
  const output = selectedStep.value?.outputJson
  const summary = selectedRun.value?.summaryJson
  return {
    reportBizId: firstValue(
      objectValue(output, 'reportBizId'),
      objectValue(input, 'reportBizId'),
      objectValue(summary, 'reportBizId'),
      selectedRun.value?.reportBizId,
    ),
    portfolioBizId: firstValue(
      objectValue(output, 'portfolioBizId'),
      objectValue(input, 'portfolioBizId'),
      objectValue(summary, 'portfolioBizId'),
      selectedRun.value?.portfolioBizId,
    ),
    orderBizId: objectValue(output, 'orderBizId') || objectValue(input, 'orderBizId'),
    backtestBizId: firstValue(
      objectValue(output, 'backtestBizId'),
      objectValue(input, 'backtestBizId'),
      objectValue(summary, 'backtestBizId'),
      selectedRun.value?.backtestBizId,
    ),
    feedbackBizId: objectValue(output, 'feedbackBizId') || objectValue(input, 'feedbackBizId'),
    modelBizId: firstValue(
      objectValue(output, 'modelBizId'),
      objectValue(output, 'modelCandidateBizId'),
      objectValue(input, 'modelBizId'),
      objectValue(summary, 'modelCandidateBizId'),
    ),
    promptBizId: firstValue(
      objectValue(output, 'promptBizId'),
      objectValue(input, 'promptBizId'),
      selectedRun.value?.promptBizId,
    ),
    promptCode: firstValue(
      objectValue(output, 'promptCode'),
      objectValue(input, 'promptCode'),
      selectedRun.value?.promptCode,
    ),
    promptVersion: firstValue(
      objectValue(output, 'promptVersion'),
      objectValue(input, 'promptVersion'),
      selectedRun.value?.promptVersion,
    ),
    taskCode: objectValue(output, 'taskCode') || objectValue(input, 'taskCode'),
  }
})

const boolValue = (source: unknown, key: string) => {
  if (!source || typeof source !== 'object') return false
  const value = (source as Record<string, unknown>)[key]
  return value === true || String(value).toLowerCase() === 'true'
}

const arrayValue = (source: unknown, key: string): string[] => {
  if (!source || typeof source !== 'object') return []
  const value = (source as Record<string, unknown>)[key]
  return Array.isArray(value) ? value.map(String).filter(Boolean) : []
}

const summarizeUnknown = (value: unknown, fallback = '-'): string => {
  if (value === undefined || value === null || value === '') return fallback
  if (Array.isArray(value)) return value.length ? `${value.length} 项 · ${value.map((item) => summarizeUnknown(item)).slice(0, 2).join(' / ')}` : '0 项'
  if (typeof value === 'object') return JSON.stringify(value).slice(0, 160)
  return String(value)
}

const nestedValue = (source: unknown, key: string) => {
  if (!source || typeof source !== 'object') return undefined
  return (source as Record<string, unknown>)[key]
}

const stepEvidenceCards = computed<StepEvidenceCard[]>(() => {
  const input = selectedStep.value?.inputJson
  const output = selectedStep.value?.outputJson
  if (!selectedStep.value) return []
  const cards: StepEvidenceCard[] = []
  const add = (kind: string, label: string, value: unknown) => {
    const text = summarizeUnknown(value, '')
    if (text) cards.push({ kind, label, value: text })
  }
  add('INPUT', '模型/任务输入', nestedValue(input, 'overrides') || nestedValue(input, 'portfolioContext') || nestedValue(input, 'investmentPlan'))
  add('OUTPUT', '模型/任务输出', nestedValue(output, 'resultSummary') || nestedValue(output, 'summary') || nestedValue(output, 'investmentPlan'))
  add('MOCK', 'Mock 执行动作', nestedValue(output, 'executionMode') || nestedValue(input, 'actionType') || nestedValue(output, 'actionType'))
  add('MOCK', '订单数量 / 状态', [
    nestedValue(output, 'generatedOrderCount'),
    nestedValue(output, 'status'),
  ].filter((item) => item !== undefined && item !== null && item !== '').join(' / '))
  add('REASON', '无动作或阻断原因', selectedStep.value.failureReason || nestedValue(output, 'reason') || nestedValue(input, 'reason'))
  add('PORTFOLIO', '组合结果', [
    nestedValue(output, 'portfolioName'),
    nestedValue(output, 'latestTotalAsset'),
    nestedValue(output, 'latestCashBalance'),
  ].filter((item) => item !== undefined && item !== null && item !== '').join(' / '))
  return cards.filter((item) => item.value !== '-')
})

const promptArtifact = computed<PromptArtifactView | undefined>(() => {
  const output = selectedStep.value?.outputJson
  const renderedPromptPreview = objectValue(output, 'renderedPromptPreview')
  const trace = traceContext.value
  if (!renderedPromptPreview || !trace.promptCode || !trace.promptVersion) return undefined
  return {
    promptCode: trace.promptCode,
    promptVersion: trace.promptVersion,
    readyForModel: boolValue(output, 'readyForModel'),
    missingVariables: arrayValue(output, 'missingVariables'),
    renderedPromptPreview,
  }
})

const selectedStepTraceItems = computed<TraceItem[]>(() => {
  const trace = traceContext.value
  const items: TraceItem[] = []
  if (trace.reportBizId) {
    items.push({
      kind: 'REPORT',
      title: '查看投资报告',
      value: trace.reportBizId,
      to: { path: '/report-studio', query: { reportBizId: trace.reportBizId } },
    })
  }
  if (trace.portfolioBizId) {
    items.push({
      kind: 'MOCK',
      title: trace.orderBizId ? '查看组合与订单' : '查看 Mock 组合',
      value: trace.orderBizId ? `${trace.portfolioBizId} / ${trace.orderBizId}` : trace.portfolioBizId,
      to: { path: '/simulation', query: { portfolioBizId: trace.portfolioBizId, ...(trace.orderBizId ? { orderBizId: trace.orderBizId } : {}) } },
    })
  }
  if (trace.backtestBizId || trace.feedbackBizId) {
    items.push({
      kind: 'REVIEW',
      title: '查看回测与反馈',
      value: [trace.backtestBizId, trace.feedbackBizId].filter(Boolean).join(' / '),
      to: {
        path: '/review-loop',
        query: {
          ...(trace.backtestBizId ? { backtestBizId: trace.backtestBizId } : {}),
          ...(trace.feedbackBizId ? { feedbackBizId: trace.feedbackBizId } : {}),
          ...(trace.portfolioBizId ? { portfolioBizId: trace.portfolioBizId } : {}),
          ...(trace.reportBizId ? { reportBizId: trace.reportBizId } : {}),
        },
      },
    })
  }
  if (trace.modelBizId) {
    items.push({
      kind: 'MODEL',
      title: '查看模型候选',
      value: trace.modelBizId,
      to: { path: '/config-center/models', query: { modelBizId: trace.modelBizId } },
    })
  }
  if (trace.promptBizId || trace.promptCode) {
    items.push({
      kind: 'PROMPT',
      title: '查看 Prompt 候选',
      value: [trace.promptCode, trace.promptVersion].filter(Boolean).join('@') || trace.promptBizId || '',
      to: {
        path: '/config-center/prompts',
        query: {
          ...(trace.promptBizId ? { promptBizId: trace.promptBizId } : {}),
          ...(trace.promptCode ? { promptCode: trace.promptCode } : {}),
          ...(trace.promptVersion ? { promptVersion: trace.promptVersion } : {}),
        },
      },
    })
  }
  if (trace.taskCode && !items.length) {
    items.push({
      kind: 'TASK',
      title: '查看任务配置',
      value: trace.taskCode,
      to: { path: '/config-center/tasks', query: { taskCode: trace.taskCode } },
    })
  }
  return items
})

const selectRun = async (bizId: string) => {
  selectedRunBizId.value = bizId
  await loadSelectedRun()
}

const loadSelectedRun = async () => {
  if (!selectedRunBizId.value) return
  const detail = await getClosedLoopRunDetail({ bizId: selectedRunBizId.value })
  selectedRun.value = normalizeClosedLoopRun(detail)
}

const openStep = (stepCode: string) => {
  selectedStep.value = selectedRun.value?.stepsView.find((step) => step.stepCode === stepCode)
  detailOpen.value = true
}

const load = async (silent = false) => {
  if (silent) {
    refreshing.value = true
  } else {
    loading.value = true
  }
  errorMessage.value = ''
  try {
    const [
      runPage,
      skillPage,
      bindingPage,
      sourcePage,
      executionPage,
      reportPage,
      productPage,
      portfolioPage,
      riskPage,
      backtestPage,
      evaluationPage,
    ] = await Promise.all([
      listClosedLoopRuns({ page: 1, size: 10, sort: 'startedAt', direction: 'desc' }),
      listAiSkills({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listAiModelSkillBindings({ page: 1, size: 50, scenarioCode: 'DATA_SOURCE_DISCOVERY', sort: 'priority', direction: 'asc' }),
      listDataSources({ page: 1, size: 50 }),
      listTaskExecutions({ page: 1, size: 10, sort: 'startedAt', direction: 'desc' }),
      listInvestmentReports({ page: 1, size: 8, sort: 'generatedAt', direction: 'desc' }),
      listProducts({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listMyMockPortfolios({ page: 1, size: 5, sort: 'createdAt', direction: 'desc' }),
      listRiskChecks({ page: 1, size: 8, sort: 'checkedAt', direction: 'desc' }),
      listBacktests({ page: 1, size: 5, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 8, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    const nextRuns = (runPage.items || []).map(normalizeClosedLoopRun)
    closedLoopRuns.value = nextRuns
    const previousSelectedBizId = selectedRunBizId.value
    selectedRunBizId.value = previousSelectedBizId && nextRuns.some((run) => run.bizId === previousSelectedBizId)
      ? previousSelectedBizId
      : nextRuns[0]?.bizId
    selectedRun.value = nextRuns.find((run) => run.bizId === selectedRunBizId.value) || nextRuns[0]
    dataSources.value = sourcePage.items || []
    aiSkillTotal.value = skillPage.total
    activeDiscoverySkillCount.value = (skillPage.items || []).filter((item) => item.skillType === 'DATA_SOURCE_DISCOVERY' && item.status === 'ACTIVE').length
    activeDiscoveryBindingCount.value = (bindingPage.items || []).filter((item) => item.enabled).length
    taskExecutions.value = executionPage.items || []
    reports.value = reportPage.items || []
    products.value = productPage.items || []
    portfolios.value = portfolioPage.items || []
    riskChecks.value = riskPage.items || []
    backtests.value = backtestPage.items || []
    promptEvaluations.value = evaluationPage.items || []
    await loadSelectedRun()
    lastRefreshAt.value = new Date()
    nextRefreshInSeconds.value = REFRESH_INTERVAL_SECONDS
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '驾驶舱接口加载失败'
  } finally {
    loading.value = false
    refreshing.value = false
  }
}

const manualRefresh = async () => {
  nextRefreshInSeconds.value = REFRESH_INTERVAL_SECONDS
  await load(true)
}

const startRuntimeRefresh = () => {
  refreshTimer = window.setInterval(() => {
    if (!autoRefreshEnabled.value || refreshing.value || loading.value) return
    nextRefreshInSeconds.value = Math.max(0, nextRefreshInSeconds.value - 1)
    if (nextRefreshInSeconds.value === 0) {
      void load(true)
    }
  }, 1000)
}

watch(autoRefreshEnabled, (enabled) => {
  if (enabled) nextRefreshInSeconds.value = REFRESH_INTERVAL_SECONDS
})

onMounted(async () => {
  await load()
  startRuntimeRefresh()
})

onBeforeUnmount(() => {
  if (refreshTimer) window.clearInterval(refreshTimer)
})
</script>

<style scoped>
.runtime-control-bar {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(260px, 1.4fr) auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  padding: 14px 16px;
  border: 1px solid #bfdbfe;
  background: linear-gradient(90deg, #eff6ff 0%, #f8fafc 48%, #ecfdf5 100%);
}

.runtime-control-bar__signal {
  display: flex;
  gap: 12px;
  align-items: center;
}

.runtime-control-bar__signal strong {
  display: block;
  color: #0f172a;
  font-size: 16px;
}

.runtime-control-bar__meter {
  display: grid;
  gap: 6px;
}

.runtime-control-bar__meta {
  display: flex;
  justify-content: space-between;
  color: #475569;
  font-size: 12px;
}

.runtime-pulse {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #16a34a;
  box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.45);
  animation: runtime-pulse 1.4s infinite;
}

.runtime-pulse--paused {
  background: #94a3b8;
  animation: none;
}

.step-evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.step-evidence-card {
  min-height: 92px;
  padding: 12px;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  background: #f8fafc;
}

.step-evidence-card strong {
  display: block;
  margin: 2px 0 6px;
}

.step-evidence-card p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
  word-break: break-word;
}

@keyframes runtime-pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(22, 163, 74, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
  }
}

@media (max-width: 960px) {
  .runtime-control-bar {
    grid-template-columns: 1fr;
  }

  .runtime-control-bar__meta {
    display: grid;
    gap: 4px;
  }

  .step-evidence-grid {
    grid-template-columns: 1fr;
  }
}
</style>
