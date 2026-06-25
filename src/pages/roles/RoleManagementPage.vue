<template>
  <BusinessPageShell
    title="Roles 角色权限"
    description="查看角色、角色类型、启用状态与权限集合；权限覆盖配置通过矩阵化编辑入口提交。"
    :endpoints="[
      endpoints.role.list,
      endpoints.role.create,
      endpoints.role.update,
      endpoints.role.status,
      endpoints.role.configurePermissions,
      endpoints.role.assignUser,
      endpoints.role.revokeUser,
    ]"
    :icon="KeyOutlined"
    :status-text="errorMessage ? 'RBAC WAITING' : 'RBAC OPS'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && roles.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="14">
          <a-card class="cockpit-card" :bordered="false" title="角色权限矩阵">
            <a-table
              row-key="roleCode"
              size="small"
              :data-source="roles"
              :columns="columns"
              :pagination="{ pageSize: 10 }"
              :row-class-name="rowClassName"
              @row="rowHandlers"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled === false ? 'default' : 'success'">
                    {{ record.enabled === false ? '停用' : '启用' }}
                  </a-tag>
                </template>
                <template v-if="column.key === 'permissions'">
                  <a-tooltip :title="(record.permissions || []).join(', ')">
                    <a-tag color="purple">{{ record.permissions?.length || 0 }} 权限</a-tag>
                  </a-tooltip>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>

        <a-col :xs="24" :xl="10">
          <a-card class="cockpit-card" :bordered="false">
            <template #title>角色配置</template>
            <template #extra>
              <a-space>
                <a-button :disabled="!selectedRole" :loading="saving" @click="saveRoleBase">保存角色</a-button>
                <a-button type="primary" :disabled="!selectedRole" :loading="savingPermissions" @click="savePermissions">
                  保存权限
                </a-button>
              </a-space>
            </template>
            <a-empty v-if="!selectedRole" description="选择角色后配置权限" />
            <a-space v-else direction="vertical" style="width: 100%">
              <a-form layout="vertical">
                <a-form-item label="角色编码"><a-input v-model:value="roleForm.roleCode" disabled /></a-form-item>
                <a-form-item label="角色名称"><a-input v-model:value="roleForm.roleName" /></a-form-item>
                <a-form-item label="角色类型"><a-input v-model:value="roleForm.roleType" /></a-form-item>
                <a-form-item label="启用状态">
                  <a-switch v-model:checked="roleForm.enabled" @change="saveRoleEnabled" />
                </a-form-item>
                <a-form-item label="说明"><a-textarea v-model:value="roleForm.description" :rows="3" /></a-form-item>
              </a-form>

              <a-divider orientation="left">权限集合</a-divider>
              <a-checkbox-group v-model:value="selectedPermissions" class="permission-grid">
                <a-checkbox v-for="permission in permissionOptions" :key="permission" :value="permission">
                  {{ permission }}
                </a-checkbox>
              </a-checkbox-group>

              <a-alert
                type="info"
                show-icon
                message="权限候选来自当前角色列表返回"
                description="如果后端新增权限编码，列表刷新后会自动进入候选集合；不会在前端硬编码业务权限。"
              />
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
import { KeyOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { configureRolePermissions, listRoles, updateRole, updateRoleStatus } from '@/entities/role/api'
import type { RoleDto } from '@/entities/role/model'

const loading = ref(false)
const saving = ref(false)
const savingPermissions = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const roles = ref<RoleDto[]>([])
const selectedRole = ref<RoleDto>()
const selectedPermissions = ref<string[]>([])
const roleForm = reactive<{
  roleCode?: string
  roleName?: string
  roleType?: string
  description?: string
  enabled?: boolean
}>({})

const permissionOptions = computed(() => {
  const values = roles.value.flatMap((role) => role.permissions || [])
  return Array.from(new Set(values)).sort()
})

const metrics = computed(() => [
  { label: '角色数', value: roles.value.length, hint: '系统 + 自定义' },
  { label: '启用角色', value: roles.value.filter((item) => item.enabled !== false).length, hint: '可参与授权' },
  { label: '系统角色', value: roles.value.filter((item) => item.roleType === 'SYSTEM').length, hint: '不可随意改动' },
  { label: '权限候选', value: permissionOptions.value.length, hint: '权限编码集合' },
])

const columns = [
  { title: '角色编码', dataIndex: 'roleCode', key: 'roleCode' },
  { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
  { title: '类型', dataIndex: 'roleType', key: 'roleType' },
  { title: '状态', key: 'enabled' },
  { title: '权限', key: 'permissions' },
  { title: '说明', dataIndex: 'description', key: 'description' },
]

const syncForm = (role: RoleDto) => {
  roleForm.roleCode = role.roleCode
  roleForm.roleName = role.roleName
  roleForm.roleType = role.roleType
  roleForm.description = role.description
  roleForm.enabled = role.enabled !== false
  selectedPermissions.value = [...(role.permissions || [])]
}

const updateLocalRole = (role: RoleDto) => {
  selectedRole.value = role
  roles.value = roles.value.map((item) => (item.roleCode === role.roleCode ? role : item))
  syncForm(role)
}

const rowHandlers = (record: RoleDto) => ({
  onClick: () => {
    selectedRole.value = record
    syncForm(record)
  },
})

const rowClassName = (record: RoleDto) =>
  record.roleCode === selectedRole.value?.roleCode ? 'selected-business-row' : ''

const saveRoleBase = async () => {
  if (!selectedRole.value || !roleForm.roleCode) return
  saving.value = true
  try {
    const role = await updateRole({
      roleCode: roleForm.roleCode,
      roleName: roleForm.roleName,
      roleType: roleForm.roleType,
      description: roleForm.description,
      enabled: roleForm.enabled,
    })
    updateLocalRole(role)
    message.success('角色配置已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存角色失败'
  } finally {
    saving.value = false
  }
}

const saveRoleEnabled = async () => {
  if (!selectedRole.value || !roleForm.roleCode) return
  const role = await updateRoleStatus({
    roleCode: roleForm.roleCode,
    enabled: roleForm.enabled,
  })
  updateLocalRole(role)
}

const savePermissions = async () => {
  if (!selectedRole.value) return
  savingPermissions.value = true
  try {
    const role = await configureRolePermissions({
      roleCode: selectedRole.value.roleCode,
      permissions: selectedPermissions.value,
    })
    updateLocalRole(role)
    message.success('角色权限已保存')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存权限失败'
  } finally {
    savingPermissions.value = false
  }
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    roles.value = await listRoles()
    if (roles.value[0]) {
      selectedRole.value = roles.value[0]
      syncForm(roles.value[0])
    }
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
