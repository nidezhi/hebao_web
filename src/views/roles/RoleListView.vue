<template>
  <a-card class="page-card" :bordered="false">
    <div class="toolbar">
      <div class="toolbar-filters">
        <a-input-search
          v-model:value="keyword"
          allow-clear
          placeholder="角色编码或名称"
          style="width: 240px"
        />
      </div>
      <a-space wrap>
        <a-button @click="loadRoles">刷新</a-button>
        <a-button type="primary" @click="openRoleModal()">
          <template #icon><plus-outlined /></template>
          新建角色
        </a-button>
      </a-space>
    </div>

    <a-table
      row-key="roleCode"
      :columns="columns"
      :data-source="filteredRoles"
      :loading="loading"
      :pagination="{ pageSize: 10, showSizeChanger: true }"
      :scroll="{ x: 1100 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'role'">
          <div>{{ record.roleName }}</div>
          <div class="muted">{{ record.roleCode }}</div>
        </template>
        <template v-else-if="column.key === 'enabled'">
          <a-switch
            :checked="record.enabled"
            :loading="savingRoleCode === record.roleCode"
            @change="(checked: boolean | string | number) => toggleRole(record, Boolean(checked))"
          />
        </template>
        <template v-else-if="column.key === 'permissions'">
          <a-tag v-for="permission in record.permissions || []" :key="permission">
            {{ permission }}
          </a-tag>
          <span v-if="!record.permissions?.length">-</span>
        </template>
        <template v-else-if="column.key === 'updatedAt'">
          {{ formatDateTime(record.updatedAt) }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-space>
            <a-button type="link" size="small" @click="openRoleModal(record)">编辑</a-button>
            <a-button type="link" size="small" @click="openPermissionsModal(record)">
              权限
            </a-button>
            <a-button type="link" size="small" @click="openAssignModal(record)">分配</a-button>
          </a-space>
        </template>
      </template>
    </a-table>
  </a-card>

  <a-modal
    v-model:open="roleModalVisible"
    :title="editingRole ? '编辑角色' : '新建角色'"
    :confirm-loading="saving"
    @ok="submitRole"
  >
    <a-form ref="roleFormRef" :model="roleForm" :rules="roleRules" layout="vertical">
      <a-form-item label="角色编码" name="roleCode">
        <a-input v-model:value="roleForm.roleCode" :disabled="Boolean(editingRole)" />
      </a-form-item>
      <a-form-item label="角色名称" name="roleName">
        <a-input v-model:value="roleForm.roleName" />
      </a-form-item>
      <a-form-item label="角色说明" name="description">
        <a-textarea v-model:value="roleForm.description" :rows="3" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal
    v-model:open="permissionsModalVisible"
    title="配置角色权限"
    width="680px"
    :confirm-loading="saving"
    @ok="submitPermissions"
  >
    <a-form layout="vertical">
      <a-form-item label="权限编码">
        <a-select
          v-model:value="permissionValues"
          mode="tags"
          token-separators=","
          placeholder="输入权限编码后回车"
        />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal
    v-model:open="assignModalVisible"
    title="分配或撤销用户角色"
    :confirm-loading="saving"
    @ok="submitAssign"
  >
    <a-form ref="assignFormRef" :model="assignForm" :rules="assignRules" layout="vertical">
      <a-form-item label="用户业务 ID" name="userBizId">
        <a-input v-model:value="assignForm.userBizId" />
      </a-form-item>
      <a-form-item label="角色编码" name="roleCode">
        <a-input v-model:value="assignForm.roleCode" disabled />
      </a-form-item>
      <a-form-item label="失效时间">
        <a-input v-model:value="assignForm.effectiveTo" type="datetime-local" />
      </a-form-item>
      <a-form-item label="操作">
        <a-radio-group v-model:value="assignAction">
          <a-radio-button value="assign">分配</a-radio-button>
          <a-radio-button value="revoke">撤销</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance, TableColumnsType } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import {
  assignUserRole,
  configureRolePermissions,
  createRole,
  getRoles,
  revokeUserRole,
  updateRole,
  updateRoleStatus,
} from '@/api/roles'
import type { Role } from '@/api/types'

