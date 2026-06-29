<template>
  <aside class="automation-guard-panel">
    <div class="automation-guard-panel__head">
      <div>
        <span class="eyebrow">SAFETY POLICY</span>
        <h3>自动化安全闸门</h3>
      </div>
      <a-tag :color="gateResult === 'BLOCK' ? 'red' : 'green'">{{ gateResult || 'PENDING' }}</a-tag>
    </div>

    <div class="guard-decision" :class="{ 'guard-decision--blocked': !allowMock }">
      <span>当前闭环动作边界</span>
      <strong>{{ allowMock ? '允许 Mock 闭环' : '停止自动动作' }}</strong>
      <small>{{ runStatus || '等待运行实例' }}</small>
    </div>

    <div class="guard-policy-stack">
      <div
        v-for="item in policies"
        :key="item.title"
        class="guard-policy-row"
        :class="`guard-policy-row--${item.tone}`"
      >
        <span class="guard-policy-row__rail" />
        <div>
          <strong>{{ item.title }}</strong>
          <small>{{ item.description }}</small>
        </div>
        <a-tag>{{ item.result }}</a-tag>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  allowMock?: boolean
  gateResult?: string
  runStatus?: string
}>()

const policies = computed(() => [
  {
    title: 'Mock 自动交易',
    description: props.allowMock ? '可进入模拟组合、订单和回测链路' : '报告或数据门禁阻断时不自动下单',
    result: props.allowMock ? '允许' : '阻断',
    tone: props.allowMock ? 'ok' : 'danger',
  },
  {
    title: 'Prompt 正式启用',
    description: '只生成候选与评估证据，正式启用必须人工确认',
    result: '人工确认',
    tone: 'hold',
  },
  {
    title: '模型正式启用',
    description: '只生成候选模型版本，生产绑定走灰度开关',
    result: '灰度开关',
    tone: 'hold',
  },
  {
    title: '真实交易',
    description: '自动闭环永不触发真实资金交易',
    result: '禁用',
    tone: 'danger',
  },
])
</script>
