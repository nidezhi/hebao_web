import { createRouter, createWebHistory } from 'vue-router'
import { pinia } from '@/stores'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
      meta: { title: '登录', public: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
      meta: { title: '注册', public: true },
    },
    {
      path: '/',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'Overview 投资驾驶舱' },
        },
        {
          path: 'data-quality',
          name: 'data-quality',
          component: () => import('@/views/data-quality/DataQualityView.vue'),
          meta: { title: 'Data Quality 数据质量' },
        },
        {
          path: 'product-risk',
          name: 'product-risk',
          component: () => import('@/views/product-risk/ProductRiskView.vue'),
          meta: { title: 'Product & Risk 产品风险' },
        },
        {
          path: 'report-studio',
          name: 'report-studio',
          component: () => import('@/views/report-studio/ReportStudioView.vue'),
          meta: { title: 'Report Studio 投资报告' },
        },
        {
          path: 'prompt-lab',
          name: 'prompt-lab',
          component: () => import('@/views/prompt-lab/PromptLabView.vue'),
          meta: { title: 'Prompt Lab 实验室' },
        },
        {
          path: 'simulation',
          name: 'simulation',
          component: () => import('@/views/simulation/SimulationView.vue'),
          meta: { title: 'Simulation 模拟交易' },
        },
        {
          path: 'review-loop',
          name: 'review-loop',
          component: () => import('@/views/review-loop/ReviewLoopView.vue'),
          meta: { title: 'Review Loop 复盘闭环' },
        },
        {
          path: 'risk-audit',
          name: 'risk-audit',
          component: () => import('@/views/risk-audit/RiskAuditView.vue'),
          meta: { title: 'Risk Audit 风控审计' },
        },
        {
          path: 'products',
          redirect: '/product-risk',
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/users/UserListView.vue'),
          meta: { title: '用户管理' },
        },
        {
          path: 'roles',
          name: 'roles',
          component: () => import('@/views/roles/RoleListView.vue'),
          meta: { title: '角色权限' },
        },
        {
          path: 'investment',
          redirect: '/investment/tasks',
        },
        {
          path: 'investment/tasks',
          name: 'investment-tasks',
          component: () => import('@/views/investment/InvestmentTasksView.vue'),
          meta: { title: '任务配置', investmentSection: 'tasks' },
        },
        {
          path: 'investment/executions',
          name: 'investment-executions',
          component: () => import('@/views/investment/InvestmentTasksView.vue'),
          meta: { title: '执行记录', investmentSection: 'executions' },
        },
        {
          path: 'investment/articles',
          name: 'investment-articles',
          component: () => import('@/views/investment/InvestmentTasksView.vue'),
          meta: { title: '投资资讯', investmentSection: 'articles' },
        },
        {
          path: 'investment/relations',
          name: 'investment-relations',
          component: () => import('@/views/investment/InvestmentTasksView.vue'),
          meta: { title: '关联证据', investmentSection: 'relations' },
        },
        {
          path: 'investment/snapshots',
          name: 'investment-snapshots',
          component: () => import('@/views/investment/InvestmentTasksView.vue'),
          meta: { title: '方向快照', investmentSection: 'snapshots' },
        },
        {
          path: 'investment/analysis',
          redirect: '/report-studio',
        },
        {
          path: 'ai-models',
          name: 'ai-models',
          component: () => import('@/views/ai/AiModelListView.vue'),
          meta: { title: 'AI 模型' },
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/profile/ProfileView.vue'),
          meta: { title: '个人中心' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '页面不存在' },
    },
  ],
})

router.beforeEach(async (to) => {
  const userStore = useUserStore(pinia)

  if (to.meta.public) {
    return userStore.isLoggedIn ? { name: 'home' } : true
  }

  if (!userStore.initialized) {
    await userStore.fetchCurrentUser()
  }

  if (!userStore.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  return true
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title || '管理平台')} - DZCOM`
})

export default router
