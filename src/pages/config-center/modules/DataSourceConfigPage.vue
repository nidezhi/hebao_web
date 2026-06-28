<template>
  <BusinessPageShell
    class="ai-governance-page"
    title="AI Governance Evidence AI 治理证据"
    description="聚合数据源维护、闭环运行、任务执行、报告快照、反馈和 Prompt 评估，回答“AI 为什么这么做、是否通过质量门禁、后续如何回流治理”。"
    :endpoints="[endpoints.dataSource.list, endpoints.dataSource.save, endpoints.dataSource.saveHealth, endpoints.dataSource.saveQuality, endpoints.closedLoop.runs, endpoints.task.executions, endpoints.report.list, endpoints.feedback.list, endpoints.promptEvaluation.list]"
    :icon="DatabaseOutlined"
    status-text="AI EVIDENCE"
    :orbit-label="'EVIDENCE'"
    :orbit-labels="['RUN', 'GATE', 'TRACE']"
    orbit-tone="green"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card governance-card" :bordered="false" title="数据源维护">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openDataSource()">新增数据源</a-button>
          </a-space>
        </template>
        <a-table row-key="sourceCode" size="small" :pagination="{ pageSize: 6 }" :data-source="dataSources" :columns="dataSourceColumns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'enabled'">
              <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'quality'">
              {{ formatPercent(record.latestQuality?.qualityScore) }}
            </template>
            <template v-else-if="column.key === 'health'">
              <span class="muted-line">{{ formatPercent(record.health?.successRate) }} / {{ record.health?.sampleCount || 0 }} 样本</span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openDataSource(record)">编辑</a-button>
                <a-button size="small" type="link" @click="openHealth(record)">健康</a-button>
                <a-button size="small" type="link" @click="openQuality(record)">质量</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
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

    <a-drawer v-model:open="dataSourceOpen" width="680" :title="dataSourceForm.bizId ? '编辑数据源' : '新增数据源'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="数据源编码"><a-input v-model:value="dataSourceForm.sourceCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="数据源名称"><a-input v-model:value="dataSourceForm.sourceName" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="类型"><a-input v-model:value="dataSourceForm.sourceType" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="可信等级"><a-input v-model:value="dataSourceForm.trustLevel" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="Base URL"><a-input v-model:value="dataSourceForm.baseUrl" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="抓取频率"><a-input v-model:value="dataSourceForm.fetchFrequency" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="负责人"><a-input v-model:value="dataSourceForm.owner" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="启用"><a-switch v-model:checked="dataSourceForm.enabled" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="dataSourceForm.description" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitDataSource">保存数据源</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="healthOpen" width="560" title="保存数据源健康">
      <a-form layout="vertical">
        <a-form-item label="数据源编码"><a-input v-model:value="healthForm.sourceCode" disabled /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="成功率"><a-input-number v-model:value="healthForm.successRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="样本数"><a-input-number v-model:value="healthForm.sampleCount" class="full-width" :min="0" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="平均延迟 ms"><a-input-number v-model:value="healthForm.avgLatencyMs" class="full-width" :min="0" /></a-form-item>
        <a-form-item label="失败原因"><a-textarea v-model:value="healthForm.failureReason" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitHealth">保存健康</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="qualityOpen" width="620" title="保存质量快照">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="数据源编码"><a-input v-model:value="qualityForm.sourceCode" disabled /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="数据类型"><a-input v-model:value="qualityForm.dataType" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="质量分"><a-input-number v-model:value="qualityForm.qualityScore" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="新鲜度"><a-input-number v-model:value="qualityForm.freshnessScore" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="8"><a-form-item label="缺失率"><a-input-number v-model:value="qualityForm.missingRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="重复率"><a-input-number v-model:value="qualityForm.duplicateRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="样本数"><a-input-number v-model:value="qualityForm.sampleCount" class="full-width" :min="0" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="详情 JSON / 说明"><a-textarea v-model:value="qualityForm.detail" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitQuality">保存质量快照</a-button>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
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
import { listDataSources, saveDataQualitySnapshot, saveDataSource, saveDataSourceHealth } from '@/entities/data-source/api'
import type { DataSourceDto } from '@/entities/data-source/model'
import { listTaskExecutions } from '@/entities/task/api'
import { taskExecutionStatusOptions } from '@/entities/task/dictionary'
import type { ScheduledTaskExecutionDto } from '@/entities/task/model'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { listInvestmentFeedback, listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from '@/entities/feedback/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const dataSources = ref<DataSourceDto[]>([])
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
const dataSourceOpen = ref(false)
const healthOpen = ref(false)
const qualityOpen = ref(false)
const dataSourceForm = reactive<Partial<DataSourceDto>>({})
const healthForm = reactive<Record<string, string | number | undefined>>({})
const qualityForm = reactive<Record<string, string | number | undefined>>({})

const blockedRuns = computed(() => runs.value.filter((item) => ['BLOCKED', 'FAILED'].includes(item.runStatus || '')).length)
const failedExecutions = computed(() => executions.value.filter((item) => item.status === 'FAILED').length)
const pendingEvaluations = computed(() => evaluations.value.filter((item) => item.reviewStatus !== 'APPROVED').length)

const metrics = computed(() => [
  { label: '闭环证据', value: runs.value.length, hint: `阻断/失败 ${blockedRuns.value}` },
  { label: '数据源', value: dataSources.value.length, hint: `启用 ${dataSources.value.filter((item) => item.enabled).length}` },
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

const dataSourceColumns = [
  { title: '编码', dataIndex: 'sourceCode', width: 160 },
  { title: '名称', dataIndex: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType', width: 140 },
  { title: '启用', key: 'enabled', width: 80 },
  { title: '质量', key: 'quality', width: 90 },
  { title: '健康', key: 'health', width: 150 },
  { title: '操作', key: 'actions', width: 170 },
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

const resetObject = <T extends Record<string, unknown>>(target: T, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}

const openDataSource = (source?: DataSourceDto) => {
  resetObject(dataSourceForm as Record<string, unknown>, source ? { ...source } : {
    sourceCode: '',
    sourceName: '',
    sourceType: 'ANNOUNCEMENT',
    trustLevel: 'L2',
    baseUrl: '',
    enabled: true,
    fetchFrequency: '0 */20 * * * *',
    owner: 'research-ops',
    description: '',
  })
  dataSourceOpen.value = true
}

const openHealth = (source: DataSourceDto) => {
  resetObject(healthForm, {
    sourceCode: source.sourceCode,
    successRate: source.health?.successRate ?? 0.98,
    avgLatencyMs: source.health?.avgLatencyMs ?? 0,
    sampleCount: source.health?.sampleCount ?? 100,
    failureReason: source.health?.failureReason || '',
  })
  healthOpen.value = true
}

const openQuality = (source: DataSourceDto) => {
  resetObject(qualityForm, {
    sourceCode: source.sourceCode,
    dataType: source.latestQuality?.dataType || source.sourceType || 'ANNOUNCEMENT',
    qualityScore: source.latestQuality?.qualityScore ?? 0.86,
    missingRate: source.latestQuality?.missingRate ?? 0,
    duplicateRate: source.latestQuality?.duplicateRate ?? 0,
    freshnessScore: source.latestQuality?.freshnessScore ?? 0.9,
    sampleCount: source.latestQuality?.sampleCount ?? 100,
    detail: source.latestQuality?.detail || '',
  })
  qualityOpen.value = true
}

const submitDataSource = async () => {
  saving.value = true
  try {
    await saveDataSource({ ...dataSourceForm })
    message.success('数据源已保存')
    dataSourceOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '数据源保存失败')
  } finally {
    saving.value = false
  }
}

const submitHealth = async () => {
  saving.value = true
  try {
    await saveDataSourceHealth({ ...healthForm })
    message.success('数据源健康已保存')
    healthOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '健康保存失败')
  } finally {
    saving.value = false
  }
}

const submitQuality = async () => {
  saving.value = true
  try {
    await saveDataQualitySnapshot({ ...qualityForm })
    message.success('质量快照已保存')
    qualityOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '质量快照保存失败')
  } finally {
    saving.value = false
  }
}

const loadSelectedRun = async () => {
  if (!selectedRunBizId.value) return
  selectedRun.value = await getClosedLoopRunDetail({ bizId: selectedRunBizId.value })
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [sourcePage, runPage, executionPage, reportPage, feedbackPage, evaluationPage] = await Promise.all([
      listDataSources({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listClosedLoopRuns({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' }),
      listTaskExecutions({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' }),
      listInvestmentReports({ page: 1, size: 20, sort: 'generatedAt', direction: 'desc' }),
      listInvestmentFeedback({ page: 1, size: 20, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 20, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    dataSources.value = sourcePage.items || []
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
