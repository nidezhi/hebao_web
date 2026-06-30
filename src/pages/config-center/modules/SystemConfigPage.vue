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
        <a-col :xs="24" :lg="7" :xl="6">
          <a-card class="page-card config-tree-card" :bordered="false">
            <template #extra>
              <a-tag color="blue">{{ activeEnvironment }}</a-tag>
            </template>
            <template #title>配置树</template>
            <a-select
              v-model:value="activeEnvironment"
              class="full-width mb-12"
              :options="environmentOptions"
              @change="changeEnvironment"
            />
            <a-menu
              v-model:selectedKeys="selectedConfigKeys"
              v-model:openKeys="openConfigKeys"
              mode="inline"
              class="config-tree-menu"
            >
              <a-sub-menu key="auto-loop">
                <template #title>
                  <span>自动投资闭环</span>
                </template>
                <a-menu-item key="auto-default">
                  默认配置
                </a-menu-item>
                <a-menu-item key="effective-preview">
                  生效概览
                </a-menu-item>
                <a-menu-item key="raw-configs">
                  配置项列表
                </a-menu-item>
                <a-menu-item key="profiles">
                  配置方案
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
            <div class="config-tree-actions">
              <a-button block @click="refreshCurrentNode">刷新当前</a-button>
              <a-button v-if="activeConfigNode === 'auto-default'" block type="primary" :loading="saving" @click="saveAutoClosedLoop">保存默认配置</a-button>
              <a-button v-if="activeConfigNode === 'profiles'" block type="primary" @click="openProfile()">新增方案</a-button>
            </div>
          </a-card>
        </a-col>

        <a-col :xs="24" :lg="17" :xl="18">
          <a-card v-if="activeConfigNode === 'auto-default'" class="page-card" :bordered="false" title="自动闭环默认配置">
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
                <a-col :xs="24">
                  <a-form-item label="定时任务权威方案">
                    <a-select
                      v-model:value="autoForm.scheduledConfigProfileCode"
                      show-search
                      option-filter-prop="label"
                      :options="profileSelectOptions"
                      placeholder="选择 SCHEDULE 自动执行时使用的配置方案"
                    />
                    <div class="muted-line">Cron 定时触发不弹窗，始终以这里选择的方案为准；手工触发仍可临时选择方案。</div>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24">
                  <a-form-item label="默认 Mock 组合">
                    <a-select
                      v-model:value="autoForm.mockPortfolioBizId"
                      allow-clear
                      show-search
                      option-filter-prop="label"
                      :loading="loadingPortfolios"
                      :options="portfolioOptions"
                      placeholder="选择闭环使用的 Mock 组合；为空时按用户和名称创建/复用资金池"
                      @focus="loadPortfolios"
                      @change="selectPortfolio"
                    />
                    <div class="mock-config-summary">
                      <strong>{{ selectedPortfolio?.portfolioName || autoForm.mockPortfolioName }}</strong>
                      <span>{{ mockPortfolioSummary }}</span>
                    </div>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="12">
                  <a-form-item label="资金池归属用户">
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
                    <div class="muted-line">组合为空时使用该用户创建/复用资金池</div>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="12">
                  <a-form-item label="资金池名称兜底">
                    <a-input v-model:value="autoForm.mockPortfolioName" placeholder="组合为空时按名称创建或复用" />
                    <div class="muted-line">已选组合时优先使用组合名称；该字段作为创建兜底</div>
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

          <a-card v-else-if="activeConfigNode === 'effective-preview'" class="page-card" :bordered="false" title="生效概览">
            <template #extra>
              <a-button @click="load">刷新</a-button>
            </template>
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

          <a-card v-else-if="activeConfigNode === 'raw-configs'" class="page-card" :bordered="false" title="配置项列表">
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

          <a-card v-else class="page-card" :bordered="false" title="自动闭环配置方案">
            <template #extra>
              <a-space wrap>
                <a-button @click="loadProfiles">刷新方案</a-button>
                <a-button type="primary" @click="openProfile()">新增方案</a-button>
              </a-space>
            </template>
            <a-table row-key="configKey" size="small" :data-source="profiles" :columns="profileColumns" :pagination="{ pageSize: 8 }">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'profile'">
                  <strong>{{ profileValue(record).profileName || record.configKey }}</strong>
                  <div class="muted-line">{{ record.configKey }}</div>
                </template>
                <template v-else-if="column.key === 'portfolio'">
                  {{ profilePortfolioLabel(profileValue(record)) }}
                </template>
                <template v-else-if="column.key === 'prompt'">
                  {{ profileValue(record).promptCode }}@{{ profileValue(record).promptVersion }}
                </template>
                <template v-else-if="column.key === 'policy'">
                  <a-space wrap>
                    <a-tag>{{ String(profileValue(record).profileType || 'STANDARD') }}</a-tag>
                    <a-tag :color="profileValue(record).riskLevel === 'HIGH' ? 'error' : profileValue(record).riskLevel === 'MEDIUM' ? 'warning' : 'success'">{{ String(profileValue(record).riskLevel || 'LOW') }}</a-tag>
                    <a-tag>{{ profileExecutionValue(profileValue(record), 'runMode', 'FULL_PIPELINE') }}</a-tag>
                  </a-space>
                </template>
                <template v-else-if="column.key === 'status'">
                  <a-tag :color="record.status === 'ENABLED' ? 'success' : 'default'">{{ record.status === 'ENABLED' ? '启用' : '停用' }}</a-tag>
                </template>
                <template v-else-if="column.key === 'actions'">
                  <a-button size="small" type="link" @click="openProfile(record)">编辑</a-button>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>

      <a-modal v-model:open="profileOpen" width="920px" title="自动闭环配置方案" :confirm-loading="profileSaving" @ok="saveProfile">
        <a-form layout="vertical">
          <a-tabs>
            <a-tab-pane key="base" tab="基础">
              <a-row :gutter="12">
                <a-col :xs="24" :md="12"><a-form-item label="方案编码"><a-input v-model:value="profileForm.profileCode" :disabled="Boolean(editingProfileKey)" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="方案名称"><a-input v-model:value="profileForm.profileName" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="方案类型"><a-select v-model:value="profileForm.profileType" :options="profileTypeOptions" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="风险等级"><a-select v-model:value="profileForm.riskLevel" :options="riskLevelOptions" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="自动化等级"><a-select v-model:value="profileForm.automationLevel" :options="automationLevelOptions" /></a-form-item></a-col>
              </a-row>
              <a-form-item label="策略备注"><a-textarea v-model:value="profileForm.strategyNote" :auto-size="{ minRows: 2, maxRows: 4 }" /></a-form-item>
              <a-form-item label="启用"><a-switch v-model:checked="profileEnabled" checked-children="启用" un-checked-children="停用" /></a-form-item>
            </a-tab-pane>
            <a-tab-pane key="execution" tab="执行">
              <a-row :gutter="12">
                <a-col :xs="24" :md="8"><a-form-item label="运行模式"><a-select v-model:value="profileForm.execution.runMode" :options="runModeOptions" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="市场范围"><a-select v-model:value="profileForm.execution.marketScope" :options="marketScopeOptions" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="模型类型"><a-select v-model:value="profileForm.modelType" :options="modelTypeOptions" /></a-form-item></a-col>
              </a-row>
              <a-form-item label="数据任务">
                <a-select v-model:value="profileForm.execution.dataTaskCodes" mode="tags" token-separators="," placeholder="输入或选择任务编码" />
              </a-form-item>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12"><a-form-item label="报告任务编码"><a-input v-model:value="profileForm.execution.reportTaskCode" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="Prompt 候选任务编码"><a-input v-model:value="profileForm.execution.promptTaskCode" /></a-form-item></a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24" :md="8"><a-form-item label="跳过报告任务"><a-switch v-model:checked="profileForm.execution.skipReportTask" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="生成 Prompt 候选"><a-switch v-model:checked="profileForm.execution.allowPromptCandidate" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="生成模型候选"><a-switch v-model:checked="profileForm.execution.allowModelCandidate" /></a-form-item></a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="mock" tab="Mock">
              <a-form-item label="Mock 组合">
                <a-select v-model:value="profileForm.mockPortfolioBizId" allow-clear show-search option-filter-prop="label" :options="portfolioOptions" @focus="loadPortfolios" @change="selectProfilePortfolio" />
              </a-form-item>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12"><a-form-item label="归属用户"><a-select v-model:value="profileForm.mockUserBizId" show-search :filter-option="false" :loading="loadingUsers" :options="userOptions" @focus="loadUsers()" @search="loadUsers" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="资金池名称兜底"><a-input v-model:value="profileForm.mockPortfolioName" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="初始现金"><a-input-number v-model:value="profileForm.initialCash" :min="1" :precision="2" style="width: 100%" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="单次交易上限"><a-input-number v-model:value="profileForm.safety.maxSingleTradeAmount" :min="0" :precision="2" style="width: 100%" /></a-form-item></a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="gate" tab="门禁">
              <a-row :gutter="12">
                <a-col :xs="24" :md="8"><a-form-item label="最低质量分"><a-input-number v-model:value="profileForm.qualityGate.minQualityScore" :min="0.01" :max="1" :step="0.05" :precision="2" style="width: 100%" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="候选报告数"><a-input-number v-model:value="profileForm.qualityGate.maxReportsForMock" :min="1" :max="100" style="width: 100%" /></a-form-item></a-col>
                <a-col :xs="24" :md="8"><a-form-item label="要求结构化核心数据"><a-switch v-model:checked="profileForm.qualityGate.requireStructuredCoreData" /></a-form-item></a-col>
              </a-row>
              <a-row :gutter="12">
                <a-col :xs="24" :md="6"><a-form-item label="允许 Mock 交易"><a-switch v-model:checked="profileForm.safety.allowAutoMockTrade" /></a-form-item></a-col>
                <a-col :xs="24" :md="6"><a-form-item label="允许 Prompt 启用"><a-switch v-model:checked="profileForm.safety.allowAutoPromptActivation" /></a-form-item></a-col>
                <a-col :xs="24" :md="6"><a-form-item label="允许模型启用"><a-switch v-model:checked="profileForm.safety.allowAutoModelActivation" /></a-form-item></a-col>
                <a-col :xs="24" :md="6"><a-form-item label="允许真实交易"><a-switch v-model:checked="profileForm.safety.allowRealTrade" disabled /></a-form-item></a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="prompt" tab="Prompt/回测">
              <a-form-item label="默认 Prompt">
                <a-select v-model:value="profilePromptBizId" show-search :filter-option="false" :loading="loadingPrompts" :options="promptOptions" @focus="loadPrompts()" @search="loadPrompts" @change="selectProfilePrompt" />
                <div class="muted-line">{{ profileForm.promptCode }}@{{ profileForm.promptVersion }} · {{ profileForm.promptScenario }}</div>
              </a-form-item>
              <a-row :gutter="12">
                <a-col :xs="24" :md="12"><a-form-item label="Prompt 场景"><a-select v-model:value="profileForm.promptScenario" :options="promptScenarioOptions" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="回测基准"><a-input v-model:value="profileForm.backtest.benchmarkCode" placeholder="例如 CSI300，可为空" /></a-form-item></a-col>
                <a-col :xs="24" :md="12"><a-form-item label="估值点上限"><a-input-number v-model:value="profileForm.backtest.valuationPointLimit" :min="10" :max="500" style="width: 100%" /></a-form-item></a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-form>
      </a-modal>
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
import { getAutomationMockPortfolio, listMyMockPortfolios } from '@/entities/portfolio/api'
import type { MockPortfolioDto } from '@/entities/portfolio/model'
import { formatMoney } from '@/shared/utils/format'

