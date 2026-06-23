<template>
  <a-space direction="vertical" :size="16" class="dashboard">
    <a-alert
      show-icon
      type="warning"
      message="投资驾驶舱仅展示 Mock 与分析链路状态，不构成真实投资建议。低质量数据会降级展示，相关交易入口应被禁用。"
    />

    <section class="metric-band">
      <div v-for="item in statistics" :key="item.title" class="metric-item">
        <div class="metric-icon" :style="{ color: item.color, background: item.background }">
          <component :is="item.icon" />
        </div>
        <div>
          <span>{{ item.title }}</span>
          <strong>{{ item.value }}</strong>
          <small>{{ item.caption }}</small>
        </div>
      </div>
    </section>

    <a-card class="page-card" :bordered="false" title="投资闭环流">
      <div class="loop-flow">
        <button
          v-for="node in loopNodes"
          :key="node.path"
          class="loop-node"
          type="button"
          @click="router.push(node.path)"
        >
          <component :is="node.icon" />
          <span>{{ node.title }}</span>
          <small>{{ node.caption }}</small>
        </button>
      </div>
    </a-card>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :xl="14">
        <a-card class="page-card" :bordered="false" title="机会与报告">
          <a-table
            row-key="bizId"
            size="small"
            :columns="reportColumns"
            :data-source="reports"
            :loading="loading"
            :pagination="false"
            :scroll="{ x: 820 }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'theme'">
                <strong>{{ record.themeName || record.themeCode || '全市场' }}</strong>
                <div class="muted">{{ record.marketScope || '-' }}</div>
              </template>
              <template v-else-if="column.key === 'quality'">
                <a-tag :color="qualityColor(reportQualityLevel(record))">
                  {{ reportQualityLevel(record) }}
                </a-tag>
                <span>{{ formatPercent(record.qualityScore) }}</span>
              </template>
              <template v-else-if="column.key === 'action'">
                <a-tooltip
                  :title="reportGatePassed(record) ? '进入报告工作区' : '数据质量未通过，只能查看缺口'"
                >
                  <a-button
                    size="small"
                    :type="reportGatePassed(record) ? 'primary' : 'default'"
                    @click="router.push('/report-studio')"
                  >
                    {{ reportGatePassed(record) ? '查看' : '缺口' }}
                  </a-button>
                </a-tooltip>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>

      <a-col :xs="24" :xl="10">
        <a-card class="page-card" :bordered="false" title="最近风控审计">
          <a-list :data-source="riskChecks" :loading="loading" size="small">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :description="formatDateTime(item.createdAt)">
                  <template #title>
                    <a-space wrap>
                      <a-tag :color="optionColor(riskCheckResultOptions, item.checkResult)">
                        {{ optionLabel(riskCheckResultOptions, item.checkResult) }}
                      </a-tag>
                      <span>{{ item.reasonCode || item.targetType || '风控检查' }}</span>
                    </a-space>
                  </template>
                </a-list-item-meta>
                <span class="muted">{{ item.reasonMessage || item.targetBizId || '-' }}</span>
              </a-list-item>
            </template>
            <template #empty>
              <a-empty description="暂无风控记录" />
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>

    <a-card class="page-card" :bordered="false" title="Mock 组合资产概览">
      <a-table
        row-key="bizId"
        size="small"
        :columns="portfolioColumns"
        :data-source="portfolios"
        :loading="loading"
        :pagination="false"
        :scroll="{ x: 880 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'portfolio'">
            <strong>{{ record.portfolioName }}</strong>
            <div class="muted">{{ record.portfolioNo || record.bizId }}</div>
          </template>
          <template v-else-if="column.key === 'totalAsset'">
            {{ formatMoney(record.latestValuation?.totalAsset, record.baseCurrency) }}
          </template>
          <template v-else-if="column.key === 'returnRate'">
            <span :class="returnClass(record.latestValuation?.totalReturnRate)">
              {{ formatPercent(record.latestValuation?.totalReturnRate) }}
            </span>
          </template>
          <template v-else-if="column.key === 'source'">
            <a-tag>Mock</a-tag>
            <span class="muted">{{ record.latestValuation?.sourceCode || '估值来源待补充' }}</span>
          </template>
        </template>
      </a-table>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TableColumnsType } from 'ant-design-vue'
