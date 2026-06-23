export type UserStatus = 'DISABLED' | 'ACTIVE' | 'LOCKED'
export type KycStatus = 'UNVERIFIED' | 'VERIFIED' | 'REVIEWING' | 'REJECTED'
export type ProductType = 'STOCK' | 'FUND' | 'BOND' | 'ETF' | 'BANK_WMP' | 'GOLD' | 'REIT'
export type TradeStatus = 'DISABLED' | 'TRADABLE' | 'SUSPENDED'
export type QuoteStatus = 'INVALID' | 'VALID' | 'CORRECTED'
export type SortDirection = 'asc' | 'desc' | 'ASC' | 'DESC'
export type RoleType = 'SYSTEM' | 'CUSTOM'
export type TaskExecutionStatus = 'RUNNING' | 'SUCCEEDED' | 'FAILED'
export type SnapshotType = 'RETURN' | 'MOMENTUM' | 'HEAT' | 'NEWS_HEAT'
export type InvestmentAnalysisStatus = 'SUCCEEDED' | 'FAILED'
export type AiModelType = 'SIGNAL' | 'RISK' | 'RECOMMENDATION' | 'NLP' | 'ANALYSIS'
export type AiModelStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'
export type QualityLevel = 'HIGH' | 'MEDIUM' | 'LOW' | 'DEMO_ONLY' | string
export type PromptStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'RETIRED'
export type BacktestStatus = 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED'
export type RiskCheckResult = 'PASS' | 'REJECT' | 'WARN' | string
export type FeedbackAction = 'ADOPT' | 'REJECT' | 'WATCH' | 'IGNORE'

export interface PageResult<T> {
  items: T[]
  total: number
  page: number
  size: number
  totalPages: number
}

export interface User {
  bizId: string
  userNo: string
  username: string
  email?: string
  phone?: string
  nickname?: string
  avatarUrl?: string
  status: UserStatus
  kycStatus: KycStatus
  riskLevel?: number
  roles: string[]
  permissions: string[]
  registeredAt?: string
  lastLoginAt?: string
}

