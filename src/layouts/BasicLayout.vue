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
        theme="dark"
      >
        <a-menu-item key="/" @click="navigate('/')">
          <dashboard-outlined />
          <span>业务驾驶舱</span>
        </a-menu-item>
        <a-sub-menu key="business">
          <template #icon><fund-projection-screen-outlined /></template>
          <template #title>投资工作区</template>
          <a-menu-item key="/overview" @click="navigate('/overview')">Overview</a-menu-item>
          <a-menu-item key="/data-quality" @click="navigate('/data-quality')">数据质量</a-menu-item>
          <a-menu-item key="/data-ingestion" @click="navigate('/data-ingestion')">采集编排</a-menu-item>
          <a-menu-item key="/product-risk" @click="navigate('/product-risk')">产品风险</a-menu-item>
          <a-menu-item key="/report-studio" @click="navigate('/report-studio')">投资报告</a-menu-item>
          <a-menu-item key="/prompt-lab" @click="navigate('/prompt-lab')">Prompt 实验室</a-menu-item>
          <a-menu-item key="/simulation" @click="navigate('/simulation')">模拟交易</a-menu-item>
          <a-menu-item key="/review-loop" @click="navigate('/review-loop')">复盘闭环</a-menu-item>
          <a-menu-item key="/risk-audit" @click="navigate('/risk-audit')">风控审计</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="admin">
          <template #icon><team-outlined /></template>
          <template #title>用户与权限</template>
          <a-menu-item key="/users" @click="navigate('/users')">用户管理</a-menu-item>
          <a-menu-item key="/roles" @click="navigate('/roles')">角色权限</a-menu-item>
          <a-menu-item key="/account" @click="navigate('/account')">本人账户</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/config-center" @click="navigate('/config-center')">
          <control-outlined />
          <span>配置中心</span>
        </a-menu-item>
        <a-sub-menu key="framework">
          <template #icon><safety-certificate-outlined /></template>
          <template #title>系统规范</template>
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
          <a-tag color="purple">Sci-Fi Cockpit</a-tag>
          <a-button ghost @click="navigate('/login')">登录</a-button>
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
const selectedKeys = computed(() => [route.path])
const openKeys = ref<string[]>(['business', 'admin'])

const navigate = (path: string) => router.push(path)
</script>
