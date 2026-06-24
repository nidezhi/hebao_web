<template>
  <BusinessPageShell
    title="DZCOM 投资业务驾驶舱"
    eyebrow="INVESTMENT COMMAND CENTER"
    description="这里是业务入口，不是开发控制台：聚合数据质量、产品风险、报告门禁、Mock 组合、复盘反馈和风控审计。"
    :endpoints="[
      endpoints.dataSource.list,
      endpoints.product.list,
      endpoints.report.list,
      endpoints.portfolio.mine,
      endpoints.risk.checks,
    ]"
    :icon="DashboardOutlined"
    :status-text="errorMessage ? 'DEGRADED' : 'BUSINESS ONLINE'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="15">
          <a-card class="cockpit-card" :bordered="false" title="业务闭环导航">
            <div class="mini-flow">
              <RouterLink v-for="node in flowNodes" :key="node.path" class="mini-flow__node" :to="node.path">
                {{ node.label }}
              </RouterLink>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="9">
          <a-card class="cockpit-card" :bordered="false" title="今日重点">
            <a-list size="small" :data-source="focusItems">
              <template #renderItem="{ item }">
                <a-list-item>{{ item }}</a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { DashboardOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listDataSources } from '@/entities/data-source/api'
import { summarizeDataSources, type DataSourceHealthSummary } from '@/entities/data-source/adapter'
import { listProducts } from '@/entities/product/api'
import { summarizeProducts } from '@/entities/product/adapter'
import { listInvestmentReports } from '@/entities/report/api'
import { summarizeReports } from '@/entities/report/adapter'
import { listMyMockPortfolios } from '@/entities/portfolio/api'
import { listRiskChecks } from '@/entities/risk/api'
import { formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const dataSummary = ref<DataSourceHealthSummary>({ total: 0, enabled: 0, degraded: 0 })
const productSummary = ref({ total: 0, tradable: 0, mockTradable: 0, highRisk: 0, averageQuality: undefined as number | undefined })
const reportSummary = ref({ total: 0, succeeded: 0, blocked: 0, unusable: 0 })
const portfolioCount = ref(0)
const riskCount = ref(0)

const metrics = computed(() => [
  { label: '数据质量', value: formatPercent(dataSummary.value.averageQuality), hint: `${dataSummary.value.enabled}/${dataSummary.value.total} 来源启用` },
  { label: 'Mock 标的', value: productSummary.value.mockTradable, hint: `产品池 ${productSummary.value.total}` },
  { label: '报告门禁', value: reportSummary.value.blocked, hint: `需补数 / 共 ${reportSummary.value.total}` },
  { label: '风控审计', value: riskCount.value, hint: '最近风险检查' },
  { label: 'Mock 组合', value: portfolioCount.value, hint: '当前用户组合' },
  { label: '高风险产品', value: productSummary.value.highRisk, hint: 'riskLevel >= 4' },
  { label: '成功报告', value: reportSummary.value.succeeded, hint: '可解释报告' },
  { label: '降级来源', value: dataSummary.value.degraded, hint: 'LOW / DEMO_ONLY' },
])

const flowNodes = [
  { label: '数据质量', path: '/data-quality' },
  { label: '采集编排', path: '/data-ingestion' },
  { label: '产品风险', path: '/product-risk' },
  { label: '投资报告', path: '/report-studio' },
  { label: 'Prompt 实验室', path: '/prompt-lab' },
  { label: '模拟交易', path: '/simulation' },
  { label: '复盘闭环', path: '/review-loop' },
  { label: '风控审计', path: '/risk-audit' },
]

const focusItems = computed(() => [
  dataSummary.value.degraded > 0 ? `有 ${dataSummary.value.degraded} 个数据源处于降级状态，优先补数。` : '数据源无显式降级记录。',
  reportSummary.value.blocked > 0 ? `有 ${reportSummary.value.blocked} 份报告被质量门禁拦截。` : '报告质量门禁暂无阻断。',
  productSummary.value.highRisk > 0 ? `有 ${productSummary.value.highRisk} 个高风险产品，需要风险匹配提示。` : '产品风险雷达暂无高风险聚集。',
])

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [sourcePage, productPage, reportPage, portfolioPage, riskPage] = await Promise.all([
      listDataSources({ page: 1, size: 50 }),
      listProducts({ page: 1, size: 50 }),
      listInvestmentReports({ page: 1, size: 50 }),
      listMyMockPortfolios({ page: 1, size: 20 }),
      listRiskChecks({ page: 1, size: 20 }),
    ])
    dataSummary.value = summarizeDataSources(sourcePage.items || [])
    productSummary.value = summarizeProducts(productPage.items || [])
    reportSummary.value = summarizeReports(reportPage.items || [])
    portfolioCount.value = portfolioPage.items?.length || 0
    riskCount.value = riskPage.items?.length || 0
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
