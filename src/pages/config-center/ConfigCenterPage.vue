<template>
  <BusinessPageShell
    title="Config Center 配置中心"
    description="分域管理 AI 模型、Prompt、投资任务和数据源配置；每个配置项都提供列表、详情和保存入口。"
    :endpoints="[
      endpoints.aiModel.list,
      endpoints.aiModel.save,
      endpoints.prompt.list,
      endpoints.prompt.save,
      endpoints.task.definitions,
      endpoints.task.saveDefinition,
      endpoints.dataSource.list,
      endpoints.dataSource.save,
    ]"
    :icon="ControlOutlined"
    :status-text="errorMessage ? 'CONFIG WAITING' : 'CONFIG OPS'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-tabs v-model:active-key="activeTab" type="card" class="config-tabs">
        <a-tab-pane key="models" tab="AI 模型">
          <a-row :gutter="[18, 18]">
            <a-col :xs="24" :xl="14">
              <a-card class="cockpit-card" :bordered="false" title="模型配置列表">
                <a-table
                  size="small"
                  row-key="bizId"
                  :data-source="models"
                  :columns="modelColumns"
                  :pagination="{ pageSize: 8 }"
                  :row-class-name="(record: AiModelDto) => record.bizId === selectedModel?.bizId ? 'selected-business-row' : ''"
                  @row="(record: AiModelDto) => ({ onClick: () => selectModel(record) })"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'status'">
                      <a-tag :color="optionColor(aiModelStatusOptions, record.status)">
                        {{ optionLabel(aiModelStatusOptions, record.status) }}
                      </a-tag>
                    </template>
                    <template v-if="column.key === 'updatedAt'">
                      {{ formatDateTime(record.updatedAt) }}
                    </template>
                  </template>
                </a-table>
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="10">
              <a-card class="cockpit-card" :bordered="false">
                <template #title>模型配置详情</template>
                <template #extra>
                  <a-button type="primary" :loading="saving" @click="saveModelConfig">保存模型</a-button>
                </template>
                <a-form layout="vertical">
                  <a-form-item label="模型编码"><a-input v-model:value="modelForm.modelCode" /></a-form-item>
                  <a-form-item label="模型版本"><a-input v-model:value="modelForm.modelVersion" /></a-form-item>
                  <a-form-item label="模型名称"><a-input v-model:value="modelForm.modelName" /></a-form-item>
                  <a-form-item label="模型类型"><a-input v-model:value="modelForm.modelType" /></a-form-item>
                  <a-form-item label="提供方"><a-input v-model:value="modelForm.provider" /></a-form-item>
                  <a-form-item label="状态">
                    <a-select v-model:value="modelForm.status" :options="aiModelStatusOptions" />
                  </a-form-item>
                  <a-form-item label="模型配置 JSON">
                    <a-textarea v-model:value="modelForm.modelConfig" :rows="4" />
                  </a-form-item>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="prompts" tab="Prompt">
          <a-row :gutter="[18, 18]">
            <a-col :xs="24" :xl="14">
              <a-card class="cockpit-card" :bordered="false" title="Prompt 配置列表">
                <a-table
                  size="small"
                  row-key="bizId"
                  :data-source="prompts"
                  :columns="promptColumns"
                  :pagination="{ pageSize: 8 }"
                  :row-class-name="(record: AiPromptTemplateDto) => record.bizId === selectedPrompt?.bizId ? 'selected-business-row' : ''"
                  @row="(record: AiPromptTemplateDto) => ({ onClick: () => selectPrompt(record) })"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'status'">
                      <a-tag :color="optionColor(promptStatusOptions, record.status)">
                        {{ optionLabel(promptStatusOptions, record.status) }}
                      </a-tag>
                    </template>
                    <template v-if="column.key === 'structure'">
                      <a-space wrap>
                        <a-tag color="cyan">{{ record.variables?.length || 0 }} 变量</a-tag>
                        <a-tag color="purple">{{ record.outputSchemas?.length || 0 }} Schema</a-tag>
                      </a-space>
                    </template>
                  </template>
                </a-table>
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="10">
              <a-card class="cockpit-card" :bordered="false">
                <template #title>Prompt 模板配置</template>
                <template #extra>
                  <a-button type="primary" :loading="saving" @click="savePromptConfig">保存 Prompt</a-button>
                </template>
                <a-form layout="vertical">
                  <a-form-item label="Prompt 编码"><a-input v-model:value="promptForm.promptCode" /></a-form-item>
                  <a-form-item label="版本"><a-input v-model:value="promptForm.promptVersion" /></a-form-item>
                  <a-form-item label="场景"><a-input v-model:value="promptForm.scenario" /></a-form-item>
                  <a-form-item label="模板名称"><a-input v-model:value="promptForm.templateName" /></a-form-item>
                  <a-form-item label="状态">
                    <a-select v-model:value="promptForm.status" :options="promptStatusOptions" />
                  </a-form-item>
                  <a-form-item label="模板内容">
                    <a-textarea v-model:value="promptForm.templateContent" :rows="8" />
                  </a-form-item>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="tasks" tab="投资任务">
          <a-row :gutter="[18, 18]">
            <a-col :xs="24" :xl="14">
              <a-card class="cockpit-card" :bordered="false" title="任务定义列表">
                <a-table
                  size="small"
                  row-key="code"
                  :data-source="tasks"
                  :columns="taskColumns"
                  :pagination="{ pageSize: 8 }"
                  :row-class-name="(record: InvestmentTaskDefinitionDto) => record.code === selectedTask?.code ? 'selected-business-row' : ''"
                  @row="(record: InvestmentTaskDefinitionDto) => ({ onClick: () => selectTask(record) })"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'enabled'">
                      <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
                    </template>
                    <template v-if="column.key === 'action'">
                      <a-button size="small" :loading="triggeringCode === record.code" @click.stop="triggerTask(record.code)">
                        触发
                      </a-button>
                    </template>
                  </template>
                </a-table>
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="10">
              <a-card class="cockpit-card" :bordered="false">
                <template #title>任务调度配置</template>
                <template #extra>
                  <a-button type="primary" :loading="saving" @click="saveTaskConfig">保存任务</a-button>
                </template>
                <a-form layout="vertical">
                  <a-form-item label="任务编码"><a-input v-model:value="taskForm.code" /></a-form-item>
                  <a-form-item label="任务类型"><a-input v-model:value="taskForm.type" /></a-form-item>
                  <a-form-item label="Cron"><a-input v-model:value="taskForm.cron" /></a-form-item>
                  <a-form-item label="时区"><a-input v-model:value="taskForm.zone" /></a-form-item>
                  <a-form-item label="启用"><a-switch v-model:checked="taskForm.enabled" /></a-form-item>
                  <a-form-item label="参数 JSON"><a-textarea v-model:value="taskForm.parametersText" :rows="6" /></a-form-item>
                  <a-form-item label="说明"><a-textarea v-model:value="taskForm.description" :rows="3" /></a-form-item>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="sources" tab="数据源">
          <a-row :gutter="[18, 18]">
            <a-col :xs="24" :xl="14">
              <a-card class="cockpit-card" :bordered="false" title="数据源配置列表">
                <a-table
                  size="small"
                  row-key="bizId"
                  :data-source="sources"
                  :columns="sourceColumns"
                  :pagination="{ pageSize: 8 }"
                  :row-class-name="(record: DataSourceDto) => record.bizId === selectedSource?.bizId ? 'selected-business-row' : ''"
                  @row="(record: DataSourceDto) => ({ onClick: () => selectSource(record) })"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'enabled'">
                      <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
                    </template>
                    <template v-if="column.key === 'quality'">
                      {{ formatPercent(record.latestQuality?.qualityScore) }}
                    </template>
                  </template>
                </a-table>
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="10">
              <a-card class="cockpit-card" :bordered="false">
                <template #title>数据源配置详情</template>
                <template #extra>
                  <a-button type="primary" :loading="saving" @click="saveSourceConfig">保存数据源</a-button>
                </template>
                <a-form layout="vertical">
                  <a-form-item label="来源编码"><a-input v-model:value="sourceForm.sourceCode" /></a-form-item>
                  <a-form-item label="来源名称"><a-input v-model:value="sourceForm.sourceName" /></a-form-item>
                  <a-form-item label="来源类型"><a-input v-model:value="sourceForm.sourceType" /></a-form-item>
                  <a-form-item label="可信等级"><a-select v-model:value="sourceForm.trustLevel" :options="trustLevelOptions" /></a-form-item>
                  <a-form-item label="Base URL"><a-input v-model:value="sourceForm.baseUrl" /></a-form-item>
                  <a-form-item label="抓取频率"><a-input v-model:value="sourceForm.fetchFrequency" /></a-form-item>
                  <a-form-item label="负责人"><a-input v-model:value="sourceForm.owner" /></a-form-item>
                  <a-form-item label="启用"><a-switch v-model:checked="sourceForm.enabled" /></a-form-item>
                  <a-form-item label="说明"><a-textarea v-model:value="sourceForm.description" :rows="3" /></a-form-item>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { ControlOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listAiModels, saveAiModel } from '@/entities/ai-model/api'