const AUTO_GROUP = 'AUTO_INVESTMENT_CLOSED_LOOP'
const PROFILE_GROUP = 'AUTO_INVESTMENT_CLOSED_LOOP_PROFILE'
const DEFAULT_PROFILE_CODE = 'default-auto-mock'
const loading = ref(false)
const saving = ref(false)
const loadingUsers = ref(false)
const loadingPrompts = ref(false)
const loadingPortfolios = ref(false)
const errorMessage = ref('')
const configs = ref<SystemConfigDto[]>([])
const profiles = ref<SystemConfigDto[]>([])
const users = ref<UserDto[]>([])
const prompts = ref<AiPromptTemplateDto[]>([])
const portfolios = ref<MockPortfolioDto[]>([])
const activeEnvironment = ref('DEFAULT')
const autoEnabled = ref(true)
const selectedPromptBizId = ref('')
const profilePromptBizId = ref('')
const profileOpen = ref(false)
const profileSaving = ref(false)
const profileEnabled = ref(true)
const editingProfileKey = ref('')
const selectedConfigKeys = ref(['auto-default'])
const openConfigKeys = ref(['auto-loop'])
const filters = reactive<SystemConfigListRequest>({
  configGroup: AUTO_GROUP,
  status: undefined,
})
const autoForm = reactive({
  automationLevel: 'FULL_MOCK',
  mockUserBizId: '21000000-0000-0000-0000-000000000002',
  mockPortfolioBizId: '',
  mockPortfolioName: '全自动闭环模拟组合',
  initialCash: 100000,
  promptCode: 'investment-plan-from-report',
  promptVersion: 'auto-v1',
  promptScenario: 'INVESTMENT_PLAN',
  modelType: 'INVESTMENT_ANALYSIS',
  scheduledConfigProfileCode: 'default-auto-mock',
})
const profileForm = reactive(createDefaultProfileForm())

