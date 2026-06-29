<template>
  <BusinessPageShell
    title="Prompt Lab 实验室"
    description="管理 Prompt 版本、变量、输出 Schema、预览和模型候选。预览只做变量替换与校验，不触发真实模型。"
    :endpoints="[endpoints.prompt.list, endpoints.prompt.preview, endpoints.aiModel.list, endpoints.aiSkill.list, endpoints.aiModelSkill.list, endpoints.promptEvaluation.list]"
    :icon="ExperimentOutlined"
    status-text="HUMAN GATE"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-tabs>
        <a-tab-pane key="prompts" tab="Prompt 版本">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :xl="10">
              <a-card class="page-card" :bordered="false" title="版本列表">
                <a-table row-key="bizId" size="small" :data-source="prompts" :columns="promptColumns" @row="promptRowEvents" />
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="14">
              <a-card class="page-card" :bordered="false" title="模板 / 变量 / Schema / 预览">
                <EmptyEvidence v-if="!selectedPrompt" description="请选择 Prompt 版本。" />
                <a-space v-else direction="vertical" :size="14" class="full-width">
                  <a-alert :type="selectedPrompt.status === 'ACTIVE' ? 'success' : 'info'" show-icon :message="selectedPrompt.status === 'ACTIVE' ? 'ACTIVE 版本可作为默认调用候选' : '非 ACTIVE 版本仅可查看、编辑或候选验证'" />
                  <a-textarea :value="selectedPrompt.templateContent" readonly :auto-size="{ minRows: 5, maxRows: 10 }" />
                  <a-row :gutter="[16, 16]">
                    <a-col :xs="24" :lg="12">
                      <a-table row-key="variableName" size="small" :pagination="false" :data-source="selectedPrompt.variables" :columns="variableColumns" />
                    </a-col>
                    <a-col :xs="24" :lg="12">
                      <a-list :data-source="selectedPrompt.outputSchemas" size="small">
                        <template #renderItem="{ item }">
                          <a-list-item>
                            <a-list-item-meta :title="item.schemaVersion" :description="item.schemaJson" />
                          </a-list-item>
                        </template>
                      </a-list>
                    </a-col>
                  </a-row>
                  <a-card size="small" title="预览变量">
                    <EmptyEvidence v-if="!selectedPrompt.variables.length" description="当前 Prompt 未声明变量，可直接预览。" />
                    <a-row v-else :gutter="12">
                      <a-col v-for="variable in selectedPrompt.variables" :key="variable.variableName" :span="24">
                        <a-form-item :label="variable.variableName" :extra="variable.description || variable.sourcePath">
                          <a-textarea
                            v-if="variable.previewValueType === 'json' || variable.previewValueType === 'textarea'"
                            v-model:value="previewVariables[variable.variableName]"
                            :placeholder="variable.previewExampleValue || variable.previewDefaultValue || variable.sourcePath"
                            :auto-size="{ minRows: variable.previewValueType === 'json' ? 4 : 2, maxRows: 8 }"
                          />
                          <a-input
                            v-else
                            v-model:value="previewVariables[variable.variableName]"
                            :placeholder="variable.previewExampleValue || variable.previewDefaultValue || variable.sourcePath"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-space class="mt-12" wrap>
                      <a-button type="primary" :loading="previewing" @click="previewPrompt">预览 Prompt</a-button>
                      <a-button @click="fillPreviewExamples">填入示例值</a-button>
                    </a-space>
                  </a-card>
                  <a-card v-if="previewResult" size="small" title="预览结果">
                    <a-alert v-if="previewResult.missingVariables?.length" type="warning" show-icon :message="`缺失变量：${previewResult.missingVariables.join(', ')}`" />
                    <a-alert v-else-if="previewResult.displayMessage" :type="previewResult.readyForModel ? 'success' : 'info'" show-icon :message="previewResult.displayMessage" />
                    <pre class="text-preview">{{ previewResult.renderedPrompt }}</pre>
                  </a-card>
                </a-space>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="models" tab="模型候选">
          <a-alert class="mb-12" type="warning" show-icon message="自动闭环生成的模型候选必须停留在 DRAFT / VALIDATING，启用需要人工确认和灰度范围。" />
          <a-table row-key="bizId" size="small" :data-source="models" :columns="modelColumns" />
        </a-tab-pane>

        <a-tab-pane key="skills" tab="AI Skill 治理">
          <a-alert class="mb-12" type="info" show-icon message="Skill 是模型执行方向化采集、Prompt 治理、质量审计等场景的指令资产；具体维护请进入配置中心。" />
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :xl="12">
              <a-card class="page-card" :bordered="false" title="Skill 资产">
                <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="skills" :columns="skillColumns" />
              </a-card>
            </a-col>
            <a-col :xs="24" :xl="12">
              <a-card class="page-card" :bordered="false" title="模型绑定">
                <a-table row-key="bizId" size="small" :pagination="{ pageSize: 8 }" :data-source="modelSkillBindings" :columns="bindingColumns" />
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="evaluations" tab="Prompt 评估">
          <a-table row-key="bizId" size="small" :data-source="evaluations" :columns="evaluationColumns" />
        </a-tab-pane>
      </a-tabs>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, reactive, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import { ExperimentOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listAiPrompts, previewAiPrompt } from '@/entities/prompt/api'
