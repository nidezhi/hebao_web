<template>
  <a-space direction="vertical" :size="16" class="page-container">
    <a-card class="page-card" :bordered="false">
      <div class="toolbar">
        <div class="toolbar-filters">
          <a-select
            v-model:value="triggerForm.taskCode"
            placeholder="选择任务"
            style="width: 280px"
            :options="taskOptions"
          />
          <a-input v-model:value="triggerForm.parameters" placeholder="覆盖参数 JSON" style="width: 320px" />
        </div>
        <a-space wrap>
          <a-button @click="loadDefinitions">刷新配置</a-button>
          <a-button type="primary" :loading="triggering" @click="triggerTask">手动触发</a-button>
        </a-space>
      </div>

      <a-table
        row-key="code"
        size="small"
        :columns="definitionColumns"
        :data-source="definitions"
        :loading="definitionsLoading"
        :pagination="false"
        :scroll="{ x: 1000 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'enabled'">
            <a-tag :color="record.enabled ? 'success' : 'default'">
              {{ record.enabled ? '启用' : '停用' }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'parameters'">
            <pre class="json-value">{{ stringifyValue(record.parameters) }}</pre>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-card class="page-card" :bordered="false">
      <a-tabs v-model:active-key="activeTab" @change="handleTabChange">
        <a-tab-pane key="executions" tab="执行记录">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input v-model:value="executionQuery.taskCode" allow-clear placeholder="任务编码" style="width: 220px" />
              <a-input v-model:value="executionQuery.taskType" allow-clear placeholder="任务类型" style="width: 220px" />
              <a-select
                v-model:value="executionQuery.status"
                allow-clear
                placeholder="执行状态"
                style="width: 140px"
                :options="taskExecutionStatusOptions"
              />
              <a-button type="primary" ghost @click="searchExecutions">查询</a-button>
              <a-button @click="resetExecutions">重置</a-button>
            </div>
          </div>

          <a-table
            row-key="bizId"
            :columns="executionColumns"
            :data-source="executions"
            :loading="executionsLoading"
            :pagination="executionPagination"
            :scroll="{ x: 1200 }"
            @change="handleExecutionPage"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <a-tag :color="optionColor(taskExecutionStatusOptions, record.status)">
                  {{ optionLabel(taskExecutionStatusOptions, record.status) }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'startedAt'">
                {{ formatDateTime(record.startedAt) }}
              </template>
              <template v-else-if="column.key === 'completedAt'">
                {{ formatDateTime(record.completedAt) }}
              </template>
            </template>
          </a-table>
        </a-tab-pane>

        <a-tab-pane key="articles" tab="投资资讯">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input-search
                v-model:value="articleQuery.keyword"
                allow-clear
                placeholder="标题或摘要"
                style="width: 240px"
                @search="searchArticles"
              />
              <a-input v-model:value="articleQuery.articleType" allow-clear placeholder="类型" style="width: 120px" />
              <a-input v-model:value="articleQuery.sourceCode" allow-clear placeholder="来源" style="width: 150px" />
              <a-input v-model:value="articleQuery.languageCode" allow-clear placeholder="语言" style="width: 120px" />
              <a-button @click="resetArticles">重置</a-button>
            </div>
          </div>

          <a-table
            row-key="bizId"
            :columns="articleColumns"
            :data-source="articles"
            :loading="articlesLoading"
            :pagination="articlePagination"
            :scroll="{ x: 1200 }"
            @change="handleArticlePage"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'title'">
                <a :href="record.sourceUrl" target="_blank" rel="noreferrer">{{ record.title }}</a>
                <div class="muted summary">{{ record.summary || '-' }}</div>
              </template>
              <template v-else-if="column.key === 'publishTime'">
                {{ formatDateTime(record.publishTime) }}
              </template>
            </template>
          </a-table>
        </a-tab-pane>

        <a-tab-pane key="snapshots" tab="方向快照">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input v-model:value="snapshotQuery.taskCode" allow-clear placeholder="任务编码" style="width: 200px" />
              <a-select
                v-model:value="snapshotQuery.snapshotType"
                allow-clear
                placeholder="快照类型"
                style="width: 140px"
                :options="snapshotTypeOptions"
              />
              <a-input v-model:value="snapshotQuery.themeCode" allow-clear placeholder="主题编码" style="width: 140px" />
              <a-button type="primary" ghost @click="searchSnapshots">查询</a-button>
              <a-button @click="resetSnapshots">重置</a-button>
            </div>
          </div>

          <a-table
            row-key="bizId"
            :columns="snapshotColumns"
            :data-source="snapshots"
            :loading="snapshotsLoading"
            :pagination="snapshotPagination"
            :scroll="{ x: 1200 }"
            @change="handleSnapshotPage"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'snapshotType'">
                <a-tag :color="optionColor(snapshotTypeOptions, record.snapshotType)">
                  {{ optionLabel(snapshotTypeOptions, record.snapshotType) }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'returnRate'">
                {{ formatPercent(record.returnRate) }}
              </template>
              <template v-else-if="column.key === 'snapshotTime'">
                {{ formatDateTime(record.snapshotTime) }}
              </template>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import {
  getInvestmentTaskDefinitions,
  getInvestmentThemeSnapshots,
  getNewsArticles,
  getTaskExecutions,
  triggerInvestmentTask,
} from '@/api/investment'
import type {
  InvestmentTaskDefinition,
  InvestmentThemeSnapshot,
  NewsArticle,
  ScheduledTaskExecution,
} from '@/api/types'
import {
  optionColor,
  optionLabel,
  snapshotTypeOptions,
  taskExecutionStatusOptions,
} from '@/utils/options'

const activeTab = ref('executions')

const definitionColumns: TableColumnsType<InvestmentTaskDefinition> = [
  { title: '任务编码', dataIndex: 'code', fixed: 'left', width: 240 },
  { title: '任务类型', dataIndex: 'type', width: 240 },
  { title: 'Cron', dataIndex: 'cron', width: 180 },
  { title: '时区', dataIndex: 'zone', width: 160 },
  { title: '状态', key: 'enabled', width: 90 },
  { title: '参数', key: 'parameters' },
]
const definitionsLoading = ref(false)
const definitions = ref<InvestmentTaskDefinition[]>([])
const taskOptions = computed(() =>
  definitions.value.map((item) => ({ label: `${item.code} (${item.type})`, value: item.code })),
)
const triggerForm = reactive({
  taskCode: undefined as string | undefined,
  parameters: '{}',
})
const triggering = ref(false)

const executionColumns: TableColumnsType<ScheduledTaskExecution> = [
  { title: '任务编码', dataIndex: 'taskCode', fixed: 'left', width: 220 },
  { title: '类型', dataIndex: 'taskType', width: 220 },
  { title: '来源', dataIndex: 'triggerSource', width: 100 },
  { title: '状态', key: 'status', width: 100 },
  { title: '结果摘要', dataIndex: 'resultSummary', width: 220 },
  { title: '失败原因', dataIndex: 'failureReason', width: 220 },
  { title: '开始时间', key: 'startedAt', width: 180 },
  { title: '完成时间', key: 'completedAt', width: 180 },
]
const executionsLoading = ref(false)
const executions = ref<ScheduledTaskExecution[]>([])
const executionTotal = ref(0)
const executionQuery = reactive({
  taskCode: undefined as string | undefined,
  taskType: undefined as string | undefined,
  status: undefined as 'RUNNING' | 'SUCCEEDED' | 'FAILED' | undefined,
  page: 0,
  size: 10,
  sort: 'startedAt',
  direction: 'desc' as const,
})
const executionPagination = computed<TablePaginationConfig>(() => ({
  current: (executionQuery.page || 0) + 1,
  pageSize: executionQuery.size,
  total: executionTotal.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const articleColumns: TableColumnsType<NewsArticle> = [
  { title: '标题', key: 'title', fixed: 'left', width: 360 },
  { title: '类型', dataIndex: 'articleType', width: 100 },
  { title: '来源', dataIndex: 'sourceCode', width: 140 },
  { title: '语言', dataIndex: 'languageCode', width: 100 },
  { title: '发布时间', key: 'publishTime', width: 180 },
]
const articlesLoading = ref(false)
const articles = ref<NewsArticle[]>([])
const articleTotal = ref(0)
const articleQuery = reactive({
  keyword: undefined as string | undefined,
  articleType: undefined as string | undefined,
  sourceCode: undefined as string | undefined,
  languageCode: undefined as string | undefined,
  page: 0,
  size: 10,
  sort: 'publishTime',
  direction: 'desc' as const,
})
const articlePagination = computed<TablePaginationConfig>(() => ({
  current: (articleQuery.page || 0) + 1,
  pageSize: articleQuery.size,
  total: articleTotal.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const snapshotColumns: TableColumnsType<InvestmentThemeSnapshot> = [
  { title: '主题', dataIndex: 'themeName', fixed: 'left', width: 180 },
  { title: '主题编码', dataIndex: 'themeCode', width: 110 },
  { title: '类型', key: 'snapshotType', width: 100 },
  { title: '窗口分钟', dataIndex: 'windowMinutes', width: 100 },
  { title: '样本数', dataIndex: 'sampleCount', width: 90 },
  { title: '收益率', key: 'returnRate', width: 100 },
  { title: '动量', dataIndex: 'momentumScore', width: 100 },
  { title: '热度', dataIndex: 'heatScore', width: 100 },
  { title: '快照时间', key: 'snapshotTime', width: 180 },
  { title: '任务编码', dataIndex: 'taskCode', width: 200 },
]
const snapshotsLoading = ref(false)
const snapshots = ref<InvestmentThemeSnapshot[]>([])
const snapshotTotal = ref(0)
const snapshotQuery = reactive({
  taskCode: undefined as string | undefined,
  snapshotType: undefined as 'RETURN' | 'MOMENTUM' | 'HEAT' | undefined,
  themeCode: undefined as string | undefined,
  page: 0,
  size: 10,
  sort: 'snapshotTime',
  direction: 'desc' as const,
})
const snapshotPagination = computed<TablePaginationConfig>(() => ({
  current: (snapshotQuery.page || 0) + 1,
  pageSize: snapshotQuery.size,
  total: snapshotTotal.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const loadDefinitions = async () => {
  definitionsLoading.value = true
  try {
    definitions.value = await getInvestmentTaskDefinitions()
    if (!triggerForm.taskCode && definitions.value.length) {
      triggerForm.taskCode = definitions.value[0].code
    }
  } finally {
    definitionsLoading.value = false
  }
}

const triggerTask = async () => {
  if (!triggerForm.taskCode) {
    message.warning('请选择任务')
    return
  }
  let parameters: Record<string, unknown> = {}
  try {
    parameters = JSON.parse(triggerForm.parameters || '{}')
  } catch {
    message.error('覆盖参数不是合法 JSON')
    return
  }
  triggering.value = true
  try {
    const result = await triggerInvestmentTask({ taskCode: triggerForm.taskCode, parameters })
    message.success(`任务已触发：${result.eventId}`)
    loadExecutions()
  } finally {
    triggering.value = false
  }
}

const loadExecutions = async () => {
  executionsLoading.value = true
  try {
    const result = await getTaskExecutions(executionQuery)
    executions.value = result.items
    executionTotal.value = result.total
  } finally {
    executionsLoading.value = false
  }
}

const searchExecutions = () => {
  executionQuery.page = 0
  loadExecutions()
}

const resetExecutions = () => {
  Object.assign(executionQuery, {
    taskCode: undefined,
    taskType: undefined,
    status: undefined,
    page: 0,
  })
  loadExecutions()
}

const handleExecutionPage = (page: TablePaginationConfig) => {
  executionQuery.page = (page.current || 1) - 1
  executionQuery.size = page.pageSize || 10
  loadExecutions()
}

const loadArticles = async () => {
  articlesLoading.value = true
  try {
    const result = await getNewsArticles(articleQuery)
    articles.value = result.items
    articleTotal.value = result.total
  } finally {
    articlesLoading.value = false
  }
}

const searchArticles = () => {
  articleQuery.page = 0
  loadArticles()
}

const resetArticles = () => {
  Object.assign(articleQuery, {
    keyword: undefined,
    articleType: undefined,
    sourceCode: undefined,
    languageCode: undefined,
    page: 0,
  })
  loadArticles()
}

const handleArticlePage = (page: TablePaginationConfig) => {
  articleQuery.page = (page.current || 1) - 1
  articleQuery.size = page.pageSize || 10
  loadArticles()
}

const loadSnapshots = async () => {
  snapshotsLoading.value = true
  try {
    const result = await getInvestmentThemeSnapshots(snapshotQuery)
    snapshots.value = result.items
    snapshotTotal.value = result.total
  } finally {
    snapshotsLoading.value = false
  }
}

const searchSnapshots = () => {
  snapshotQuery.page = 0
  loadSnapshots()
}

const resetSnapshots = () => {
  Object.assign(snapshotQuery, {
    taskCode: undefined,
    snapshotType: undefined,
    themeCode: undefined,
    page: 0,
  })
  loadSnapshots()
}

const handleSnapshotPage = (page: TablePaginationConfig) => {
  snapshotQuery.page = (page.current || 1) - 1
  snapshotQuery.size = page.pageSize || 10
  loadSnapshots()
}

const handleTabChange = (key: string) => {
  if (key === 'executions' && !executions.value.length) loadExecutions()
  if (key === 'articles' && !articles.value.length) loadArticles()
  if (key === 'snapshots' && !snapshots.value.length) loadSnapshots()
}

const stringifyValue = (value: unknown) => JSON.stringify(value ?? {}, null, 2)
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'

onMounted(() => {
  loadDefinitions()
  loadExecutions()
})
</script>

<style scoped>
.page-container {
  width: 100%;
}

.json-value {
  max-width: 420px;
  max-height: 96px;
  margin: 0;
  overflow: auto;
  white-space: pre-wrap;
}

.summary {
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
