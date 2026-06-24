<template>
  <div class="login-page">
    <div class="login-radar">
      <span class="radar-ring ring-1" />
      <span class="radar-ring ring-2" />
      <span class="radar-ring ring-3" />
      <span class="radar-dot" />
    </div>

    <a-card class="cockpit-card login-card" :bordered="false">
      <span class="eyebrow">DZCOM SECURE ACCESS</span>
      <h1>登录投资操作舱</h1>
      <p>使用用户名、邮箱或手机号登录。后端会写入 DZCOM_SESSION Cookie。</p>

      <a-alert v-if="errorMessage" show-icon type="warning" :message="errorMessage" />

      <a-form layout="vertical" :model="form" @finish="submit">
        <a-form-item label="账号" name="account" :rules="[{ required: true, message: '请输入账号' }]">
          <a-input v-model:value="form.account" size="large" placeholder="用户名 / 邮箱 / 手机号" />
        </a-form-item>
        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
          <a-input-password v-model:value="form.password" size="large" placeholder="请输入密码" />
        </a-form-item>
        <a-button block type="primary" size="large" html-type="submit" :loading="loading">
          进入业务驾驶舱
        </a-button>
      </a-form>

      <a-divider />
      <a-space wrap>
        <a-button type="link" @click="router.push('/')">返回驾驶舱</a-button>
        <a-button type="link" @click="router.push('/account')">查看当前账户</a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/entities/auth/api'

const router = useRouter()
const loading = ref(false)
const errorMessage = ref('')
const form = reactive({
  account: '',
  password: '',
})

const submit = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    await login(form)
    await router.push('/')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '登录失败，请检查账号或密码'
  } finally {
    loading.value = false
  }
}
</script>
