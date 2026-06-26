<template>
  <a-card class="page-card management-action-card" :bordered="false" :title="title">
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :xl="9">
        <a-list :data-source="actions" size="small" class="mutation-list">
          <template #renderItem="{ item }">
            <a-list-item
              class="clickable-row"
              :class="{ 'mutation-list__item--active': selectedAction?.id === item.id }"
              @click="selectAction(item)"
            >
              <a-list-item-meta :title="item.title" :description="item.description" />
              <a-tag :color="item.danger ? 'error' : 'blue'">{{ item.method || 'POST' }}</a-tag>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
      <a-col :xs="24" :xl="15">
        <EmptyEvidence v-if="!selectedAction" description="请选择一个配置动作。" />
        <a-form v-else layout="vertical" class="full-width">
          <a-alert
            :type="selectedAction.danger ? 'warning' : 'info'"
            show-icon
            :message="selectedAction.endpoint"
            :description="selectedAction.danger ? '高风险动作会二次确认，并保留后端失败原因。' : '按字段填写，提交时统一转换为 POST + JSON body。'"
          />
          <div class="management-form-grid">
            <a-form-item
              v-for="field in fields"
              :key="field.key"
              :label="field.label"
              :class="{ 'management-form-grid__wide': field.kind === 'complex' }"
            >
              <a-switch
                v-if="field.kind === 'boolean'"
                v-model:checked="formState[field.key]"
              />
              <a-input-number
                v-else-if="field.kind === 'number'"
                v-model:value="formState[field.key]"
                class="full-width"
              />
              <a-select
                v-else-if="field.options?.length"
                v-model:value="formState[field.key]"
                :options="field.options"
              />
              <a-textarea
                v-else-if="field.kind === 'complex'"
                v-model:value="formState[field.key]"
                :auto-size="{ minRows: 4, maxRows: 9 }"
              />
              <a-input
                v-else
                v-model:value="formState[field.key]"
                :placeholder="field.placeholder"
              />
            </a-form-item>
          </div>
          <a-space>
            <a-button type="primary" :loading="executing" @click="confirmExecute">执行接口</a-button>
            <a-button @click="resetPayload">恢复默认</a-button>
          </a-space>
          <a-card v-if="result !== undefined" size="small" title="接口返回">
            <JsonPreview :value="result" />
          </a-card>
        </a-form>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { Modal, message } from 'ant-design-vue'
import { computed, reactive, ref } from 'vue'
import { safeParseJson } from '@/shared/utils/format'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'

export interface ApiMutationAction {
  id: string
  title: string
  description: string
  endpoint: string
  method?: 'POST'
  danger?: boolean
  defaultPayload: Record<string, unknown>
  execute: (payload: Record<string, unknown>) => Promise<unknown>
}

const props = withDefaults(defineProps<{
  title?: string
  actions: ApiMutationAction[]
}>(), {
  title: '配置动作',
})

const selectedAction = ref<ApiMutationAction>()
const executing = ref(false)
const result = ref<unknown>()
const formState = reactive<Record<string, string | number | boolean | undefined>>({})

const optionMap: Record<string, Array<{ label: string; value: string }>> = {
  status: [
    { label: 'ACTIVE', value: 'ACTIVE' },
    { label: 'DISABLED', value: 'DISABLED' },
    { label: 'LOCKED', value: 'LOCKED' },
    { label: 'TRADABLE', value: 'TRADABLE' },
    { label: 'SUSPENDED', value: 'SUSPENDED' },
    { label: 'DRAFT', value: 'DRAFT' },
    { label: 'VALIDATING', value: 'VALIDATING' },
    { label: 'INACTIVE', value: 'INACTIVE' },
    { label: 'ARCHIVED', value: 'ARCHIVED' },
    { label: 'RETIRED', value: 'RETIRED' },
  ],
  kycStatus: [
    { label: '未认证', value: 'UNVERIFIED' },
    { label: '已认证', value: 'VERIFIED' },
    { label: '审核中', value: 'REVIEWING' },
    { label: '已拒绝', value: 'REJECTED' },
  ],
  feedbackAction: [
    { label: '采纳', value: 'ADOPT' },
    { label: '拒绝', value: 'REJECT' },
    { label: '观察', value: 'WATCH' },
    { label: '忽略', value: 'IGNORE' },
  ],
}

