<template>
  <BusinessPageShell
    title="Overview 投资驾驶舱"
    description="把数据源、产品画像、投资报告、Prompt、Mock 组合、回测、反馈与风控审计串成一条可追踪的投资闭环。"
    :endpoints="[
      endpoints.dataSource.list,
      endpoints.product.list,
      endpoints.report.list,
      endpoints.portfolio.mine,
      endpoints.risk.checks,
    ]"
    :icon="DashboardOutlined"
    :status-text="statusText"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="15">
          <a-card class="cockpit-card" :bordered="false" title="自动化投资闭环">
            <div class="mini-flow">
              <RouterLink
                v-for="node in flowNodes"
                :key="node.path"
                class="mini-flow__node"
                :to="node.path"
              >
                {{ node.label }}
              </RouterLink>
            </div>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="9">
          <a-card class="cockpit-card" :bordered="false" title="最近风控拦截">
            <a-list :data-source="riskChecks.slice(0, 4)" size="small">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :title="item.reasonCode || item.targetType || '风险检查'">
                    <template #description>
                      {{ item.reasonMessage || '后端未返回原因说明' }}
                    </template>
                  </a-list-item-meta>
                  <a-tag :color="riskColor(item.checkResult)">
                    {{ item.checkResult || '-' }}
                  </a-tag>
                </a-list-item>
              </template>
              <template #empty>
                <a-empty description="暂无风控拦截记录" />
              </template>
            </a-list>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="数据源健康">
            <a-table
              size="small"
              row-key="bizId"
              :pagination="false"
              :data-source="dataSources.slice(0, 5)"
              :columns="dataSourceColumns"
            />
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="投资报告门禁">
            <a-table
              size="small"
              row-key="bizId"
              :pagination="false"
              :data-source="reports.slice(0, 5)"
              :columns="reportColumns"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'gate'">
                  <a-tag :color="reportQualityGatePassed(record) ? 'success' : 'warning'">
                    {{ reportQualityGatePassed(record) ? '可进入动作' : '降级/补数' }}
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
import { RouterLink } from 'vue-router'
import { DashboardOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listDataSources } from '@/entities/data-source/api'
import type { DataSourceDto } from '@/entities/data-source/model'
import { summarizeDataSources } from '@/entities/data-source/adapter'
import { listProducts } from '@/entities/product/api'
import type { ProductDto } from '@/entities/product/model'
import { summarizeProducts } from '@/entities/product/adapter'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { reportQualityGatePassed, summarizeReports } from '@/entities/report/adapter'
import { listMyMockPortfolios } from '@/entities/portfolio/api'
import type { MockPortfolioDto } from '@/entities/portfolio/model'
import { listRiskChecks } from '@/entities/risk/api'
import type { RiskCheckDto } from '@/entities/risk/model'
import { formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const dataSources = ref<DataSourceDto[]>([])
const products = ref<ProductDto[]>([])
const reports = ref<InvestmentAnalysisReportDto[]>([])
const portfolios = ref<MockPortfolioDto[]>([])
const riskChecks = ref<RiskCheckDto[]>([])

const flowNodes = [
  { label: '数据源', path: '/data-quality' },
  { label: '产品画像', path: '/product-risk' },
  { label: '投资报告', path: '/report-studio' },
  { label: 'Prompt', path: '/prompt-lab' },
  { label: 'Mock 交易', path: '/simulation' },
  { label: '回测反馈', path: '/review-loop' },
  { label: '风控审计', path: '/risk-audit' },
]

const statusText = computed(() => (errorMessage.value ? 'DEGRADED' : 'ONLINE'))

const metrics = computed(() => {
  const dataSummary = summarizeDataSources(dataSources.value)
  const productSummary = summarizeProducts(products.value)
  const reportSummary = summarizeReports(reports.value)
  return [
    { label: '数据源', value: dataSummary.total, hint: `启用 ${dataSummary.enabled}` },
    { label: '平均质量', value: formatPercent(dataSummary.averageQuality), hint: `降级 ${dataSummary.degraded}` },
    { label: 'Mock 产品', value: productSummary.mockTradable, hint: `产品池 ${productSummary.total}` },
    { label: '报告门禁', value: reportSummary.blocked, hint: `需补数 / 共 ${reportSummary.total}` },
    { label: 'Mock 组合', value: portfolios.value.length, hint: '真实接口返回' },
    { label: '风控记录', value: riskChecks.value.length, hint: '最近扫描' },
    { label: '高风险产品', value: productSummary.highRisk, hint: 'riskLevel >= 4' },
    { label: '报告成功', value: reportSummary.succeeded, hint: `不可用 ${reportSummary.unusable}` },
  ]
})

const dataSourceColumns = [
  { title: '来源', dataIndex: 'sourceName', key: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType', key: 'sourceType' },
  { title: '等级', dataIndex: 'trustLevel', key: 'trustLevel' },
  { title: '质量', key: 'quality', customRender: ({ record }: { record: DataSourceDto }) => formatPercent(record.latestQuality?.qualityScore) },
]

const reportColumns = [
  { title: '主题', dataIndex: 'themeName', key: 'themeName' },
  { title: '市场', dataIndex: 'marketScope', key: 'marketScope' },
  { title: '可信度', dataIndex: 'confidenceLevel', key: 'confidenceLevel' },
  { title: '门禁', key: 'gate' },
]

const riskColor = (result?: string) => {
  if (result === 'REJECT') return 'error'
  if (result === 'WARN') return 'warning'
  return 'success'
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [sourcePage, productPage, reportPage, portfolioPage, riskPage] = await Promise.all([
      listDataSources({ page: 1, size: 20 }),
      listProducts({ page: 1, size: 20 }),
      listInvestmentReports({ page: 1, size: 20 }),
      listMyMockPortfolios({ page: 1, size: 20 }),
      listRiskChecks({ page: 1, size: 20 }),
    ])
    dataSources.value = sourcePage.items || []
    products.value = productPage.items || []
    reports.value = reportPage.items || []
    portfolios.value = portfolioPage.items || []
    riskChecks.value = riskPage.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
