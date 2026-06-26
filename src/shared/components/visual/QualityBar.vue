<template>
  <div class="quality-bar">
    <div class="quality-bar__head">
      <span>{{ label }}</span>
      <strong>{{ displayValue }}</strong>
    </div>
    <a-progress :percent="percent" :stroke-color="strokeColor" :show-info="false" />
    <small v-if="hint">{{ hint }}</small>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value?: number
  label?: string
  hint?: string
}>(), {
  label: '质量分',
  hint: '',
})

const percent = computed(() => {
  if (typeof props.value !== 'number') return 0
  return Math.max(0, Math.min(100, Math.round(props.value * 100)))
})
const displayValue = computed(() => (typeof props.value === 'number' ? `${percent.value}%` : '-'))
const strokeColor = computed(() => {
  if (percent.value >= 75) return '#16a34a'
  if (percent.value >= 45) return '#d97706'
  return '#dc2626'
})
</script>
