<template>
  <BusinessPageShell
    title="Review Loop 复盘闭环"
    description="回测、反馈、Prompt 评估在这里形成报告 -> Prompt -> Mock -> 回测 -> 反馈 -> 评分的可复盘链路。"
    :endpoints="[endpoints.backtest.list, endpoints.backtest.generateFromPortfolio, endpoints.feedback.list, endpoints.promptEvaluation.list]"
    :icon="RetweetOutlined"
    status-text="LEARNING LOOP"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-tabs>
        <a-tab-pane key="backtests" tab="回测结果">
          <a-table row-key="bizId" size="small" :data-source="backtests" :columns="backtestColumns" @row="backtestRowEvents" />
        </a-tab-pane>
        <a-tab-pane key="feedback" tab="反馈列表">
          <a-table row-key="bizId" size="small" :data-source="feedback" :columns="feedbackColumns" />
        </a-tab-pane>
        <a-tab-pane key="evaluations" tab="Prompt 评估">
          <a-table row-key="bizId" size="small" :data-source="evaluations" :columns="evaluationColumns" />
        </a-tab-pane>
        <a-tab-pane key="chain" tab="复盘链路">
          <TimelineFlow :nodes="chainNodes" @select="() => undefined" />
        </a-tab-pane>
      </a-tabs>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="760" title="回测详情">
      <a-space v-if="selectedBacktest" direction="vertical" :size="16" class="full-width">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="策略">{{ selectedBacktest.strategyCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="版本">{{ selectedBacktest.strategyVersion || '-' }}</a-descriptions-item>
          <a-descriptions-item label="区间">{{ selectedBacktest.startDate || '-' }} ~ {{ selectedBacktest.endDate || '-' }}</a-descriptions-item>
          <a-descriptions-item label="状态">
            <StatusTag :value="selectedBacktest.status || 'PENDING'" :options="backtestStatusOptions" />
          </a-descriptions-item>
        </a-descriptions>
        <a-divider>参数</a-divider>
        <JsonPreview :value="parseBacktestParameters(selectedBacktest)" :raw="selectedBacktest.parameters" />
        <a-divider>指标</a-divider>
        <JsonPreview :value="parseBacktestMetrics(selectedBacktest)" :raw="selectedBacktest.metrics" />
      </a-space>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { RetweetOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import TimelineFlow from '@/shared/components/visual/TimelineFlow.vue'
import { listBacktests } from '@/entities/backtest/api'
import { parseBacktestMetrics, parseBacktestParameters } from '@/entities/backtest/adapter'
import { backtestStatusOptions, feedbackActionOptions } from '@/shared/dictionaries/status'
import type { BacktestResultDto } from '@/entities/backtest/model'
import { listInvestmentFeedback, listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from '@/entities/feedback/model'

const loading = ref(false)
const errorMessage = ref('')
const backtests = ref<BacktestResultDto[]>([])
const feedback = ref<InvestmentFeedbackDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])
const selectedBacktest = ref<BacktestResultDto>()
const drawerOpen = ref(false)

const metrics = computed(() => [
  { label: '回测记录', value: backtests.value.length, hint: `成功 ${backtests.value.filter((item) => item.status === 'SUCCEEDED').length}` },
  { label: '反馈记录', value: feedback.value.length, hint: `采纳 ${feedback.value.filter((item) => item.feedbackAction === 'ADOPT').length}` },
  { label: 'Prompt 评估', value: evaluations.value.length, hint: '自动/人工回流' },
  { label: '待复核', value: evaluations.value.filter((item) => item.reviewStatus !== 'APPROVED').length, hint: '需要处理' },
])

const chainNodes = [
  { key: 'REPORT', title: '投资报告', subtitle: '来源证据', status: 'SUCCEEDED' },
  { key: 'PROMPT', title: 'Prompt', subtitle: '版本渲染', status: 'SUCCEEDED' },
  { key: 'MOCK_TRADE', title: 'Mock 订单', subtitle: '模拟执行', status: 'SUCCEEDED' },
  { key: 'BACKTEST', title: '回测', subtitle: '收益/回撤/波动', status: 'RUNNING' },
  { key: 'FEEDBACK', title: '反馈', subtitle: '采纳/拒绝/观察', status: 'PENDING' },
  { key: 'SCORE', title: 'Prompt 评分', subtitle: '回流实验室', status: 'SKIPPED' },
]

const backtestColumns = [
  { title: '策略', dataIndex: 'strategyCode' },
  { title: '版本', dataIndex: 'strategyVersion' },
  { title: '状态', customRender: ({ record }: { record: BacktestResultDto }) => h(StatusTag, { value: record.status || 'PENDING', options: backtestStatusOptions }) },
  { title: '创建时间', customRender: ({ record }: { record: BacktestResultDto }) => formatDateTime(record.createdAt) },
]
const feedbackColumns = [
  { title: '目标', dataIndex: 'targetType' },
  { title: '动作', customRender: ({ record }: { record: InvestmentFeedbackDto }) => h(StatusTag, { value: record.feedbackAction, options: feedbackActionOptions }) },
  { title: '原因', dataIndex: 'reasonCode' },
  { title: '评论', dataIndex: 'commentText' },
]
const evaluationColumns = [
  { title: 'Prompt', dataIndex: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion' },
  { title: '评分', dataIndex: 'score' },
  { title: '复核', dataIndex: 'reviewStatus' },
]

const backtestRowEvents = (record: BacktestResultDto) => ({ onClick: () => { selectedBacktest.value = record; drawerOpen.value = true } })

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [backtestPage, feedbackPage, evaluationPage] = await Promise.all([
      listBacktests({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      listInvestmentFeedback({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 50, sort: 'evaluatedAt', direction: 'desc' }),
    ])
    backtests.value = backtestPage.items || []
    feedback.value = feedbackPage.items || []
    evaluations.value = evaluationPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '复盘闭环接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
