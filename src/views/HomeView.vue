<template>
  <a-space direction="vertical" :size="24" class="page-container">
    <a-row :gutter="[16, 16]">
      <a-col v-for="item in statistics" :key="item.title" :xs="24" :sm="12" :xl="6">
        <a-card class="page-card" :bordered="false" :loading="loading">
          <a-statistic :title="item.title" :value="item.value">
            <template #prefix>
              <component :is="item.icon" :style="{ color: item.color }" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :lg="14">
        <a-card class="page-card" title="快捷操作" :bordered="false">
          <a-space wrap>
            <a-button type="primary" @click="router.push('/products')">
              <template #icon><appstore-outlined /></template>
              管理产品
            </a-button>
            <a-button @click="router.push('/users')">
              <template #icon><team-outlined /></template>
              管理用户
            </a-button>
            <a-button @click="router.push('/profile')">
              <template #icon><setting-outlined /></template>
              个人中心
            </a-button>
          </a-space>
          <a-divider />
          <a-alert
            type="info"
            show-icon
            message="接口已按 web.md 封装"
            description="用户、产品、行情、偏好和认证接口均已接入，页面会在后端服务可用时直接请求真实数据。"
          />
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="10">
        <a-card class="page-card" title="当前用户" :bordered="false">
          <a-descriptions :column="1" size="small">
            <a-descriptions-item label="用户名">
              {{ userStore.userInfo?.username || '-' }}
            </a-descriptions-item>
            <a-descriptions-item label="昵称">
              {{ userStore.userInfo?.nickname || '-' }}
            </a-descriptions-item>
            <a-descriptions-item label="邮箱">
              {{ userStore.userInfo?.email || '-' }}
            </a-descriptions-item>
            <a-descriptions-item label="角色">
              <a-tag v-for="role in userStore.userInfo?.roles || []" :key="role">
                {{ role }}
              </a-tag>
              <span v-if="!userStore.userInfo?.roles?.length">-</span>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ApiOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { getProducts } from '@/api/products'
import { getUsers } from '@/api/users'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const userTotal = ref(0)
const productTotal = ref(0)
const tradableTotal = ref(0)

const statistics = computed(() => [
  { title: '用户数量', value: userTotal.value, icon: h(UserOutlined), color: '#1677ff' },
  { title: '产品数量', value: productTotal.value, icon: h(AppstoreOutlined), color: '#52c41a' },
  { title: '可交易产品', value: tradableTotal.value, icon: h(ApiOutlined), color: '#722ed1' },
  {
    title: '当前风险等级',
    value: userStore.userInfo?.riskLevel ?? '-',
    icon: h(SafetyCertificateOutlined),
    color: '#fa8c16',
  },
])

const fetchDashboard = async () => {
  loading.value = true
  try {
    const [users, products, tradableProducts] = await Promise.all([
      getUsers({ page: 0, size: 1 }),
      getProducts({ page: 0, size: 1 }),
      getProducts({ page: 0, size: 1, tradeStatus: 'TRADABLE' }),
    ])
    userTotal.value = users.total
    productTotal.value = products.total
    tradableTotal.value = tradableProducts.total
  } finally {
    loading.value = false
  }
}

onMounted(fetchDashboard)
</script>

<style scoped>
.page-container {
  width: 100%;
}
</style>