const toLabel = (key: string) => {
  const labels: Record<string, string> = {
    bizId: '业务 ID',
    userBizId: '用户业务 ID',
    productBizId: '产品业务 ID',
    portfolioBizId: '组合业务 ID',
    reportBizId: '报告业务 ID',
    promptBizId: 'Prompt 业务 ID',
    roleCode: '角色编码',
    status: '状态',
    kycStatus: 'KYC 状态',
    riskLevel: '风险等级',
    sourceCode: '数据源编码',
    sourceName: '数据源名称',
    taskCode: '任务编码',
    promptCode: 'Prompt 编码',
    promptVersion: 'Prompt 版本',
    modelCode: '模型编码',
    modelVersion: '模型版本',
    idempotencyKey: '幂等键',
  }
  return labels[key] || key
}

const fields = computed(() => Object.entries(selectedAction.value?.defaultPayload || {}).map(([key, value]) => {
  const complex = Array.isArray(value) || (value !== null && typeof value === 'object')
  return {
    key,
    label: toLabel(key),
    kind: complex ? 'complex' : typeof value,
    placeholder: complex ? 'JSON 对象/数组' : '',
    options: optionMap[key],
  }
}))

const assignPayload = (payload: Record<string, unknown>) => {
  Object.keys(formState).forEach((key) => delete formState[key])
  Object.entries(payload).forEach(([key, value]) => {
    formState[key] = Array.isArray(value) || (value !== null && typeof value === 'object')
      ? JSON.stringify(value, null, 2)
      : value as string | number | boolean | undefined
  })
}

const collectPayload = () => {
  const payload: Record<string, unknown> = {}
  const defaults = selectedAction.value?.defaultPayload || {}
  Object.keys(defaults).forEach((key) => {
    const defaultValue = defaults[key]
    const value = formState[key]
    if (Array.isArray(defaultValue) || (defaultValue !== null && typeof defaultValue === 'object')) {
      const parsed = safeParseJson(String(value || ''))
      if (parsed === undefined) throw new Error(`${toLabel(key)} JSON 不可解析`)
      payload[key] = parsed
    } else {
      payload[key] = value
    }
  })
  return payload
}

const selectAction = (action: ApiMutationAction) => {
  selectedAction.value = action
  assignPayload(action.defaultPayload)
  result.value = undefined
}

const resetPayload = () => {
  if (selectedAction.value) assignPayload(selectedAction.value.defaultPayload)
}

const executeSelected = async () => {
  if (!selectedAction.value) return
  let payload: Record<string, unknown>
  try {
    payload = collectPayload()
  } catch (error) {
    message.warning(error instanceof Error ? error.message : '表单数据不可解析')
    return
  }
  executing.value = true
  result.value = undefined
  try {
    result.value = await selectedAction.value.execute(payload)
    message.success('接口执行成功')
  } catch (error) {
    message.error(error instanceof Error ? error.message : '接口执行失败')
  } finally {
    executing.value = false
  }
}

const confirmExecute = () => {
  if (!selectedAction.value) return
  Modal.confirm({
    title: selectedAction.value.danger ? '确认执行高风险配置动作？' : '确认执行配置动作？',
    content: `${selectedAction.value.title} · ${selectedAction.value.endpoint}`,
    okText: '确认执行',
    cancelText: '取消',
    okType: selectedAction.value.danger ? 'danger' : 'primary',
    onOk: executeSelected,
  })
}

if (props.actions[0]) {
  selectAction(props.actions[0])
}
</script>
