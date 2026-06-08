<template>
  <div class="register-page">
    <a-card class="register-card" :bordered="false">
      <a-typography-title :level="2">创建 DZCOM 账号</a-typography-title>
      <a-typography-paragraph type="secondary">
        用户名和密码为必填项，联系方式可稍后完善
      </a-typography-paragraph>

      <a-form :model="form" layout="vertical" @finish="handleSubmit">
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12">
            <a-form-item
              label="用户名"
              name="username"
              :rules="[{ required: true, message: '请输入用户名' }]"
            >
              <a-input v-model:value="form.username" />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item label="昵称" name="nickname">
              <a-input v-model:value="form.nickname" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item
          label="密码"
          name="password"
          :rules="[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码至少 6 位' },
          ]"
        >
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12">
            <a-form-item label="邮箱" name="email" :rules="[{ type: 'email', message: '邮箱格式不正确' }]">
              <a-input v-model:value="form.email" />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item label="手机号" name="phone">
              <a-input v-model:value="form.phone" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-space direction="vertical" class="full-width">
          <a-button type="primary" html-type="submit" size="large" block :loading="submitting">
            注册
          </a-button>
          <a-button size="large" block @click="router.push('/login')">返回登录</a-button>
        </a-space>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { register } from '@/api/auth'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const submitting = ref(false)
const form = reactive({
  username: '',
  password: '',
  email: '',
  phone: '',
  nickname: '',
})

const handleSubmit = async () => {
  submitting.value = true
  try {
    const user = await register(form)
    userStore.setUserInfo(user)
    message.success('注册成功')
    await router.replace('/')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.register-page {
  display: grid;
  min-height: 100vh;
  padding: 24px;
  background:
    radial-gradient(circle at 80% 20%, rgb(22 119 255 / 18%), transparent 30%),
    #f0f5ff;
  place-items: center;
}

.register-card {
  width: min(680px, 100%);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 16px 48px rgb(22 119 255 / 12%);
}

.full-width {
  width: 100%;
}
</style>
