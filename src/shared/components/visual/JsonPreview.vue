<template>
  <div class="json-preview">
    <a-empty v-if="value == null && !raw" description="暂无结构化 JSON" />
    <a-alert v-else-if="value == null && raw" type="warning" show-icon message="原始 JSON 不可解析" />
    <pre v-else>{{ formatted }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: unknown
  raw?: string
}>()

const formatted = computed(() => JSON.stringify(props.value, null, 2))
</script>
