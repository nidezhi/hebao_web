<template>
  <BusinessPageShell
    title="Simulation 模拟交易"
    description="查看 Mock 组合、现金、持仓市值、估值来源与收益曲线入口；收益必须标记为 Mock 结果。"
    :endpoints="[endpoints.portfolio.mine, endpoints.portfolio.detail, endpoints.portfolio.buy, endpoints.portfolio.sell]"
    :icon="RocketOutlined"
    :status-text="errorMessage ? 'MOCK WAITING' : 'SIMULATION'"
    risk-notice="本页面所有组合与收益均为 Mock 模拟结果，不代表真实账户资产或真实投资收益。"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && portfolios.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="我的 Mock 组合">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="portfolios"
          :columns="columns"
          :pagination="{ pageSize: 10 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'totalAsset'">
              {{ formatMoney(record.latestValuation?.totalAsset, record.baseCurrency) }}
            </template>
            <template v-if="column.key === 'cash'">
              {{ formatMoney(record.latestValuation?.cashBalance, record.baseCurrency) }}
            </template>
            <template v-if="column.key === 'returnRate'">
              <a-tag :color="Number(record.latestValuation?.totalReturnRate || 0) >= 0 ? 'success' : 'error'">
                {{ formatPercent(record.latestValuation?.totalReturnRate) }}
              </a-tag>
            </template>
            <template v-if="column.key === 'valuationTime'">
              {{ formatDateTime(record.latestValuation?.valuationTime) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RocketOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listMyMockPortfolios } from '@/entities/portfolio/api'
import type { MockPortfolioDto } from '@/entities/portfolio/model'
import { formatDateTime, formatMoney, formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const portfolios = ref<MockPortfolioDto[]>([])

const totalAsset = computed(() =>
  portfolios.value.reduce((sum, item) => sum + (item.latestValuation?.totalAsset || 0), 0),
)
const totalCash = computed(() =>
  portfolios.value.reduce((sum, item) => sum + (item.latestValuation?.cashBalance || 0), 0),
)
const metrics = computed(() => [
  { label: 'Mock 组合', value: portfolios.value.length, hint: '当前用户可见' },
  { label: '总资产', value: formatMoney(totalAsset.value), hint: '估值汇总' },
  { label: '现金余额', value: formatMoney(totalCash.value), hint: '现金不足由后端拦截' },
  { label: '持仓数', value: portfolios.value.reduce((sum, item) => sum + (item.positions?.length || 0), 0), hint: '组合持仓' },
])

const columns = [
  { title: '组合名称', dataIndex: 'portfolioName', key: 'portfolioName' },
  { title: '组合编号', dataIndex: 'portfolioNo', key: 'portfolioNo' },
  { title: '总资产', key: 'totalAsset' },
  { title: '现金', key: 'cash' },
  { title: '收益率', key: 'returnRate' },
  { title: '估值来源', key: 'sourceCode', customRender: ({ record }: { record: MockPortfolioDto }) => record.latestValuation?.sourceCode || '-' },
  { title: '估值时间', key: 'valuationTime' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listMyMockPortfolios({ page: 1, size: 50 })
    portfolios.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
