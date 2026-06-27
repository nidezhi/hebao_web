import type { ApiMutationAction } from '@/shared/components/business/ApiMutationWorkbench.vue'
import { endpoints } from '@/shared/api/endpoints'
import { register } from '@/entities/auth/api'
import {
  changeMyPassword,
  createUser,
  deleteMyPreference,
  deleteUser,
  setMyPreference,
  updateMe,
  updateUser,
  updateUserKycStatus,
  updateUserRiskLevel,
  updateUserStatus,
} from '@/entities/user/api'
import {
  assignUserRole,
  configureRolePermissions,
  createRole,
  revokeUserRole,
  updateRole,
  updateRoleStatus,
} from '@/entities/role/api'
import {
  saveDataQualitySnapshot,
  saveDataSource,
  saveDataSourceHealth,
} from '@/entities/data-source/api'
import {
  saveTaskDefinition,
  triggerInvestmentTask,
} from '@/entities/task/api'
import {
  createProduct,
  deleteProduct,
  saveProductAttribute,
  saveProductInvestmentProfile,
  saveProductQuote,
  updateProduct,
  updateProductStatus,
} from '@/entities/product/api'
import { generateInvestmentReport } from '@/entities/report/api'
import { saveAiPrompt, updateAiPromptStatus } from '@/entities/prompt/api'
import { saveAiSkill, updateAiSkillStatus } from '@/entities/ai-skill/api'
import {
  archiveAiModel,
  saveAiModel,
  updateAiModelStatus,
} from '@/entities/ai-model/api'
import { saveAiModelSkillBinding } from '@/entities/ai-model-skill/api'
import {
  buyMockOrder,
  buyMockOrderFromReport,
  cancelMockOrder,
  createMockPortfolio,
  executeMockRebalance,
  refreshPortfolioValuation,
  sellMockOrder,
} from '@/entities/portfolio/api'
import { generateBacktestFromPortfolio, saveBacktest } from '@/entities/backtest/api'
import { saveInvestmentFeedback, savePromptEvaluation } from '@/entities/feedback/api'
import type { PromptStatus } from '@/entities/prompt/model'
import type { AiSkillStatus } from '@/entities/ai-skill/model'

const textOf = (payload: Record<string, unknown>, key: string) => String(payload[key] || '')
const numberOf = (payload: Record<string, unknown>, key: string) => Number(payload[key] || 0)

export const accountMutationActions: ApiMutationAction[] = [
  {
    id: 'auth-register',
    title: '注册用户',
    description: '创建普通登录账号。',
    endpoint: endpoints.auth.register,
    defaultPayload: { username: 'new_user', password: 'ChangeMe@123', email: '', phone: '', nickname: '新用户' },
    execute: (payload) => register({
      username: textOf(payload, 'username'),
      password: textOf(payload, 'password'),
      email: textOf(payload, 'email') || undefined,
      phone: textOf(payload, 'phone') || undefined,
      nickname: textOf(payload, 'nickname') || undefined,
    }),
  },
  {
    id: 'me-update',
    title: '更新本人资料',
    description: '更新当前登录用户邮箱、手机号、昵称。',
    endpoint: endpoints.user.updateMe,
    defaultPayload: { email: '', phone: '', nickname: '' },
    execute: (payload) => updateMe(payload),
  },
  {
    id: 'me-password',
    title: '修改本人密码',
    description: '修改当前登录用户密码。',
    endpoint: endpoints.user.changeMyPassword,
    danger: true,
    defaultPayload: { currentPassword: 'Demo@123456', newPassword: 'New@123456' },
    execute: (payload) => changeMyPassword({
      currentPassword: textOf(payload, 'currentPassword'),
      newPassword: textOf(payload, 'newPassword'),
    }),
  },
  {
    id: 'preference-set',
    title: '保存本人偏好',
    description: '新增或更新当前用户偏好键。',
    endpoint: endpoints.user.setPreference,
    defaultPayload: { key: 'dashboard.defaultRange', value: '7d' },
    execute: (payload) => setMyPreference({ key: textOf(payload, 'key'), value: payload.value }),
  },
  {
    id: 'preference-delete',
    title: '删除本人偏好',
    description: '逻辑删除当前用户指定偏好键。',
    endpoint: endpoints.user.deletePreference,
    danger: true,
    defaultPayload: { key: 'dashboard.defaultRange' },
    execute: (payload) => deleteMyPreference(textOf(payload, 'key')),
  },
]

