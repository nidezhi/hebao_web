<template>
  <main class="login-screen">
    <section class="login-intro">
      <div class="login-brand">
        <span>DZ</span>
        <strong>DZCOM</strong>
      </div>
      <h1>投资业务驾驶舱</h1>
      <p>数据质量、产品风险、投资报告、Prompt、Mock 交易与风控审计统一联调入口。</p>
      <div class="login-highlights">
        <span>真实 API</span>
        <span>Cookie 会话</span>
        <span>ADMIN 联调</span>
      </div>
    </section>

    <a-card class="login-card" :bordered="false">
      <span class="eyebrow">SECURE ACCESS</span>
      <h2>登录</h2>
      <p>使用后端账号登录，成功后自动携带 DZCOM_SESSION 访问受保护接口。</p>

      <a-alert v-if="errorMessage" show-icon type="warning" :message="errorMessage" />

      <form class="login-form" @submit.prevent="submit">
        <label class="login-field">
          <span>账号</span>
          <input v-model="form.account" autocomplete="username" placeholder="用户名 / 邮箱 / 手机号" @keyup.enter="submit" />
        </label>
        <label class="login-field">
          <span>密码</span>
          <input
            v-model="form.password"
            autocomplete="current-password"
            placeholder="请输入密码"
            type="password"
            @keyup.enter="submit"
          />
        </label>
        <button ref="submitButtonRef" class="login-submit" type="button" :disabled="loading" @click="submit">
          {{ loading ? '正在登录...' : '进入业务驾驶舱' }}
        </button>
        <small v-if="loginHint" class="login-hint">{{ loginHint }}</small>
      </form>

      <a-divider />
      <a-alert
        type="info"
        show-icon
        message="联调账号：demo_admin / ADMIN"
        description="密码已按本次会话提供值预填，方便验证后端鉴权链路。"
      />
    </a-card>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const loading = ref(false)
const errorMessage = ref('')
const loginHint = ref('')
const submitButtonRef = ref<HTMLButtonElement | null>(null)
const form = reactive({
  account: 'demo_admin',
  password: 'Demo@123456',
})

const submit = async () => {
  if (!form.account || !form.password || loading.value) return
  loading.value = true
  errorMessage.value = ''
  loginHint.value = '正在请求 /api/auth/login ...'
  try {
    await authStore.login(form)
    loginHint.value = '登录成功，正在进入驾驶舱 ...'
    await router.push(typeof route.query.redirect === 'string' ? route.query.redirect : '/')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '登录失败，请检查账号或密码'
    loginHint.value = ''
  } finally {
    loading.value = false
  }
}

const handleNativeSubmitClick = () => {
  void submit()
}

onMounted(async () => {
  submitButtonRef.value?.addEventListener('click', handleNativeSubmitClick)
  await authStore.bootstrap()
  if (authStore.isAuthenticated) {
    await router.push(typeof route.query.redirect === 'string' ? route.query.redirect : '/')
  }
})

onUnmounted(() => {
  submitButtonRef.value?.removeEventListener('click', handleNativeSubmitClick)
})
</script>
