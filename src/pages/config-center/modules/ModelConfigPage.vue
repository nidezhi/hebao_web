<template>
  <BusinessPageShell
    title="Model Config 模型配置"
    description="通用管理列表：新增/编辑模型配置、变更生命周期、归档模型。ACTIVE 必须人工确认。"
    :endpoints="[endpoints.aiModel.list, endpoints.aiModel.detail, endpoints.aiModel.save, endpoints.aiModel.status, endpoints.aiModel.archive, endpoints.aiModelSkill.byModel]"
    :icon="DeploymentUnitOutlined"
    status-text="MODEL CONFIG"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <a-alert class="mb-12" type="warning" show-icon message="模型 ACTIVE / ARCHIVED 属于高风险生命周期动作，页面会二次确认。" />
      <a-alert
        v-if="mockEnabledModels.length"
        class="mb-12"
        type="error"
        show-icon
        :message="`${mockEnabledModels.length} 个模型仍开启 mockEnabled=true，闭环真实报告会被后端拒绝远程调用。`"
      />
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="AI 模型管理">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openModel()">新增模型</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="models" :columns="columns" :scroll="{ x: 1180 }">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'"><StatusTag :value="record.status" :options="aiModelStatusOptions" /></template>
            <template v-else-if="column.key === 'config'">
              <a-space direction="vertical" :size="2" class="model-config-summary">
                <a-space :size="6" wrap>
                  <a-tag :color="modelMockEnabled(record) ? 'red' : 'green'">
                    {{ modelMockEnabled(record) ? 'MOCK' : 'REAL' }}
                  </a-tag>
                  <a-tag color="blue">{{ modelRuntimeName(record) }}</a-tag>
                </a-space>
                <span class="muted-line">{{ modelBaseUrl(record) }}</span>
                <span class="muted-line">timeout {{ modelTimeout(record) }}s / tokens {{ modelTokenLimit(record) }}</span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'skills'">
              <a-space wrap>
                <a-tag v-for="skill in record.skills || []" :key="skill.bizId" :color="skill.enabled ? 'blue' : 'default'">
                  {{ skill.scenarioCode }} / {{ skill.skillCode }}
                </a-tag>
                <span v-if="!record.skills?.length" class="muted-line">未绑定</span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openModel(record)">编辑</a-button>
                <a-button size="small" type="link" @click="router.push('/config-center/model-skills')">绑定 Skill</a-button>
                <a-dropdown>
                  <a-button size="small" type="link">状态</a-button>
                  <template #overlay>
                    <a-menu @click="changeStatus(record, String($event.key))">
                      <a-menu-item key="DRAFT">草稿</a-menu-item>
                      <a-menu-item key="VALIDATING">校验中</a-menu-item>
                      <a-menu-item key="ACTIVE">生效</a-menu-item>
                      <a-menu-item key="INACTIVE">停用</a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
                <a-button size="small" type="link" danger @click="archive(record)">归档</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="modelOpen" width="760" :title="modelForm.bizId ? '编辑模型' : '新增模型'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="模型编码"><a-input v-model:value="modelForm.modelCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="版本"><a-input v-model:value="modelForm.modelVersion" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="模型名称"><a-input v-model:value="modelForm.modelName" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="模型类型"><a-input v-model:value="modelForm.modelType" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="Provider"><a-input v-model:value="modelForm.provider" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="Artifact URI"><a-input v-model:value="modelForm.artifactUri" /></a-form-item>
        <a-form-item label="状态"><a-select v-model:value="modelForm.status" :options="modelStatusSelectOptions" /></a-form-item>
        <a-form-item label="模型配置 JSON（高级字段）"><a-textarea v-model:value="modelConfigText" :auto-size="{ minRows: 4, maxRows: 10 }" /></a-form-item>
        <a-form-item label="指标 JSON（高级字段）"><a-textarea v-model:value="metricsText" :auto-size="{ minRows: 4, maxRows: 10 }" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitModel">保存</a-button>
          <a-button @click="modelOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Modal, message } from 'ant-design-vue'
import { DeploymentUnitOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { archiveAiModel, listAiModels, saveAiModel, updateAiModelStatus } from '@/entities/ai-model/api'
import { listAiModelSkillBindingsByModel } from '@/entities/ai-model-skill/api'
import type { AiModelSkillBindingDto } from '@/entities/ai-model-skill/model'
import { normalizeAiModel } from '@/entities/ai-model/adapter'
import { aiModelStatusOptions } from '@/entities/ai-model/dictionary'
import type { AiModelDto } from '@/entities/ai-model/model'

const loading = ref(false)
const router = useRouter()
const saving = ref(false)
const errorMessage = ref('')
const models = ref<AiModelDto[]>([])
const modelOpen = ref(false)
const modelForm = reactive<Record<string, unknown>>({})
const modelConfigText = ref('{}')
const metricsText = ref('{}')
const modelStatusSelectOptions = aiModelStatusOptions.map((item) => ({ label: item.label, value: item.value }))
const modelConfigView = (model: AiModelDto) => normalizeAiModel(model).modelConfigView || {}
const modelConfigField = (model: AiModelDto, key: string) => modelConfigView(model)[key]
const modelMockEnabled = (model: AiModelDto) => {
  const value = modelConfigField(model, 'mockEnabled')
  return value === true || String(value).toLowerCase() === 'true'
}
const modelBaseUrl = (model: AiModelDto) => String(modelConfigField(model, 'baseUrl') || '未配置 baseUrl')
const modelRuntimeName = (model: AiModelDto) => String(modelConfigField(model, 'model') || model.modelName || model.modelCode)
const modelTimeout = (model: AiModelDto) => String(modelConfigField(model, 'timeoutSeconds') || '-')
const modelTokenLimit = (model: AiModelDto) => String(modelConfigField(model, 'maxTokens') || modelConfigField(model, 'maxCompletionTokens') || '-')
const realInvocationModels = computed(() => models.value.filter((item) => !modelMockEnabled(item) && modelConfigField(item, 'baseUrl') && modelConfigField(item, 'model')))
const mockEnabledModels = computed(() => models.value.filter(modelMockEnabled))
const metrics = computed(() => [
  { label: '模型数', value: models.value.length, hint: '当前扫描' },
  { label: 'ACTIVE', value: models.value.filter((item) => item.status === 'ACTIVE').length, hint: '生效' },
  { label: '真实调用就绪', value: realInvocationModels.value.length, hint: 'baseUrl + model' },
  { label: 'Mock 开启', value: mockEnabledModels.value.length, hint: '报告门禁会拦截' },
])
const columns = [
  { title: '编码', dataIndex: 'modelCode' },
  { title: '版本', dataIndex: 'modelVersion' },
  { title: 'Provider', dataIndex: 'provider' },
  { title: '类型', dataIndex: 'modelType' },
  { title: '调用配置', key: 'config', width: 260 },
  { title: 'Skill 绑定', key: 'skills' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'actions', width: 260 },
]
const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}
const openModel = (model?: AiModelDto) => {
  resetObject(modelForm, model ? { ...model } : { status: 'DRAFT', modelType: 'INVESTMENT_ANALYSIS', provider: 'OPENAI_COMPATIBLE' })
  modelConfigText.value = model?.modelConfig || '{}'
  metricsText.value = model?.metrics || '{}'
  modelOpen.value = true
}
const submitModel = async () => {
  if (safeParseJson(modelConfigText.value) === undefined || safeParseJson(metricsText.value) === undefined) {
    message.warning('模型配置或指标 JSON 不可解析')
    return
  }
  saving.value = true
  try {
    await saveAiModel({ ...modelForm, modelConfig: modelConfigText.value, metrics: metricsText.value })
    message.success('模型已保存')
    modelOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}
const changeStatus = (model: AiModelDto, status: string) => {
  Modal.confirm({
    title: '确认变更模型状态？',
    content: `${model.modelCode}@${model.modelVersion} -> ${status}`,
    okType: status === 'ACTIVE' ? 'danger' : 'primary',
    onOk: async () => {
      await updateAiModelStatus({ bizId: model.bizId, status })
      message.success('模型状态已变更')
      await load()
    },
  })
}
const archive = (model: AiModelDto) => {
  Modal.confirm({
    title: '确认归档模型？',
    content: `${model.modelCode}@${model.modelVersion}`,
    okType: 'danger',
    onOk: async () => {
      await archiveAiModel(model.bizId)
      message.success('模型已归档')
      await load()
    },
  })
}
const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiModels({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' })
    const items = page.items || []
    const bindings = await Promise.all(items.map(async (model) => {
      try {
        return [model.bizId, await listAiModelSkillBindingsByModel(model.bizId)] as const
      } catch {
        return [model.bizId, [] as AiModelSkillBindingDto[]] as const
      }
    }))
    const bindingMap = new Map(bindings)
    models.value = items.map((model) => ({ ...model, skills: bindingMap.get(model.bizId) || model.skills || [] }))
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模型配置加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
