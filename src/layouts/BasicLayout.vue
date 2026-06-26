<template>
  <a-layout class="cockpit-layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      class="cockpit-sider"
      width="248"
    >
      <div class="brand-console">
        <div class="brand-mark">DZ</div>
        <div v-if="!collapsed" class="brand-copy">
          <strong>DZCOM</strong>
          <span>INVESTMENT DECK</span>
        </div>
      </div>

      <a-menu
        :selected-keys="selectedKeys"
        v-model:open-keys="openKeys"
        class="nav-console"
        mode="inline"
        theme="light"
      >
        <a-menu-item key="/" @click="navigate('/')">
          <dashboard-outlined />
          <span>业务驾驶舱</span>
        </a-menu-item>
        <a-sub-menu key="business">
          <template #icon><fund-projection-screen-outlined /></template>
          <template #title>投资闭环</template>
          <a-menu-item key="/overview" @click="navigate('/overview')">Overview</a-menu-item>
          <a-menu-item key="/config-center/data-source-discovery" @click="navigate('/config-center/data-source-discovery')">AI 治理中枢</a-menu-item>
          <a-menu-item key="/config-center/data-sources" @click="navigate('/config-center/data-sources')">AI 治理证据</a-menu-item>
          <a-menu-item key="/data-ingestion" @click="navigate('/data-ingestion')">采集编排</a-menu-item>
          <a-menu-item key="/report-studio" @click="navigate('/report-studio')">投资报告</a-menu-item>
          <a-menu-item key="/prompt-lab" @click="navigate('/prompt-lab')">Prompt 实验室</a-menu-item>
          <a-menu-item key="/simulation" @click="navigate('/simulation')">模拟交易</a-menu-item>
          <a-menu-item key="/review-loop" @click="navigate('/review-loop')">复盘闭环</a-menu-item>
          <a-menu-item key="/risk-audit" @click="navigate('/risk-audit')">风控审计</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="config">
          <template #icon><control-outlined /></template>
          <template #title>配置中心</template>
          <a-menu-item key="/config-center" @click="navigate('/config-center')">配置总览</a-menu-item>
          <a-menu-item key="/data-quality" @click="navigate('/data-quality')">数据质量</a-menu-item>
          <a-menu-item key="/product-risk" @click="navigate('/product-risk')">产品风险</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="admin">
          <template #icon><team-outlined /></template>
          <template #title>权限与规范</template>
          <a-menu-item key="/account" @click="navigate('/account')">本人账户</a-menu-item>
          <a-menu-item key="/users" @click="navigate('/users')">用户管理</a-menu-item>
          <a-menu-item key="/roles" @click="navigate('/roles')">角色权限</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="framework">
          <template #icon><safety-certificate-outlined /></template>
          <template #title>开发规范</template>
          <a-menu-item key="/ui-system" @click="navigate('/ui-system')">UI 操作舱</a-menu-item>
          <a-menu-item key="/development-rules" @click="navigate('/development-rules')">开发铁律</a-menu-item>
          <a-menu-item key="/standby/api" @click="navigate('/standby/api')">API 文档舱</a-menu-item>
        </a-sub-menu>
      </a-menu>

      <div v-if="!collapsed" class="sider-status">
        <span class="pulse-dot" />
        <span>Business Mode</span>
      </div>
    </a-layout-sider>

    <a-layout class="cockpit-main">
      <a-layout-header class="cockpit-header">
        <div>
          <div class="eyebrow">DZCOM INVESTMENT / REAL API</div>
          <a-typography-title :level="3" class="page-title">
            {{ route.meta.title }}
          </a-typography-title>
        </div>
        <a-space :size="12" class="header-actions">
          <a-tag color="cyan">Business Cockpit</a-tag>
          <a-tag color="blue">{{ authStore.user?.nickname || authStore.user?.username || '未登录' }}</a-tag>
          <a-button v-if="!authStore.isAuthenticated" @click="navigate('/login')">登录</a-button>
          <a-button v-else @click="handleLogout">登出</a-button>
        </a-space>
      </a-layout-header>

      <a-layout-content class="cockpit-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import {
  ControlOutlined,
  DashboardOutlined,
  FundProjectionScreenOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const selectedKeys = computed(() => [route.path])
const openKeys = ref<string[]>(['business', 'admin', 'config'])

const navigate = (path: string) => router.push(path)

const handleLogout = async () => {
  try {
    await authStore.logout()
  } finally {
    await router.push('/login')
  }
}
</script>
