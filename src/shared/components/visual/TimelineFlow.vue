<template>
  <div class="timeline-flow">
    <button
      v-for="node in nodes"
      :key="node.key"
      type="button"
      class="timeline-flow__node"
      :class="`timeline-flow__node--${String(node.status || 'default').toLowerCase()}`"
      @click="$emit('select', node.key)"
    >
      <span class="timeline-flow__dot" />
      <strong>{{ node.title }}</strong>
      <small v-if="node.subtitle">{{ node.subtitle }}</small>
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  select: [key: string]
}>()

defineProps<{
  nodes: Array<{
    key: string
    title: string
    subtitle?: string
    status?: string
  }>
}>()
</script>
