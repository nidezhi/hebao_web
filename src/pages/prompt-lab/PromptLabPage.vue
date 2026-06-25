<template>
  <BusinessPageShell
    title="Prompt Lab 实验室"
    description="管理 Prompt 版本、变量、输出 Schema、预览渲染和评估结果；ACTIVE 版本才作为默认调用候选。"
    :endpoints="[endpoints.prompt.list, endpoints.prompt.preview, endpoints.promptEvaluation.list, endpoints.prompt.status]"
    :icon="ExperimentOutlined"
    :status-text="errorMessage ? 'PROMPT WAITING' : 'PROMPT OPS'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && prompts.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="14">
          <a-card class="cockpit-card" :bordered="false" title="Prompt 版本列表">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="prompts"
              :columns="columns"
              :pagination="{ pageSize: 8 }"
              :row-class-name="rowClassName"
              @row="rowHandlers"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                  <a-tag :color="optionColor(promptStatusOptions, record.status)">
                    {{ optionLabel(promptStatusOptions, record.status) }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'variables'">
                  <a-tag color="cyan">{{ record.variables?.length || 0 }} 变量</a-tag>
                </template>
                <template v-if="column.key === 'schemas'">
                  <a-tag color="purple">{{ record.outputSchemas?.length || 0 }} Schema</a-tag>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="10">
          <a-card class="cockpit-card" :bordered="false" title="状态分布与评分">
            <BusinessChart :option="promptChartOption" height="300px" />
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="9">
          <a-card class="cockpit-card" :bordered="false" title="变量与输出 Schema">
            <a-empty v-if="!selectedPrompt" description="选择左侧 Prompt 查看结构" />
            <a-space v-else direction="vertical" style="width: 100%">
              <a-descriptions bordered size="small" :column="1">
                <a-descriptions-item label="编码">{{ selectedPrompt.promptCode }}</a-descriptions-item>
                <a-descriptions-item label="版本">{{ selectedPrompt.promptVersion }}</a-descriptions-item>
                <a-descriptions-item label="场景">{{ selectedPrompt.scenario }}</a-descriptions-item>
                <a-descriptions-item label="名称">{{ selectedPrompt.templateName }}</a-descriptions-item>
              </a-descriptions>

              <a-divider orientation="left">变量</a-divider>
              <a-list size="small" :data-source="selectedPrompt.variables || []">
                <template #renderItem="{ item }">
                  <a-list-item>
                    <a-list-item-meta :title="item.variableName">
                      <template #description>
                        {{ item.sourcePath || item.description || '未声明来源路径' }}
                      </template>
                    </a-list-item-meta>
                    <a-tag :color="item.required ? 'warning' : 'default'">
                      {{ item.required ? '必填' : '可选' }}
                    </a-tag>
                  </a-list-item>
                </template>
              </a-list>

              <a-divider orientation="left">Schema</a-divider>
              <a-collapse ghost>
                <a-collapse-panel
                  v-for="schema in selectedPrompt.outputSchemas || []"
                  :key="schema.bizId || schema.schemaVersion"
                  :header="schema.schemaVersion"
                >
                  <pre class="json-preview">{{ schema.schemaJson }}</pre>
                </a-collapse-panel>
              </a-collapse>
            </a-space>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="8">
          <a-card class="cockpit-card" :bordered="false">
            <template #title>Prompt 预览输入</template>
            <template #extra>
              <a-button type="primary" :loading="previewing" @click="handlePreview">预览渲染</a-button>
            </template>
            <a-empty v-if="!selectedPrompt" description="选择 Prompt 后填写变量" />
            <a-form v-else layout="vertical">
              <a-form-item
                v-for="variable in selectedPrompt.variables || []"
                :key="variable.variableName"
                :label="variable.variableName"
                :extra="variable.sourcePath || variable.description"
              >
                <a-input
                  v-model:value="previewVariables[variable.variableName]"
                  :placeholder="variable.required ? '必填变量' : '可选变量'"
                />
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="7">
          <a-card class="cockpit-card" :bordered="false" title="预览结果">
            <a-alert
              v-if="previewResult?.missingVariables?.length"
              type="warning"
              show-icon
              message="存在缺失变量"
              :description="previewResult.missingVariables.join('、')"
              style="margin-bottom: 12px"
            />
            <pre class="prompt-preview">{{ previewResult?.renderedPrompt || selectedPrompt?.templateContent || '暂无预览内容。' }}</pre>
          </a-card>
        </a-col>
      </a-row>

      <a-card class="cockpit-card" :bordered="false" title="Prompt 评估记录">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="evaluations"
          :columns="evaluationColumns"
          :pagination="{ pageSize: 6 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'score'">
              <a-progress :percent="Math.round((record.score || 0) * 100)" size="small" />
            </template>
            <template v-if="column.key === 'createdAt'">
              {{ formatDateTime(record.createdAt) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'
import { ExperimentOutlined } from '@ant-design/icons-vue'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listPromptEvaluations } from '@/entities/feedback/api'
import type { AiPromptEvaluationDto } from '@/entities/feedback/model'
import { listAiPrompts, previewAiPrompt } from '@/entities/prompt/api'
import type { AiPromptPreviewDto, AiPromptTemplateDto } from '@/entities/prompt/model'
import { promptCanBeDefaultCandidate } from '@/entities/prompt/adapter'
import { promptStatusOptions, optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const previewing = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const prompts = ref<AiPromptTemplateDto[]>([])
const evaluations = ref<AiPromptEvaluationDto[]>([])
const selectedPrompt = ref<AiPromptTemplateDto>()
const previewVariables = reactive<Record<string, string>>({})
const previewResult = ref<AiPromptPreviewDto>()

const metrics = computed(() => [
  { label: 'Prompt 版本', value: prompts.value.length, hint: '跨版本稳定编码' },
  { label: 'ACTIVE', value: prompts.value.filter(promptCanBeDefaultCandidate).length, hint: '默认调用候选' },
  { label: '待校验', value: prompts.value.filter((item) => item.status === 'VALIDATING').length, hint: '状态流中' },
  { label: '变量定义', value: prompts.value.reduce((sum, item) => sum + (item.variables?.length || 0), 0), hint: '必填校验来源' },
  { label: '评估记录', value: evaluations.value.length, hint: 'Prompt 质量回路' },
])

const promptChartOption = computed<EChartsCoreOption>(() => {
  const statusCount = prompts.value.reduce<Record<string, number>>((result, item) => {
    result[item.status] = (result[item.status] || 0) + 1
    return result
  }, {})

  return {
    color: ['#2563eb', '#16a34a', '#f59e0b', '#64748b'],
    tooltip: { trigger: 'item' },
    legend: { bottom: 0 },
    series: [
      {
        type: 'pie',
        radius: ['46%', '68%'],
        center: ['50%', '44%'],
        data: Object.entries(statusCount).map(([name, value]) => ({ name, value })),
      },
    ],
  }
})

const columns = [
  { title: '编码', dataIndex: 'promptCode', key: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', key: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario', key: 'scenario' },
  { title: '状态', key: 'status' },
  { title: '变量', key: 'variables' },
  { title: 'Schema', key: 'schemas' },
  { title: '更新时间', key: 'updatedAt', customRender: ({ record }: { record: AiPromptTemplateDto }) => formatDateTime(record.updatedAt) },
]

const evaluationColumns = [
  { title: '编码', dataIndex: 'promptCode', key: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', key: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario', key: 'scenario' },
  { title: '评分', key: 'score' },
  { title: '审核状态', dataIndex: 'reviewStatus', key: 'reviewStatus' },
  { title: '创建时间', key: 'createdAt' },
]

const resetPreviewVariables = () => {
  Object.keys(previewVariables).forEach((key) => delete previewVariables[key])
  selectedPrompt.value?.variables?.forEach((variable) => {
    previewVariables[variable.variableName] = ''
  })
  previewResult.value = undefined
}

const rowHandlers = (record: AiPromptTemplateDto) => ({
  onClick: () => {
    selectedPrompt.value = record
  },
})

const rowClassName = (record: AiPromptTemplateDto) =>
  record.bizId === selectedPrompt.value?.bizId ? 'selected-business-row' : ''

const loadEvaluations = async (prompt?: AiPromptTemplateDto) => {
  const page = await listPromptEvaluations({
    page: 1,
    size: 20,
    promptCode: prompt?.promptCode,
    promptVersion: prompt?.promptVersion,
  })
  evaluations.value = page.items || []
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiPrompts({ page: 1, size: 50 })
    prompts.value = page.items || []
    selectedPrompt.value = prompts.value[0]
    resetPreviewVariables()
    await loadEvaluations(selectedPrompt.value)
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

const handlePreview = async () => {
  if (!selectedPrompt.value) return
  previewing.value = true
  errorMessage.value = ''
  try {
    previewResult.value = await previewAiPrompt({
      promptBizId: selectedPrompt.value.bizId,
      variables: { ...previewVariables },
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '预览失败，请检查变量输入'
  } finally {
    previewing.value = false
  }
}

watch(selectedPrompt, async (prompt) => {
  resetPreviewVariables()
  try {
    await loadEvaluations(prompt)
  } catch {
    evaluations.value = []
  }
})

onMounted(load)
</script>