import {
  ApiOutlined,
  BarChartOutlined,
  ExperimentOutlined,
  FundProjectionScreenOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons-vue'
import { getDataSources } from '@/api/dataSources'
import { getInvestmentAnalysisReports } from '@/api/investment'
import { getMockPortfolios } from '@/api/mockPortfolios'
import { getProducts } from '@/api/products'
import { getBacktests } from '@/api/review'
import { getRiskChecks } from '@/api/risk'
import { getAiPrompts } from '@/api/prompts'
import type {
  DataSource,
  InvestmentAnalysisReport,
  MockPortfolio,
  PageResult,
  Product,
  RiskCheck,
} from '@/api/types'
import { optionColor, optionLabel, riskCheckResultOptions } from '@/utils/options'

const router = useRouter()
const loading = ref(false)
const sources = ref<DataSource[]>([])
const products = ref<Product[]>([])
const reports = ref<InvestmentAnalysisReport[]>([])
const portfolios = ref<MockPortfolio[]>([])
const riskChecks = ref<RiskCheck[]>([])
const promptTotal = ref(0)
const backtestTotal = ref(0)

const reportColumns: TableColumnsType<InvestmentAnalysisReport> = [
  { title: '主题 / 市场', key: 'theme', fixed: 'left', width: 220 },
  { title: '状态', dataIndex: 'status', width: 110 },
  { title: '质量门禁', key: 'quality', width: 180 },
  { title: '生成时间', dataIndex: 'generatedAt', width: 180 },
  { title: '动作', key: 'action', fixed: 'right', width: 100 },
]

const portfolioColumns: TableColumnsType<MockPortfolio> = [
  { title: '组合', key: 'portfolio', fixed: 'left', width: 260 },
  { title: '总资产', key: 'totalAsset', width: 180 },
  { title: '现金', dataIndex: ['latestValuation', 'cashBalance'], width: 140 },
  { title: '持仓市值', dataIndex: ['latestValuation', 'positionValue'], width: 140 },
  { title: '累计收益率', key: 'returnRate', width: 140 },
  { title: '标记 / 来源', key: 'source', width: 220 },
]

const loopNodes = [
  { title: '数据源', caption: '健康与质量', path: '/data-quality', icon: h(ApiOutlined) },
  { title: '产品画像', caption: '风险与 Mock 门禁', path: '/product-risk', icon: h(SafetyCertificateOutlined) },
  { title: '投资报告', caption: '质量门禁与证据', path: '/report-studio', icon: h(FundProjectionScreenOutlined) },
  { title: 'Prompt', caption: '版本与预览', path: '/prompt-lab', icon: h(ExperimentOutlined) },
  { title: 'Mock 交易', caption: '组合与订单', path: '/simulation', icon: h(ThunderboltOutlined) },
  { title: '回测', caption: '指标复盘', path: '/review-loop', icon: h(LineChartOutlined) },
  { title: '反馈', caption: '评分回流', path: '/review-loop', icon: h(BarChartOutlined) },
]

const avgQuality = computed(() => {
  const scores = sources.value
    .map((source) => source.latestQuality?.qualityScore)
    .filter((score): score is number => typeof score === 'number')
  if (!scores.length) return '-'
  return `${Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length * 100)}`
})

const enabledSources = computed(() => sources.value.filter((source) => source.enabled).length)
const mockTradableProducts = computed(() =>
  products.value.filter((product) => product.investmentProfile?.mockTradable).length,
)
const blockedRisks = computed(() =>
  riskChecks.value.filter((item) => ['REJECT', 'WARN'].includes(item.checkResult || '')).length,
)
const mockReturn = computed(() => {
  const returns = portfolios.value
    .map((portfolio) => portfolio.latestValuation?.totalReturnRate)
    .filter((value): value is number => typeof value === 'number')
  if (!returns.length) return '-'
  return formatPercent(returns.reduce((sum, value) => sum + value, 0) / returns.length)
})

const statistics = computed(() => [
  {
    title: '数据质量均分',
    value: avgQuality.value,
    caption: `${enabledSources.value} 个可用数据源`,
    icon: h(ApiOutlined),
    color: '#1677ff',
    background: '#e6f4ff',
  },
  {
    title: '可 Mock 产品',
    value: mockTradableProducts.value,
    caption: '受产品画像门禁控制',
    icon: h(SafetyCertificateOutlined),
    color: '#389e0d',
    background: '#f6ffed',
  },
  {
    title: '待复核 Prompt',
    value: promptTotal.value,
    caption: 'VALIDATING / DRAFT',
    icon: h(ExperimentOutlined),
    color: '#d46b08',
    background: '#fff7e6',
  },
  {
    title: '风险拦截',
    value: blockedRisks.value,
    caption: '最近高风险检查',
    icon: h(ThunderboltOutlined),
    color: '#cf1322',
    background: '#fff1f0',
  },
  {
    title: 'Mock 组合收益',
    value: mockReturn.value,
    caption: `${portfolios.value.length} 个模拟组合`,
    icon: h(LineChartOutlined),
    color: '#722ed1',
    background: '#f9f0ff',
  },
  {
    title: '回测记录',
    value: backtestTotal.value,
    caption: '策略与反馈闭环',
    icon: h(BarChartOutlined),
    color: '#08979c',
    background: '#e6fffb',
  },
])

const pageItems = <T,>(result: PromiseSettledResult<PageResult<T>>): T[] =>
  result.status === 'fulfilled' ? result.value.items : []
const pageTotal = <T,>(result: PromiseSettledResult<PageResult<T>>): number =>
  result.status === 'fulfilled' ? result.value.total : 0

const fetchDashboard = async () => {
  loading.value = true
  try {
    const [sourceResult, productResult, reportResult, portfolioResult, riskResult, promptResult, backtestResult] =
      await Promise.allSettled([
        getDataSources({ page: 1, size: 100 }),
        getProducts({ page: 0, size: 100 }),
        getInvestmentAnalysisReports({ page: 0, size: 6, sort: 'generatedAt', direction: 'desc' }),
        getMockPortfolios({ page: 1, size: 6, sort: 'updatedAt', direction: 'desc' }),
        getRiskChecks({ page: 1, size: 6, sort: 'createdAt', direction: 'desc' }),
        getAiPrompts({ page: 1, size: 1, status: 'VALIDATING' }),
        getBacktests({ page: 1, size: 1 }),
      ])

    sources.value = pageItems(sourceResult)
    products.value = pageItems(productResult)
    reports.value = pageItems(reportResult)
    portfolios.value = pageItems(portfolioResult)
    riskChecks.value = pageItems(riskResult)
    promptTotal.value = pageTotal(promptResult)
    backtestTotal.value = pageTotal(backtestResult)
  } finally {
    loading.value = false
  }
}

const reportGatePassed = (report: InvestmentAnalysisReport) =>
  report.dataQualityGate?.passed !== false && report.confidenceLevel !== 'UNUSABLE'
const reportQualityLevel = (report: InvestmentAnalysisReport) =>
  report.dataQualityGate?.qualityLevel || report.confidenceLevel || 'UNKNOWN'
const qualityColor = (level: string) => {
  if (['HIGH', 'USABLE'].includes(level)) return 'success'
  if (['MEDIUM', 'NORMAL'].includes(level)) return 'processing'
  if (['LOW', 'UNUSABLE'].includes(level)) return 'error'
  if (level === 'DEMO_ONLY') return 'default'
  return 'warning'
}
const returnClass = (value?: number) => {
  if (typeof value !== 'number') return ''
  return value >= 0 ? 'positive-text' : 'danger-text'
}
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatMoney = (value?: number, currency = 'CNY') =>
  typeof value === 'number' ? `${value.toLocaleString('zh-CN')} ${currency}` : '-'
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(fetchDashboard)
</script>

<style scoped>
.dashboard {
  width: 100%;
}

.metric-band {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  overflow: hidden;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.metric-item {
  display: flex;
  min-width: 0;
  gap: 12px;
  align-items: center;
  padding: 16px;
  border-right: 1px solid #f0f0f0;
}

.metric-item:last-child {
  border-right: 0;
}

.metric-icon {
  display: grid;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 6px;
  font-size: 18px;
}

.metric-item span,
.metric-item small {
  display: block;
  color: #8c8c8c;
}

.metric-item strong {
  display: block;
  margin: 2px 0;
  font-size: 22px;
  line-height: 1.2;
}

.loop-flow {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
}

.loop-node {
  position: relative;
  display: grid;
  min-height: 94px;
  padding: 14px 10px;
  color: #1f1f1f;
  text-align: center;
  cursor: pointer;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.loop-node:not(:last-child)::after {
  position: absolute;
  top: 50%;
  right: -10px;
  color: #bfbfbf;
  content: "→";
  transform: translateY(-50%);
}

.loop-node span {
  font-weight: 600;
}

.loop-node small {
  color: #8c8c8c;
}

.positive-text {
  color: #389e0d;
}

@media (max-width: 1200px) {
  .metric-band {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .loop-flow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .metric-band,
  .loop-flow {
    grid-template-columns: 1fr;
  }

  .loop-node::after {
    display: none;
  }
}
</style>
