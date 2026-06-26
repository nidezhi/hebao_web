import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/LoginPage.vue'),
      meta: { title: '登录投资操作舱', section: 'auth', public: true },
    },
    {
      path: '/',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'DZCOM 驾驶舱', section: 'business', requiresAuth: true },
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/pages/account/AccountPage.vue'),
          meta: { title: 'Account 本人账户', section: 'auth', requiresAuth: true },
        },
        {
          path: 'overview',
          name: 'overview',
          component: () => import('@/pages/overview/OverviewPage.vue'),
          meta: { title: 'Overview 投资驾驶舱', section: 'business', requiresAuth: true },
        },
        {
          path: 'data-quality',
          name: 'data-quality',
          component: () => import('@/pages/data-quality/DataQualityPage.vue'),
          meta: { title: 'Data Quality 数据质量', section: 'business', requiresAuth: true },
        },
        {
          path: 'data-ingestion',
          name: 'data-ingestion',
          component: () => import('@/pages/data-ingestion/DataIngestionPage.vue'),
          meta: { title: 'Data Ingestion 采集编排', section: 'business', requiresAuth: true },
        },
        {
          path: 'product-risk',
          name: 'product-risk',
          component: () => import('@/pages/product-risk/ProductRiskPage.vue'),
          meta: { title: 'Product & Risk 产品风险', section: 'business', requiresAuth: true },
        },
        {
          path: 'report-studio',
          name: 'report-studio',
          component: () => import('@/pages/report-studio/ReportStudioPage.vue'),
          meta: { title: 'Report Studio 投资报告', section: 'business', requiresAuth: true },
        },
        {
          path: 'prompt-lab',
          name: 'prompt-lab',
          component: () => import('@/pages/prompt-lab/PromptLabPage.vue'),
          meta: { title: 'Prompt Lab 实验室', section: 'business', requiresAuth: true },
        },
        {
          path: 'simulation',
          name: 'simulation',
          component: () => import('@/pages/simulation/SimulationPage.vue'),
          meta: { title: 'Simulation 模拟交易', section: 'business', requiresAuth: true },
        },
        {
          path: 'review-loop',
          name: 'review-loop',
          component: () => import('@/pages/review-loop/ReviewLoopPage.vue'),
          meta: { title: 'Review Loop 复盘闭环', section: 'business', requiresAuth: true },
        },
        {
          path: 'risk-audit',
          name: 'risk-audit',
          component: () => import('@/pages/risk-audit/RiskAuditPage.vue'),
          meta: { title: 'Risk Audit 风控审计', section: 'business', requiresAuth: true },
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/pages/users/UserManagementPage.vue'),
          meta: { title: 'Users 用户管理', section: 'admin', requiresAuth: true },
        },
        {
          path: 'roles',
          name: 'roles',
          component: () => import('@/pages/roles/RoleManagementPage.vue'),
          meta: { title: 'Roles 角色权限', section: 'admin', requiresAuth: true },
        },
        {
          path: 'config-center',
          name: 'config-center',
          component: () => import('@/pages/config-center/ConfigCenterPage.vue'),
          meta: { title: 'Config Center 配置中心', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/data-sources',
          name: 'config-data-sources',
          component: () => import('@/pages/config-center/modules/DataSourceConfigPage.vue'),
          meta: { title: 'AI Governance Evidence AI 治理证据', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/data-source-discovery',
          name: 'config-data-source-discovery',
          component: () => import('@/pages/config-center/modules/DataSourceDiscoveryPage.vue'),
          meta: { title: 'AI Governance Hub AI 治理中枢', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/tasks',
          name: 'config-tasks',
          component: () => import('@/pages/config-center/modules/TaskConfigPage.vue'),
          meta: { title: 'Task Config 任务配置', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/products',
          name: 'config-products',
          component: () => import('@/pages/config-center/modules/ProductConfigPage.vue'),
          meta: { title: 'Product Config 产品与行情配置', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/prompts',
          name: 'config-prompts',
          component: () => import('@/pages/config-center/modules/PromptConfigPage.vue'),
          meta: { title: 'Prompt Config 模板配置', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/models',
          name: 'config-models',
          component: () => import('@/pages/config-center/modules/ModelConfigPage.vue'),
          meta: { title: 'Model Config 模型配置', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/ai-skills',
          name: 'config-ai-skills',
          component: () => import('@/pages/config-center/modules/AiSkillConfigPage.vue'),
          meta: { title: 'AI Skill 工作台', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/model-skills',
          name: 'config-model-skills',
          component: () => import('@/pages/config-center/modules/ModelSkillBindingPage.vue'),
          meta: { title: 'Model Skill Binding 模型 Skill 绑定', section: 'config', requiresAuth: true },
        },
        {
          path: 'config-center/actions',
          name: 'config-actions',
          component: () => import('@/pages/config-center/modules/ApiMutationConsolePage.vue'),
          meta: { title: 'Operation Actions 业务操作管理', section: 'config', requiresAuth: true },
        },
        {
          path: 'ui-system',
          name: 'ui-system',
          component: () => import('@/views/framework/UiSystemView.vue'),
          meta: { title: 'UI System 操作舱规范', section: 'framework', public: true },
        },
        {
          path: 'development-rules',
          name: 'development-rules',
          component: () => import('@/views/framework/DevelopmentRulesView.vue'),
          meta: { title: 'Development Rules 开发铁律', section: 'framework', public: true },
        },
        {
          path: 'standby/api',
          name: 'api-standby',
          component: () => import('@/views/framework/ApiStandbyView.vue'),
          meta: { title: 'API Standby 接口等待舱', section: 'standby', public: true },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '页面不存在', section: 'error' },
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  if (to.meta.public) {
    if (to.name === 'login') {
      await authStore.bootstrap()
      if (authStore.isAuthenticated) {
        return typeof to.query.redirect === 'string' ? to.query.redirect : '/'
      }
    }
    return true
  }

  if (to.meta.requiresAuth) {
    await authStore.bootstrap()
    if (!authStore.isAuthenticated) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      }
    }
  }

  return true
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title || '业务驾驶舱')} - DZCOM`
})

export default router
