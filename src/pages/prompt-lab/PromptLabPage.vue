<template>
  <BusinessPageShell
    title="Prompt Lab 实验室"
    description="管理 Prompt 版本、变量、输出 Schema 与预览能力；ACTIVE 版本才作为默认调用候选。"
    :endpoints="[endpoints.prompt.list, endpoints.prompt.preview, endpoints.prompt.status]"
    :icon="ExperimentOutlined"
    :status-text="errorMessage ? 'PROMPT WAITING' : 'VERSION FLOW'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && prompts.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="15">
          <a-card class="cockpit-card" :bordered="false" title="Prompt 版本">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="prompts"
              :columns="columns"
              :pagination="{ pageSize: 8 }"
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

        <a-col :xs="24" :xl="9">
          <a-card class="cockpit-card" :bordered="false" title="变量与输出 Schema">
            <a-empty v-if="!selectedPrompt" description="选择左侧 Prompt 查看结构" />
            <a-space v-else direction="vertical" style="width: 100%">
              <a-descriptions bordered size="small" :column="1">
                <a-descriptions-item label="编码">{{ selectedPrompt.promptCode }}</a-descriptions-item>
                <a-descriptions-item label="版本">{{ selectedPrompt.promptVersion }}</a-descriptions-item>
                <a-descriptions-item label="场景">{{ selectedPrompt.scenario }}</a-descriptions-item>
              </a-descriptions>
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
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ExperimentOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listAiPrompts } from '@/entities/prompt/api'
import type { AiPromptTemplateDto } from '@/entities/prompt/model'
import { promptStatusOptions, optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const prompts = ref<AiPromptTemplateDto[]>([])
const selectedPrompt = ref<AiPromptTemplateDto>()

const metrics = computed(() => [
  { label: 'Prompt 版本', value: prompts.value.length, hint: '跨版本稳定编码' },
  { label: 'ACTIVE', value: prompts.value.filter((item) => item.status === 'ACTIVE').length, hint: '默认调用候选' },
  { label: '待校验', value: prompts.value.filter((item) => item.status === 'VALIDATING').length, hint: '状态流中' },
  { label: '变量定义', value: prompts.value.reduce((sum, item) => sum + (item.variables?.length || 0), 0), hint: '必填校验来源' },
])

const columns = [
  { title: '编码', dataIndex: 'promptCode', key: 'promptCode' },
  { title: '版本', dataIndex: 'promptVersion', key: 'promptVersion' },
  { title: '场景', dataIndex: 'scenario', key: 'scenario' },
  { title: '状态', key: 'status' },
  { title: '变量', key: 'variables' },
  { title: 'Schema', key: 'schemas' },
  { title: '更新时间', key: 'updatedAt', customRender: ({ record }: { record: AiPromptTemplateDto }) => formatDateTime(record.updatedAt) },
]

const rowHandlers = (record: AiPromptTemplateDto) => ({
  onClick: () => {
    selectedPrompt.value = record
  },
})

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiPrompts({ page: 1, size: 50 })
    prompts.value = page.items || []
    selectedPrompt.value = prompts.value[0]
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
