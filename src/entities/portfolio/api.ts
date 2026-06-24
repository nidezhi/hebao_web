import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type {
  MockPortfolioDto,
  MockPortfolioListRequest,
  PortfolioBizIdRequest,
  PortfolioPerformancePointDto,
} from './model'

export const listMyMockPortfolios = (data: MockPortfolioListRequest) =>
  postJson<PageResult<MockPortfolioDto>, MockPortfolioListRequest>(endpoints.portfolio.mine, data)

export const getMockPortfolio = (bizId: string) =>
  postJson<MockPortfolioDto, BizIdRequest>(endpoints.portfolio.detail, { bizId })

export const getPortfolioPerformanceCurve = (data: PortfolioBizIdRequest & { limit?: number }) =>
  postJson<PortfolioPerformancePointDto[], PortfolioBizIdRequest & { limit?: number }>(
    endpoints.portfolio.performanceCurve,
    data,
  )

export const createMockPortfolio = (data: Record<string, unknown>) =>
  postJson<MockPortfolioDto, Record<string, unknown>>(endpoints.portfolio.create, data)

export const buyMockOrder = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.buy, data)

export const buyMockOrderFromReport = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.buyFromReport, data)

export const sellMockOrder = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.sell, data)

export const cancelMockOrder = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.cancelOrder, data)

export const listMockOrderEvents = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>[], Record<string, unknown>>(endpoints.portfolio.orderEvents, data)

export const executeMockRebalance = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.rebalance, data)

export const refreshPortfolioValuation = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.portfolio.refreshValuation, data)
