<template>
  <BusinessPageShell
    class="ai-governance-page"
    title="AI Governance Hub AI 治理中枢"
    description="面向闭环的 AI 能力治理：看 Skill、模型绑定、Prompt、评估回流和方向化采集任务是否覆盖完整，而不是手工发起候选发现。"
    :endpoints="[endpoints.aiSkill.list, endpoints.aiModelSkill.list, endpoints.aiModel.list, endpoints.prompt.list, endpoints.promptEvaluation.list, endpoints.task.definitions]"
    :icon="RadarChartOutlined"
    status-text="GOVERN"
    :orbit-label="'AI'"
    :orbit-labels="['SKILL', 'MODEL', 'PROMPT']"
    orbit-tone="purple"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="15">
          <a-card class="page-card governance-card" :bordered="false" title="治理链路">
            <div class="governance-lane">
              <div v-for="node in governanceNodes" :key="node.title" class="governance-node" :class="`governance-node--${node.state}`">
                <span>{{ node.index }}</span>
                <strong>{{ node.title }}</strong>
                <small>{{ node.description }}</small>
                <a-tag :color="node.color">{{ node.status }}</a-tag>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="9">
          <a-card class="page-card governance-card" :bordered="false" title="待办">
            <a-list :data-source="actionItems" size="small">
              <template #renderItem="{ item }">
                <a-list-item class="clickable-row" @click="router.push(item.path)">
                  <a-list-item-meta :title="item.title" :description="item.description" />
                  <a-tag :color="item.color">{{ item.level }}</a-tag>
                </a-list-item>
              </template>
              <template #empty><EmptyEvidence description="暂无待办。" /></template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="Skill 能力">
            <a-table row-key="type" size="small" :pagination="false" :data-source="skillMatrix" :columns="skillColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'coverage'">
                  <a-progress :percent="record.coverage" size="small" :status="record.active > 0 ? 'active' : 'exception'" />
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-button size="small" type="link" @click="router.push('/config-center/ai-skills')">维护</a-button>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="模型绑定">
            <a-table row-key="scenario" size="small" :pagination="false" :data-source="bindingMatrix" :columns="bindingColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled > 0 ? 'success' : 'warning'">{{ record.enabled }}</a-tag>
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-button size="small" type="link" @click="router.push('/config-center/model-skills')">绑定</a-button>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="采集任务">
            <a-table row-key="code" size="small" :pagination="{ pageSize: 6 }" :data-source="directionTasks" :columns="taskColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
                </template>
                <template v-else-if="column.key === 'direction'">
                  {{ record.parameters?.collectionDirection || '-' }}
                </template>
              </template>
              <template #emptyText>
                <EmptyEvidence description="暂无方向化 LLM 采集任务，请在任务配置中创建 llm-* 任务。" />
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card governance-card" :bordered="false" title="Prompt 回流">
            <a-table row-key="bizId" size="small" :pagination="{ pageSize: 6 }" :data-source="evaluations" :columns="evaluationColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'score'">{{ formatPercent(record.score) }}</template>
                <template v-else-if="column.key === 'reviewStatus'">
                  <a-tag :color="record.reviewStatus === 'APPROVED' ? 'success' : 'warning'">{{ record.reviewStatus || 'PENDING' }}</a-tag>
                </template>
              </template>
              <template #emptyText>
                <EmptyEvidence description="暂无 Prompt 评估回流。" />
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { RadarChartOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatPercent } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import { listAiSkills } from '@/entities/ai-skill/api'
import { skillTypeOptions } from '@/entities/ai-skill/dictionary'
import type { AiSkillDto } from '@/entities/ai-skill/model'
import { listAiModelSkillBindings } from '@/entities/ai-model-skill/api'
import { scenarioCodeOptions } from '@/entities/ai-skill/dictionary'
import type { AiModelSkillBindingDto } from '@/entities/ai-model-skill/model'
import { listAiModels } from '@/entities/ai-model/api'
import type { AiModelDto } from '@/entities/ai-model/model'
import { listAiPrompts } from '@/entities/prompt/api'
import type { AiPromptTemplateDto } from '@/entities/prompt/model'
import { listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto } from '@/entities/feedback/model'
import { listTaskDefinitions } from '@/entities/task/api'
import type { InvestmentTaskDefinitionDto } from '@/entities/task/model'

const router = useRouter()
const loading = ref(false)
const errorMessage = ref('')
const skills = ref<AiSkillDto[]>([])
const bindings = ref<AiModelSkillBindingDto[]>([])
const models = ref<AiModelDto[]>([])
const prompts = ref<AiPromptTemplateDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])
const tasks = ref<InvestmentTaskDefinitionDto[]>([])

const activeSkills = computed(() => skills.value.filter((item) => item.status === 'ACTIVE'))
const enabledBindings = computed(() => bindings.value.filter((item) => item.enabled))
const pendingEvaluations = computed(() => evaluations.value.filter((item) => item.reviewStatus !== 'APPROVED'))
const directionTasks = computed(() => tasks.value.filter((item) => item.type === 'AI_DATA_SOURCE_DISCOVERY' || item.code?.startsWith('llm-')))

