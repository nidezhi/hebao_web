import { defineStore } from 'pinia'
import { getCurrentUser, login, logout, type LoginPayload } from '@/api/auth'
import type { User } from '@/api/types'

const STORAGE_KEY = 'dzcom-current-user'

const readStoredUser = (): User | null => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') as User | null
  } catch {
    return null
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: readStoredUser(),
    initialized: false,
  }),
  getters: {
    isLoggedIn: (state) => Boolean(state.userInfo),
    displayName: (state) =>
      state.userInfo?.nickname || state.userInfo?.username || '用户',
  },
  actions: {
    setUserInfo(userInfo: User | null) {
      this.userInfo = userInfo
      if (userInfo) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
    async login(payload: LoginPayload) {
      const user = await login(payload)
      this.setUserInfo(user)
    },
    async fetchCurrentUser() {
      try {
        const user = await getCurrentUser()
        this.setUserInfo(user)
        return user
      } catch {
        this.setUserInfo(null)
        return null
      } finally {
        this.initialized = true
      }
    },
    async logout() {
      try {
        await logout()
      } finally {
        this.setUserInfo(null)
      }
    },
  },
})
