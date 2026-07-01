<template>
  <BusinessPageShell
    title="Investment Evolution 持续进化分析"
    description="汇总闭环运行、Mock 组合、风控、反馈、回测和模型调用审计，观察主链路是否正在变得更稳定。"
    :endpoints="[endpoints.analytics.investmentEvolutionSummary]"
    :icon="LineChartOutlined"
    status-text="EVOLUTION"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="summary?.metricCards || []" />

      <a-card class="page-card" :bordered="false">
        <a-row :gutter="[16, 16]" align="middle">
          <a-col :xs="24" :lg="8">
            <a-statistic title="样本状态" :value="summary?.sampleStatusText || '-'" />
          </a-col>
          <a-col :xs="24" :lg="8">
            <a-statistic title="样本窗口" :value="summary?.sampleWindowSize || 100" suffix="条" />
          </a-col>
          <a-col :xs="24" :lg="8">
            <a-statistic title="生成时间" :value="summary?.generatedAtText || '-'" />
          </a-col>
        </a-row>
        <a-space class="toolbar" wrap>
          <a-select v-model:value="sampleSize" :options="sampleOptions" />
          <a-button type="primary" @click="load">刷新</a-button>
        </a-space>
      </a-card>

      <a-alert
        v-if="summary?.limitations.length"
        type="warning"
        show-icon
        class="page-card"
        :message="summary.limitations.join('；')"
      />

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card" :bordered="false" title="闭环与报告质量">
            <a-descriptions bordered size="small" :column="1">
              <a-descriptions-item label="闭环样本">{{ summary?.closedLoop.sampleCount ?? 0 }}</a-descriptions-item>
              <a-descriptions-item label="成功率">{{ percentText(summary?.closedLoop.successRate) }}</a-descriptions-item>
              <a-descriptions-item label="成功/失败/运行中">
                {{ summary?.closedLoop.successCount ?? 0 }} /
                {{ summary?.closedLoop.failedCount ?? 0 }} /
                {{ summary?.closedLoop.runningCount ?? 0 }}
              </a-descriptions-item>
              <a-descriptions-item label="平均质量分">{{ numberText(summary?.closedLoop.averageQualityScore, 4) }}</a-descriptions-item>
              <a-descriptions-item label="门禁通过">{{ summary?.closedLoop.gatePassCount ?? 0 }}</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card" :bordered="false" title="Mock 组合表现">
            <a-descriptions bordered size="small" :column="1">
              <a-descriptions-item label="组合/估值点">
                {{ summary?.portfolio.portfolioCount ?? 0 }} /
                {{ summary?.portfolio.valuationPointCount ?? 0 }}
              </a-descriptions-item>
              <a-descriptions-item label="最新收益率">{{ percentText(summary?.portfolio.latestReturnRate) }}</a-descriptions-item>
              <a-descriptions-item label="最大回撤">{{ percentText(summary?.portfolio.maxDrawdown) }}</a-descriptions-item>
              <a-descriptions-item label="订单事件/成交">
                {{ summary?.portfolio.orderEventCount ?? 0 }} /
                {{ summary?.portfolio.filledOrderEventCount ?? 0 }}
              </a-descriptions-item>
              <a-descriptions-item label="换手代理">{{ percentText(summary?.portfolio.turnoverProxy) }}</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="12">
          <a-card class="page-card" :bordered="false" title="模型稳定性">
            <a-descriptions bordered size="small" :column="1">
              <a-descriptions-item label="调用样本">{{ summary?.model.sampleCount ?? 0 }}</a-descriptions-item>
              <a-descriptions-item label="成功率">{{ percentText(summary?.model.successRate) }}</a-descriptions-item>
              <a-descriptions-item label="成功/失败">
                {{ summary?.model.successCount ?? 0 }} /
                {{ summary?.model.failedCount ?? 0 }}
              </a-descriptions-item>
              <a-descriptions-item label="平均耗时">{{ numberText(summary?.model.averageDurationMs, 0) }} ms</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="page-card" :bordered="false" title="风控与反馈">
            <a-descriptions bordered size="small" :column="1">
              <a-descriptions-item label="风控样本">{{ summary?.risk.sampleCount ?? 0 }}</a-descriptions-item>
              <a-descriptions-item label="通过/复核/拒绝">
                {{ summary?.risk.passCount ?? 0 }} /
                {{ summary?.risk.reviewCount ?? 0 }} /
                {{ summary?.risk.rejectCount ?? 0 }}
              </a-descriptions-item>
              <a-descriptions-item label="反馈样本">{{ summary?.feedback.feedbackCount ?? 0 }}</a-descriptions-item>
              <a-descriptions-item label="回测完成">
                {{ summary?.feedback.completedBacktestCount ?? 0 }} /
                {{ summary?.feedback.backtestCount ?? 0 }}
              </a-descriptions-item>
            </a-descriptions>
            <a-space wrap class="reason-tags">
              <a-tag v-for="reason in summary?.risk.topRejectReasons || []" :key="reason.reasonCode" color="red">
                {{ reason.reasonCode }} · {{ reason.count }}
              </a-tag>
            </a-space>
          </a-card>
        </a-col>
      </a-row>

      <a-card class="page-card" :bordered="false" title="模型 / Prompt / Skill A/B 归因">
        <a-table row-key="variantKey" size="small" :columns="variantColumns" :data-source="summary?.variantRows || []" />
      </a-card>

      <a-card class="page-card" :bordered="false" title="最近闭环样本">
        <a-table row-key="runBizId" size="small" :columns="runColumns" :data-source="summary?.recentRunRows || []" />
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import { LineChartOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { getInvestmentEvolutionSummary } from '@/entities/investment-evolution/api'
import {
  normalizeInvestmentEvolutionSummary,
  numberText,
  percentText,
  type InvestmentEvolutionSummaryView,
  type RecentRunView,
} from '@/entities/investment-evolution/adapter'

const loading = ref(false)
const errorMessage = ref('')
const sampleSize = ref(100)
const summary = ref<InvestmentEvolutionSummaryView>()

const sampleOptions = [
  { label: '最近 30 条', value: 30 },
  { label: '最近 50 条', value: 50 },
  { label: '最近 100 条', value: 100 },
]

const variantColumns = [
  { title: '模型', dataIndex: 'modelDisplay' },
  { title: 'Prompt', dataIndex: 'promptDisplay' },
  { title: 'Skill', dataIndex: 'skillDisplay' },
  { title: '样本', dataIndex: 'sampleCount', width: 80 },
  { title: '成功率', dataIndex: 'successRateText', width: 110 },
  { title: '平均耗时', dataIndex: 'averageDurationText', width: 110 },
  { title: '最近业务', dataIndex: 'latestBusinessLabel' },
]

const runColumns = [
  { title: '运行号', dataIndex: 'runNo' },
  {
    title: '状态',
    customRender: ({ record }: { record: RecentRunView }) =>
      h(StatusTag, { value: record.runStatus, options: runStatusOptions }),
  },
  { title: 'Prompt', dataIndex: 'promptDisplay' },
  { title: '质量分', dataIndex: 'qualityScoreText' },
  { title: '门禁', dataIndex: 'gateResult' },
  { title: '开始时间', dataIndex: 'startedAtText' },
]

const runStatusOptions = [
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '完成', value: 'COMPLETED', color: 'success' },
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '失败', value: 'FAILED', color: 'error' },
  { label: '阻断', value: 'BLOCKED', color: 'warning' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    summary.value = normalizeInvestmentEvolutionSummary(
      await getInvestmentEvolutionSummary({ sampleSize: sampleSize.value }),
    )
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '持续进化分析加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<style scoped>
.toolbar {
  margin-top: 16px;
}

.reason-tags {
  margin-top: 14px;
}
</style>