const metrics = computed(() => [
  { label: 'ACTIVE Skill', value: activeSkills.value.length, hint: `总数 ${skills.value.length}` },
  { label: '启用绑定', value: enabledBindings.value.length, hint: `模型 ${models.value.length}` },
  { label: '方向任务', value: directionTasks.value.length, hint: `启用 ${directionTasks.value.filter((item) => item.enabled).length}` },
  { label: 'Prompt 治理', value: prompts.value.filter((item) => item.status === 'ACTIVE').length, hint: `待复核 ${pendingEvaluations.value.length}` },
])

const governanceNodes = computed(() => [
  {
    index: '01',
    title: 'Skill 定义',
    description: '采集、报告、Prompt、质量审计等能力说明',
    state: activeSkills.value.length > 0 ? 'ok' : 'warn',
    status: activeSkills.value.length > 0 ? 'READY' : 'MISSING',
    color: activeSkills.value.length > 0 ? 'success' : 'warning',
  },
  {
    index: '02',
    title: '模型绑定',
    description: '模型实例挂载业务场景和 Skill 版本',
    state: enabledBindings.value.length > 0 ? 'ok' : 'warn',
    status: enabledBindings.value.length > 0 ? 'BOUND' : 'UNBOUND',
    color: enabledBindings.value.length > 0 ? 'success' : 'warning',
  },
  {
    index: '03',
    title: '任务挂载',
    description: 'llm-* 方向化任务进入闭环编排',
    state: directionTasks.value.some((item) => item.enabled) ? 'ok' : 'warn',
    status: directionTasks.value.some((item) => item.enabled) ? 'SCHEDULED' : 'HOLD',
    color: directionTasks.value.some((item) => item.enabled) ? 'success' : 'warning',
  },
  {
    index: '04',
    title: '评估回流',
    description: 'Prompt 评估、反馈、回测进入治理队列',
    state: pendingEvaluations.value.length === 0 ? 'ok' : 'warn',
    status: pendingEvaluations.value.length === 0 ? 'CLEAR' : 'REVIEW',
    color: pendingEvaluations.value.length === 0 ? 'success' : 'warning',
  },
])

const actionItems = computed(() => [
  ...(activeSkills.value.length === 0 ? [{ title: '缺少 ACTIVE Skill', description: '至少需要启用一个 AI Skill 才能进入闭环调用。', level: 'SKILL', color: 'warning', path: '/config-center/ai-skills' }] : []),
  ...(enabledBindings.value.length === 0 ? [{ title: '缺少启用绑定', description: '模型未绑定到业务 Skill 场景，后端无法按场景选择能力。', level: 'BIND', color: 'warning', path: '/config-center/model-skills' }] : []),
  ...(directionTasks.value.length === 0 ? [{ title: '缺少方向化任务', description: '请配置 llm-* AI_DATA_SOURCE_DISCOVERY 任务作为治理前置。', level: 'TASK', color: 'warning', path: '/config-center/tasks' }] : []),
  ...pendingEvaluations.value.slice(0, 4).map((item) => ({
    title: `Prompt 待复核：${item.promptCode}`,
    description: `版本 ${item.promptVersion} · 评分 ${formatPercent(item.score)}`,
    level: 'REVIEW',
    color: 'orange',
    path: '/prompt-lab',
  })),
])

const skillMatrix = computed(() => skillTypeOptions.map((option) => {
  const matched = skills.value.filter((item) => item.skillType === option.value)
  const active = matched.filter((item) => item.status === 'ACTIVE').length
  return {
    type: option.label,
    total: matched.length,
    active,
    coverage: matched.length ? Math.round((active / matched.length) * 100) : 0,
  }
}))

const bindingMatrix = computed(() => scenarioCodeOptions.map((option) => {
  const matched = bindings.value.filter((item) => item.scenarioCode === option.value)
  return {
    scenario: option.label,
    total: matched.length,
    enabled: matched.filter((item) => item.enabled).length,
  }
}))

const skillColumns = [
  { title: '能力类型', dataIndex: 'type' },
  { title: '版本数', dataIndex: 'total', width: 90 },
  { title: 'ACTIVE', dataIndex: 'active', width: 90 },
  { title: '覆盖', key: 'coverage', width: 160 },
  { title: '操作', key: 'action', width: 80 },
]

const bindingColumns = [
  { title: '业务场景', dataIndex: 'scenario' },
  { title: '绑定', dataIndex: 'total', width: 90 },
  { title: '启用', key: 'enabled', width: 90 },
  { title: '操作', key: 'action', width: 80 },
]

const taskColumns = [
  { title: '任务编码', dataIndex: 'code' },
  { title: '采集方向', key: 'direction', width: 140 },
  { title: '启用', key: 'enabled', width: 90 },
]

const evaluationColumns = [
  { title: 'Prompt', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', width: 90 },
  { title: '评分', key: 'score', width: 90 },
  { title: '复核', key: 'reviewStatus', width: 110 },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [skillPage, bindingPage, modelPage, promptPage, evaluationPage, taskList] = await Promise.all([
      listAiSkills({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
      listAiModelSkillBindings({ page: 1, size: 100, sort: 'priority', direction: 'asc' }),
      listAiModels({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
      listAiPrompts({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 50, sort: 'evaluatedAt', direction: 'desc' }),
      listTaskDefinitions(),
    ])
    skills.value = skillPage.items || []
    bindings.value = bindingPage.items || []
    models.value = modelPage.items || []
    prompts.value = promptPage.items || []
    evaluations.value = evaluationPage.items || []
    tasks.value = taskList || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'AI 治理中枢加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
