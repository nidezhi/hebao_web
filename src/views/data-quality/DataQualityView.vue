<template>
  <a-space direction="vertical" :size="16" class="page">
    <a-card class="page-card" :bordered="false">
      <div class="toolbar">
        <div class="toolbar-filters">
          <a-input-search
            v-model:value="query.keyword"
            allow-clear
            placeholder="数据源编码或名称"
            style="width: 220px"
            @search="search"
          />
          <a-select
            v-model:value="query.trustLevel"
            allow-clear
            placeholder="来源等级"
            style="width: 140px"
            :options="trustOptions"
            @change="search"
          />
          <a-select
            v-model:value="query.enabled"
            allow-clear
            placeholder="启用状态"
            style="width: 130px"
            :options="enabledOptions"
            @change="search"
          />
          <a-button @click="search">刷新</a-button>
        </div>
      </div>

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="10">
          <a-table
            row-key="sourceCode"
            size="small"
            :columns="sourceColumns"
            :data-source="sources"
            :loading="loading"
            :pagination="pagination"
            :scroll="{ x: 760 }"
            @change="handleTableChange"
            @row="sourceRow"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'source'">
                <strong>{{ record.sourceCode }}</strong>
                <div class="muted">{{ record.sourceName }}</div>
              </template>
              <template v-else-if="column.key === 'trustLevel'">
                <a-tag :color="record.trustLevel === 'L5' ? 'default' : 'processing'">
                  {{ record.trustLevel || '-' }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'quality'">
                <a-tag :color="optionColor(qualityLevelOptions, record.qualityLevel)">
                  {{ optionLabel(qualityLevelOptions, record.qualityLevel) }}
                </a-tag>
                <span>{{ formatPercent(record.latestQuality?.qualityScore) }}</span>
              </template>
              <template v-else-if="column.key === 'health'">
                <a-tag :color="record.enabled ? 'success' : 'default'">
                  {{ record.enabled ? '启用' : '停用' }}
                </a-tag>
                <span>{{ formatPercent(record.health?.successRate) }}</span>
              </template>
            </template>
          </a-table>
        </a-col>

        <a-col :xs="24" :xl="14">
          <a-card
            :bordered="false"
            class="inner-panel"
            :title="selectedSource ? `${selectedSource.sourceName} 质量趋势` : '选择数据源查看质量趋势'"
          >
            <template #extra>
              <a-tag v-if="selectedSource" :color="selectedSource.trustLevel === 'L5' ? 'default' : 'blue'">
                {{ selectedSource.trustLevel }}
              </a-tag>
            </template>
            <div ref="chartElement" class="quality-chart" />
          </a-card>

          <a-card class="inner-panel" :bordered="false" title="数据缺口与降级原因">
            <a-table
              row-key="bizId"
              size="small"
              :columns="gapColumns"
              :data-source="snapshots"
              :loading="snapshotLoading"
              :pagination="false"
              :scroll="{ x: 860 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'qualityScore'">
                  <a-progress
                    size="small"
                    :percent="Math.round((record.qualityScore || 0) * 100)"
                    :status="(record.qualityScore || 0) < 0.6 ? 'exception' : 'normal'"
                  />
                </template>
                <template v-else-if="column.key === 'detail'">
                  <span>{{ parseGapReason(record.detail) }}</span>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import type { EChartsType } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { getDataQualitySnapshots, getDataSources } from '@/api/dataSources'
import type { DataQualitySnapshot, DataSource, DataSourceQuery } from '@/api/types'
import { optionColor, optionLabel, qualityLevelOptions } from '@/utils/options'

echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

const loading = ref(false)
const snapshotLoading = ref(false)
const sources = ref<DataSource[]>([])
const snapshots = ref<DataQualitySnapshot[]>([])
const total = ref(0)
const selectedSource = ref<DataSource>()
const chartElement = ref<HTMLElement>()
let chart: EChartsType | undefined
let resizeObserver: ResizeObserver | undefined

const query = reactive<DataSourceQuery>({ page: 1, size: 10 })
const enabledOptions = [
  { label: '启用', value: true },
  { label: '停用', value: false },
]
const trustOptions = ['L1', 'L2', 'L3', 'L4', 'L5'].map((value) => ({ label: value, value }))

const sourceColumns: TableColumnsType<DataSource> = [
  { title: '数据源', key: 'source', fixed: 'left', width: 220 },
  { title: '类型', dataIndex: 'sourceType', width: 120 },
  { title: '等级', key: 'trustLevel', width: 90 },
  { title: '质量', key: 'quality', width: 180 },
  { title: '健康', key: 'health', width: 160 },
]

const gapColumns: TableColumnsType<DataQualitySnapshot> = [
  { title: '数据类型', dataIndex: 'dataType', fixed: 'left', width: 140 },
  { title: '质量分', key: 'qualityScore', width: 180 },
  { title: '缺失率', dataIndex: 'missingRate', width: 100 },
  { title: '样本数', dataIndex: 'sampleCount', width: 100 },
  { title: '快照时间', dataIndex: 'snapshotTime', width: 180 },
  { title: '缺口原因', key: 'detail', width: 260 },
]

const pagination = computed<TablePaginationConfig>(() => ({
  current: query.page,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const fetchSources = async () => {
  loading.value = true
  try {
    const result = await getDataSources(query)
    sources.value = result.items
    total.value = result.total
    if (!selectedSource.value && result.items.length) {
      await selectSource(result.items[0])
    }
  } finally {
    loading.value = false
  }
}

const selectSource = async (source: DataSource) => {
  selectedSource.value = source
  snapshotLoading.value = true
  try {
    snapshots.value = await getDataQualitySnapshots({ sourceCode: source.sourceCode, limit: 50 })
    renderChart()
  } finally {
    snapshotLoading.value = false
  }
}

const renderChart = async () => {
  await nextTick()
  if (!chartElement.value) return
  chart ||= echarts.init(chartElement.value)
  const ordered = [...snapshots.value].reverse()
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    grid: { left: 42, right: 24, top: 30, bottom: 58 },
    xAxis: {
      type: 'category',
      data: ordered.map((item) => formatShortTime(item.snapshotTime)),
    },
    yAxis: { type: 'value', min: 0, max: 1 },
    series: [
      {
        name: '质量分',
        type: 'line',
        smooth: true,
        data: ordered.map((item) => item.qualityScore ?? 0),
      },
      {
        name: '缺失率',
        type: 'line',
        smooth: true,
        data: ordered.map((item) => item.missingRate ?? 0),
      },
    ],
  }, true)
}

const sourceRow = (source: DataSource) => ({
  onClick: () => selectSource(source),
})
const handleTableChange = (page: TablePaginationConfig) => {
  query.page = page.current || 1
  query.size = page.pageSize || 10
  fetchSources()
}
const search = () => {
  query.page = 1
  fetchSources()
}
const parseGapReason = (detail?: string) => {
  if (!detail) return selectedSource.value?.displayMessage || '-'
  try {
    const parsed = JSON.parse(detail) as { reason?: string; message?: string }
    return parsed.reason || parsed.message || detail
  } catch {
    return detail
  }
}
const formatPercent = (value?: number) =>
  typeof value === 'number' ? `${(value * 100).toFixed(1)}%` : '-'
const formatShortTime = (value?: string) =>
  value ? new Date(value).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }) : '-'

onMounted(() => {
  fetchSources()
  resizeObserver = new ResizeObserver(() => chart?.resize())
  if (chartElement.value) resizeObserver.observe(chartElement.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chart?.dispose()
})
</script>

<style scoped>
.page {
  width: 100%;
}

.inner-panel {
  margin-bottom: 16px;
  background: #fff;
}

.quality-chart {
  width: 100%;
  height: 300px;
}
</style>
