<template>
  <a-card class="page-card" :bordered="false">
    <div class="toolbar">
      <div class="toolbar-filters">
        <a-input v-model:value="query.targetType" allow-clear placeholder="目标类型" style="width: 150px" />
        <a-input v-model:value="query.reasonCode" allow-clear placeholder="原因编码" style="width: 150px" />
        <a-select
          v-model:value="query.checkResult"
          allow-clear
          placeholder="检查结果"
          style="width: 140px"
          :options="riskCheckResultOptions"
        />
        <a-button @click="fetchChecks">查询</a-button>
      </div>
    </div>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :lg="7">
        <a-card :bordered="false" class="inner-panel" title="拦截原因聚合">
          <a-list :data-source="reasonSummary" size="small">
            <template #renderItem="{ item }">
              <a-list-item>
                <span>{{ item.reason }}</span>
                <a-badge :count="item.count" />
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="17">
        <a-table
          row-key="bizId"
          :columns="columns"
          :data-source="checks"
          :loading="loading"
          :pagination="pagination"
          :scroll="{ x: 980 }"
          @change="handleTableChange"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'checkResult'">
              <a-tag :color="optionColor(riskCheckResultOptions, record.checkResult)">
                {{ optionLabel(riskCheckResultOptions, record.checkResult) }}
              </a-tag>
            </template>
            <template v-else-if="column.key === 'target'">
              <strong>{{ record.targetType || '-' }}</strong>
              <div class="muted">{{ record.targetBizId || '-' }}</div>
            </template>
            <template v-else-if="column.key === 'reason'">
              <strong>{{ record.reasonCode || '-' }}</strong>
              <div class="muted">{{ record.reasonMessage || record.detail || '-' }}</div>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { getRiskChecks } from '@/api/risk'
import type { RiskCheck, RiskCheckQuery } from '@/api/types'
import { optionColor, optionLabel, riskCheckResultOptions } from '@/utils/options'

const loading = ref(false)
const checks = ref<RiskCheck[]>([])
const total = ref(0)
const query = reactive<RiskCheckQuery>({
  page: 1,
  size: 10,
  sort: 'createdAt',
  direction: 'desc',
})

const columns: TableColumnsType<RiskCheck> = [
  { title: '结果', key: 'checkResult', fixed: 'left', width: 110 },
  { title: '风险等级', dataIndex: 'riskLevel', width: 120 },
  { title: '目标对象', key: 'target', width: 240 },
  { title: '原因', key: 'reason', width: 340 },
  { title: '创建时间', dataIndex: 'createdAt', width: 180 },
]
const pagination = computed<TablePaginationConfig>(() => ({
  current: query.page,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
}))
const reasonSummary = computed(() => {
  const counts = checks.value.reduce<Record<string, number>>((acc, check) => {
    const key = check.reasonCode || 'UNKNOWN'
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})
  return Object.entries(counts).map(([reason, count]) => ({ reason, count }))
})

const fetchChecks = async () => {
  loading.value = true
  try {
    const result = await getRiskChecks(query)
    checks.value = result.items
    total.value = result.total
  } finally {
    loading.value = false
  }
}
const handleTableChange = (page: TablePaginationConfig) => {
  query.page = page.current || 1
  query.size = page.pageSize || 10
  fetchChecks()
}

onMounted(fetchChecks)
</script>

<style scoped>
.inner-panel {
  background: #fff;
}
</style>
