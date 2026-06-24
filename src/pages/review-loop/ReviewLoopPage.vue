<template>
  <BusinessPageShell
    title="Review Loop 复盘闭环"
    description="把报告、Prompt、Mock 订单、回测、反馈和 Prompt 评分连接成可复盘链路。"
    :endpoints="[endpoints.backtest.list, endpoints.feedback.list, endpoints.promptEvaluation.list]"
    :icon="BranchesOutlined"
    :status-text="errorMessage ? 'REVIEW WAITING' : 'FEEDBACK LOOP'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="回测结果">
            <a-table row-key="bizId" size="small" :data-source="backtests" :columns="backtestColumns" :pagination="{ pageSize: 6 }">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="optionColor(backtestStatusOptions, record.status)">
                    {{ optionLabel(backtestStatusOptions, record.status) }}
                  </a-tag>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="反馈与 Prompt 评估">
            <a-table row-key="bizId" size="small" :data-source="feedback" :columns="feedbackColumns" :pagination="{ pageSize: 6 }">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'feedbackAction'">
                  <a-tag :color="optionColor(feedbackActionOptions, record.feedbackAction)">
                    {{ optionLabel(feedbackActionOptions, record.feedbackAction) }}
                  </a-tag>
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
import { BranchesOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listBacktests } from '@/entities/backtest/api'
import type { BacktestResultDto } from '@/entities/backtest/model'
import { listInvestmentFeedback, listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from '@/entities/feedback/model'
import { backtestStatusOptions, feedbackActionOptions, optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDate, formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const backtests = ref<BacktestResultDto[]>([])
const feedback = ref<InvestmentFeedbackDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])

const metrics = computed(() => [
  { label: '回测记录', value: backtests.value.length, hint: '策略版本可追踪' },
  { label: '成功回测', value: backtests.value.filter((item) => item.status === 'SUCCEEDED').length, hint: 'SUCCEEDED' },
  { label: '反馈记录', value: feedback.value.length, hint: '采纳 / 拒绝 / 观察' },
  { label: 'Prompt 评分', value: evaluations.value.length, hint: '评估回流' },
])

const backtestColumns = [
  { title: '策略', dataIndex: 'strategyCode', key: 'strategyCode' },
  { title: '版本', dataIndex: 'strategyVersion', key: 'strategyVersion' },
  { title: '状态', key: 'status' },
  { title: '开始', key: 'startDate', customRender: ({ record }: { record: BacktestResultDto }) => formatDate(record.startDate) },
  { title: '结束', key: 'endDate', customRender: ({ record }: { record: BacktestResultDto }) => formatDate(record.endDate) },
]

const feedbackColumns = [
  { title: '目标', dataIndex: 'targetType', key: 'targetType' },
  { title: '动作', key: 'feedbackAction' },
  { title: 'Prompt', dataIndex: 'promptCode', key: 'promptCode' },
  { title: '原因', dataIndex: 'reasonCode', key: 'reasonCode' },
  { title: '创建时间', key: 'createdAt', customRender: ({ record }: { record: InvestmentFeedbackDto }) => formatDateTime(record.createdAt) },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [backtestPage, feedbackPage, evaluationPage] = await Promise.all([
      listBacktests({ page: 1, size: 30 }),
      listInvestmentFeedback({ page: 1, size: 30 }),
      listPromptEvaluations({ page: 1, size: 30 }),
    ])
    backtests.value = backtestPage.items || []
    feedback.value = feedbackPage.items || []
    evaluations.value = evaluationPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
