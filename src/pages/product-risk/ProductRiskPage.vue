<template>
  <BusinessPageShell
    title="Product & Risk 产品风险"
    description="把产品池、画像、行情、主题关系和 Mock 门禁放在一个投资对象详情里；风险先于交易。"
    :endpoints="[endpoints.product.list, endpoints.product.detail, endpoints.marketQuote.history, endpoints.risk.checks]"
    :icon="FundOutlined"
    status-text="RISK FIRST"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="10">
          <a-card class="page-card" :bordered="false" title="产品池">
            <a-input-search
              v-model:value="keyword"
              placeholder="搜索产品代码 / 名称"
              enter-button
              @search="loadProducts"
            />
            <a-table
              class="mt-12"
              row-key="bizId"
              size="small"
              :pagination="{ pageSize: 10 }"
              :data-source="products"
              :columns="columns"
              @row="rowEvents"
            />
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="14">
          <a-card class="page-card" :bordered="false" title="产品详情 / 风险画像 / Mock 门禁">
            <EmptyEvidence v-if="!selectedProduct" description="请选择一个产品查看画像和门禁。" />
            <a-space v-else direction="vertical" :size="16" class="full-width">
              <a-descriptions bordered size="small" :column="2">
                <a-descriptions-item label="产品">{{ selectedProduct.productName }}</a-descriptions-item>
                <a-descriptions-item label="代码">{{ selectedProduct.productCode }}</a-descriptions-item>
                <a-descriptions-item label="类型">
                  <StatusTag :value="selectedProduct.productType" :options="productTypeOptions" />
                </a-descriptions-item>
                <a-descriptions-item label="交易状态">
                  <StatusTag :value="selectedProduct.tradeStatus" :options="tradeStatusOptions" />
                </a-descriptions-item>
                <a-descriptions-item label="风险等级">R{{ selectedProduct.riskLevel ?? '-' }}</a-descriptions-item>
                <a-descriptions-item label="最新净值">{{ selectedProduct.latestNav ?? '-' }}</a-descriptions-item>
              </a-descriptions>

              <a-row :gutter="[16, 16]">
                <a-col :xs="24" :lg="8">
                  <ScoreGauge :score="selectedProduct.dataQualityScore ?? selectedProduct.investmentProfile?.dataQualityScore" label="数据质量" />
                </a-col>
                <a-col :xs="24" :lg="16">
                  <a-alert
                    :type="isProductMockTradable(selectedProduct) ? 'success' : 'warning'"
                    show-icon
                    :message="productMockGateText(selectedProduct)"
                  />
                  <div class="relation-bars mt-12">
                    <div v-for="relation in selectedProduct.themeRelations || []" :key="relation.relationCode" class="relation-bar">
                      <span>{{ relation.relationName || relation.relationCode }}</span>
                      <a-progress :percent="Math.round((relation.relationWeight || 0) * 100)" />
                    </div>
                  </div>
                </a-col>
              </a-row>

              <BusinessChart
                title="行情 / 净值曲线"
                unit="latestNav / closePrice"
                :empty="quoteHistory.length === 0"
                :option="quoteOption"
              />

              <a-card size="small" title="关联风控审计">
                <a-list :data-source="riskChecks" size="small">
                  <template #renderItem="{ item }">
                    <a-list-item>
                      <a-list-item-meta :title="item.ruleCode || item.reasonCode" :description="item.reasonMessage || item.detail" />
                      <RiskReasonTag :reason-code="item.reasonCode" :risk-level="item.riskLevel" />
                    </a-list-item>
                  </template>
                  <template #empty><EmptyEvidence description="暂无该产品关联风控记录。" /></template>
                </a-list>
              </a-card>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { FundOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatPercent } from '@/shared/utils/format'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import RiskReasonTag from '@/shared/components/visual/RiskReasonTag.vue'
import ScoreGauge from '@/shared/components/visual/ScoreGauge.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { getProductDetail, listProductQuoteHistory, listProducts } from '@/entities/product/api'
import { isProductMockTradable, productMockGateText, summarizeProducts } from '@/entities/product/adapter'
import { productTypeOptions, tradeStatusOptions } from '@/entities/product/dictionary'
import type { ProductDto } from '@/entities/product/model'
import { listRiskChecks } from '@/entities/risk/api'
import type { RiskCheckDto } from '@/entities/risk/model'

const loading = ref(false)
const errorMessage = ref('')
const keyword = ref('')
const products = ref<ProductDto[]>([])
const selectedProduct = ref<ProductDto>()
const quoteHistory = ref<Record<string, unknown>[]>([])
const riskChecks = ref<RiskCheckDto[]>([])

const summary = computed(() => summarizeProducts(products.value))
const metrics = computed(() => [
  { label: '产品总数', value: summary.value.total, hint: `可交易 ${summary.value.tradable}` },
  { label: '可 Mock', value: summary.value.mockTradable, hint: '画像允许' },
  { label: '高风险产品', value: summary.value.highRisk, hint: 'R4/R5' },
  { label: '平均质量', value: formatPercent(summary.value.averageQuality), hint: '产品质量分' },
])

const quoteOption = computed(() => ({
  tooltip: { trigger: 'axis' },
  grid: { left: 46, right: 20, top: 24, bottom: 36 },
  xAxis: { type: 'category', data: quoteHistory.value.map((item) => String(item.quoteTime || item.valuationTime || item.createdAt || '')) },
  yAxis: { type: 'value' },
  series: [{
    name: '净值',
    type: 'line',
    data: quoteHistory.value.map((item) => Number(item.nav || item.closePrice || item.price || 0)),
  }],
}))

const columns = [
  { title: '代码', dataIndex: 'productCode' },
  { title: '名称', dataIndex: 'productName' },
  { title: '类型', customRender: ({ record }: { record: ProductDto }) => h(StatusTag, { value: record.productType, options: productTypeOptions }) },
  { title: '交易', customRender: ({ record }: { record: ProductDto }) => h(StatusTag, { value: record.tradeStatus, options: tradeStatusOptions }) },
  { title: '质量', customRender: ({ record }: { record: ProductDto }) => formatPercent(record.dataQualityScore) },
  { title: '更新时间', customRender: ({ record }: { record: ProductDto }) => formatDateTime(record.latestQuoteTime) },
]

const rowEvents = (record: ProductDto) => ({ onClick: () => openProduct(record) })

const openProduct = async (product: ProductDto) => {
  selectedProduct.value = product
  quoteHistory.value = []
  riskChecks.value = []
  try {
    const [detail, history, risks] = await Promise.all([
      getProductDetail(product.bizId),
      listProductQuoteHistory({ productBizId: product.bizId, quoteInterval: '1D', limit: 120 }),
      listRiskChecks({ businessType: 'PRODUCT', businessBizId: product.bizId, page: 1, size: 10, sort: 'checkedAt', direction: 'desc' }),
    ])
    selectedProduct.value = detail
    quoteHistory.value = history || []
    riskChecks.value = risks.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '产品详情加载失败'
  }
}

const loadProducts = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listProducts({ keyword: keyword.value || undefined, page: 1, size: 50, sort: 'updatedAt', direction: 'desc' })
    products.value = page.items || []
    if (!selectedProduct.value && products.value[0]) await openProduct(products.value[0])
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '产品列表加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(loadProducts)
</script>
