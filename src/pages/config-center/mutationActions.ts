import { endpoints } from '@/shared/api/endpoints'

export type OperationPlacementStatus = 'implemented' | 'needs-ui'

export interface OperationActionPlacement {
  id: string
  title: string
  description: string
  endpoint: string
  danger?: boolean
  status: OperationPlacementStatus
  evidence: string
}

export interface MutationActionPlacementGroup {
  key: string
  title: string
  badge: string
  color: string
  path: string
  pathLabel: string
  description: string
  actions: OperationActionPlacement[]
}

const action = (
  id: string,
  title: string,
  description: string,
  endpoint: string,
  status: OperationPlacementStatus,
  evidence: string,
  danger = false,
): OperationActionPlacement => ({ id, title, description, endpoint, status, evidence, danger })

export const taskMutationActions = [
  action('task-save', '保存任务定义', '新增或更新投资任务定义。', endpoints.task.saveDefinition, 'implemented', 'Data Ingestion / Task Config 已提供保存入口。'),
  action('task-trigger', '手动触发任务', '触发投资任务执行。', endpoints.task.trigger, 'implemented', 'Data Ingestion / Task Config 已提供触发入口。', true),
]

export const reportMutationActions = [
  action('report-generate', '生成投资报告', '手动触发投资报告生成。', endpoints.report.generate, 'implemented', 'Report Studio 已提供生成入口。', true),
]

export const dataSourceMutationActions = [
  action('data-source-save', '保存数据源', '新增或更新数据源资产。', endpoints.dataSource.save, 'implemented', 'AI Governance Evidence 已提供数据源维护分区。'),
  action('data-source-health-save', '保存数据源健康', '写入数据源健康状态。', endpoints.dataSource.saveHealth, 'implemented', 'AI Governance Evidence 数据源分区已提供健康抽屉。'),
  action('quality-save', '保存质量快照', '写入数据质量快照。', endpoints.dataSource.saveQuality, 'implemented', 'AI Governance Evidence 数据源分区已提供质量快照抽屉。'),
]

export const productMutationActions = [
  action('product-create', '创建产品', '管理端创建产品。', endpoints.product.create, 'implemented', 'Product Config 已提供新增产品抽屉。'),
  action('product-update', '更新产品', '管理端更新产品基础信息。', endpoints.product.update, 'implemented', 'Product Config 已提供编辑产品抽屉。'),
  action('product-status', '变更产品交易状态', '变更产品交易生命周期。', endpoints.product.status, 'implemented', 'Product Config 表格行内已提供状态菜单。', true),
  action('product-attribute-save', '保存产品属性', '保存产品扩展属性。', endpoints.product.saveAttribute, 'implemented', 'Product Config 已提供产品属性抽屉。'),
  action('product-profile-save', '保存产品投资画像', '保存风险、波动、流动性、Mock 约束和主题关系。', endpoints.product.saveInvestmentProfile, 'implemented', 'Product Config 已提供投资画像抽屉。'),
  action('quote-save', '保存行情点', '写入或修正产品行情。', endpoints.marketQuote.save, 'implemented', 'Product Config 已提供行情抽屉。'),
  action('product-delete', '删除产品', '逻辑删除产品。', endpoints.product.delete, 'implemented', 'Product Config 表格行内已提供删除确认。', true),
]

export const aiSkillMutationActions = [
  action('ai-skill-save', '保存 AI Skill', '新增或更新 Skill 版本、指令、Schema 和评估策略。', endpoints.aiSkill.save, 'implemented', 'AI Skill 工作台已提供保存入口。'),
  action('ai-skill-status', '变更 AI Skill 状态', 'DRAFT / VALIDATING / ACTIVE / RETIRED / ARCHIVED。', endpoints.aiSkill.status, 'implemented', 'AI Skill 工作台已提供状态菜单。', true),
]

export const modelMutationActions = [
  action('model-save', '保存 AI 模型配置', '新增或更新 AI 模型配置、指标和状态。', endpoints.aiModel.save, 'implemented', 'Model Config 已提供保存入口。'),
  action('model-status', '变更 AI 模型状态', 'DRAFT / VALIDATING / ACTIVE / INACTIVE / ARCHIVED。', endpoints.aiModel.status, 'implemented', 'Model Config 已提供状态菜单。', true),
  action('model-archive', '归档 AI 模型', '逻辑删除模型，将状态置为 ARCHIVED。', endpoints.aiModel.archive, 'implemented', 'Model Config 已提供归档确认。', true),
]

export const modelSkillMutationActions = [
  action('model-skill-save', '保存模型 Skill 绑定', '把模型实例绑定到业务 Skill 场景和版本。', endpoints.aiModelSkill.save, 'implemented', 'Model Skill Binding 已提供保存和重绑入口。', true),
]

