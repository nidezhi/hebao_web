<template>
  <BusinessPageShell
    title="Report Studio 投资报告"
    description="报告可解释、可追溯、可执行；质量门禁不过时只展示缺口，不展示 Mock 或 Prompt 动作。"
    :endpoints="[endpoints.report.list, endpoints.report.generate, endpoints.portfolio.buyFromReport]"
    :icon="FileSearchOutlined"
    status-text="REPORT GATE"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="9">
          <a-card class="page-card" :bordered="false" title="报告列表">
            <a-space class="mb-12" wrap>
              <a-input v-model:value="generateForm.themeCode" placeholder="主题，如 GOLD" style="width: 150px" />
              <a-input-number v-model:value="generateForm.lookbackDays" :min="1" :max="365" />
              <a-button type="primary" :loading="generating" @click="generateReport">生成报告</a-button>
            </a-space>
            <a-list :data-source="reports" size="small">
              <template #renderItem="{ item }">
                <a-list-item @click="selectReport(item)" class="clickable-row">
                  <a-list-item-meta :title="item.themeName || item.themeCode || item.bizId" :description="item.investmentSummary || item.failureReason || item.generatedAt" />
                  <StatusTag :value="item.status" :options="investmentAnalysisStatusOptions" />
                </a-list-item>
              </template>
              <template #empty><EmptyEvidence description="暂无投资报告。" /></template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="15">
          <a-card class="page-card" :bordered="false" title="报告详情">
            <EmptyEvidence v-if="!selectedReport" description="请选择报告查看质量门禁、趋势和计划。" />
            <a-space v-else direction="vertical" :size="16" class="full-width">
              <a-alert
                :type="reportQualityGatePassed(selectedReport) ? 'success' : 'warning'"
                show-icon
                :message="reportQualityGatePassed(selectedReport) ? '质量门禁通过：允许进入 Prompt / Mock / 回测动作' : reportGateMessage(selectedReport)"
              />
              <a-row :gutter="[16, 16]">
                <a-col :xs="24" :md="8">
                  <ScoreGauge :score="selectedReportView?.normalizedQualityScore" label="报告质量" />
                </a-col>
                <a-col :xs="24" :md="16">
                  <a-descriptions bordered size="small" :column="2">
                    <a-descriptions-item label="市场">{{ selectedReport.marketScope }}</a-descriptions-item>
                    <a-descriptions-item label="可信等级">{{ selectedReport.confidenceLevel || '-' }}</a-descriptions-item>
                    <a-descriptions-item label="Provider">{{ selectedReport.providerCode }}</a-descriptions-item>
                    <a-descriptions-item label="Model">{{ selectedReport.modelCode }}</a-descriptions-item>
                  </a-descriptions>
                </a-col>
              </a-row>
              <a-tabs>
                <a-tab-pane key="summary" tab="结构化摘要">
                  <JsonPreview :value="selectedReportView?.investmentSummaryView" :raw="selectedReport.investmentSummary" />
                </a-tab-pane>
                <a-tab-pane key="trend" tab="趋势 / 计划">
                  <a-row :gutter="[16, 16]">
                    <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView?.trendView" :raw="selectedReport.trend" /></a-col>
                    <a-col :xs="24" :lg="12"><JsonPreview :value="selectedReportView?.investmentPlanView" :raw="selectedReport.investmentPlan" /></a-col>
                  </a-row>
                </a-tab-pane>
                <a-tab-pane key="chart" tab="图表证据">
                  <JsonPreview :value="selectedReportView?.chartPayloadView" :raw="selectedReport.chartPayload" />
                </a-tab-pane>
                <a-tab-pane key="prompt" tab="Prompt 快照">
                  <JsonPreview :value="selectedReportView?.promptSnapshotView" :raw="selectedReport.promptSnapshot" />
                </a-tab-pane>
              </a-tabs>
              <a-space>
                <a-button :disabled="!reportQualityGatePassed(selectedReport)" @click="go('/prompt-lab')">进入 Prompt</a-button>
                <a-button :disabled="!reportQualityGatePassed(selectedReport)" @click="go('/simulation')">转 Mock</a-button>
                <a-button @click="go('/review-loop')">进入回测</a-button>
              </a-space>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { FileSearchOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatPercent } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import ScoreGauge from '@/shared/components/visual/ScoreGauge.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { generateInvestmentReport, listInvestmentReports } from '@/entities/report/api'
import { normalizeReport, reportGateMessage, reportQualityGatePassed, summarizeReports } from '@/entities/report/adapter'
import { investmentAnalysisStatusOptions } from '@/entities/report/dictionary'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'

const router = useRouter()
const loading = ref(false)
const generating = ref(false)
const errorMessage = ref('')
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedReport = ref<InvestmentAnalysisReportDto>()
const generateForm = reactive({ providerCode: 'OPENAI_COMPATIBLE', modelCode: 'openai-compatible-analysis', marketScope: 'CN_MAINLAND', themeCode: '', lookbackDays: 30, initialCapital: 100000 })

const selectedReportView = computed(() => selectedReport.value ? normalizeReport(selectedReport.value) : undefined)
const summary = computed(() => summarizeReports(reports.value))
const metrics = computed(() => [
  { label: '报告总数', value: summary.value.total, hint: `成功 ${summary.value.succeeded}` },
  { label: '门禁阻断', value: summary.value.blocked, hint: '不可执行' },
  { label: '不可用报告', value: summary.value.unusable, hint: '只看缺口' },
  { label: '当前质量', value: formatPercent(selectedReportView.value?.normalizedQualityScore), hint: '选中报告' },
])

const go = (path: string) => router.push(path)
const selectReport = (report: InvestmentAnalysisReportDto) => { selectedReport.value = report }

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listInvestmentReports({ page: 1, size: 30, sort: 'generatedAt', direction: 'desc' })
    reports.value = page.items || []
    selectedReport.value = reports.value[0]
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '投资报告接口加载失败'
  } finally {
    loading.value = false
  }
}

const generateReport = async () => {
  generating.value = true
  try {
    const report = await generateInvestmentReport({ ...generateForm, themeCode: generateForm.themeCode || undefined })
    message.success('报告生成任务已返回')
    selectedReport.value = report
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '生成失败')
  } finally {
    generating.value = false
  }
}

onMounted(load)
</script>
