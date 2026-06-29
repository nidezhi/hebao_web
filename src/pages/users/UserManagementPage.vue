<template>
  <BusinessPageShell
    title="Users 用户管理"
    description="通用管理列表：创建用户、编辑资料、变更状态/KYC/风险等级、逻辑删除。"
    :endpoints="[endpoints.user.list, endpoints.user.detail, endpoints.user.create, endpoints.user.update, endpoints.user.status, endpoints.user.kycStatus, endpoints.user.riskLevel, endpoints.user.delete]"
    :icon="TeamOutlined"
    status-text="ADMIN"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="用户管理">
        <template #extra>
          <a-space>
            <a-input-search v-model:value="keyword" placeholder="用户名 / 昵称 / 邮箱" enter-button @search="load" />
            <a-button type="primary" @click="openUser()">新增用户</a-button>
          </a-space>
        </template>
        <a-table row-key="bizId" size="small" :data-source="users" :columns="columns">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'"><StatusTag :value="record.status" :options="userStatusOptions" /></template>
            <template v-else-if="column.key === 'kyc'"><StatusTag :value="record.kycStatus" :options="kycStatusOptions" /></template>
            <template v-else-if="column.key === 'risk'">R{{ record.riskLevel ?? '-' }}</template>
            <template v-else-if="column.key === 'lastLogin'">{{ formatDateTime(record.lastLoginAt) }}</template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openDetail(record)">详情</a-button>
                <a-button size="small" type="link" @click="openUser(record)">编辑</a-button>
                <a-dropdown>
                  <a-button size="small" type="link">状态</a-button>
                  <template #overlay>
                    <a-menu @click="changeUserStatus(record, String($event.key))">
                      <a-menu-item key="ACTIVE">启用</a-menu-item>
                      <a-menu-item key="DISABLED">禁用</a-menu-item>
                      <a-menu-item key="LOCKED">锁定</a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
                <a-button size="small" type="link" @click="openCompliance(record)">合规</a-button>
                <a-button size="small" type="link" danger @click="confirmDelete(record)">删除</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="userOpen" width="620" :title="userForm.bizId ? '编辑用户' : '新增用户'">
      <a-form layout="vertical">
        <a-form-item label="用户名"><a-input v-model:value="userForm.username" :disabled="Boolean(userForm.bizId)" /></a-form-item>
        <a-form-item v-if="!userForm.bizId" label="初始密码"><a-input-password v-model:value="userForm.password" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="邮箱"><a-input v-model:value="userForm.email" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="手机号"><a-input v-model:value="userForm.phone" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="昵称"><a-input v-model:value="userForm.nickname" /></a-form-item>
        <a-form-item v-if="!userForm.bizId" label="状态"><a-select v-model:value="userForm.status" :options="userStatusSelectOptions" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitUser">保存</a-button>
          <a-button @click="userOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="complianceOpen" width="520" title="KYC / 风险等级">
      <a-form layout="vertical">
        <a-form-item label="用户">{{ complianceUser?.username }}</a-form-item>
        <a-form-item label="KYC 状态"><a-select v-model:value="complianceForm.kycStatus" :options="kycStatusSelectOptions" /></a-form-item>
        <a-form-item label="风险等级"><a-input-number v-model:value="complianceForm.riskLevel" class="full-width" :min="1" :max="5" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitCompliance">保存合规状态</a-button>
          <a-button @click="complianceOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="detailOpen" width="640" title="用户详情">
      <a-descriptions v-if="selectedUser" bordered size="small" :column="2">
        <a-descriptions-item label="用户名">{{ selectedUser.username }}</a-descriptions-item>
        <a-descriptions-item label="昵称">{{ selectedUser.nickname || '-' }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ selectedUser.email || '-' }}</a-descriptions-item>
        <a-descriptions-item label="手机">{{ selectedUser.phone || '-' }}</a-descriptions-item>
        <a-descriptions-item label="状态"><StatusTag :value="selectedUser.status" :options="userStatusOptions" /></a-descriptions-item>
        <a-descriptions-item label="KYC"><StatusTag :value="selectedUser.kycStatus" :options="kycStatusOptions" /></a-descriptions-item>
        <a-descriptions-item label="风险等级">R{{ selectedUser.riskLevel ?? '-' }}</a-descriptions-item>
        <a-descriptions-item label="角色">{{ selectedUser.roles?.join(', ') || '-' }}</a-descriptions-item>
      </a-descriptions>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { TeamOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { createUser, deleteUser, getUserDetail, listUsers, updateUser, updateUserKycStatus, updateUserRiskLevel, updateUserStatus } from '@/entities/user/api'
import { kycStatusOptions, userStatusOptions } from '@/entities/user/dictionary'
import type { UserDto } from '@/entities/user/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const keyword = ref('')
const users = ref<UserDto[]>([])
const selectedUser = ref<UserDto>()
const detailOpen = ref(false)
const userOpen = ref(false)
const complianceOpen = ref(false)
const complianceUser = ref<UserDto>()
const userForm = reactive<Record<string, unknown>>({})
const complianceForm = reactive<{ kycStatus?: string; riskLevel?: number }>({})
const userStatusSelectOptions = userStatusOptions.map((item) => ({ label: item.label, value: item.value }))
const kycStatusSelectOptions = kycStatusOptions.map((item) => ({ label: item.label, value: item.value }))

const metrics = computed(() => [
  { label: '用户数', value: users.value.length, hint: '当前页' },
  { label: '启用', value: users.value.filter((item) => item.status === 'ACTIVE').length, hint: '可登录' },
  { label: 'KYC 已认证', value: users.value.filter((item) => item.kycStatus === 'VERIFIED').length, hint: '合规状态' },
  { label: '高风险', value: users.value.filter((item) => Number(item.riskLevel || 0) >= 4).length, hint: 'R4/R5' },
])
const columns = [
  { title: '用户名', dataIndex: 'username' },
  { title: '昵称', dataIndex: 'nickname' },
  { title: '状态', key: 'status' },
  { title: 'KYC', key: 'kyc' },
  { title: '风险等级', key: 'risk' },
  { title: '最近登录', key: 'lastLogin' },
  { title: '操作', key: 'actions', width: 300 },
]
const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}
const openUser = (user?: UserDto) => {
  resetObject(userForm, user ? { ...user } : { status: 'ACTIVE', password: '' })
  userOpen.value = true
}
const submitUser = async () => {
  if (!userForm.bizId && !String(userForm.password || '').trim()) {
    message.warning('请输入初始密码')
    return
  }
  saving.value = true
  try {
    if (userForm.bizId) await updateUser({ bizId: String(userForm.bizId), email: String(userForm.email || ''), phone: String(userForm.phone || ''), nickname: String(userForm.nickname || '') })
    else await createUser({ username: String(userForm.username || ''), password: String(userForm.password || ''), email: String(userForm.email || '') || undefined, phone: String(userForm.phone || '') || undefined, nickname: String(userForm.nickname || '') || undefined, status: String(userForm.status || 'ACTIVE') })
    message.success('用户已保存')
    userOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '用户保存失败')
  } finally {
    saving.value = false
  }
}
const openDetail = async (user: UserDto) => {
  selectedUser.value = await getUserDetail(user.bizId)
  detailOpen.value = true
}
const changeUserStatus = (user: UserDto, status: string) => {
  Modal.confirm({
    title: '确认变更用户状态？',
    content: `${user.username} -> ${status}`,
    okType: status !== 'ACTIVE' ? 'danger' : 'primary',
    onOk: async () => {
      await updateUserStatus({ bizId: user.bizId, status })
      message.success('用户状态已变更')
      await load()
    },
  })
}
const openCompliance = (user: UserDto) => {
  complianceUser.value = user
  complianceForm.kycStatus = user.kycStatus || 'UNVERIFIED'
  complianceForm.riskLevel = user.riskLevel || 3
  complianceOpen.value = true
}
const submitCompliance = async () => {
  if (!complianceUser.value) return
  saving.value = true
  try {
    await updateUserKycStatus({ bizId: complianceUser.value.bizId, kycStatus: complianceForm.kycStatus || 'UNVERIFIED' })
    await updateUserRiskLevel({ bizId: complianceUser.value.bizId, riskLevel: complianceForm.riskLevel || 3 })
    message.success('合规状态已保存')
    complianceOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const confirmDelete = (user: UserDto) => {
  Modal.confirm({
    title: '确认删除用户？',
    content: user.username,
    okType: 'danger',
    onOk: async () => {
      await deleteUser(user.bizId)
      message.success('用户已删除')
      await load()
    },
  })
}
const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listUsers({ keyword: keyword.value || undefined, page: 1, size: 50 })
    users.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '用户列表加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
