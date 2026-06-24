<template>
  <BusinessPageShell
    title="Config Center 配置中心"
    description="汇总 AI 模型、Prompt、采集任务和数据源配置状态；配置能力服务投资闭环，而不是孤立后台 CRUD。"
    :endpoints="[endpoints.aiModel.list, endpoints.prompt.list, endpoints.task.definitions, endpoints.dataSource.list]"
    :icon="ControlOutlined"
    :status-text="errorMessage ? 'CONFIG WAITING' : 'CONFIG MATRIX'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="AI 模型配置">
            <a-table size="small" row-key="bizId" :data-source="models" :columns="modelColumns" :pagination="{ pageSize: 6 }">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="optionColor(aiModelStatusOptions, record.status)">
                    {{ optionLabel(aiModelStatusOptions, record.status) }}
                  </a-tag>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="任务与 Prompt 配置">
            <a-descriptions bordered size="small" :column="1">
              <a-descriptions-item label="采集任务">{{ taskCount }} 个定义</a-descriptions-item>
              <a-descriptions-item label="Prompt 版本">{{ promptCount }} 个版本</a-descriptions-item>
              <a-descriptions-item label="数据源">{{ sourceCount }} 个来源</a-descriptions-item>
              <a-descriptions-item label="配置原则">所有配置影响报告、Mock、回测与风控链路，变更必须可追踪。</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ControlOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listAiModels } from '@/entities/ai-model/api'
import type { AiModelDto } from '@/entities/ai-model/model'
import { aiModelStatusOptions } from '@/entities/ai-model/dictionary'
import { listAiPrompts } from '@/entities/prompt/api'
import { listTaskDefinitions } from '@/entities/task/api'
import { listDataSources } from '@/entities/data-source/api'
import { optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const models = ref<AiModelDto[]>([])
const promptCount = ref(0)
const taskCount = ref(0)
const sourceCount = ref(0)

const metrics = computed(() => [
  { label: 'AI 模型', value: models.value.length, hint: '模型注册' },
  { label: 'ACTIVE 模型', value: models.value.filter((item) => item.status === 'ACTIVE').length, hint: '默认候选' },
  { label: 'Prompt 版本', value: promptCount.value, hint: '模板治理' },
  { label: '采集任务', value: taskCount.value, hint: '调度配置' },
  { label: '数据源', value: sourceCount.value, hint: '来源治理' },
])

const modelColumns = [
  { title: '模型编码', dataIndex: 'modelCode', key: 'modelCode' },
  { title: '版本', dataIndex: 'modelVersion', key: 'modelVersion' },
  { title: '类型', dataIndex: 'modelType', key: 'modelType' },
  { title: '提供方', dataIndex: 'provider', key: 'provider' },
  { title: '状态', key: 'status' },
  { title: '更新时间', key: 'updatedAt', customRender: ({ record }: { record: AiModelDto }) => formatDateTime(record.updatedAt) },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [modelPage, promptPage, tasks, sourcePage] = await Promise.all([
      listAiModels({ page: 1, size: 30 }),
      listAiPrompts({ page: 1, size: 1 }),
      listTaskDefinitions(),
      listDataSources({ page: 1, size: 1 }),
    ])
    models.value = modelPage.items || []
    promptCount.value = promptPage.total || 0
    taskCount.value = tasks.length
    sourceCount.value = sourcePage.total || 0
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
