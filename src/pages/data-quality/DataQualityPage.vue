<template>
  <BusinessPageShell
    title="Data Quality 数据质量"
    description="数据质量先于 AI 输出。这里展示数据源健康、可信等级、质量趋势和不能支撑自动 Mock 的缺口。"
    :endpoints="[endpoints.dataSource.list, endpoints.dataSource.qualityList]"
    :icon="DatabaseOutlined"
    status-text="QUALITY GATE"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="10">
          <a-card class="page-card" :bordered="false" title="数据源健康矩阵">
            <div class="quality-matrix">
              <div
                v-for="cell in matrixCells"
                :key="cell.key"
                class="quality-matrix__cell"
                :class="{ 'quality-matrix__cell--danger': cell.degraded > 0 && ['L1', 'L2'].includes(cell.trustLevel) }"
              >
                <span>{{ cell.sourceType }} / {{ cell.trustLevel }}</span>
                <strong>{{ cell.total }}</strong>
                <small>启用 {{ cell.enabled }} · 降级 {{ cell.degraded }}</small>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="14">
          <a-card class="page-card" :bordered="false" title="缺口与低质量源">
            <a-list :data-source="gaps" size="small">
              <template #renderItem="{ item }">
                <a-list-item @click="openSource(item)" class="clickable-row">
                  <a-list-item-meta
                    :title="`${item.sourceCode} · ${item.sourceName}`"
                    :description="item.displayMessage || item.health?.failureReason || '质量分或健康状态不足'"
                  />
                  <QualityBar :value="item.latestQuality?.qualityScore" label="质量" />
                </a-list-item>
              </template>
              <template #empty>
                <EmptyEvidence description="暂无低质量或缺口数据源。" />
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>

      <a-card class="page-card" :bordered="false" title="数据源列表">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="sources"
          :columns="columns"
          :pagination="{ pageSize: 12 }"
          @row="rowEvents"
        />
      </a-card>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="820" title="数据源详情与质量趋势">
      <a-space v-if="selectedSource" direction="vertical" :size="16" class="full-width">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="数据源">{{ selectedSource.sourceCode }}</a-descriptions-item>
          <a-descriptions-item label="名称">{{ selectedSource.sourceName }}</a-descriptions-item>
          <a-descriptions-item label="类型">{{ selectedSource.sourceType }}</a-descriptions-item>
          <a-descriptions-item label="可信等级">{{ selectedSource.trustLevel }}</a-descriptions-item>
          <a-descriptions-item label="最近成功">{{ formatDateTime(selectedSource.health?.lastSuccessAt) }}</a-descriptions-item>
          <a-descriptions-item label="成功率">{{ formatPercent(selectedSource.health?.successRate) }}</a-descriptions-item>
          <a-descriptions-item label="失败原因" :span="2">{{ selectedSource.health?.failureReason || '-' }}</a-descriptions-item>
        </a-descriptions>
        <BusinessChart
          title="质量趋势"
          unit="qualityScore / missingRate / duplicateRate"
          :empty="qualitySnapshots.length === 0"
          :option="trendOption"
        />
        <a-table
          row-key="bizId"
          size="small"
          :data-source="qualitySnapshots"
          :pagination="false"
          :columns="snapshotColumns"
        />
      </a-space>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { DatabaseOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, formatPercent } from '@/shared/utils/format'
import BusinessChart from '@/shared/components/business/BusinessChart.vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import QualityBar from '@/shared/components/visual/QualityBar.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listDataQualitySnapshots, listDataSources } from '@/entities/data-source/api'
import { summarizeDataSources } from '@/entities/data-source/adapter'
import type { DataQualitySnapshotDto, DataSourceDto } from '@/entities/data-source/model'
import { qualityLevelOptions } from '@/shared/dictionaries/status'

const loading = ref(false)
const errorMessage = ref('')
const sources = ref<DataSourceDto[]>([])
const qualitySnapshots = ref<DataQualitySnapshotDto[]>([])
const selectedSource = ref<DataSourceDto>()
const drawerOpen = ref(false)

