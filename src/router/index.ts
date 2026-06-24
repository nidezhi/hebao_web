import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'DZCOM 投资业务驾驶舱', section: 'business' },
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/auth/LoginPage.vue'),
          meta: { title: '登录投资操作舱', section: 'auth' },
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/pages/account/AccountPage.vue'),
          meta: { title: 'Account 本人账户', section: 'auth' },
        },
        {
          path: 'overview',
          name: 'overview',
          component: () => import('@/pages/overview/OverviewPage.vue'),
          meta: { title: 'Overview 投资驾驶舱', section: 'business' },
        },
        {
          path: 'data-quality',
          name: 'data-quality',
          component: () => import('@/pages/data-quality/DataQualityPage.vue'),
          meta: { title: 'Data Quality 数据质量', section: 'business' },
        },
        {
          path: 'data-ingestion',
          name: 'data-ingestion',
          component: () => import('@/pages/data-ingestion/DataIngestionPage.vue'),
          meta: { title: 'Data Ingestion 采集编排', section: 'business' },
        },
        {
          path: 'product-risk',
          name: 'product-risk',
          component: () => import('@/pages/product-risk/ProductRiskPage.vue'),
          meta: { title: 'Product & Risk 产品风险', section: 'business' },
        },
        {
          path: 'report-studio',
          name: 'report-studio',
          component: () => import('@/pages/report-studio/ReportStudioPage.vue'),
          meta: { title: 'Report Studio 投资报告', section: 'business' },
        },
        {
          path: 'prompt-lab',
          name: 'prompt-lab',
          component: () => import('@/pages/prompt-lab/PromptLabPage.vue'),
          meta: { title: 'Prompt Lab 实验室', section: 'business' },
        },
        {
          path: 'simulation',
          name: 'simulation',
          component: () => import('@/pages/simulation/SimulationPage.vue'),
          meta: { title: 'Simulation 模拟交易', section: 'business' },
        },
        {
          path: 'review-loop',
          name: 'review-loop',
          component: () => import('@/pages/review-loop/ReviewLoopPage.vue'),
          meta: { title: 'Review Loop 复盘闭环', section: 'business' },
        },
        {
          path: 'risk-audit',
          name: 'risk-audit',
          component: () => import('@/pages/risk-audit/RiskAuditPage.vue'),
          meta: { title: 'Risk Audit 风控审计', section: 'business' },
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/pages/users/UserManagementPage.vue'),
          meta: { title: 'Users 用户管理', section: 'admin' },
        },
        {
          path: 'roles',
          name: 'roles',
          component: () => import('@/pages/roles/RoleManagementPage.vue'),
          meta: { title: 'Roles 角色权限', section: 'admin' },
        },
        {
          path: 'config-center',
          name: 'config-center',
          component: () => import('@/pages/config-center/ConfigCenterPage.vue'),
          meta: { title: 'Config Center 配置中心', section: 'config' },
        },
        {
          path: 'ui-system',
          name: 'ui-system',
          component: () => import('@/views/framework/UiSystemView.vue'),
          meta: { title: 'UI System 操作舱规范', section: 'framework' },
        },
        {
          path: 'development-rules',
          name: 'development-rules',
          component: () => import('@/views/framework/DevelopmentRulesView.vue'),
          meta: { title: 'Development Rules 开发铁律', section: 'framework' },
        },
        {
          path: 'standby/api',
          name: 'api-standby',
          component: () => import('@/views/framework/ApiStandbyView.vue'),
          meta: { title: 'API Standby 接口等待舱', section: 'standby' },
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

router.afterEach((to) => {
  document.title = `${String(to.meta.title || '投资业务驾驶舱')} - DZCOM`
})

export default router
