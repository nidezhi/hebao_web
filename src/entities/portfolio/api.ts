import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  CancelMockOrderRequest,
  CreateMockPortfolioRequest,
  ExecuteMockBuyRequest,
  ExecuteMockPlanFromReportRequest,
  ExecuteMockRebalanceRequest,
  ExecuteMockSellRequest,
  MockOrderDto,
  MockOrderExecutionDto,
  MockPortfolioDto,
  MockPortfolioListRequest,
  MockPortfolioPerformanceDto,
  MockRebalanceExecutionDto,
  PortfolioOrderEventDto,
  PortfolioBizIdRequest,
} from './model'

export const listMyMockPortfolios = (data: MockPortfolioListRequest) =>
  postJson<PageResult<MockPortfolioDto>, MockPortfolioListRequest>(endpoints.portfolio.mine, data)

export const getAutomationMockPortfolio = () =>
  postJson<MockPortfolioDto, Record<string, never>>(endpoints.portfolio.automationPool, {})

export const getMockPortfolio = (bizId: string) =>
  postJson<MockPortfolioDto, PortfolioBizIdRequest>(endpoints.portfolio.detail, { portfolioBizId: bizId })

export const getPortfolioPerformanceCurve = (data: PortfolioBizIdRequest & { limit?: number }) =>
  postJson<MockPortfolioPerformanceDto, PortfolioBizIdRequest & { limit?: number }>(
    endpoints.portfolio.performanceCurve,
    data,
  )

export const createMockPortfolio = (data: CreateMockPortfolioRequest) =>
  postJson<MockPortfolioDto, CreateMockPortfolioRequest>(endpoints.portfolio.create, data)

export const buyMockOrder = (data: ExecuteMockBuyRequest) =>
  postJson<MockOrderExecutionDto, ExecuteMockBuyRequest>(endpoints.portfolio.buy, data)

export const buyMockOrderFromReport = (data: ExecuteMockPlanFromReportRequest) =>
  postJson<MockOrderExecutionDto, ExecuteMockPlanFromReportRequest>(endpoints.portfolio.buyFromReport, data)

export const sellMockOrder = (data: ExecuteMockSellRequest) =>
  postJson<MockOrderExecutionDto, ExecuteMockSellRequest>(endpoints.portfolio.sell, data)

export const cancelMockOrder = (data: CancelMockOrderRequest) =>
  postJson<MockOrderDto, CancelMockOrderRequest>(endpoints.portfolio.cancelOrder, data)

export const listMockOrderEvents = (data: { orderBizId: string }) =>
  postJson<PortfolioOrderEventDto[], { orderBizId: string }>(endpoints.portfolio.orderEvents, data)

export const listPortfolioOrderEvents = (data: PortfolioBizIdRequest & { limit?: number }) =>
  postJson<PortfolioOrderEventDto[], PortfolioBizIdRequest & { limit?: number }>(
    endpoints.portfolio.portfolioOrderEvents,
    data,
  )

export const executeMockRebalance = (data: ExecuteMockRebalanceRequest) =>
  postJson<MockRebalanceExecutionDto, ExecuteMockRebalanceRequest>(endpoints.portfolio.rebalance, data)

export const refreshPortfolioValuation = (data: PortfolioBizIdRequest) =>
  postJson<MockPortfolioDto, PortfolioBizIdRequest>(endpoints.portfolio.refreshValuation, data)
