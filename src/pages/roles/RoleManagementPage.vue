<template>
  <BusinessPageShell
    title="Roles 角色权限"
    description="通用管理列表：创建/编辑角色、启停角色、配置权限、分配或撤销用户角色。"
    :endpoints="[endpoints.role.list, endpoints.role.permissionCatalog, endpoints.role.create, endpoints.role.update, endpoints.role.status, endpoints.role.configurePermissions, endpoints.role.assignUser, endpoints.role.revokeUser]"
    :icon="SafetyCertificateOutlined"
    status-text="RBAC"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="14">
          <a-card class="page-card" :bordered="false" title="角色管理">
            <template #extra>
              <a-space>
                <a-button @click="load">刷新</a-button>
                <a-button type="primary" @click="openRole()">新增角色</a-button>
              </a-space>
            </template>
            <a-table row-key="roleCode" size="small" :data-source="roles" :columns="columns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'enabled'">
                  <a-tag :color="record.enabled === false ? 'default' : 'success'">{{ record.enabled === false ? '停用' : '启用' }}</a-tag>
                </template>
                <template v-else-if="column.key === 'permissions'">{{ record.permissions?.length || 0 }}</template>
                <template v-else-if="column.key === 'actions'">
                  <a-space>
                    <a-button size="small" type="link" @click="selectedRole = record">权限</a-button>
                    <a-button size="small" type="link" @click="openRole(record)">编辑</a-button>
                    <a-button size="small" type="link" @click="toggleRole(record)">{{ record.enabled === false ? '启用' : '停用' }}</a-button>
                    <a-button size="small" type="link" @click="openPermission(record)">配置权限</a-button>
                    <a-button size="small" type="link" @click="openAssign(record)">用户授权</a-button>
                  </a-space>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="10">
          <a-card class="page-card" :bordered="false" title="权限矩阵">
            <EmptyEvidence v-if="!selectedRole" description="请选择角色查看权限。" />
            <a-space v-else direction="vertical" class="full-width">
              <a-descriptions bordered size="small" :column="2">
                <a-descriptions-item label="角色编码">{{ selectedRole.roleCode }}</a-descriptions-item>
                <a-descriptions-item label="角色类型">{{ selectedRole.roleType || '-' }}</a-descriptions-item>
              </a-descriptions>
              <div class="permission-tag-list">
                <a-tooltip v-for="permission in selectedRole.permissions || []" :key="permission">
                  <template #title>{{ permissionDescription(permission) }}</template>
                  <a-tag color="blue">{{ permissionLabel(permission) }}</a-tag>
                </a-tooltip>
              </div>
              <EmptyEvidence v-if="!selectedRole.permissions?.length" description="该角色暂无权限集合。" />
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="roleOpen" width="560" :title="roleForm.roleCode ? '编辑角色' : '新增角色'">
      <a-form layout="vertical">
        <a-form-item label="角色编码"><a-input v-model:value="roleForm.roleCode" /></a-form-item>
        <a-form-item label="角色名称"><a-input v-model:value="roleForm.roleName" /></a-form-item>
        <a-form-item label="描述"><a-textarea v-model:value="roleForm.description" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitRole">保存</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="permissionOpen" width="640" title="配置权限">
      <a-form layout="vertical">
        <a-form-item label="角色编码"><a-input v-model:value="permissionForm.roleCode" disabled /></a-form-item>
        <a-alert class="mb-12" type="info" show-icon message="权限来自后端注册表；提交值仍是稳定权限编码。" />
        <a-empty v-if="!permissionCatalog.length" description="暂无权限目录，请确认后端权限 catalog 接口。" />
        <a-collapse v-else v-model:active-key="activePermissionGroups" ghost>
          <a-collapse-panel v-for="group in permissionGroups" :key="group.groupName" :header="`${group.groupName} · ${group.items.length}`">
            <a-checkbox-group v-model:value="selectedPermissionCodes" class="permission-check-list">
              <a-row :gutter="[12, 12]">
                <a-col v-for="permission in group.items" :key="permission.permissionCode" :xs="24" :md="12">
                  <label class="permission-option">
                    <a-checkbox :value="permission.permissionCode" />
                    <span>
                      <strong>{{ permission.displayName }}</strong>
                      <small>{{ permission.permissionCode }}</small>
                      <em>{{ permission.description || '-' }}</em>
                    </span>
                    <a-tag :color="riskColor(permission.riskLevel)">{{ permission.riskLevel || 'LOW' }}</a-tag>
                  </label>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </a-collapse-panel>
        </a-collapse>
        <a-button type="primary" :loading="saving" @click="submitPermissions">保存权限</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="assignOpen" width="520" title="用户角色授权">
      <a-form layout="vertical">
        <a-form-item label="角色编码"><a-input v-model:value="assignForm.roleCode" disabled /></a-form-item>
        <a-form-item label="用户">
          <a-select
            v-model:value="assignForm.userBizId"
            show-search
            option-filter-prop="label"
            placeholder="选择用户"
            :options="userOptions"
          />
        </a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitAssign">分配角色</a-button>
          <a-button danger :loading="saving" @click="submitRevoke">撤销角色</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { SafetyCertificateOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'
import { assignUserRole, configureRolePermissions, createRole, listPermissionCatalog, listRoles, revokeUserRole, updateRole, updateRoleStatus } from '@/entities/role/api'
import type { PermissionCatalogDto, RoleDto } from '@/entities/role/model'
import { listUsers } from '@/entities/user/api'
import type { UserDto } from '@/entities/user/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const roles = ref<RoleDto[]>([])
const users = ref<UserDto[]>([])
const permissionCatalog = ref<PermissionCatalogDto[]>([])
const selectedRole = ref<RoleDto>()
const roleOpen = ref(false)
const permissionOpen = ref(false)
const assignOpen = ref(false)
const roleForm = reactive<Record<string, unknown>>({})
const permissionForm = reactive<{ roleCode?: string }>({})
const assignForm = reactive<{ roleCode?: string; userBizId?: string }>({})
const selectedPermissionCodes = ref<string[]>([])
const activePermissionGroups = ref<string[]>([])
const metrics = computed(() => [
  { label: '角色数', value: roles.value.length, hint: '真实返回' },
  { label: '启用角色', value: roles.value.filter((item) => item.enabled !== false).length, hint: '可分配' },
  { label: '权限目录', value: permissionCatalog.value.length, hint: '后端注册表' },
  { label: '当前角色权限', value: selectedRole.value?.permissions?.length || 0, hint: selectedRole.value?.roleCode || '-' },
])
const columns = [
  { title: '角色编码', dataIndex: 'roleCode' },
  { title: '角色名称', dataIndex: 'roleName' },
  { title: '启用', key: 'enabled' },
  { title: '权限数', key: 'permissions' },
  { title: '操作', key: 'actions', width: 360 },
]
const userOptions = computed(() => users.value.map((item) => ({
  value: item.bizId,
  label: `${item.username}${item.nickname ? ` / ${item.nickname}` : ''} · ${item.status || 'UNKNOWN'} · ${item.userNo || item.email || item.bizId}`,
})))
const permissionGroups = computed(() => {
  const map = new Map<string, PermissionCatalogDto[]>()
  permissionCatalog.value.forEach((permission) => {
    const key = permission.groupName || '其他权限'
    map.set(key, [...(map.get(key) || []), permission])
  })
  return [...map.entries()].map(([groupName, items]) => ({
    groupName,
    items: items.sort((a, b) => a.permissionCode.localeCompare(b.permissionCode)),
  }))
})
const permissionMap = computed(() =>
  new Map(permissionCatalog.value.map((permission) => [permission.permissionCode, permission])),
)
const resetObject = (target: Record<string, unknown>, next: Record<string, unknown>) => {
  Object.keys(target).forEach((key) => delete target[key])
  Object.assign(target, next)
}
const openRole = (role?: RoleDto) => {
  resetObject(roleForm, role ? { ...role } : {})
  roleOpen.value = true
}
const submitRole = async () => {
  saving.value = true
  try {
    if (roles.value.some((item) => item.roleCode === roleForm.roleCode)) await updateRole({ ...roleForm })
    else await createRole({ roleCode: String(roleForm.roleCode || ''), roleName: String(roleForm.roleName || ''), description: String(roleForm.description || '') || undefined })
    message.success('角色已保存')
    roleOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const toggleRole = (role: RoleDto) => {
  Modal.confirm({
    title: `${role.enabled === false ? '启用' : '停用'}角色？`,
    content: role.roleCode,
    onOk: async () => {
      await updateRoleStatus({ roleCode: role.roleCode, enabled: role.enabled === false })
      message.success('角色状态已更新')
      await load()
    },
  })
}
const openPermission = (role: RoleDto) => {
  permissionForm.roleCode = role.roleCode
  selectedPermissionCodes.value = [...(role.permissions || [])]
  activePermissionGroups.value = permissionGroups.value.map((group) => group.groupName)
  permissionOpen.value = true
}
const submitPermissions = async () => {
  saving.value = true
  try {
    await configureRolePermissions({
      roleCode: permissionForm.roleCode || '',
      permissions: selectedPermissionCodes.value,
    })
    message.success('权限已保存')
    permissionOpen.value = false
    await load()
  } finally {
    saving.value = false
  }
}
const openAssign = (role: RoleDto) => {
  assignForm.roleCode = role.roleCode
  assignForm.userBizId = ''
  assignOpen.value = true
}
const submitAssign = async () => {
  if (!assignForm.userBizId) {
    message.warning('请选择用户')
    return
  }
  saving.value = true
  try {
    await assignUserRole({ roleCode: assignForm.roleCode, userBizId: assignForm.userBizId })
    message.success('角色已分配')
  } finally {
    saving.value = false
  }
}
const submitRevoke = async () => {
  if (!assignForm.userBizId) {
    message.warning('请选择用户')
    return
  }
  saving.value = true
  try {
    await revokeUserRole({ roleCode: assignForm.roleCode, userBizId: assignForm.userBizId })
    message.success('角色已撤销')
  } finally {
    saving.value = false
  }
}
const permissionLabel = (permissionCode: string) => {
  const permission = permissionMap.value.get(permissionCode)
  return permission ? `${permission.displayName} · ${permission.permissionCode}` : permissionCode
}
const permissionDescription = (permissionCode: string) =>
  permissionMap.value.get(permissionCode)?.description || permissionCode
const riskColor = (riskLevel?: string) => {
  if (riskLevel === 'CRITICAL') return 'red'
  if (riskLevel === 'HIGH') return 'volcano'
  if (riskLevel === 'MEDIUM') return 'orange'
  return 'blue'
}
const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [roleItems, userPage, catalogItems] = await Promise.all([
      listRoles(),
      listUsers({ page: 1, size: 100, sort: 'registeredAt', direction: 'desc' }),
      listPermissionCatalog(),
    ])
    roles.value = roleItems
    users.value = userPage.items || []
    permissionCatalog.value = catalogItems
    selectedRole.value = roles.value[0]
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '角色列表加载失败'
  } finally {
    loading.value = false
  }
}
onMounted(load)
</script>