export const userMutationActions: ApiMutationAction[] = [
  {
    id: 'user-create',
    title: '创建用户',
    description: '管理端创建用户。',
    endpoint: endpoints.user.create,
    defaultPayload: { username: 'ops_user', password: 'ChangeMe@123', email: '', phone: '', nickname: '运营用户', status: 'ACTIVE' },
    execute: (payload) => createUser({
      username: textOf(payload, 'username'),
      password: textOf(payload, 'password'),
      email: textOf(payload, 'email') || undefined,
      phone: textOf(payload, 'phone') || undefined,
      nickname: textOf(payload, 'nickname') || undefined,
      status: textOf(payload, 'status') || undefined,
    }),
  },
  {
    id: 'user-update',
    title: '更新用户资料',
    description: '管理端更新指定用户资料。',
    endpoint: endpoints.user.update,
    defaultPayload: { bizId: '', email: '', phone: '', nickname: '' },
    execute: (payload) => updateUser({ ...payload, bizId: textOf(payload, 'bizId') }),
  },
  {
    id: 'user-status',
    title: '变更用户状态',
    description: '启用、禁用或锁定用户。',
    endpoint: endpoints.user.status,
    danger: true,
    defaultPayload: { bizId: '', status: 'ACTIVE' },
    execute: (payload) => updateUserStatus({ bizId: textOf(payload, 'bizId'), status: textOf(payload, 'status') }),
  },
  {
    id: 'user-kyc',
    title: '变更 KYC 状态',
    description: '管理端修改用户 KYC 状态。',
    endpoint: endpoints.user.kycStatus,
    danger: true,
    defaultPayload: { bizId: '', kycStatus: 'VERIFIED' },
    execute: (payload) => updateUserKycStatus({ bizId: textOf(payload, 'bizId'), kycStatus: textOf(payload, 'kycStatus') }),
  },
  {
    id: 'user-risk',
    title: '变更用户风险等级',
    description: '管理端设置用户风险等级。',
    endpoint: endpoints.user.riskLevel,
    danger: true,
    defaultPayload: { bizId: '', riskLevel: 3 },
    execute: (payload) => updateUserRiskLevel({ bizId: textOf(payload, 'bizId'), riskLevel: numberOf(payload, 'riskLevel') }),
  },
  {
    id: 'user-delete',
    title: '删除用户',
    description: '逻辑删除指定用户。',
    endpoint: endpoints.user.delete,
    danger: true,
    defaultPayload: { bizId: '' },
    execute: (payload) => deleteUser(textOf(payload, 'bizId')),
  },
]

export const roleMutationActions: ApiMutationAction[] = [
  {
    id: 'role-create',
    title: '创建角色',
    description: '新增角色。',
    endpoint: endpoints.role.create,
    defaultPayload: { roleCode: 'OPS', roleName: '运营角色', description: '' },
    execute: (payload) => createRole({
      roleCode: textOf(payload, 'roleCode'),
      roleName: textOf(payload, 'roleName'),
      description: textOf(payload, 'description') || undefined,
    }),
  },
  {
    id: 'role-update',
    title: '更新角色',
    description: '更新角色名称或描述。',
    endpoint: endpoints.role.update,
    defaultPayload: { roleCode: 'OPS', roleName: '运营角色', description: '' },
    execute: updateRole,
  },
  {
    id: 'role-status',
    title: '变更角色状态',
    description: '启用或停用角色。',
    endpoint: endpoints.role.status,
    danger: true,
    defaultPayload: { roleCode: 'OPS', enabled: true },
    execute: updateRoleStatus,
  },
  {
    id: 'role-permissions',
    title: '配置角色权限',
    description: '整体替换角色权限集合。',
    endpoint: endpoints.role.configurePermissions,
    danger: true,
    defaultPayload: { roleCode: 'OPS', permissions: ['investment:read'] },
    execute: (payload) => configureRolePermissions({
      roleCode: textOf(payload, 'roleCode'),
      permissions: Array.isArray(payload.permissions) ? payload.permissions.map(String) : [],
    }),
  },
  {
    id: 'role-assign',
    title: '分配用户角色',
    description: '给用户绑定角色。',
    endpoint: endpoints.role.assignUser,
    defaultPayload: { userBizId: '', roleCode: 'OPS' },
    execute: assignUserRole,
  },
  {
    id: 'role-revoke',
    title: '撤销用户角色',
    description: '移除用户角色绑定。',
    endpoint: endpoints.role.revokeUser,
    danger: true,
    defaultPayload: { userBizId: '', roleCode: 'OPS' },
    execute: revokeUserRole,
  },
]