import { aiModelStatusOptions } from '@/entities/ai-model/dictionary'
import type { AiModelDto } from '@/entities/ai-model/model'
import { listAiPrompts, saveAiPrompt } from '@/entities/prompt/api'
import type { AiPromptTemplateDto } from '@/entities/prompt/model'
import { listTaskDefinitions, saveTaskDefinition, triggerInvestmentTask } from '@/entities/task/api'
import type { InvestmentTaskDefinitionDto } from '@/entities/task/model'
import { listDataSources, saveDataSource } from '@/entities/data-source/api'
import { trustLevelOptions } from '@/entities/data-source/dictionary'
import type { DataSourceDto } from '@/entities/data-source/model'
import { promptStatusOptions, optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime, formatPercent, parseJsonSafely } from '@/shared/utils/format'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const activeTab = ref('models')
const triggeringCode = ref('')

const models = ref<AiModelDto[]>([])
const prompts = ref<AiPromptTemplateDto[]>([])
const tasks = ref<InvestmentTaskDefinitionDto[]>([])
const sources = ref<DataSourceDto[]>([])

const selectedModel = ref<AiModelDto>()
const selectedPrompt = ref<AiPromptTemplateDto>()
const selectedTask = ref<InvestmentTaskDefinitionDto>()
const selectedSource = ref<DataSourceDto>()