const configMeta: Record<keyof typeof autoForm, { label: string; valueType: SystemConfigValueType; description: string }> = {
  automationLevel: { label: '自动化等级', valueType: 'STRING', description: '自动投资闭环默认自动化等级。任务参数 automationLevel 可覆盖。' },
  mockUserBizId: { label: 'AI 模拟资金池用户', valueType: 'STRING', description: '自动投资闭环默认模拟交易用户。任务参数 mockUserBizId 可覆盖。' },
  mockPortfolioBizId: { label: '默认 Mock 组合', valueType: 'STRING', description: '自动投资闭环默认模拟组合 BizId。为空时按用户和名称查找或创建资金池；任务参数 mockPortfolioBizId 可覆盖。' },
  mockPortfolioName: { label: 'AI 模拟资金池名称', valueType: 'STRING', description: '自动投资闭环默认 AI 模拟资金池名称。任务参数 mockPortfolioName 可覆盖。' },
  initialCash: { label: '初始现金', valueType: 'NUMBER', description: '自动投资闭环默认 AI 模拟资金池初始现金。任务参数 initialCash 可覆盖。' },
  promptCode: { label: 'Prompt Code', valueType: 'STRING', description: '自动投资闭环默认 Prompt 编码。任务参数 promptCode 可覆盖。' },
  promptVersion: { label: 'Prompt Version', valueType: 'STRING', description: '自动投资闭环默认 Prompt 版本。任务参数 promptVersion 可覆盖。' },
  promptScenario: { label: 'Prompt 场景', valueType: 'STRING', description: '自动投资闭环默认 Prompt 场景。任务参数 promptScenario 可覆盖。' },
  modelType: { label: '候选模型类型', valueType: 'STRING', description: '自动投资闭环默认候选模型类型。' },
  scheduledConfigProfileCode: { label: '定时任务权威方案', valueType: 'STRING', description: '自动投资闭环定时任务默认配置方案编码；SCHEDULE 触发时作为最权威方案。' },
}