export interface UserQuery {
  keyword?: string
  status?: UserStatus
  kycStatus?: KycStatus
  riskLevel?: number
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface CreateUserPayload {
  username: string
  password: string
  email?: string
  phone?: string
  nickname?: string
  status?: UserStatus
}

export interface UserBizIdPayload {
  bizId: string
}

export interface UpdateContactPayload {
  email?: string
  phone?: string
}

export interface ProductAttribute {
  key: string
  valueType: string
  jsonValue: string
  effectiveDate?: string
  sourceCode?: string
}

export interface ProductInvestmentProfile {
  assetClass?: string
  riskSummary?: string
  volatilityLevel?: 'LOW' | 'MEDIUM' | 'HIGH' | string
  liquidityLevel?: 'LOW' | 'MEDIUM' | 'HIGH' | string
  maxDrawdown?: number
  suitableRiskLevel?: number
  mockTradable?: boolean
  minHoldingDays?: number
  tradingNotes?: string
  dataQualityScore?: number
}

export interface ProductThemeRelation {
  relationType: 'THEME' | 'INDUSTRY' | 'INDEX' | 'ASSET_CLASS' | string
  relationCode: string
  relationName?: string
  relationWeight?: number
  sourceCode?: string
  evidence?: string
}

export interface Product {
  bizId: string
  productNo: string
  productCode: string
  productName: string
  productType: ProductType
  marketCode: string
  currency: string
  tradeStatus: TradeStatus
  riskLevel?: number
  minInvestAmount: number
  amountStep: number
  quantityStep: number
  feeRate: number
  listingDate?: string
  delistingDate?: string
  description?: string
  attributes: ProductAttribute[]
  investmentProfile?: ProductInvestmentProfile
  themeRelations?: ProductThemeRelation[]
  createdAt?: string
  updatedAt?: string
}

export interface ProductQuery {
  keyword?: string
  productType?: ProductType
  tradeStatus?: TradeStatus
  riskLevel?: number
  currency?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface CreateProductPayload {
  productCode: string
  productName: string
  productType: ProductType
  marketCode: string
  currency: string
  riskLevel?: number
  minInvestAmount: number
  amountStep: number
  quantityStep: number
  feeRate: number
  listingDate?: string
  delistingDate?: string
  description?: string
}

export type UpdateProductPayload = Omit<
  CreateProductPayload,
  'productCode' | 'productType' | 'marketCode' | 'currency'
>

export interface MarketQuote {
  bizId: string
  productBizId: string
  sourceCode: string
  interval: string
  quoteTime: string
  openPrice?: number
  highPrice?: number
  lowPrice?: number
  closePrice: number
  previousClosePrice?: number
  volume?: number
  turnoverAmount?: number
  status: QuoteStatus
  receivedAt?: string
}

export type SaveQuotePayload = Omit<MarketQuote, 'bizId' | 'productBizId' | 'receivedAt'>

export interface QuoteQuery {
  productBizId?: string
  from: string
  to: string
  interval?: string
  sourceCode?: string
  limit?: number
}

export interface Preference {
  key: string
  valueType: string
  value: unknown
  updatedAt?: string
}

export interface Role {
  roleCode: string
  roleName: string
  description?: string
  roleType: RoleType
  enabled: boolean
  permissions: string[]
  createdAt?: string
  updatedAt?: string
}

export interface CreateRolePayload {
  roleCode: string
  roleName: string
  description?: string
}

export interface UpdateRolePayload {
  roleCode: string
  roleName: string
  description?: string
}

export interface ConfigureRolePermissionsPayload {
  roleCode: string
  permissions: string[]
}

export interface RoleStatusPayload {
  roleCode: string
  enabled: boolean
}

export interface UserRolePayload {
  userBizId: string
  roleCode: string
  effectiveTo?: string
}

export interface NewsArticle {
  bizId: string
  externalId?: string
  articleType: string
  title: string
  summary?: string
  content?: string
  sourceCode?: string
  sourceUrl?: string
  languageCode?: string
  publishTime?: string
  collectedAt?: string
  createdAt?: string
}

export interface NewsArticleQuery {
  keyword?: string
  articleType?: string
  sourceCode?: string
  languageCode?: string
  publishFrom?: string
  publishTo?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export type ArticleRelationType = 'KEYWORD_MATCH' | 'MANUAL' | 'MODEL_EXTRACTED'

export interface ArticleRelation {
  bizId: string
  articleBizId: string
  themeCode: string
  themeName?: string
  productCode?: string
  relationType: ArticleRelationType
  matchedKeywords?: string[]
  sourceQualityScore?: number
  relationScore?: number
  evidence?: string
  createdAt?: string
}

export interface ArticleRelationQuery {
  articleBizId?: string
  themeCode?: string
  productCode?: string
  relationType?: ArticleRelationType
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface InvestmentTaskDefinition {
  code: string
  type: string
  cron: string
  zone: string
  enabled: boolean
  parameters: Record<string, unknown>
  description?: string
}

export interface ScheduledTaskExecution {
  bizId: string
  taskCode: string
  taskType: string
  triggerSource: string
  status: TaskExecutionStatus
  eventId?: string
  resultSummary?: string
  failureReason?: string
  startedAt?: string
  completedAt?: string
  createdAt?: string
}

export interface TaskExecutionQuery {
  taskCode?: string
  taskType?: string
  status?: TaskExecutionStatus
  startedFrom?: string
  startedTo?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface InvestmentThemeSnapshot {
  bizId: string
  taskCode: string
  snapshotType: SnapshotType
  themeCode: string
  themeName: string
  marketScope?: string
  windowMinutes?: number
  sampleCount?: number
  returnRate?: number
  momentumScore?: number
  heatScore?: number
  topProductBizId?: string
  metrics?: string
  snapshotTime?: string
  createdAt?: string
}

export interface InvestmentThemeSnapshotQuery {
  taskCode?: string
  snapshotType?: SnapshotType
  themeCode?: string
  marketScope?: string
  snapshotFrom?: string
  snapshotTo?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface TriggerInvestmentTaskPayload {
  taskCode: string
  parameters?: Record<string, unknown>
}

export interface InvestmentTaskTriggerResult {
  eventId: string
  taskCode: string
  taskType: string
  triggerSource: string
  triggeredAt: string
}

export interface SaveInvestmentTaskDefinitionPayload {
  code: string
  type: string
  cron: string
  zone: string
  enabled: boolean
  parameters?: Record<string, unknown>
  description?: string
}

export interface GenerateInvestmentAnalysisPayload {
  providerCode?: string
  modelCode?: string
  marketScope?: string
  themeCode?: string
  lookbackDays?: number
  initialCapital?: number
}

export interface InvestmentAnalysisReport {
  bizId: string
  requestId: string
  providerCode: string
  modelCode: string
  marketScope: string
  themeCode?: string
  themeName?: string
  status: InvestmentAnalysisStatus
  investmentSummary?: string
  trend?: string
  investmentPlan?: string
  simulatedReturn?: string
  chartPayload?: string
  promptSnapshot?: string
  confidenceLevel?: string
  qualityScore?: number
  dataQualityGate?: {
    passed?: boolean
    qualityLevel?: QualityLevel
    displayMessage?: string
    missingReasons?: string[]
  }
  failureReason?: string
  generatedAt?: string
  createdAt?: string
}

export interface InvestmentAnalysisReportQuery {
  marketScope?: string
  themeCode?: string
  providerCode?: string
  status?: InvestmentAnalysisStatus
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface AiModel {
  bizId: string
  modelCode: string
  modelVersion: string
  modelName: string
  modelType: AiModelType
  provider?: string
  artifactUri?: string
  modelConfig?: string
  metrics?: string
  status: AiModelStatus
  activatedAt?: string
  retiredAt?: string
  createdAt?: string
  updatedAt?: string
}

export interface AiModelQuery {
  modelCode?: string
  modelType?: AiModelType
  provider?: string
  status?: AiModelStatus
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface SaveAiModelPayload {
  modelCode: string
  modelVersion: string
  modelName: string
  modelType: AiModelType
  provider?: string
  artifactUri?: string
  modelConfig?: string
  metrics?: string
  status?: AiModelStatus
}

export interface AiModelBizIdPayload {
  bizId: string
}

export interface AiModelStatusPayload extends AiModelBizIdPayload {
  status: AiModelStatus
}

export interface DataQualitySnapshot {
  bizId: string
  sourceCode: string
  dataType: string
  qualityScore?: number
  missingRate?: number
  duplicateRate?: number
  freshnessScore?: number
  sampleCount?: number
  snapshotTime?: string
  detail?: string
}

export interface DataSourceHealth {
  sourceCode: string
  lastSuccessAt?: string
  lastFailureAt?: string
  successRate?: number
  avgLatencyMs?: number
  failureReason?: string
  sampleCount?: number
  updatedAt?: string
}

export interface DataSource {
  bizId: string
  sourceCode: string
  sourceName: string
  sourceType: string
  trustLevel: string
  baseUrl?: string
  enabled: boolean
  fetchFrequency?: string
  owner?: string
  description?: string
  health?: DataSourceHealth
  latestQuality?: DataQualitySnapshot
  qualityLevel?: QualityLevel
  displayMessage?: string
  createdAt?: string
  updatedAt?: string
}

export interface DataSourceQuery {
  keyword?: string
  sourceType?: string
  trustLevel?: string
  enabled?: boolean
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface DataQualitySnapshotQuery {
  sourceCode: string
  dataType?: string
  limit?: number
}

export interface RiskCheck {
  bizId: string
  userBizId?: string
  targetType?: string
  targetBizId?: string
  checkResult?: RiskCheckResult
  riskLevel?: string
  reasonCode?: string
  reasonMessage?: string
  detail?: string
  createdAt?: string
}

export interface RiskCheckQuery {
  targetType?: string
  targetBizId?: string
  userBizId?: string
  checkResult?: string
  riskLevel?: string
  reasonCode?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface AiPromptVariable {
  bizId?: string
  promptBizId?: string
  variableName: string
  sourcePath?: string
  required?: boolean
  description?: string
  createdAt?: string
}

export interface AiPromptOutputSchema {
  bizId?: string
  promptBizId?: string
  schemaVersion: string
  schemaJson: string
  createdAt?: string
}

export interface AiPromptTemplate {
  bizId: string
  promptCode: string
  promptVersion: string
  scenario: string
  templateName: string
  templateContent: string
  status: PromptStatus
  description?: string
  variables: AiPromptVariable[]
  outputSchemas: AiPromptOutputSchema[]
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export interface AiPromptQuery {
  promptCode?: string
  scenario?: string
  status?: PromptStatus
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface AiPromptPreviewPayload {
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  variables?: Record<string, unknown>
}

export interface AiPromptPreview {
  promptBizId: string
  promptCode: string
  promptVersion: string
  renderedPrompt: string
  missingVariables?: string[]
}

export interface PortfolioValuation {
  valuationTime?: string
  baseCurrency?: string
  totalAsset?: number
  cashBalance?: number
  positionValue?: number
  totalCost?: number
  unrealizedProfit?: number
  realizedProfit?: number
  totalReturnRate?: number
  sourceCode?: string
}

export interface MockPosition {
  bizId: string
  productBizId: string
  positionSide?: string
  quantity?: number
  availableQuantity?: number
  averageCost?: number
  costAmount?: number
  realizedProfit?: number
  lastTradeAt?: string
}

export interface MockPortfolio {
  bizId: string
  portfolioNo?: string
  ownerUserBizId?: string
  portfolioName: string
  portfolioType?: string
  baseCurrency?: string
  status?: number
  latestValuation?: PortfolioValuation
  positions?: MockPosition[]
  createdAt?: string
  updatedAt?: string
}

export interface MockPortfolioQuery {
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface PortfolioPerformancePoint {
  valuationTime?: string
  totalAsset?: number
  totalReturnRate?: number
  maxDrawdown?: number
}

export interface BacktestResult {
  bizId: string
  strategyCode?: string
  strategyVersion?: string
  portfolioBizId?: string
  startDate?: string
  endDate?: string
  parameters?: string
  metrics?: string
  status?: BacktestStatus
  createdAt?: string
  updatedAt?: string
}

export interface BacktestQuery {
  strategyCode?: string
  strategyVersion?: string
  status?: BacktestStatus
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface InvestmentFeedback {
  bizId: string
  userBizId?: string
  targetType?: string
  targetBizId?: string
  reportBizId?: string
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  backtestBizId?: string
  feedbackAction?: FeedbackAction
  reasonCode?: string
  commentText?: string
  metadata?: string
  createdAt?: string
}

export interface InvestmentFeedbackQuery {
  targetType?: string
  targetBizId?: string
  reportBizId?: string
  promptCode?: string
  promptVersion?: string
  backtestBizId?: string
  feedbackAction?: FeedbackAction
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface AiPromptEvaluation {
  bizId: string
  promptBizId?: string
  promptCode: string
  promptVersion: string
  scenario?: string
  score?: number
  reviewStatus?: string
  backtestBizId?: string
  feedbackBizId?: string
  metrics?: string
  createdAt?: string
}

export interface AiPromptEvaluationQuery {
  promptCode?: string
  promptVersion?: string
  scenario?: string
  reviewStatus?: string
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}
