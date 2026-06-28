<template>
  <BusinessPageShell
    title="Review Loop 复盘闭环"
    description="回测、反馈、Prompt 评估在这里形成报告 -> Prompt -> Mock -> 回测 -> 反馈 -> 评分的可复盘链路。"
    :endpoints="[endpoints.backtest.list, endpoints.backtest.save, endpoints.backtest.generateFromPortfolio, endpoints.feedback.list, endpoints.feedback.save, endpoints.promptEvaluation.list, endpoints.promptEvaluation.save]"
    :icon="RetweetOutlined"
    status-text="LEARNING LOOP"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card mb-12" :bordered="false" title="复盘动作">
        <a-space wrap>
          <a-button type="primary" @click="generateOpen = true">从组合生成回测</a-button>
          <a-button @click="saveBacktestOpen = true">保存回测结果</a-button>
          <a-button @click="feedbackOpen = true">录入投资反馈</a-button>
          <a-button @click="evaluationOpen = true">保存 Prompt 评估</a-button>
          <a-button @click="load">刷新</a-button>
        </a-space>
      </a-card>
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

    <a-drawer v-model:open="generateOpen" width="620" title="从组合生成回测">
      <a-form layout="vertical">
        <a-form-item label="Mock 组合">
          <a-select
            v-model:value="generateForm.portfolioBizId"
            show-search
            option-filter-prop="label"
            placeholder="选择 Mock 组合"
            :options="portfolioOptions"
          />
        </a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="策略编码"><a-input v-model:value="generateForm.strategyCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="策略版本"><a-input v-model:value="generateForm.strategyVersion" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="基准"><a-input v-model:value="generateForm.benchmarkCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="样本上限"><a-input-number v-model:value="generateForm.limit" class="full-width" :min="1" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="参数 JSON"><a-textarea v-model:value="generateForm.parameters" :auto-size="{ minRows: 4, maxRows: 8 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitGenerateBacktest">生成回测</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="saveBacktestOpen" width="680" title="保存回测结果">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="策略编码"><a-input v-model:value="backtestForm.strategyCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="策略版本"><a-input v-model:value="backtestForm.strategyVersion" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="Mock 组合">
          <a-select
            v-model:value="backtestForm.portfolioBizId"
            allow-clear
            show-search
            option-filter-prop="label"
            placeholder="选择回测对应的 Mock 组合"
            :options="portfolioOptions"
          />
        </a-form-item>
        <a-row :gutter="12">
          <a-col :span="8"><a-form-item label="开始日期"><a-input v-model:value="backtestForm.startDate" placeholder="2026-06-01" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="结束日期"><a-input v-model:value="backtestForm.endDate" placeholder="2026-06-27" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="状态"><a-select v-model:value="backtestForm.status" :options="backtestStatusSelectOptions" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="参数 JSON"><a-textarea v-model:value="backtestForm.parameters" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-form-item label="指标 JSON"><a-textarea v-model:value="backtestForm.metrics" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitSaveBacktest">保存回测</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="feedbackOpen" width="680" title="录入投资反馈">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="目标类型"><a-select v-model:value="feedbackForm.targetType" :options="targetTypeOptions" @change="feedbackForm.targetBizId = ''" /></a-form-item></a-col>
          <a-col :span="12">
            <a-form-item label="目标对象">
              <a-select
                v-model:value="feedbackForm.targetBizId"
                allow-clear
                show-search
                option-filter-prop="label"
                placeholder="选择反馈目标"
                :options="feedbackTargetOptions"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12">
            <a-form-item label="投资报告">
              <a-select
                v-model:value="feedbackForm.reportBizId"
                allow-clear
                show-search
                option-filter-prop="label"
                placeholder="选择关联报告"
                :options="reportOptions"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="回测">
              <a-select
                v-model:value="feedbackForm.backtestBizId"
                allow-clear
                show-search
                option-filter-prop="label"
                placeholder="选择关联回测"
                :options="backtestOptions"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Prompt Code"><a-input v-model:value="feedbackForm.promptCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="Prompt Version"><a-input v-model:value="feedbackForm.promptVersion" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="反馈动作"><a-select v-model:value="feedbackForm.feedbackAction" :options="feedbackActionSelectOptions" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="原因编码"><a-input v-model:value="feedbackForm.reasonCode" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="反馈说明"><a-textarea v-model:value="feedbackForm.commentText" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-form-item label="Metadata JSON"><a-textarea v-model:value="feedbackForm.metadata" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitFeedback">保存反馈</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="evaluationOpen" width="680" title="保存 Prompt 评估">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Prompt Code"><a-input v-model:value="evaluationForm.promptCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="Prompt Version"><a-input v-model:value="evaluationForm.promptVersion" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="8"><a-form-item label="场景"><a-input v-model:value="evaluationForm.scenario" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="评分"><a-input-number v-model:value="evaluationForm.score" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item></a-col>
          <a-col :span="8"><a-form-item label="复核状态"><a-select v-model:value="evaluationForm.reviewStatus" :options="reviewStatusOptions" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12">
            <a-form-item label="回测">
              <a-select
                v-model:value="evaluationForm.backtestBizId"
                allow-clear
                show-search
                option-filter-prop="label"
                placeholder="选择关联回测"
                :options="backtestOptions"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="反馈">
              <a-select
                v-model:value="evaluationForm.feedbackBizId"
                allow-clear
                show-search
                option-filter-prop="label"
                placeholder="选择关联反馈"
                :options="feedbackOptions"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="Metrics JSON"><a-textarea v-model:value="evaluationForm.metrics" :auto-size="{ minRows: 3, maxRows: 7 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitEvaluation">保存评估</a-button>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { RetweetOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import TimelineFlow from '@/shared/components/visual/TimelineFlow.vue'
import { generateBacktestFromPortfolio, listBacktests, saveBacktest } from '@/entities/backtest/api'
import { parseBacktestMetrics, parseBacktestParameters } from '@/entities/backtest/adapter'
import { backtestStatusOptions, feedbackActionOptions } from '@/shared/dictionaries/status'
import type { BacktestResultDto } from '@/entities/backtest/model'
import { listInvestmentFeedback, listPromptEvaluations, saveInvestmentFeedback, savePromptEvaluation } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from '@/entities/feedback/model'
import { listMyMockPortfolios } from '@/entities/portfolio/api'
import type { MockPortfolioDto } from '@/entities/portfolio/model'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const backtests = ref<BacktestResultDto[]>([])
const feedback = ref<InvestmentFeedbackDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])
const portfolios = ref<MockPortfolioDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const selectedBacktest = ref<BacktestResultDto>()
const drawerOpen = ref(false)
const generateOpen = ref(false)
const saveBacktestOpen = ref(false)
const feedbackOpen = ref(false)
const evaluationOpen = ref(false)
const generateForm = reactive({
  portfolioBizId: '',
  strategyCode: 'AUTO_CLOSED_LOOP_MOCK',
  strategyVersion: 'manual-v1',
  benchmarkCode: 'CSI300',
  parameters: '{"source":"REVIEW_LOOP"}',
  limit: 100,
})
const backtestForm = reactive({
  strategyCode: 'AUTO_CLOSED_LOOP_MOCK',
  strategyVersion: 'manual-v1',
  portfolioBizId: '',
  startDate: '',
  endDate: '',
  parameters: '{}',
  metrics: '{}',
  status: 'PENDING',
})
const feedbackForm = reactive({
  targetType: 'MOCK_PORTFOLIO',
  targetBizId: '',
  reportBizId: '',
  backtestBizId: '',
  promptCode: 'investment-plan-from-report',
  promptVersion: 'v1',
  feedbackAction: 'WATCH',
  reasonCode: 'MANUAL_REVIEW',
  commentText: '',
  metadata: '{}',
})
const evaluationForm = reactive({
  promptCode: 'investment-plan-from-report',
  promptVersion: 'v1',
  scenario: 'MANUAL_REVIEW',
  score: 0.8,
  reviewStatus: 'PENDING',
  backtestBizId: '',
  feedbackBizId: '',
  metrics: '{}',
})
const backtestStatusSelectOptions = backtestStatusOptions.map((item) => ({ label: item.label, value: item.value }))
const feedbackActionSelectOptions = feedbackActionOptions.map((item) => ({ label: item.label, value: item.value }))
const reviewStatusOptions = [
  { label: '待复核', value: 'PENDING' },
  { label: '已通过', value: 'APPROVED' },
  { label: '已拒绝', value: 'REJECTED' },
]
const targetTypeOptions = [
  { label: 'Mock 组合', value: 'MOCK_PORTFOLIO' },
  { label: '投资报告', value: 'REPORT' },
  { label: '回测结果', value: 'BACKTEST' },
]

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
const portfolioOptions = computed(() => portfolios.value.map((item) => ({
  value: item.bizId,
  label: `${item.portfolioName || item.portfolioNo || item.bizId} · ${item.portfolioNo || 'NO'} · ${item.baseCurrency || 'CNY'}`,
})))
const reportOptions = computed(() => reports.value.map((item) => ({
  value: item.bizId,
  label: `${item.themeName || item.themeCode || item.marketScope || item.requestId} · ${item.status || 'UNKNOWN'} · ${formatDateTime(item.generatedAt || item.createdAt)}`,
})))
const backtestOptions = computed(() => backtests.value.map((item) => ({
  value: item.bizId,
  label: `${item.strategyCode || 'BACKTEST'} · ${item.strategyVersion || '-'} · ${item.status || 'PENDING'} · ${formatDateTime(item.createdAt)}`,
})))
const feedbackOptions = computed(() => feedback.value.map((item) => ({
  value: item.bizId,
  label: `${item.targetType || 'FEEDBACK'} · ${item.feedbackAction || '-'} · ${item.reasonCode || '-'} · ${formatDateTime(item.createdAt)}`,
})))
const feedbackTargetOptions = computed(() => {
  if (feedbackForm.targetType === 'REPORT') return reportOptions.value
  if (feedbackForm.targetType === 'BACKTEST') return backtestOptions.value
  return portfolioOptions.value
})

