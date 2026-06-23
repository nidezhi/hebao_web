<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-card class="page-card" :bordered="false">
      <div class="toolbar">
        <div class="toolbar-filters">
          <a-input v-model:value="query.promptCode" allow-clear placeholder="Prompt 编码" style="width: 180px" />
          <a-input v-model:value="query.scenario" allow-clear placeholder="场景" style="width: 150px" />
          <a-select
            v-model:value="query.status"
            allow-clear
            placeholder="状态"
            style="width: 140px"
            :options="promptStatusOptions"
          />
          <a-button @click="fetchPrompts">查询</a-button>
        </div>
      </div>
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="10">
          <a-table
            row-key="bizId"
            size="small"
            :columns="columns"
            :data-source="prompts"
            :loading="loading"
            :pagination="pagination"
            :scroll="{ x: 760 }"
            @change="handleTableChange"
            @row="promptRow"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'prompt'">
                <strong>{{ record.promptCode }}</strong>
                <div class="muted">{{ record.templateName }} · {{ record.promptVersion }}</div>
              </template>
              <template v-else-if="column.key === 'status'">
                <a-tag :color="optionColor(promptStatusOptions, record.status)">
                  {{ optionLabel(promptStatusOptions, record.status) }}
                </a-tag>
              </template>
            </template>
          </a-table>
        </a-col>

        <a-col :xs="24" :xl="14">
          <a-empty v-if="!selectedPrompt" description="选择 Prompt 版本查看模板、变量和 Schema" />
          <template v-else>
            <a-card :bordered="false" class="inner-panel" :title="selectedPrompt.templateName">
              <template #extra>
                <a-space>
                  <a-tag :color="optionColor(promptStatusOptions, selectedPrompt.status)">
                    {{ optionLabel(promptStatusOptions, selectedPrompt.status) }}
                  </a-tag>
                  <a-button size="small" @click="runPreview">预览</a-button>
                </a-space>
              </template>
              <pre class="template-box">{{ selectedPrompt.templateContent }}</pre>
            </a-card>

            <a-row :gutter="[16, 16]">
              <a-col :xs="24" :lg="12">
                <a-card :bordered="false" class="inner-panel" title="变量">
                  <a-table
                    row-key="variableName"
                    size="small"
                    :columns="variableColumns"
                    :data-source="selectedPrompt.variables || []"
                    :pagination="false"
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'required'">
                        <a-tag :color="record.required ? 'error' : 'default'">
                          {{ record.required ? '必填' : '可选' }}
                        </a-tag>
                      </template>
                    </template>
                  </a-table>
                </a-card>
              </a-col>
              <a-col :xs="24" :lg="12">
                <a-card :bordered="false" class="inner-panel" title="输出 Schema">
                  <a-collapse>
                    <a-collapse-panel
                      v-for="schema in selectedPrompt.outputSchemas || []"
                      :key="schema.schemaVersion"
                      :header="schema.schemaVersion"
                    >
                      <pre class="schema-box">{{ prettyJson(schema.schemaJson) }}</pre>
                    </a-collapse-panel>
                  </a-collapse>
                </a-card>
              </a-col>
            </a-row>

            <a-card :bordered="false" class="inner-panel" title="本地预览（不触发模型调用）">
              <a-alert
                v-if="preview?.missingVariables?.length"
                show-icon
                type="warning"
                class="preview-alert"
                :message="`缺失变量：${preview.missingVariables.join(', ')}`"
              />
              <pre class="template-box">{{ preview?.renderedPrompt || '点击预览查看变量替换结果' }}</pre>
            </a-card>
          </template>
        </a-col>
      </a-row>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { getAiPrompt, getAiPrompts, previewAiPrompt } from '@/api/prompts'
import type { AiPromptPreview, AiPromptQuery, AiPromptTemplate, AiPromptVariable } from '@/api/types'
import { optionColor, optionLabel, promptStatusOptions } from '@/utils/options'

const loading = ref(false)
const prompts = ref<AiPromptTemplate[]>([])
const total = ref(0)
const selectedPrompt = ref<AiPromptTemplate>()
const preview = ref<AiPromptPreview>()
const query = reactive<AiPromptQuery>({ page: 1, size: 10 })

const columns: TableColumnsType<AiPromptTemplate> = [
  { title: 'Prompt', key: 'prompt', fixed: 'left', width: 260 },
  { title: '场景', dataIndex: 'scenario', width: 140 },
  { title: '状态', key: 'status', width: 110 },
  { title: '更新时间', dataIndex: 'updatedAt', width: 180 },
]
const variableColumns: TableColumnsType<AiPromptVariable> = [
  { title: '变量', dataIndex: 'variableName', width: 140 },
  { title: '来源路径', dataIndex: 'sourcePath', width: 180 },
  { title: '必填', key: 'required', width: 90 },
  { title: '说明', dataIndex: 'description' },
]

const pagination = computed<TablePaginationConfig>(() => ({
  current: query.page,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
}))

const fetchPrompts = async () => {
  loading.value = true
  try {
    const result = await getAiPrompts(query)
    prompts.value = result.items
    total.value = result.total
    if (!selectedPrompt.value && result.items.length) await selectPrompt(result.items[0])
  } finally {
    loading.value = false
  }
}
const selectPrompt = async (prompt: AiPromptTemplate) => {
  selectedPrompt.value = await getAiPrompt(prompt.bizId)
  preview.value = undefined
}
const promptRow = (prompt: AiPromptTemplate) => ({ onClick: () => selectPrompt(prompt) })
const handleTableChange = (page: TablePaginationConfig) => {
  query.page = page.current || 1
  query.size = page.pageSize || 10
  fetchPrompts()
}
const runPreview = async () => {
  if (!selectedPrompt.value) return
  preview.value = await previewAiPrompt({ promptBizId: selectedPrompt.value.bizId, variables: {} })
}
const prettyJson = (value: string) => {
  try {
    return JSON.stringify(JSON.parse(value), null, 2)
  } catch {
    return value || '-'
  }
}

onMounted(fetchPrompts)
</script>

<style scoped>
.page {
  width: 100%;
}

.inner-panel {
  margin-bottom: 16px;
}

.template-box,
.schema-box {
  max-height: 360px;
  padding: 12px;
  overflow: auto;
  white-space: pre-wrap;
  background: #f7f8fa;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.preview-alert {
  margin-bottom: 12px;
}
</style>
