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
                <template v-if="column.key === 'key'">
                  <span>{{ preferenceLabel(record.key) }}</span>
                  <a-tag class="ml-8">{{ record.key }}</a-tag>
                </template>
                <template v-else-if="column.key === 'value'">{{ formatPreferenceValue(record) }}</template>
                <template v-else-if="column.key === 'updatedAt'">{{ formatDateTime(record.updatedAt) }}</template>
                <template v-else-if="column.key === 'actions'">
                  <a-space>
                    <a-button size="small" type="link" :disabled="!isKnownPreference(record.key)" @click="openPreference(record)">编辑</a-button>
                    <a-button size="small" type="link" danger :disabled="!isKnownPreference(record.key)" @click="deletePreference(record.key)">删除</a-button>
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
        <a-form-item label="偏好项">
          <a-select v-model:value="preferenceForm.key" :options="preferenceKeyOptions" @change="handlePreferenceKeyChange" />
        </a-form-item>
        <a-form-item v-if="preferenceForm.key === 'theme'" label="主题">
          <a-select v-model:value="preferenceForm.theme" :options="themeOptions" />
        </a-form-item>
        <a-form-item v-else-if="preferenceForm.key === 'language'" label="语言">
          <a-select v-model:value="preferenceForm.language" :options="languageOptions" />
        </a-form-item>
        <a-form-item v-else-if="preferenceForm.key === 'timezone'" label="时区">
          <a-select v-model:value="preferenceForm.timezone" :options="timezoneOptions" />
        </a-form-item>
        <a-form-item v-else-if="preferenceForm.key === 'market'" label="默认市场">
          <a-select v-model:value="preferenceForm.market" :options="marketOptions" />
        </a-form-item>
        <a-form-item v-else-if="preferenceForm.key === 'notification'" label="通知提醒">
          <a-switch v-model:checked="preferenceForm.notification" checked-children="开启" un-checked-children="关闭" />
        </a-form-item>
        <template v-else-if="preferenceForm.key === 'dashboard'">
          <a-form-item label="默认入口">
            <a-select v-model:value="preferenceForm.dashboardDefaultRoute" :options="dashboardRouteOptions" />
          </a-form-item>
          <a-form-item label="刷新间隔（秒）">
            <a-input-number v-model:value="preferenceForm.dashboardRefreshInterval" class="full-width" :min="15" :max="3600" />
          </a-form-item>
          <a-form-item label="紧凑布局">
            <a-switch v-model:checked="preferenceForm.dashboardCompact" checked-children="开启" un-checked-children="关闭" />
          </a-form-item>
        </template>
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
import { formatDateTime } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { changeMyPassword, deleteMyPreference, listMyPreferences, setMyPreference, updateMe } from '@/entities/user/api'
import type { PreferenceDto } from '@/entities/user/model'
import { useAuthStore } from '@/stores/auth'

type PreferenceKey = 'language' | 'timezone' | 'theme' | 'market' | 'notification' | 'dashboard'
type SelectOption = { label: string; value: string }
type DashboardPreference = {
  defaultRoute: string
  refreshIntervalSeconds: number
  compact: boolean
}

