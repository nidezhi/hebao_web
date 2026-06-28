<template>
  <BusinessPageShell
    title="Data Ingestion 采集编排"
    description="配置方向化 AI 采集、真实采集任务、字段映射和自动闭环总编排。端点为空时明确展示“未配置端点，不写兜底数据”。"
    :endpoints="[endpoints.task.definitions, endpoints.task.saveDefinition, endpoints.task.trigger, endpoints.task.executions]"
    :icon="CloudSyncOutlined"
    status-text="ORCHESTRATION"
    compact
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-tabs v-model:active-key="activeTab">
        <a-tab-pane key="all" tab="全部任务" />
        <a-tab-pane key="real-data" tab="真实数据采集" />
        <a-tab-pane key="collection" tab="AI / 旧采集" />
        <a-tab-pane key="automation" tab="自动报告 / Prompt / 闭环" />
      </a-tabs>

      <a-alert
        class="mb-12"
        type="info"
        show-icon
        message="真实落库优先走确定性采集器；AI 数据源发现只生成候选、字段映射和质量策略，不直接替代行情/新闻落库。"
      />

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="14">
          <a-card class="page-card" :bordered="false" title="任务定义">
            <a-table
              row-key="code"
              size="small"
              :pagination="{ pageSize: 10 }"
              :data-source="filteredDefinitions"
              :columns="columns"
              @row="rowEvents"
            />
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="10">
          <a-card class="page-card" :bordered="false" title="最近执行记录">
            <a-list :data-source="executions" size="small">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta
                    :title="item.taskCode"
                    :description="item.failureReason || item.resultSummary || formatDateTime(item.startedAt)"
                  />
                  <StatusTag :value="item.status" :options="taskExecutionStatusOptions" />
                </a-list-item>
              </template>
              <template #empty>
                <EmptyEvidence description="暂无任务执行记录。" />
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="860" title="任务详情 / 配置 / 触发">
      <a-space v-if="selectedTask" direction="vertical" :size="16" class="full-width">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="编码">{{ selectedTask.code }}</a-descriptions-item>
          <a-descriptions-item label="类型">{{ optionLabel(ingestionTaskTypeOptions, selectedTask.type) }}</a-descriptions-item>
          <a-descriptions-item label="Cron">{{ selectedTask.cron }}</a-descriptions-item>
          <a-descriptions-item label="时区">{{ selectedTask.zone }}</a-descriptions-item>
          <a-descriptions-item label="状态">{{ selectedTask.enabled ? '启用' : '停用' }}</a-descriptions-item>
          <a-descriptions-item label="描述">{{ selectedTask.description || '-' }}</a-descriptions-item>
        </a-descriptions>

        <a-alert
          v-if="!selectedTask.parameters?.endpoints && isEndpointCollectionTask(selectedTask.type)"
          type="warning"
          show-icon
          message="未配置端点，不写兜底数据"
        />

        <a-card size="small" title="参数表单视图">
          <div class="config-grid">
            <label v-for="field in visibleFields" :key="field.key" class="config-field">
              <span>{{ field.label }}</span>
              <a-select
                v-if="field.inputType === 'select'"
                v-model:value="parameterDraft[field.key]"
                show-search
                :options="field.options"
                :filter-option="filterOption"
                @change="handleParameterChange(field.key, $event)"
              />
              <a-switch
                v-else-if="field.inputType === 'switch'"
                :checked="parameterDraft[field.key] === 'true'"
                @change="handleSwitchChange(field.key, $event)"
              />
              <a-input v-else v-model:value="parameterDraft[field.key]" :placeholder="field.placeholder" />
            </label>
          </div>
          <a-divider>安全闸门</a-divider>
          <div class="guard-grid">
            <div class="guard-item" :class="parameterDraft.allowAutoMockTrade === 'true' ? 'guard-item--ok' : 'guard-item--hold'">
              <span>自动 Mock</span><strong>{{ parameterDraft.allowAutoMockTrade === 'true' ? '允许' : '关闭' }}</strong>
            </div>
            <div class="guard-item guard-item--hold"><span>Prompt 启用</span><strong>人工确认</strong></div>
            <div class="guard-item guard-item--hold"><span>模型启用</span><strong>灰度开关</strong></div>
            <div class="guard-item guard-item--danger"><span>真实交易</span><strong>禁用</strong></div>
          </div>
          <a-space class="mt-12">
            <a-button type="primary" :loading="saving" @click="saveSelected">保存任务定义</a-button>
            <a-button :loading="triggering" @click="triggerSelected">手动触发</a-button>
          </a-space>
        </a-card>

        <a-card size="small" title="原始参数证据">
          <JsonPreview :value="selectedTask.parameters" />
        </a-card>
      </a-space>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { CloudSyncOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import { optionLabel } from '@/shared/dictionaries/status'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listTaskDefinitions, listTaskExecutions, saveTaskDefinition, triggerInvestmentTask } from '@/entities/task/api'
