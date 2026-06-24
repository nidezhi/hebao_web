import type { PageQuery } from '@/shared/api/types'

export interface PortfolioValuationDto {
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

export interface MockPositionDto {
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

export interface MockPortfolioDto {
  bizId: string
  portfolioNo?: string
  ownerUserBizId?: string
  portfolioName: string
  portfolioType?: string
  baseCurrency?: string
  status?: number
  latestValuation?: PortfolioValuationDto
  positions?: MockPositionDto[]
  createdAt?: string
  updatedAt?: string
}

export interface MockPortfolioListRequest extends PageQuery {}

export interface PortfolioPerformancePointDto {
  valuationTime?: string
  totalAsset?: number
  totalReturnRate?: number
  maxDrawdown?: number
}

export interface PortfolioBizIdRequest {
  portfolioBizId: string
}
