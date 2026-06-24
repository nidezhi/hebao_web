<template>
  <BusinessPageShell
    title="Risk Audit 风控审计"
    description="查看全链路风控检查、拦截原因、风险等级和关联对象；403 统一展示为不可见或无权限。"
    :endpoints="[endpoints.risk.checks]"
    :icon="SafetyCertificateOutlined"
    :status-text="errorMessage ? 'AUDIT WAITING' : 'RISK TRACE'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && checks.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="风控检查列表">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="checks"
          :columns="columns"
          :pagination="{ pageSize: 12 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'checkResult'">
              <a-tag :color="optionColor(riskCheckResultOptions, record.checkResult)">
                {{ optionLabel(riskCheckResultOptions, record.checkResult) }}
              </a-tag>
            </template>
            <template v-if="column.key === 'createdAt'">
              {{ formatDateTime(record.createdAt) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { SafetyCertificateOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listRiskChecks } from '@/entities/risk/api'
import type { RiskCheckDto } from '@/entities/risk/model'
import { optionColor, optionLabel, riskCheckResultOptions } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const checks = ref<RiskCheckDto[]>([])

const metrics = computed(() => [
  { label: '检查记录', value: checks.value.length, hint: '全链路风控' },
  { label: '拒绝', value: checks.value.filter((item) => item.checkResult === 'REJECT').length, hint: '动作被拦截' },
  { label: '预警', value: checks.value.filter((item) => item.checkResult === 'WARN').length, hint: '允许但需提示' },
  { label: '高风险', value: checks.value.filter((item) => item.riskLevel === 'HIGH').length, hint: 'riskLevel=HIGH' },
])

const columns = [
  { title: '结果', key: 'checkResult' },
  { title: '风险等级', dataIndex: 'riskLevel', key: 'riskLevel' },
  { title: '原因编码', dataIndex: 'reasonCode', key: 'reasonCode' },
  { title: '原因说明', dataIndex: 'reasonMessage', key: 'reasonMessage' },
  { title: '目标类型', dataIndex: 'targetType', key: 'targetType' },
  { title: '目标 ID', dataIndex: 'targetBizId', key: 'targetBizId' },
  { title: '创建时间', key: 'createdAt' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listRiskChecks({ page: 1, size: 50 })
    checks.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
