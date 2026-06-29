<template>
  <BusinessPageShell
    title="运行模型绑定"
    description="按业务场景和环境绑定实际运行模型。该配置决定数据源发现、自动报告和闭环编排等后端节点调用哪一个 ACTIVE 模型。"
    :endpoints="[endpoints.aiModelBinding.list, endpoints.aiModelBinding.detail, endpoints.aiModelBinding.save, endpoints.aiModel.list]"
    :icon="DeploymentUnitOutlined"
    status-text="RUNTIME MODEL"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-alert class="mb-12" type="info" show-icon message="运行模型绑定负责选择执行模型；模型 Skill 绑定负责把模型实例连接到具体 Skill 版本。两者都启用后，闭环节点才有稳定执行能力。" />
      <a-card class="page-card" :bordered="false" title="运行绑定管理">
        <template #extra>
          <a-space wrap>
            <a-select
              v-model:value="filters.scenarioCode"
              allow-clear
              placeholder="场景"
              style="width: 190px"
              :options="scenarioSelectOptions"
              @change="load"
            />
            <a-select
              v-model:value="filters.enabled"
              allow-clear
              placeholder="启用状态"
              style="width: 120px"
              :options="enabledOptions"
              @change="load"
            />
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openBinding()">新增绑定</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="bindings" :columns="columns" :pagination="{ pageSize: 12 }" :scroll="{ x: 980 }">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'scenarioCode'">
              <StatusTag :value="record.scenarioCode" :options="scenarioCodeOptions" />
              <div class="muted-line">{{ record.scenarioName }}</div>
            </template>
            <template v-else-if="column.key === 'model'">
              <a-space direction="vertical" :size="0">
                <strong>{{ record.modelCode }}</strong>
                <span class="muted-line">{{ modelDisplay(record.modelCode) }}</span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'enabled'">
              <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'updatedAt'">
              {{ formatDateTime(record.updatedAt) }}
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openBinding(record)">编辑</a-button>
                <a-button size="small" type="link" @click="toggleBinding(record)">{{ record.enabled ? '停用' : '启用' }}</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="720" :title="bindingForm.bizId ? '编辑运行模型绑定' : '新增运行模型绑定'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12">
            <a-form-item label="业务场景"><a-select v-model:value="bindingForm.scenarioCode" :options="scenarioSelectOptions" @change="applyScenarioName" /></a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="环境"><a-select v-model:value="bindingForm.environment" :options="environmentOptions" /></a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="场景名称"><a-input v-model:value="bindingForm.scenarioName" /></a-form-item>
        <a-form-item label="ACTIVE 模型">
          <a-select
            v-model:value="bindingForm.modelCode"
            show-search
            placeholder="选择运行模型"
            :options="modelSelectOptions"
            :filter-option="filterOption"
            @change="applySelectedModel"
          />
        </a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Provider"><a-input v-model:value="bindingForm.providerCode" readonly /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="启用"><a-switch v-model:checked="bindingForm.enabled" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="场景配置 JSON（高级字段）">
          <a-textarea v-model:value="configText" :auto-size="{ minRows: 4, maxRows: 10 }" />
        </a-form-item>
        <a-form-item label="说明"><a-textarea v-model:value="bindingForm.description" :auto-size="{ minRows: 2, maxRows: 5 }" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitBinding">保存</a-button>
          <a-button @click="drawerOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { DeploymentUnitOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listAiModels } from '@/entities/ai-model/api'
import type { AiModelDto } from '@/entities/ai-model/model'
import { listAiModelBindings, saveAiModelBinding } from '@/entities/ai-model-binding/api'
import type { AiModelBindingDto, AiModelBindingListRequest, SaveAiModelBindingRequest } from '@/entities/ai-model-binding/model'
import { scenarioCodeOptions } from '@/entities/ai-skill/dictionary'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const drawerOpen = ref(false)
const bindings = ref<AiModelBindingDto[]>([])
const models = ref<AiModelDto[]>([])
const filters = reactive<AiModelBindingListRequest>({})
const bindingForm = reactive<Partial<AiModelBindingDto>>({})
const defaultConfig = '{"timeoutSeconds":90,"temperature":0.2}'
const configText = ref(defaultConfig)

