<template>
  <main class="login-screen">
    <div class="login-stage">
      <section class="login-intro">
        <div class="login-brand">
          <span>DZ</span>
          <strong>DZCOM</strong>
          <small>INVESTMENT DECK</small>
        </div>
        <h1>
          <span>投资闭环</span>
          <strong>安全登录舱</strong>
        </h1>
        <p>登录后进入真实后端 API 联调环境，统一访问数据质量、投资报告、Prompt、Mock 交易与风控审计。</p>
        <div class="login-highlights">
          <span>真实 API</span>
          <span>Cookie 会话</span>
          <span>ADMIN 联调</span>
        </div>
        <div class="login-status-panel">
          <div class="login-orbit">
            <div class="login-orbit__ring ring-a" />
            <div class="login-orbit__ring ring-b" />
            <div class="login-orbit__core">
              <span>AUTH API</span>
              <strong>ONLINE</strong>
            </div>
          </div>
          <div class="login-status-copy">
            <span>RUNTIME STATUS</span>
            <strong>后端鉴权链路在线</strong>
            <p>登录成功后自动写入会话 Cookie，并进入受保护业务接口。</p>
            <div class="login-status-points">
              <b>AUTH</b>
              <b>SESSION</b>
              <b>REAL API</b>
            </div>
          </div>
        </div>
      </section>

      <a-card class="login-card" :bordered="false">
        <div class="login-card__head">
          <div>
            <span class="eyebrow">SECURE ACCESS</span>
            <h2>登录</h2>
          </div>
          <a-tag color="green">ONLINE</a-tag>
        </div>
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
          message="请输入后端已开通账号"
          description="页面不再预填账号或密码；联调账号以当前环境真实配置为准。"
        />
      </a-card>
    </div>
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
  account: '',
  password: '',
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
