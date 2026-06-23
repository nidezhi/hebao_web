<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-alert
      show-icon
      type="info"
      message="产品风险页以画像、数据质量和 Mock 门禁为核心；mockTradable=false 时所有模拟交易入口应禁用并展示原因。"
    />
    <ProductListView />
  </a-space>
</template>

<script setup lang="ts">
import ProductListView from '@/views/products/ProductListView.vue'
</script>

<style scoped>
.page {
  width: 100%;
}
</style>
