<template>
  <a-config-provider :theme="theme">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 8,
  },
}
</script>
