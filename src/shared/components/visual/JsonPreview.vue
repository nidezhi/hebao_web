<template>
  <div class="json-preview">
    <a-empty v-if="displayValue == null && !rawText" description="暂无结构化 JSON" />
    <pre v-else-if="displayValue != null">{{ formatted }}</pre>
    <pre v-else-if="rawText" class="json-preview__raw">{{ rawText }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: unknown
  raw?: string
}>()

const rawText = computed(() => typeof props.raw === 'string' ? props.raw.trim() : '')

const parsedRaw = computed(() => {
  if (!rawText.value) return undefined
  try {
    return JSON.parse(rawText.value)
  } catch {
    return undefined
  }
})

const displayValue = computed(() => props.value ?? parsedRaw.value)

const formatted = computed(() => JSON.stringify(displayValue.value, null, 2))
</script>
