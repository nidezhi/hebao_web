<template>
  <BusinessPageShell
    title="模型 Skill 绑定"
    description="把模型实例绑定到具体 Skill 版本和业务场景。列表优先看模型、Skill、场景、优先级和启停状态。"
    :endpoints="[endpoints.aiModelSkill.list, endpoints.aiModelSkill.detail, endpoints.aiModelSkill.byModel, endpoints.aiModelSkill.save]"
    :icon="BranchesOutlined"
    status-text="MODEL SKILL"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-alert class="mb-12" type="info" show-icon message="同一场景可配置多个绑定，后端按 priority 和 enabled 选择。配置 JSON 只放候选数量、自动应用等高级策略。" />
      <a-alert
        v-if="driftBindings.length"
        class="mb-12"
        type="warning"
        show-icon
        :message="`发现 ${driftBindings.length} 个启用绑定仍指向旧模型版本，后端按绑定版本执行，建议重新绑定 ACTIVE 版本。`"
      />
      <a-card class="page-card" :bordered="false" title="绑定管理">
        <template #extra>
          <a-space>
            <a-input v-model:value="filters.modelCode" placeholder="模型编码" allow-clear @pressEnter="load" />
            <a-input v-model:value="filters.skillCode" placeholder="Skill 编码" allow-clear @pressEnter="load" />
            <a-select
              v-model:value="filters.scenarioCode"
              allow-clear
              placeholder="场景"
              style="width: 190px"
              :options="scenarioSelectOptions"
              @change="load"
            />
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openBinding()">新增绑定</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="bindings" :columns="columns" :pagination="{ pageSize: 12 }" :scroll="{ x: 1120 }">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'model'">
              <a-space direction="vertical" :size="0">
                <a-space :size="6" wrap>
                  <strong>{{ record.modelCode || record.modelBizId }}</strong>
                  <a-tag v-if="bindingVersionDrift(record)" color="orange">版本漂移</a-tag>
                </a-space>
                <span class="muted-line">
                  绑定 {{ record.modelVersion || '-' }}
                  <template v-if="activeModelVersion(record)"> / ACTIVE {{ activeModelVersion(record) }}</template>
                </span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'skill'">
              <a-space direction="vertical" :size="0">
                <strong>{{ record.skillCode || record.skillBizId }}</strong>
                <span class="muted-line">{{ record.skillVersion }}</span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'scenarioCode'">
              <StatusTag :value="record.scenarioCode" :options="scenarioCodeOptions" />
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

    <a-drawer v-model:open="drawerOpen" width="760" :title="bindingForm.bizId ? '编辑绑定' : '新增绑定'">
      <a-form layout="vertical">
        <a-alert class="mb-12" type="warning" show-icon message="模型和 Skill 均使用业务 ID 保存；可从下拉选择现有模型与 ACTIVE Skill。" />
        <a-form-item label="模型实例">
          <a-select
            v-model:value="bindingForm.modelBizId"
            show-search
            placeholder="选择模型"
            :options="modelSelectOptions"
            :filter-option="filterOption"
          />
        </a-form-item>
        <a-form-item label="Skill 版本">
          <a-select
            v-model:value="bindingForm.skillBizId"
            show-search
            placeholder="选择 Skill"
            :options="skillSelectOptions"
            :filter-option="filterOption"
          />
        </a-form-item>
        <a-row :gutter="12">
          <a-col :span="12">
            <a-form-item label="业务场景"><a-select v-model:value="bindingForm.scenarioCode" :options="scenarioSelectOptions" /></a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="优先级"><a-input-number v-model:value="bindingForm.priority" class="full-width" :min="0" /></a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="启用"><a-switch v-model:checked="bindingForm.enabled" /></a-form-item>
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
import { BranchesOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listAiModels } from '@/entities/ai-model/api'
import type { AiModelDto } from '@/entities/ai-model/model'
import { listAiSkills } from '@/entities/ai-skill/api'
import { scenarioCodeOptions } from '@/entities/ai-skill/dictionary'
import type { AiSkillDto } from '@/entities/ai-skill/model'
import { listAiModelSkillBindings, saveAiModelSkillBinding } from '@/entities/ai-model-skill/api'
import type { AiModelSkillBindingDto, AiModelSkillBindingListRequest, SaveAiModelSkillBindingRequest } from '@/entities/ai-model-skill/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const drawerOpen = ref(false)
const bindings = ref<AiModelSkillBindingDto[]>([])
const models = ref<AiModelDto[]>([])
const skills = ref<AiSkillDto[]>([])
const filters = reactive<AiModelSkillBindingListRequest>({})
const bindingForm = reactive<Partial<AiModelSkillBindingDto>>({})
const defaultDiscoveryBindingConfig = '{"candidateLimit":4,"collectionDirection":"MULTI_SOURCE","autoRegisterCandidates":true,"autoEnableCandidates":false}'
const configText = ref(defaultDiscoveryBindingConfig)

