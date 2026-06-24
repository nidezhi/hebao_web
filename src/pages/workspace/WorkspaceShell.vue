<template>
  <a-space direction="vertical" :size="18" class="deck-page">
    <a-alert
      show-icon
      type="info"
      :message="riskNotice"
    />

    <a-card class="cockpit-card" :bordered="false">
      <template #title>{{ title }}</template>
      <template #extra>
        <a-tag :color="statusColor">{{ statusText }}</a-tag>
      </template>

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="10">
          <div class="system-tile workspace-brief">
            <component :is="icon" />
            <strong>{{ objective }}</strong>
            <p>{{ description }}</p>
          </div>
        </a-col>
        <a-col :xs="24" :xl="14">
          <a-descriptions bordered size="small" :column="1">
            <a-descriptions-item label="主要接口">
              <a-space wrap>
                <a-tag v-for="endpoint in endpoints" :key="endpoint" color="cyan">
                  {{ endpoint }}
                </a-tag>
              </a-space>
            </a-descriptions-item>
            <a-descriptions-item label="初始化策略">
              {{ initialization }}
            </a-descriptions-item>
            <a-descriptions-item label="下一步">
              {{ nextStep }}
            </a-descriptions-item>
          </a-descriptions>
        </a-col>
      </a-row>
    </a-card>

    <a-card class="cockpit-card" :bordered="false" title="真实接口探测">
      <a-spin :spinning="loading">
        <a-result
          v-if="errorMessage"
          status="warning"
          title="接口暂不可用"
          :sub-title="errorMessage"
        />
        <a-empty
          v-else-if="loaded && itemCount === 0"
          description="接口已返回，但当前没有业务数据；保持空状态，不填充演示数据。"
        />
        <a-descriptions v-else-if="loaded" bordered size="small" :column="2">
          <a-descriptions-item label="记录数">{{ itemCount }}</a-descriptions-item>
          <a-descriptions-item label="状态">已连接真实 API client</a-descriptions-item>
        </a-descriptions>
        <a-empty v-else description="等待发起接口探测" />
      </a-spin>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  title: string
  objective: string
  description: string
  endpoints: string[]
  initialization: string
  nextStep: string
  icon: Component
  loader?: () => Promise<{ count: number }>
  riskNotice?: string
}>()

const loading = ref(false)
const loaded = ref(false)
const itemCount = ref(0)
const errorMessage = ref('')

const statusText = computed(() => {
  if (loading.value) return 'CONNECTING'
  if (errorMessage.value) return 'API WAITING'
  if (loaded.value) return 'READY'
  return 'STANDBY'
})

const statusColor = computed(() => {
  if (loading.value) return 'blue'
  if (errorMessage.value) return 'gold'
  if (loaded.value) return 'green'
  return 'default'
})

const riskNotice = computed(() =>
  props.riskNotice || '当前页面处于初始化阶段：只连接真实 API client，不展示静态假业务数据。',
)

const runLoader = async () => {
  if (!props.loader) return
  loading.value = true
  errorMessage.value = ''
  try {
    const result = await props.loader()
    itemCount.value = result.count
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(runLoader)
</script>

<style scoped>
.workspace-brief {
  min-height: 100%;
}
</style>
