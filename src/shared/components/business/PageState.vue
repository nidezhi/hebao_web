<template>
  <a-spin :spinning="loading">
    <a-result
      v-if="errorMessage"
      status="warning"
      title="接口暂不可用"
      :sub-title="errorMessage"
    />
    <a-empty
      v-else-if="empty"
      :description="emptyText"
    />
    <slot v-else />
  </a-spin>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  loading: boolean
  errorMessage?: string
  empty?: boolean
  emptyText?: string
}>(), {
  errorMessage: '',
  empty: false,
  emptyText: '接口已返回，但当前没有业务数据；保持空状态，不填充演示数据。',
})
</script>
