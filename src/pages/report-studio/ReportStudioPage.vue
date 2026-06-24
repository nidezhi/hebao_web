<template>
  <BusinessPageShell
    title="Report Studio 投资报告"
    description="生成、查看和解释投资分析报告；数据质量门禁失败时隐藏动作入口，只展示缺口与补数建议。"
    :endpoints="[endpoints.report.list, endpoints.report.generate]"
    :icon="FileSearchOutlined"
    :status-text="errorMessage ? 'REPORT WAITING' : 'GATE CONTROL'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && reports.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="报告列表与质量门禁">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="reports"
          :columns="columns"
          :pagination="{ pageSize: 10 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
              <a-tag :color="record.status === 'SUCCEEDED' ? 'success' : 'error'">
                {{ record.status }}
              </a-tag>
            </template>
            <template v-if="column.key === 'quality'">
              {{ formatPercent(record.qualityScore) }}
            </template>
            <template v-if="column.key === 'gate'">
              <a-tooltip :title="reportGateMessage(record)">
                <a-tag :color="reportQualityGatePassed(record) ? 'success' : 'warning'">
                  {{ reportQualityGatePassed(record) ? '动作可用' : '降级补数' }}
                </a-tag>
              </a-tooltip>
            </template>
            <template v-if="column.key === 'generatedAt'">
              {{ formatDateTime(record.generatedAt || record.createdAt) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { FileSearchOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listInvestmentReports } from '@/entities/report/api'
import type { InvestmentAnalysisReportDto } from '@/entities/report/model'
import { reportGateMessage, reportQualityGatePassed, summarizeReports } from '@/entities/report/adapter'
import { formatDateTime, formatPercent } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const reports = ref<InvestmentAnalysisReportDto[]>([])

const summary = computed(() => summarizeReports(reports.value))
const metrics = computed(() => [
  { label: '报告总数', value: summary.value.total, hint: '真实接口返回' },
  { label: '生成成功', value: summary.value.succeeded, hint: 'SUCCEEDED' },
  { label: '门禁拦截', value: summary.value.blocked, hint: '质量不足 / 不可用' },
  { label: '不可用报告', value: summary.value.unusable, hint: 'UNUSABLE' },
])

const columns = [
  { title: '主题', dataIndex: 'themeName', key: 'themeName' },
  { title: '市场', dataIndex: 'marketScope', key: 'marketScope' },
  { title: '模型', dataIndex: 'modelCode', key: 'modelCode' },
  { title: '状态', key: 'status' },
  { title: '可信度', dataIndex: 'confidenceLevel', key: 'confidenceLevel' },
  { title: '质量分', key: 'quality' },
  { title: '门禁', key: 'gate' },
  { title: '生成时间', key: 'generatedAt' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listInvestmentReports({ page: 1, size: 50 })
    reports.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
