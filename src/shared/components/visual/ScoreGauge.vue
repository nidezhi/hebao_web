<template>
  <div class="score-gauge">
    <a-progress
      type="circle"
      :percent="percent"
      :size="size"
      :status="status"
      :stroke-color="strokeColor"
    />
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  score?: number
  label?: string
  size?: number
}>(), {
  label: '',
  size: 92,
})

const percent = computed(() => {
  if (typeof props.score !== 'number') return 0
  return Math.max(0, Math.min(100, Math.round(props.score * 100)))
})

const status = computed(() => (percent.value < 45 ? 'exception' : 'normal'))
const strokeColor = computed(() => {
  if (percent.value >= 75) return '#16a34a'
  if (percent.value >= 45) return '#2563eb'
  return '#dc2626'
})
</script>
