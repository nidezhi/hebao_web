import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getCurrentUser, login as loginApi, logout as logoutApi } from '@/entities/auth/api'
import type { AuthUserDto, LoginRequest } from '@/entities/auth/model'

const storageKey = 'dzcom.auth.user'

const readCachedUser = (): AuthUserDto | null => {
  const raw = localStorage.getItem(storageKey)
  if (!raw) return null
  try {
    return JSON.parse(raw) as AuthUserDto
  } catch {
    localStorage.removeItem(storageKey)
    return null
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUserDto | null>(readCachedUser())
  const initialized = ref(false)
  const loading = ref(false)

  const isAuthenticated = computed(() => Boolean(user.value?.bizId))

  const setUser = (nextUser: AuthUserDto | null) => {
    user.value = nextUser
    if (nextUser) {
      localStorage.setItem(storageKey, JSON.stringify(nextUser))
    } else {
      localStorage.removeItem(storageKey)
    }
  }

  const bootstrap = async () => {
    if (initialized.value) return user.value
    loading.value = true
    try {
      const me = await getCurrentUser()
      setUser(me)
      return me
    } catch {
      setUser(null)
      return null
    } finally {
      initialized.value = true
      loading.value = false
    }
  }

  const login = async (payload: LoginRequest) => {
    loading.value = true
    try {
      const loggedInUser = await loginApi(payload)
      setUser(loggedInUser)
      initialized.value = true
      return loggedInUser
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    loading.value = true
    try {
      await logoutApi()
    } finally {
      setUser(null)
      initialized.value = true
      loading.value = false
    }
  }

  return {
    user,
    initialized,
    loading,
    isAuthenticated,
    bootstrap,
    login,
    logout,
    setUser,
  }
})
