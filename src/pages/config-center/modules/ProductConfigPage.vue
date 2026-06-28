<template>
  <BusinessPageShell
    title="Product Config 产品与行情配置"
    description="通用管理列表：产品创建、编辑、交易状态、逻辑删除、投资画像和行情点维护。"
    :endpoints="[endpoints.product.create, endpoints.product.update, endpoints.product.status, endpoints.product.delete, endpoints.product.saveAttribute, endpoints.product.saveInvestmentProfile, endpoints.marketQuote.save]"
    :icon="FundOutlined"
    status-text="PRODUCT CONFIG"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="产品管理">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openProduct()">新增产品</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="products" :columns="columns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'quality'">{{ formatPercent(record.dataQualityScore) }}</template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openProduct(record)">编辑</a-button>
                <a-dropdown>
                  <a-button size="small" type="link">状态</a-button>
                  <template #overlay>
                    <a-menu @click="changeStatus(record, String($event.key))">
                      <a-menu-item key="TRADABLE">可交易</a-menu-item>
                      <a-menu-item key="SUSPENDED">暂停</a-menu-item>
                      <a-menu-item key="DISABLED">禁用</a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
                <a-button size="small" type="link" @click="openAttribute(record)">属性</a-button>
                <a-button size="small" type="link" @click="openProfile(record)">画像</a-button>
                <a-button size="small" type="link" @click="openQuote(record)">行情</a-button>
                <a-button size="small" type="link" danger @click="confirmDelete(record)">删除</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="productOpen" width="680" :title="productForm.bizId ? '编辑产品' : '新增产品'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="产品代码"><a-input v-model:value="productForm.productCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="产品名称"><a-input v-model:value="productForm.productName" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="产品类型"><a-select v-model:value="productForm.productType" :options="productTypeSelectOptions" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="交易状态"><a-select v-model:value="productForm.tradeStatus" :options="tradeStatusSelectOptions" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="市场"><a-input v-model:value="productForm.marketCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="币种"><a-input v-model:value="productForm.currency" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="风险等级"><a-input-number v-model:value="productForm.riskLevel" class="full-width" :min="1" :max="5" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="productForm.description" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitProduct">保存</a-button>
          <a-button @click="productOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="profileOpen" width="680" title="保存投资画像">
      <a-form layout="vertical">
        <a-form-item label="产品业务 ID"><a-input v-model:value="profileForm.productBizId" disabled /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="资产类别"><a-input v-model:value="profileForm.assetClass" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="适配风险等级"><a-input-number v-model:value="profileForm.suitableRiskLevel" class="full-width" :min="1" :max="5" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="波动等级"><a-input v-model:value="profileForm.volatilityLevel" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="流动性"><a-input v-model:value="profileForm.liquidityLevel" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="允许 Mock"><a-switch v-model:checked="profileForm.mockTradable" /></a-form-item>
        <a-form-item label="交易备注"><a-textarea v-model:value="profileForm.tradingNotes" /></a-form-item>
        <a-form-item label="主题关系 JSON（高级字段）"><a-textarea v-model:value="themeRelationsText" :auto-size="{ minRows: 4, maxRows: 10 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitProfile">保存画像</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="attributeOpen" width="560" title="保存产品属性">
      <a-form layout="vertical">
        <a-form-item label="产品业务 ID"><a-input v-model:value="attributeForm.productBizId" disabled /></a-form-item>
        <a-form-item label="属性编码"><a-input v-model:value="attributeForm.attributeCode" /></a-form-item>
        <a-form-item label="属性值"><a-textarea v-model:value="attributeForm.attributeValue" :auto-size="{ minRows: 4, maxRows: 9 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitAttribute">保存属性</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="quoteOpen" width="560" title="保存行情点">
      <a-form layout="vertical">
        <a-form-item label="产品业务 ID"><a-input v-model:value="quoteForm.productBizId" disabled /></a-form-item>
        <a-form-item label="行情时间"><a-input v-model:value="quoteForm.quoteTime" placeholder="2026-06-25T15:00:00" /></a-form-item>
        <a-form-item label="周期"><a-input v-model:value="quoteForm.quoteInterval" /></a-form-item>
        <a-form-item label="净值"><a-input-number v-model:value="quoteForm.nav" class="full-width" /></a-form-item>
        <a-form-item label="来源"><a-input v-model:value="quoteForm.sourceCode" /></a-form-item>
        <a-form-item label="状态"><a-input v-model:value="quoteForm.status" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitQuote">保存行情</a-button>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { FundOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatPercent, safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { createProduct, deleteProduct, listProducts, saveProductAttribute, saveProductInvestmentProfile, saveProductQuote, updateProduct, updateProductStatus } from '@/entities/product/api'
