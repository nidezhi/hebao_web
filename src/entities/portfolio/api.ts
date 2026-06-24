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
