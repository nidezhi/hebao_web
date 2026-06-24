<template>
  <a-space direction="vertical" :size="18" class="deck-page">
    <a-card class="cockpit-card" :bordered="false">
      <template #title>操作舱 UI 方向</template>
      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :lg="8" v-for="principle in uiPrinciples" :key="principle.title">
          <div class="system-tile">
            <component :is="principle.icon" />
            <strong>{{ principle.title }}</strong>
            <p>{{ principle.description }}</p>
          </div>
        </a-col>
      </a-row>
    </a-card>

    <a-row :gutter="[18, 18]">
      <a-col :xs="24" :xl="14">
        <a-card class="cockpit-card" :bordered="false" title="视觉令牌">
          <div class="token-grid">
            <div v-for="token in visualTokens" :key="token.name" class="token-cell">
              <span class="token-swatch" :style="{ background: token.value }" />
              <strong>{{ token.name }}</strong>
              <small>{{ token.value }}</small>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :xl="10">
        <a-card class="cockpit-card" :bordered="false" title="状态表达">
          <a-space wrap>
            <a-tag color="cyan">READY</a-tag>
            <a-tag color="blue">RUNNING</a-tag>
            <a-tag color="green">PASSED</a-tag>
            <a-tag color="gold">DEGRADED</a-tag>
            <a-tag color="red">BLOCKED</a-tag>
            <a-tag color="purple">REVIEW</a-tag>
          </a-space>
          <a-divider />
          <a-progress :percent="76" status="active" />
          <a-progress :percent="42" stroke-color="#ffd166" />
          <a-progress :percent="18" status="exception" />
        </a-card>
      </a-col>
    </a-row>

    <a-card class="cockpit-card" :bordered="false" title="页面蓝图">
      <div class="blueprint">
        <div class="blueprint-header">Title / Context / Global Action</div>
        <div class="blueprint-sidebar">Domain Navigation</div>
        <div class="blueprint-main">Primary Work Surface</div>
        <div class="blueprint-aside">Inspector / Drawer / Audit</div>
        <div class="blueprint-footer">Telemetry / Validation / Empty State</div>
      </div>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import {
  AimOutlined,
  ClusterOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons-vue'

const uiPrinciples = [
  {
    title: '像操作舱，不像营销页',
    description: '深色底、网格线、扫描态、状态密度；让用户像在驾驶系统，而不是看广告板。',
    icon: h(AimOutlined),
  },
  {
    title: '高密度但不拥挤',
    description: '表格、指标、状态流、审计流优先；装饰只能服务层级和注意力。',
    icon: h(ClusterOutlined),
  },
  {
    title: '先框架，后业务',
    description: '所有业务页面必须等 API 文档生成后，再从 DTO 与领域模型重新生成。',
    icon: h(DeploymentUnitOutlined),
  },
]

const visualTokens = [
  { name: 'Primary Cyan', value: '#20f7ff' },
  { name: 'Deep Space', value: '#050a14' },
  { name: 'Panel Glass', value: 'rgba(8, 20, 38, 0.78)' },
  { name: 'Success Mint', value: '#51ffb1' },
  { name: 'Warning Amber', value: '#ffd166' },
  { name: 'Danger Magenta', value: '#ff4d7d' },
]
</script>
