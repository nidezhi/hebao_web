<template>
  <BusinessPageShell
    title="Config Center 配置总览"
    description="配置中心已拆成独立页面：AI Skill、模型绑定、数据源发现、数据源、任务、产品行情、Prompt、模型和业务操作。这里做总览和分流，不再把所有配置堆在一个页面。"
    :endpoints="[endpoints.aiSkill.list, endpoints.aiModelSkill.list, endpoints.dataSource.discover, endpoints.dataSource.list, endpoints.task.definitions, endpoints.prompt.list, endpoints.aiModel.list]"
    :icon="ControlOutlined"
    status-text="CONFIG INDEX"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col v-for="module in modules" :key="module.path" :xs="24" :md="12" :xl="8">
          <a-card class="page-card config-module-card" :bordered="false" @click="router.push(module.path)">
            <a-space direction="vertical" :size="8">
              <a-tag :color="module.color">{{ module.badge }}</a-tag>
              <h3>{{ module.title }}</h3>
              <p>{{ module.description }}</p>
            </a-space>
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

const modules = [
  { title: 'AI Skill 工作台', badge: 'SKILL', color: 'purple', path: '/config-center/ai-skills', description: '维护 Skill 版本、指令、Schema、评估策略和生命周期。' },
  { title: '模型 Skill 绑定', badge: 'BINDING', color: 'geekblue', path: '/config-center/model-skills', description: '将模型实例绑定到 Skill 版本和数据源发现等业务场景。' },
  { title: 'AI 数据源发现', badge: 'DISCOVERY', color: 'cyan', path: '/config-center/data-source-discovery', description: '基于 Skill 发现候选源，人工审核后保存数据源或生成任务。' },
  { title: '数据源资产', badge: 'DATA', color: 'blue', path: '/config-center/data-sources', description: '已入库数据源、健康状态、质量快照和人工启停。' },
  { title: '任务配置', badge: 'TASK', color: 'cyan', path: '/config-center/tasks', description: '任务定义保存、手动触发和执行记录。' },
  { title: '产品与行情配置', badge: 'PRODUCT', color: 'green', path: '/config-center/products', description: '产品创建/更新/状态/删除、画像和行情写入。' },
  { title: 'Prompt 配置', badge: 'PROMPT', color: 'purple', path: '/config-center/prompts', description: 'Prompt 模板保存、状态变更、预览。' },
  { title: '模型配置', badge: 'MODEL', color: 'geekblue', path: '/config-center/models', description: 'AI 模型保存、状态变更和归档。' },
  { title: '业务操作管理', badge: 'ACTIONS', color: 'volcano', path: '/config-center/actions', description: '报告、Mock、回测、反馈等跨业务动作表单。' },
]

const metrics = computed(() => [
  { label: 'AI Skill', value: skillCount.value, hint: '治理资产' },
  { label: '模型绑定', value: bindingCount.value, hint: '场景调用' },
  { label: '数据源资产', value: sourceCount.value, hint: '独立页面' },
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
