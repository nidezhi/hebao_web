import type { PageQuery } from '@/shared/api/types'

export type ProductType = 'STOCK' | 'FUND' | 'BOND' | 'ETF' | 'BANK_WMP' | 'GOLD' | 'REIT' | string
export type TradeStatus = 'DISABLED' | 'TRADABLE' | 'SUSPENDED' | string

export interface ProductInvestmentProfileDto {
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

export interface ProductThemeRelationDto {
  relationType: 'THEME' | 'INDUSTRY' | 'INDEX' | 'ASSET_CLASS' | string
  relationCode: string
  relationName?: string
  relationWeight?: number
  sourceCode?: string
  evidence?: string
}

export interface ProductDto {
  bizId: string
  productNo: string
  productCode: string
  productName: string
  productType: ProductType
  marketCode: string
  currency: string
  tradeStatus: TradeStatus
  riskLevel?: number
  minInvestAmount?: number
  dataQualityScore?: number
  latestNav?: number
  latestQuoteTime?: string
  sourceCode?: string
  description?: string
  investmentProfile?: ProductInvestmentProfileDto
  themeRelations?: ProductThemeRelationDto[]
  createdAt?: string
  updatedAt?: string
}

export interface ProductListRequest extends PageQuery {
  keyword?: string
  productType?: ProductType
  tradeStatus?: TradeStatus
  riskLevel?: number
  currency?: string
}

export type QuoteStatus = 'VALID' | 'INVALID' | 'SUSPECT' | string

export interface MarketQuoteDto {
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
  status?: QuoteStatus
  receivedAt?: string
}

export interface MarketQuoteHistoryRequest {
  productBizId: string
  interval?: string
  sourceCode?: string
  from: string
  to: string
  limit?: number
}

export interface LatestMarketQuoteRequest {
  productBizId: string
  interval?: string
  sourceCode?: string
}

export interface SaveMarketQuoteRequest {
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
  status?: QuoteStatus
}
