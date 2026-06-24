<template>
  <BusinessPageShell
    title="Data Ingestion 采集编排"
    description="展示 L1/L2 专用采集任务、Cron、启用状态、执行结果与失败原因；手动触发必须带可追踪上下文。"
    :endpoints="[endpoints.task.definitions, endpoints.task.executions, endpoints.task.trigger]"
    :icon="ThunderboltOutlined"
    :status-text="errorMessage ? 'SCHEDULER WAITING' : 'TASK LINK'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="11">
          <a-card class="cockpit-card" :bordered="false" title="任务定义">
            <a-table
              row-key="code"
              size="small"
              :data-source="definitions"
              :columns="definitionColumns"
              :pagination="{ pageSize: 6 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled ? 'success' : 'default'">
                    {{ record.enabled ? '启用' : '停用' }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'parameters'">
                  <a-tag color="cyan">{{ Object.keys(record.parameters || {}).length }} 参数</a-tag>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="13">
          <a-card class="cockpit-card" :bordered="false" title="执行记录">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="executions"
              :columns="executionColumns"
              :pagination="{ pageSize: 6 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="statusColor(record.status)">
                    {{ record.status }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'summary'">
                  {{ record.resultSummary || record.failureReason || '-' }}
                </template>
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
import { ThunderboltOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listTaskDefinitions, listTaskExecutions } from '@/entities/task/api'
import type { InvestmentTaskDefinitionDto, ScheduledTaskExecutionDto } from '@/entities/task/model'
import { summarizeExecutions } from '@/entities/task/adapter'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const definitions = ref<InvestmentTaskDefinitionDto[]>([])
const executions = ref<ScheduledTaskExecutionDto[]>([])

const executionSummary = computed(() => summarizeExecutions(executions.value))
const metrics = computed(() => [
  { label: '任务定义', value: definitions.value.length, hint: 'YAML / 环境配置' },
  { label: '运行中', value: executionSummary.value.running, hint: 'RUNNING' },
  { label: '成功执行', value: executionSummary.value.succeeded, hint: '最近记录' },
  { label: '失败执行', value: executionSummary.value.failed, hint: '需复核原因' },
])

const definitionColumns = [
  { title: '任务编码', dataIndex: 'code', key: 'code' },
  { title: '类型', dataIndex: 'type', key: 'type' },
  { title: 'Cron', dataIndex: 'cron', key: 'cron' },
  { title: '启用', key: 'enabled' },
  { title: '参数', key: 'parameters' },
]

const executionColumns = [
  { title: '任务', dataIndex: 'taskCode', key: 'taskCode' },
  { title: '状态', key: 'status' },
  { title: '触发', dataIndex: 'triggerSource', key: 'triggerSource' },
  { title: '开始时间', key: 'startedAt', customRender: ({ record }: { record: ScheduledTaskExecutionDto }) => formatDateTime(record.startedAt) },
  { title: '结果摘要', key: 'summary' },
]

const statusColor = (status?: string) => {
  if (status === 'SUCCEEDED') return 'success'
  if (status === 'FAILED') return 'error'
  if (status === 'RUNNING') return 'processing'
  return 'default'
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [definitionItems, executionPage] = await Promise.all([
      listTaskDefinitions(),
      listTaskExecutions({ page: 1, size: 30 }),
    ])
    definitions.value = definitionItems || []
    executions.value = executionPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
