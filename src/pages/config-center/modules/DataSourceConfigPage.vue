<template>
  <BusinessPageShell
    title="Data Source Asset 数据源资产"
    description="已入库数据源资产台账：新增/编辑来源、人工启停、维护健康状态、写入质量快照。AI 发现候选保存后在这里继续治理。"
    :endpoints="[endpoints.dataSource.list, endpoints.dataSource.save, endpoints.dataSource.saveHealth, endpoints.dataSource.saveQuality]"
    :icon="DatabaseOutlined"
    status-text="DATA ASSET"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="数据源资产管理">
        <template #extra>
          <a-space>
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openEdit()">新增数据源</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="sources" :columns="columns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'enabled'">
              <a-tag :color="record.enabled ? 'success' : 'default'">{{ record.enabled ? '启用' : '停用' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'successRate'">
              {{ formatPercent(record.health?.successRate) }}
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openEdit(record)">编辑</a-button>
                <a-button size="small" type="link" @click="openHealth(record)">健康</a-button>
                <a-button size="small" type="link" @click="openQuality(record)">质量快照</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="editOpen" width="620" :title="editingSource?.bizId ? '编辑数据源' : '新增数据源'">
      <a-form layout="vertical">
        <a-form-item label="数据源编码"><a-input v-model:value="sourceForm.sourceCode" /></a-form-item>
        <a-form-item label="数据源名称"><a-input v-model:value="sourceForm.sourceName" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="类型"><a-input v-model:value="sourceForm.sourceType" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="可信等级"><a-input v-model:value="sourceForm.trustLevel" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="Base URL"><a-input v-model:value="sourceForm.baseUrl" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="抓取频率"><a-input v-model:value="sourceForm.fetchFrequency" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="Owner"><a-input v-model:value="sourceForm.owner" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="启用"><a-switch v-model:checked="sourceForm.enabled" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="sourceForm.description" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitSource">保存</a-button>
          <a-button @click="editOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="healthOpen" width="520" title="保存数据源健康">
      <a-form layout="vertical">
        <a-form-item label="数据源编码"><a-input v-model:value="healthForm.sourceCode" disabled /></a-form-item>
        <a-form-item label="成功率"><a-input-number v-model:value="healthForm.successRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item>
        <a-form-item label="样本数"><a-input-number v-model:value="healthForm.sampleCount" class="full-width" /></a-form-item>
        <a-form-item label="失败原因"><a-textarea v-model:value="healthForm.failureReason" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitHealth">保存健康</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="qualityOpen" width="520" title="保存质量快照">
      <a-form layout="vertical">
        <a-form-item label="数据源编码"><a-input v-model:value="qualityForm.sourceCode" disabled /></a-form-item>
        <a-form-item label="数据类型"><a-input v-model:value="qualityForm.dataType" /></a-form-item>
        <a-form-item label="质量分"><a-input-number v-model:value="qualityForm.qualityScore" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item>
        <a-form-item label="缺失率"><a-input-number v-model:value="qualityForm.missingRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item>
        <a-form-item label="重复率"><a-input-number v-model:value="qualityForm.duplicateRate" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item>
        <a-form-item label="新鲜度"><a-input-number v-model:value="qualityForm.freshnessScore" class="full-width" :min="0" :max="1" :step="0.01" /></a-form-item>
        <a-form-item label="样本数"><a-input-number v-model:value="qualityForm.sampleCount" class="full-width" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitQuality">保存快照</a-button>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { DatabaseOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatPercent } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { listDataSources, saveDataQualitySnapshot, saveDataSource, saveDataSourceHealth } from '@/entities/data-source/api'
import type { DataSourceDto } from '@/entities/data-source/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const sources = ref<DataSourceDto[]>([])
const editOpen = ref(false)
const healthOpen = ref(false)
const qualityOpen = ref(false)
const editingSource = ref<DataSourceDto>()

const sourceForm = reactive<Partial<DataSourceDto>>({ enabled: true })
const healthForm = reactive<Record<string, unknown>>({})
const qualityForm = reactive<Record<string, unknown>>({})

const metrics = computed(() => [
  { label: '数据源', value: sources.value.length, hint: `启用 ${sources.value.filter((item) => item.enabled).length}` },
  { label: 'L1/L2', value: sources.value.filter((item) => ['L1', 'L2'].includes(item.trustLevel)).length, hint: '关键源' },
  { label: '低质量', value: sources.value.filter((item) => ['LOW', 'DEMO_ONLY'].includes(item.qualityLevel || '')).length, hint: '需处理' },
  { label: '平均成功率', value: formatPercent(avgSuccess.value), hint: '健康状态' },
])
const avgSuccess = computed(() => {
  const scores = sources.value.map((item) => item.health?.successRate).filter((item): item is number => typeof item === 'number')
  return scores.length ? scores.reduce((sum, value) => sum + value, 0) / scores.length : undefined
})
const columns = [
  { title: '编码', dataIndex: 'sourceCode' },
  { title: '名称', dataIndex: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType' },
  { title: '可信', dataIndex: 'trustLevel' },
  { title: '启用', key: 'enabled' },
  { title: '成功率', key: 'successRate' },
  { title: '操作', key: 'actions', width: 220 },
]

const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}

const openEdit = (source?: DataSourceDto) => {
  editingSource.value = source
  resetObject(sourceForm as Record<string, unknown>, source ? { ...source } : { enabled: true, trustLevel: 'L2', sourceType: 'NEWS' })
  editOpen.value = true
}

const openHealth = (source: DataSourceDto) => {
  resetObject(healthForm, {
    sourceCode: source.sourceCode,
    successRate: source.health?.successRate ?? 1,
    sampleCount: source.health?.sampleCount ?? 0,
    failureReason: source.health?.failureReason || '',
  })
  healthOpen.value = true
}

const openQuality = (source: DataSourceDto) => {
  resetObject(qualityForm, {
    sourceCode: source.sourceCode,
    dataType: source.sourceType,
    qualityScore: source.latestQuality?.qualityScore ?? 0.8,
    missingRate: source.latestQuality?.missingRate ?? 0,
    duplicateRate: source.latestQuality?.duplicateRate ?? 0,
    freshnessScore: source.latestQuality?.freshnessScore ?? 0.8,
    sampleCount: source.latestQuality?.sampleCount ?? 0,
  })
  qualityOpen.value = true
}

const submitSource = async () => {
  saving.value = true
  try {
    await saveDataSource(sourceForm)
    message.success('数据源已保存')
    editOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const submitHealth = async () => {
  saving.value = true
  try {
    await saveDataSourceHealth({ ...healthForm })
    message.success('健康状态已保存')
    healthOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}

const submitQuality = async () => {
  saving.value = true
  try {
    await saveDataQualitySnapshot({ ...qualityForm })
    message.success('质量快照已保存')
    qualityOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listDataSources({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' })
    sources.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '数据源资产加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
