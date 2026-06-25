<template>
  <BusinessPageShell
    title="Users 用户管理"
    description="管理端用户列表、账户状态、KYC、风险等级、角色权限详情。高风险变更通过独立动作入口执行。"
    :endpoints="[
      endpoints.user.list,
      endpoints.user.detail,
      endpoints.user.create,
      endpoints.user.status,
      endpoints.user.kycStatus,
      endpoints.user.riskLevel,
    ]"
    :icon="TeamOutlined"
    :status-text="errorMessage ? 'PERMISSION WAITING' : 'USER OPS'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && users.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="15">
          <a-card class="cockpit-card" :bordered="false" title="用户列表">
            <a-table
              row-key="bizId"
              size="small"
              :data-source="users"
              :columns="columns"
              :pagination="{ pageSize: 10 }"
              :row-class-name="rowClassName"
              @row="rowHandlers"
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
        </a-col>

        <a-col :xs="24" :xl="9">
          <a-card class="cockpit-card" :bordered="false">
            <template #title>用户详情与管控</template>
            <template #extra>
              <a-button :disabled="!selectedUser" :loading="saving" @click="saveUserProfile">保存资料</a-button>
            </template>
            <a-empty v-if="!selectedUser" description="选择左侧用户查看详情" />
            <a-space v-else direction="vertical" style="width: 100%">
              <a-form layout="vertical">
                <a-form-item label="用户名"><a-input :value="selectedUser.username" disabled /></a-form-item>
                <a-form-item label="昵称"><a-input v-model:value="userForm.nickname" /></a-form-item>
                <a-form-item label="邮箱"><a-input v-model:value="userForm.email" /></a-form-item>
                <a-form-item label="手机号"><a-input v-model:value="userForm.phone" /></a-form-item>
                <a-form-item label="账户状态">
                  <a-select v-model:value="userForm.status" :options="userStatusOptions" @change="saveUserStatus" />
                </a-form-item>
                <a-form-item label="KYC 状态">
                  <a-select v-model:value="userForm.kycStatus" :options="kycStatusOptions" @change="saveUserKyc" />
                </a-form-item>
                <a-form-item label="风险等级">
                  <a-input-number v-model:value="userForm.riskLevel" :min="1" :max="5" style="width: 100%" @change="saveUserRisk" />
                </a-form-item>
              </a-form>

              <a-divider orientation="left">角色与权限</a-divider>
              <div class="tag-cloud">
                <a-tag v-for="role in selectedUser.roles || []" :key="role" color="blue">{{ role }}</a-tag>
              </div>
              <a-collapse ghost>
                <a-collapse-panel key="permissions" :header="`权限 ${selectedUser.permissions?.length || 0}`">
                  <div class="tag-cloud">
                    <a-tag v-for="permission in selectedUser.permissions || []" :key="permission">
                      {{ permission }}
                    </a-tag>
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { TeamOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import {
  getUserDetail,
  listUsers,
  updateUser,
  updateUserKycStatus,
  updateUserRiskLevel,
  updateUserStatus,
} from '@/entities/user/api'
import type { UserDto } from '@/entities/user/model'
import { summarizeUsers } from '@/entities/user/adapter'
import { kycStatusOptions, userStatusOptions } from '@/entities/user/dictionary'
import { optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const saving = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const users = ref<UserDto[]>([])
const selectedUser = ref<UserDto>()
const userForm = reactive<{
  nickname?: string
  email?: string
  phone?: string
  status?: string
  kycStatus?: string
  riskLevel?: number
}>({})

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

const syncForm = (user: UserDto) => {
  userForm.nickname = user.nickname
  userForm.email = user.email
  userForm.phone = user.phone
  userForm.status = user.status
  userForm.kycStatus = user.kycStatus
  userForm.riskLevel = user.riskLevel
}

const updateLocalUser = (user: UserDto) => {
  selectedUser.value = user
  users.value = users.value.map((item) => (item.bizId === user.bizId ? user : item))
  syncForm(user)
}

const loadUserDetail = async (bizId: string) => {
  const user = await getUserDetail(bizId)
  updateLocalUser(user)
}

const rowHandlers = (record: UserDto) => ({
  onClick: () => {
    void loadUserDetail(record.bizId)
  },
})

const rowClassName = (record: UserDto) =>
  record.bizId === selectedUser.value?.bizId ? 'selected-business-row' : ''

const saveUserProfile = async () => {
  if (!selectedUser.value) return
  saving.value = true
  try {
    const user = await updateUser({
      bizId: selectedUser.value.bizId,
      nickname: userForm.nickname,
      email: userForm.email,
      phone: userForm.phone,
    })
    updateLocalUser(user)
    message.success('用户资料已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存用户资料失败'
  } finally {
    saving.value = false
  }
}

const saveUserStatus = async () => {
  if (!selectedUser.value || !userForm.status) return
  const user = await updateUserStatus({ bizId: selectedUser.value.bizId, status: userForm.status })
  updateLocalUser(user)
}

const saveUserKyc = async () => {
  if (!selectedUser.value || !userForm.kycStatus) return
  const user = await updateUserKycStatus({ bizId: selectedUser.value.bizId, kycStatus: userForm.kycStatus })
  updateLocalUser(user)
}

const saveUserRisk = async () => {
  if (!selectedUser.value || typeof userForm.riskLevel !== 'number') return
  const user = await updateUserRiskLevel({ bizId: selectedUser.value.bizId, riskLevel: userForm.riskLevel })
  updateLocalUser(user)
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listUsers({ page: 1, size: 50 })
    users.value = page.items || []
    if (users.value[0]) await loadUserDetail(users.value[0].bizId)
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