const modelForm = reactive<Record<string, unknown>>({})
const promptForm = reactive<Record<string, unknown>>({})
const taskForm = reactive<Record<string, unknown>>({})
const sourceForm = reactive<Record<string, unknown>>({})

const metrics = computed(() => [
  { label: 'AI 模型', value: models.value.length, hint: '模型注册' },
  { label: 'ACTIVE 模型', value: models.value.filter((item) => item.status === 'ACTIVE').length, hint: '默认候选' },
  { label: 'Prompt 版本', value: prompts.value.length, hint: '模板治理' },
  { label: '采集任务', value: tasks.value.length, hint: '调度配置' },
  { label: '数据源', value: sources.value.length, hint: '来源治理' },
  { label: '启用数据源', value: sources.value.filter((item) => item.enabled).length, hint: '可参与链路' },
])

const modelColumns = [
  { title: '模型编码', dataIndex: 'modelCode', key: 'modelCode' },
  { title: '版本', dataIndex: 'modelVersion', key: 'modelVersion' },
  { title: '名称', dataIndex: 'modelName', key: 'modelName' },
  { title: '类型', dataIndex: 'modelType', key: 'modelType' },
  { title: '提供方', dataIndex: 'provider', key: 'provider' },
  { title: '状态', key: 'status' },
  { title: '更新时间', key: 'updatedAt' },
]

const promptColumns = [
  { title: '编码', dataIndex: 'promptCode', key: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', key: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario', key: 'scenario' },
  { title: '名称', dataIndex: 'templateName', key: 'templateName' },
  { title: '状态', key: 'status' },
  { title: '结构', key: 'structure' },
]

