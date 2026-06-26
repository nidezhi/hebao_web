<template>
  <div class="business-chart">
    <div v-if="title || unit" class="business-chart__head">
      <strong>{{ title }}</strong>
      <span>{{ unit }}</span>
    </div>
    <EmptyEvidence v-if="empty" :description="emptyText" />
    <div v-else ref="chartRef" class="business-chart__canvas" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsCoreOption } from 'echarts/core'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'

echarts.use([BarChart, LineChart, PieChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer])

const props = withDefaults(defineProps<{
  option?: EChartsCoreOption
  title?: string
  unit?: string
  empty?: boolean
  emptyText?: string
}>(), {
  title: '',
  unit: '',
  empty: false,
  emptyText: '暂无可绘制数据；不生成假图表。',
})

const chartRef = ref<HTMLElement>()
let chart: echarts.ECharts | undefined

const option = computed(() => props.option || {})

const render = () => {
  if (!chartRef.value || props.empty) return
  chart ||= echarts.init(chartRef.value)
  chart.setOption(option.value, true)
}

const resize = () => chart?.resize()

onMounted(() => {
  render()
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  chart?.dispose()
})

watch(() => [props.option, props.empty], render, { deep: true })
</script>