const authStore = useAuthStore()
const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const preferences = ref<PreferenceDto[]>([])
const profileOpen = ref(false)
const preferenceOpen = ref(false)
const profileForm = reactive({ email: '', phone: '', nickname: '' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })
const preferenceForm = reactive({
  key: 'theme' as PreferenceKey,
  theme: 'system',
  language: 'zh-CN',
  timezone: 'Asia/Shanghai',
  market: 'CN',
  notification: true,
  dashboardDefaultRoute: '/overview',
  dashboardRefreshInterval: 60,
  dashboardCompact: false,
})
const preferenceCatalog: Record<PreferenceKey, { label: string; description: string }> = {
  language: { label: '语言', description: '界面语言' },
  timezone: { label: '时区', description: '时间展示时区' },
  theme: { label: '主题', description: '界面明暗主题' },
  market: { label: '默认市场', description: '业务页面默认市场范围' },
  notification: { label: '通知提醒', description: '账户级提醒开关' },
  dashboard: { label: '工作台', description: '默认入口、刷新频率和布局' },
}
const preferenceKeyOptions = (Object.keys(preferenceCatalog) as PreferenceKey[]).map((key) => ({
  label: `${preferenceCatalog[key].label} · ${preferenceCatalog[key].description}`,
  value: key,
}))
const themeOptions: SelectOption[] = [
  { label: '跟随系统', value: 'system' },
  { label: '浅色', value: 'light' },
  { label: '深色', value: 'dark' },
]
const languageOptions: SelectOption[] = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
]
const timezoneOptions: SelectOption[] = [
  { label: '中国标准时间 UTC+8', value: 'Asia/Shanghai' },
  { label: '协调世界时 UTC', value: 'UTC' },
  { label: '美国东部时间', value: 'America/New_York' },
  { label: '英国伦敦时间', value: 'Europe/London' },
]
const marketOptions: SelectOption[] = [
  { label: '中国 A 股', value: 'CN' },
  { label: '港股', value: 'HK' },
  { label: '美股', value: 'US' },
  { label: '全球', value: 'GLOBAL' },
]
const dashboardRouteOptions: SelectOption[] = [
  { label: '总览', value: '/overview' },
  { label: '报告工作台', value: '/report-studio' },
  { label: '模拟交易', value: '/simulation' },
  { label: '数据质量', value: '/data-quality' },
  { label: '运行模型绑定', value: '/config-center/model-bindings' },
]
const metrics = computed(() => [
  { label: '登录用户', value: authStore.user?.username || '-', hint: authStore.isAuthenticated ? '已认证' : '未登录' },
  { label: '角色数', value: authStore.user?.roles?.length || 0, hint: '后端返回' },
  { label: '权限数', value: authStore.user?.permissions?.length || 0, hint: '菜单/动作基础' },
  { label: '偏好项', value: preferences.value.length, hint: '个人配置' },
])
const preferenceColumns = [
  { title: '偏好项', key: 'key' },
  { title: '类型', dataIndex: 'valueType', width: 90 },
  { title: '偏好值', key: 'value' },
  { title: '更新时间', key: 'updatedAt', width: 160 },
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
const isKnownPreference = (key: string): key is PreferenceKey => key in preferenceCatalog
const optionLabel = (options: SelectOption[], value: unknown) =>
  options.find((item) => item.value === value)?.label || String(value || '-')
const preferenceLabel = (key: string) =>
  isKnownPreference(key) ? preferenceCatalog[key].label : `未开放偏好：${key}`
const asObject = (value: unknown): Partial<DashboardPreference> =>
  value && typeof value === 'object' && !Array.isArray(value) ? value as Partial<DashboardPreference> : {}
const formatPreferenceValue = (preference: PreferenceDto) => {
  if (!isKnownPreference(preference.key)) return '未开放编辑的历史偏好'
  if (preference.key === 'theme') return optionLabel(themeOptions, preference.value)
  if (preference.key === 'language') return optionLabel(languageOptions, preference.value)
  if (preference.key === 'timezone') return optionLabel(timezoneOptions, preference.value)
  if (preference.key === 'market') return optionLabel(marketOptions, preference.value)
  if (preference.key === 'notification') return preference.value === true ? '开启' : '关闭'
  const dashboard = asObject(preference.value)
  return [
    `入口 ${optionLabel(dashboardRouteOptions, dashboard.defaultRoute || '/overview')}`,
    `刷新 ${dashboard.refreshIntervalSeconds || 60}s`,
    dashboard.compact ? '紧凑' : '标准',
  ].join(' / ')
}
const readStringPreference = (value: unknown, fallback: string) =>
  typeof value === 'string' && value ? value : fallback
const readBooleanPreference = (value: unknown, fallback: boolean) =>
  typeof value === 'boolean' ? value : fallback
const applyPreferenceToForm = (preference?: PreferenceDto) => {
  const value = preference?.value
  if (preferenceForm.key === 'theme') preferenceForm.theme = readStringPreference(value, 'system')
  if (preferenceForm.key === 'language') preferenceForm.language = readStringPreference(value, 'zh-CN')
  if (preferenceForm.key === 'timezone') preferenceForm.timezone = readStringPreference(value, 'Asia/Shanghai')
  if (preferenceForm.key === 'market') preferenceForm.market = readStringPreference(value, 'CN')
  if (preferenceForm.key === 'notification') preferenceForm.notification = readBooleanPreference(value, true)
  if (preferenceForm.key === 'dashboard') {
    const dashboard = asObject(value)
    preferenceForm.dashboardDefaultRoute = typeof dashboard.defaultRoute === 'string' ? dashboard.defaultRoute : '/overview'
    preferenceForm.dashboardRefreshInterval = typeof dashboard.refreshIntervalSeconds === 'number' ? dashboard.refreshIntervalSeconds : 60
    preferenceForm.dashboardCompact = typeof dashboard.compact === 'boolean' ? dashboard.compact : false
  }
}
const handlePreferenceKeyChange = () => {
  const existing = preferences.value.find((item) => item.key === preferenceForm.key)
  applyPreferenceToForm(existing)
}
const openPreference = (preference?: PreferenceDto) => {
  preferenceForm.key = preference && isKnownPreference(preference.key) ? preference.key : 'theme'
  applyPreferenceToForm(preference && isKnownPreference(preference.key) ? preference : preferences.value.find((item) => item.key === preferenceForm.key))
  preferenceOpen.value = true
}
const preferencePayloadValue = () => {
  if (preferenceForm.key === 'theme') return preferenceForm.theme
  if (preferenceForm.key === 'language') return preferenceForm.language
  if (preferenceForm.key === 'timezone') return preferenceForm.timezone
  if (preferenceForm.key === 'market') return preferenceForm.market
  if (preferenceForm.key === 'notification') return preferenceForm.notification
  return {
    defaultRoute: preferenceForm.dashboardDefaultRoute,
    refreshIntervalSeconds: preferenceForm.dashboardRefreshInterval,
    compact: preferenceForm.dashboardCompact,
  } satisfies DashboardPreference
}
const submitPreference = async () => {
  saving.value = true
  try {
    await setMyPreference({ key: preferenceForm.key, value: preferencePayloadValue() })
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
