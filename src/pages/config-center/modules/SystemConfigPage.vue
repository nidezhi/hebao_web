<template>
  <BusinessPageShell
    title="系统配置"
    description="维护数据库系统配置。自动闭环默认项以配置表为准，任务参数只作为单次或任务级覆盖。"
    :endpoints="[endpoints.systemConfig.list, endpoints.systemConfig.save]"
    :icon="SettingOutlined"
    status-text="SYSTEM CONFIG"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="16">
          <a-card class="page-card" :bordered="false" title="自动闭环默认配置">
            <template #extra>
              <a-space wrap>
                <a-select
                  v-model:value="activeEnvironment"
                  style="width: 132px"
                  :options="environmentOptions"
                  @change="load"
                />
                <a-button @click="load">刷新</a-button>
                <a-button type="primary" :loading="saving" @click="saveAutoClosedLoop">保存配置</a-button>
              </a-space>
            </template>
            <a-alert class="mb-12" type="info" show-icon message="读取优先级：任务参数 > 系统配置表 > 代码兜底。这里维护的是默认值，不会覆盖单次触发参数。" />
            <a-form layout="vertical">
              <a-row :gutter="12">
                <a-col :xs="24" :md="12">
                  <a-form-item label="自动化等级">
                    <a-segmented v-model:value="autoForm.automationLevel" :options="automationLevelOptions" />
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="12">
                  <a-form-item label="候选模型类型">
                    <a-select v-model:value="autoForm.modelType" :options="modelTypeOptions" />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12">
                  <a-form-item label="AI 模拟资金池用户">
                    <a-select
                      v-model:value="autoForm.mockUserBizId"
                      show-search
                      :filter-option="false"
                      :loading="loadingUsers"
                      :options="userOptions"
                      placeholder="搜索用户名称、手机号或邮箱"
                      @focus="loadUsers()"
                      @search="loadUsers"
                    />
                    <div class="muted-line">保存值：{{ autoForm.mockUserBizId }}</div>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="12">
                  <a-form-item label="AI 模拟资金池名称">
                    <a-input v-model:value="autoForm.mockPortfolioName" />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24" :md="8">
                  <a-form-item label="初始现金">
                    <a-input-number v-model:value="autoForm.initialCash" :min="1" :precision="2" style="width: 100%" />
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="16">
                  <a-form-item label="默认 Prompt">
                    <a-select
                      v-model:value="selectedPromptBizId"
                      show-search
                      :filter-option="false"
                      :loading="loadingPrompts"
                      :options="promptOptions"
                      placeholder="搜索并选择 ACTIVE Prompt"
                      @focus="loadPrompts()"
                      @search="loadPrompts"
                      @change="selectPrompt"
                    />
                    <div class="muted-line">{{ promptSelectionSummary }}</div>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12">
                  <a-form-item label="Prompt 场景">
                    <a-select v-model:value="autoForm.promptScenario" :options="promptScenarioOptions" />
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="12">
                  <a-form-item label="配置状态">
                    <a-switch v-model:checked="autoEnabled" checked-children="启用" un-checked-children="停用" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="8">
          <a-card class="page-card" :bordered="false" title="生效概览">
            <a-list size="small" :data-source="autoConfigRows">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :title="item.label" :description="item.description">
                    <template #avatar>
                      <a-tag :color="item.exists ? 'success' : 'warning'">{{ item.exists ? '表' : '兜底' }}</a-tag>
                    </template>
                  </a-list-item-meta>
                  <strong>{{ item.value }}</strong>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>

      <a-card class="page-card" :bordered="false" title="系统配置列表">
        <template #extra>
          <a-space wrap>
            <a-select v-model:value="filters.configGroup" allow-clear style="width: 220px" :options="groupOptions" @change="load" />
            <a-input-search v-model:value="filters.keyword" placeholder="键名/说明" style="width: 220px" @search="load" />
            <a-select v-model:value="filters.status" allow-clear style="width: 120px" :options="statusOptions" @change="load" />
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="configs" :columns="columns" :pagination="{ pageSize: 12 }" :scroll="{ x: 1080 }">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'configKey'">
              <strong>{{ record.configKey }}</strong>
              <div class="muted-line">{{ record.description || '-' }}</div>
            </template>
            <template v-else-if="column.key === 'value'">
              <a-tag>{{ record.valueType }}</a-tag>
              <span>{{ record.displayValue }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <a-tag :color="record.status === 'ENABLED' ? 'success' : 'default'">{{ record.status === 'ENABLED' ? '启用' : '停用' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'updatedAt'">
              {{ formatDateTime(record.updatedAt) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { SettingOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { listSystemConfigs, saveSystemConfig } from '@/entities/system-config/api'
import type { SaveSystemConfigRequest, SystemConfigDto, SystemConfigListRequest, SystemConfigStatus, SystemConfigValueType } from '@/entities/system-config/model'
import { getUserDetail, listUsers } from '@/entities/user/api'
import type { UserDto } from '@/entities/user/model'
import { listAiPrompts } from '@/entities/prompt/api'
import type { AiPromptTemplateDto } from '@/entities/prompt/model'

const AUTO_GROUP = 'AUTO_INVESTMENT_CLOSED_LOOP'
const loading = ref(false)
const saving = ref(false)
const loadingUsers = ref(false)
const loadingPrompts = ref(false)
const errorMessage = ref('')
const configs = ref<SystemConfigDto[]>([])
const users = ref<UserDto[]>([])
const prompts = ref<AiPromptTemplateDto[]>([])
const activeEnvironment = ref('DEFAULT')
const autoEnabled = ref(true)
const selectedPromptBizId = ref('')
const filters = reactive<SystemConfigListRequest>({
  configGroup: AUTO_GROUP,
  status: undefined,
})
const autoForm = reactive({
  automationLevel: 'FULL_MOCK',
  mockUserBizId: '21000000-0000-0000-0000-000000000002',
  mockPortfolioName: '全自动闭环模拟组合',
  initialCash: 100000,
  promptCode: 'investment-plan-from-report',
  promptVersion: 'auto-v1',
  promptScenario: 'INVESTMENT_PLAN',
  modelType: 'INVESTMENT_ANALYSIS',
})

const configMeta: Record<keyof typeof autoForm, { label: string; valueType: SystemConfigValueType; description: string }> = {
  automationLevel: { label: '自动化等级', valueType: 'STRING', description: '自动投资闭环默认自动化等级。任务参数 automationLevel 可覆盖。' },
  mockUserBizId: { label: 'AI 模拟资金池用户', valueType: 'STRING', description: '自动投资闭环默认模拟交易用户。任务参数 mockUserBizId 可覆盖。' },
  mockPortfolioName: { label: 'AI 模拟资金池名称', valueType: 'STRING', description: '自动投资闭环默认 AI 模拟资金池名称。任务参数 mockPortfolioName 可覆盖。' },
  initialCash: { label: '初始现金', valueType: 'NUMBER', description: '自动投资闭环默认 AI 模拟资金池初始现金。任务参数 initialCash 可覆盖。' },
  promptCode: { label: 'Prompt Code', valueType: 'STRING', description: '自动投资闭环默认 Prompt 编码。任务参数 promptCode 可覆盖。' },
  promptVersion: { label: 'Prompt Version', valueType: 'STRING', description: '自动投资闭环默认 Prompt 版本。任务参数 promptVersion 可覆盖。' },
  promptScenario: { label: 'Prompt 场景', valueType: 'STRING', description: '自动投资闭环默认 Prompt 场景。任务参数 promptScenario 可覆盖。' },
  modelType: { label: '候选模型类型', valueType: 'STRING', description: '自动投资闭环默认候选模型类型。' },
}

const automationLevelOptions = [
  { label: '全 Mock', value: 'FULL_MOCK' },
  { label: '半自动', value: 'SEMI_AUTO' },
  { label: '只评估', value: 'EVALUATION_ONLY' },
]
const modelTypeOptions = [
  { label: '投资分析', value: 'INVESTMENT_ANALYSIS' },
  { label: 'Prompt 治理', value: 'PROMPT_GOVERNANCE' },
]
const promptScenarioOptions = [
  { label: '投资计划', value: 'INVESTMENT_PLAN' },
  { label: '报告复核', value: 'REPORT_REVIEW' },
]
const environmentOptions = [
  { label: '默认环境', value: 'DEFAULT' },
  { label: '开发环境', value: 'DEV' },
  { label: '生产环境', value: 'PROD' },
]
const groupOptions = [
  { label: '自动投资闭环', value: AUTO_GROUP },
]
const statusOptions = [
  { label: '启用', value: 'ENABLED' },
  { label: '停用', value: 'DISABLED' },
]
const columns = [
  { title: '分组', dataIndex: 'configGroup', width: 210 },
  { title: '配置键', key: 'configKey', width: 260 },
  { title: '环境', dataIndex: 'environment', width: 110 },
  { title: '配置值', key: 'value', width: 260 },
  { title: '状态', key: 'status', width: 90 },
  { title: '版本', dataIndex: 'version', width: 80 },
  { title: '更新时间', key: 'updatedAt', width: 170 },
]

const autoConfigs = computed(() => configs.value.filter((item) => item.configGroup === AUTO_GROUP && item.environment === activeEnvironment.value))
const userOptions = computed(() => users.value.map((user) => ({
  label: [user.nickname || user.username, user.userNo, user.email || user.phone, user.status].filter(Boolean).join(' · '),
  value: user.bizId,
})))
const promptOptions = computed(() => prompts.value.map((prompt) => ({
  label: `${prompt.templateName} · ${prompt.promptCode}@${prompt.promptVersion} · ${prompt.scenario}`,
  value: prompt.bizId,
})))
const metrics = computed(() => [
  { label: '配置项', value: configs.value.length, hint: '当前筛选' },
  { label: '自动闭环', value: autoConfigs.value.length, hint: '表内命中' },
  { label: '启用项', value: configs.value.filter((item) => item.status === 'ENABLED').length, hint: '可生效' },
  { label: '环境', value: activeEnvironment.value, hint: '当前编辑' },
])
const autoConfigRows = computed(() => (Object.keys(configMeta) as Array<keyof typeof autoForm>).map((key) => {
  const matched = findConfig(key)
  return {
    label: configMeta[key].label,
    description: matched?.description || configMeta[key].description,
    value: String(autoForm[key] ?? ''),
    exists: Boolean(matched),
  }
}))
const promptSelectionSummary = computed(() => {
  const matched = prompts.value.find((item) => item.bizId === selectedPromptBizId.value)
  const promptLabel = matched?.templateName || '未命中 Prompt 列表，保存时仍使用当前配置值'
  return `${promptLabel}：${autoForm.promptCode}@${autoForm.promptVersion} · ${autoForm.promptScenario}`
})

const findConfig = (key: keyof typeof autoForm) =>
  autoConfigs.value.find((item) => item.configKey === key)

const mergeUsers = (items: UserDto[]) => {
  const map = new Map<string, UserDto>()
  users.value.forEach((item) => map.set(item.bizId, item))
  items.forEach((item) => map.set(item.bizId, item))
  users.value = Array.from(map.values())
}

const syncPromptSelection = () => {
  const matched = prompts.value.find((item) =>
    item.promptCode === autoForm.promptCode && item.promptVersion === autoForm.promptVersion)
  selectedPromptBizId.value = matched?.bizId || ''
}

const applyConfigsToForm = () => {
  ;(Object.keys(configMeta) as Array<keyof typeof autoForm>).forEach((key) => {
    const matched = findConfig(key)
    if (!matched) return
    if (key === 'initialCash') {
      autoForm.initialCash = Number(matched.displayValue || matched.configValue || autoForm.initialCash)
    } else {
      autoForm[key] = matched.displayValue as never
    }
  })
  autoEnabled.value = autoConfigs.value.every((item) => item.status !== 'DISABLED')
  syncPromptSelection()
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listSystemConfigs({
      ...filters,
      environment: activeEnvironment.value,
      page: 1,
      size: 100,
      sort: 'configKey',
      direction: 'asc',
    })
    configs.value = page.items || []
    applyConfigsToForm()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '系统配置加载失败'
  } finally {
    loading.value = false
  }
}

const loadUsers = async (keyword = '') => {
  loadingUsers.value = true
  try {
    const page = await listUsers({
      keyword: keyword || undefined,
      status: 'ACTIVE',
      page: 1,
      size: 50,
      sort: 'registeredAt',
      direction: 'desc',
    })
    mergeUsers(page.items || [])
    if (autoForm.mockUserBizId && !users.value.some((item) => item.bizId === autoForm.mockUserBizId)) {
      try {
        mergeUsers([await getUserDetail(autoForm.mockUserBizId)])
      } catch {
        // The saved config may point to a deleted or inaccessible user; keep the BizId visible for correction.
      }
    }
  } catch (error) {
    message.error(error instanceof Error ? error.message : '用户选择器加载失败')
  } finally {
    loadingUsers.value = false
  }
}

const loadPrompts = async (keyword = '') => {
  loadingPrompts.value = true
  try {
    const page = await listAiPrompts({
      promptCode: keyword || undefined,
      status: 'ACTIVE',
      page: 1,
      size: 50,
      sort: 'updatedAt',
      direction: 'desc',
    })
    prompts.value = page.items || []
    syncPromptSelection()
  } catch (error) {
    message.error(error instanceof Error ? error.message : 'Prompt 选择器加载失败')
  } finally {
    loadingPrompts.value = false
  }
}

const selectPrompt = (promptBizId: string) => {
  const matched = prompts.value.find((item) => item.bizId === promptBizId)
  if (!matched) return
  autoForm.promptCode = matched.promptCode
  autoForm.promptVersion = matched.promptVersion
  autoForm.promptScenario = matched.scenario || autoForm.promptScenario
}

const validateAutoForm = () => {
  if (!autoForm.mockUserBizId.trim()) return 'AI 模拟资金池用户不能为空'
  if (!autoForm.mockPortfolioName.trim()) return 'AI 模拟资金池名称不能为空'
  if (!autoForm.promptCode.trim() || !autoForm.promptVersion.trim()) return 'Prompt Code 和 Version 不能为空'
  if (!autoForm.initialCash || autoForm.initialCash <= 0) return '初始现金必须大于 0'
  return ''
}

const saveAutoClosedLoop = async () => {
  const warning = validateAutoForm()
  if (warning) {
    message.warning(warning)
    return
  }
  saving.value = true
  try {
    const status: SystemConfigStatus = autoEnabled.value ? 'ENABLED' : 'DISABLED'
    const requests: SaveSystemConfigRequest[] = (Object.keys(configMeta) as Array<keyof typeof autoForm>).map((key) => ({
      configGroup: AUTO_GROUP,
      configKey: key,
      environment: activeEnvironment.value,
      valueType: configMeta[key].valueType,
      configValue: autoForm[key],
      description: configMeta[key].description,
      status,
    }))
    await Promise.all(requests.map(saveSystemConfig))
    message.success('自动闭环系统配置已保存')
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  await load()
  await Promise.all([loadUsers(), loadPrompts(autoForm.promptCode)])
})
</script>