export const dataSourceMutationActions: ApiMutationAction[] = [
  {
    id: 'data-source-save',
    title: '保存数据源',
    description: '新增或更新数据源资产。',
    endpoint: endpoints.dataSource.save,
    defaultPayload: { sourceCode: 'CNINFO', sourceName: '巨潮资讯', sourceType: 'ANNOUNCEMENT', trustLevel: 'L2', baseUrl: '', enabled: true, fetchFrequency: '0 */20 * * * *', owner: 'research-ops', description: '' },
    execute: saveDataSource,
  },
  {
    id: 'data-source-health-save',
    title: '保存数据源健康',
    description: '写入数据源健康状态。',
    endpoint: endpoints.dataSource.saveHealth,
    defaultPayload: { sourceCode: 'CNINFO', successRate: 0.98, sampleCount: 100, failureReason: '' },
    execute: saveDataSourceHealth,
  },
  {
    id: 'quality-save',
    title: '保存质量快照',
    description: '写入数据质量快照。',
    endpoint: endpoints.dataSource.saveQuality,
    defaultPayload: { sourceCode: 'CNINFO', dataType: 'ANNOUNCEMENT', qualityScore: 0.86, missingRate: 0.04, duplicateRate: 0.01, freshnessScore: 0.92, sampleCount: 100 },
    execute: saveDataQualitySnapshot,
  },
]

