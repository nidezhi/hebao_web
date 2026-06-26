<template>
  <div class="runtime-orbit" :class="`runtime-orbit--${tone}`">
    <div class="runtime-orbit__ring ring-a" />
    <div class="runtime-orbit__ring ring-b" />
    <div class="runtime-orbit__ring ring-c" />
    <div class="runtime-orbit__core">
      <span>{{ label }}</span>
      <strong>{{ status }}</strong>
    </div>
    <div class="runtime-orbit__label label-a">{{ labels[0] || 'AI' }}</div>
    <div class="runtime-orbit__label label-b">{{ labels[1] || 'DATA' }}</div>
    <div class="runtime-orbit__label label-c">{{ labels[2] || 'RISK' }}</div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  status?: string
  labels?: string[]
  tone?: 'blue' | 'green' | 'purple' | 'orange'
}>(), {
  label: 'REAL API',
  status: 'ONLINE',
  labels: () => ['AI', 'TASK', 'RISK'],
  tone: 'blue',
})
</script>