import { productTypeOptions, tradeStatusOptions } from '@/entities/product/dictionary'
import type { ProductDto } from '@/entities/product/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const products = ref<ProductDto[]>([])
const productOpen = ref(false)
const attributeOpen = ref(false)
const profileOpen = ref(false)
const quoteOpen = ref(false)
const productForm = reactive<Record<string, unknown>>({})
const attributeForm = reactive<Record<string, unknown>>({})
const profileForm = reactive<Record<string, unknown>>({})
const quoteForm = reactive<Record<string, unknown>>({})
const themeRelationsText = ref('[]')
const productTypeSelectOptions = productTypeOptions.map((item) => ({ label: item.label, value: item.value }))
const tradeStatusSelectOptions = tradeStatusOptions.map((item) => ({ label: item.label, value: item.value }))

const metrics = computed(() => [
  { label: '产品数', value: products.value.length, hint: '当前扫描' },
  { label: '可交易', value: products.value.filter((item) => item.tradeStatus === 'TRADABLE').length, hint: '状态' },
  { label: '可 Mock', value: products.value.filter((item) => item.investmentProfile?.mockTradable).length, hint: '画像' },
  { label: '平均质量', value: formatPercent(avgQuality.value), hint: '产品质量' },
])
const avgQuality = computed(() => {
  const scores = products.value.map((item) => item.dataQualityScore).filter((item): item is number => typeof item === 'number')
  return scores.length ? scores.reduce((sum, value) => sum + value, 0) / scores.length : undefined
})
const columns = [
  { title: '代码', dataIndex: 'productCode' },
  { title: '名称', dataIndex: 'productName' },
  { title: '类型', dataIndex: 'productType' },
  { title: '交易状态', dataIndex: 'tradeStatus' },
  { title: '风险', dataIndex: 'riskLevel' },
  { title: '质量', key: 'quality' },
  { title: '操作', key: 'actions', width: 300 },
]
const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}
const openProduct = (product?: ProductDto) => {
  resetObject(productForm, product ? { ...product } : { productType: 'ETF', marketCode: 'CN_MAINLAND', currency: 'CNY', tradeStatus: 'TRADABLE', riskLevel: 3 })
  productOpen.value = true
}
const openProfile = (product: ProductDto) => {
  resetObject(profileForm, { productBizId: product.bizId, ...(product.investmentProfile || {}), mockTradable: product.investmentProfile?.mockTradable ?? true })
  themeRelationsText.value = JSON.stringify(product.themeRelations || [], null, 2)
  profileOpen.value = true
}
const openAttribute = (product: ProductDto) => {
  resetObject(attributeForm, { productBizId: product.bizId, attributeCode: 'riskNote', attributeValue: '' })
  attributeOpen.value = true
}
const openQuote = (product: ProductDto) => {
  resetObject(quoteForm, { productBizId: product.bizId, quoteInterval: '1D', nav: product.latestNav || 1, sourceCode: product.sourceCode || 'CHINA_WEALTH', status: 'VALID' })
  quoteOpen.value = true
}
const submitProduct = async () => {
  saving.value = true
  try {
    if (productForm.bizId) await updateProduct({ ...productForm })
    else await createProduct({ ...productForm })
    message.success('产品已保存')
    productOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '产品保存失败')
  } finally {
    saving.value = false
  }
}
const changeStatus = (product: ProductDto, status: string) => {
  Modal.confirm({
    title: '确认变更交易状态？',
    content: `${product.productName} -> ${status}`,
    onOk: async () => {
      await updateProductStatus({ bizId: product.bizId, status })
      message.success('交易状态已变更')
      await load()
    },
  })
}
const confirmDelete = (product: ProductDto) => {
  Modal.confirm({
    title: '确认删除产品？',
    content: product.productName,
    okType: 'danger',
    onOk: async () => {
      await deleteProduct(product.bizId)
      message.success('产品已删除')
      await load()
    },
  })
}
const submitProfile = async () => {
  const themeRelations = safeParseJson(themeRelationsText.value)
  if (!themeRelations) {
    message.warning('主题关系 JSON 不可解析')
    return
  }
  saving.value = true
  try {
    await saveProductInvestmentProfile({ ...profileForm, themeRelations })
    message.success('画像已保存')
    profileOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const submitAttribute = async () => {
  saving.value = true
  try {
    await saveProductAttribute({ ...attributeForm })
    message.success('产品属性已保存')
    attributeOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const submitQuote = async () => {
  saving.value = true
  try {
    await saveProductQuote({ ...quoteForm })
    message.success('行情已保存')
    quoteOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listProducts({ page: 1, size: 50, sort: 'updatedAt', direction: 'desc' })
    products.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '产品配置加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