const taskColumns = [
  { title: '编码', dataIndex: 'code', key: 'code' },
  { title: '类型', dataIndex: 'type', key: 'type' },
  { title: 'Cron', dataIndex: 'cron', key: 'cron' },
  { title: '时区', dataIndex: 'zone', key: 'zone' },
  { title: '状态', key: 'enabled' },
  { title: '操作', key: 'action' },
]

const sourceColumns = [
  { title: '编码', dataIndex: 'sourceCode', key: 'sourceCode' },
  { title: '名称', dataIndex: 'sourceName', key: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType', key: 'sourceType' },
  { title: '可信等级', dataIndex: 'trustLevel', key: 'trustLevel' },
  { title: '状态', key: 'enabled' },
  { title: '质量分', key: 'quality' },
]

const assignForm = (target: Record<string, unknown>, value: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, value)
}

const selectModel = (record: AiModelDto) => {
  selectedModel.value = record
  assignForm(modelForm, { ...record })
}

const selectPrompt = (record: AiPromptTemplateDto) => {
  selectedPrompt.value = record
  assignForm(promptForm, { ...record })
}

const selectTask = (record: InvestmentTaskDefinitionDto) => {
  selectedTask.value = record
  assignForm(taskForm, {
    ...record,
    parametersText: JSON.stringify(record.parameters || {}, null, 2),
  })
}

const selectSource = (record: DataSourceDto) => {
  selectedSource.value = record
  assignForm(sourceForm, { ...record })
}

const saveModelConfig = async () => {
  saving.value = true
  try {
    const saved = await saveAiModel(modelForm)
    models.value = [saved, ...models.value.filter((item) => item.bizId !== saved.bizId)]
    selectModel(saved)
    message.success('模型配置已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存模型失败'
  } finally {
    saving.value = false
  }
}

const savePromptConfig = async () => {
  saving.value = true
  try {
    const saved = await saveAiPrompt(promptForm)
    prompts.value = [saved, ...prompts.value.filter((item) => item.bizId !== saved.bizId)]
    selectPrompt(saved)
    message.success('Prompt 配置已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存 Prompt 失败'
  } finally {
    saving.value = false
  }
}

const saveTaskConfig = async () => {
  saving.value = true
  try {
    const parameters = parseJsonSafely<Record<string, unknown>>(String(taskForm.parametersText || '{}')) || {}
    const saved = await saveTaskDefinition({
      ...taskForm,
      parameters,
    })
    tasks.value = [saved, ...tasks.value.filter((item) => item.code !== saved.code)]
    selectTask(saved)
    message.success('任务配置已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存任务失败'
  } finally {
    saving.value = false
  }
}

const saveSourceConfig = async () => {
  saving.value = true
  try {
    const saved = await saveDataSource(sourceForm as Partial<DataSourceDto>)
    sources.value = [saved, ...sources.value.filter((item) => item.bizId !== saved.bizId)]
    selectSource(saved)
    message.success('数据源配置已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存数据源失败'
  } finally {
    saving.value = false
  }
}

const triggerTask = async (taskCode: string) => {
  triggeringCode.value = taskCode
  try {
    await triggerInvestmentTask({ taskCode })
    message.success('任务已触发')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '触发任务失败'
  } finally {
    triggeringCode.value = ''
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [modelPage, promptPage, taskList, sourcePage] = await Promise.all([
      listAiModels({ page: 1, size: 50 }),
      listAiPrompts({ page: 1, size: 50 }),
      listTaskDefinitions(),
      listDataSources({ page: 1, size: 50 }),
    ])
    models.value = modelPage.items || []
    prompts.value = promptPage.items || []
    tasks.value = taskList || []
    sources.value = sourcePage.items || []
    if (models.value[0]) selectModel(models.value[0])
    if (prompts.value[0]) selectPrompt(prompts.value[0])
    if (tasks.value[0]) selectTask(tasks.value[0])
    if (sources.value[0]) selectSource(sources.value[0])
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
