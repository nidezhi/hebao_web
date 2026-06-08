<template>
  <div class="auth-page">
    <div class="auth-brand">
      <div class="brand-mark">DZ</div>
      <h1>DZCOM</h1>
      <p>产品、行情与用户的一体化管理平台</p>
    </div>

    <a-card class="auth-card" :bordered="false">
      <a-typography-title :level="2">登录</a-typography-title>
      <a-typography-paragraph type="secondary">
        使用用户名、邮箱或手机号登录
      </a-typography-paragraph>

      <a-form :model="form" layout="vertical" @finish="handleSubmit">
        <a-form-item
          label="账号"
          name="account"
          :rules="[{ required: true, message: '请输入登录账号' }]"
        >
          <a-input v-model:value="form.account" size="large" placeholder="用户名 / 邮箱 / 手机号">
            <template #prefix><user-outlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="form.password" size="large" placeholder="请输入密码">
            <template #prefix><lock-outlined /></template>
          </a-input-password>
        </a-form-item>
        <a-button type="primary" html-type="submit" size="large" block :loading="submitting">
          登录
        </a-button>
      </a-form>

      <div class="auth-footer">
        还没有账号？
        <router-link to="/register">立即注册</router-link>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const submitting = ref(false)
const form = reactive({ account: '', password: '' })

const handleSubmit = async () => {
  submitting.value = true
  try {
    await userStore.login(form)
    message.success('登录成功')
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/'
    await router.replace(redirect)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.auth-page {
  display: grid;
  min-height: 100vh;
  padding: 32px;
  background:
    radial-gradient(circle at 15% 20%, rgb(22 119 255 / 22%), transparent 32%),
    linear-gradient(135deg, #07152f 0%, #0d2d63 55%, #1677ff 100%);
  grid-template-columns: minmax(300px, 1fr) minmax(380px, 480px);
  place-items: center;
}

.auth-brand {
  color: #fff;
}

.auth-brand h1 {
  margin: 20px 0 8px;
  color: #fff;
  font-size: 52px;
  letter-spacing: 6px;
}

.auth-brand p {
  color: rgb(255 255 255 / 72%);
  font-size: 18px;
}

.brand-mark {
  width: 72px;
  height: 72px;
  border: 1px solid rgb(255 255 255 / 35%);
  border-radius: 20px;
  background: rgb(255 255 255 / 12%);
  font-size: 28px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  backdrop-filter: blur(8px);
}

.auth-card {
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 24px 64px rgb(0 0 0 / 24%);
}

.auth-footer {
  margin-top: 24px;
  color: #8c8c8c;
  text-align: center;
}

@media (max-width: 800px) {
  .auth-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .auth-brand {
    margin-bottom: 24px;
    text-align: center;
  }

  .auth-brand h1 {
    margin: 8px 0;
    font-size: 30px;
  }

  .auth-brand p,
  .brand-mark {
    display: none;
  }
}
</style>
