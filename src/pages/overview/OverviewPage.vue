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
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="16">
          <a-card class="page-card" :bordered="false">
            <template #title>
              <a-space>
                <span>自动闭环时间线</span>
                <StatusTag :value="selectedRun?.runStatus" :options="closedLoopRunStatusOptions" />
              </a-space>
            </template>
            <template #extra>
              <a-select
                v-model:value="selectedRunBizId"
                placeholder="选择闭环运行"
                style="width: 260px"
                :options="runOptions"
                @change="loadSelectedRun"
              />
            </template>
            <EmptyEvidence
              v-if="!closedLoopRuns.length"
              description="暂无自动闭环运行记录，可先在采集编排页触发自动闭环任务。"
            />
            <ClosedLoopTimeline
              v-else
              :run="selectedRun"
              @select-step="openStep"
            />
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="8">
          <AutomationGuardPanel :allow-mock="latestRun?.gateResult !== 'BLOCK'" />
        </a-col>
      </a-row>

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
      <a-divider>输入摘要</a-divider>
      <JsonPreview :value="selectedStep?.inputJson" :raw="selectedStep?.inputSummary" />
      <a-divider>输出摘要</a-divider>
      <JsonPreview :value="selectedStep?.outputJson" :raw="selectedStep?.outputSummary" />
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FundProjectionScreenOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatMoney, formatPercent } from '@/shared/utils/format'
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
import { normalizeReport } from '@/entities/report/adapter'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
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
const loading = ref(false)
const errorMessage = ref('')
const closedLoopRuns = ref<ClosedLoopRunView[]>([])
const selectedRunBizId = ref<string>()
const selectedRun = ref<ClosedLoopRunView>()
const dataSources = ref<DataSourceDto[]>([])
const aiSkillTotal = ref(0)
const activeDiscoverySkillCount = ref(0)
const activeDiscoveryBindingCount = ref(0)
const taskExecutions = ref<ScheduledTaskExecutionDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const portfolios = ref<MockPortfolioDto[]>([])
const riskChecks = ref<RiskCheckDto[]>([])
const backtests = ref<BacktestResultDto[]>([])
const promptEvaluations = ref<AiPromptEvaluationDto[]>([])
const detailOpen = ref(false)
const selectedStep = ref<ClosedLoopStepView>()

const latestRun = computed(() => closedLoopRuns.value[0])
const loopSummary = computed(() => summarizeClosedLoopRuns(closedLoopRuns.value))
const highRiskCount = computed(() => riskChecks.value.filter((item) => item.riskLevel === 'HIGH' || item.checkResult === 'REJECT').length)

const metrics = computed(() => [
  { label: '闭环运行', value: loopSummary.value.total, hint: `运行中 ${loopSummary.value.running}` },
  { label: '闭环成功率', value: formatPercent(loopSummary.value.successRate), hint: `阻断 ${loopSummary.value.blocked}` },
  { label: '方向化发现治理', value: activeDiscoveryBindingCount.value, hint: `Skill ${activeDiscoverySkillCount.value}/${aiSkillTotal.value}` },
  { label: '高风险拦截', value: highRiskCount.value, hint: '拒绝 / 高风险' },
])

const runOptions = computed(() => closedLoopRuns.value.map((run) => ({
  value: run.bizId,
  label: `${run.runNo || run.bizId} · ${run.runStatus}`,
})))

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

const loadSelectedRun = async () => {
  if (!selectedRunBizId.value) return
  const detail = await getClosedLoopRunDetail({ bizId: selectedRunBizId.value })
  selectedRun.value = normalizeClosedLoopRun(detail)
}

const openStep = (stepCode: string) => {
  selectedStep.value = selectedRun.value?.stepsView.find((step) => step.stepCode === stepCode)
  detailOpen.value = true
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [
      runPage,
      skillPage,
      bindingPage,
      sourcePage,
      executionPage,
      reportPage,
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
      listMyMockPortfolios({ page: 1, size: 5, sort: 'createdAt', direction: 'desc' }),
      listRiskChecks({ page: 1, size: 8, sort: 'checkedAt', direction: 'desc' }),
      listBacktests({ page: 1, size: 5, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 8, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    closedLoopRuns.value = (runPage.items || []).map(normalizeClosedLoopRun)
    selectedRunBizId.value = closedLoopRuns.value[0]?.bizId
    selectedRun.value = closedLoopRuns.value[0]
    dataSources.value = sourcePage.items || []
    aiSkillTotal.value = skillPage.total
    activeDiscoverySkillCount.value = (skillPage.items || []).filter((item) => item.skillType === 'DATA_SOURCE_DISCOVERY' && item.status === 'ACTIVE').length
    activeDiscoveryBindingCount.value = (bindingPage.items || []).filter((item) => item.enabled).length
    taskExecutions.value = executionPage.items || []
    reports.value = reportPage.items || []
    portfolios.value = portfolioPage.items || []
    riskChecks.value = riskPage.items || []
    backtests.value = backtestPage.items || []
    promptEvaluations.value = evaluationPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '驾驶舱接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