import { promptCanBeDefaultCandidate } from '@/entities/prompt/adapter'
import type { AiPromptPreviewDto, AiPromptTemplateDto } from '@/entities/prompt/model'
import { promptStatusOptions } from '@/shared/dictionaries/status'
import { listAiModels } from '@/entities/ai-model/api'
import { normalizeAiModel } from '@/entities/ai-model/adapter'
import { aiModelStatusOptions } from '@/entities/ai-model/dictionary'
import type { AiModelDto } from '@/entities/ai-model/model'
import { listAiSkills } from '@/entities/ai-skill/api'
import type { AiSkillDto } from '@/entities/ai-skill/model'
import { listAiModelSkillBindings } from '@/entities/ai-model-skill/api'
import type { AiModelSkillBindingDto } from '@/entities/ai-model-skill/model'
import { listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto } from '@/entities/feedback/model'

const loading = ref(false)
const previewing = ref(false)
const errorMessage = ref('')
const prompts = ref<AiPromptTemplateDto[]>([])
const models = ref<AiModelDto[]>([])
const skills = ref<AiSkillDto[]>([])
const modelSkillBindings = ref<AiModelSkillBindingDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])
const selectedPrompt = ref<AiPromptTemplateDto>()
const previewVariables = reactive<Record<string, string>>({})
const previewResult = ref<AiPromptPreviewDto>()

const metrics = computed(() => [
  { label: 'Prompt 版本', value: prompts.value.length, hint: `ACTIVE ${prompts.value.filter(promptCanBeDefaultCandidate).length}` },
  { label: '模型候选', value: models.value.filter((item) => normalizeAiModel(item).isClosedLoopCandidate).length, hint: '需人工确认' },
  { label: 'ACTIVE Skill', value: skills.value.filter((item) => item.status === 'ACTIVE').length, hint: '模型能力' },
  { label: '待复核评估', value: evaluations.value.filter((item) => item.reviewStatus !== 'APPROVED').length, hint: 'Review Loop 回流' },
])

const promptColumns = [
  { title: '编码', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario' },
  { title: '状态', customRender: ({ record }: { record: AiPromptTemplateDto }) => h(StatusTag, { value: record.status, options: promptStatusOptions }) },
]
const variableColumns = [
  { title: '变量', dataIndex: 'variableName' },
  { title: '来源路径', dataIndex: 'sourcePath' },
  { title: '必填', customRender: ({ record }: { record: { required?: boolean } }) => record.required ? '是' : '否' },
]
const modelColumns = [
  { title: '模型', dataIndex: 'modelCode' },
  { title: '版本', dataIndex: 'modelVersion' },
  { title: 'Provider', dataIndex: 'provider' },
  { title: '状态', customRender: ({ record }: { record: AiModelDto }) => h(StatusTag, { value: record.status, options: aiModelStatusOptions }) },
  { title: '候选指标', customRender: ({ record }: { record: AiModelDto }) => JSON.stringify(normalizeAiModel(record).metricsView || {}) },
]
const evaluationColumns = [
  { title: 'Prompt', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario' },
  { title: '评分', dataIndex: 'score' },
  { title: '复核', dataIndex: 'reviewStatus' },
]
const skillColumns = [
  { title: 'Skill', dataIndex: 'skillCode' },
  { title: '版本', dataIndex: 'skillVersion' },
  { title: '类型', dataIndex: 'skillType' },
  { title: '状态', dataIndex: 'status' },
]
const bindingColumns = [
  { title: '模型', dataIndex: 'modelCode' },
  { title: 'Skill', dataIndex: 'skillCode' },
  { title: '场景', dataIndex: 'scenarioCode' },
  { title: '启用', customRender: ({ record }: { record: AiModelSkillBindingDto }) => record.enabled ? '是' : '否' },
]

const promptRowEvents = (record: AiPromptTemplateDto) => ({ onClick: () => { selectedPrompt.value = record; previewResult.value = undefined } })

const resetPreviewVariables = (prompt?: AiPromptTemplateDto) => {
  Object.keys(previewVariables).forEach((key) => delete previewVariables[key])
  prompt?.variables.forEach((variable) => {
    previewVariables[variable.variableName] = variable.previewDefaultValue || ''
  })
}

const fillPreviewExamples = () => {
  selectedPrompt.value?.variables.forEach((variable) => {
    previewVariables[variable.variableName] = variable.previewExampleValue || variable.previewDefaultValue || ''
  })
}

const previewPrompt = async () => {
  if (!selectedPrompt.value) return
  const missing = selectedPrompt.value.variables.find((variable) =>
    variable.required && !previewVariables[variable.variableName]?.trim())
  if (missing) {
    message.warning(`请填写预览变量 ${missing.variableName}`)
    return
  }
  previewing.value = true
  try {
    previewResult.value = await previewAiPrompt({ promptBizId: selectedPrompt.value.bizId, variables: { ...previewVariables } })
  } catch (error) {
    message.error(error instanceof Error ? error.message : '预览失败')
  } finally {
    previewing.value = false
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [promptPage, modelPage, skillPage, bindingPage, evaluationPage] = await Promise.all([
      listAiPrompts({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listAiModels({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listAiSkills({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listAiModelSkillBindings({ page: 1, size: 50, sort: 'priority', direction: 'asc' }),
      listPromptEvaluations({ page: 1, size: 50, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    prompts.value = promptPage.items || []
    models.value = modelPage.items || []
    skills.value = skillPage.items || []
    modelSkillBindings.value = bindingPage.items || []
    evaluations.value = evaluationPage.items || []
    selectedPrompt.value = prompts.value[0]
    resetPreviewVariables(selectedPrompt.value)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Prompt 实验室接口加载失败'
  } finally {
    loading.value = false
  }
}

watch(selectedPrompt, (prompt) => resetPreviewVariables(prompt))

onMounted(load)
</script>