export const promptMutationActions = [
  action('prompt-save', '保存 Prompt 模板', '新增或更新 Prompt 模板版本、变量和输出 Schema。', endpoints.prompt.save, 'implemented', 'Prompt Config 已提供保存入口。'),
  action('prompt-status', '变更 Prompt 状态', 'DRAFT / VALIDATING / ACTIVE / RETIRED。', endpoints.prompt.status, 'implemented', 'Prompt Config 已提供状态菜单。', true),
]

export const portfolioMutationActions = [
  action('portfolio-create', '创建 Mock 组合', '创建模拟交易组合。', endpoints.portfolio.create, 'implemented', 'Simulation 已在组合列表提供新建组合抽屉。'),
  action('portfolio-buy', 'Mock 买入', '提交模拟买入订单。', endpoints.portfolio.buy, 'implemented', 'Simulation 已提供买入表单。', true),
  action('portfolio-buy-report', '报告转 Mock 买入', '从报告建议生成模拟买入。', endpoints.portfolio.buyFromReport, 'implemented', 'Simulation 订单工作区已提供报告买入入口。', true),
  action('portfolio-sell', 'Mock 卖出', '提交模拟卖出订单。', endpoints.portfolio.sell, 'implemented', 'Simulation 已提供卖出表单。', true),
  action('portfolio-cancel-order', '撤销 Mock 订单', '撤销未终态模拟订单。', endpoints.portfolio.cancelOrder, 'implemented', 'Simulation 订单工作区已提供撤单入口。', true),
  action('portfolio-rebalance', '执行组合再平衡', '按目标权重执行模拟再平衡。', endpoints.portfolio.rebalance, 'implemented', 'Simulation 已提供再平衡表单。', true),
  action('portfolio-refresh-valuation', '刷新组合估值', '刷新 Mock 组合估值。', endpoints.portfolio.refreshValuation, 'implemented', 'Simulation 组合详情已提供手动刷新估值入口。'),
]

export const reviewLoopMutationActions = [
  action('backtest-save', '保存回测结果', '保存或更新回测记录。', endpoints.backtest.save, 'implemented', 'Review Loop 已提供保存回测结果抽屉。'),
  action('backtest-generate', '从组合生成回测', '基于 Mock 组合生成回测。', endpoints.backtest.generateFromPortfolio, 'implemented', 'Review Loop 已提供从组合生成回测入口。', true),
  action('feedback-save', '保存投资反馈', '保存采纳、拒绝、观察或忽略反馈。', endpoints.feedback.save, 'implemented', 'Review Loop 已提供结构化反馈录入抽屉。'),
  action('prompt-evaluation-save', '保存 Prompt 评估', '保存 Prompt 评分和复核结果。', endpoints.promptEvaluation.save, 'implemented', 'Review Loop 已提供 Prompt 评估录入抽屉。'),
]

export const accountMutationActions = [
  action('me-update', '更新本人资料', '更新当前登录用户邮箱、手机号、昵称。', endpoints.user.updateMe, 'implemented', 'Account 已提供编辑本人资料抽屉。'),
  action('me-password', '修改本人密码', '修改当前登录用户密码。', endpoints.user.changeMyPassword, 'implemented', 'Account 已提供修改密码表单。', true),
  action('preference-set', '保存本人偏好', '新增或更新当前用户偏好键。', endpoints.user.setPreference, 'implemented', 'Account 已提供新增/编辑偏好抽屉。'),
  action('preference-delete', '删除本人偏好', '逻辑删除当前用户指定偏好键。', endpoints.user.deletePreference, 'implemented', 'Account 已提供删除偏好确认。', true),
]

export const userMutationActions = [
  action('user-create', '创建用户', '管理端创建用户。', endpoints.user.create, 'implemented', 'Users 已提供新增用户抽屉。'),
  action('user-update', '更新用户资料', '管理端更新指定用户资料。', endpoints.user.update, 'implemented', 'Users 已提供编辑用户抽屉。'),
  action('user-status', '变更用户状态', '启用、禁用或锁定用户。', endpoints.user.status, 'implemented', 'Users 已提供状态变更操作。', true),
  action('user-kyc', '变更 KYC 状态', '管理端修改用户 KYC 状态。', endpoints.user.kycStatus, 'implemented', 'Users 已提供合规抽屉。', true),
  action('user-risk', '变更用户风险等级', '管理端设置用户风险等级。', endpoints.user.riskLevel, 'implemented', 'Users 已提供合规抽屉。', true),
  action('user-delete', '删除用户', '逻辑删除指定用户。', endpoints.user.delete, 'implemented', 'Users 已提供删除确认。', true),
]

export const roleMutationActions = [
  action('role-create', '创建角色', '新增角色。', endpoints.role.create, 'implemented', 'Roles 已提供新增角色抽屉。'),
  action('role-update', '更新角色', '更新角色名称或描述。', endpoints.role.update, 'implemented', 'Roles 已提供编辑角色抽屉。'),
  action('role-status', '变更角色状态', '启用或停用角色。', endpoints.role.status, 'implemented', 'Roles 已提供启停确认。', true),
  action('role-permissions', '配置角色权限', '整体替换角色权限集合。', endpoints.role.configurePermissions, 'implemented', 'Roles 已提供配置权限抽屉。', true),
  action('role-assign', '分配用户角色', '给用户绑定角色。', endpoints.role.assignUser, 'implemented', 'Roles 已提供用户授权抽屉。'),
  action('role-revoke', '撤销用户角色', '移除用户角色绑定。', endpoints.role.revokeUser, 'implemented', 'Roles 已提供用户授权抽屉内撤销操作。', true),
]