const submitGenerateBacktest = async () => {
  if (!generateForm.portfolioBizId) {
    message.warning('请选择 Mock 组合')
    return
  }
  saving.value = true
  try {
    await generateBacktestFromPortfolio({ ...generateForm })
    message.success('回测生成已提交')
    generateOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '生成回测失败')
  } finally {
    saving.value = false
  }
}

const submitSaveBacktest = async () => {
  saving.value = true
  try {
    await saveBacktest({ ...backtestForm })
    message.success('回测结果已保存')
    saveBacktestOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存回测失败')
  } finally {
    saving.value = false
  }
}

const submitFeedback = async () => {
  if (!feedbackForm.targetBizId) {
    message.warning('请选择反馈目标')
    return
  }
  saving.value = true
  try {
    await saveInvestmentFeedback({ ...feedbackForm })
    message.success('投资反馈已保存')
    feedbackOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存反馈失败')
  } finally {
    saving.value = false
  }
}

const submitEvaluation = async () => {
  saving.value = true
  try {
    await savePromptEvaluation({ ...evaluationForm })
    message.success('Prompt 评估已保存')
    evaluationOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存 Prompt 评估失败')
  } finally {
    saving.value = false
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [backtestPage, feedbackPage, evaluationPage, portfolioPage, reportPage] = await Promise.all([
      listBacktests({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      listInvestmentFeedback({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      listPromptEvaluations({ page: 1, size: 50, sort: 'evaluatedAt', direction: 'desc' }),
      listMyMockPortfolios({ page: 1, size: 50, sort: 'createdAt', direction: 'desc' }),
      listInvestmentReports({ page: 1, size: 50, sort: 'generatedAt', direction: 'desc' }),
    ])
    backtests.value = backtestPage.items || []
    feedback.value = feedbackPage.items || []
    evaluations.value = evaluationPage.items || []
    portfolios.value = portfolioPage.items || []
    reports.value = reportPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '复盘闭环接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
