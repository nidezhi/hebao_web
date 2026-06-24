<template>
  <a-config-provider :theme="theme">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#20f7ff',
    colorInfo: '#20f7ff',
    colorSuccess: '#51ffb1',
    colorWarning: '#ffd166',
    colorError: '#ff4d7d',
    colorText: '#dceeff',
    colorTextSecondary: '#89a7c8',
    colorBgContainer: 'rgba(8, 20, 38, 0.82)',
    colorBgElevated: 'rgba(10, 26, 48, 0.96)',
    colorBorder: 'rgba(32, 247, 255, 0.2)',
    borderRadius: 8,
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
  },
}
</script>