export const mutationActionPlacementGroups: MutationActionPlacementGroup[] = [
  {
    key: 'data-ingestion-page',
    title: '采集编排操作',
    badge: 'TASK',
    color: 'geekblue',
    path: '/data-ingestion',
    pathLabel: 'Data Ingestion 采集编排',
    description: '任务定义保存、真实采集参数和手动触发，应在采集编排页完成。',
    actions: taskMutationActions,
  },
  {
    key: 'report-studio-page',
    title: '投资报告操作',
    badge: 'REPORT',
    color: 'cyan',
    path: '/report-studio',
    pathLabel: 'Report Studio 投资报告',
    description: '投资报告生成和质量门禁上下文，应在报告工作台完成。',
    actions: reportMutationActions,
  },
  {
    key: 'data-source-page',
    title: '数据源与质量操作',
    badge: 'SOURCE',
    color: 'blue',
    path: '/config-center/data-sources',
    pathLabel: 'AI 治理证据 / 数据源配置',
    description: '数据源资产、健康和质量快照写入，应在数据源配置页完成。',
    actions: dataSourceMutationActions,
  },
  {
    key: 'product-page',
    title: '产品与行情操作',
    badge: 'PRODUCT',
    color: 'green',
    path: '/config-center/products',
    pathLabel: 'Product Config 产品与行情配置',
    description: '产品创建、状态、风险画像、属性和行情点写入，应在产品配置页完成。',
    actions: productMutationActions,
  },
  {
    key: 'skill-page',
    title: 'AI Skill 操作',
    badge: 'SKILL',
    color: 'purple',
    path: '/config-center/ai-skills',
    pathLabel: 'AI Skill 工作台',
    description: 'Skill 保存、状态变更和评估策略，应在 AI Skill 工作台完成。',
    actions: aiSkillMutationActions,
  },
  {
    key: 'model-page',
    title: '模型配置操作',
    badge: 'MODEL',
    color: 'blue',
    path: '/config-center/models',
    pathLabel: 'Model Config 模型配置',
    description: '模型保存、状态变更和归档，应在模型配置页完成。',
    actions: modelMutationActions,
  },
  {
    key: 'model-skill-page',
    title: '模型 Skill 绑定操作',
    badge: 'BIND',
    color: 'geekblue',
    path: '/config-center/model-skills',
    pathLabel: 'Model Skill Binding 模型 Skill 绑定',
    description: '模型和 Skill 的业务场景绑定，应在模型 Skill 绑定页完成。',
    actions: modelSkillMutationActions,
  },
  {
    key: 'prompt-page',
    title: 'Prompt 配置操作',
    badge: 'PROMPT',
    color: 'magenta',
    path: '/config-center/prompts',
    pathLabel: 'Prompt Config 模板配置',
    description: 'Prompt 模板保存和生命周期，应在 Prompt 配置页完成。',
    actions: promptMutationActions,
  },
  {
    key: 'simulation-page',
    title: 'Mock 交易操作',
    badge: 'MOCK',
    color: 'volcano',
    path: '/simulation',
    pathLabel: 'Simulation 模拟交易',
    description: 'Mock 组合、订单、再平衡和估值刷新，应在模拟交易页完成。',
    actions: portfolioMutationActions,
  },
  {
    key: 'review-loop-page',
    title: '回测与反馈操作',
    badge: 'REVIEW',
    color: 'orange',
    path: '/review-loop',
    pathLabel: 'Review Loop 复盘闭环',
    description: '回测生成、反馈和 Prompt 评估，应在复盘闭环页完成。',
    actions: reviewLoopMutationActions,
  },
  {
    key: 'account-page',
    title: '本人账户操作',
    badge: 'ME',
    color: 'gold',
    path: '/account',
    pathLabel: 'Account 本人账户',
    description: '本人资料、密码和偏好，应在本人账户页完成。',
    actions: accountMutationActions,
  },
  {
    key: 'users-page',
    title: '用户管理操作',
    badge: 'USER',
    color: 'gold',
    path: '/users',
    pathLabel: 'Users 用户管理',
    description: '用户创建、状态、KYC、风险等级和删除，应在用户管理页完成。',
    actions: userMutationActions,
  },
  {
    key: 'roles-page',
    title: '角色权限操作',
    badge: 'ROLE',
    color: 'gold',
    path: '/roles',
    pathLabel: 'Roles 角色权限',
    description: '角色创建、状态、权限配置、分配和撤销，应在角色权限页完成。',
    actions: roleMutationActions,
  },
]

export const allMutationActions = mutationActionPlacementGroups.flatMap((group) => group.actions)
