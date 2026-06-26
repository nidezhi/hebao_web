<template>
  <a-empty :description="description">
    <template #image>
      <div class="empty-evidence__mark">∅</div>
    </template>
    <slot />
  </a-empty>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  description?: string
}>(), {
  description: '接口已返回空数据；不填充演示数据，等待真实业务记录。',
})
</script>
