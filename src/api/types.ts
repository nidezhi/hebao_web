export type UserStatus = 'DISABLED' | 'ACTIVE' | 'LOCKED'
export type KycStatus = 'UNVERIFIED' | 'VERIFIED' | 'REVIEWING' | 'REJECTED'
export type ProductType = 'STOCK' | 'FUND' | 'BOND' | 'ETF'
export type TradeStatus = 'DISABLED' | 'TRADABLE' | 'SUSPENDED'
export type QuoteStatus = 'INVALID' | 'VALID' | 'CORRECTED'
export type SortDirection = 'asc' | 'desc' | 'ASC' | 'DESC'
export type RoleType = 'SYSTEM' | 'CUSTOM'
export type TaskExecutionStatus = 'RUNNING' | 'SUCCEEDED' | 'FAILED'
export type SnapshotType = 'RETURN' | 'MOMENTUM' | 'HEAT' | 'NEWS_HEAT'
export type InvestmentAnalysisStatus = 'SUCCEEDED' | 'FAILED'
export type AiModelType = 'SIGNAL' | 'RISK' | 'RECOMMENDATION' | 'NLP' | 'ANALYSIS'
export type AiModelStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'

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
