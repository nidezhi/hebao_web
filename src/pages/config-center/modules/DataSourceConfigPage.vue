<template>
  <BusinessPageShell
    class="ai-governance-page"
    title="AI Governance Evidence AI 治理证据"
    description="聚合闭环运行、任务执行、报告快照、反馈和 Prompt 评估，回答“AI 为什么这么做、是否通过质量门禁、后续如何回流治理”。"
    :endpoints="[endpoints.closedLoop.runs, endpoints.task.executions, endpoints.report.list, endpoints.feedback.list, endpoints.promptEvaluation.list]"
    :icon="DatabaseOutlined"
    status-text="AI EVIDENCE"
    :orbit-label="'EVIDENCE'"
    :orbit-labels="['RUN', 'GATE', 'TRACE']"
    orbit-tone="green"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="15">
          <a-card class="page-card governance-card" :bordered="false">
            <template #title>
              <a-space>
                <span>闭环运行证据</span>
                <a-tag color="blue">{{ selectedRun?.runStatus || 'NO RUN' }}</a-tag>
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
            <EmptyEvidence v-if="!runs.length" description="暂无闭环运行记录。" />
            <a-timeline v-else class="evidence-timeline">
              <a-timeline-item v-for="step in selectedRun?.steps || []" :key="step.bizId" :color="stepColor(step.stepStatus)">
                <div class="evidence-step" @click="openStep(step)">
                  <div>
                    <strong>{{ step.stepName || step.stepCode }}</strong>
                    <span>{{ step.stepStatus }}</span>
                  </div>
                  <p>{{ compactText(step.outputSummary || step.failureReason || step.inputSummary || '暂无步骤摘要', 120) }}</p>
                </div>
              </a-timeline-item>
            </a-timeline>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="9">
          <a-card class="page-card governance-card" :bordered="false" title="AI 门禁">
            <div v-if="selectedRun" class="gate-summary">
              <div><span>运行编号</span><strong>{{ selectedRun.runNo || selectedRun.bizId }}</strong></div>
              <div><span>质量分</span><strong>{{ formatPercent(selectedRun.qualityScore) }}</strong></div>
              <div><span>门禁</span><strong>{{ selectedRun.gateResult || '-' }}</strong></div>
              <div><span>Prompt</span><strong>{{ selectedRun.promptCode || '-' }}@{{ selectedRun.promptVersion || '-' }}</strong></div>
              <p>{{ compactText(selectedRun.summary || selectedRun.failureReason || '-', 180) }}</p>
            </div>
            <EmptyEvidence v-else description="请选择闭环运行查看门禁证据。" />
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="任务执行">
            <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="executions" :columns="executionColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <StatusTag :value="record.status" :options="taskExecutionStatusOptions" />
                </template>
                <template v-else-if="column.key === 'summary'">
                  <span class="muted-line">{{ compactText(record.failureReason || record.resultSummary || '-', 90) }}</span>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="报告快照">
            <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="reports" :columns="reportColumns" @row="reportRowEvents">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'quality'">{{ formatPercent(record.dataQualityScore ?? record.qualityScore) }}</template>
                <template v-else-if="column.key === 'summary'">
                  <span class="muted-line">{{ compactText(record.investmentSummary || record.failureReason || '-', 90) }}</span>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="反馈回流">
            <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="feedback" :columns="feedbackColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">
                  <StatusTag :value="record.feedbackAction" :options="feedbackActionOptions" />
                </template>
                <template v-else-if="column.key === 'comment'">
                  <span class="muted-line">{{ record.commentText || record.reasonCode || '-' }}</span>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="Prompt 评估">
            <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="evaluations" :columns="evaluationColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'score'">{{ formatPercent(record.score) }}</template>
                <template v-else-if="column.key === 'reviewStatus'">
                  <a-tag :color="record.reviewStatus === 'APPROVED' ? 'success' : 'warning'">{{ record.reviewStatus || 'PENDING' }}</a-tag>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="reportOpen" width="720" title="报告 Prompt 证据">
      <a-descriptions v-if="selectedReport" bordered size="small" :column="1">
        <a-descriptions-item label="报告">{{ selectedReport.themeName || selectedReport.themeCode || selectedReport.bizId }}</a-descriptions-item>
        <a-descriptions-item label="模型">{{ selectedReport.providerCode }} / {{ selectedReport.modelCode }}</a-descriptions-item>
        <a-descriptions-item label="质量分">{{ formatPercent(selectedReport.dataQualityScore ?? selectedReport.qualityScore) }}</a-descriptions-item>
        <a-descriptions-item label="摘要">{{ selectedReport.investmentSummary || selectedReport.failureReason || '-' }}</a-descriptions-item>
      </a-descriptions>
      <a-divider>Prompt Snapshot</a-divider>
      <JsonPreview :raw="selectedReport?.promptSnapshot" />
      <a-divider>Chart Payload</a-divider>
      <JsonPreview :raw="selectedReport?.chartPayload" />
    </a-drawer>

    <a-drawer v-model:open="stepOpen" width="720" title="闭环步骤证据">
      <a-descriptions v-if="selectedStep" bordered size="small" :column="1">
        <a-descriptions-item label="节点">{{ selectedStep.stepName || selectedStep.stepCode }}</a-descriptions-item>
        <a-descriptions-item label="状态">{{ selectedStep.stepStatus }}</a-descriptions-item>
        <a-descriptions-item label="失败原因">{{ selectedStep.failureReason || '-' }}</a-descriptions-item>
      </a-descriptions>
      <a-divider>输入摘要</a-divider>
      <JsonPreview :raw="selectedStep?.inputSummary" />
      <a-divider>输出摘要</a-divider>
      <JsonPreview :raw="selectedStep?.outputSummary" />
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { DatabaseOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatPercent } from '@/shared/utils/format'
import { feedbackActionOptions } from '@/shared/dictionaries/status'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listClosedLoopRuns, getClosedLoopRunDetail } from '@/entities/closed-loop/api'
import type { ClosedLoopRunDto, ClosedLoopStepDto, ClosedLoopStepStatus } from '@/entities/closed-loop/model'
import { listTaskExecutions } from '@/entities/task/api'
import { taskExecutionStatusOptions } from '@/entities/task/dictionary'
import type { ScheduledTaskExecutionDto } from '@/entities/task/model'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { listInvestmentFeedback, listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from '@/entities/feedback/model'

const loading = ref(false)
const errorMessage = ref('')
const runs = ref<ClosedLoopRunDto[]>([])
const selectedRunBizId = ref<string>()
const selectedRun = ref<ClosedLoopRunDto>()
const executions = ref<ScheduledTaskExecutionDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedReport = ref<InvestmentAnalysisReportDto>()
const reportOpen = ref(false)
const selectedStep = ref<ClosedLoopStepDto>()
const stepOpen = ref(false)
const feedback = ref<InvestmentFeedbackDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])

