<template>
  <a-space direction="vertical" :size="16" class="page-container">
    <a-card v-if="activeSection === 'tasks'" class="page-card" :bordered="false">
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
          <a-button @click="openDefinitionModal()">新增配置</a-button>
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
          <template v-else-if="column.key === 'actions'">
            <a-button type="link" size="small" @click="openDefinitionModal(record)">编辑</a-button>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-card v-if="activeSection !== 'tasks'" class="page-card section-card" :bordered="false">
      <a-tabs :active-key="activeSection" class="section-tabs">
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
              <template v-else-if="column.key === 'actions'">
                <a-button type="link" size="small" @click="openArticleRelations(record)">证据</a-button>
              </template>
            </template>
          </a-table>
        </a-tab-pane>

        <a-tab-pane key="relations" tab="关联证据">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input
                v-model:value="relationQuery.articleBizId"
                allow-clear
                placeholder="资讯业务 ID"
                style="width: 180px"
              />
              <a-input v-model:value="relationQuery.themeCode" allow-clear placeholder="主题编码" style="width: 150px" />
              <a-input
                v-model:value="relationQuery.productCode"
                allow-clear
                placeholder="产品代码"
                style="width: 130px"
              />
              <a-select
                v-model:value="relationQuery.relationType"
                allow-clear
                placeholder="关联类型"
                style="width: 150px"
                :options="relationTypeOptions"
              />
              <a-button type="primary" ghost @click="searchRelations">查询</a-button>
              <a-button @click="resetRelations">重置</a-button>
            </div>
          </div>

          <a-table
            row-key="bizId"
            :columns="relationColumns"
            :data-source="relations"
            :loading="relationsLoading"
            :pagination="relationPagination"
            :scroll="{ x: 1300 }"
            @change="handleRelationPage"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'theme'">
                <span>{{ record.themeName || record.themeCode }}</span>
                <div class="muted summary">{{ record.themeCode }}</div>
              </template>
              <template v-else-if="column.key === 'relationType'">
                <a-tag>{{ relationTypeLabel(record.relationType) }}</a-tag>
              </template>
              <template v-else-if="column.key === 'matchedKeywords'">
                <a-space wrap>
                  <a-tag v-for="keyword in record.matchedKeywords || []" :key="keyword" color="blue">
                    {{ keyword }}
                  </a-tag>
                  <span v-if="!record.matchedKeywords?.length">-</span>
                </a-space>
              </template>
              <template v-else-if="column.key === 'score'">
                <div>关联 {{ formatNumber(record.relationScore) }}</div>
                <div class="muted">来源 {{ formatNumber(record.sourceQualityScore) }}</div>
              </template>
              <template v-else-if="column.key === 'createdAt'">
                {{ formatDateTime(record.createdAt) }}
              </template>
            </template>
          </a-table>
        </a-tab-pane>

        <a-tab-pane key="snapshots" tab="方向快照">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input v-model:value="snapshotQuery.taskCode" allow-clear placeholder="任务编码" style="width: 200px" />
              <a-input
                v-model:value="snapshotQuery.marketScope"
                allow-clear
                placeholder="市场范围"
                style="width: 140px"
              />
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
              <template v-else-if="column.key === 'quality'">
                <a-tag :color="qualityColor(snapshotMetrics(record).qualityLevel)">
                  {{ snapshotMetrics(record).qualityLevel || '-' }}
                </a-tag>
                <div class="muted">
                  覆盖 {{ formatPercent(snapshotMetrics(record).coverageRate) }}
                </div>
              </template>
              <template v-else-if="column.key === 'metrics'">
                <a-button type="link" size="small" @click="openSnapshotMetrics(record)">展开</a-button>
              </template>
              <template v-else-if="column.key === 'snapshotTime'">
                {{ formatDateTime(record.snapshotTime) }}
              </template>
            </template>
          </a-table>
        </a-tab-pane>

        <a-tab-pane key="analysis" tab="分析报告">
          <div class="toolbar">
            <div class="toolbar-filters">
              <a-input
                v-model:value="analysisQuery.marketScope"
                allow-clear
                placeholder="市场范围"
                style="width: 140px"
              />
              <a-input v-model:value="analysisQuery.themeCode" allow-clear placeholder="主题编码" style="width: 140px" />
              <a-input
                v-model:value="analysisQuery.providerCode"
                allow-clear
                placeholder="提供方"
                style="width: 140px"
              />
              <a-select
                v-model:value="analysisQuery.status"
                allow-clear
                placeholder="状态"
                style="width: 120px"
                :options="analysisStatusOptions"
              />
              <a-button type="primary" ghost @click="searchReports">查询</a-button>
              <a-button @click="resetReports">重置</a-button>
            </div>
            <a-button type="primary" @click="openAnalysisModal">生成报告</a-button>
          </div>

          <a-table
            row-key="bizId"
            :columns="analysisColumns"
            :data-source="reports"
            :loading="reportsLoading"
            :pagination="analysisPagination"
            :scroll="{ x: 1500 }"
            @change="handleReportPage"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'theme'">
                <span>{{ record.themeName || record.themeCode || '全部主题' }}</span>
                <div class="muted summary">{{ record.themeCode || '-' }}</div>
              </template>
              <template v-else-if="column.key === 'status'">
                <a-tag :color="optionColor(analysisStatusOptions, record.status)">
                  {{ optionLabel(analysisStatusOptions, record.status) }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'generatedAt'">
                {{ formatDateTime(record.generatedAt) }}
              </template>
              <template v-else-if="column.key === 'actions'">
                <a-button type="link" size="small" @click="openReportDrawer(record)">查看</a-button>
              </template>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </a-card>

    <a-modal
      v-model:open="definitionModalOpen"
      title="保存任务配置"
      :confirm-loading="savingDefinition"
      @ok="saveDefinition"
    >
      <a-form layout="vertical">
        <a-form-item label="任务编码" required>
          <a-input v-model:value="definitionForm.code" />
        </a-form-item>
        <a-form-item label="任务类型" required>
          <a-input v-model:value="definitionForm.type" />
        </a-form-item>
        <a-form-item label="Cron" required>
          <a-input v-model:value="definitionForm.cron" />
        </a-form-item>
        <a-form-item label="时区" required>
          <a-input v-model:value="definitionForm.zone" />
        </a-form-item>
        <a-form-item label="状态">
          <a-switch v-model:checked="definitionForm.enabled" checked-children="启用" un-checked-children="停用" />
        </a-form-item>
        <a-form-item label="说明">
          <a-textarea v-model:value="definitionForm.description" :rows="2" />
        </a-form-item>
        <a-form-item label="参数 JSON">
          <a-textarea v-model:value="definitionForm.parameters" :rows="6" />
        </a-form-item>
      </a-form>
    </a-modal>

    <a-modal
      v-model:open="analysisModalOpen"
      title="生成投资分析报告"
      :confirm-loading="generatingReport"
      @ok="generateReport"
    >
      <a-form layout="vertical">
        <a-form-item label="提供方">
          <a-input v-model:value="analysisForm.providerCode" placeholder="LOCAL_RULE" />
        </a-form-item>
        <a-form-item label="模型">
          <a-input v-model:value="analysisForm.modelCode" placeholder="local-rule-v1" />
        </a-form-item>
        <a-form-item label="市场范围">
          <a-input v-model:value="analysisForm.marketScope" placeholder="CN_MAINLAND" />
        </a-form-item>
        <a-form-item label="主题编码">
          <a-input v-model:value="analysisForm.themeCode" allow-clear placeholder="留空分析全部主题" />
        </a-form-item>
        <a-form-item label="回看天数">
          <a-input-number v-model:value="analysisForm.lookbackDays" :min="1" :max="365" style="width: 100%" />
        </a-form-item>
        <a-form-item label="初始资金">
          <a-input-number
            v-model:value="analysisForm.initialCapital"
            :min="0"
            :precision="2"
            style="width: 100%"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <a-drawer
      v-model:open="reportDrawerOpen"
      title="分析报告详情"
      width="min(1040px, 94vw)"
      :body-style="{ paddingBottom: '32px' }"
    >
      <investment-report-detail v-if="selectedReport" :report="selectedReport" />
    </a-drawer>

    <a-drawer
      v-model:open="snapshotDrawerOpen"
      title="快照指标展开"
      width="min(760px, 94vw)"
      :body-style="{ paddingBottom: '32px' }"
    >
      <a-descriptions v-if="selectedSnapshot" bordered size="small" :column="1">
        <a-descriptions-item label="主题">
          {{ selectedSnapshot.themeName || selectedSnapshot.themeCode }}
        </a-descriptions-item>
        <a-descriptions-item label="类型">
          {{ optionLabel(snapshotTypeOptions, selectedSnapshot.snapshotType) }}
        </a-descriptions-item>
        <a-descriptions-item label="质量等级">
          {{ selectedSnapshotMetrics.qualityLevel || '-' }}
        </a-descriptions-item>
        <a-descriptions-item label="质量分">
          {{ formatNumber(selectedSnapshotMetrics.qualityScore ?? selectedSnapshotMetrics.dataQualityScore) }}
        </a-descriptions-item>
        <a-descriptions-item label="样本覆盖">
          {{ formatPercent(selectedSnapshotMetrics.coverageRate) }}
        </a-descriptions-item>
        <a-descriptions-item label="上涨广度">
          {{ formatPercent(selectedSnapshotMetrics.positiveBreadth) }}
        </a-descriptions-item>
        <a-descriptions-item label="来源数">
          {{ selectedSnapshotMetrics.uniqueSourceCount ?? '-' }}
        </a-descriptions-item>
      </a-descriptions>

      <div v-if="selectedSnapshotMetrics.keywords?.length" class="drawer-block">
        <h3>命中关键词</h3>
        <a-space wrap>
          <a-tag v-for="keyword in selectedSnapshotMetrics.keywords" :key="keyword" color="blue">
            {{ keyword }}
          </a-tag>
        </a-space>
      </div>

      <div v-if="selectedSnapshotMetrics.sampleArticles?.length" class="drawer-block">
        <h3>热度来源</h3>
        <a-list :data-source="selectedSnapshotMetrics.sampleArticles" item-layout="vertical">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta>
                <template #title>{{ item.title }}</template>
                <template #description>
                  {{ item.sourceCode || '未知来源' }} · {{ formatDateTime(item.publishTime) }}
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>

      <div v-if="selectedSnapshotMetrics.performances?.length" class="drawer-block">
        <h3>产品表现</h3>
        <a-table
          row-key="productCode"
          size="small"
          :columns="performanceColumns"
          :data-source="selectedSnapshotMetrics.performances"
          :pagination="false"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'returnRate'">
              {{ formatPercent(record.returnRate) }}
            </template>
          </template>
        </a-table>
      </div>

      <a-collapse class="drawer-block">
        <a-collapse-panel key="raw" header="原始 metrics">
          <pre class="json-value metrics-json">{{ stringifyValue(selectedSnapshotMetrics) }}</pre>
        </a-collapse-panel>
      </a-collapse>
    </a-drawer>
  </a-space>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import {
  generateInvestmentAnalysis,
  getArticleRelations,
  getInvestmentAnalysisReports,
  getInvestmentTaskDefinitions,
  getInvestmentThemeSnapshots,
  getNewsArticles,
  getTaskExecutions,
  saveInvestmentTaskDefinition,
  triggerInvestmentTask,
} from '@/api/investment'
import type {
  ArticleRelation,
  ArticleRelationType,
  InvestmentAnalysisReport,
  InvestmentTaskDefinition,
  InvestmentThemeSnapshot,
  NewsArticle,
  ScheduledTaskExecution,
  SnapshotType,
} from '@/api/types'
import {
  optionColor,
  optionLabel,
  snapshotTypeOptions,
  taskExecutionStatusOptions,
} from '@/utils/options'
import InvestmentReportDetail from './InvestmentReportDetail.vue'

const route = useRoute()
const router = useRouter()
const activeSection = computed(
  () =>
    String(route.meta.investmentSection || 'tasks') as
      | 'tasks'
      | 'executions'
      | 'articles'
      | 'relations'
      | 'snapshots'
      | 'analysis',
)

const analysisStatusOptions = [
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
] as const
const relationTypeOptions = [
  { label: '关键词匹配', value: 'KEYWORD_MATCH' },
  { label: '人工维护', value: 'MANUAL' },
  { label: '模型抽取', value: 'MODEL_EXTRACTED' },
] as const

const definitionColumns: TableColumnsType<InvestmentTaskDefinition> = [
  { title: '任务编码', dataIndex: 'code', fixed: 'left', width: 240 },
  { title: '任务类型', dataIndex: 'type', width: 240 },
  { title: 'Cron', dataIndex: 'cron', width: 180 },
  { title: '时区', dataIndex: 'zone', width: 160 },
  { title: '状态', key: 'enabled', width: 90 },
  { title: '说明', dataIndex: 'description', width: 220 },
  { title: '参数', key: 'parameters', width: 320 },
  { title: '操作', key: 'actions', fixed: 'right', width: 90 },
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
const definitionModalOpen = ref(false)
const savingDefinition = ref(false)
const definitionForm = reactive({
  code: '',
  type: '',
  cron: '',
  zone: 'Asia/Shanghai',
  enabled: true,
  description: '',
  parameters: '{}',
})

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
  { title: '操作', key: 'actions', fixed: 'right', width: 90 },
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

const relationColumns: TableColumnsType<ArticleRelation> = [
  { title: '资讯 ID', dataIndex: 'articleBizId', fixed: 'left', width: 180 },
  { title: '主题', key: 'theme', width: 180 },
  { title: '产品代码', dataIndex: 'productCode', width: 110 },
  { title: '关联类型', key: 'relationType', width: 120 },
  { title: '命中关键词', key: 'matchedKeywords', width: 260 },
  { title: '分数', key: 'score', width: 130 },
  { title: '证据摘要', dataIndex: 'evidence', width: 300 },
  { title: '生成时间', key: 'createdAt', width: 180 },
]
const relationsLoading = ref(false)
const relations = ref<ArticleRelation[]>([])
const relationTotal = ref(0)
const relationQuery = reactive({
  articleBizId: undefined as string | undefined,
  themeCode: undefined as string | undefined,
  productCode: undefined as string | undefined,
  relationType: undefined as ArticleRelationType | undefined,
  page: 0,
  size: 10,
  sort: 'relationScore',
  direction: 'desc' as const,
})
const relationPagination = computed<TablePaginationConfig>(() => ({
  current: (relationQuery.page || 0) + 1,
  pageSize: relationQuery.size,
  total: relationTotal.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

interface SnapshotMetrics {
  requestedProductCount?: number
  validReturnCount?: number
  positiveCount?: number
  positiveBreadth?: number
  coverageRate?: number
  volatility?: number
  topContribution?: number
  qualityScore?: number
  dataQualityScore?: number
  qualityLevel?: string
  themeName?: string
  keywords?: string[]
  articleCount?: number
  uniqueSourceCount?: number
  averageSourceQuality?: number
  heatScore?: number
  sampleArticles?: Array<{
    articleBizId?: string
    title: string
    sourceCode?: string
    publishTime?: string
  }>
  performances?: Array<{
    productBizId?: string
    productCode: string
    startPrice?: number
    endPrice?: number
    returnRate?: number
  }>
}

const snapshotColumns: TableColumnsType<InvestmentThemeSnapshot> = [
  { title: '主题', dataIndex: 'themeName', fixed: 'left', width: 180 },
  { title: '主题编码', dataIndex: 'themeCode', width: 110 },
  { title: '市场', dataIndex: 'marketScope', width: 120 },
  { title: '类型', key: 'snapshotType', width: 100 },
  { title: '窗口分钟', dataIndex: 'windowMinutes', width: 100 },
  { title: '样本数', dataIndex: 'sampleCount', width: 90 },
  { title: '收益率', key: 'returnRate', width: 100 },
  { title: '动量', dataIndex: 'momentumScore', width: 100 },
  { title: '热度', dataIndex: 'heatScore', width: 100 },
  { title: '质量/覆盖', key: 'quality', width: 130 },
  { title: '快照时间', key: 'snapshotTime', width: 180 },
  { title: '任务编码', dataIndex: 'taskCode', width: 200 },
  { title: '指标', key: 'metrics', fixed: 'right', width: 90 },
]
const snapshotsLoading = ref(false)
const snapshots = ref<InvestmentThemeSnapshot[]>([])
const snapshotTotal = ref(0)
const snapshotQuery = reactive({
  taskCode: undefined as string | undefined,
  snapshotType: undefined as SnapshotType | undefined,
  themeCode: undefined as string | undefined,
  marketScope: 'CN_MAINLAND' as string | undefined,
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
const snapshotDrawerOpen = ref(false)
const selectedSnapshot = ref<InvestmentThemeSnapshot>()
const selectedSnapshotMetrics = computed<SnapshotMetrics>(() =>
  selectedSnapshot.value ? snapshotMetrics(selectedSnapshot.value) : {},
)
const performanceColumns: TableColumnsType<NonNullable<SnapshotMetrics['performances']>[number]> = [
  { title: '产品代码', dataIndex: 'productCode' },
  { title: '开始价', dataIndex: 'startPrice' },
  { title: '结束价', dataIndex: 'endPrice' },
  { title: '收益率', key: 'returnRate' },
]

const analysisColumns: TableColumnsType<InvestmentAnalysisReport> = [
  { title: '主题', key: 'theme', fixed: 'left', width: 220 },
  { title: '市场', dataIndex: 'marketScope', width: 120 },
  { title: '提供方', dataIndex: 'providerCode', width: 130 },
  { title: '模型', dataIndex: 'modelCode', width: 160 },
  { title: '状态', key: 'status', width: 100 },
  { title: '失败原因', dataIndex: 'failureReason', width: 220 },
  { title: '生成时间', key: 'generatedAt', width: 180 },
  { title: '操作', key: 'actions', fixed: 'right', width: 90 },
]
const reportsLoading = ref(false)
const reports = ref<InvestmentAnalysisReport[]>([])
const reportTotal = ref(0)
const analysisQuery = reactive({
  marketScope: 'CN_MAINLAND' as string | undefined,
  themeCode: undefined as string | undefined,
  providerCode: undefined as string | undefined,
  status: undefined as 'SUCCEEDED' | 'FAILED' | undefined,
  page: 0,
  size: 10,
  sort: 'generatedAt',
  direction: 'desc' as const,
})
const analysisPagination = computed<TablePaginationConfig>(() => ({
  current: (analysisQuery.page || 0) + 1,
  pageSize: analysisQuery.size,
  total: reportTotal.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))
const analysisModalOpen = ref(false)
const generatingReport = ref(false)
const analysisForm = reactive({
  providerCode: 'LOCAL_RULE',
  modelCode: 'local-rule-v1',
  marketScope: 'CN_MAINLAND',
  themeCode: undefined as string | undefined,
  lookbackDays: 30,
  initialCapital: 100000,
})
const reportDrawerOpen = ref(false)
const selectedReport = ref<InvestmentAnalysisReport>()

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

const openDefinitionModal = (record?: InvestmentTaskDefinition) => {
  Object.assign(definitionForm, {
    code: record?.code || '',
    type: record?.type || '',
    cron: record?.cron || '',
    zone: record?.zone || 'Asia/Shanghai',
    enabled: record?.enabled ?? true,
    description: record?.description || '',
    parameters: stringifyValue(record?.parameters || {}),
  })
  definitionModalOpen.value = true
}

const saveDefinition = async () => {
  if (!definitionForm.code || !definitionForm.type || !definitionForm.cron || !definitionForm.zone) {
    message.warning('请填写任务编码、类型、Cron 和时区')
    return
  }
  let parameters: Record<string, unknown> = {}
  try {
    parameters = JSON.parse(definitionForm.parameters || '{}')
  } catch {
    message.error('参数不是合法 JSON')
    return
  }
  savingDefinition.value = true
  try {
    const saved = await saveInvestmentTaskDefinition({
      code: definitionForm.code,
      type: definitionForm.type,
      cron: definitionForm.cron,
      zone: definitionForm.zone,
      enabled: definitionForm.enabled,
      description: definitionForm.description,
      parameters,
    })
    message.success('任务配置已保存')
    definitionModalOpen.value = false
    const index = definitions.value.findIndex((item) => item.code === saved.code)
    if (index >= 0) {
      definitions.value[index] = saved
    } else {
      definitions.value.unshift(saved)
    }
  } finally {
    savingDefinition.value = false
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

const loadRelations = async () => {
  relationsLoading.value = true
  try {
    const result = await getArticleRelations(relationQuery)
    relations.value = result.items
    relationTotal.value = result.total
  } finally {
    relationsLoading.value = false
  }
}

const searchRelations = () => {
  relationQuery.page = 0
  loadRelations()
}

const resetRelations = () => {
  Object.assign(relationQuery, {
    articleBizId: undefined,
    themeCode: undefined,
    productCode: undefined,
    relationType: undefined,
    page: 0,
  })
  loadRelations()
}

const handleRelationPage = (page: TablePaginationConfig) => {
  relationQuery.page = (page.current || 1) - 1
  relationQuery.size = page.pageSize || 10
  loadRelations()
}

const openArticleRelations = (record: NewsArticle) => {
  Object.assign(relationQuery, {
    articleBizId: record.bizId,
    themeCode: undefined,
    productCode: undefined,
    relationType: undefined,
    page: 0,
  })
  router.push('/investment/relations')
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
    marketScope: 'CN_MAINLAND',
    page: 0,
  })
  loadSnapshots()
}

const handleSnapshotPage = (page: TablePaginationConfig) => {
  snapshotQuery.page = (page.current || 1) - 1
  snapshotQuery.size = page.pageSize || 10
  loadSnapshots()
}

const openSnapshotMetrics = (record: InvestmentThemeSnapshot) => {
  selectedSnapshot.value = record
  snapshotDrawerOpen.value = true
}

const loadReports = async () => {
  reportsLoading.value = true
  try {
    const result = await getInvestmentAnalysisReports(analysisQuery)
    reports.value = result.items
    reportTotal.value = result.total
  } finally {
    reportsLoading.value = false
  }
}

const searchReports = () => {
  analysisQuery.page = 0
  loadReports()
}

const resetReports = () => {
  Object.assign(analysisQuery, {
    marketScope: 'CN_MAINLAND',
    themeCode: undefined,
    providerCode: undefined,
    status: undefined,
    page: 0,
  })
  loadReports()
}

const handleReportPage = (page: TablePaginationConfig) => {
  analysisQuery.page = (page.current || 1) - 1
  analysisQuery.size = page.pageSize || 10
  loadReports()
}

const openAnalysisModal = () => {
  Object.assign(analysisForm, {
    providerCode: 'LOCAL_RULE',
    modelCode: 'local-rule-v1',
    marketScope: analysisQuery.marketScope || 'CN_MAINLAND',
    themeCode: analysisQuery.themeCode,
    lookbackDays: 30,
    initialCapital: 100000,
  })
  analysisModalOpen.value = true
}

const generateReport = async () => {
  generatingReport.value = true
  try {
    const report = await generateInvestmentAnalysis({
      providerCode: analysisForm.providerCode,
      modelCode: analysisForm.modelCode,
      marketScope: analysisForm.marketScope,
      themeCode: analysisForm.themeCode,
      lookbackDays: analysisForm.lookbackDays,
      initialCapital: analysisForm.initialCapital,
    })
    message.success('分析报告已生成')
    analysisModalOpen.value = false
    selectedReport.value = report
    reportDrawerOpen.value = true
    loadReports()
  } finally {
    generatingReport.value = false
  }
}

const openReportDrawer = (record: InvestmentAnalysisReport) => {
  selectedReport.value = record
  reportDrawerOpen.value = true
}

const loadActiveSection = () => {
  if (activeSection.value === 'tasks') loadDefinitions()
  if (activeSection.value === 'executions') loadExecutions()
  if (activeSection.value === 'articles') loadArticles()
  if (activeSection.value === 'relations') loadRelations()
  if (activeSection.value === 'snapshots') loadSnapshots()
  if (activeSection.value === 'analysis') loadReports()
}

const stringifyValue = (value: unknown) => JSON.stringify(value ?? {}, null, 2)
const parseJson = <T,>(value: string | undefined, fallback: T): T => {
  if (!value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}
const snapshotMetrics = (record: InvestmentThemeSnapshot) =>
  parseJson<SnapshotMetrics>(record.metrics, {})
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatNumber = (value?: number) =>
  typeof value === 'number' ? Number(value.toFixed(4)).toString() : '-'
const relationTypeLabel = (value?: string) => optionLabel(relationTypeOptions, value)
const qualityColor = (value?: string) => {
  if (value === 'HIGH') return 'success'
  if (value === 'MEDIUM') return 'warning'
  if (value === 'LOW') return 'error'
  return 'default'
}

onMounted(() => {
  loadActiveSection()
})

watch(activeSection, loadActiveSection)
</script>

<style scoped>
.page-container {
  width: 100%;
}

.section-card :deep(.ant-tabs-nav) {
  display: none;
}

.section-card :deep(.ant-tabs-content-holder) {
  padding-top: 0;
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

.drawer-block {
  margin-top: 20px;
}

.drawer-block h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.metrics-json {
  max-width: none;
  max-height: 320px;
}
</style>
