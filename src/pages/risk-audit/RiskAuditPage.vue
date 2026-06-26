<template>
  <BusinessPageShell
    title="Risk Audit 风控审计"
    description="每次风控拒绝都必须可追踪：原因、等级、关联对象和详情证据在这里集中查看。"
    :endpoints="[endpoints.risk.checks]"
    :icon="AuditOutlined"
    status-text="AUDIT TRAIL"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="7">
          <a-card class="page-card" :bordered="false" title="拦截原因聚合">
            <div class="reason-grid">
              <div v-for="item in reasonSummary" :key="item.reasonCode" class="reason-cell">
                <RiskReasonTag :reason-code="item.reasonCode" risk-level="HIGH" />
                <strong>{{ item.count }}</strong>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="17">
          <a-card class="page-card" :bordered="false" title="风控检查列表">
            <a-table row-key="bizId" size="small" :data-source="checks" :columns="columns" @row="rowEvents" />
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="720" title="风控审计详情">
      <a-space v-if="selectedCheck" direction="vertical" :size="16" class="full-width">
        <a-descriptions bordered size="small" :column="2">
          <a-descriptions-item label="结果">
            <StatusTag :value="selectedCheck.checkResult" :options="riskCheckResultOptions" />
          </a-descriptions-item>
          <a-descriptions-item label="风险等级">{{ selectedCheck.riskLevel || '-' }}</a-descriptions-item>
          <a-descriptions-item label="原因">{{ selectedCheck.reasonCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="规则">{{ selectedCheck.ruleCode || '-' }}</a-descriptions-item>
          <a-descriptions-item label="目标类型">{{ selectedCheck.targetTypeView || '-' }}</a-descriptions-item>
          <a-descriptions-item label="目标 ID">{{ selectedCheck.targetBizIdView || '-' }}</a-descriptions-item>
          <a-descriptions-item label="检查时间">{{ formatDateTime(selectedCheck.checkedAtView) }}</a-descriptions-item>
          <a-descriptions-item label="说明">{{ selectedCheck.reasonMessage || '-' }}</a-descriptions-item>
        </a-descriptions>
        <JsonPreview :value="selectedCheck.detailView" :raw="selectedCheck.detail" />
      </a-space>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { AuditOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import JsonPreview from '@/shared/components/visual/JsonPreview.vue'
import RiskReasonTag from '@/shared/components/visual/RiskReasonTag.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { riskCheckResultOptions } from '@/shared/dictionaries/status'
import { listRiskChecks } from '@/entities/risk/api'
import { normalizeRiskCheck, type RiskCheckView } from '@/entities/risk/adapter'

const loading = ref(false)
const errorMessage = ref('')
const checks = ref<RiskCheckView[]>([])
const selectedCheck = ref<RiskCheckView>()
const drawerOpen = ref(false)

const metrics = computed(() => [
  { label: '检查记录', value: checks.value.length, hint: '最近 100 条' },
  { label: '拒绝', value: checks.value.filter((item) => item.checkResult === 'REJECT').length, hint: '后端拦截' },
  { label: '预警', value: checks.value.filter((item) => item.checkResult === 'WARN').length, hint: '需关注' },
  { label: '高风险', value: checks.value.filter((item) => item.riskLevel === 'HIGH').length, hint: '重点审计' },
])

const reasonSummary = computed(() => {
  const map = new Map<string, number>()
  checks.value.forEach((item) => map.set(item.reasonCode || 'UNKNOWN', (map.get(item.reasonCode || 'UNKNOWN') || 0) + 1))
  return [...map.entries()].map(([reasonCode, count]) => ({ reasonCode, count }))
})

const columns = [
  { title: '结果', customRender: ({ record }: { record: RiskCheckView }) => h(StatusTag, { value: record.checkResult, options: riskCheckResultOptions }) },
  { title: '等级', dataIndex: 'riskLevel' },
  { title: '原因', customRender: ({ record }: { record: RiskCheckView }) => h(RiskReasonTag, { reasonCode: record.reasonCode, riskLevel: record.riskLevel }) },
  { title: '目标类型', dataIndex: 'targetTypeView' },
  { title: '目标 ID', dataIndex: 'targetBizIdView' },
  { title: '检查时间', customRender: ({ record }: { record: RiskCheckView }) => formatDateTime(record.checkedAtView) },
]

const rowEvents = (record: RiskCheckView) => ({ onClick: () => { selectedCheck.value = record; drawerOpen.value = true } })

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listRiskChecks({ page: 1, size: 100, sort: 'checkedAt', direction: 'desc' })
    checks.value = (page.items || []).map(normalizeRiskCheck)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '风控审计接口加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
