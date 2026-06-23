<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-alert
      show-icon
      type="warning"
      message="报告页必须显式展示数据质量门禁。门禁未通过或 confidenceLevel=UNUSABLE 时，不展示 Mock 交易与配置建议入口。"
    />

    <a-card class="page-card" :bordered="false">
      <div class="toolbar">
        <div class="toolbar-filters">
          <a-input v-model:value="query.marketScope" allow-clear placeholder="市场范围" style="width: 150px" />
          <a-input v-model:value="query.themeCode" allow-clear placeholder="主题编码" style="width: 150px" />
          <a-select
            v-model:value="query.status"
            allow-clear
            placeholder="报告状态"
            style="width: 140px"
            :options="statusOptions"
          />
          <a-button @click="fetchReports">查询</a-button>
        </div>
        <a-button type="primary" @click="generateVisible = true">生成报告</a-button>
      </div>

      <a-table
        row-key="bizId"
        :columns="columns"
        :data-source="reports"
        :loading="loading"
        :pagination="pagination"
        :scroll="{ x: 1100 }"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'theme'">
            <a-button type="link" class="link-stack" @click="openDetail(record)">
              <strong>{{ record.themeName || record.themeCode || '全市场' }}</strong>
              <span>{{ record.marketScope || record.requestId }}</span>
            </a-button>
          </template>
          <template v-else-if="column.key === 'gate'">
            <a-tag :color="gateColor(record)">
              {{ gateLabel(record) }}
            </a-tag>
            <span>{{ formatPercent(record.qualityScore) }}</span>
          </template>
          <template v-else-if="column.key === 'actions'">
            <a-space>
              <a-tooltip :title="gatePassed(record) ? '可进入 Mock 或 Prompt 动作' : '质量门禁未通过'">
                <a-button size="small" :disabled="!gatePassed(record)">转动作</a-button>
              </a-tooltip>
              <a-button size="small" @click="openDetail(record)">解释</a-button>
            </a-space>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-drawer v-model:open="detailVisible" title="报告详情" width="840">
      <template v-if="currentReport">
        <a-alert
          show-icon
          :type="gatePassed(currentReport) ? 'success' : 'warning'"
          class="detail-alert"
          :message="gatePassed(currentReport) ? '数据质量门禁通过，可进入后续模拟与复盘链路' : gateMessage(currentReport)"
        />
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="主题">{{ currentReport.themeName || currentReport.themeCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="市场">{{ currentReport.marketScope || '-' }}</a-descriptions-item>
          <a-descriptions-item label="模型">{{ currentReport.providerCode }} / {{ currentReport.modelCode }}</a-descriptions-item>
          <a-descriptions-item label="可信等级">{{ currentReport.confidenceLevel || '-' }}</a-descriptions-item>
          <a-descriptions-item label="生成时间">{{ formatDateTime(currentReport.generatedAt) }}</a-descriptions-item>
          <a-descriptions-item label="质量分">{{ formatPercent(currentReport.qualityScore) }}</a-descriptions-item>
        </a-descriptions>

        <a-divider orientation="left">趋势与计划</a-divider>
        <a-typography-paragraph>{{ currentReport.trend || '暂无趋势解释' }}</a-typography-paragraph>
        <a-typography-paragraph v-if="gatePassed(currentReport)">
          {{ currentReport.investmentPlan || '暂无投资计划' }}
        </a-typography-paragraph>
        <a-empty v-else description="低质量或不可用报告只展示数据缺口，不展示配置金额和 Mock 入口" />

        <a-divider orientation="left">证据与风险提示</a-divider>
        <a-typography-paragraph>{{ currentReport.investmentSummary || currentReport.failureReason || '-' }}</a-typography-paragraph>
        <a-alert show-icon type="info" message="模拟收益仅用于 Mock 环境复盘，不代表真实收益承诺。" />
      </template>
    </a-drawer>

    <a-modal
      v-model:open="generateVisible"
      title="生成投资报告"
      :confirm-loading="generating"
      @ok="submitGenerate"
    >
      <a-form layout="vertical" :model="generateForm">
        <a-form-item label="市场范围">
          <a-input v-model:value="generateForm.marketScope" placeholder="CN / US / GLOBAL" />
        </a-form-item>
        <a-form-item label="主题编码">
          <a-input v-model:value="generateForm.themeCode" placeholder="可为空" />
        </a-form-item>
        <a-form-item label="回看天数">
          <a-input-number v-model:value="generateForm.lookbackDays" :min="1" class="full-width" />
        </a-form-item>
        <a-form-item label="初始资金">
          <a-input-number v-model:value="generateForm.initialCapital" :min="0" class="full-width" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-space>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { generateInvestmentAnalysis, getInvestmentAnalysisReports } from '@/api/investment'
import type {
  GenerateInvestmentAnalysisPayload,
  InvestmentAnalysisReport,
  InvestmentAnalysisReportQuery,
  InvestmentAnalysisStatus,
} from '@/api/types'

const loading = ref(false)
const generating = ref(false)
const generateVisible = ref(false)
const detailVisible = ref(false)
const reports = ref<InvestmentAnalysisReport[]>([])
const total = ref(0)
const currentReport = ref<InvestmentAnalysisReport>()
const query = reactive<InvestmentAnalysisReportQuery>({
  page: 0,
  size: 10,
  sort: 'generatedAt',
  direction: 'desc',
})
const generateForm = reactive<GenerateInvestmentAnalysisPayload>({
  marketScope: 'CN',
  lookbackDays: 30,
  initialCapital: 100000,
})

const statusOptions: { label: string; value: InvestmentAnalysisStatus }[] = [
  { label: '成功', value: 'SUCCEEDED' },
  { label: '失败', value: 'FAILED' },
]

const columns: TableColumnsType<InvestmentAnalysisReport> = [
  { title: '主题 / 市场', key: 'theme', fixed: 'left', width: 240 },
  { title: '状态', dataIndex: 'status', width: 100 },
  { title: '质量门禁', key: 'gate', width: 190 },
  { title: '可信等级', dataIndex: 'confidenceLevel', width: 130 },
  { title: '模型', dataIndex: 'modelCode', width: 140 },
  { title: '生成时间', dataIndex: 'generatedAt', width: 180 },
  { title: '动作', key: 'actions', fixed: 'right', width: 160 },
]

const pagination = computed<TablePaginationConfig>(() => ({
  current: (query.page || 0) + 1,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const fetchReports = async () => {
  loading.value = true
  try {
    const result = await getInvestmentAnalysisReports(query)
    reports.value = result.items
    total.value = result.total
  } finally {
    loading.value = false
  }
}

const handleTableChange = (page: TablePaginationConfig) => {
  query.page = (page.current || 1) - 1
  query.size = page.pageSize || 10
  fetchReports()
}
const openDetail = (report: InvestmentAnalysisReport) => {
  currentReport.value = report
  detailVisible.value = true
}
const submitGenerate = async () => {
  generating.value = true
  try {
    const report = await generateInvestmentAnalysis(generateForm)
    message.success('报告生成请求已完成')
    generateVisible.value = false
    currentReport.value = report
    detailVisible.value = true
    fetchReports()
  } finally {
    generating.value = false
  }
}
const gatePassed = (report: InvestmentAnalysisReport) =>
  report.dataQualityGate?.passed !== false && report.confidenceLevel !== 'UNUSABLE'
const gateLabel = (report: InvestmentAnalysisReport) =>
  gatePassed(report) ? report.dataQualityGate?.qualityLevel || 'PASSED' : '降级 / 不可用'
const gateColor = (report: InvestmentAnalysisReport) => {
  if (!gatePassed(report)) return 'error'
  if (report.dataQualityGate?.qualityLevel === 'LOW') return 'warning'
  return 'success'
}
const gateMessage = (report: InvestmentAnalysisReport) =>
  report.dataQualityGate?.displayMessage || report.failureReason || '数据质量不足，请查看缺口并补数'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(fetchReports)
</script>

<style scoped>
.page {
  width: 100%;
}

.link-stack {
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

.link-stack span {
  color: #8c8c8c;
}

.detail-alert {
  margin-bottom: 16px;
}

.full-width {
  width: 100%;
}
</style>