export const taskMutationActions: ApiMutationAction[] = [
  {
    id: 'task-save',
    title: '保存任务定义',
    description: '新增或更新投资任务定义。',
    endpoint: endpoints.task.saveDefinition,
    defaultPayload: { code: 'auto-investment-closed-loop-orchestration', type: 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION', cron: '0 40 */2 * * *', zone: 'Asia/Shanghai', enabled: true, parameters: { allowAutoMockTrade: 'true', allowRealTrade: 'false' }, description: '自动投资闭环总编排任务' },
    execute: saveTaskDefinition,
  },
  {
    id: 'task-trigger',
    title: '手动触发任务',
    description: '触发投资任务执行。',
    endpoint: endpoints.task.trigger,
    danger: true,
    defaultPayload: { taskCode: 'auto-investment-closed-loop-orchestration', parameters: { allowAutoMockTrade: 'true' } },
    execute: (payload) => triggerInvestmentTask({ taskCode: textOf(payload, 'taskCode'), parameters: payload.parameters as Record<string, unknown> | undefined }),
  },
]

export const productMutationActions: ApiMutationAction[] = [
  {
    id: 'product-create',
    title: '创建产品',
    description: '管理端创建产品。',
    endpoint: endpoints.product.create,
    defaultPayload: { productCode: '', productName: '', productType: 'ETF', marketCode: 'CN_MAINLAND', currency: 'CNY', tradeStatus: 'TRADABLE', riskLevel: 3 },
    execute: createProduct,
  },
  {
    id: 'product-update',
    title: '更新产品',
    description: '管理端更新产品基础信息。',
    endpoint: endpoints.product.update,
    defaultPayload: { bizId: '', productName: '', tradeStatus: 'TRADABLE', riskLevel: 3 },
    execute: updateProduct,
  },
  {
    id: 'product-status',
    title: '变更产品交易状态',
    description: '变更产品交易生命周期。',
    endpoint: endpoints.product.status,
    danger: true,
    defaultPayload: { bizId: '', status: 'TRADABLE' },
    execute: updateProductStatus,
  },
  {
    id: 'product-attribute-save',
    title: '保存产品属性',
    description: '保存产品扩展属性。',
    endpoint: endpoints.product.saveAttribute,
    defaultPayload: { productBizId: '', attributeCode: 'riskNote', attributeValue: '' },
    execute: saveProductAttribute,
  },
  {
    id: 'product-profile-save',
    title: '保存产品投资画像',
    description: '保存风险、波动、流动性、Mock 约束和主题关系。',
    endpoint: endpoints.product.saveInvestmentProfile,
    defaultPayload: { productBizId: '', assetClass: 'GOLD', volatilityLevel: 'MEDIUM', liquidityLevel: 'HIGH', mockTradable: true, suitableRiskLevel: 3, themeRelations: [] },
    execute: saveProductInvestmentProfile,
  },
  {
    id: 'quote-save',
    title: '保存行情点',
    description: '写入或修正产品行情。',
    endpoint: endpoints.marketQuote.save,
    defaultPayload: { productBizId: '', quoteTime: '', quoteInterval: '1D', nav: 1, sourceCode: 'CHINA_WEALTH', status: 'VALID' },
    execute: saveProductQuote,
  },
  {
    id: 'product-delete',
    title: '删除产品',
    description: '逻辑删除产品。',
    endpoint: endpoints.product.delete,
    danger: true,
    defaultPayload: { bizId: '' },
    execute: (payload) => deleteProduct(textOf(payload, 'bizId')),
  },
]

export const promptMutationActions: ApiMutationAction[] = [
  {
    id: 'prompt-save',
    title: '保存 Prompt 模板',
    description: '新增或更新 Prompt 模板版本、变量和输出 Schema。',
    endpoint: endpoints.prompt.save,
    defaultPayload: { promptCode: 'investment-plan-from-report', promptVersion: 'v1', scenario: 'INVESTMENT_PLAN', templateName: '投资方案 Prompt', templateContent: '请基于 ${investmentReport} 输出结构化方案。', status: 'DRAFT', variables: [], outputSchemas: [] },
    execute: saveAiPrompt,
  },
  {
    id: 'prompt-status',
    title: '变更 Prompt 状态',
    description: 'DRAFT / VALIDATING / ACTIVE / RETIRED。',
    endpoint: endpoints.prompt.status,
    danger: true,
    defaultPayload: { bizId: '', status: 'VALIDATING' },
    execute: (payload) => updateAiPromptStatus(textOf(payload, 'bizId'), textOf(payload, 'status') as PromptStatus),
  },
]

export const modelMutationActions: ApiMutationAction[] = [
  {
    id: 'model-save',
    title: '保存 AI 模型配置',
    description: '新增或更新 AI 模型配置、指标和状态。',
    endpoint: endpoints.aiModel.save,
    defaultPayload: { modelCode: 'openai-compatible-analysis', modelVersion: 'candidate-v1', modelName: '候选模型', modelType: 'INVESTMENT_ANALYSIS', provider: 'OPENAI_COMPATIBLE', artifactUri: '', modelConfig: '{}', metrics: '{}', status: 'DRAFT' },
    execute: saveAiModel,
  },
  {
    id: 'model-status',
    title: '变更 AI 模型状态',
    description: 'DRAFT / VALIDATING / ACTIVE / INACTIVE / ARCHIVED。',
    endpoint: endpoints.aiModel.status,
    danger: true,
    defaultPayload: { bizId: '', status: 'VALIDATING' },
    execute: (payload) => updateAiModelStatus({ bizId: textOf(payload, 'bizId'), status: textOf(payload, 'status') }),
  },
  {
    id: 'model-archive',
    title: '归档 AI 模型',
    description: '逻辑删除模型，将状态置为 ARCHIVED。',
    endpoint: endpoints.aiModel.archive,
    danger: true,
    defaultPayload: { bizId: '' },
    execute: (payload) => archiveAiModel(textOf(payload, 'bizId')),
  },
]

export const aiSkillMutationActions: ApiMutationAction[] = [
  {
    id: 'ai-skill-save',
    title: '保存 AI Skill',
    description: '新增或更新 Skill 版本、指令、Schema 和评估策略。',
    endpoint: endpoints.aiSkill.save,
    defaultPayload: {
      skillCode: 'DATA_SOURCE_DISCOVERY_CORE',
      skillVersion: 'v1',
      skillName: '数据源发现 Skill',
      skillType: 'DATA_SOURCE_DISCOVERY',
      status: 'DRAFT',
      instructionContent: '请按业务场景输出结构化候选数据源。',
      inputSchema: '{}',
      outputSchema: '{}',
      evaluationPolicy: '{}',
      description: '',
    },
    execute: (payload) => saveAiSkill({
      skillCode: textOf(payload, 'skillCode'),
      skillVersion: textOf(payload, 'skillVersion'),
      skillName: textOf(payload, 'skillName'),
      skillType: textOf(payload, 'skillType'),
      status: textOf(payload, 'status') as AiSkillStatus,
      instructionContent: textOf(payload, 'instructionContent'),
      inputSchema: textOf(payload, 'inputSchema') || undefined,
      outputSchema: textOf(payload, 'outputSchema') || undefined,
      evaluationPolicy: textOf(payload, 'evaluationPolicy') || undefined,
      description: textOf(payload, 'description') || undefined,
    }),
  },
  {
    id: 'ai-skill-status',
    title: '变更 AI Skill 状态',
    description: 'DRAFT / VALIDATING / ACTIVE / RETIRED / ARCHIVED。',
    endpoint: endpoints.aiSkill.status,
    danger: true,
    defaultPayload: { bizId: '', status: 'VALIDATING' },
    execute: (payload) => updateAiSkillStatus({ bizId: textOf(payload, 'bizId'), status: textOf(payload, 'status') as AiSkillStatus }),
  },
  {
    id: 'model-skill-save',
    title: '保存模型 Skill 绑定',
    description: '把模型实例绑定到业务 Skill 场景和版本。',
    endpoint: endpoints.aiModelSkill.save,
    danger: true,
    defaultPayload: {
      modelBizId: '',
      skillBizId: '',
      scenarioCode: 'DATA_SOURCE_DISCOVERY',
      priority: 10,
      enabled: true,
      config: '{"candidateLimit":4,"collectionDirection":"MULTI_SOURCE","autoRegisterCandidates":true,"autoEnableCandidates":false}',
      description: '',
    },
    execute: (payload) => saveAiModelSkillBinding({
      modelBizId: textOf(payload, 'modelBizId'),
      skillBizId: textOf(payload, 'skillBizId'),
      scenarioCode: textOf(payload, 'scenarioCode'),
      priority: numberOf(payload, 'priority'),
      enabled: Boolean(payload.enabled),
      config: textOf(payload, 'config') || undefined,
      description: textOf(payload, 'description') || undefined,
    }),
  },
]

export const operationMutationActions: ApiMutationAction[] = [
  {
    id: 'report-generate',
    title: '生成投资报告',
    description: '手动触发投资报告生成。',
    endpoint: endpoints.report.generate,
    danger: true,
    defaultPayload: { providerCode: 'OPENAI_COMPATIBLE', modelCode: 'openai-compatible-analysis', marketScope: 'CN_MAINLAND', themeCode: 'GOLD', lookbackDays: 30, initialCapital: 100000 },
    execute: generateInvestmentReport,
  },
  {
    id: 'portfolio-create',
    title: '创建 Mock 组合',
    description: '创建模拟交易组合。',
    endpoint: endpoints.portfolio.create,
    defaultPayload: { portfolioName: '我的模拟组合', baseCurrency: 'CNY', initialCash: 100000 },
    execute: createMockPortfolio,
  },
  {
    id: 'portfolio-buy',
    title: 'Mock 买入',
    description: '提交模拟买入订单。',
    endpoint: endpoints.portfolio.buy,
    danger: true,
    defaultPayload: { portfolioBizId: '', productBizId: '', amount: 1000, idempotencyKey: 'BUY-CHANGE-ME' },
    execute: buyMockOrder,
  },
  {
    id: 'portfolio-buy-report',
    title: '报告转 Mock 买入',
    description: '从报告建议生成模拟买入。',
    endpoint: endpoints.portfolio.buyFromReport,
    danger: true,
    defaultPayload: { portfolioBizId: '', reportBizId: '', productBizId: '', idempotencyKey: 'REPORT-CHANGE-ME' },
    execute: buyMockOrderFromReport,
  },
  {
    id: 'portfolio-sell',
    title: 'Mock 卖出',
    description: '提交模拟卖出订单。',
    endpoint: endpoints.portfolio.sell,
    danger: true,
    defaultPayload: { portfolioBizId: '', productBizId: '', quantity: 1, idempotencyKey: 'SELL-CHANGE-ME' },
    execute: sellMockOrder,
  },
  {
    id: 'portfolio-cancel-order',
    title: '撤销 Mock 订单',
    description: '撤销未终态模拟订单。',
    endpoint: endpoints.portfolio.cancelOrder,
    danger: true,
    defaultPayload: { orderBizId: '' },
    execute: cancelMockOrder,
  },
  {
    id: 'portfolio-rebalance',
    title: '执行组合再平衡',
    description: '按目标权重执行模拟再平衡。',
    endpoint: endpoints.portfolio.rebalance,
    danger: true,
    defaultPayload: { portfolioBizId: '', targets: [], minTradeAmount: 100, idempotencyKey: 'REBALANCE-CHANGE-ME' },
    execute: executeMockRebalance,
  },
  {
    id: 'portfolio-refresh-valuation',
    title: '刷新组合估值',
    description: '刷新 Mock 组合估值。',
    endpoint: endpoints.portfolio.refreshValuation,
    defaultPayload: { portfolioBizId: '' },
    execute: refreshPortfolioValuation,
  },
  {
    id: 'backtest-save',
    title: '保存回测结果',
    description: '保存或更新回测记录。',
    endpoint: endpoints.backtest.save,
    defaultPayload: { strategyCode: 'AUTO_CLOSED_LOOP_MOCK', strategyVersion: 'manual-v1', portfolioBizId: '', parameters: '{}', metrics: '{}', status: 'PENDING' },
    execute: saveBacktest,
  },
  {
    id: 'backtest-generate',
    title: '从组合生成回测',
    description: '基于 Mock 组合生成回测。',
    endpoint: endpoints.backtest.generateFromPortfolio,
    danger: true,
    defaultPayload: { portfolioBizId: '', strategyCode: 'AUTO_CLOSED_LOOP_MOCK', strategyVersion: 'manual-v1', benchmarkCode: 'CSI300', parameters: '{"source":"FRONTEND"}', limit: 100 },
    execute: generateBacktestFromPortfolio,
  },
  {
    id: 'feedback-save',
    title: '保存投资反馈',
    description: '保存采纳、拒绝、观察或忽略反馈。',
    endpoint: endpoints.feedback.save,
    defaultPayload: { targetType: 'MOCK_PORTFOLIO', targetBizId: '', feedbackAction: 'WATCH', reasonCode: 'MANUAL_REVIEW', commentText: '', metadata: '{}' },
    execute: saveInvestmentFeedback,
  },
  {
    id: 'prompt-evaluation-save',
    title: '保存 Prompt 评估',
    description: '保存 Prompt 评分和复核结果。',
    endpoint: endpoints.promptEvaluation.save,
    defaultPayload: { promptCode: 'investment-plan-from-report', promptVersion: 'v1', scenario: 'MANUAL_REVIEW', score: 0.8, reviewStatus: 'PENDING', metrics: '{}' },
    execute: savePromptEvaluation,
  },
]

export interface MutationActionGroup {
  key: string
  title: string
  badge: string
  color: string
  description: string
  actions: ApiMutationAction[]
}

export const mutationActionGroups: MutationActionGroup[] = [
  {
    key: 'closed-loop',
    title: '闭环 / 任务 / 报告',
    badge: 'LOOP',
    color: 'cyan',
    description: '真实采集、任务触发、报告生成和闭环总编排动作。',
    actions: [
      ...taskMutationActions,
      operationMutationActions.find((action) => action.id === 'report-generate')!,
    ],
  },
  {
    key: 'data-assets',
    title: '数据源 / 产品 / 行情',
    badge: 'DATA',
    color: 'green',
    description: '数据源、质量快照、产品资产、风险画像和行情写入。',
    actions: [
      ...dataSourceMutationActions,
      ...productMutationActions,
    ],
  },
  {
    key: 'ai-capability',
    title: 'AI 能力 / 模型绑定',
    badge: 'AI',
    color: 'purple',
    description: 'Skill、模型、模型 Skill 绑定和 Prompt 生命周期。',
    actions: [
      ...aiSkillMutationActions,
      ...modelMutationActions,
      ...promptMutationActions,
    ],
  },
  {
    key: 'mock-loop',
    title: 'Mock / 回测 / 反馈',
    badge: 'MOCK',
    color: 'volcano',
    description: 'Mock 组合、模拟订单、组合估值、回测和反馈复核。',
    actions: operationMutationActions.filter((action) => action.id !== 'report-generate'),
  },
  {
    key: 'identity-governance',
    title: '用户 / 角色 / 偏好',
    badge: 'IAM',
    color: 'gold',
    description: '账户资料、用户状态、KYC、风险等级和角色权限。',
    actions: [
      ...accountMutationActions,
      ...userMutationActions,
      ...roleMutationActions,
    ],
  },
]

export const allMutationActions = mutationActionGroups.flatMap((group) => group.actions)
