<template>
  <a-card class="page-card" :bordered="false">
    <div class="toolbar">
      <div class="toolbar-filters">
        <a-input v-model:value="query.modelCode" allow-clear placeholder="模型编码" style="width: 180px" />
        <a-select
          v-model:value="query.modelType"
          allow-clear
          placeholder="模型类型"
          style="width: 160px"
          :options="modelTypeOptions"
        />
        <a-input v-model:value="query.provider" allow-clear placeholder="提供方" style="width: 160px" />
        <a-select
          v-model:value="query.status"
          allow-clear
          placeholder="状态"
          style="width: 150px"
          :options="modelStatusOptions"
        />
        <a-button type="primary" ghost @click="search">查询</a-button>
        <a-button @click="reset">重置</a-button>
      </div>
      <a-button type="primary" @click="openEditor()">新增模型</a-button>
    </div>

    <a-table
      row-key="bizId"
      :columns="columns"
      :data-source="models"
      :loading="loading"
      :pagination="pagination"
      :scroll="{ x: 1300 }"
      @change="handlePage"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'model'">
          <strong>{{ record.modelName }}</strong>
          <div class="muted">{{ record.modelCode }} / {{ record.modelVersion }}</div>
        </template>
        <template v-else-if="column.key === 'status'">
          <a-tag :color="statusColor(record.status)">{{ statusLabel(record.status) }}</a-tag>
        </template>
        <template v-else-if="column.key === 'updatedAt'">
          {{ formatDateTime(record.updatedAt) }}
        </template>
        <template v-else-if="column.key === 'actions'">
          <a-space size="small">
            <a-button type="link" size="small" @click="showDetail(record)">详情</a-button>
            <a-button type="link" size="small" @click="openEditor(record)">编辑</a-button>
            <a-dropdown>
              <a-button type="link" size="small">状态</a-button>
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    v-for="item in modelStatusOptions.filter((item) => item.value !== 'ARCHIVED')"
                    :key="item.value"
                    @click="updateStatus(record, item.value)"
                  >
                    {{ item.label }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <a-popconfirm title="确认归档该模型？" @confirm="archive(record)">
              <a-button type="link" danger size="small" :disabled="record.status === 'ARCHIVED'">归档</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>

    <a-modal
      v-model:open="editorOpen"
      :title="editingModel ? '编辑 AI 模型' : '新增 AI 模型'"
      width="680px"
      :confirm-loading="saving"
      @ok="submit"
    >
      <a-form layout="vertical">
        <div class="form-grid">
          <a-form-item label="模型编码" required>
            <a-input v-model:value="form.modelCode" />
          </a-form-item>
          <a-form-item label="模型版本" required>
            <a-input v-model:value="form.modelVersion" />
          </a-form-item>
          <a-form-item label="模型名称" required>
            <a-input v-model:value="form.modelName" />
          </a-form-item>
          <a-form-item label="模型类型" required>
            <a-select v-model:value="form.modelType" :options="modelTypeOptions" />
          </a-form-item>
          <a-form-item label="提供方">
            <a-input v-model:value="form.provider" />
          </a-form-item>
          <a-form-item label="状态">
            <a-select v-model:value="form.status" :options="modelStatusOptions" />
          </a-form-item>
        </div>
        <a-form-item label="制品/配置地址">
          <a-input v-model:value="form.artifactUri" />
        </a-form-item>
        <a-form-item label="模型参数 JSON">
          <a-textarea v-model:value="form.modelConfig" :rows="5" />
        </a-form-item>
        <a-form-item label="评估指标 JSON">
          <a-textarea v-model:value="form.metrics" :rows="4" />
        </a-form-item>
      </a-form>
    </a-modal>

    <a-drawer v-model:open="detailOpen" title="AI 模型详情" width="640">
      <a-spin :spinning="detailLoading">
        <a-descriptions v-if="detail" bordered size="small" :column="2">
          <a-descriptions-item label="名称" :span="2">{{ detail.modelName }}</a-descriptions-item>
          <a-descriptions-item label="编码">{{ detail.modelCode }}</a-descriptions-item>
          <a-descriptions-item label="版本">{{ detail.modelVersion }}</a-descriptions-item>
          <a-descriptions-item label="类型">{{ detail.modelType }}</a-descriptions-item>
          <a-descriptions-item label="提供方">{{ detail.provider || '-' }}</a-descriptions-item>
          <a-descriptions-item label="状态">{{ statusLabel(detail.status) }}</a-descriptions-item>
          <a-descriptions-item label="更新时间">{{ formatDateTime(detail.updatedAt) }}</a-descriptions-item>
          <a-descriptions-item label="制品地址" :span="2">{{ detail.artifactUri || '-' }}</a-descriptions-item>
        </a-descriptions>
        <section v-if="detail" class="detail-section">
          <h3>模型参数</h3>
          <pre>{{ formatJson(detail.modelConfig) }}</pre>
          <h3>评估指标</h3>
          <pre>{{ formatJson(detail.metrics) }}</pre>
        </section>
      </a-spin>
    </a-drawer>
  </a-card>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import {
  archiveAiModel,
  changeAiModelStatus,
  getAiModelDetail,
  getAiModels,
  saveAiModel,
} from '@/api/aiModels'
import type { AiModel, AiModelStatus, AiModelType } from '@/api/types'

const modelTypeOptions = [
  { label: '信号', value: 'SIGNAL' },
  { label: '风险', value: 'RISK' },
  { label: '推荐', value: 'RECOMMENDATION' },
  { label: '自然语言', value: 'NLP' },
  { label: '分析', value: 'ANALYSIS' },
] as const
const modelStatusOptions = [
  { label: '草稿', value: 'DRAFT', color: 'default' },
  { label: '验证中', value: 'VALIDATING', color: 'processing' },
  { label: '已启用', value: 'ACTIVE', color: 'success' },
  { label: '已停用', value: 'INACTIVE', color: 'warning' },
  { label: '已归档', value: 'ARCHIVED', color: 'default' },
] as const
const columns: TableColumnsType<AiModel> = [
  { title: '模型', key: 'model', fixed: 'left', width: 260 },
  { title: '类型', dataIndex: 'modelType', width: 140 },
  { title: '提供方', dataIndex: 'provider', width: 150 },
  { title: '状态', key: 'status', width: 110 },
  { title: '制品地址', dataIndex: 'artifactUri', width: 260, ellipsis: true },
  { title: '更新时间', key: 'updatedAt', width: 180 },
  { title: '操作', key: 'actions', fixed: 'right', width: 230 },
]

const loading = ref(false)
const models = ref<AiModel[]>([])
const total = ref(0)
const query = reactive({
  modelCode: undefined as string | undefined,
  modelType: undefined as AiModelType | undefined,
  provider: undefined as string | undefined,
  status: undefined as AiModelStatus | undefined,
  page: 0,
  size: 10,
  sort: 'updatedAt',
  direction: 'desc' as const,
})
const pagination = computed<TablePaginationConfig>(() => ({
  current: query.page + 1,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const editorOpen = ref(false)
const saving = ref(false)
const editingModel = ref<AiModel>()
const form = reactive({
  modelCode: '',
  modelVersion: '',
  modelName: '',
  modelType: 'ANALYSIS' as AiModelType,
  provider: '',
  artifactUri: '',
  modelConfig: '{}',
  metrics: '{}',
  status: 'DRAFT' as AiModelStatus,
})
const detailOpen = ref(false)
const detailLoading = ref(false)
const detail = ref<AiModel>()

const load = async () => {
  loading.value = true
  try {
    const result = await getAiModels(query)
    models.value = result.items
    total.value = result.total
  } finally {
    loading.value = false
  }
}
const search = () => {
  query.page = 0
  load()
}
const reset = () => {
  Object.assign(query, { modelCode: undefined, modelType: undefined, provider: undefined, status: undefined, page: 0 })
  load()
}
const handlePage = (page: TablePaginationConfig) => {
  query.page = (page.current || 1) - 1
  query.size = page.pageSize || 10
  load()
}
const openEditor = (record?: AiModel) => {
  editingModel.value = record
  Object.assign(form, {
    modelCode: record?.modelCode || '',
    modelVersion: record?.modelVersion || '',
    modelName: record?.modelName || '',
    modelType: record?.modelType || 'ANALYSIS',
    provider: record?.provider || '',
    artifactUri: record?.artifactUri || '',
    modelConfig: record?.modelConfig || '{}',
    metrics: record?.metrics || '{}',
    status: record?.status || 'DRAFT',
  })
  editorOpen.value = true
}
const submit = async () => {
  if (!form.modelCode || !form.modelVersion || !form.modelName || !form.modelType) {
    message.warning('请填写模型编码、版本、名称和类型')
    return
  }
  if (!isJson(form.modelConfig) || !isJson(form.metrics)) {
    message.error('模型参数和评估指标必须是合法 JSON')
    return
  }
  saving.value = true
  try {
    await saveAiModel({ ...form })
    message.success('模型配置已保存')
    editorOpen.value = false
    load()
  } finally {
    saving.value = false
  }
}
const showDetail = async (record: AiModel) => {
  detailOpen.value = true
  detailLoading.value = true
  try {
    detail.value = await getAiModelDetail({ bizId: record.bizId })
  } finally {
    detailLoading.value = false
  }
}
const updateStatus = async (record: AiModel, status: string) => {
  await changeAiModelStatus({ bizId: record.bizId, status: status as AiModelStatus })
  message.success('模型状态已更新')
  load()
}
const archive = async (record: AiModel) => {
  await archiveAiModel({ bizId: record.bizId })
  message.success('模型已归档')
  load()
}
const statusLabel = (status: AiModelStatus) =>
  modelStatusOptions.find((item) => item.value === status)?.label || status
const statusColor = (status: AiModelStatus) =>
  modelStatusOptions.find((item) => item.value === status)?.color || 'default'
const isJson = (value: string) => {
  try {
    JSON.parse(value || '{}')
    return true
  } catch {
    return false
  }
}
const formatJson = (value?: string) => {
  if (!value) return '-'
  try {
    return JSON.stringify(JSON.parse(value), null, 2)
  } catch {
    return value
  }
}
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(load)
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
}

.detail-section {
  margin-top: 20px;
}

.detail-section h3 {
  margin: 16px 0 8px;
  font-size: 14px;
}

.detail-section pre {
  max-height: 280px;
  margin: 0;
  padding: 12px;
  overflow: auto;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  white-space: pre-wrap;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