const blockedRuns = computed(() => runs.value.filter((item) => ['BLOCKED', 'FAILED'].includes(item.runStatus || '')).length)
const failedExecutions = computed(() => executions.value.filter((item) => item.status === 'FAILED').length)
const pendingEvaluations = computed(() => evaluations.value.filter((item) => item.reviewStatus !== 'APPROVED').length)

const metrics = computed(() => [
  { label: '闭环证据', value: runs.value.length, hint: `阻断/失败 ${blockedRuns.value}` },
  { label: '任务执行', value: executions.value.length, hint: `失败 ${failedExecutions.value}` },
  { label: '报告快照', value: reports.value.length, hint: 'Prompt / 图表' },
  { label: '待复核', value: pendingEvaluations.value, hint: `反馈 ${feedback.value.length}` },
])

const runOptions = computed(() => runs.value.map((run) => ({
  value: run.bizId,
  label: `${run.runNo || run.bizId} · ${run.runStatus}`,
})))

const executionColumns = [
  { title: '任务', dataIndex: 'taskCode' },
  { title: '状态', key: 'status', width: 100 },
  { title: '摘要', key: 'summary' },
  { title: '时间', customRender: ({ record }: { record: ScheduledTaskExecutionDto }) => formatDateTime(record.startedAt), width: 160 },
]

const reportColumns = [
  { title: '主题', dataIndex: 'themeName' },
  { title: '模型', dataIndex: 'modelCode', width: 160 },
  { title: '质量', key: 'quality', width: 90 },
  { title: '摘要', key: 'summary' },
]

const feedbackColumns = [
  { title: '目标', dataIndex: 'targetType', width: 130 },
  { title: 'Prompt', dataIndex: 'promptCode' },
  { title: '动作', key: 'action', width: 90 },
  { title: '说明', key: 'comment' },
]

const evaluationColumns = [
  { title: 'Prompt', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', width: 90 },
  { title: '场景', dataIndex: 'scenario', width: 120 },
  { title: '评分', key: 'score', width: 90 },
  { title: '复核', key: 'reviewStatus', width: 110 },
]

const stepColor = (status?: ClosedLoopStepStatus) => {
  if (status === 'SUCCEEDED') return 'green'
  if (status === 'FAILED' || status === 'BLOCKED') return 'red'
  if (status === 'SKIPPED') return 'gray'
  return 'blue'
}

const compactText = (value?: string, size = 100) => {
  if (!value) return '-'
  const normalized = value.replace(/\s+/g, ' ').trim()
  return normalized.length > size ? `${normalized.slice(0, size)}…` : normalized
}

const openStep = (step: ClosedLoopStepDto) => {
  selectedStep.value = step
  stepOpen.value = true
}

const reportRowEvents = (record: InvestmentAnalysisReportDto) => ({
  onClick: () => {
    selectedReport.value = record
    reportOpen.value = true
  },
})

const loadSelectedRun = async () => {
  if (!selectedRunBizId.value) return
  selectedRun.value = await getClosedLoopRunDetail({ bizId: selectedRunBizId.value })
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [runPage, executionPage, reportPage, feedbackPage, evaluationPage] = await Promise.all([
      listClosedLoopRuns({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' }),
      listTaskExecutions({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' }),
      listInvestmentReports({ page: 1, size: 20, sort: 'generatedAt', direction: 'desc' }),
      listInvestmentFeedback({ page: 1, size: 20, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 20, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    runs.value = runPage.items || []
    selectedRunBizId.value = runs.value[0]?.bizId
    selectedRun.value = runs.value[0]
    executions.value = executionPage.items || []
    reports.value = reportPage.items || []
    feedback.value = feedbackPage.items || []
    evaluations.value = evaluationPage.items || []
    if (selectedRunBizId.value) await loadSelectedRun()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'AI 治理证据加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
