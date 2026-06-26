<template>
  <a-card class="page-card" :bordered="false" title="自动化安全闸门">
    <a-space direction="vertical" :size="12" class="full-width">
      <a-alert
        type="info"
        show-icon
        message="自动闭环可以执行 Mock，但不能自动启用新 Prompt、新模型或真实交易。"
      />
      <div class="guard-grid">
        <div class="guard-item guard-item--ok">
          <span>Mock 自动交易</span>
          <strong>{{ allowMock ? '允许' : '需后端闸门确认' }}</strong>
        </div>
        <div class="guard-item guard-item--hold">
          <span>Prompt 正式启用</span>
          <strong>人工确认</strong>
        </div>
        <div class="guard-item guard-item--hold">
          <span>模型正式启用</span>
          <strong>灰度开关</strong>
        </div>
        <div class="guard-item guard-item--danger">
          <span>真实交易</span>
          <strong>禁用</strong>
        </div>
      </div>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
defineProps<{
  allowMock?: boolean
}>()
</script>
