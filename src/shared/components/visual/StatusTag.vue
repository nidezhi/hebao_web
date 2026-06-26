<template>
  <a-tag :color="resolved.color">{{ resolved.label }}</a-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value?: string | number | boolean
  options?: readonly { label: string; value: string | number | boolean; color?: string }[]
  fallback?: string
}>(), {
  options: () => [],
  fallback: '-',
})

const resolved = computed(() => {
  const match = props.options.find((option) => option.value === props.value)
  return {
    label: match?.label || String(props.value ?? props.fallback),
    color: match?.color || 'default',
  }
})
</script>
