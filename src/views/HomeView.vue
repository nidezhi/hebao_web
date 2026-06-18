<template>
  <a-space direction="vertical" :size="16" class="dashboard">
    <section class="metric-band">
      <div v-for="item in statistics" :key="item.title" class="metric-item">
        <div class="metric-icon" :style="{ color: item.color, background: item.background }">
          <component :is="item.icon" />
        </div>
        <div>
          <span>{{ item.title }}</span>
          <strong>{{ item.value }}</strong>
          <small>{{ item.caption }}</small>
        </div>
      </div>
    </section>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :xl="14">
        <a-card class="page-card chart-card" title="产品结构" :bordered="false" :loading="loading">
          <div ref="productChartElement" class="dashboard-chart" />
        </a-card>
      </a-col>
      <a-col :xs="24" :xl="10">
        <a-card class="page-card chart-card" title="任务运行状态" :bordered="false" :loading="loading">
          <div ref="taskChartElement" class="dashboard-chart" />
        </a-card>
      </a-col>
    </a-row>

    <a-card class="page-card" title="最近任务执行" :bordered="false">
      <template #extra>
        <a-button type="link" @click="router.push('/investment/executions')">查看全部</a-button>
      </template>
      <a-table
        row-key="bizId"
        size="small"
        :columns="executionColumns"
        :data-source="recentExecutions"
        :loading="loading"
        :pagination="false"
        :scroll="{ x: 760 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'status'">
            <a-tag :color="optionColor(taskExecutionStatusOptions, record.status)">
              {{ optionLabel(taskExecutionStatusOptions, record.status) }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'startedAt'">
            {{ formatDateTime(record.startedAt) }}
          </template>
        </template>
      </a-table>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { computed, h, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TableColumnsType } from 'ant-design-vue'
import {
  ApiOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue'
import { PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsType } from 'echarts/core'
import { getProducts } from '@/api/products'
import { getUsers } from '@/api/users'
import { getTaskExecutions } from '@/api/investment'
import type { ProductType, ScheduledTaskExecution, TaskExecutionStatus } from '@/api/types'
import { optionColor, optionLabel, taskExecutionStatusOptions } from '@/utils/options'
import { useUserStore } from '@/stores/user'

echarts.use([PieChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const userTotal = ref(0)
const productTotal = ref(0)
const tradableTotal = ref(0)
const productCounts = ref<Record<ProductType, number>>({ STOCK: 0, FUND: 0, BOND: 0, ETF: 0 })
const taskCounts = ref<Record<TaskExecutionStatus, number>>({ RUNNING: 0, SUCCEEDED: 0, FAILED: 0 })
const recentExecutions = ref<ScheduledTaskExecution[]>([])
const productChartElement = ref<HTMLElement>()
const taskChartElement = ref<HTMLElement>()
let productChart: EChartsType | undefined
let taskChart: EChartsType | undefined
let resizeObserver: ResizeObserver | undefined

const statistics = computed(() => [
  {
    title: '用户数量',
    value: userTotal.value,
    caption: '平台已注册用户',
    icon: h(TeamOutlined),
    color: '#1677ff',
    background: '#e6f4ff',
  },
  {
    title: '产品数量',
    value: productTotal.value,
    caption: '全部投资产品',
    icon: h(AppstoreOutlined),
    color: '#08979c',
    background: '#e6fffb',
  },
  {
    title: '可交易产品',
    value: tradableTotal.value,
    caption: '当前可交易状态',
    icon: h(ApiOutlined),
    color: '#389e0d',
    background: '#f6ffed',
  },
  {
    title: '风险等级',
    value: userStore.userInfo?.riskLevel ?? '-',
    caption: '当前账户风险级别',
    icon: h(SafetyCertificateOutlined),
    color: '#d46b08',
    background: '#fff7e6',
  },
])

const executionColumns: TableColumnsType<ScheduledTaskExecution> = [
  { title: '任务编码', dataIndex: 'taskCode', fixed: 'left', width: 230 },
  { title: '任务类型', dataIndex: 'taskType', width: 230 },
  { title: '来源', dataIndex: 'triggerSource', width: 100 },
  { title: '状态', key: 'status', width: 100 },
  { title: '开始时间', key: 'startedAt', width: 180 },
]

const renderCharts = async () => {
  await nextTick()
  if (productChartElement.value) {
    productChart ||= echarts.init(productChartElement.value)
    productChart.setOption({
      tooltip: { trigger: 'item', formatter: '{b}<br/>{c} 个 ({d}%)' },
      legend: { bottom: 0, icon: 'circle' },
      color: ['#1677ff', '#13a8a8', '#52c41a', '#faad14'],
      series: [{
        type: 'pie',
        radius: ['42%', '68%'],
        center: ['50%', '44%'],
        label: { formatter: '{b}\n{c}' },
        data: [
          { name: '股票', value: productCounts.value.STOCK },
          { name: '基金', value: productCounts.value.FUND },
          { name: '债券', value: productCounts.value.BOND },
          { name: 'ETF', value: productCounts.value.ETF },
        ],
      }],
    }, true)
  }
  if (taskChartElement.value) {
    taskChart ||= echarts.init(taskChartElement.value)
    taskChart.setOption({
      tooltip: { trigger: 'item', formatter: '{b}<br/>{c} 次 ({d}%)' },
      legend: { bottom: 0, icon: 'circle' },
      color: ['#1677ff', '#52c41a', '#ff4d4f'],
      series: [{
        type: 'pie',
        roseType: 'radius',
        radius: ['28%', '68%'],
        center: ['50%', '44%'],
        label: { formatter: '{b}\n{c}' },
        data: [
          { name: '运行中', value: taskCounts.value.RUNNING },
          { name: '成功', value: taskCounts.value.SUCCEEDED },
          { name: '失败', value: taskCounts.value.FAILED },
        ],
      }],
    }, true)
  }
}

const fetchDashboard = async () => {
  loading.value = true
  try {
    const productTypes: ProductType[] = ['STOCK', 'FUND', 'BOND', 'ETF']
    const taskStatuses: TaskExecutionStatus[] = ['RUNNING', 'SUCCEEDED', 'FAILED']
    const [
      users,
      products,
      tradableProducts,
      recent,
      ...counts
    ] = await Promise.all([
      getUsers({ page: 0, size: 1 }),
      getProducts({ page: 0, size: 1 }),
      getProducts({ page: 0, size: 1, tradeStatus: 'TRADABLE' }),
      getTaskExecutions({ page: 0, size: 6, sort: 'startedAt', direction: 'desc' }),
      ...productTypes.map((productType) => getProducts({ page: 0, size: 1, productType })),
      ...taskStatuses.map((status) => getTaskExecutions({ page: 0, size: 1, status })),
    ])
    userTotal.value = users.total
    productTotal.value = products.total
    tradableTotal.value = tradableProducts.total
    recentExecutions.value = recent.items
    productTypes.forEach((type, index) => { productCounts.value[type] = counts[index].total })
    taskStatuses.forEach((status, index) => {
      taskCounts.value[status] = counts[productTypes.length + index].total
    })
    renderCharts()
  } finally {
    loading.value = false
  }
}

const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(() => {
  fetchDashboard()
  resizeObserver = new ResizeObserver(() => {
    productChart?.resize()
    taskChart?.resize()
  })
  if (productChartElement.value) resizeObserver.observe(productChartElement.value)
  if (taskChartElement.value) resizeObserver.observe(taskChartElement.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  productChart?.dispose()
  taskChart?.dispose()
})
</script>

<style scoped>
.dashboard {
  width: 100%;
}

.metric-band {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.metric-item {
  display: flex;
  min-width: 0;
  gap: 14px;
  align-items: center;
  padding: 18px 20px;
  border-right: 1px solid #f0f0f0;
}

.metric-item:last-child {
  border-right: 0;
}

.metric-icon {
  display: grid;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 6px;
  font-size: 20px;
}

.metric-item span,
.metric-item small {
  display: block;
  color: #8c8c8c;
}

.metric-item strong {
  display: block;
  margin: 2px 0;
  font-size: 24px;
  line-height: 1.2;
}

.chart-card {
  min-height: 400px;
}

.dashboard-chart {
  width: 100%;
  height: 330px;
}

@media (max-width: 900px) {
  .metric-band {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metric-item:nth-child(2) {
    border-right: 0;
  }

  .metric-item:nth-child(-n + 2) {
    border-bottom: 1px solid #f0f0f0;
  }
}

@media (max-width: 520px) {
  .metric-band {
    grid-template-columns: 1fr;
  }

  .metric-item {
    border-right: 0;
    border-bottom: 1px solid #f0f0f0;
  }
}
</style>
