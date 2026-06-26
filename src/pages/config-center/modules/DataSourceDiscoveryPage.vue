<template>
  <BusinessPageShell
    title="方向化数据源发现"
    description="按采集方向调用模型 Skill 发现高质量数据源候选。候选不会自动保存，必须人工审核后写入数据源或生成采集任务。"
    :endpoints="[endpoints.dataSource.discover, endpoints.dataSource.save, endpoints.task.saveDefinition]"
    :icon="RadarChartOutlined"
    status-text="DISCOVERY REVIEW"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-alert
        class="mb-12"
        type="warning"
        show-icon
        message="候选不自动启用：保存数据源默认 enabled=false，生成任务配置也需要后续人工确认启用。"
      />

      <a-card class="page-card" :bordered="false" title="发现条件">
        <a-form layout="vertical">
          <a-row :gutter="12">
            <a-col :xs="24" :md="8">
              <a-form-item label="环境"><a-input v-model:value="form.environment" placeholder="DEFAULT" /></a-form-item>
            </a-col>
            <a-col :xs="24" :md="8">
              <a-form-item label="市场范围"><a-input v-model:value="form.marketScope" placeholder="CN_MAINLAND" /></a-form-item>
            </a-col>
            <a-col :xs="24" :md="8">
              <a-form-item label="资产类别"><a-input v-model:value="form.assetClass" placeholder="MULTI_ASSET" /></a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :xs="24" :md="10">
              <a-form-item label="采集方向">
                <a-select v-model:value="form.collectionDirection" :options="collectionDirectionSelectOptions" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :md="14">
              <a-form-item label="Skill 编码">
                <a-select
                  v-model:value="form.skillCode"
                  show-search
                  :options="dataCollectionSkillSelectOptions"
                  :filter-option="filterOption"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :xs="24" :md="10">
              <a-form-item label="数据类型"><a-input v-model:value="form.dataTypes" placeholder="MARKET_QUOTE,NEWS,ANNOUNCEMENT,RESEARCH,REGULATORY" /></a-form-item>
            </a-col>
            <a-col :xs="24" :md="8">
              <a-form-item label="主题关键词"><a-input v-model:value="form.topicKeywords" placeholder="黄金,ETF,银行理财" /></a-form-item>
            </a-col>
            <a-col :xs="24" :md="6">
              <a-form-item label="候选上限"><a-input-number v-model:value="form.candidateLimit" class="full-width" :min="1" :max="50" /></a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="12">
            <a-col :xs="24" :md="12">
              <a-form-item label="偏好等级"><a-input v-model:value="form.preferredTrustLevels" placeholder="L1,L2,L3,L4" /></a-form-item>
            </a-col>
            <a-col :xs="24" :md="12">
              <a-form-item label="包含暂不可用/需授权候选">
                <a-switch v-model:checked="form.includeDisabledCandidates" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-space>
            <a-button type="primary" :loading="discovering" @click="discover">发现候选</a-button>
            <a-button @click="resetForm">重置默认条件</a-button>
          </a-space>
        </a-form>
      </a-card>

      <a-card v-if="discovery" class="page-card" :bordered="false" title="发现结果摘要">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="场景">{{ discovery.scenarioCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="采集方向">{{ discovery.collectionDirection || form.collectionDirection || '-' }}</a-descriptions-item>
          <a-descriptions-item label="环境">{{ discovery.environment || '-' }}</a-descriptions-item>
          <a-descriptions-item label="模型">{{ discovery.modelCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="Provider">{{ discovery.providerCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="Skill">{{ discovery.skillCode || '-' }}@{{ discovery.skillVersion || '-' }}</a-descriptions-item>
          <a-descriptions-item label="审核策略">{{ discovery.reviewPolicy || '-' }}</a-descriptions-item>
        </a-descriptions>
        <a-row class="mt-12" :gutter="[16, 16]">
          <a-col :xs="24" :xl="12">
            <a-card size="small" title="Skill 指令摘要">
              <pre class="text-preview compact-preview">{{ discovery.skillInstruction || '-' }}</pre>
            </a-card>
          </a-col>
          <a-col :xs="24" :xl="12">
            <a-card size="small" title="Prompt 预览">
              <pre class="text-preview compact-preview">{{ discovery.promptPreview || '-' }}</pre>
            </a-card>
          </a-col>
        </a-row>
      </a-card>

      <a-card class="page-card" :bordered="false" title="候选审核列表">
        <a-table
          row-key="sourceCode"
          size="small"
          :pagination="{ pageSize: 10 }"
          :data-source="candidates"
          :columns="columns"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'source'">
              <a-space direction="vertical" :size="0">
                <strong>{{ record.sourceName || record.sourceCode }}</strong>
                <span class="muted-line">{{ record.sourceCode }} · {{ record.baseUrl || '-' }}</span>
              </a-space>
            </template>
            <template v-else-if="column.key === 'trustLevel'">
              <a-tag color="blue">{{ record.trustLevel || '-' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'confidence'">
              {{ formatPercent(record.confidence, 0) }}
            </template>
            <template v-else-if="column.key === 'review'">
              <a-tag :color="record.requiresReview ? 'warning' : 'success'">{{ record.requiresReview ? '需审核' : '低风险' }}</a-tag>
            </template>
            <template v-else-if="column.key === 'plan'">
              <span class="muted-line">{{ record.collectionPlan || record.qualityPolicy || '-' }}</span>
            </template>
            <template v-else-if="column.key === 'reasons'">
              <a-space wrap>
                <a-tag v-for="reason in record.reasons || []" :key="reason">{{ reason }}</a-tag>
              </a-space>
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openCandidate(record)">查看</a-button>
                <a-button size="small" type="link" @click="confirmSaveSource(record)">保存数据源</a-button>
                <a-button size="small" type="link" @click="openTaskDrawer(record)">生成任务</a-button>
              </a-space>
            </template>
          </template>
          <template #emptyText>
            <EmptyEvidence description="尚未发现候选。请先填写条件并点击“发现候选”。" />
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="candidateOpen" width="760" title="候选详情">
      <a-space v-if="selectedCandidate" direction="vertical" :size="14" class="full-width">
        <a-descriptions bordered size="small" :column="1">
          <a-descriptions-item label="编码">{{ selectedCandidate.sourceCode }}</a-descriptions-item>
          <a-descriptions-item label="名称">{{ selectedCandidate.sourceName }}</a-descriptions-item>
          <a-descriptions-item label="类型">{{ selectedCandidate.sourceType }}</a-descriptions-item>
          <a-descriptions-item label="等级">{{ selectedCandidate.trustLevel }}</a-descriptions-item>
          <a-descriptions-item label="入口">{{ selectedCandidate.baseUrl || '-' }}</a-descriptions-item>
          <a-descriptions-item label="频率">{{ selectedCandidate.fetchFrequency || '-' }}</a-descriptions-item>
          <a-descriptions-item label="负责人">{{ selectedCandidate.owner || '-' }}</a-descriptions-item>
          <a-descriptions-item label="说明">{{ selectedCandidate.description || '-' }}</a-descriptions-item>
        </a-descriptions>
        <a-card size="small" title="推荐理由">
          <a-space wrap><a-tag v-for="reason in selectedCandidate.reasons || []" :key="reason">{{ reason }}</a-tag></a-space>
        </a-card>
        <a-card size="small" title="采集计划">
          <pre class="text-preview">{{ selectedCandidate.collectionPlan || '-' }}</pre>
        </a-card>
        <a-card size="small" title="质量策略">
          <pre class="text-preview">{{ selectedCandidate.qualityPolicy || '-' }}</pre>
        </a-card>
        <a-card size="small" title="建议参数"><JsonPreview :value="selectedCandidate.suggestedParameters" /></a-card>
        <a-card size="small" title="字段映射"><JsonPreview :value="selectedCandidate.fieldMappings" /></a-card>
      </a-space>
    </a-drawer>

    <a-drawer v-model:open="taskOpen" width="720" title="生成采集任务配置">
      <a-form layout="vertical">
        <a-alert class="mb-12" type="info" show-icon message="任务默认停用；请检查参数、Cron 和端点后再启用。" />
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="任务编码"><a-input v-model:value="taskForm.code" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="任务类型"><a-input v-model:value="taskForm.type" /></a-form-item></a-col>
        </a-row>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Cron"><a-input v-model:value="taskForm.cron" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="时区"><a-input v-model:value="taskForm.zone" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="启用"><a-switch v-model:checked="taskForm.enabled" /></a-form-item>
        <a-form-item label="参数 JSON"><a-textarea v-model:value="taskParametersText" :auto-size="{ minRows: 8, maxRows: 14 }" /></a-form-item>
        <a-form-item label="说明"><a-textarea v-model:value="taskForm.description" :auto-size="{ minRows: 2, maxRows: 5 }" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="savingTask" @click="submitTask">保存任务配置</a-button>
          <a-button @click="taskOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { RadarChartOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatPercent, safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import { discoverDataSources, saveDataSource } from '@/entities/data-source/api'
import type { DataSourceDiscoveryCandidateDto, DataSourceDiscoveryDto, DiscoverDataSourcesRequest } from '@/entities/data-source/model'
import { saveTaskDefinition } from '@/entities/task/api'
import type { InvestmentTaskDefinitionDto } from '@/entities/task/model'
import { collectionDirectionOptions, dataCollectionSkillCodeOptions } from '@/entities/ai-skill/dictionary'

const loading = ref(false)
const discovering = ref(false)
const savingTask = ref(false)
const errorMessage = ref('')
const discovery = ref<DataSourceDiscoveryDto>()
const selectedCandidate = ref<DataSourceDiscoveryCandidateDto>()
const candidateOpen = ref(false)
const taskOpen = ref(false)
const form = reactive<DiscoverDataSourcesRequest>({})
const taskForm = reactive<Partial<InvestmentTaskDefinitionDto>>({})
const taskParametersText = ref('{}')
const collectionDirectionSelectOptions = collectionDirectionOptions.map((item) => ({ label: item.label, value: item.value }))
const dataCollectionSkillSelectOptions = dataCollectionSkillCodeOptions.map((item) => ({ label: item.label, value: item.value }))

const candidates = computed(() => discovery.value?.candidates || [])
const metrics = computed(() => [
  { label: '候选数', value: candidates.value.length, hint: '本次发现' },
  { label: '需审核', value: candidates.value.filter((item) => item.requiresReview).length, hint: '人工确认' },
  { label: '高置信', value: candidates.value.filter((item) => (item.confidence || 0) >= 0.8).length, hint: '≥80%' },
  { label: 'Skill', value: discovery.value?.skillCode || '-', hint: discovery.value?.skillVersion || '未执行' },
])
const columns = [
  { title: '候选源', key: 'source' },
  { title: '类型', dataIndex: 'sourceType', width: 130 },
  { title: '等级', key: 'trustLevel', width: 90 },
  { title: '推荐任务', dataIndex: 'recommendedTaskType', width: 180 },
  { title: '计划 / 策略', key: 'plan' },
  { title: '置信度', key: 'confidence', width: 90 },
  { title: '审核', key: 'review', width: 90 },
  { title: '理由', key: 'reasons', width: 180 },
  { title: '操作', key: 'actions', width: 230 },
]

const filterOption = (input: string, option?: { label?: string; value?: string }) =>
  `${option?.label || ''}${option?.value || ''}`.toLowerCase().includes(input.toLowerCase())

const resetForm = () => {
  Object.assign(form, {
    environment: 'DEFAULT',
    marketScope: 'CN_MAINLAND',
    assetClass: 'MULTI_ASSET',
    dataTypes: 'MARKET_QUOTE,NEWS,ANNOUNCEMENT,RESEARCH,REGULATORY',
    collectionDirection: 'MULTI_SOURCE',
    skillCode: 'DATA_COLLECTION_MULTI_SOURCE',
    preferredTrustLevels: 'L1,L2,L3,L4',
    candidateLimit: 8,
    includeDisabledCandidates: true,
  })
}

resetForm()

const discover = async () => {
  discovering.value = true
  loading.value = true
  errorMessage.value = ''
  try {
    discovery.value = await discoverDataSources({ ...form })
    message.success(`发现 ${discovery.value.candidates?.length || 0} 个候选数据源`)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '数据源发现失败'
  } finally {
    discovering.value = false
    loading.value = false
  }
}

const openCandidate = (candidate: DataSourceDiscoveryCandidateDto) => {
  selectedCandidate.value = candidate
  candidateOpen.value = true
}

const confirmSaveSource = (candidate: DataSourceDiscoveryCandidateDto) => {
  Modal.confirm({
    title: '确认保存候选数据源？',
    content: `${candidate.sourceName || candidate.sourceCode} 将以停用状态保存，后续需在数据源资产页人工启用。`,
    onOk: async () => {
      await saveDataSource({
        sourceCode: candidate.sourceCode,
        sourceName: candidate.sourceName,
        sourceType: candidate.sourceType,
        trustLevel: candidate.trustLevel,
        baseUrl: candidate.baseUrl,
        enabled: false,
        fetchFrequency: candidate.fetchFrequency,
        owner: candidate.owner,
        description: candidate.description,
      })
      message.success('候选数据源已保存为停用状态')
    },
  })
}

const openTaskDrawer = (candidate: DataSourceDiscoveryCandidateDto) => {
  selectedCandidate.value = candidate
  Object.keys(taskForm).forEach((key) => delete taskForm[key as keyof InvestmentTaskDefinitionDto])
  const taskType = candidate.recommendedTaskType || 'REGULATORY_DISCLOSURE_COLLECTION'
  const parameters = {
    ...(candidate.suggestedParameters || {}),
    sourceCode: candidate.sourceCode,
    baseUrl: candidate.baseUrl,
    collectionDirection: discovery.value?.collectionDirection || form.collectionDirection,
    skillCode: discovery.value?.skillCode || form.skillCode,
    fieldMappings: candidate.fieldMappings || {},
    collectionPlan: candidate.collectionPlan,
    qualityPolicy: candidate.qualityPolicy,
  }
  Object.assign(taskForm, {
    code: `${candidate.sourceCode || 'candidate'}-collection`.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
    type: taskType,
    cron: candidate.fetchFrequency || '0 0/30 * * * ?',
    zone: 'Asia/Shanghai',
    enabled: false,
    parameters,
    description: `由 AI 数据源发现候选生成：${candidate.sourceName || candidate.sourceCode}`,
  })
  taskParametersText.value = JSON.stringify(parameters, null, 2)
  taskOpen.value = true
}

const submitTask = async () => {
  const parameters = safeParseJson<Record<string, unknown>>(taskParametersText.value)
  if (!parameters) {
    message.warning('任务参数 JSON 不可解析')
    return
  }
  if (!taskForm.code || !taskForm.type || !taskForm.cron || !taskForm.zone) {
    message.warning('请填写任务编码、类型、Cron 和时区')
    return
  }
  savingTask.value = true
  try {
    await saveTaskDefinition({ ...taskForm, parameters })
    message.success('采集任务配置已保存为人工确认状态')
    taskOpen.value = false
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存任务失败')
  } finally {
    savingTask.value = false
  }
}
</script>