const columns: TableColumnsType<Role> = [
  { title: '角色', key: 'role', fixed: 'left', width: 220 },
  { title: '类型', dataIndex: 'roleType', width: 100 },
  { title: '状态', key: 'enabled', width: 100 },
  { title: '说明', dataIndex: 'description', width: 220 },
  { title: '权限', key: 'permissions' },
  { title: '更新时间', key: 'updatedAt', width: 180 },
  { title: '操作', key: 'action', fixed: 'right', width: 180 },
]

const loading = ref(false)
const saving = ref(false)
const savingRoleCode = ref('')
const keyword = ref('')
const roles = ref<Role[]>([])

const filteredRoles = computed(() => {
  const value = keyword.value.trim().toLowerCase()
  if (!value) return roles.value
  return roles.value.filter((role) =>
    [role.roleCode, role.roleName, role.description].some((item) =>
      item?.toLowerCase().includes(value),
    ),
  )
})

const roleModalVisible = ref(false)
const editingRole = ref<Role>()
const roleFormRef = ref<FormInstance>()
const roleForm = reactive({
  roleCode: '',
  roleName: '',
  description: '',
})
const roleRules = {
  roleCode: [{ required: true, message: '请输入角色编码' }],
  roleName: [{ required: true, message: '请输入角色名称' }],
}

const permissionsModalVisible = ref(false)
const permissionRole = ref<Role>()
const permissionValues = ref<string[]>([])

const assignModalVisible = ref(false)
const assignFormRef = ref<FormInstance>()
const assignAction = ref<'assign' | 'revoke'>('assign')
const assignForm = reactive({
  userBizId: '',
  roleCode: '',
  effectiveTo: '',
})
const assignRules = {
  userBizId: [{ required: true, message: '请输入用户业务 ID' }],
  roleCode: [{ required: true, message: '请选择角色' }],
}

const loadRoles = async () => {
  loading.value = true
  try {
    roles.value = await getRoles()
  } finally {
    loading.value = false
  }
}

const openRoleModal = (role?: Role) => {
  editingRole.value = role
  Object.assign(roleForm, {
    roleCode: role?.roleCode || '',
    roleName: role?.roleName || '',
    description: role?.description || '',
  })
  roleModalVisible.value = true
}

const submitRole = async () => {
  await roleFormRef.value?.validate()
  saving.value = true
  try {
    if (editingRole.value) {
      await updateRole(roleForm)
      message.success('角色已更新')
    } else {
      await createRole(roleForm)
      message.success('角色已创建')
    }
    roleModalVisible.value = false
    loadRoles()
  } finally {
    saving.value = false
  }
}

const toggleRole = async (role: Role, enabled: boolean) => {
  savingRoleCode.value = role.roleCode
  try {
    await updateRoleStatus({ roleCode: role.roleCode, enabled })
    message.success('角色状态已更新')
    loadRoles()
  } finally {
    savingRoleCode.value = ''
  }
}

const openPermissionsModal = (role: Role) => {
  permissionRole.value = role
  permissionValues.value = [...(role.permissions || [])]
  permissionsModalVisible.value = true
}

const submitPermissions = async () => {
  if (!permissionRole.value) return
  saving.value = true
  try {
    await configureRolePermissions({
      roleCode: permissionRole.value.roleCode,
      permissions: permissionValues.value,
    })
    message.success('角色权限已更新')
    permissionsModalVisible.value = false
    loadRoles()
  } finally {
    saving.value = false
  }
}

const openAssignModal = (role: Role) => {
  Object.assign(assignForm, {
    userBizId: '',
    roleCode: role.roleCode,
    effectiveTo: '',
  })
  assignAction.value = 'assign'
  assignModalVisible.value = true
}

const submitAssign = async () => {
  await assignFormRef.value?.validate()
  saving.value = true
  try {
    const payload = {
      userBizId: assignForm.userBizId,
      roleCode: assignForm.roleCode,
      effectiveTo: assignForm.effectiveTo
        ? new Date(assignForm.effectiveTo).toISOString()
        : undefined,
    }
    if (assignAction.value === 'assign') {
      await assignUserRole(payload)
      message.success('用户角色已分配')
    } else {
      await revokeUserRole(payload)
      message.success('用户角色已撤销')
    }
    assignModalVisible.value = false
  } finally {
    saving.value = false
  }
}

const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(loadRoles)
</script>
