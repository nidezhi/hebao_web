<template>
  <div class="closed-loop-timeline">
    <TimelineFlow
      :nodes="nodes"
      @select="emit('select-step', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ClosedLoopRunView } from '@/entities/closed-loop/adapter'
import { closedLoopStepNameMap } from '@/entities/closed-loop/dictionary'
import TimelineFlow from '@/shared/components/visual/TimelineFlow.vue'

const orderedStepCodes = [
  'SAFETY_GUARD',
  'DATA_COLLECTION',
  'REPORT_GENERATION',
  'QUALITY_GATE',
  'PROMPT_CANDIDATE',
  'MODEL_CANDIDATE',
  'MOCK_TRADE',
  'BACKTEST_FEEDBACK',
  'PROMPT_ACTIVATION_GUARD',
  'MODEL_ACTIVATION_GUARD',
  'REAL_TRADE_GUARD',
]

const props = defineProps<{
  run?: ClosedLoopRunView
}>()

const emit = defineEmits<{
  'select-step': [stepCode: string]
}>()

const nodes = computed(() => {
  const stepMap = new Map((props.run?.stepsView || []).map((step) => [step.stepCode, step]))
  return orderedStepCodes.map((code) => {
    const step = stepMap.get(code)
    return {
      key: code,
      title: step?.displayName || closedLoopStepNameMap[code] || code,
      subtitle: step ? stepSubtitle(step.stepStatus, step.failureReason) : '等待运行',
      status: step?.stepStatus || 'PENDING',
    }
  })
})

const stepSubtitle = (status?: string, reason?: string) => {
  if (status === 'SUCCEEDED') return '已完成'
  if (status === 'RUNNING') return '执行中'
  if (status === 'PENDING') return '等待运行'
  if (status === 'SKIPPED') return '已跳过'
  if (status === 'FAILED') return reason ? '失败 · 查看证据' : '执行失败'
  if (status === 'BLOCKED') return reason ? '阻断 · 查看证据' : '已阻断'
  return status || '等待运行'
}
</script>
