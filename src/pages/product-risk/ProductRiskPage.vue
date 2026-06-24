<template>
  <BusinessPageShell
    title="Product & Risk 产品风险"
    description="管理产品池、风险画像、主题关系、数据质量与 Mock 可交易门禁；风险不匹配时不绕过后端校验。"
    :endpoints="[endpoints.product.list, endpoints.product.detail, endpoints.product.saveInvestmentProfile]"
    :icon="FundProjectionScreenOutlined"
    :status-text="errorMessage ? 'PRODUCT WAITING' : 'RISK RADAR'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && products.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="产品池与 Mock 门禁">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="products"
          :columns="columns"
          :pagination="{ pageSize: 10 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'productType'">
              <a-tag>{{ optionLabel(productTypeOptions, record.productType) }}</a-tag>
            </template>
            <template v-if="column.key === 'tradeStatus'">
              <a-tag :color="optionColor(tradeStatusOptions, record.tradeStatus)">
                {{ optionLabel(tradeStatusOptions, record.tradeStatus) }}
              </a-tag>
            </template>
            <template v-if="column.key === 'quality'">
              {{ formatPercent(record.investmentProfile?.dataQualityScore ?? record.dataQualityScore) }}
            </template>
            <template v-if="column.key === 'mockGate'">
              <a-tooltip :title="productMockGateText(record)">
                <a-tag :color="isProductMockTradable(record) ? 'success' : 'warning'">
                  {{ isProductMockTradable(record) ? '可 Mock' : '不可 Mock' }}
                </a-tag>
              </a-tooltip>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { FundProjectionScreenOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listProducts } from '@/entities/product/api'
import type { ProductDto } from '@/entities/product/model'
import { isProductMockTradable, productMockGateText, summarizeProducts } from '@/entities/product/adapter'
import { productTypeOptions, tradeStatusOptions } from '@/entities/product/dictionary'
import { optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const products = ref<ProductDto[]>([])

const summary = computed(() => summarizeProducts(products.value))
const metrics = computed(() => [
  { label: '产品总数', value: summary.value.total, hint: '产品池接口' },
  { label: '可交易', value: summary.value.tradable, hint: 'tradeStatus=TRADABLE' },
  { label: '可 Mock', value: summary.value.mockTradable, hint: '画像门禁通过' },
  { label: '平均质量', value: formatPercent(summary.value.averageQuality), hint: '数据质量分' },
])

const columns = [
  { title: '产品名称', dataIndex: 'productName', key: 'productName' },
  { title: '代码', dataIndex: 'productCode', key: 'productCode' },
  { title: '类型', key: 'productType' },
  { title: '市场', dataIndex: 'marketCode', key: 'marketCode' },
  { title: '风险等级', dataIndex: 'riskLevel', key: 'riskLevel' },
  { title: '交易状态', key: 'tradeStatus' },
  { title: '质量分', key: 'quality' },
  { title: 'Mock 门禁', key: 'mockGate' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listProducts({ page: 1, size: 50 })
    products.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
