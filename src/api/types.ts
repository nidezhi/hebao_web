export type UserStatus = 'DISABLED' | 'ACTIVE' | 'LOCKED'
export type KycStatus = 'UNVERIFIED' | 'VERIFIED' | 'REVIEWING' | 'REJECTED'
export type ProductType = 'STOCK' | 'FUND' | 'BOND' | 'ETF'
export type TradeStatus = 'DISABLED' | 'TRADABLE' | 'SUSPENDED'
export type QuoteStatus = 'INVALID' | 'VALID' | 'CORRECTED'
export type SortDirection = 'ASC' | 'DESC'

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
