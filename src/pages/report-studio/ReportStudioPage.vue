<template>
  <BusinessPageShell
    title="Report Studio 投资报告"
    description="生成、查看和解释投资分析报告；报告不只展示列表，还要展示质量门禁、报告正文、图表载荷和后续 Mock 动作上下文。"
    :endpoints="[endpoints.report.list, endpoints.report.generate]"
    :icon="FileSearchOutlined"
    :status-text="errorMessage ? 'REPORT WAITING' : 'REPORT DESK'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && reports.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="14">
          <a-card class="cockpit-card" :bordered="false">
            <template #title>报告列表与质量门禁</template>
            <template #extra>
              <a-button type="primary" ghost :loading="generating" @click="handleGenerate">
                生成样例报告
              </a-button>
            </template>
            <a-table
              row-key="bizId"
              size="small"
              :data-source="reports"
              :columns="columns"
              :pagination="{ pageSize: 8 }"
              :row-class-name="rowClassName"
              @row="rowHandlers"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="record.status === 'SUCCEEDED' ? 'success' : 'error'">
                    {{ record.status }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'quality'">
                  {{ formatPercent(record.qualityScore) }}
                </template>
                <template v-if="column.key === 'gate'">
                  <a-tooltip :title="reportGateMessage(record)">
                    <a-tag :color="reportQualityGatePassed(record) ? 'success' : 'warning'">
                      {{ reportQualityGatePassed(record) ? '动作可用' : '降级补数' }}
                    </a-tag>
                  </a-tooltip>
                </template>
                <template v-if="column.key === 'generatedAt'">
                  {{ formatDateTime(record.generatedAt || record.createdAt) }}
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="10">
          <a-card class="cockpit-card report-detail-card" :bordered="false" title="报告详情">
            <a-empty v-if="!selectedReport" description="选择左侧报告查看详情" />
            <a-space v-else direction="vertical" :size="14" style="width: 100%">
              <a-descriptions bordered size="small" :column="1">
                <a-descriptions-item label="主题">{{ selectedReport.themeName || selectedReport.themeCode || '-' }}</a-descriptions-item>
                <a-descriptions-item label="市场">{{ selectedReport.marketScope || '-' }}</a-descriptions-item>
                <a-descriptions-item label="模型">{{ selectedReport.providerCode }} / {{ selectedReport.modelCode }}</a-descriptions-item>
                <a-descriptions-item label="可信度">{{ selectedReport.confidenceLevel || '-' }}</a-descriptions-item>
              </a-descriptions>

              <a-alert
                :type="reportQualityGatePassed(selectedReport) ? 'success' : 'warning'"
                show-icon
                :message="reportQualityGatePassed(selectedReport) ? '数据质量门禁通过' : '数据质量不足，动作降级'"
                :description="reportGateMessage(selectedReport)"
              />

              <div v-if="selectedReport.dataQualityGate?.missingReasons?.length" class="tag-cloud">
                <a-tag
                  v-for="reason in selectedReport.dataQualityGate.missingReasons"
                  :key="reason"
                  color="warning"
                >
                  {{ reason }}
                </a-tag>
              </div>
            </a-space>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="14">
          <a-card class="cockpit-card" :bordered="false" title="报告正文分段">
            <a-empty v-if="!selectedReport" description="选择报告后展示正文" />
            <a-collapse v-else v-model:active-key="activeSections" ghost>
              <a-collapse-panel key="summary" header="投资摘要">
                <p class="detail-paragraph">{{ selectedReport.investmentSummary || '后端未返回投资摘要。' }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="trend" header="趋势判断">
                <p class="detail-paragraph">{{ selectedReport.trend || '后端未返回趋势判断。' }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="plan" header="投资计划">
                <p class="detail-paragraph">{{ selectedReport.investmentPlan || '后端未返回投资计划。' }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="return" header="模拟收益说明">
                <p class="detail-paragraph">{{ selectedReport.simulatedReturn || '后端未返回模拟收益说明。' }}</p>
              </a-collapse-panel>
            </a-collapse>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="10">
          <a-card class="cockpit-card" :bordered="false" title="质量与报告分布图">
            <BusinessChart :option="qualityChartOption" height="300px" />
          </a-card>
        </a-col>
      </a-row>

      <a-card class="cockpit-card" :bordered="false" title="图表载荷 / Prompt 快照">
        <a-tabs>
          <a-tab-pane key="chart" tab="chartPayload">
            <pre class="json-preview">{{ selectedReport?.chartPayload || '后端未返回 chartPayload。' }}</pre>
          </a-tab-pane>
          <a-tab-pane key="prompt" tab="promptSnapshot">
            <pre class="json-preview">{{ selectedReport?.promptSnapshot || '后端未返回 promptSnapshot。' }}</pre>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'
import { FileSearchOutlined } from '@ant-design/icons-vue'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { generateInvestmentReport, listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { reportGateMessage, reportQualityGatePassed, summarizeReports } from '@/entities/report/adapter'
import { formatDateTime, formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const generating = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedReport = ref<InvestmentAnalysisReportDto>()
const activeSections = ref(['summary', 'trend'])

const summary = computed(() => summarizeReports(reports.value))
const metrics = computed(() => [
  { label: '报告总数', value: summary.value.total, hint: '真实接口返回' },
  { label: '生成成功', value: summary.value.succeeded, hint: 'SUCCEEDED' },
  { label: '门禁拦截', value: summary.value.blocked, hint: '质量不足 / 不可用' },
  { label: '不可用报告', value: summary.value.unusable, hint: 'UNUSABLE' },
])

const qualityChartOption = computed<EChartsCoreOption>(() => {
  const buckets = {
    '>=90%': 0,
    '70%-90%': 0,
    '<70%': 0,
    '无分数': 0,
  }

  reports.value.forEach((item) => {
    if (typeof item.qualityScore !== 'number') buckets['无分数'] += 1
    else if (item.qualityScore >= 0.9) buckets['>=90%'] += 1
    else if (item.qualityScore >= 0.7) buckets['70%-90%'] += 1
    else buckets['<70%'] += 1
  })

  return {
    color: ['#2563eb', '#16a34a', '#f59e0b', '#94a3b8'],
    tooltip: { trigger: 'axis' },
    grid: { left: 36, right: 18, top: 24, bottom: 34 },
    xAxis: { type: 'category', data: Object.keys(buckets) },
    yAxis: { type: 'value', minInterval: 1 },
    series: [{ type: 'bar', data: Object.values(buckets), barWidth: 32 }],
  }
})

const columns = [
  { title: '主题', dataIndex: 'themeName', key: 'themeName' },
  { title: '市场', dataIndex: 'marketScope', key: 'marketScope' },
  { title: '模型', dataIndex: 'modelCode', key: 'modelCode' },
  { title: '状态', key: 'status' },
  { title: '可信度', dataIndex: 'confidenceLevel', key: 'confidenceLevel' },
  { title: '质量分', key: 'quality' },
  { title: '门禁', key: 'gate' },
  { title: '生成时间', key: 'generatedAt' },
]

const rowHandlers = (record: InvestmentAnalysisReportDto) => ({
  onClick: () => {
    selectedReport.value = record
  },
})

const rowClassName = (record: InvestmentAnalysisReportDto) =>
  record.bizId === selectedReport.value?.bizId ? 'selected-business-row' : ''

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listInvestmentReports({ page: 1, size: 50 })
    reports.value = page.items || []
    selectedReport.value = reports.value[0]
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

const handleGenerate = async () => {
  generating.value = true
  errorMessage.value = ''
  try {
    const report = await generateInvestmentReport({
      marketScope: selectedReport.value?.marketScope || 'CN',
      themeCode: selectedReport.value?.themeCode,
      providerCode: selectedReport.value?.providerCode,
      modelCode: selectedReport.value?.modelCode,
      lookbackDays: 30,
      initialCapital: 100000,
    })
    reports.value = [report, ...reports.value.filter((item) => item.bizId !== report.bizId)]
    selectedReport.value = report
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '生成报告失败，请稍后重试'
  } finally {
    generating.value = false
  }
}

onMounted(load)
</script>