const summary = computed(() => summarizeDataSources(sources.value))
const gaps = computed(() => sources.value.filter((item) =>
  ['LOW', 'DEMO_ONLY'].includes(item.qualityLevel || '')
  || Number(item.latestQuality?.qualityScore ?? 1) < 0.45
  || Boolean(item.health?.failureReason),
))

const metrics = computed(() => [
  { label: '数据源总数', value: summary.value.total, hint: `启用 ${summary.value.enabled}` },
  { label: 'L1/L2 可用', value: sources.value.filter((item) => ['L1', 'L2'].includes(item.trustLevel) && item.enabled).length, hint: '关键数据源' },
  { label: '平均质量分', value: formatPercent(summary.value.averageQuality), hint: '真实快照均值' },
  { label: '缺口数量', value: gaps.value.length, hint: '低质 / 失败 / 演示' },
])

const matrixCells = computed(() => {
  const map = new Map<string, { key: string; sourceType: string; trustLevel: string; total: number; enabled: number; degraded: number }>()
  sources.value.forEach((source) => {
    const key = `${source.sourceType}-${source.trustLevel}`
    const cell = map.get(key) || { key, sourceType: source.sourceType, trustLevel: source.trustLevel, total: 0, enabled: 0, degraded: 0 }
    cell.total += 1
    if (source.enabled) cell.enabled += 1
    if (['LOW', 'DEMO_ONLY'].includes(source.qualityLevel || '') || source.health?.failureReason) cell.degraded += 1
    map.set(key, cell)
  })
  return [...map.values()]
})

const trendOption = computed(() => ({
  tooltip: { trigger: 'axis' },
  legend: { data: ['质量分', '缺失率', '重复率', '新鲜度'] },
  grid: { left: 40, right: 24, top: 42, bottom: 36 },
  xAxis: { type: 'category', data: qualitySnapshots.value.map((item) => formatDateTime(item.snapshotTime)) },
  yAxis: { type: 'value', min: 0, max: 1 },
  series: [
    { name: '质量分', type: 'line', data: qualitySnapshots.value.map((item) => item.qualityScore) },
    { name: '缺失率', type: 'line', data: qualitySnapshots.value.map((item) => item.missingRate) },
    { name: '重复率', type: 'line', data: qualitySnapshots.value.map((item) => item.duplicateRate) },
    { name: '新鲜度', type: 'line', data: qualitySnapshots.value.map((item) => item.freshnessScore) },
  ],
}))

const columns = [
  { title: '编码', dataIndex: 'sourceCode' },
  { title: '名称', dataIndex: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType' },
  { title: '可信', dataIndex: 'trustLevel' },
  { title: '启用', customRender: ({ record }: { record: DataSourceDto }) => record.enabled ? '启用' : '停用' },
  { title: '质量等级', customRender: ({ record }: { record: DataSourceDto }) => h(StatusTag, { value: record.qualityLevel, options: qualityLevelOptions }) },
  { title: '成功率', customRender: ({ record }: { record: DataSourceDto }) => formatPercent(record.health?.successRate) },
  { title: '质量分', customRender: ({ record }: { record: DataSourceDto }) => formatPercent(record.latestQuality?.qualityScore) },
]

const snapshotColumns = [
  { title: '时间', customRender: ({ record }: { record: DataQualitySnapshotDto }) => formatDateTime(record.snapshotTime) },
  { title: '数据类型', dataIndex: 'dataType' },
  { title: '质量分', customRender: ({ record }: { record: DataQualitySnapshotDto }) => formatPercent(record.qualityScore) },
  { title: '缺失率', customRender: ({ record }: { record: DataQualitySnapshotDto }) => formatPercent(record.missingRate) },
  { title: '样本数', dataIndex: 'sampleCount' },
]

const rowEvents = (record: DataSourceDto) => ({ onClick: () => openSource(record) })

const openSource = async (source: DataSourceDto) => {
  selectedSource.value = source
  drawerOpen.value = true
  qualitySnapshots.value = []
  try {
    qualitySnapshots.value = await listDataQualitySnapshots({
      sourceCode: source.sourceCode,
      dataType: source.sourceType,
      limit: 30,
    })
  } catch {
    qualitySnapshots.value = []
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listDataSources({ page: 1, size: 100, sort: 'updatedAt', direction: 'desc' })
    sources.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '数据质量接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
