<template>
  <a-card class="page-card" :bordered="false">
    <div class="toolbar">
      <div class="toolbar-filters">
        <a-input-search
          v-model:value="query.keyword"
          allow-clear
          placeholder="产品代码或名称"
          style="width: 220px"
          @search="search"
        />
        <a-select
          v-model:value="query.productType"
          allow-clear
          placeholder="产品类型"
          style="width: 120px"
          :options="productTypeOptions"
          @change="search"
        />
        <a-select
          v-model:value="query.tradeStatus"
          allow-clear
          placeholder="交易状态"
          style="width: 130px"
          :options="tradeStatusOptions"
          @change="search"
        />
        <a-input v-model:value="query.currency" allow-clear placeholder="币种" style="width: 100px" />
        <a-input-number
          v-model:value="query.riskLevel"
          :min="0"
          placeholder="风险等级"
          style="width: 120px"
        />
        <a-button type="primary" ghost @click="search">查询</a-button>
        <a-button @click="resetFilters">重置</a-button>
      </div>
      <a-button type="primary" @click="openProductModal()">
        <template #icon><plus-outlined /></template>
        新建产品
      </a-button>
    </div>

    <a-table
      row-key="bizId"
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :pagination="pagination"
      :scroll="{ x: 1200 }"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'product'">
          <a-button type="link" class="product-link" @click="openDetail(record)">
            <strong>{{ record.productCode }}</strong>
            <span>{{ record.productName }}</span>
          </a-button>
        </template>
        <template v-else-if="column.key === 'productType'">
          {{ optionLabel(productTypeOptions, record.productType) }}
        </template>
        <template v-else-if="column.key === 'tradeStatus'">
          <a-tag :color="optionColor(tradeStatusOptions, record.tradeStatus)">
            {{ optionLabel(tradeStatusOptions, record.tradeStatus) }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'dataQuality'">
          <a-progress
            size="small"
            :percent="Math.round((record.investmentProfile?.dataQualityScore || 0) * 100)"
            :status="(record.investmentProfile?.dataQualityScore || 0) < 0.6 ? 'exception' : 'normal'"
          />
        </template>
        <template v-else-if="column.key === 'mockTradable'">
          <a-tooltip :title="mockTradableText(record)">
            <a-tag :color="record.investmentProfile?.mockTradable ? 'success' : 'error'">
              {{ record.investmentProfile?.mockTradable ? '可 Mock' : '不可 Mock' }}
            </a-tag>
          </a-tooltip>
        </template>
        <template v-else-if="column.key === 'minInvestAmount'">
          {{ formatNumber(record.minInvestAmount) }} {{ record.currency }}
        </template>
        <template v-else-if="column.key === 'feeRate'">
          {{ formatPercent(record.feeRate) }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-space>
            <a-button type="link" size="small" @click="openProductModal(record)">编辑</a-button>
            <a-dropdown>
              <a-button type="link" size="small">更多 <down-outlined /></a-button>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="openDetail(record)">详情与行情</a-menu-item>
                  <a-menu-item @click="openStatus(record)">变更交易状态</a-menu-item>
                  <a-menu-divider />
                  <a-menu-item danger @click="confirmDelete(record)">删除产品</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-space>
        </template>
      </template>
    </a-table>
  </a-card>

  <a-modal
    v-model:open="productModalVisible"
    :title="editingProduct ? '编辑产品' : '新建产品'"
    width="780px"
    :confirm-loading="saving"
    @ok="submitProduct"
  >
    <a-form ref="productFormRef" :model="productForm" :rules="productRules" layout="vertical">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12">
          <a-form-item label="产品代码" name="productCode">
            <a-input v-model:value="productForm.productCode" :disabled="Boolean(editingProduct)" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item label="产品名称" name="productName">
            <a-input v-model:value="productForm.productName" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="产品类型" name="productType">
            <a-select
              v-model:value="productForm.productType"
              :disabled="Boolean(editingProduct)"
              :options="productTypeOptions"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="市场代码" name="marketCode">
            <a-input v-model:value="productForm.marketCode" :disabled="Boolean(editingProduct)" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="币种" name="currency">
            <a-input v-model:value="productForm.currency" :disabled="Boolean(editingProduct)" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="风险等级" name="riskLevel">
            <a-input-number v-model:value="productForm.riskLevel" :min="0" class="full-width" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="最低投资金额" name="minInvestAmount">
            <a-input-number v-model:value="productForm.minInvestAmount" :min="0" class="full-width" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="8">
          <a-form-item label="费率" name="feeRate">
            <a-input-number v-model:value="productForm.feeRate" :min="0" :step="0.0001" class="full-width" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item label="金额步长" name="amountStep">
            <a-input-number v-model:value="productForm.amountStep" :min="0" class="full-width" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item label="数量步长" name="quantityStep">
            <a-input-number v-model:value="productForm.quantityStep" :min="0" class="full-width" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item label="上市日期" name="listingDate">
            <a-input v-model:value="productForm.listingDate" type="date" />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item label="退市日期" name="delistingDate">
            <a-input v-model:value="productForm.delistingDate" type="date" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="产品描述" name="description">
            <a-textarea v-model:value="productForm.description" :rows="3" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>

  <a-modal
    v-model:open="statusModalVisible"
    title="变更交易状态"
    :confirm-loading="saving"
    @ok="submitStatus"
  >
    <a-form layout="vertical">
      <a-form-item label="交易状态">
        <a-select v-model:value="selectedStatus" :options="tradeStatusOptions" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-drawer v-model:open="detailVisible" title="产品详情与行情" width="760">
    <a-spin :spinning="detailLoading">
      <template v-if="currentProduct">
        <a-page-header
          :title="currentProduct.productName"
          :sub-title="currentProduct.productCode"
          style="padding: 0 0 16px"
        >
          <template #tags>
            <a-tag :color="optionColor(tradeStatusOptions, currentProduct.tradeStatus)">
              {{ optionLabel(tradeStatusOptions, currentProduct.tradeStatus) }}
            </a-tag>
          </template>
        </a-page-header>

        <a-tabs v-model:active-key="detailTab">
          <a-tab-pane key="base" tab="基本资料">
            <a-alert
              v-if="currentProduct.investmentProfile?.mockTradable === false"
              show-icon
              type="warning"
              class="risk-alert"
              :message="mockTradableText(currentProduct)"
            />
            <a-descriptions bordered :column="2" size="small">
              <a-descriptions-item label="产品编号">{{ currentProduct.productNo }}</a-descriptions-item>
              <a-descriptions-item label="产品类型">
                {{ optionLabel(productTypeOptions, currentProduct.productType) }}
              </a-descriptions-item>
              <a-descriptions-item label="市场">{{ currentProduct.marketCode }}</a-descriptions-item>
              <a-descriptions-item label="币种">{{ currentProduct.currency }}</a-descriptions-item>
              <a-descriptions-item label="风险等级">{{ currentProduct.riskLevel ?? '-' }}</a-descriptions-item>
              <a-descriptions-item label="最低投资">
                {{ formatNumber(currentProduct.minInvestAmount) }}
              </a-descriptions-item>
              <a-descriptions-item label="金额步长">{{ currentProduct.amountStep }}</a-descriptions-item>
              <a-descriptions-item label="数量步长">{{ currentProduct.quantityStep }}</a-descriptions-item>
              <a-descriptions-item label="费率">{{ formatPercent(currentProduct.feeRate) }}</a-descriptions-item>
              <a-descriptions-item label="上市日期">{{ currentProduct.listingDate || '-' }}</a-descriptions-item>
              <a-descriptions-item label="产品描述" :span="2">
                {{ currentProduct.description || '-' }}
              </a-descriptions-item>
            </a-descriptions>
          </a-tab-pane>

          <a-tab-pane key="risk" tab="投资画像">
            <a-row :gutter="[16, 16]">
              <a-col :xs="24" :sm="8">
                <a-statistic title="画像质量分" :value="profilePercent" suffix="%" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <a-statistic
                  title="最大回撤"
                  :value="formatPercentNumber(currentProduct.investmentProfile?.maxDrawdown)"
                />
              </a-col>
              <a-col :xs="24" :sm="8">
                <a-statistic
                  title="建议持有天数"
                  :value="currentProduct.investmentProfile?.minHoldingDays ?? '-'"
                />
              </a-col>
            </a-row>
            <a-descriptions bordered :column="2" size="small" class="risk-descriptions">
              <a-descriptions-item label="资产类别">
                {{ currentProduct.investmentProfile?.assetClass || currentProduct.productType }}
              </a-descriptions-item>
              <a-descriptions-item label="适配风险等级">
                {{ currentProduct.investmentProfile?.suitableRiskLevel ?? '-' }}
              </a-descriptions-item>
              <a-descriptions-item label="波动等级">
                {{ currentProduct.investmentProfile?.volatilityLevel || '-' }}
              </a-descriptions-item>
              <a-descriptions-item label="流动性">
                {{ currentProduct.investmentProfile?.liquidityLevel || '-' }}
              </a-descriptions-item>
              <a-descriptions-item label="Mock 门禁">
                <a-tag :color="currentProduct.investmentProfile?.mockTradable ? 'success' : 'error'">
                  {{ currentProduct.investmentProfile?.mockTradable ? '允许' : '禁止' }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="交易备注">
                {{ currentProduct.investmentProfile?.tradingNotes || '-' }}
              </a-descriptions-item>
              <a-descriptions-item label="风险摘要" :span="2">
                {{ currentProduct.investmentProfile?.riskSummary || '暂无风险摘要' }}
              </a-descriptions-item>
            </a-descriptions>
          </a-tab-pane>

          <a-tab-pane key="relations" tab="主题关系">
            <a-table
              row-key="relationCode"
              size="small"
              :pagination="false"
              :columns="relationColumns"
              :data-source="currentProduct.themeRelations || []"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'relationWeight'">
                  <a-progress
                    size="small"
                    :percent="Math.round((record.relationWeight || 0) * 100)"
                  />
                </template>
              </template>
            </a-table>
          </a-tab-pane>

          <a-tab-pane key="attributes" tab="扩展属性">
            <div class="section-actions">
              <a-button type="primary" size="small" @click="openAttributeModal">
                新增 / 覆盖属性
              </a-button>
            </div>
            <a-table
              row-key="key"
              size="small"
              :pagination="false"
              :columns="attributeColumns"
              :data-source="currentProduct.attributes || []"
            />
          </a-tab-pane>

          <a-tab-pane key="quotes" tab="行情">
            <div class="section-actions">
              <a-space wrap>
                <a-input v-model:value="quoteQuery.from" type="datetime-local" />
                <span>至</span>
                <a-input v-model:value="quoteQuery.to" type="datetime-local" />
                <a-input v-model:value="quoteQuery.interval" placeholder="周期，如 1d" style="width: 120px" />
                <a-button @click="loadQuotes">查询历史</a-button>
                <a-button type="primary" @click="openQuoteModal">写入行情</a-button>
              </a-space>
            </div>

            <a-card v-if="latestQuote" size="small" title="最新有效行情" class="quote-card">
              <a-row :gutter="[16, 12]">
                <a-col :span="6"><a-statistic title="收盘价" :value="latestQuote.closePrice" /></a-col>
                <a-col :span="6"><a-statistic title="最高价" :value="latestQuote.highPrice ?? '-'" /></a-col>
                <a-col :span="6"><a-statistic title="最低价" :value="latestQuote.lowPrice ?? '-'" /></a-col>
                <a-col :span="6"><a-statistic title="成交量" :value="latestQuote.volume ?? '-'" /></a-col>
              </a-row>
            </a-card>

            <a-table
              row-key="bizId"
              size="small"
              :loading="quotesLoading"
              :pagination="false"
              :scroll="{ x: 900 }"
              :columns="quoteColumns"
              :data-source="quotes"
            />
          </a-tab-pane>
        </a-tabs>
      </template>
    </a-spin>
  </a-drawer>

  <a-modal
    v-model:open="attributeModalVisible"
    title="新增或覆盖扩展属性"
    :confirm-loading="saving"
    @ok="submitAttribute"
  >
    <a-form ref="attributeFormRef" :model="attributeForm" :rules="attributeRules" layout="vertical">
      <a-form-item label="属性键" name="key"><a-input v-model:value="attributeForm.key" /></a-form-item>
      <a-form-item label="值类型" name="valueType">
        <a-input v-model:value="attributeForm.valueType" placeholder="例如 STRING、NUMBER、JSON" />
      </a-form-item>
      <a-form-item label="JSON 值" name="jsonValue">
        <a-textarea v-model:value="attributeForm.jsonValue" :rows="4" placeholder='例如 "value"、123 或 {"key":"value"}' />
      </a-form-item>
      <a-form-item label="生效日期"><a-input v-model:value="attributeForm.effectiveDate" type="date" /></a-form-item>
      <a-form-item label="来源代码"><a-input v-model:value="attributeForm.sourceCode" /></a-form-item>
    </a-form>
  </a-modal>

  <a-modal
    v-model:open="quoteModalVisible"
    title="写入或修正行情点"
    width="720px"
    :confirm-loading="saving"
    @ok="submitQuote"
  >
    <a-form ref="quoteFormRef" :model="quoteForm" :rules="quoteRules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="8"><a-form-item label="来源代码" name="sourceCode"><a-input v-model:value="quoteForm.sourceCode" /></a-form-item></a-col>
        <a-col :span="8"><a-form-item label="周期" name="interval"><a-input v-model:value="quoteForm.interval" placeholder="1m / 1h / 1d" /></a-form-item></a-col>
        <a-col :span="8"><a-form-item label="状态" name="status"><a-select v-model:value="quoteForm.status" :options="quoteStatusOptions" /></a-form-item></a-col>
        <a-col :span="24"><a-form-item label="行情时间" name="quoteTime"><a-input v-model:value="quoteForm.quoteTime" type="datetime-local" /></a-form-item></a-col>
        <a-col v-for="field in quoteNumberFields" :key="field.key" :span="8">
          <a-form-item :label="field.label" :name="field.key">
            <a-input-number v-model:value="quoteForm[field.key]" class="full-width" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance, TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message, Modal } from 'ant-design-vue'
import { DownOutlined, PlusOutlined } from '@ant-design/icons-vue'
import {
  createProduct,
  deleteProduct,
  getLatestMarketQuote,
  getMarketQuotes,
  getProduct,
  getProducts,
  saveMarketQuote,
  saveProductAttribute,
  updateProduct,
  updateProductStatus,
} from '@/api/products'
import type {
  CreateProductPayload,
  MarketQuote,
  Product,
  ProductAttribute,
  ProductQuery,
  ProductThemeRelation,
  QuoteStatus,
  SaveQuotePayload,
  TradeStatus,
} from '@/api/types'
import {
  optionColor,
  optionLabel,
  productTypeOptions,
  quoteStatusOptions,
  tradeStatusOptions,
} from '@/utils/options'

const columns: TableColumnsType<Product> = [
  { title: '产品', key: 'product', fixed: 'left', width: 210 },
  { title: '类型', key: 'productType', width: 90 },
  { title: '资产类别', dataIndex: ['investmentProfile', 'assetClass'], width: 120 },
  { title: '市场', dataIndex: 'marketCode', width: 90 },
  { title: '交易状态', key: 'tradeStatus', width: 110 },
  { title: '风险等级', dataIndex: 'riskLevel', width: 100 },
  { title: '数据质量', key: 'dataQuality', width: 160 },
  { title: 'Mock 门禁', key: 'mockTradable', width: 120 },
  { title: '最低投资金额', key: 'minInvestAmount', width: 150 },
  { title: '费率', key: 'feeRate', width: 100 },
  { title: '上市日期', dataIndex: 'listingDate', width: 120 },
  { title: '操作', key: 'action', fixed: 'right', width: 140 },
]

const attributeColumns: TableColumnsType<ProductAttribute> = [
  { title: '键', dataIndex: 'key', width: 140 },
  { title: '类型', dataIndex: 'valueType', width: 100 },
  { title: 'JSON 值', dataIndex: 'jsonValue' },
  { title: '生效日期', dataIndex: 'effectiveDate', width: 120 },
  { title: '来源', dataIndex: 'sourceCode', width: 100 },
]

const quoteColumns: TableColumnsType<MarketQuote> = [
  { title: '行情时间', dataIndex: 'quoteTime', width: 180 },
  { title: '来源', dataIndex: 'sourceCode', width: 100 },
  { title: '周期', dataIndex: 'interval', width: 80 },
  { title: '开盘', dataIndex: 'openPrice', width: 100 },
  { title: '最高', dataIndex: 'highPrice', width: 100 },
  { title: '最低', dataIndex: 'lowPrice', width: 100 },
  { title: '收盘', dataIndex: 'closePrice', width: 100 },
  { title: '成交量', dataIndex: 'volume', width: 120 },
  { title: '状态', dataIndex: 'status', width: 100 },
]

const relationColumns: TableColumnsType<ProductThemeRelation> = [
  { title: '类型', dataIndex: 'relationType', width: 120 },
  { title: '编码', dataIndex: 'relationCode', width: 160 },
  { title: '名称', dataIndex: 'relationName', width: 180 },
  { title: '权重', key: 'relationWeight', width: 180 },
  { title: '来源', dataIndex: 'sourceCode', width: 120 },
  { title: '证据', dataIndex: 'evidence' },
]

const loading = ref(false)
const saving = ref(false)
const data = ref<Product[]>([])
const total = ref(0)
const query = reactive<ProductQuery>({ page: 0, size: 10 })
const pagination = computed<TablePaginationConfig>(() => ({
  current: (query.page || 0) + 1,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const defaultProductForm = (): CreateProductPayload => ({
  productCode: '',
  productName: '',
  productType: 'STOCK',
  marketCode: '',
  currency: 'CNY',
  riskLevel: undefined,
  minInvestAmount: 0,
  amountStep: 1,
  quantityStep: 1,
  feeRate: 0,
  listingDate: '',
  delistingDate: '',
  description: '',
})
const productModalVisible = ref(false)
const productFormRef = ref<FormInstance>()
const editingProduct = ref<Product>()
const productForm = reactive<CreateProductPayload>(defaultProductForm())
const productRules = {
  productCode: [{ required: true, message: '请输入产品代码' }],
  productName: [{ required: true, message: '请输入产品名称' }],
  productType: [{ required: true, message: '请选择产品类型' }],
  marketCode: [{ required: true, message: '请输入市场代码' }],
  currency: [{ required: true, message: '请输入币种' }],
  minInvestAmount: [{ required: true, message: '请输入最低投资金额' }],
  amountStep: [{ required: true, message: '请输入金额步长' }],
  quantityStep: [{ required: true, message: '请输入数量步长' }],
  feeRate: [{ required: true, message: '请输入费率' }],
}

const statusModalVisible = ref(false)
const statusProduct = ref<Product>()
const selectedStatus = ref<TradeStatus>('TRADABLE')

const detailVisible = ref(false)
const detailLoading = ref(false)
const detailTab = ref('base')
const currentProduct = ref<Product>()
const profilePercent = computed(() =>
  Math.round((currentProduct.value?.investmentProfile?.dataQualityScore || 0) * 100),
)
const latestQuote = ref<MarketQuote>()
const quotes = ref<MarketQuote[]>([])
const quotesLoading = ref(false)
const toLocalInput = (date: Date) => {
  const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000)
  return shifted.toISOString().slice(0, 16)
}
const quoteQuery = reactive({
  from: toLocalInput(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
  to: toLocalInput(new Date()),
  interval: '1d',
})

const attributeModalVisible = ref(false)
const attributeFormRef = ref<FormInstance>()
const attributeForm = reactive<ProductAttribute>({
  key: '',
  valueType: 'STRING',
  jsonValue: '',
  effectiveDate: '',
  sourceCode: '',
})
const attributeRules = {
  key: [{ required: true, message: '请输入属性键' }],
  valueType: [{ required: true, message: '请输入值类型' }],
  jsonValue: [{ required: true, message: '请输入 JSON 值' }],
}

const quoteModalVisible = ref(false)
const quoteFormRef = ref<FormInstance>()
const quoteForm = reactive<SaveQuotePayload>({
  sourceCode: '',
  interval: '1d',
  quoteTime: toLocalInput(new Date()),
  openPrice: undefined,
  highPrice: undefined,
  lowPrice: undefined,
  closePrice: 0,
  previousClosePrice: undefined,
  volume: undefined,
  turnoverAmount: undefined,
  status: 'VALID',
})
type QuoteNumberKey = 'openPrice' | 'highPrice' | 'lowPrice' | 'closePrice' | 'previousClosePrice' | 'volume' | 'turnoverAmount'
const quoteNumberFields: { key: QuoteNumberKey; label: string }[] = [
  { key: 'openPrice', label: '开盘价' },
  { key: 'highPrice', label: '最高价' },
  { key: 'lowPrice', label: '最低价' },
  { key: 'closePrice', label: '收盘价' },
  { key: 'previousClosePrice', label: '前收盘价' },
  { key: 'volume', label: '成交量' },
  { key: 'turnoverAmount', label: '成交金额' },
]
const quoteRules = {
  sourceCode: [{ required: true, message: '请输入来源代码' }],
  interval: [{ required: true, message: '请输入行情周期' }],
  quoteTime: [{ required: true, message: '请选择行情时间' }],
  closePrice: [{ required: true, message: '请输入收盘价' }],
}

const fetchData = async () => {
  loading.value = true
  try {
    const result = await getProducts(query)
    data.value = result.items
    total.value = result.total
  } finally {
    loading.value = false
  }
}

const search = () => {
  query.page = 0
  fetchData()
}

const resetFilters = () => {
  Object.assign(query, {
    keyword: undefined,
    productType: undefined,
    tradeStatus: undefined,
    currency: undefined,
    riskLevel: undefined,
    page: 0,
  })
  fetchData()
}

const handleTableChange = (page: TablePaginationConfig) => {
  query.page = (page.current || 1) - 1
  query.size = page.pageSize || 10
  fetchData()
}

const openProductModal = (product?: Product) => {
  editingProduct.value = product
  Object.assign(productForm, product ? {
    productCode: product.productCode,
    productName: product.productName,
    productType: product.productType,
    marketCode: product.marketCode,
    currency: product.currency,
    riskLevel: product.riskLevel,
    minInvestAmount: product.minInvestAmount,
    amountStep: product.amountStep,
    quantityStep: product.quantityStep,
    feeRate: product.feeRate,
    listingDate: product.listingDate || '',
    delistingDate: product.delistingDate || '',
    description: product.description || '',
  } : defaultProductForm())
  productModalVisible.value = true
}

const submitProduct = async () => {
  await productFormRef.value?.validate()
  saving.value = true
  try {
    if (editingProduct.value) {
      const { productName, riskLevel, minInvestAmount, amountStep, quantityStep, feeRate, listingDate, delistingDate, description } = productForm
      await updateProduct(editingProduct.value.bizId, {
        productName,
        riskLevel,
        minInvestAmount,
        amountStep,
        quantityStep,
        feeRate,
        listingDate,
        delistingDate,
        description,
      })
      message.success('产品已更新')
    } else {
      await createProduct(productForm)
      message.success('产品已创建')
    }
    productModalVisible.value = false
    fetchData()
  } finally {
    saving.value = false
  }
}

const openStatus = (product: Product) => {
  statusProduct.value = product
  selectedStatus.value = product.tradeStatus
  statusModalVisible.value = true
}

const submitStatus = async () => {
  if (!statusProduct.value) return
  saving.value = true
  try {
    await updateProductStatus(statusProduct.value.bizId, selectedStatus.value)
    message.success('交易状态已更新')
    statusModalVisible.value = false
    fetchData()
  } finally {
    saving.value = false
  }
}

const confirmDelete = (product: Product) => {
  Modal.confirm({
    title: `确定删除产品 ${product.productCode}？`,
    content: '该操作执行逻辑删除。',
    okText: '删除',
    okType: 'danger',
    cancelText: '取消',
    async onOk() {
      await deleteProduct(product.bizId)
      message.success('产品已删除')
      fetchData()
    },
  })
}

const openDetail = async (product: Product) => {
  detailVisible.value = true
  detailTab.value = 'base'
  detailLoading.value = true
  latestQuote.value = undefined
  quotes.value = []
  try {
    currentProduct.value = await getProduct(product.bizId)
    await Promise.all([loadLatestQuote(), loadQuotes()])
  } finally {
    detailLoading.value = false
  }
}

const loadLatestQuote = async () => {
  if (!currentProduct.value) return
  latestQuote.value = await getLatestMarketQuote(currentProduct.value.bizId, {
    interval: quoteQuery.interval,
  })
}

const loadQuotes = async () => {
  if (!currentProduct.value) return
  quotesLoading.value = true
  try {
    quotes.value = await getMarketQuotes(currentProduct.value.bizId, {
      from: new Date(quoteQuery.from).toISOString(),
      to: new Date(quoteQuery.to).toISOString(),
      interval: quoteQuery.interval || undefined,
      limit: 200,
    })
  } finally {
    quotesLoading.value = false
  }
}

const openAttributeModal = () => {
  Object.assign(attributeForm, {
    key: '',
    valueType: 'STRING',
    jsonValue: '',
    effectiveDate: '',
    sourceCode: '',
  })
  attributeModalVisible.value = true
}

const submitAttribute = async () => {
  if (!currentProduct.value) return
  await attributeFormRef.value?.validate()
  saving.value = true
  try {
    currentProduct.value = await saveProductAttribute(currentProduct.value.bizId, attributeForm)
    message.success('扩展属性已保存')
    attributeModalVisible.value = false
  } finally {
    saving.value = false
  }
}

const openQuoteModal = () => {
  Object.assign(quoteForm, {
    sourceCode: '',
    interval: quoteQuery.interval || '1d',
    quoteTime: toLocalInput(new Date()),
    openPrice: undefined,
    highPrice: undefined,
    lowPrice: undefined,
    closePrice: 0,
    previousClosePrice: undefined,
    volume: undefined,
    turnoverAmount: undefined,
    status: 'VALID' as QuoteStatus,
  })
  quoteModalVisible.value = true
}

const submitQuote = async () => {
  if (!currentProduct.value) return
  await quoteFormRef.value?.validate()
  saving.value = true
  try {
    await saveMarketQuote(currentProduct.value.bizId, {
      ...quoteForm,
      quoteTime: new Date(quoteForm.quoteTime).toISOString(),
    })
    message.success('行情点已保存')
    quoteModalVisible.value = false
    await Promise.all([loadLatestQuote(), loadQuotes()])
  } finally {
    saving.value = false
  }
}

const formatNumber = (value?: number) =>
  typeof value === 'number' ? value.toLocaleString('zh-CN') : '-'
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const formatPercentNumber = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(2)}%` : '-'
const mockTradableText = (product: Product) => {
  if (product.investmentProfile?.mockTradable) return '产品画像允许 Mock 交易'
  return product.investmentProfile?.tradingNotes || '产品不可 Mock，可能由于数据质量不足、画像缺失或交易限制'
}

onMounted(fetchData)
</script>

<style scoped>
.product-link {
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  text-align: left;
}

.product-link span {
  color: #8c8c8c;
}

.full-width {
  width: 100%;
}

.section-actions {
  margin-bottom: 16px;
}

.quote-card {
  margin-bottom: 16px;
  background: #fafcff;
}

.risk-alert,
.risk-descriptions {
  margin-bottom: 16px;
}
</style>
