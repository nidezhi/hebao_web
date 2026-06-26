<template>
  <BusinessPageShell
    title="Task Config 任务配置"
    description="通用管理列表：编辑任务定义、启停调度、手动触发任务，并查看最近执行记录。"
    :endpoints="[endpoints.task.definitions, endpoints.task.saveDefinition, endpoints.task.trigger, endpoints.task.executions]"
    :icon="CloudSyncOutlined"
    status-text="TASK CONFIG"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="任务定义管理">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openEdit()">新增任务</a-button>
          </a-space>
        </template>
        <a-table row-key="code" size="small" :data-source="tasks" :columns="taskColumns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'type'">{{ optionLabel(ingestionTaskTypeOptions, record.type) }}</template>
            <template v-else-if="column.key === 'enabled'">
              <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openEdit(record)">编辑</a-button>
                <a-button size="small" type="link" @click="toggleTask(record)">{{ record.enabled ? '停用' : '启用' }}</a-button>
                <a-button size="small" type="link" danger @click="confirmTrigger(record)">触发</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
      <a-card class="page-card" :bordered="false" title="最近执行记录">
        <a-table row-key="bizId" size="small" :data-source="executions" :columns="executionColumns" />
      </a-card>
    </PageState>

    <a-drawer v-model:open="editOpen" width="720" :title="taskForm.code ? '编辑任务定义' : '新增任务定义'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="任务编码"><a-input v-model:value="taskForm.code" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="任务类型"><a-select v-model:value="taskForm.type" :options="taskTypeSelectOptions" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Cron"><a-input v-model:value="taskForm.cron" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="时区"><a-input v-model:value="taskForm.zone" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="启用"><a-switch v-model:checked="taskForm.enabled" /></a-form-item>
        <a-card v-if="taskForm.type === 'AI_DATA_SOURCE_DISCOVERY'" size="small" title="AI 数据源发现参数" class="mb-12">
          <a-row :gutter="12">
            <a-col :span="12">
              <a-form-item label="方向化任务编码">
                <a-select v-model:value="taskForm.code" :options="directionTaskCodeSelectOptions" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="采集方向">
                <a-select v-model:value="discoveryDraft.collectionDirection" :options="collectionDirectionSelectOptions" @change="handleDirectionChange" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :span="12"><a-form-item label="环境"><a-input v-model:value="discoveryDraft.environment" /></a-form-item></a-col>
            <a-col :span="12"><a-form-item label="市场范围"><a-input v-model:value="discoveryDraft.marketScope" /></a-form-item></a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :span="12"><a-form-item label="资产类别"><a-input v-model:value="discoveryDraft.assetClass" /></a-form-item></a-col>
            <a-col :span="12">
              <a-form-item label="Skill 编码">
                <a-select
                  v-model:value="discoveryDraft.skillCode"
                  show-search
                  :options="dataCollectionSkillSelectOptions"
                  :filter-option="filterOption"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :span="12"><a-form-item label="候选上限"><a-input-number v-model:value="discoveryDraft.candidateLimit" class="full-width" :min="1" :max="50" /></a-form-item></a-col>
            <a-col :span="12"><a-form-item label="自动沉淀候选"><a-switch v-model:checked="discoveryDraft.autoRegisterCandidates" /></a-form-item></a-col>
          </a-row>
          <a-form-item label="数据类型"><a-input v-model:value="discoveryDraft.dataTypes" /></a-form-item>
          <a-form-item label="偏好等级"><a-input v-model:value="discoveryDraft.preferredTrustLevels" /></a-form-item>
          <a-row :gutter="12">
            <a-col :span="12"><a-form-item label="包含暂不可用/需授权候选"><a-switch v-model:checked="discoveryDraft.includeDisabledCandidates" /></a-form-item></a-col>
            <a-col :span="12"><a-form-item label="自动启用候选"><a-switch v-model:checked="discoveryDraft.autoEnableCandidates" /></a-form-item></a-col>
          </a-row>
        </a-card>
        <a-form-item label="参数 JSON（高级字段）"><a-textarea v-model:value="parametersText" :auto-size="{ minRows: 8, maxRows: 14 }" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="taskForm.description" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitTask">保存</a-button>
          <a-button @click="editOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { CloudSyncOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, safeParseJson } from '@/shared/utils/format'
import { optionLabel } from '@/shared/dictionaries/status'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { listTaskDefinitions, listTaskExecutions, saveTaskDefinition, triggerInvestmentTask } from '@/entities/task/api'
import { ingestionTaskTypeOptions } from '@/entities/task/dictionary'
import type { InvestmentTaskDefinitionDto, ScheduledTaskExecutionDto } from '@/entities/task/model'
import {
  collectionDirectionOptions,
  collectionDirectionDefaults,
  dataCollectionSkillCodeOptions,
  directionTaskCodeOptions,
} from '@/entities/ai-skill/dictionary'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const editOpen = ref(false)
const tasks = ref<InvestmentTaskDefinitionDto[]>([])
const executions = ref<ScheduledTaskExecutionDto[]>([])
const taskForm = reactive<Partial<InvestmentTaskDefinitionDto>>({})
const parametersText = ref('{}')
const discoveryDraft = reactive<Record<string, string | number | boolean>>({})

