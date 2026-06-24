<template>
  <a-row :gutter="[14, 14]" class="metric-strip">
    <a-col v-for="metric in metrics" :key="metric.label" :xs="24" :sm="12" :lg="6">
      <div class="metric-cell">
        <span>{{ metric.label }}</span>
        <strong>{{ metric.value }}</strong>
        <small v-if="metric.hint">{{ metric.hint }}</small>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
defineProps<{
  metrics: Array<{
    label: string
    value: string | number
    hint?: string
  }>
}>()
</script>
