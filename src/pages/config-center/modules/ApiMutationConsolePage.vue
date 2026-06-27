<template>
  <BusinessPageShell
    title="Operation Actions 业务操作管理"
    description="把散落在报告、采集、模型、产品、Mock、权限页面里的写操作集中成维护目录。业务页保留快捷入口，这里作为统一治理台。"
    :endpoints="allMutationActions.map((action) => action.endpoint)"
    :icon="ThunderboltOutlined"
    status-text="OPERATIONS"
    compact
  >
    <MetricStrip :metrics="metrics" />
    <a-alert
      class="mb-12"
      type="info"
      show-icon
      message="这里是接口写操作的统一目录；业务页面可以保留快捷按钮，但新增维护动作应先登记到 mutationActions.ts。"
    />

    <section class="action-governance-grid">
      <button
        v-for="group in mutationActionGroups"
        :key="group.key"
        type="button"
        class="action-governance-card"
        :class="{ 'action-governance-card--active': activeGroupKey === group.key }"
        @click="activeGroupKey = group.key"
      >
        <span class="eyebrow">{{ group.badge }}</span>
        <strong>{{ group.title }}</strong>
        <small>{{ group.description }}</small>
        <a-tag :color="group.color">{{ group.actions.length }} 个动作</a-tag>
      </button>
    </section>

    <a-card class="page-card action-filter-bar" :bordered="false">
      <a-space wrap>
        <a-tabs v-model:active-key="activeGroupKey" class="action-filter-tabs">
          <a-tab-pane key="all" tab="全部动作" />
          <a-tab-pane v-for="group in mutationActionGroups" :key="group.key" :tab="group.title" />
        </a-tabs>
        <a-input
          v-model:value="searchText"
          allow-clear
          placeholder="搜索动作 / endpoint / 描述"
          class="action-search-input"
        />
      </a-space>
    </a-card>

    <ApiMutationWorkbench
      :key="workbenchKey"
      :title="`${activeGroupTitle} · ${visibleActions.length} 个动作`"
      :actions="visibleActions"
    />
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ThunderboltOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import ApiMutationWorkbench from '@/shared/components/business/ApiMutationWorkbench.vue'
import { allMutationActions, mutationActionGroups } from '../mutationActions'

const activeGroupKey = ref(mutationActionGroups[0]?.key || 'all')
const searchText = ref('')

const activeGroup = computed(() => mutationActionGroups.find((group) => group.key === activeGroupKey.value))
const activeGroupTitle = computed(() => activeGroup.value?.title || '全部动作')
const groupActions = computed(() => activeGroup.value?.actions || allMutationActions)
const visibleActions = computed(() => {
  const keyword = searchText.value.trim().toLowerCase()
  if (!keyword) return groupActions.value
  return groupActions.value.filter((action) =>
    [action.id, action.title, action.description, action.endpoint]
      .some((value) => String(value || '').toLowerCase().includes(keyword)),
  )
})
const workbenchKey = computed(() => `${activeGroupKey.value}-${searchText.value}`)
const metrics = computed(() => [
  { label: '动作总数', value: allMutationActions.length, hint: `${mutationActionGroups.length} 个领域` },
  { label: '高风险动作', value: allMutationActions.filter((action) => action.danger).length, hint: '执行前二次确认' },
  { label: '当前筛选', value: visibleActions.value.length, hint: activeGroupTitle.value },
  { label: '接口端点', value: new Set(allMutationActions.map((action) => action.endpoint)).size, hint: '统一登记' },
])
</script>
