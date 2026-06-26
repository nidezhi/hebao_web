<template>
  <a-tag :color="color">{{ label }}</a-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  reasonCode?: string
  riskLevel?: string
}>()

const reasonMap: Record<string, string> = {
  LOW_DATA_QUALITY: '数据质量不足',
  PRODUCT_NOT_MOCK_TRADABLE: '产品不可 Mock',
  INSUFFICIENT_CASH: '现金不足',
  INSUFFICIENT_POSITION: '持仓不足',
  DATA_GATE_BLOCKED: '数据门禁阻断',
  DATA_GAP_REPORT: '数据缺口报告',
  NO_EXECUTABLE_AMOUNT: '无可执行金额',
  INVALID_TOTAL_ASSET: '组合资产无效',
}

const label = computed(() => reasonMap[props.reasonCode || ''] || props.reasonCode || '未给出原因')
const color = computed(() => {
  if (props.riskLevel === 'HIGH') return 'error'
  if (props.riskLevel === 'MEDIUM') return 'warning'
  return 'default'
})
</script>
