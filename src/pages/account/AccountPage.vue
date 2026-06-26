<template>
  <BusinessPageShell
    title="Account 本人账户"
    description="当前登录用户、角色权限和个人偏好。个人资料、偏好和密码修改使用表单化操作。"
    :endpoints="[endpoints.auth.me, endpoints.user.updateMe, endpoints.user.changeMyPassword, endpoints.user.preferences, endpoints.user.setPreference, endpoints.user.deletePreference]"
    :icon="UserOutlined"
    status-text="SESSION"
  >
    <PageState :loading="authStore.loading || loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :xl="10">
          <a-card class="page-card" :bordered="false" title="当前用户">
            <template #extra><a-button type="link" @click="openProfile">编辑资料</a-button></template>
            <a-descriptions v-if="authStore.user" bordered size="small" :column="2">
              <a-descriptions-item label="用户名">{{ authStore.user.username }}</a-descriptions-item>
              <a-descriptions-item label="昵称">{{ authStore.user.nickname || '-' }}</a-descriptions-item>
              <a-descriptions-item label="邮箱">{{ authStore.user.email || '-' }}</a-descriptions-item>
              <a-descriptions-item label="手机">{{ authStore.user.phone || '-' }}</a-descriptions-item>
              <a-descriptions-item label="角色">{{ authStore.user.roles?.join(', ') || '-' }}</a-descriptions-item>
              <a-descriptions-item label="权限数">{{ authStore.user.permissions?.length || 0 }}</a-descriptions-item>
            </a-descriptions>
          </a-card>
          <a-card class="page-card mt-12" :bordered="false" title="修改密码">
            <a-form layout="vertical">
              <a-form-item label="当前密码"><a-input-password v-model:value="passwordForm.currentPassword" /></a-form-item>
              <a-form-item label="新密码"><a-input-password v-model:value="passwordForm.newPassword" /></a-form-item>
              <a-button danger :loading="saving" @click="submitPassword">修改密码</a-button>
            </a-form>
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="14">
          <a-card class="page-card" :bordered="false" title="个人偏好">
            <template #extra><a-button type="primary" @click="openPreference()">新增偏好</a-button></template>
            <a-table row-key="key" size="small" :pagination="false" :data-source="preferences" :columns="preferenceColumns">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'value'">{{ JSON.stringify(record.value) }}</template>
                <template v-else-if="column.key === 'actions'">
                  <a-space>
                    <a-button size="small" type="link" @click="openPreference(record)">编辑</a-button>
                    <a-button size="small" type="link" danger @click="deletePreference(record.key)">删除</a-button>
                  </a-space>
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </PageState>

    <a-drawer v-model:open="profileOpen" width="520" title="编辑本人资料">
      <a-form layout="vertical">
        <a-form-item label="邮箱"><a-input v-model:value="profileForm.email" /></a-form-item>
        <a-form-item label="手机号"><a-input v-model:value="profileForm.phone" /></a-form-item>
        <a-form-item label="昵称"><a-input v-model:value="profileForm.nickname" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitProfile">保存资料</a-button>
      </a-form>
    </a-drawer>

    <a-drawer v-model:open="preferenceOpen" width="520" title="保存偏好">
      <a-form layout="vertical">
        <a-form-item label="Key"><a-input v-model:value="preferenceForm.key" /></a-form-item>
        <a-form-item label="Value"><a-textarea v-model:value="preferenceValueText" :auto-size="{ minRows: 4, maxRows: 8 }" /></a-form-item>
        <a-button type="primary" :loading="saving" @click="submitPreference">保存偏好</a-button>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { changeMyPassword, deleteMyPreference, listMyPreferences, setMyPreference, updateMe } from '@/entities/user/api'
import type { PreferenceDto } from '@/entities/user/model'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const preferences = ref<PreferenceDto[]>([])
const profileOpen = ref(false)
const preferenceOpen = ref(false)
const profileForm = reactive({ email: '', phone: '', nickname: '' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })
const preferenceForm = reactive({ key: '' })
const preferenceValueText = ref('')
const metrics = computed(() => [
  { label: '登录用户', value: authStore.user?.username || '-', hint: authStore.isAuthenticated ? '已认证' : '未登录' },
  { label: '角色数', value: authStore.user?.roles?.length || 0, hint: '后端返回' },
  { label: '权限数', value: authStore.user?.permissions?.length || 0, hint: '菜单/动作基础' },
  { label: '偏好项', value: preferences.value.length, hint: '个人配置' },
])
const preferenceColumns = [
  { title: 'Key', dataIndex: 'key' },
  { title: 'Value', key: 'value' },
  { title: '操作', key: 'actions', width: 140 },
]
const openProfile = () => {
  profileForm.email = authStore.user?.email || ''
  profileForm.phone = authStore.user?.phone || ''
  profileForm.nickname = authStore.user?.nickname || ''
  profileOpen.value = true
}
const submitProfile = async () => {
  saving.value = true
  try {
    const user = await updateMe(profileForm)
    authStore.setUser(user)
    message.success('资料已更新')
    profileOpen.value = false
  } finally {
    saving.value = false
  }
}
const submitPassword = () => {
  Modal.confirm({
    title: '确认修改密码？',
    okType: 'danger',
    onOk: async () => {
      saving.value = true
      try {
        await changeMyPassword(passwordForm)
        message.success('密码已修改')
        passwordForm.currentPassword = ''
        passwordForm.newPassword = ''
      } finally {
        saving.value = false
      }
    },
  })
}
const openPreference = (preference?: PreferenceDto) => {
  preferenceForm.key = preference?.key || ''
  preferenceValueText.value = typeof preference?.value === 'string' ? preference.value : JSON.stringify(preference?.value ?? '', null, 2)
  preferenceOpen.value = true
}
const submitPreference = async () => {
  const parsed = safeParseJson(preferenceValueText.value)
  saving.value = true
  try {
    await setMyPreference({ key: preferenceForm.key, value: parsed ?? preferenceValueText.value })
    message.success('偏好已保存')
    preferenceOpen.value = false
    await loadPreferences()
  } finally {
    saving.value = false
  }
}
const deletePreference = (key: string) => {
  Modal.confirm({
    title: '确认删除偏好？',
    content: key,
    okType: 'danger',
    onOk: async () => {
      await deleteMyPreference(key)
      message.success('偏好已删除')
      await loadPreferences()
    },
  })
}
const loadPreferences = async () => {
  preferences.value = await listMyPreferences()
}
onMounted(async () => {
  loading.value = true
  try {
    await authStore.bootstrap()
    await loadPreferences()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '账户信息加载失败'
  } finally {
    loading.value = false
  }
})
</script>
