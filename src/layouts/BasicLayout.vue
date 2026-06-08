<template>
  <a-layout class="app-layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="app-sider">
      <div class="logo">{{ collapsed ? 'DZ' : 'DZCOM' }}</div>
      <a-menu :selected-keys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="/" @click="navigate('/')">
          <dashboard-outlined />
          <span>工作台</span>
        </a-menu-item>
        <a-menu-item key="/products" @click="navigate('/products')">
          <appstore-outlined />
          <span>产品管理</span>
        </a-menu-item>
        <a-menu-item key="/users" @click="navigate('/users')">
          <team-outlined />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="/profile" @click="navigate('/profile')">
          <setting-outlined />
          <span>个人中心</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="app-header">
        <div>
          <a-typography-title :level="4" class="page-title">
            {{ route.meta.title }}
          </a-typography-title>
          <span class="page-subtitle">DZCOM 业务管理平台</span>
        </div>
        <a-dropdown>
          <a-space class="user-entry">
            <a-avatar :src="userStore.userInfo?.avatarUrl">
              <template #icon><user-outlined /></template>
            </a-avatar>
            <span>{{ userStore.displayName }}</span>
            <down-outlined />
          </a-space>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="navigate('/profile')">
                <setting-outlined />
                个人中心
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item danger @click="handleLogout">
                <logout-outlined />
                退出登录
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>

      <a-layout-content class="app-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  AppstoreOutlined,
  DashboardOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const selectedKeys = computed(() => {
  const firstSegment = route.path.split('/').filter(Boolean)[0]
  return [firstSegment ? `/${firstSegment}` : '/']
})

const navigate = (path: string) => router.push(path)

const handleLogout = async () => {
  await userStore.logout()
  router.replace('/login')
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.app-sider {
  box-shadow: 2px 0 8px rgb(0 21 41 / 18%);
}

.logo {
  height: 64px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
  letter-spacing: 1px;
}

.app-header {
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.page-title {
  margin: 0;
}

.page-subtitle {
  color: #8c8c8c;
  font-size: 12px;
}

.user-entry {
  cursor: pointer;
}

.app-content {
  margin: 24px;
}

@media (max-width: 768px) {
  .app-content {
    margin: 12px;
  }

  .page-subtitle {
    display: none;
  }
}
</style>
