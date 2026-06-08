<template>
  <a-row :gutter="[16, 16]">
    <a-col :xs="24" :lg="8">
      <a-card class="page-card profile-card" :bordered="false">
        <a-avatar :size="88" :src="userStore.userInfo?.avatarUrl">
          <template #icon><user-outlined /></template>
        </a-avatar>
        <a-typography-title :level="3">
          {{ userStore.displayName }}
        </a-typography-title>
        <a-typography-text type="secondary">
          @{{ userStore.userInfo?.username }}
        </a-typography-text>
        <a-divider />
        <a-descriptions :column="1" size="small">
          <a-descriptions-item label="用户编号">
            {{ userStore.userInfo?.userNo || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="账户状态">
            <a-tag :color="optionColor(userStatusOptions, userStore.userInfo?.status)">
              {{ optionLabel(userStatusOptions, userStore.userInfo?.status) }}
            </a-tag>
          </a-descriptions-item>
          <a-descriptions-item label="KYC 状态">
            <a-tag :color="optionColor(kycStatusOptions, userStore.userInfo?.kycStatus)">
              {{ optionLabel(kycStatusOptions, userStore.userInfo?.kycStatus) }}
            </a-tag>
          </a-descriptions-item>
          <a-descriptions-item label="风险等级">
            {{ userStore.userInfo?.riskLevel ?? '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="角色">
            {{ userStore.userInfo?.roles?.join('、') || '-' }}
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
    </a-col>

    <a-col :xs="24" :lg="16">
      <a-card class="page-card" :bordered="false">
        <a-tabs>
          <a-tab-pane key="contact" tab="联系方式">
            <a-form :model="contactForm" layout="vertical" class="form-width" @finish="saveContact">
              <a-form-item
                label="邮箱"
                name="email"
                :rules="[{ type: 'email', message: '邮箱格式不正确' }]"
              >
                <a-input v-model:value="contactForm.email" />
              </a-form-item>
              <a-form-item label="手机号" name="phone">
                <a-input v-model:value="contactForm.phone" />
              </a-form-item>
              <a-button type="primary" html-type="submit" :loading="saving">
                保存联系方式
              </a-button>
            </a-form>
          </a-tab-pane>

          <a-tab-pane key="password" tab="修改密码">
            <a-form
              ref="passwordFormRef"
              :model="passwordForm"
              :rules="passwordRules"
              layout="vertical"
              class="form-width"
              @finish="savePassword"
            >
              <a-form-item label="当前密码" name="currentPassword">
                <a-input-password v-model:value="passwordForm.currentPassword" />
              </a-form-item>
              <a-form-item label="新密码" name="newPassword">
                <a-input-password v-model:value="passwordForm.newPassword" />
              </a-form-item>
              <a-form-item label="确认新密码" name="confirmPassword">
                <a-input-password v-model:value="passwordForm.confirmPassword" />
              </a-form-item>
              <a-button type="primary" html-type="submit" :loading="saving">
                修改密码
              </a-button>
            </a-form>
          </a-tab-pane>

          <a-tab-pane key="preferences" tab="个人偏好">
            <div class="toolbar">
              <a-typography-text type="secondary">
                偏好值使用 JSON 格式保存
              </a-typography-text>
              <a-button type="primary" @click="openPreferenceModal()">
                <template #icon><plus-outlined /></template>
                新增偏好
              </a-button>
            </div>
            <a-table
              row-key="key"
              size="small"
              :columns="preferenceColumns"
              :data-source="preferences"
              :loading="preferencesLoading"
              :pagination="false"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'value'">
                  <pre class="json-value">{{ stringifyValue(record.value) }}</pre>
                </template>
                <template v-else-if="column.key === 'updatedAt'">
                  {{ formatDateTime(record.updatedAt) }}
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-space>
                    <a-button type="link" size="small" @click="openPreferenceModal(record)">
                      编辑
                    </a-button>
                    <a-popconfirm
                      title="确定删除该偏好吗？"
                      @confirm="removePreference(record.key)"
                    >
                      <a-button type="link" danger size="small">删除</a-button>
                    </a-popconfirm>
                  </a-space>
                </template>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>

  <a-modal
    v-model:open="preferenceModalVisible"
    :title="editingPreference ? '编辑偏好' : '新增偏好'"
    :confirm-loading="saving"
    @ok="submitPreference"
  >
    <a-form ref="preferenceFormRef" :model="preferenceForm" :rules="preferenceRules" layout="vertical">
      <a-form-item label="偏好键" name="key">
        <a-input v-model:value="preferenceForm.key" :disabled="Boolean(editingPreference)" />
      </a-form-item>
      <a-form-item label="JSON 值" name="value">
        <a-textarea
          v-model:value="preferenceForm.value"
          :rows="8"
          placeholder='例如 "dark"、true、{"language":"zh-CN"}'
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance, TableColumnsType } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { PlusOutlined, UserOutlined } from '@ant-design/icons-vue'
import {
  changeMyPassword,
  deleteMyPreference,
  getMyPreferences,
  saveMyPreference,
  updateMyContact,
} from '@/api/profile'
import type { Preference } from '@/api/types'
import { useUserStore } from '@/stores/user'
import {
  kycStatusOptions,
  optionColor,
  optionLabel,
  userStatusOptions,
} from '@/utils/options'

const userStore = useUserStore()
const saving = ref(false)
const contactForm = reactive({
  email: userStore.userInfo?.email || '',
  phone: userStore.userInfo?.phone || '',
})

const passwordFormRef = ref<FormInstance>()
const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})
const validateConfirmPassword = async (_rule: unknown, value: string) => {
  if (value !== passwordForm.newPassword) {
    return Promise.reject(new Error('两次输入的新密码不一致'))
  }
  return Promise.resolve()
}
const passwordRules = {
  currentPassword: [{ required: true, message: '请输入当前密码' }],
  newPassword: [
    { required: true, message: '请输入新密码' },
    { min: 6, message: '新密码至少 6 位' },
  ],
  confirmPassword: [
    { required: true, message: '请再次输入新密码' },
    { validator: validateConfirmPassword, trigger: 'change' },
  ],
}

const preferenceColumns: TableColumnsType<Preference> = [
  { title: '键', dataIndex: 'key', width: 160 },
  { title: '值类型', dataIndex: 'valueType', width: 100 },
  { title: '值', key: 'value' },
  { title: '更新时间', key: 'updatedAt', width: 180 },
  { title: '操作', key: 'action', width: 120 },
]
const preferences = ref<Preference[]>([])
const preferencesLoading = ref(false)
const preferenceModalVisible = ref(false)
const editingPreference = ref<Preference>()
const preferenceFormRef = ref<FormInstance>()
const preferenceForm = reactive({ key: '', value: '' })
const validateJson = async (_rule: unknown, value: string) => {
  try {
    JSON.parse(value)
    return Promise.resolve()
  } catch {
    return Promise.reject(new Error('请输入合法的 JSON 值'))
  }
}
const preferenceRules = {
  key: [{ required: true, message: '请输入偏好键' }],
  value: [
    { required: true, message: '请输入偏好值' },
    { validator: validateJson, trigger: 'blur' },
  ],
}

const saveContact = async () => {
  saving.value = true
  try {
    const user = await updateMyContact(contactForm)
    userStore.setUserInfo(user)
    message.success('联系方式已更新')
  } finally {
    saving.value = false
  }
}

const savePassword = async () => {
  saving.value = true
  try {
    await changeMyPassword({
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
    })
    message.success('密码修改成功')
    passwordFormRef.value?.resetFields()
  } finally {
    saving.value = false
  }
}

const loadPreferences = async () => {
  preferencesLoading.value = true
  try {
    preferences.value = await getMyPreferences()
  } finally {
    preferencesLoading.value = false
  }
}

const openPreferenceModal = (preference?: Preference) => {
  editingPreference.value = preference
  preferenceForm.key = preference?.key || ''
  preferenceForm.value = preference ? stringifyValue(preference.value) : ''
  preferenceModalVisible.value = true
}

const submitPreference = async () => {
  await preferenceFormRef.value?.validate()
  saving.value = true
  try {
    await saveMyPreference(preferenceForm.key, JSON.parse(preferenceForm.value))
    message.success('偏好已保存')
    preferenceModalVisible.value = false
    loadPreferences()
  } finally {
    saving.value = false
  }
}

const removePreference = async (key: string) => {
  await deleteMyPreference(key)
  message.success('偏好已删除')
  loadPreferences()
}

const stringifyValue = (value: unknown) => JSON.stringify(value, null, 2)
const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

onMounted(loadPreferences)
</script>

<style scoped>
.profile-card {
  text-align: center;
}

.profile-card :deep(.ant-descriptions) {
  text-align: left;
}

.form-width {
  max-width: 520px;
}

.json-value {
  max-width: 360px;
  max-height: 120px;
  margin: 0;
  overflow: auto;
  white-space: pre-wrap;
}
</style>
