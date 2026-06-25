<template>
  <div ref="chartRef" class="business-chart" :style="{ height }" />
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { ECharts, EChartsCoreOption } from 'echarts/core'

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
])

const props = withDefaults(defineProps<{
  option: EChartsCoreOption
  height?: string
}>(), {
  height: '260px',
})

const chartRef = ref<HTMLDivElement>()
let chart: ECharts | undefined
let resizeObserver: ResizeObserver | undefined

const render = async () => {
  await nextTick()
  if (!chartRef.value) return
  chart ||= echarts.init(chartRef.value)
  chart.setOption(props.option, true)
}

onMounted(() => {
  void render()
  if (chartRef.value) {
    resizeObserver = new ResizeObserver(() => chart?.resize())
    resizeObserver.observe(chartRef.value)
  }
})

watch(() => props.option, () => void render(), { deep: true })

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chart?.dispose()
  chart = undefined
})
</script>