const automationLevelOptions = [
  { label: '全 Mock', value: 'FULL_MOCK' },
  { label: '半自动', value: 'SEMI_AUTO' },
  { label: '只评估', value: 'EVALUATION_ONLY' },
]
const profileTypeOptions = [
  { label: '定时基线', value: 'SCHEDULED_BASELINE' },
  { label: '人工实验', value: 'MANUAL_EXPERIMENT' },
  { label: '灰度候选', value: 'CANARY' },
]
const riskLevelOptions = [
  { label: '低', value: 'LOW' },
  { label: '中', value: 'MEDIUM' },
  { label: '高', value: 'HIGH' },
]
const runModeOptions = [
  { label: '全链路', value: 'FULL_PIPELINE' },
  { label: '仅评估', value: 'EVALUATION_ONLY' },
  { label: '只跑 Mock', value: 'MOCK_ONLY' },
]
const marketScopeOptions = [
  { label: '中国大陆', value: 'CN_MAINLAND' },
  { label: '全球', value: 'GLOBAL' },
  { label: '美国', value: 'US' },
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
  { label: '自动闭环配置方案', value: PROFILE_GROUP },
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
const profileColumns = [
  { title: '方案', key: 'profile' },
  { title: 'Mock 组合', key: 'portfolio' },
  { title: 'Prompt', key: 'prompt' },
  { title: '策略', key: 'policy' },
  { title: '状态', key: 'status', width: 90 },
  { title: '操作', key: 'actions', width: 90 },
]
const profileSelectOptions = computed(() => {
  const options = profiles.value
    .filter((item) => item.status === 'ENABLED')
    .map((item) => ({
    value: item.configKey,
    label: `${String(profileValue(item).profileName || item.configKey)} · ${item.configKey}`,
  }))
  if (autoForm.scheduledConfigProfileCode && !options.some((item) => item.value === autoForm.scheduledConfigProfileCode)) {
    options.unshift({
      value: autoForm.scheduledConfigProfileCode,
      label: `${autoForm.scheduledConfigProfileCode === DEFAULT_PROFILE_CODE ? '默认 AI Mock 闭环方案' : '当前配置方案'} · ${autoForm.scheduledConfigProfileCode}`,
    })
  }
  return options
})

const autoConfigs = computed(() => configs.value.filter((item) => item.configGroup === AUTO_GROUP && item.environment === activeEnvironment.value))
const userOptions = computed(() => users.value.map((user) => ({
  label: [user.nickname || user.username, user.userNo, user.email || user.phone, user.status].filter(Boolean).join(' · '),
  value: user.bizId,
})))
const promptOptions = computed(() => prompts.value.map((prompt) => ({
  label: `${prompt.templateName} · ${prompt.promptCode}@${prompt.promptVersion} · ${prompt.scenario}`,
  value: prompt.bizId,
})))
const portfolioOptions = computed(() => portfolios.value.map((portfolio) => ({
  label: [
    portfolio.portfolioName,
    portfolio.portfolioNo || portfolio.bizId,
    formatMoney(portfolio.latestValuation?.totalAsset, portfolio.baseCurrency),
    portfolio.ownerUserBizId,
  ].filter(Boolean).join(' · '),
  value: portfolio.bizId,
})))
const selectedPortfolio = computed(() =>
  portfolios.value.find((item) => item.bizId === autoForm.mockPortfolioBizId))
const mockPortfolioSummary = computed(() => {
  if (!selectedPortfolio.value) {
    return `未指定组合，将按用户 ${autoForm.mockUserBizId} 和名称“${autoForm.mockPortfolioName}”创建或复用。`
  }
  return [
    selectedPortfolio.value.portfolioNo || selectedPortfolio.value.bizId,
    `归属 ${selectedPortfolio.value.ownerUserBizId || '-'}`,
    `总资产 ${formatMoney(selectedPortfolio.value.latestValuation?.totalAsset, selectedPortfolio.value.baseCurrency)}`,
    `现金 ${formatMoney(selectedPortfolio.value.latestValuation?.cashBalance, selectedPortfolio.value.baseCurrency)}`,
  ].join(' · ')
})
const metrics = computed(() => [
  { label: '配置项', value: configs.value.length, hint: '当前筛选' },
  { label: '自动闭环', value: autoConfigs.value.length, hint: '表内命中' },
  { label: '启用项', value: enabledConfigCount.value, hint: '可生效' },
  { label: '环境', value: activeEnvironment.value, hint: '当前编辑' },
])
const enabledConfigCount = computed(() => configs.value.filter((item) => item.status === 'ENABLED').length)
const activeConfigNode = computed(() => selectedConfigKeys.value[0] || 'auto-default')
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

const profileValue = (record: SystemConfigDto) =>
  safeProfile(record.displayValue || record.configValue)

const profileExecutionValue = (profile: Record<string, unknown>, key: string, fallback = '') => {
  const execution = profile.execution && typeof profile.execution === 'object' ? profile.execution as Record<string, unknown> : {}
  return String(execution[key] || profile[key] || fallback)
}

const profilePortfolioLabel = (profile: Record<string, unknown>) => {
  const portfolioBizId = String(profile.mockPortfolioBizId || '')
  const matched = portfolios.value.find((item) => item.bizId === portfolioBizId)
  return matched ? `${matched.portfolioName} · ${formatMoney(matched.latestValuation?.totalAsset, matched.baseCurrency)}` : (portfolioBizId || String(profile.mockPortfolioName || '-'))
}

const findConfig = (key: keyof typeof autoForm) =>
  autoConfigs.value.find((item) => item.configKey === key)

const mergeUsers = (items: UserDto[]) => {
  const map = new Map<string, UserDto>()
  users.value.forEach((item) => map.set(item.bizId, item))
  items.forEach((item) => map.set(item.bizId, item))
  users.value = Array.from(map.values())
}

const mergePortfolios = (items: MockPortfolioDto[]) => {
  const map = new Map<string, MockPortfolioDto>()
  portfolios.value.forEach((item) => map.set(item.bizId, item))
  items.forEach((item) => map.set(item.bizId, item))
  portfolios.value = Array.from(map.values())
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

const loadProfiles = async () => {
  const page = await listSystemConfigs({
    configGroup: PROFILE_GROUP,
    environment: activeEnvironment.value,
    page: 1,
    size: 100,
    sort: 'configKey',
    direction: 'asc',
  })
  profiles.value = page.items || []
}

const changeEnvironment = async () => {
  await Promise.all([load(), loadProfiles()])
}

const refreshCurrentNode = async () => {
  if (activeConfigNode.value === 'profiles') {
    await loadProfiles()
    return
  }
  await load()
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

const loadPortfolios = async () => {
  loadingPortfolios.value = true
  try {
    const [page, automationPool] = await Promise.all([
      listMyMockPortfolios({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      getAutomationMockPortfolio(),
    ])
    mergePortfolios([automationPool, ...(page.items || [])])
  } catch (error) {
    message.error(error instanceof Error ? error.message : 'Mock 组合选择器加载失败')
  } finally {
    loadingPortfolios.value = false
  }
}

const safeProfile = (value?: string): Record<string, unknown> => {
  if (!value) return {}
  try {
    const parsed = JSON.parse(value) as Record<string, unknown>
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

const syncProfilePromptSelection = () => {
  const matched = prompts.value.find((item) =>
    item.promptCode === profileForm.promptCode && item.promptVersion === profileForm.promptVersion)
  profilePromptBizId.value = matched?.bizId || ''
}

function createDefaultProfileForm() {
  return {
    ...autoForm,
    profileCode: DEFAULT_PROFILE_CODE,
    profileName: '默认 AI Mock 闭环方案',
    profileType: 'SCHEDULED_BASELINE',
    riskLevel: 'LOW',
    strategyNote: '',
    execution: {
      runMode: 'FULL_PIPELINE',
      marketScope: 'CN_MAINLAND',
      dataTaskCodes: ['real-data-quality-snapshot'],
      reportTaskCode: 'auto-openai-investment-report-generation',
      promptTaskCode: '',
      skipReportTask: false,
      allowPromptCandidate: true,
      allowModelCandidate: true,
    },
    qualityGate: {
      requireStructuredCoreData: false,
      minQualityScore: 0.45,
      maxReportsForMock: 20,
    },
    safety: {
      allowAutoMockTrade: true,
      allowAutoPromptActivation: true,
      allowAutoModelActivation: true,
      allowRealTrade: false,
      maxSingleTradeAmount: 10000,
    },
    backtest: {
      benchmarkCode: '',
      valuationPointLimit: 100,
    },
  }
}

function createNewProfileForm() {
  return {
    ...createDefaultProfileForm(),
    profileCode: '',
    profileName: '',
    profileType: 'MANUAL_EXPERIMENT',
  }
}

const normalizeStringArray = (value: unknown) => {
  if (Array.isArray(value)) return value.map(String).filter(Boolean)
  if (typeof value === 'string') return value.split(',').map((item) => item.trim()).filter(Boolean)
  return []
}

const normalizeBoolean = (value: unknown, fallback: boolean) => {
  if (value == null || value === '') return fallback
  if (typeof value === 'boolean') return value
  return String(value).toLowerCase() === 'true'
}

const assignProfileForm = (value: Record<string, unknown>, record?: SystemConfigDto) => {
  const isEditing = Boolean(record)
  const execution = value.execution && typeof value.execution === 'object' ? value.execution as Record<string, unknown> : {}
  const qualityGate = value.qualityGate && typeof value.qualityGate === 'object' ? value.qualityGate as Record<string, unknown> : {}
  const safety = value.safety && typeof value.safety === 'object' ? value.safety as Record<string, unknown> : {}
  const backtest = value.backtest && typeof value.backtest === 'object' ? value.backtest as Record<string, unknown> : {}
  Object.assign(profileForm, isEditing ? createDefaultProfileForm() : createNewProfileForm(), {
    ...autoForm,
    ...value,
    profileCode: isEditing ? record?.configKey || String(value.profileCode || DEFAULT_PROFILE_CODE) : '',
    profileName: isEditing ? String(value.profileName || '默认 AI Mock 闭环方案') : '',
    profileType: String(value.profileType || (isEditing ? 'SCHEDULED_BASELINE' : 'MANUAL_EXPERIMENT')),
    initialCash: Number(value.initialCash || autoForm.initialCash),
    execution: {
      ...createDefaultProfileForm().execution,
      ...execution,
      runMode: String(execution.runMode || value.runMode || 'FULL_PIPELINE'),
      marketScope: String(execution.marketScope || value.marketScope || 'CN_MAINLAND'),
      dataTaskCodes: normalizeStringArray(execution.dataTaskCodes || value.dataTaskCodes),
      reportTaskCode: String(execution.reportTaskCode || value.reportTaskCode || 'auto-openai-investment-report-generation'),
      promptTaskCode: String(execution.promptTaskCode || value.promptTaskCode || ''),
      skipReportTask: normalizeBoolean(execution.skipReportTask ?? value.skipReportTask, false),
      allowPromptCandidate: normalizeBoolean(execution.allowPromptCandidate ?? value.allowPromptCandidate, true),
      allowModelCandidate: normalizeBoolean(execution.allowModelCandidate ?? value.allowModelCandidate, true),
    },
    qualityGate: {
      ...createDefaultProfileForm().qualityGate,
      ...qualityGate,
      requireStructuredCoreData: normalizeBoolean(qualityGate.requireStructuredCoreData ?? value.requireStructuredCoreData, false),
      minQualityScore: Number(qualityGate.minQualityScore ?? value.minQualityScore ?? 0.45),
      maxReportsForMock: Number(qualityGate.maxReportsForMock ?? value.maxReportsForMock ?? 20),
    },
    safety: {
      ...createDefaultProfileForm().safety,
      ...safety,
      allowAutoMockTrade: normalizeBoolean(safety.allowAutoMockTrade ?? value.allowAutoMockTrade, true),
      allowAutoPromptActivation: normalizeBoolean(safety.allowAutoPromptActivation ?? value.allowAutoPromptActivation, true),
      allowAutoModelActivation: normalizeBoolean(safety.allowAutoModelActivation ?? value.allowAutoModelActivation, true),
      allowRealTrade: normalizeBoolean(safety.allowRealTrade ?? value.allowRealTrade, false),
      maxSingleTradeAmount: Number(safety.maxSingleTradeAmount ?? value.maxSingleTradeAmount ?? 10000),
    },
    backtest: {
      ...createDefaultProfileForm().backtest,
      ...backtest,
      benchmarkCode: String(backtest.benchmarkCode || value.benchmarkCode || ''),
      valuationPointLimit: Number(backtest.valuationPointLimit ?? value.valuationPointLimit ?? 100),
    },
  })
}

const openProfile = (record?: SystemConfigDto) => {
  const value = record ? safeProfile(record.displayValue || record.configValue) : {}
  assignProfileForm(value, record)
  editingProfileKey.value = record?.configKey || ''
  profileEnabled.value = record?.status !== 'DISABLED'
  syncProfilePromptSelection()
  profileOpen.value = true
}

const selectProfilePortfolio = (portfolioBizId?: string) => {
  const matched = portfolios.value.find((item) => item.bizId === portfolioBizId)
  if (!matched) return
  profileForm.mockUserBizId = matched.ownerUserBizId || profileForm.mockUserBizId
  profileForm.mockPortfolioName = matched.portfolioName || profileForm.mockPortfolioName
}

const selectProfilePrompt = (promptBizId: string) => {
  const matched = prompts.value.find((item) => item.bizId === promptBizId)
  if (!matched) return
  profileForm.promptCode = matched.promptCode
  profileForm.promptVersion = matched.promptVersion
  profileForm.promptScenario = matched.scenario || profileForm.promptScenario
}

const saveProfile = async () => {
  const profileCode = String(profileForm.profileCode || '').trim()
  if (!profileCode) {
    message.warning('方案编码不能为空')
    return
  }
  if (!editingProfileKey.value && profiles.value.some((item) => item.configKey === profileCode)) {
    message.warning('方案编码已存在，请从列表中编辑该方案')
    return
  }
  const profileConfigValue = {
    profileCode,
    profileName: profileForm.profileName,
    profileType: profileForm.profileType,
    riskLevel: profileForm.riskLevel,
    strategyNote: profileForm.strategyNote,
    automationLevel: profileForm.automationLevel,
    mockPortfolioBizId: profileForm.mockPortfolioBizId,
    mockUserBizId: profileForm.mockUserBizId,
    mockPortfolioName: profileForm.mockPortfolioName,
    initialCash: profileForm.initialCash,
    promptCode: profileForm.promptCode,
    promptVersion: profileForm.promptVersion,
    promptScenario: profileForm.promptScenario,
    modelType: profileForm.modelType,
    execution: { ...profileForm.execution },
    qualityGate: {
      ...profileForm.qualityGate,
      minQualityScore: String(profileForm.qualityGate.minQualityScore),
      maxReportsForMock: String(profileForm.qualityGate.maxReportsForMock),
    },
    safety: {
      ...profileForm.safety,
      maxSingleTradeAmount: String(profileForm.safety.maxSingleTradeAmount),
    },
    backtest: {
      ...profileForm.backtest,
      valuationPointLimit: String(profileForm.backtest.valuationPointLimit),
    },
  }
  profileSaving.value = true
  try {
    await saveSystemConfig({
      configGroup: PROFILE_GROUP,
      configKey: profileCode,
      environment: activeEnvironment.value,
      valueType: 'JSON',
      configValue: profileConfigValue,
      description: '自动投资闭环配置方案；手动触发闭环时选择，运行事件会保存本次参数快照。',
      status: profileEnabled.value ? 'ENABLED' : 'DISABLED',
    })
    message.success('配置方案已保存')
    profileOpen.value = false
    await loadProfiles()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存方案失败')
  } finally {
    profileSaving.value = false
  }
}

const selectPortfolio = (portfolioBizId?: string) => {
  const matched = portfolios.value.find((item) => item.bizId === portfolioBizId)
  if (!matched) return
  autoForm.mockUserBizId = matched.ownerUserBizId || autoForm.mockUserBizId
  autoForm.mockPortfolioName = matched.portfolioName || autoForm.mockPortfolioName
  const cash = matched.latestValuation?.cashBalance ?? matched.latestValuation?.totalAsset
  if (cash != null && Number(cash) > 0) autoForm.initialCash = Number(cash)
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
  if (!autoForm.scheduledConfigProfileCode.trim()) return '定时任务权威方案不能为空'
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
    await Promise.all([load(), loadProfiles()])
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  await load()
  await Promise.all([loadUsers(), loadPrompts(autoForm.promptCode), loadPortfolios(), loadProfiles()])
})
</script>

<style scoped>
.config-tree-card {
  position: sticky;
  top: 16px;
}

.config-tree-menu {
  border-inline-end: 0;
}

.config-tree-menu :deep(.ant-menu-item) {
  padding-inline-end: 12px;
}

.config-tree-actions {
  display: grid;
  gap: 8px;
  margin-top: 16px;
}

.full-width {
  width: 100%;
}

.mb-12 {
  margin-bottom: 12px;
}

.muted-line {
  color: #6b7280;
  font-size: 12px;
  line-height: 1.6;
}

.mock-config-summary {
  display: grid;
  gap: 2px;
  margin-top: 6px;
  color: #374151;
  font-size: 13px;
}
</style>