const scenarioSelectOptions = scenarioCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const activeModelVersionMap = computed(() => {
  const map = new Map<string, string>()
  models.value
    .filter((item) => item.status === 'ACTIVE' && item.modelCode && item.modelVersion)
    .forEach((item) => map.set(item.modelCode, item.modelVersion))
  return map
})
const activeModelVersion = (binding: AiModelSkillBindingDto) =>
  binding.modelCode ? activeModelVersionMap.value.get(binding.modelCode) : undefined
const bindingVersionDrift = (binding: AiModelSkillBindingDto) => {
  const activeVersion = activeModelVersion(binding)
  return Boolean(binding.enabled && activeVersion && binding.modelVersion && activeVersion !== binding.modelVersion)
}
const driftBindings = computed(() => bindings.value.filter(bindingVersionDrift))
const metrics = computed(() => [
  { label: '绑定数', value: bindings.value.length, hint: '当前页' },
  { label: '启用绑定', value: bindings.value.filter((item) => item.enabled).length, hint: '可参与调用' },
  { label: '方向化采集', value: bindings.value.filter((item) => item.scenarioCode === 'DATA_SOURCE_DISCOVERY').length, hint: '前置治理' },
  { label: '版本漂移', value: driftBindings.value.length, hint: '绑定 vs ACTIVE' },
])
const modelSelectOptions = computed(() => models.value.map((item) => ({
  label: `${item.modelCode}@${item.modelVersion} · ${item.status || '-'}`,
  value: item.bizId,
})))
const skillSelectOptions = computed(() => skills.value.map((item) => ({
  label: `${item.skillCode}@${item.skillVersion} · ${item.status || '-'}`,
  value: item.bizId,
})))
const columns = [
  { title: '模型', key: 'model' },
  { title: 'Skill', key: 'skill' },
  { title: '场景', key: 'scenarioCode', width: 160 },
  { title: '优先级', dataIndex: 'priority', width: 90 },
  { title: '状态', key: 'enabled', width: 90 },
  { title: '说明', dataIndex: 'description' },
  { title: '更新时间', key: 'updatedAt', width: 160 },
  { title: '操作', key: 'actions', width: 150 },
]

const filterOption = (input: string, option?: { label?: string }) =>
  String(option?.label || '').toLowerCase().includes(input.toLowerCase())

const resetForm = (binding?: AiModelSkillBindingDto) => {
  Object.keys(bindingForm).forEach((key) => delete bindingForm[key as keyof AiModelSkillBindingDto])
  Object.assign(bindingForm, binding || {
    scenarioCode: 'DATA_SOURCE_DISCOVERY',
    priority: 10,
    enabled: true,
    config: defaultDiscoveryBindingConfig,
  })
  configText.value = bindingForm.config || defaultDiscoveryBindingConfig
}

const openBinding = (binding?: AiModelSkillBindingDto) => {
  resetForm(binding)
  drawerOpen.value = true
}

const submitBinding = async () => {
  if (!bindingForm.modelBizId || !bindingForm.skillBizId || !bindingForm.scenarioCode) {
    message.warning('请选择模型、Skill 和业务场景')
    return
  }
  if (configText.value.trim() && safeParseJson(configText.value) === undefined) {
    message.warning('场景配置 JSON 不可解析')
    return
  }
  saving.value = true
  try {
    const payload: SaveAiModelSkillBindingRequest = {
      modelBizId: bindingForm.modelBizId,
      skillBizId: bindingForm.skillBizId,
      scenarioCode: bindingForm.scenarioCode,
      priority: bindingForm.priority,
      enabled: bindingForm.enabled,
      config: configText.value,
      description: bindingForm.description,
    }
    await saveAiModelSkillBinding(payload)
    message.success('模型 Skill 绑定已保存')
    drawerOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const toggleBinding = (binding: AiModelSkillBindingDto) => {
  Modal.confirm({
    title: `${binding.enabled ? '停用' : '启用'}模型 Skill 绑定？`,
    content: `${binding.modelCode} → ${binding.skillCode} / ${binding.scenarioCode}`,
    onOk: async () => {
      await saveAiModelSkillBinding({
        modelBizId: binding.modelBizId,
        skillBizId: binding.skillBizId,
        scenarioCode: binding.scenarioCode,
        priority: binding.priority,
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
    const [bindingPage, modelPage, skillPage] = await Promise.all([
      listAiModelSkillBindings({ ...filters, page: 1, size: 50, sort: 'priority', direction: 'asc' }),
      listAiModels({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
      listAiSkills({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
    ])
    bindings.value = bindingPage.items || []
    models.value = modelPage.items || []
    skills.value = skillPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '模型 Skill 绑定加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