const scenarioSelectOptions = scenarioCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const enabledOptions = [
  { label: '启用', value: true },
  { label: '停用', value: false },
]
const environmentOptions = [
  { label: '默认环境', value: 'DEFAULT' },
  { label: '开发环境', value: 'DEV' },
  { label: '生产环境', value: 'PROD' },
]
const activeModels = computed(() => models.value.filter((item) => item.status === 'ACTIVE'))
const modelSelectOptions = computed(() => activeModels.value.map((item) => ({
  label: `${item.modelName || item.modelCode} · ${item.modelCode}@${item.modelVersion} · ${item.provider || '-'}`,
  value: item.modelCode,
})))
const metrics = computed(() => [
  { label: '运行绑定', value: bindings.value.length, hint: '当前页' },
  { label: '启用绑定', value: bindings.value.filter((item) => item.enabled).length, hint: '可执行' },
  { label: 'ACTIVE 模型', value: activeModels.value.length, hint: '可选择' },
  { label: '数据发现', value: bindings.value.filter((item) => item.scenarioCode === 'DATA_SOURCE_DISCOVERY').length, hint: '核心场景' },
])
const columns = [
  { title: '场景', key: 'scenarioCode', width: 210 },
  { title: '运行模型', key: 'model', width: 240 },
  { title: 'Provider', dataIndex: 'providerCode', width: 140 },
  { title: '环境', dataIndex: 'environment', width: 110 },
  { title: '状态', key: 'enabled', width: 90 },
  { title: '说明', dataIndex: 'description' },
  { title: '更新时间', key: 'updatedAt', width: 160 },
  { title: '操作', key: 'actions', width: 140 },
]

const filterOption = (input: string, option?: { label?: string }) =>
  String(option?.label || '').toLowerCase().includes(input.toLowerCase())

const scenarioName = (scenarioCode?: string) =>
  scenarioCodeOptions.find((item) => item.value === scenarioCode)?.label || scenarioCode || ''

const modelByCode = (modelCode?: string) => activeModels.value.find((item) => item.modelCode === modelCode)

const modelDisplay = (modelCode?: string) => {
  const model = modelByCode(modelCode)
  if (!model) return '未匹配 ACTIVE 模型'
  return `${model.modelName || model.modelCode}@${model.modelVersion}`
}

const applyScenarioName = () => {
  bindingForm.scenarioName = scenarioName(bindingForm.scenarioCode)
}

const applySelectedModel = () => {
  bindingForm.providerCode = modelByCode(bindingForm.modelCode)?.provider || ''
}

const resetForm = (binding?: AiModelBindingDto) => {
  Object.keys(bindingForm).forEach((key) => delete bindingForm[key as keyof AiModelBindingDto])
  Object.assign(bindingForm, binding || {
    scenarioCode: 'DATA_SOURCE_DISCOVERY',
    scenarioName: scenarioName('DATA_SOURCE_DISCOVERY'),
    environment: 'DEFAULT',
    enabled: true,
    modelCode: activeModels.value[0]?.modelCode,
    providerCode: activeModels.value[0]?.provider || '',
    config: defaultConfig,
  })
  configText.value = bindingForm.config || defaultConfig
}

const openBinding = (binding?: AiModelBindingDto) => {
  resetForm(binding)
  drawerOpen.value = true
}

const submitBinding = async () => {
  if (!bindingForm.scenarioCode || !bindingForm.scenarioName || !bindingForm.modelCode) {
    message.warning('请选择业务场景和 ACTIVE 模型')
    return
  }
  if (configText.value.trim() && safeParseJson(configText.value) === undefined) {
    message.warning('场景配置 JSON 不可解析')
    return
  }
  saving.value = true
  try {
    const payload: SaveAiModelBindingRequest = {
      scenarioCode: bindingForm.scenarioCode,
      scenarioName: bindingForm.scenarioName,
      modelCode: bindingForm.modelCode,
      providerCode: bindingForm.providerCode,
      environment: bindingForm.environment || 'DEFAULT',
      enabled: bindingForm.enabled,
      config: configText.value,
      description: bindingForm.description,
    }
    await saveAiModelBinding(payload)
    message.success('运行模型绑定已保存')
    drawerOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const toggleBinding = (binding: AiModelBindingDto) => {
  Modal.confirm({
    title: `${binding.enabled ? '停用' : '启用'}运行模型绑定？`,
    content: `${binding.scenarioCode} / ${binding.environment || 'DEFAULT'} -> ${binding.modelCode}`,
    onOk: async () => {
      await saveAiModelBinding({
        scenarioCode: binding.scenarioCode,
        scenarioName: binding.scenarioName,
        modelCode: binding.modelCode,
        providerCode: binding.providerCode,
        environment: binding.environment || 'DEFAULT',
        enabled: !binding.enabled,
        config: binding.config,
        description: binding.description,
      })
      message.success('绑定状态已更新')
      await load()
    },
  })
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [bindingPage, modelPage] = await Promise.all([
      listAiModelBindings({ ...filters, page: 1, size: 50, sort: 'updatedAt', direction: 'desc' }),
      listAiModels({ page: 1, size: 100, status: 'ACTIVE', sort: 'updatedAt', direction: 'desc' }),
    ])
    bindings.value = bindingPage.items || []
    models.value = modelPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '运行模型绑定加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
