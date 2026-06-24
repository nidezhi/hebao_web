<template>
  <BusinessPageShell
    title="Account 本人账户"
    description="查看当前登录用户、角色权限、风险等级、KYC 状态与偏好配置。"
    :endpoints="[endpoints.auth.me, endpoints.user.preferences, endpoints.user.updateMe, endpoints.user.changeMyPassword]"
    :icon="UserOutlined"
    :status-text="errorMessage ? 'AUTH REQUIRED' : 'SESSION LINK'"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <a-row :gutter="[18, 18]">
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="当前用户">
            <a-descriptions v-if="currentUser" bordered size="small" :column="1">
              <a-descriptions-item label="用户名">{{ currentUser.username }}</a-descriptions-item>
              <a-descriptions-item label="昵称">{{ currentUser.nickname || '-' }}</a-descriptions-item>
              <a-descriptions-item label="邮箱">{{ currentUser.email || '-' }}</a-descriptions-item>
              <a-descriptions-item label="手机">{{ currentUser.phone || '-' }}</a-descriptions-item>
              <a-descriptions-item label="状态">
                <a-tag :color="optionColor(userStatusOptions, currentUser.status)">
                  {{ optionLabel(userStatusOptions, currentUser.status) }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="KYC">
                <a-tag :color="optionColor(kycStatusOptions, currentUser.kycStatus)">
                  {{ optionLabel(kycStatusOptions, currentUser.kycStatus) }}
                </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="风险等级">{{ currentUser.riskLevel || '-' }}</a-descriptions-item>
              <a-descriptions-item label="最近登录">{{ formatDateTime(currentUser.lastLoginAt) }}</a-descriptions-item>
            </a-descriptions>
            <a-empty v-else description="未获取到当前用户" />
          </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
          <a-card class="cockpit-card" :bordered="false" title="角色、权限与偏好">
            <a-space direction="vertical" style="width: 100%">
              <div>
                <span class="eyebrow">ROLES</span>
                <br />
                <a-space wrap>
                  <a-tag v-for="role in currentUser?.roles || []" :key="role" color="cyan">{{ role }}</a-tag>
                  <a-empty v-if="!currentUser?.roles?.length" description="暂无角色" />
                </a-space>
              </div>
              <div>
                <span class="eyebrow">PREFERENCES</span>
                <a-table size="small" row-key="key" :pagination="false" :data-source="preferences" :columns="preferenceColumns" />
              </div>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
    </PageState>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import PageState from '@/shared/components/business/PageState.vue'
import { endpoints } from '@/shared/api/endpoints'
import { getCurrentUser } from '@/entities/auth/api'
import { listMyPreferences } from '@/entities/user/api'
import type { PreferenceDto, UserDto } from '@/entities/user/model'
import { kycStatusOptions, userStatusOptions } from '@/entities/user/dictionary'
import { optionColor, optionLabel } from '@/shared/dictionaries/status'
import { formatDateTime } from '@/shared/utils/format'

const loading = ref(false)
const errorMessage = ref('')
const currentUser = ref<UserDto>()
const preferences = ref<PreferenceDto[]>([])

const preferenceColumns = [
  { title: '偏好键', dataIndex: 'key', key: 'key' },
  { title: '值', key: 'value', customRender: ({ record }: { record: PreferenceDto }) => JSON.stringify(record.value) },
]

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const [me, prefs] = await Promise.all([getCurrentUser(), listMyPreferences()])
    currentUser.value = me
    preferences.value = prefs || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '未登录或会话失效'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
