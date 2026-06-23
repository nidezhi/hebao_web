<template>
  <a-layout class="app-layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="app-sider">
      <div class="logo">{{ collapsed ? 'DZ' : 'DZCOM' }}</div>
      <a-menu
        v-model:open-keys="openKeys"
        :selected-keys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="/" @click="navigate('/')">
          <dashboard-outlined />
          <span>投资驾驶舱</span>
        </a-menu-item>
        <a-sub-menu key="workbench">
          <template #icon><fund-projection-screen-outlined /></template>
          <template #title>投资工作区</template>
          <a-menu-item key="/data-quality" @click="navigate('/data-quality')">
            数据质量
          </a-menu-item>
          <a-menu-item key="/product-risk" @click="navigate('/product-risk')">
            产品风险
          </a-menu-item>
          <a-menu-item key="/report-studio" @click="navigate('/report-studio')">
            投资报告
          </a-menu-item>
          <a-menu-item key="/prompt-lab" @click="navigate('/prompt-lab')">
            Prompt 实验室
          </a-menu-item>
          <a-menu-item key="/simulation" @click="navigate('/simulation')">
            模拟交易
          </a-menu-item>
          <a-menu-item key="/review-loop" @click="navigate('/review-loop')">
            复盘闭环
          </a-menu-item>
          <a-menu-item key="/risk-audit" @click="navigate('/risk-audit')">
            风控审计
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="investment">
          <template #icon><appstore-outlined /></template>
          <template #title>旧任务中心</template>
          <a-menu-item key="/investment/tasks" @click="navigate('/investment/tasks')">
            任务配置
          </a-menu-item>
          <a-menu-item key="/investment/executions" @click="navigate('/investment/executions')">
            执行记录
          </a-menu-item>
          <a-menu-item key="/investment/articles" @click="navigate('/investment/articles')">
            投资资讯
          </a-menu-item>
          <a-menu-item key="/investment/relations" @click="navigate('/investment/relations')">
            关联证据
          </a-menu-item>
          <a-menu-item key="/investment/snapshots" @click="navigate('/investment/snapshots')">
            方向快照
          </a-menu-item>
          <a-menu-item key="/investment/analysis" @click="navigate('/investment/analysis')">
            分析报告
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="system">
          <template #icon><setting-outlined /></template>
          <template #title>系统管理</template>
          <a-menu-item key="/users" @click="navigate('/users')">用户管理</a-menu-item>
          <a-menu-item key="/roles" @click="navigate('/roles')">角色权限</a-menu-item>
          <a-menu-item key="/ai-models" @click="navigate('/ai-models')">AI 模型</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/profile" @click="navigate('/profile')">
          <user-outlined />
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
          <span class="page-subtitle">{{ pageContext }}</span>
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
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  AppstoreOutlined,
  DashboardOutlined,
  DownOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const selectedKeys = computed(() => [route.path])
const openKeys = ref<string[]>([])
const routeGroup = computed(() => {
  if ([
    '/data-quality',
    '/product-risk',
    '/report-studio',
    '/prompt-lab',
    '/simulation',
    '/review-loop',
    '/risk-audit',
  ].includes(route.path)) return 'workbench'
  if (route.path.startsWith('/investment/')) return 'investment'
  if (['/users', '/roles', '/ai-models'].includes(route.path)) return 'system'
  return ''
})
const pageContext = computed(() => {
  const labels: Record<string, string> = {
    workbench: '投资驾驶舱 + 工作台',
    investment: '兼容旧任务路由',
    system: '系统管理',
  }
  return labels[routeGroup.value] || 'DZCOM 投资平台'
})

watch(
  routeGroup,
  (group) => {
    if (group && !openKeys.value.includes(group)) openKeys.value = [...openKeys.value, group]
  },
  { immediate: true },
)

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
