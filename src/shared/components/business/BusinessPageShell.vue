<template>
  <a-space
    direction="vertical"
    :size="compact ? 12 : 18"
    class="deck-page business-page"
    :class="{ 'business-page--compact': compact }"
  >
    <a-alert
      show-icon
      type="warning"
      :message="riskNotice"
      class="risk-ribbon"
    />

    <a-card class="cockpit-card command-hero" :bordered="false">
      <div class="command-hero__beam" />
      <a-row :gutter="[18, 18]" align="middle">
        <a-col :xs="24" :xl="15">
          <span class="eyebrow">{{ eyebrow }}</span>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <a-space wrap>
            <a-tag v-for="endpoint in endpoints" :key="endpoint" color="cyan">
              {{ endpoint }}
            </a-tag>
          </a-space>
        </a-col>
        <a-col v-if="!compact" :xs="24" :xl="9">
          <RuntimeOrbit
            :label="orbitLabel"
            :status="statusText"
            :labels="orbitLabels"
            :tone="orbitTone"
          />
        </a-col>
      </a-row>
    </a-card>

    <slot />
  </a-space>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import RuntimeOrbit from './RuntimeOrbit.vue'

withDefaults(defineProps<{
  title: string
  eyebrow?: string
  description: string
  endpoints: string[]
  icon: Component
  statusText?: string
  orbitLabel?: string
  orbitLabels?: string[]
  orbitTone?: 'blue' | 'green' | 'purple' | 'orange'
  riskNotice?: string
  compact?: boolean
}>(), {
  eyebrow: 'DZCOM COMMAND WORKSPACE',
  statusText: 'ONLINE',
  orbitLabel: 'REAL API',
  orbitLabels: () => ['AI', 'TASK', 'RISK'],
  orbitTone: 'blue',
  riskNotice: '投资相关数据仅用于分析与 Mock 交易闭环验证，不构成真实收益承诺或投资建议。',
  compact: false,
})
</script>
