<template>
  <BusinessPageShell
    title="Roles 角色权限"
    description="查看角色、角色类型、启用状态与权限集合；权限覆盖配置属于高风险动作，后续进入受控表单。"
    :endpoints="[endpoints.role.list, endpoints.role.create, endpoints.role.configurePermissions, endpoints.role.assignUser]"
    :icon="KeyOutlined"
    :status-text="errorMessage ? 'RBAC WAITING' : 'RBAC MATRIX'"
  >
    <PageState :loading="loading" :error-message="errorMessage" :empty="loaded && roles.length === 0">
      <MetricStrip :metrics="metrics" />

      <a-card class="cockpit-card" :bordered="false" title="角色权限矩阵">
        <a-table
          row-key="roleCode"
          size="small"
          :data-source="roles"
          :columns="columns"
          :pagination="{ pageSize: 10 }"
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
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { KeyOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { listRoles } from '@/entities/role/api'
import type { RoleDto } from '@/entities/role/model'

const loading = ref(false)
const loaded = ref(false)
const errorMessage = ref('')
const roles = ref<RoleDto[]>([])

const metrics = computed(() => [
  { label: '角色数', value: roles.value.length, hint: '系统 + 自定义' },
  { label: '启用角色', value: roles.value.filter((item) => item.enabled !== false).length, hint: '可参与授权' },
  { label: '系统角色', value: roles.value.filter((item) => item.roleType === 'SYSTEM').length, hint: '不可随意改动' },
  { label: '权限绑定', value: roles.value.reduce((sum, item) => sum + (item.permissions?.length || 0), 0), hint: '权限编码集合' },
])

const columns = [
  { title: '角色编码', dataIndex: 'roleCode', key: 'roleCode' },
  { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
  { title: '类型', dataIndex: 'roleType', key: 'roleType' },
  { title: '状态', key: 'enabled' },
  { title: '权限', key: 'permissions' },
  { title: '说明', dataIndex: 'description', key: 'description' },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    roles.value = await listRoles()
    loaded.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '请求失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
