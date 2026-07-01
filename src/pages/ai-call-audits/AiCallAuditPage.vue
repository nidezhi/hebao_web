<template>
  <BusinessPageShell
    title="AI Call Audit 模型调用审计"
    description="集中查看所有大模型调用的模型、输入输出、Skill、Prompt 和业务关联。"
    :endpoints="[endpoints.aiModelCallAudit.list, endpoints.aiModelCallAudit.detail]"
    :icon="MonitorOutlined"
    status-text="MODEL TRACE"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-card class="page-card" :bordered="false">
        <a-form layout="vertical">
          <a-row :gutter="[12, 0]">
            <a-col :xs="24" :md="6">
              <a-form-item label="状态">
                <a-select v-model:value="filters.callStatus" allow-clear :options="statusOptions" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="模型编码">
                <a-select
                  v-model:value="filters.modelCode"
                  show-search
                  allow-clear
                  :options="modelOptions"
                  option-filter-prop="label"
                />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="操作编码">
                <a-select
                  v-model:value="filters.operationCode"
                  show-search
                  allow-clear
                  :options="operationOptions"
                  option-filter-prop="label"
                />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="业务对象">
                <a-select
                  v-model:value="filters.businessBizId"
                  show-search
                  allow-clear
                  :options="businessOptions"
                  option-filter-prop="label"
                />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="Prompt">
                <a-select
                  v-model:value="filters.promptCode"
                  show-search
                  allow-clear
                  :options="promptOptions"
                  option-filter-prop="label"
                />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="Skill">
                <a-select
                  v-model:value="filters.skillCode"
                  show-search
                  allow-clear
                  :options="skillOptions"
                  option-filter-prop="label"
                />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="闭环运行号">
                <a-input v-model:value="filters.runNo" allow-clear />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="操作">
                <a-space>
                  <a-button type="primary" @click="load">查询</a-button>
                  <a-button @click="resetFilters">重置</a-button>
                </a-space>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-card>

      <a-card class="page-card" :bordered="false" title="模型调用流水">
        <a-table row-key="bizId" size="small" :data-source="audits" :columns="columns" @row="rowEvents" />
      </a-card>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="920" title="模型调用审计详情">
      <a-space v-if="selectedAudit" direction="vertical" :size="16" class="full-width">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="状态">
            <StatusTag :value="selectedAudit.callStatus" :options="statusOptions" />
          </a-descriptions-item>
          <a-descriptions-item label="耗时">{{ selectedAudit.durationMs ?? '-' }} ms</a-descriptions-item>
          <a-descriptions-item label="模型">{{ selectedAudit.modelDisplay }}</a-descriptions-item>
          <a-descriptions-item label="Provider">{{ selectedAudit.providerCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="远端模型">{{ selectedAudit.remoteModel || '-' }}</a-descriptions-item>
          <a-descriptions-item label="HTTP">{{ selectedAudit.httpStatus || '-' }}</a-descriptions-item>
          <a-descriptions-item label="业务">{{ selectedAudit.businessDisplay }}</a-descriptions-item>
          <a-descriptions-item label="操作">{{ selectedAudit.operationCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="任务">{{ selectedAudit.taskCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="事件">{{ selectedAudit.eventId || '-' }}</a-descriptions-item>
          <a-descriptions-item label="闭环">{{ selectedAudit.runNo || selectedAudit.runBizId || '-' }}</a-descriptions-item>
          <a-descriptions-item label="报告">{{ selectedAudit.reportBizId || '-' }}</a-descriptions-item>
          <a-descriptions-item label="Prompt">{{ selectedAudit.promptDisplay }}</a-descriptions-item>
          <a-descriptions-item label="Skill">{{ selectedAudit.skillDisplay }}</a-descriptions-item>
          <a-descriptions-item label="场景">{{ selectedAudit.scenarioCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="环境">{{ selectedAudit.environment || '-' }}</a-descriptions-item>
          <a-descriptions-item label="输入 Hash">{{ selectedAudit.userPromptHash || '-' }}</a-descriptions-item>
          <a-descriptions-item label="输出 Hash">{{ selectedAudit.responseHash || '-' }}</a-descriptions-item>
          <a-descriptions-item label="错误" :span="2">{{ selectedAudit.errorMessage || selectedAudit.errorCode || '-' }}</a-descriptions-item>
        </a-descriptions>

        <a-tabs>
          <a-tab-pane key="summary" tab="摘要">
            <a-row :gutter="[16, 16]">
              <a-col :xs="24" :xl="12">
                <a-descriptions bordered size="small" title="输入摘要" :column="1">
                  <a-descriptions-item
                    v-for="entry in selectedAudit.inputSummaryEntries"
                    :key="entry.label"
                    :label="entry.label"
                  >
                    {{ entry.value }}
                  </a-descriptions-item>
                  <a-descriptions-item v-if="!selectedAudit.inputSummaryEntries.length" label="摘要">暂无结构化摘要</a-descriptions-item>
                </a-descriptions>
              </a-col>
              <a-col :xs="24" :xl="12">
                <a-descriptions bordered size="small" title="输出摘要" :column="1">
                  <a-descriptions-item
                    v-for="entry in selectedAudit.outputSummaryEntries"
                    :key="entry.label"
                    :label="entry.label"
                  >
                    {{ entry.value }}
                  </a-descriptions-item>
                  <a-descriptions-item v-if="!selectedAudit.outputSummaryEntries.length" label="摘要">暂无结构化摘要</a-descriptions-item>
                </a-descriptions>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="preview" tab="输入输出">
            <a-collapse>
              <a-collapse-panel key="request" header="输入预览">
                <div class="audit-preview">
                  <JsonPreview :value="selectedAudit.requestPreviewView" :raw="selectedAudit.requestPreview" />
                </div>
              </a-collapse-panel>
              <a-collapse-panel key="response" header="输出预览">
                <div class="audit-preview">
                  <JsonPreview :value="selectedAudit.responsePreviewView" :raw="selectedAudit.responsePreview" />
                </div>
              </a-collapse-panel>
            </a-collapse>
          </a-tab-pane>
        </a-tabs>
      </a-space>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, reactive, ref } from 'vue'
import { MonitorOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { detailAiModelCallAudit, listAiModelCallAudits } from '@/entities/ai-call-audit/api'
import { normalizeAiModelCallAudit, type AiModelCallAuditView } from '@/entities/ai-call-audit/adapter'
import type { AiModelCallAuditListRequest } from '@/entities/ai-call-audit/model'

const loading = ref(false)
const errorMessage = ref('')
const audits = ref<AiModelCallAuditView[]>([])
const selectedAudit = ref<AiModelCallAuditView>()
const drawerOpen = ref(false)

const filters = reactive<AiModelCallAuditListRequest>({
  page: 1,
  size: 100,
  sort: 'createdAt',
  direction: 'desc',
})

const statusOptions = [
  { label: '已开始', value: 'STARTED', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
  { label: '阻断', value: 'BLOCKED', color: 'warning' },
]

const metrics = computed(() => [
  { label: '调用数', value: audits.value.length, hint: '最近 100 条' },
  { label: '成功', value: audits.value.filter((item) => item.callStatus === 'SUCCEEDED').length, hint: '结构化返回' },
  { label: '失败', value: audits.value.filter((item) => item.callStatus === 'FAILED').length, hint: '需排查' },
  { label: '平均耗时', value: `${averageDuration.value} ms`, hint: '当前列表' },
])

const averageDuration = computed(() => {
  const values = audits.value.map((item) => item.durationMs || 0).filter((item) => item > 0)
  if (!values.length) return 0
  return Math.round(values.reduce((sum, item) => sum + item, 0) / values.length)
})

const modelOptions = computed(() => uniqueOptions(audits.value, 'modelCode', 'modelDisplay'))
const operationOptions = computed(() => uniqueOptions(audits.value, 'operationCode', 'operationCode'))
const businessOptions = computed(() => uniqueOptions(audits.value, 'businessBizId', 'businessDisplay'))
const promptOptions = computed(() => uniqueOptions(audits.value, 'promptCode', 'promptDisplay'))
const skillOptions = computed(() => uniqueOptions(audits.value, 'skillCode', 'skillDisplay'))

const columns = [
  { title: '状态', width: 90, customRender: ({ record }: { record: AiModelCallAuditView }) => h(StatusTag, { value: record.callStatus, options: statusOptions }) },
  { title: '模型', dataIndex: 'modelDisplay' },
  { title: '操作', dataIndex: 'operationCode' },
  { title: '业务', dataIndex: 'businessDisplay' },
  { title: 'Skill', dataIndex: 'skillDisplay' },
  { title: 'Prompt', dataIndex: 'promptDisplay' },
  { title: '耗时', dataIndex: 'durationDisplay' },
  { title: '时间', customRender: ({ record }: { record: AiModelCallAuditView }) => formatDateTime(record.createdAt) },
]

const rowEvents = (record: AiModelCallAuditView) => ({
  onClick: async () => {
    const detail = await detailAiModelCallAudit(record.bizId)
    selectedAudit.value = normalizeAiModelCallAudit(detail)
    drawerOpen.value = true
  },
})

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiModelCallAudits(cleanFilters(filters))
    audits.value = (page.items || []).map(normalizeAiModelCallAudit)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模型调用审计加载失败'
  } finally {
    loading.value = false
  }
}

const resetFilters = () => {
  Object.keys(filters).forEach((key) => {
    if (!['page', 'size', 'sort', 'direction'].includes(key)) delete filters[key as keyof AiModelCallAuditListRequest]
  })
  load()
}

const cleanFilters = (value: AiModelCallAuditListRequest): AiModelCallAuditListRequest => {
  const result: AiModelCallAuditListRequest = {
    page: value.page,
    size: value.size,
    sort: value.sort,
    direction: value.direction,
  }
  if (value.operationCode?.trim()) result.operationCode = value.operationCode.trim()
  if (value.callStatus?.trim()) result.callStatus = value.callStatus.trim()
  if (value.providerCode?.trim()) result.providerCode = value.providerCode.trim()
  if (value.modelCode?.trim()) result.modelCode = value.modelCode.trim()
  if (value.modelVersion?.trim()) result.modelVersion = value.modelVersion.trim()
  if (value.businessType?.trim()) result.businessType = value.businessType.trim()
  if (value.businessBizId?.trim()) result.businessBizId = value.businessBizId.trim()
  if (value.taskCode?.trim()) result.taskCode = value.taskCode.trim()
  if (value.eventId?.trim()) result.eventId = value.eventId.trim()
  if (value.runBizId?.trim()) result.runBizId = value.runBizId.trim()
  if (value.runNo?.trim()) result.runNo = value.runNo.trim()
  if (value.reportBizId?.trim()) result.reportBizId = value.reportBizId.trim()
  if (value.promptCode?.trim()) result.promptCode = value.promptCode.trim()
  if (value.skillCode?.trim()) result.skillCode = value.skillCode.trim()
  if (value.scenarioCode?.trim()) result.scenarioCode = value.scenarioCode.trim()
  if (value.environment?.trim()) result.environment = value.environment.trim()
  return result
}

const uniqueOptions = (
  rows: AiModelCallAuditView[],
  valueKey: keyof AiModelCallAuditView,
  labelKey: keyof AiModelCallAuditView,
) => {
  const seen = new Set<string>()
  return rows
    .map((item) => ({
      value: typeof item[valueKey] === 'string' ? item[valueKey] as string : '',
      label: typeof item[labelKey] === 'string' ? item[labelKey] as string : '',
    }))
    .filter((item) => {
      if (!item.value || seen.has(item.value)) return false
      seen.add(item.value)
      return true
    })
}

onMounted(load)
</script>

<style scoped>
.audit-preview {
  max-height: 520px;
  overflow: auto;
}
</style>
