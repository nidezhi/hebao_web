<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-alert show-icon type="info" message="复盘闭环将报告、Prompt、Mock 订单、回测、反馈与 Prompt 评分串联，403 统一理解为当前记录不可见或已无权限访问。" />

    <a-card class="page-card" :bordered="false" title="复盘链路">
      <div class="review-flow">
        <span>报告</span>
        <span>Prompt</span>
        <span>Mock 订单</span>
        <span>回测</span>
        <span>反馈</span>
        <span>Prompt 评分</span>
      </div>
    </a-card>

    <a-tabs>
      <a-tab-pane key="backtests" tab="回测结果">
        <a-card class="page-card" :bordered="false">
          <a-table
            row-key="bizId"
            :columns="backtestColumns"
            :data-source="backtests"
            :loading="loading"
            :pagination="false"
            :scroll="{ x: 920 }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <a-tag :color="optionColor(backtestStatusOptions, record.status)">
                  {{ optionLabel(backtestStatusOptions, record.status) }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'metrics'">
                {{ metricSummary(record.metrics) }}
              </template>
            </template>
          </a-table>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="feedback" tab="反馈">
        <a-card class="page-card" :bordered="false">
          <a-table
            row-key="bizId"
            :columns="feedbackColumns"
            :data-source="feedback"
            :loading="loading"
            :pagination="false"
            :scroll="{ x: 980 }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'feedbackAction'">
                <a-tag :color="optionColor(feedbackActionOptions, record.feedbackAction)">
                  {{ optionLabel(feedbackActionOptions, record.feedbackAction) }}
                </a-tag>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="evaluations" tab="Prompt 评估">
        <a-card class="page-card" :bordered="false">
          <a-table
            row-key="bizId"
            :columns="evaluationColumns"
            :data-source="evaluations"
            :loading="loading"
            :pagination="false"
            :scroll="{ x: 920 }"
          />
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </a-space>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'
import { getBacktests, getInvestmentFeedback, getPromptEvaluations } from '@/api/review'
import type { AiPromptEvaluation, BacktestResult, InvestmentFeedback } from '@/api/types'
import { backtestStatusOptions, feedbackActionOptions, optionColor, optionLabel } from '@/utils/options'

const loading = ref(false)
const backtests = ref<BacktestResult[]>([])
const feedback = ref<InvestmentFeedback[]>([])
const evaluations = ref<AiPromptEvaluation[]>([])

const backtestColumns: TableColumnsType<BacktestResult> = [
  { title: '策略编码', dataIndex: 'strategyCode', fixed: 'left', width: 180 },
  { title: '版本', dataIndex: 'strategyVersion', width: 100 },
  { title: '状态', key: 'status', width: 120 },
  { title: '区间开始', dataIndex: 'startDate', width: 130 },
  { title: '区间结束', dataIndex: 'endDate', width: 130 },
  { title: '指标摘要', key: 'metrics', width: 300 },
]
const feedbackColumns: TableColumnsType<InvestmentFeedback> = [
  { title: '目标类型', dataIndex: 'targetType', fixed: 'left', width: 140 },
  { title: '反馈动作', key: 'feedbackAction', width: 120 },
  { title: '原因', dataIndex: 'reasonCode', width: 160 },
  { title: 'Prompt', dataIndex: 'promptCode', width: 180 },
  { title: '备注', dataIndex: 'commentText', width: 260 },
  { title: '创建时间', dataIndex: 'createdAt', width: 180 },
]
const evaluationColumns: TableColumnsType<AiPromptEvaluation> = [
  { title: 'Prompt', dataIndex: 'promptCode', fixed: 'left', width: 200 },
  { title: '版本', dataIndex: 'promptVersion', width: 100 },
  { title: '场景', dataIndex: 'scenario', width: 140 },
  { title: '评分', dataIndex: 'score', width: 100 },
  { title: '复核状态', dataIndex: 'reviewStatus', width: 130 },
  { title: '关联回测', dataIndex: 'backtestBizId', width: 180 },
  { title: '关联反馈', dataIndex: 'feedbackBizId', width: 180 },
]

const fetchReview = async () => {
  loading.value = true
  try {
    const [backtestResult, feedbackResult, evaluationResult] = await Promise.all([
      getBacktests({ page: 1, size: 10, sort: 'createdAt', direction: 'desc' }),
      getInvestmentFeedback({ page: 1, size: 10, sort: 'createdAt', direction: 'desc' }),
      getPromptEvaluations({ page: 1, size: 10, sort: 'createdAt', direction: 'desc' }),
    ])
    backtests.value = backtestResult.items
    feedback.value = feedbackResult.items
    evaluations.value = evaluationResult.items
  } finally {
    loading.value = false
  }
}
const metricSummary = (metrics?: string) => {
  if (!metrics) return '-'
  try {
    const parsed = JSON.parse(metrics) as Record<string, unknown>
    return Object.entries(parsed).slice(0, 3).map(([key, value]) => `${key}: ${value}`).join(' / ')
  } catch {
    return metrics
  }
}

onMounted(fetchReview)
</script>

<style scoped>
.page {
  width: 100%;
}

.review-flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 10px;
}

.review-flow span {
  position: relative;
  padding: 12px;
  font-weight: 600;
  text-align: center;
  background: #f7f8fa;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.review-flow span:not(:last-child)::after {
  position: absolute;
  top: 50%;
  right: -10px;
  color: #bfbfbf;
  content: "→";
  transform: translateY(-50%);
}

@media (max-width: 900px) {
  .review-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
