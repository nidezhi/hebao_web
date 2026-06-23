import request from './request'
import type {
  MockPortfolio,
  MockPortfolioQuery,
  PageResult,
  PortfolioPerformancePoint,
} from './types'

export const getMockPortfolios = (data: MockPortfolioQuery) =>
  request.post<never, PageResult<MockPortfolio>>('/api/mock/portfolios/mine', data)

export const getMockPortfolio = (bizId: string) =>
  request.post<never, MockPortfolio>('/api/mock/portfolios/detail', { bizId })

export const getPortfolioPerformanceCurve = (portfolioBizId: string, limit = 120) =>
  request.post<never, PortfolioPerformancePoint[]>(
    '/api/mock/portfolios/performance/curve',
    { portfolioBizId, limit },
  )
