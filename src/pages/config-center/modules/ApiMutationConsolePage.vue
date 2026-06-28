<template>
  <BusinessPageShell
    title="Operation Actions 业务操作管理"
    description="业务写操作应落在对应业务页面。这里只做归属检查、维护导航和接口清单，不再提供跨域执行表单。"
    :endpoints="placementRows.map((row) => row.action.endpoint)"
    :icon="ThunderboltOutlined"
    status-text="OPERATIONS"
    compact
  >
    <MetricStrip :metrics="metrics" />
    <a-card class="page-card action-placement-summary" :bordered="false">
      <div class="action-placement-summary__main">
        <div>
          <span class="eyebrow">PLACEMENT RATE</span>
          <h3>业务操作落位率 {{ placementPercent }}%</h3>
          <p class="muted-line">写操作留在业务上下文内完成；此页只暴露归属、缺口和维护导航。</p>
        </div>
        <a-progress
          type="dashboard"
          :percent="placementPercent"
          :stroke-color="{ '0%': '#ef4444', '100%': '#16a34a' }"
        />
      </div>
      <a-space v-if="gapGroups.length" wrap class="mt-12">
        <a-tag v-for="group in gapGroups" :key="group.key" color="warning">
          {{ group.title }} · {{ group.actions.filter((action) => action.status === 'needs-ui').length }}
        </a-tag>
      </a-space>
    </a-card>
    <a-alert
      class="mb-12"
      type="info"
      show-icon
      message="新增写接口时，先确认它属于哪个业务页面；业务动作不要沉到一个万能操作台里。"
    />

    <section class="action-governance-grid">
      <button
        v-for="group in mutationActionPlacementGroups"
        :key="group.key"
        type="button"
        class="action-governance-card"
        :class="{ 'action-governance-card--active': activePlacementKey === group.key }"
        @click="activePlacementKey = group.key"
      >
        <span class="eyebrow">{{ group.badge }}</span>
        <strong>{{ group.title }}</strong>
        <small>{{ group.description }}</small>
        <a-space wrap>
          <a-tag :color="group.color">{{ group.actions.length }} 个动作</a-tag>
          <a-tag>{{ group.pathLabel }}</a-tag>
        </a-space>
      </button>
    </section>

    <a-card class="page-card action-filter-bar" :bordered="false">
      <a-space wrap>
        <a-tabs v-model:active-key="activePlacementKey" class="action-filter-tabs">
          <a-tab-pane key="all" tab="全部归属" />
          <a-tab-pane v-for="group in mutationActionPlacementGroups" :key="group.key" :tab="group.title" />
        </a-tabs>
        <a-input
          v-model:value="searchText"
          allow-clear
          placeholder="搜索动作 / endpoint / 描述"
          class="action-search-input"
        />
      </a-space>
    </a-card>

    <a-card class="page-card" :bordered="false" :title="`${activePlacementTitle} · ${visibleRows.length} 个动作归属`">
      <template #extra>
        <a-button type="primary" @click="navigate(activePlacementPath)">进入业务页面</a-button>
      </template>
      <a-table
        row-key="rowKey"
        size="small"
        :data-source="visibleRows"
        :columns="columns"
        :pagination="{ pageSize: 12 }"
        :scroll="{ x: 1120 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space direction="vertical" :size="0">
              <strong>{{ record.action.title }}</strong>
              <span class="muted-line">{{ record.action.description }}</span>
            </a-space>
          </template>
          <template v-else-if="column.key === 'endpoint'">
            <code>{{ record.action.endpoint }}</code>
          </template>
          <template v-else-if="column.key === 'risk'">
            <a-tag :color="record.action.danger ? 'error' : 'blue'">
              {{ record.action.danger ? '高风险' : '普通' }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag :color="record.action.status === 'implemented' ? 'success' : 'warning'">
              {{ record.action.status === 'implemented' ? '已落位' : '待补齐' }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'owner'">
            <a-space direction="vertical" :size="0">
              <span>{{ record.group.pathLabel }}</span>
              <span class="muted-line">{{ record.action.evidence }}</span>
            </a-space>
          </template>
          <template v-else-if="column.key === 'actions'">
            <a-button size="small" type="link" @click="navigate(record.group.path)">去页面</a-button>
          </template>
        </template>
      </a-table>
    </a-card>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ThunderboltOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import { mutationActionPlacementGroups } from '../mutationActions'
import type { MutationActionPlacementGroup, OperationActionPlacement } from '../mutationActions'

interface PlacementRow {
  rowKey: string
  action: OperationActionPlacement
  group: MutationActionPlacementGroup
}

const router = useRouter()
const activePlacementKey = ref(mutationActionPlacementGroups[0]?.key || 'all')
const searchText = ref('')

const placementRows = computed<PlacementRow[]>(() =>
  mutationActionPlacementGroups.flatMap((group) =>
    group.actions.map((action) => ({
      rowKey: `${group.key}-${action.id}`,
      action,
      group,
    })),
  ),
)
const activePlacement = computed(() => mutationActionPlacementGroups.find((group) => group.key === activePlacementKey.value))
const activePlacementTitle = computed(() => activePlacement.value?.title || '全部归属')
const activePlacementPath = computed(() => activePlacement.value?.path || '/config-center')
const groupRows = computed(() => activePlacement.value
  ? placementRows.value.filter((row) => row.group.key === activePlacement.value?.key)
  : placementRows.value)
const visibleRows = computed(() => {
  const keyword = searchText.value.trim().toLowerCase()
  if (!keyword) return groupRows.value
  return groupRows.value.filter((row) =>
    [row.action.id, row.action.title, row.action.description, row.action.endpoint, row.action.evidence, row.group.pathLabel, row.group.path]
      .some((value) => String(value || '').toLowerCase().includes(keyword)),
  )
})
const implementedRows = computed(() => placementRows.value.filter((row) => row.action.status === 'implemented'))
const gapRows = computed(() => placementRows.value.filter((row) => row.action.status === 'needs-ui'))
const gapGroups = computed(() => mutationActionPlacementGroups.filter((group) => group.actions.some((action) => action.status === 'needs-ui')))
const placementPercent = computed(() => placementRows.value.length
  ? Math.round((implementedRows.value.length / placementRows.value.length) * 100)
  : 0)
const metrics = computed(() => [
  { label: '归属页面', value: mutationActionPlacementGroups.length, hint: '业务页承接' },
  { label: '已落位动作', value: implementedRows.value.length, hint: `共 ${placementRows.value.length}` },
  { label: '待补齐动作', value: gapRows.value.length, hint: gapGroups.value.map((group) => group.badge).join(' / ') || 'CLEAR' },
  { label: '当前筛选', value: visibleRows.value.length, hint: activePlacementTitle.value },
])
const columns = [
  { title: '操作', key: 'action', width: 260 },
  { title: '接口', key: 'endpoint', width: 360 },
  { title: '风险', key: 'risk', width: 100 },
  { title: '落位', key: 'status', width: 100 },
  { title: '应落页面 / 证据', key: 'owner', width: 320 },
  { title: '入口', key: 'actions', width: 100 },
]

const navigate = (path: string) => router.push(path)
</script>