const taskTypeSelectOptions = ingestionTaskTypeOptions.map((item) => ({ label: item.label, value: item.value }))
const collectionDirectionSelectOptions = collectionDirectionOptions.map((item) => ({ label: item.label, value: item.value }))
const dataCollectionSkillSelectOptions = dataCollectionSkillCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const directionTaskCodeSelectOptions = directionTaskCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const metrics = computed(() => [
  { label: '任务定义', value: tasks.value.length, hint: `启用 ${tasks.value.filter((item) => item.enabled).length}` },
  { label: '闭环任务', value: tasks.value.filter((item) => item.type === 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION').length, hint: '总编排' },
  { label: '执行记录', value: executions.value.length, hint: '最近' },
  { label: '失败执行', value: executions.value.filter((item) => item.status === 'FAILED').length, hint: '需处理' },
])
const taskColumns = [
  { title: '编码', dataIndex: 'code' },
  { title: '类型', key: 'type' },
  { title: 'Cron', dataIndex: 'cron' },
  { title: '启用', key: 'enabled' },
  { title: '操作', key: 'actions', width: 200 },
]
const executionColumns = [
  { title: '任务', dataIndex: 'taskCode' },
  { title: '状态', dataIndex: 'status' },
  { title: '触发', dataIndex: 'triggerSource' },
  { title: '失败原因', dataIndex: 'failureReason' },
  { title: '时间', customRender: ({ record }: { record: ScheduledTaskExecutionDto }) => formatDateTime(record.startedAt) },
]

const resetTaskForm = (task?: InvestmentTaskDefinitionDto) => {
  Object.keys(taskForm).forEach((key) => delete taskForm[key as keyof InvestmentTaskDefinitionDto])
  Object.assign(taskForm, task || { code: 'llm-data-collection-multi-source', zone: 'Asia/Shanghai', enabled: false, type: 'AI_DATA_SOURCE_DISCOVERY', parameters: defaultDiscoveryParameters() })
  resetDiscoveryDraft(taskForm.parameters || {})
  parametersText.value = JSON.stringify(taskForm.parameters || {}, null, 2)
}

const openEdit = (task?: InvestmentTaskDefinitionDto) => {
  resetTaskForm(task)
  editOpen.value = true
}

const submitTask = async () => {
  const parsed = safeParseJson<Record<string, unknown>>(parametersText.value)
  const parameters = taskForm.type === 'AI_DATA_SOURCE_DISCOVERY'
    ? { ...parsed, ...discoveryDraft }
    : parsed
  if (!parameters) {
    message.warning('参数 JSON 不可解析')
    return
  }
  saving.value = true
  try {
    await saveTaskDefinition({ ...taskForm, parameters })
    message.success('任务定义已保存')
    editOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const defaultDiscoveryParameters = () => ({
  environment: 'DEFAULT',
  marketScope: 'CN_MAINLAND',
  collectionDirection: 'MULTI_SOURCE',
  skillCode: collectionDirectionDefaults.MULTI_SOURCE.skillCode,
  assetClass: collectionDirectionDefaults.MULTI_SOURCE.assetClass,
  dataTypes: collectionDirectionDefaults.MULTI_SOURCE.dataTypes,
  topicKeywords: collectionDirectionDefaults.MULTI_SOURCE.topicKeywords,
  preferredTrustLevels: collectionDirectionDefaults.MULTI_SOURCE.preferredTrustLevels,
  candidateLimit: 8,
  includeDisabledCandidates: true,
  autoRegisterCandidates: true,
  autoEnableCandidates: false,
})

const resetDiscoveryDraft = (parameters: Record<string, unknown>) => {
  Object.keys(discoveryDraft).forEach((key) => delete discoveryDraft[key])
  Object.assign(discoveryDraft, { ...defaultDiscoveryParameters(), ...parameters })
}

const filterOption = (input: string, option?: { label?: string; value?: string }) =>
  `${option?.label || ''}${option?.value || ''}`.toLowerCase().includes(input.toLowerCase())

const handleDirectionChange = (value: string | number | boolean) => {
  const next = collectionDirectionDefaults[String(value)]
  if (!next) return
  taskForm.code = next.taskCode
  Object.assign(discoveryDraft, {
    skillCode: next.skillCode,
    assetClass: next.assetClass,
    dataTypes: next.dataTypes,
    topicKeywords: next.topicKeywords,
    preferredTrustLevels: next.preferredTrustLevels,
  })
}

const toggleTask = (task: InvestmentTaskDefinitionDto) => {
  Modal.confirm({
    title: `${task.enabled ? '停用' : '启用'}任务？`,
    content: task.code,
    onOk: async () => {
      await saveTaskDefinition({ ...task, enabled: !task.enabled })
      message.success('任务状态已更新')
      await load()
    },
  })
}

const confirmTrigger = (task: InvestmentTaskDefinitionDto) => {
  Modal.confirm({
    title: '确认手动触发任务？',
    content: task.code,
    okType: 'danger',
    onOk: async () => {
      await triggerInvestmentTask({ taskCode: task.code, parameters: task.parameters })
      message.success('任务已触发')
      await loadExecutions()
    },
  })
}

const loadExecutions = async () => {
  const executionPage = await listTaskExecutions({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' })
  executions.value = executionPage.items || []
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [taskList] = await Promise.all([listTaskDefinitions(), loadExecutions()])
    tasks.value = taskList || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '任务配置加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
