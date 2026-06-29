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

export interface MockPortfolioPerformanceDto {
  portfolioBizId: string
  latestReturnRate?: number
  maxDrawdown?: number
  pointCount?: number
  valuations?: PortfolioPerformancePointDto[]
}

export interface PortfolioBizIdRequest {
  portfolioBizId: string
}

export interface CreateMockPortfolioRequest {
  portfolioName: string
  baseCurrency?: string
  initialCash?: number
}

export interface ExecuteMockBuyRequest extends PortfolioBizIdRequest {
  productBizId: string
  amount: number
  idempotencyKey?: string
}

export interface ExecuteMockSellRequest extends PortfolioBizIdRequest {
  productBizId: string
  quantity: number
  idempotencyKey?: string
}

export interface ExecuteMockPlanFromReportRequest extends PortfolioBizIdRequest {
  reportBizId: string
  productBizId?: string
  idempotencyKey?: string
}

export interface CancelMockOrderRequest {
  orderBizId: string
  cancelReason?: string
}

export interface ExecuteMockRebalanceRequest extends PortfolioBizIdRequest {
  targets: Array<{ productBizId: string; targetWeight: number }>
  minTradeAmount?: number
  idempotencyKey?: string
}

export interface MockOrderDto {
  bizId: string
  orderNo?: string
  portfolioBizId?: string
  productBizId?: string
  orderSide?: string
  orderType?: string
  currency?: string
  requestedPrice?: number
  requestedQuantity?: number
  requestedAmount?: number
  executedQuantity?: number
  executedAmount?: number
  feeAmount?: number
  status?: string
  completedAt?: string
}

export interface TradeExecutionDto {
  bizId: string
  executionNo?: string
  orderBizId?: string
  executionPrice?: number
  executionQuantity?: number
  executionAmount?: number
  feeAmount?: number
  executedAt?: string
}

export interface MockOrderExecutionDto {
  order?: MockOrderDto
  execution?: TradeExecutionDto
  portfolio?: MockPortfolioDto
}

export interface MockRebalanceExecutionDto {
  executions?: MockOrderExecutionDto[]
  portfolio?: MockPortfolioDto
}

export interface PortfolioOrderEventDto {
  bizId: string
  orderBizId: string
  orderNo?: string
  portfolioBizId?: string
  productBizId?: string
  orderSide?: string
  orderStatus?: string
  eventType?: string
  fromStatus?: string
  toStatus?: string
  eventSource?: string
  requestedAmount?: number
  requestedQuantity?: number
  executedAmount?: number
  executedQuantity?: number
  occurredAt?: string
}
