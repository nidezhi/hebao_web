<template>
  <BusinessPageShell
    title="Prompt Config 模板配置"
    description="通用管理列表：新增/编辑 Prompt 模板，维护变量、输出 Schema，并按行变更生命周期状态。"
    :endpoints="[endpoints.prompt.list, endpoints.prompt.detail, endpoints.prompt.save, endpoints.prompt.status, endpoints.prompt.preview]"
    :icon="ExperimentOutlined"
    status-text="PROMPT CONFIG"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="Prompt 版本管理">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openPrompt()">新增 Prompt</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="prompts" :columns="columns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'"><StatusTag :value="record.status" :options="promptStatusOptions" /></template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openPrompt(record)">编辑</a-button>
                <a-dropdown>
                  <a-button size="small" type="link">状态</a-button>
                  <template #overlay>
                    <a-menu @click="changeStatus(record, String($event.key))">
                      <a-menu-item key="DRAFT">草稿</a-menu-item>
                      <a-menu-item key="VALIDATING">校验中</a-menu-item>
                      <a-menu-item key="ACTIVE">生效</a-menu-item>
                      <a-menu-item key="RETIRED">退役</a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="promptOpen" width="820" :title="promptForm.bizId ? '编辑 Prompt' : '新增 Prompt'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Prompt 编码"><a-input v-model:value="promptForm.promptCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="版本"><a-input v-model:value="promptForm.promptVersion" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="场景"><a-input v-model:value="promptForm.scenario" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="状态"><a-select v-model:value="promptForm.status" :options="promptStatusSelectOptions" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="模板名称"><a-input v-model:value="promptForm.templateName" /></a-form-item>
        <a-form-item label="模板内容"><a-textarea v-model:value="promptForm.templateContent" :auto-size="{ minRows: 8, maxRows: 16 }" /></a-form-item>
        <a-form-item label="变量 JSON（高级字段）"><a-textarea v-model:value="variablesText" :auto-size="{ minRows: 4, maxRows: 10 }" /></a-form-item>
        <a-form-item label="输出 Schema JSON（高级字段）"><a-textarea v-model:value="schemasText" :auto-size="{ minRows: 4, maxRows: 10 }" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="promptForm.description" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitPrompt">保存</a-button>
          <a-button @click="promptOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { ExperimentOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listAiPrompts, saveAiPrompt, updateAiPromptStatus } from '@/entities/prompt/api'
import type { AiPromptTemplateDto, PromptStatus } from '@/entities/prompt/model'
import { promptStatusOptions } from '@/shared/dictionaries/status'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const prompts = ref<AiPromptTemplateDto[]>([])
const promptOpen = ref(false)
const promptForm = reactive<Record<string, unknown>>({})
const variablesText = ref('[]')
const schemasText = ref('[]')
const promptStatusSelectOptions = promptStatusOptions.map((item) => ({ label: item.label, value: item.value }))
const metrics = computed(() => [
  { label: 'Prompt 版本', value: prompts.value.length, hint: '当前扫描' },
  { label: 'ACTIVE', value: prompts.value.filter((item) => item.status === 'ACTIVE').length, hint: '默认候选' },
  { label: 'DRAFT', value: prompts.value.filter((item) => item.status === 'DRAFT').length, hint: '待验证' },
  { label: '变量数', value: prompts.value.reduce((sum, item) => sum + (item.variables?.length || 0), 0), hint: '模板变量' },
])
const columns = [
  { title: '编码', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'actions', width: 160 },
]
const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}
const openPrompt = (prompt?: AiPromptTemplateDto) => {
  resetObject(promptForm, prompt ? { ...prompt } : { status: 'DRAFT', scenario: 'INVESTMENT_PLAN', variables: [], outputSchemas: [] })
  variablesText.value = JSON.stringify(prompt?.variables || [], null, 2)
  schemasText.value = JSON.stringify(prompt?.outputSchemas || [], null, 2)
  promptOpen.value = true
}
const submitPrompt = async () => {
  const variables = safeParseJson(variablesText.value)
  const outputSchemas = safeParseJson(schemasText.value)
  if (!variables || !outputSchemas) {
    message.warning('变量或 Schema JSON 不可解析')
    return
  }
  saving.value = true
  try {
    await saveAiPrompt({ ...promptForm, variables, outputSchemas })
    message.success('Prompt 已保存')
    promptOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}
const changeStatus = (prompt: AiPromptTemplateDto, status: string) => {
  Modal.confirm({
    title: '确认变更 Prompt 状态？',
    content: `${prompt.promptCode}@${prompt.promptVersion} -> ${status}`,
    okType: status === 'ACTIVE' ? 'danger' : 'primary',
    onOk: async () => {
      await updateAiPromptStatus(prompt.bizId, status as PromptStatus)
      message.success('Prompt 状态已变更')
      await load()
    },
  })
}
const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiPrompts({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' })
    prompts.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Prompt 配置加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
