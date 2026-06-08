<template>
  <a-card class="page-card" :bordered="false">
    <div class="toolbar">
      <div class="toolbar-filters">
        <a-input-search
          v-model:value="query.keyword"
          allow-clear
          placeholder="用户名、手机号或邮箱"
          style="width: 240px"
          @search="search"
        />
        <a-select
          v-model:value="query.status"
          allow-clear
          placeholder="账户状态"
          style="width: 130px"
          :options="userStatusOptions"
          @change="search"
        />
        <a-select
          v-model:value="query.kycStatus"
          allow-clear
          placeholder="KYC 状态"
          style="width: 130px"
          :options="kycStatusOptions"
          @change="search"
        />
        <a-input-number
          v-model:value="query.riskLevel"
          :min="0"
          placeholder="风险等级"
          style="width: 120px"
          @press-enter="search"
        />
        <a-button @click="resetFilters">重置</a-button>
      </div>
      <a-button type="primary" @click="openCreate">
        <template #icon><plus-outlined /></template>
        新建用户
      </a-button>
    </div>

    <a-table
      row-key="bizId"
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :pagination="pagination"
      :scroll="{ x: 1050 }"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'user'">
          <a-space>
            <a-avatar :src="record.avatarUrl">
              {{ (record.nickname || record.username).slice(0, 1).toUpperCase() }}
            </a-avatar>
            <div>
              <div>{{ record.nickname || record.username }}</div>
              <div class="muted">@{{ record.username }}</div>
            </div>
          </a-space>
        </template>
        <template v-else-if="column.key === 'contact'">
          <div>{{ record.email || '-' }}</div>
          <div class="muted">{{ record.phone || '-' }}</div>
        </template>
        <template v-else-if="column.key === 'status'">
          <a-tag :color="optionColor(userStatusOptions, record.status)">
            {{ optionLabel(userStatusOptions, record.status) }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'kycStatus'">
          <a-tag :color="optionColor(kycStatusOptions, record.kycStatus)">
            {{ optionLabel(kycStatusOptions, record.kycStatus) }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'roles'">
          <a-tag v-for="role in record.roles || []" :key="role">{{ role }}</a-tag>
          <span v-if="!record.roles?.length">-</span>
        </template>
        <template v-else-if="column.key === 'registeredAt'">
          {{ formatDateTime(record.registeredAt) }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-space>
            <a-button type="link" size="small" @click="openEdit(record)">详情 / 编辑</a-button>
            <a-popconfirm
              title="确定软删除该用户吗？"
              ok-text="删除"
              cancel-text="取消"
              @confirm="handleDelete(record.bizId)"
            >
              <a-button type="link" danger size="small">删除</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>
  </a-card>

  <a-modal
    v-model:open="createVisible"
    title="新建用户"
    :confirm-loading="saving"
    width="640px"
    @ok="submitCreate"
  >
    <a-form ref="createFormRef" :model="createForm" :rules="createRules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="用户名" name="username">
            <a-input v-model:value="createForm.username" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="初始密码" name="password">
            <a-input-password v-model:value="createForm.password" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="昵称" name="nickname">
            <a-input v-model:value="createForm.nickname" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="账户状态" name="status">
            <a-select v-model:value="createForm.status" :options="userStatusOptions" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="邮箱" name="email">
            <a-input v-model:value="createForm.email" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="手机号" name="phone">
            <a-input v-model:value="createForm.phone" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>

  <a-drawer v-model:open="editVisible" title="用户详情" width="560">
    <a-spin :spinning="detailLoading">
      <template v-if="currentUser">
        <a-descriptions :column="2" bordered size="small">
          <a-descriptions-item label="用户编号">{{ currentUser.userNo }}</a-descriptions-item>
          <a-descriptions-item label="用户名">{{ currentUser.username }}</a-descriptions-item>
          <a-descriptions-item label="注册时间">
            {{ formatDateTime(currentUser.registeredAt) }}
          </a-descriptions-item>
          <a-descriptions-item label="最后登录">
            {{ formatDateTime(currentUser.lastLoginAt) }}
          </a-descriptions-item>
          <a-descriptions-item label="角色" :span="2">
            {{ currentUser.roles?.join('、') || '-' }}
          </a-descriptions-item>
        </a-descriptions>

        <a-divider orientation="left">联系方式</a-divider>
        <a-form layout="vertical">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="邮箱">
                <a-input v-model:value="editForm.email" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="手机号">
                <a-input v-model:value="editForm.phone" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-button type="primary" :loading="saving" @click="saveContact">保存联系方式</a-button>
        </a-form>

        <a-divider orientation="left">账户控制</a-divider>
        <a-form layout="vertical">
          <a-form-item label="账户状态">
            <a-space>
              <a-select
                v-model:value="editForm.status"
                style="width: 180px"
                :options="userStatusOptions"
              />
              <a-button :loading="saving" @click="saveStatus">更新状态</a-button>
            </a-space>
          </a-form-item>
          <a-form-item label="KYC 状态">
            <a-space>
              <a-select
                v-model:value="editForm.kycStatus"
                style="width: 180px"
                :options="kycStatusOptions"
              />
              <a-button :loading="saving" @click="saveKycStatus">更新 KYC</a-button>
            </a-space>
          </a-form-item>
          <a-form-item label="风险等级">
            <a-space>
              <a-input-number v-model:value="editForm.riskLevel" :min="0" style="width: 180px" />
              <a-button :loading="saving" @click="saveRiskLevel">更新等级</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </template>
    </a-spin>
  </a-drawer>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance, TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUserContact,
  updateUserKycStatus,
  updateUserRiskLevel,
  updateUserStatus,
} from '@/api/users'
import type { CreateUserPayload, KycStatus, User, UserQuery, UserStatus } from '@/api/types'
import {
  kycStatusOptions,
  optionColor,
  optionLabel,
  userStatusOptions,
} from '@/utils/options'

const columns: TableColumnsType<User> = [
  { title: '用户', key: 'user', fixed: 'left', width: 180 },
  { title: '联系方式', key: 'contact', width: 220 },
  { title: '账户状态', key: 'status', width: 100 },
  { title: 'KYC', key: 'kycStatus', width: 100 },
  { title: '风险等级', dataIndex: 'riskLevel', width: 100 },
  { title: '角色', key: 'roles', width: 160 },
  { title: '注册时间', key: 'registeredAt', width: 170 },
  { title: '操作', key: 'action', fixed: 'right', width: 150 },
]

const loading = ref(false)
const saving = ref(false)
const detailLoading = ref(false)
const data = ref<User[]>([])
const total = ref(0)
const query = reactive<UserQuery>({ page: 0, size: 10 })
const pagination = computed<TablePaginationConfig>(() => ({
  current: (query.page || 0) + 1,
  pageSize: query.size,
  total: total.value,
  showSizeChanger: true,
  showTotal: (count) => `共 ${count} 条`,
}))

const createVisible = ref(false)
const createFormRef = ref<FormInstance>()
const createForm = reactive<CreateUserPayload>({
  username: '',
  password: '',
  nickname: '',
  email: '',
  phone: '',
  status: 'ACTIVE',
})
const createRules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [
    { required: true, message: '请输入初始密码' },
    { min: 6, message: '密码至少 6 位' },
  ],
  email: [{ type: 'email', message: '邮箱格式不正确' }],
}

const editVisible = ref(false)
const currentUser = ref<User>()
const editForm = reactive({
  email: '',
  phone: '',
  status: 'ACTIVE' as UserStatus,
  kycStatus: 'UNVERIFIED' as KycStatus,
  riskLevel: undefined as number | undefined,
})

const fetchData = async () => {
  loading.value = true
  try {
    const result = await getUsers(query)
    data.value = result.items
    total.value = result.total
  } finally {
    loading.value = false
  }
}

const search = () => {
  query.page = 0
  fetchData()
}

const resetFilters = () => {
  Object.assign(query, { keyword: undefined, status: undefined, kycStatus: undefined, riskLevel: undefined, page: 0 })
  fetchData()
}

const handleTableChange = (page: TablePaginationConfig) => {
  query.page = (page.current || 1) - 1
  query.size = page.pageSize || 10
  fetchData()
}

const openCreate = () => {
  Object.assign(createForm, {
    username: '',
    password: '',
    nickname: '',
    email: '',
    phone: '',
    status: 'ACTIVE',
  })
  createVisible.value = true
}

const submitCreate = async () => {
  await createFormRef.value?.validate()
  saving.value = true
  try {
    await createUser(createForm)
    message.success('用户创建成功')
    createVisible.value = false
    fetchData()
  } finally {
    saving.value = false
  }
}

const applyCurrentUser = (user: User) => {
  currentUser.value = user
  Object.assign(editForm, {
    email: user.email || '',
    phone: user.phone || '',
    status: user.status,
    kycStatus: user.kycStatus,
    riskLevel: user.riskLevel,
  })
}

const openEdit = async (user: User) => {
  editVisible.value = true
  detailLoading.value = true
  try {
    applyCurrentUser(await getUser(user.bizId))
  } finally {
    detailLoading.value = false
  }
}

const runUpdate = async (action: () => Promise<User>, successText: string) => {
  saving.value = true
  try {
    applyCurrentUser(await action())
    message.success(successText)
    fetchData()
  } finally {
    saving.value = false
  }
}

const saveContact = () => {
  if (!currentUser.value) return
  return runUpdate(
    () => updateUserContact(currentUser.value!.bizId, { email: editForm.email, phone: editForm.phone }),
    '联系方式已更新',
  )
}

const saveStatus = () => {
  if (!currentUser.value) return
  return runUpdate(
    () => updateUserStatus(currentUser.value!.bizId, editForm.status),
    '账户状态已更新',
  )
}

const saveKycStatus = () => {
  if (!currentUser.value) return
  return runUpdate(
    () => updateUserKycStatus(currentUser.value!.bizId, editForm.kycStatus),
    'KYC 状态已更新',
  )
}

const saveRiskLevel = () => {
  if (!currentUser.value) return
  return runUpdate(
    () => updateUserRiskLevel(currentUser.value!.bizId, editForm.riskLevel),
    '风险等级已更新',
  )
}

const handleDelete = async (bizId: string) => {
  await deleteUser(bizId)
  message.success('用户已删除')
  fetchData()
}

const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(fetchData)
</script>
