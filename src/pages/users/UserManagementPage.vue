<template>
  <BusinessPageShell
    title="Users 用户管理"
    description="管理端用户列表、账户状态、KYC、风险等级、角色权限概览。高风险变更后续必须加二次确认。"
    :endpoints="[endpoints.user.list, endpoints.user.detail, endpoints.user.create, endpoints.user.status, endpoints.user.riskLevel]"
    :icon="TeamOutlined"
    :status-text="errorMessage ? 'PERMISSION WAITING' : 'USER RADAR'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && users.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="用户列表">
        <a-table
          row-key="bizId"
          size="small"
          :data-source="users"
          :columns="columns"
          :pagination="{ pageSize: 10 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
              <a-tag :color="optionColor(userStatusOptions, record.status)">
                {{ optionLabel(userStatusOptions, record.status) }}
              </a-tag>
            </template>
            <template v-if="column.key === 'kycStatus'">
              <a-tag :color="optionColor(kycStatusOptions, record.kycStatus)">
                {{ optionLabel(kycStatusOptions, record.kycStatus) }}
              </a-tag>
            </template>
            <template v-if="column.key === 'roles'">
              <a-space wrap>
                <a-tag v-for="role in record.roles || []" :key="role" color="cyan">{{ role }}</a-tag>
              </a-space>
            </template>
            <template v-if="column.key === 'lastLoginAt'">
              {{ formatDateTime(record.lastLoginAt) }}
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { TeamOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listUsers } from '@/entities/user/api'
import type { UserDto } from '@/entities/user/model'
import { summarizeUsers } from '@/entities/user/adapter'
import { kycStatusOptions, userStatusOptions } from '@/entities/user/dictionary'
import { optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const users = ref<UserDto[]>([])

const summary = computed(() => summarizeUsers(users.value))
const metrics = computed(() => [
  { label: '用户总数', value: summary.value.total, hint: '当前页返回' },
  { label: '启用账户', value: summary.value.active, hint: 'ACTIVE' },
  { label: '锁定账户', value: summary.value.locked, hint: 'LOCKED' },
  { label: 'KYC 已认证', value: summary.value.verified, hint: 'VERIFIED' },
  { label: '高风险等级', value: summary.value.highRisk, hint: 'riskLevel >= 4' },
  { label: '角色绑定', value: users.value.reduce((sum, item) => sum + (item.roles?.length || 0), 0), hint: '有效角色数' },
])

const columns = [
  { title: '用户名', dataIndex: 'username', key: 'username' },
  { title: '昵称', dataIndex: 'nickname', key: 'nickname' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '状态', key: 'status' },
  { title: 'KYC', key: 'kycStatus' },
  { title: '风险等级', dataIndex: 'riskLevel', key: 'riskLevel' },
  { title: '角色', key: 'roles' },
  { title: '最近登录', key: 'lastLoginAt' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listUsers({ page: 1, size: 50 })
    users.value = page.items || []
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
