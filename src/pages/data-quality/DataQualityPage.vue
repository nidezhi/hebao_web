<template>
  <BusinessPageShell
    title="Data Quality 数据质量"
    description="查看数据源健康、质量分、缺口原因和降级状态；低质量数据会影响报告与 Mock 动作入口。"
    :endpoints="[endpoints.dataSource.list, endpoints.dataSource.qualityList]"
    :icon="ApiOutlined"
    :status-text="errorMessage ? 'API WAITING' : 'QUALITY SCAN'"
    risk-notice="数据质量门禁是投资链路的第一道闸门：LOW / DEMO_ONLY 必须降级展示，不得包装为确定性建议。"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && sources.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="16">
          <a-card class="cockpit-card" :bordered="false" title="数据源健康矩阵">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="sources"
              :columns="columns"
              :pagination="{ pageSize: 8 }"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled ? 'success' : 'default'">
                    {{ record.enabled ? '启用' : '停用' }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'qualityLevel'">
                  <a-tag :color="qualityColor(record.qualityLevel)">
                    {{ record.qualityLevel || '未知' }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'qualityScore'">
                  {{ formatPercent(record.latestQuality?.qualityScore) }}
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="8">
          <a-card class="cockpit-card" :bordered="false" title="缺口与降级说明">
            <a-list :data-source="degradedSources" size="small">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :title="item.sourceName">
                    <template #description>
                      {{ item.displayMessage || item.health?.failureReason || '质量分不足或缺少快照' }}
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
              <template #empty>
                <a-empty description="暂无降级数据源" />
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ApiOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listDataSources } from '@/entities/data-source/api'
import type { DataSourceDto } from '@/entities/data-source/model'
import { summarizeDataSources } from '@/entities/data-source/adapter'
import { formatDateTime, formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const sources = ref<DataSourceDto[]>([])

const summary = computed(() => summarizeDataSources(sources.value))
const degradedSources = computed(() =>
  sources.value.filter((item) => ['LOW', 'DEMO_ONLY'].includes(item.qualityLevel || '') || item.enabled === false),
)
const metrics = computed(() => [
  { label: '数据源总数', value: summary.value.total, hint: '真实 API 返回' },
  { label: '启用来源', value: summary.value.enabled, hint: '参与采集与报告' },
  { label: '降级来源', value: summary.value.degraded, hint: 'LOW / DEMO_ONLY' },
  { label: '平均质量', value: formatPercent(summary.value.averageQuality), hint: 'latestQuality.qualityScore' },
])

const columns = [
  { title: '来源编码', dataIndex: 'sourceCode', key: 'sourceCode' },
  { title: '名称', dataIndex: 'sourceName', key: 'sourceName' },
  { title: '类型', dataIndex: 'sourceType', key: 'sourceType' },
  { title: '可信等级', dataIndex: 'trustLevel', key: 'trustLevel' },
  { title: '启用', key: 'enabled' },
  { title: '质量等级', key: 'qualityLevel' },
  { title: '质量分', key: 'qualityScore' },
  { title: '最近成功', key: 'lastSuccessAt', customRender: ({ record }: { record: DataSourceDto }) => formatDateTime(record.health?.lastSuccessAt) },
]

const qualityColor = (level?: string) => {
  if (level === 'HIGH') return 'success'
  if (level === 'MEDIUM') return 'processing'
  if (level === 'LOW') return 'warning'
  if (level === 'DEMO_ONLY') return 'default'
  return 'default'
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listDataSources({ page: 1, size: 50 })
    sources.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