import { ingestionTaskTypeOptions, taskExecutionStatusOptions } from '@/entities/task/dictionary'
import type { InvestmentTaskDefinitionDto, ScheduledTaskExecutionDto } from '@/entities/task/model'
import {
  collectionDirectionDefaults,
  collectionDirectionOptions,
  dataCollectionSkillCodeOptions,
  directionTaskCodeOptions,
} from '@/entities/ai-skill/dictionary'
import { listUsers } from '@/entities/user/api'
import type { UserDto } from '@/entities/user/model'

const loading = ref(false)
const saving = ref(false)
const triggering = ref(false)
const errorMessage = ref('')
const activeTab = ref('all')
const definitions = ref<InvestmentTaskDefinitionDto[]>([])
const executions = ref<ScheduledTaskExecutionDto[]>([])
const users = ref<UserDto[]>([])
const selectedTask = ref<InvestmentTaskDefinitionDto>()
const drawerOpen = ref(false)
const parameterDraft = reactive<Record<string, string>>({})
type ParameterField = {
  key: string
  label: string
  placeholder?: string
  inputType?: 'input' | 'select' | 'switch'
  options?: { label: string; value: string }[]
}

const realDataTypes = ['REAL_PRODUCT_UNIVERSE_SYNC', 'REAL_MARKET_QUOTE_SYNC', 'REAL_NEWS_SYNC', 'REAL_DISCLOSURE_SYNC', 'REAL_DATA_QUALITY_SNAPSHOT']
const collectionTypes = ['AI_DATA_SOURCE_DISCOVERY', 'REGULATORY_DISCLOSURE_COLLECTION', 'EXCHANGE_ANNOUNCEMENT_COLLECTION', 'WEALTH_PRODUCT_NAV_REFRESH', 'MARKET_MOMENTUM_SCAN', 'HOT_THEME_RETURN', 'NEWS_HEAT_AGGREGATION']
const endpointCollectionTypes = collectionTypes.filter((type) => type !== 'AI_DATA_SOURCE_DISCOVERY')
const automationTypes = ['AUTO_INVESTMENT_REPORT_GENERATION', 'AUTO_PROMPT_GOVERNANCE', 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION']
const collectionDirectionSelectOptions = collectionDirectionOptions.map((item) => ({ label: item.label, value: item.value }))
const dataCollectionSkillSelectOptions = dataCollectionSkillCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const directionTaskCodeSelectOptions = directionTaskCodeOptions.map((item) => ({ label: item.label, value: item.value }))
const userSelectOptions = computed(() => users.value.map((item) => ({
  value: item.bizId,
  label: `${item.username}${item.nickname ? ` / ${item.nickname}` : ''} · ${item.status || 'UNKNOWN'} · ${item.userNo || item.email || item.bizId}`,
})))

const metrics = computed(() => [
  { label: '任务定义', value: definitions.value.length, hint: `启用 ${definitions.value.filter((item) => item.enabled).length} / 失败 ${executions.value.filter((item) => item.status === 'FAILED').length}` },
  { label: '真实采集', value: definitions.value.filter((item) => realDataTypes.includes(item.type)).length, hint: '产品/行情/新闻/质量' },
  { label: 'AI 发现', value: definitions.value.filter((item) => item.type === 'AI_DATA_SOURCE_DISCOVERY').length, hint: '候选不自动启用' },
  { label: '自动闭环', value: definitions.value.filter((item) => item.type === 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION').length, hint: '总编排任务' },
])

const filteredDefinitions = computed(() => {
  if (activeTab.value === 'real-data') return definitions.value.filter((item) => realDataTypes.includes(item.type))
  if (activeTab.value === 'collection') return definitions.value.filter((item) => collectionTypes.includes(item.type))
  if (activeTab.value === 'automation') return definitions.value.filter((item) => automationTypes.includes(item.type))
  return definitions.value
})

const visibleFields = computed(() => {
  const type = selectedTask.value?.type || ''
  const base: ParameterField[] = [
    { key: 'endpoints', label: '端点', placeholder: '数据源名称=https://...|JSON' },
    { key: 'maxItems', label: '最大条数', placeholder: '100' },
    { key: 'itemsPath', label: '列表路径', placeholder: 'data.list' },
  ]
  if (type === 'WEALTH_PRODUCT_NAV_REFRESH') {
    return [
      ...base,
      { key: 'productMarketCode', label: '产品市场', placeholder: 'CN_MAINLAND' },
      { key: 'productCurrency', label: '币种', placeholder: 'CNY' },
      { key: 'quoteInterval', label: '行情周期', placeholder: '1D' },
      { key: 'extraFieldPaths', label: '扩展字段映射', placeholder: 'productCode=productCode;nav=nav' },
    ]
  }
  if (type === 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION') {
    return [
      { key: 'automationLevel', label: '自动化等级', placeholder: 'FULL_MOCK' },
      { key: 'dataTaskCodes', label: '数据任务编码', placeholder: 'code-a,code-b' },
      { key: 'reportTaskCode', label: '报告任务编码', placeholder: 'auto-report' },
      { key: 'promptTaskCode', label: 'Prompt 任务编码', placeholder: 'auto-prompt-governance' },
      { key: 'mockUserBizId', label: 'Mock 用户', inputType: 'select', options: userSelectOptions.value },
      { key: 'minQualityScore', label: '最低质量分', placeholder: '0.45' },
      { key: 'allowAutoMockTrade', label: '允许自动 Mock', placeholder: 'true/false' },
    ]
  }
  if (type === 'REAL_PRODUCT_UNIVERSE_SYNC') {
    return [
      { key: 'marketScope', label: '市场范围', placeholder: 'CN_MAINLAND' },
      { key: 'sourceCode', label: '来源编码', placeholder: 'AKSHARE' },
      { key: 'providerBaseUrl', label: 'Provider Base URL', placeholder: 'http://127.0.0.1:8080' },
      { key: 'themes', label: '主题标的', placeholder: '黄金=518880,159934;半导体=512480,159995' },
      { key: 'defaultCurrency', label: '默认币种', placeholder: 'CNY' },
      { key: 'defaultRiskLevel', label: '默认风险等级', placeholder: '3' },
    ]
  }
  if (type === 'REAL_MARKET_QUOTE_SYNC') {
    return [
      { key: 'marketScope', label: '市场范围', placeholder: 'CN_MAINLAND' },
      { key: 'sourceCode', label: '来源编码', placeholder: 'AKSHARE' },
      { key: 'providerBaseUrl', label: 'Provider Base URL', placeholder: 'http://127.0.0.1:8080' },
      { key: 'quoteInterval', label: '行情周期', placeholder: '1D' },
      { key: 'lookbackDays', label: '回看天数', placeholder: '10' },
      { key: 'themes', label: '主题标的', placeholder: '黄金=518880,159934;半导体=512480,159995' },
    ]
  }
  if (type === 'REAL_NEWS_SYNC') {
    return [
      { key: 'marketScope', label: '市场范围', placeholder: 'CN_MAINLAND' },
      { key: 'sourceCode', label: '来源编码', placeholder: 'AKSHARE_NEWS' },
      { key: 'providerBaseUrl', label: 'Provider Base URL', placeholder: 'http://127.0.0.1:8080' },
      { key: 'keywords', label: '关键词', placeholder: 'AI,人工智能,半导体,黄金' },
      { key: 'freshnessHours', label: '新鲜度小时', placeholder: '72' },
      { key: 'maxItems', label: '最大条数', placeholder: '100' },
    ]
  }
  if (type === 'REAL_DATA_QUALITY_SNAPSHOT') {
    return [
      { key: 'marketScope', label: '市场范围', placeholder: 'CN_MAINLAND' },
      { key: 'minProductCoverage', label: '产品覆盖阈值', placeholder: '0.8' },
      { key: 'minQuoteCoverage', label: '行情覆盖阈值', placeholder: '0.8' },
      { key: 'maxQuoteAgeDays', label: '行情最大滞后天数', placeholder: '3' },
      { key: 'minNewsCount', label: '72小时资讯阈值', placeholder: '20' },
      { key: 'minQualityScore', label: '综合质量阈值', placeholder: '0.60' },
    ]
  }
  if (type === 'AI_DATA_SOURCE_DISCOVERY') {
    return [
      { key: 'taskCode', label: '方向任务编码', inputType: 'select', options: directionTaskCodeSelectOptions },
      { key: 'environment', label: '环境', placeholder: 'DEFAULT' },
      { key: 'marketScope', label: '市场范围', placeholder: 'CN_MAINLAND' },
      { key: 'collectionDirection', label: '采集方向', inputType: 'select', options: collectionDirectionSelectOptions },
      { key: 'skillCode', label: 'Skill 编码', inputType: 'select', options: dataCollectionSkillSelectOptions },
      { key: 'assetClass', label: '资产类别', placeholder: 'MULTI_ASSET' },
      { key: 'dataTypes', label: '数据类型', placeholder: 'MARKET_QUOTE,NEWS,ANNOUNCEMENT,RESEARCH,REGULATORY' },
      { key: 'topicKeywords', label: '主题关键词', placeholder: '理财产品,基金净值,ETF净值' },
      { key: 'preferredTrustLevels', label: '偏好等级', placeholder: 'L1,L2,L3,L4' },
      { key: 'candidateLimit', label: '候选上限', placeholder: '4' },
      { key: 'includeDisabledCandidates', label: '包含暂不可用候选', inputType: 'switch' },
      { key: 'autoRegisterCandidates', label: '自动沉淀候选', inputType: 'switch' },
      { key: 'autoEnableCandidates', label: '自动启用候选', inputType: 'switch' },
    ]
  }
  return [
    ...base,
    { key: 'externalIdPath', label: '外部 ID 路径', placeholder: 'id' },
    { key: 'titlePath', label: '标题路径', placeholder: 'title' },
    { key: 'publishTimePath', label: '发布时间路径', placeholder: 'publishTime' },
    { key: 'includeKeywords', label: '包含关键词', placeholder: '黄金,ETF' },
  ]
})

const columns = [
  { title: '任务编码', dataIndex: 'code' },
  { title: '任务类型', customRender: ({ record }: { record: InvestmentTaskDefinitionDto }) => optionLabel(ingestionTaskTypeOptions, record.type) },
  { title: 'Cron', dataIndex: 'cron' },
  { title: '启用', customRender: ({ record }: { record: InvestmentTaskDefinitionDto }) => h(StatusTag, { value: record.enabled, options: [{ label: '启用', value: true, color: 'success' }, { label: '停用', value: false, color: 'default' }] }) },
]

const isEndpointCollectionTask = (type: string) => endpointCollectionTypes.includes(type)

const rowEvents = (record: InvestmentTaskDefinitionDto) => ({ onClick: () => openTask(record) })

const openTask = (task: InvestmentTaskDefinitionDto) => {
  selectedTask.value = task
  Object.keys(parameterDraft).forEach((key) => delete parameterDraft[key])
  Object.entries(task.parameters || {}).forEach(([key, value]) => {
    parameterDraft[key] = String(value ?? '')
  })
  if (task.type === 'AI_DATA_SOURCE_DISCOVERY') {
    const defaults = defaultDiscoveryDraft()
    Object.entries(defaults).forEach(([key, value]) => {
      if (parameterDraft[key] === undefined || parameterDraft[key] === '') parameterDraft[key] = String(value)
    })
    parameterDraft.taskCode = task.code || parameterDraft.taskCode
  }
  drawerOpen.value = true
}

const saveSelected = async () => {
  if (!selectedTask.value) return
  saving.value = true
  try {
    const parameters = selectedTask.value.type === 'AI_DATA_SOURCE_DISCOVERY'
      ? normalizeDiscoveryParameters(parameterDraft)
      : { ...parameterDraft }
    await saveTaskDefinition({
      ...selectedTask.value,
      code: selectedTask.value.type === 'AI_DATA_SOURCE_DISCOVERY' ? (parameterDraft.taskCode || selectedTask.value.code) : selectedTask.value.code,
      parameters,
    })
    message.success('任务定义已保存，调度将按后端规则刷新')
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const triggerSelected = async () => {
  if (!selectedTask.value) return
  triggering.value = true
  try {
    const taskCode = selectedTask.value.type === 'AI_DATA_SOURCE_DISCOVERY' ? (parameterDraft.taskCode || selectedTask.value.code) : selectedTask.value.code
    const parameters = selectedTask.value.type === 'AI_DATA_SOURCE_DISCOVERY'
      ? normalizeDiscoveryParameters(parameterDraft)
      : { ...parameterDraft }
    const result = await triggerInvestmentTask({ taskCode, parameters })
    message.success(`已触发任务：${result.eventId}`)
    await loadExecutions()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '触发失败')
  } finally {
    triggering.value = false
  }
}

const filterOption = (input: string, option?: { label?: string; value?: string }) =>
  `${option?.label || ''}${option?.value || ''}`.toLowerCase().includes(input.toLowerCase())

const defaultDiscoveryDraft = () => ({
  taskCode: collectionDirectionDefaults.MULTI_SOURCE.taskCode,
  environment: 'DEFAULT',
  marketScope: 'CN_MAINLAND',
  collectionDirection: 'MULTI_SOURCE',
  skillCode: collectionDirectionDefaults.MULTI_SOURCE.skillCode,
  assetClass: collectionDirectionDefaults.MULTI_SOURCE.assetClass,
  dataTypes: collectionDirectionDefaults.MULTI_SOURCE.dataTypes,
  topicKeywords: collectionDirectionDefaults.MULTI_SOURCE.topicKeywords,
  preferredTrustLevels: collectionDirectionDefaults.MULTI_SOURCE.preferredTrustLevels,
  candidateLimit: 4,
  includeDisabledCandidates: true,
  autoRegisterCandidates: true,
  autoEnableCandidates: false,
})

const handleParameterChange = (key: string, value: unknown) => {
  if (key !== 'collectionDirection') return
  const next = collectionDirectionDefaults[String(value)]
  if (!next) return
  parameterDraft.taskCode = next.taskCode
  parameterDraft.skillCode = next.skillCode
  parameterDraft.assetClass = next.assetClass
  parameterDraft.dataTypes = next.dataTypes
  parameterDraft.topicKeywords = next.topicKeywords
  parameterDraft.preferredTrustLevels = next.preferredTrustLevels
}

const handleSwitchChange = (key: string, checked: boolean) => {
  parameterDraft[key] = String(checked)
}

const normalizeDiscoveryParameters = (draft: Record<string, string>) => {
  const { taskCode: _taskCode, ...rest } = draft
  return {
    ...rest,
    candidateLimit: Number(rest.candidateLimit || 4),
    includeDisabledCandidates: rest.includeDisabledCandidates === 'true',
    autoRegisterCandidates: rest.autoRegisterCandidates === 'true',
    autoEnableCandidates: rest.autoEnableCandidates === 'true',
  }
}

const loadExecutions = async () => {
  const page = await listTaskExecutions({ page: 1, size: 20, sort: 'startedAt', direction: 'desc' })
  executions.value = page.items || []
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [taskList, , userPage] = await Promise.all([
      listTaskDefinitions(),
      loadExecutions(),
      listUsers({ page: 1, size: 100, sort: 'registeredAt', direction: 'desc' }),
    ])
    definitions.value = taskList || []
    users.value = userPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '采集编排接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
