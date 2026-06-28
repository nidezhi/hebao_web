<template>
  <BusinessPageShell
    title="Config Center 配置总览"
    description="按 AI 治理、闭环编排、业务资产、权限与系统规范分域管理。配置中心不再平铺所有页面，而是从业务域进入对应管理列表。"
    :endpoints="[endpoints.aiSkill.list, endpoints.aiModelSkill.list, endpoints.dataSource.discover, endpoints.dataSource.list, endpoints.task.definitions, endpoints.prompt.list, endpoints.aiModel.list]"
    :icon="ControlOutlined"
    status-text="CONFIG INDEX"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col v-for="domain in domains" :key="domain.key" :xs="24" :xl="12">
          <a-card class="page-card config-domain-card" :bordered="false">
            <template #title>
              <a-space>
                <a-tag :color="domain.color">{{ domain.badge }}</a-tag>
                <span>{{ domain.title }}</span>
              </a-space>
            </template>
            <template #extra>
              <span class="muted-line">{{ domain.summary }}</span>
            </template>
            <a-list :data-source="domain.modules" item-layout="horizontal" class="config-domain-list">
              <template #renderItem="{ item }">
                <a-list-item class="config-domain-item" @click="router.push(item.path)">
                  <a-list-item-meta :title="item.title" :description="item.description">
                    <template #avatar>
                      <a-avatar :style="{ background: item.color }">{{ item.short }}</a-avatar>
                    </template>
                  </a-list-item-meta>
                  <a-tag :color="item.tagColor">{{ item.badge }}</a-tag>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ControlOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { listDataSources } from '@/entities/data-source/api'
import { listTaskDefinitions } from '@/entities/task/api'
import { listAiPrompts } from '@/entities/prompt/api'
import { listAiModels } from '@/entities/ai-model/api'
import { listAiSkills } from '@/entities/ai-skill/api'
import { listAiModelSkillBindings } from '@/entities/ai-model-skill/api'

const router = useRouter()
const loading = ref(false)
const errorMessage = ref('')
const sourceCount = ref(0)
const taskCount = ref(0)
const promptCount = ref(0)
const modelCount = ref(0)
const skillCount = ref(0)
const bindingCount = ref(0)

const domains = [
  {
    key: 'closed-loop',
    title: 'AI 治理与闭环配置',
    badge: 'AI LOOP',
    color: 'cyan',
    summary: 'AI 能力覆盖、治理证据、任务编排和安全动作',
    modules: [
      { title: 'AI 治理中枢', short: '治', badge: 'HUB', tagColor: 'cyan', color: '#0891b2', path: '/config-center/data-source-discovery', description: '查看 Skill、模型绑定、Prompt、评估回流和方向化任务覆盖。' },
      { title: 'AI 治理证据', short: '证', badge: 'EVIDENCE', tagColor: 'blue', color: '#2563eb', path: '/config-center/data-sources', description: '聚合闭环运行、任务执行、报告快照、反馈和 Prompt 评估证据。' },
      { title: '任务配置', short: '任', badge: 'TASK', tagColor: 'geekblue', color: '#4f46e5', path: '/config-center/tasks', description: '方向化 LLM 任务、闭环调度、手动触发和执行记录。' },
      { title: '业务操作管理', short: '动', badge: 'ACTION', tagColor: 'volcano', color: '#ea580c', path: '/config-center/actions', description: '写操作归属检查、业务页面导航和待补齐缺口。' },
    ],
  },
  {
    key: 'ai-capability',
    title: 'AI 能力配置',
    badge: 'AI',
    color: 'purple',
    summary: 'Skill、模型、绑定和 Prompt 治理',
    modules: [
      { title: 'AI Skill 工作台', short: 'S', badge: 'SKILL', tagColor: 'purple', color: '#7c3aed', path: '/config-center/ai-skills', description: '维护 Skill 版本、指令、Schema、评估策略和生命周期。' },
      { title: '模型 Skill 绑定', short: '绑', badge: 'BIND', tagColor: 'geekblue', color: '#2563eb', path: '/config-center/model-skills', description: '将模型实例绑定到 Skill 版本和方向化发现等业务场景。' },
      { title: '模型配置', short: '模', badge: 'MODEL', tagColor: 'blue', color: '#0284c7', path: '/config-center/models', description: 'AI 模型保存、状态变更、绑定查看和归档。' },
      { title: 'Prompt 配置', short: 'P', badge: 'PROMPT', tagColor: 'magenta', color: '#db2777', path: '/config-center/prompts', description: 'Prompt 模板保存、状态变更、变量和预览。' },
    ],
  },
  {
    key: 'business-asset',
    title: '业务资产配置',
    badge: 'BIZ',
    color: 'green',
    summary: '产品、行情、风险画像和数据质量',
    modules: [
      { title: '产品与行情配置', short: '产', badge: 'PRODUCT', tagColor: 'green', color: '#16a34a', path: '/config-center/products', description: '产品创建/更新/状态/删除、画像和行情写入。' },
      { title: '产品风险', short: '险', badge: 'RISK', tagColor: 'orange', color: '#f97316', path: '/product-risk', description: '产品池、风险画像、行情和 Mock 门禁上下文。' },
      { title: '数据质量', short: '质', badge: 'QUALITY', tagColor: 'blue', color: '#0ea5e9', path: '/data-quality', description: '数据源健康矩阵、缺口、低质量源和质量证据。' },
    ],
  },
  {
    key: 'governance',
    title: '权限与系统规范',
    badge: 'OPS',
    color: 'gold',
    summary: '用户权限、本人账户、开发铁律和 API 文档',
    modules: [
      { title: '用户管理', short: '用', badge: 'USER', tagColor: 'gold', color: '#ca8a04', path: '/users', description: '维护用户、状态、角色关系和基础信息。' },
      { title: '角色权限', short: '权', badge: 'ROLE', tagColor: 'orange', color: '#d97706', path: '/roles', description: '维护角色、权限矩阵和授权边界。' },
      { title: '本人账户', short: '我', badge: 'ME', tagColor: 'blue', color: '#2563eb', path: '/account', description: '查看当前账号、修改密码和个人偏好。' },
      { title: '系统规范', short: '规', badge: 'RULE', tagColor: 'default', color: '#64748b', path: '/development-rules', description: '开发铁律、UI 操作舱和 API 文档舱从这里进入。' },
    ],
  },
]

const metrics = computed(() => [
  { label: 'AI Skill', value: skillCount.value, hint: '治理资产' },
  { label: '模型绑定', value: bindingCount.value, hint: '场景调用' },
  { label: '治理证据', value: sourceCount.value, hint: '来源/质量样本' },
  { label: '任务定义', value: taskCount.value, hint: '独立页面' },
])

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [sources, tasks, prompts, models, skills, bindings] = await Promise.all([
      listDataSources({ page: 1, size: 1 }),
      listTaskDefinitions(),
      listAiPrompts({ page: 1, size: 1 }),
      listAiModels({ page: 1, size: 1 }),
      listAiSkills({ page: 1, size: 1 }),
      listAiModelSkillBindings({ page: 1, size: 1 }),
    ])
    sourceCount.value = sources.total
    taskCount.value = tasks.length
    promptCount.value = prompts.total
    modelCount.value = models.total
    skillCount.value = skills.total
    bindingCount.value = bindings.total
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '配置总览加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
