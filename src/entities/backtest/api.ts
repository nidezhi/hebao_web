import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type {
  BacktestListRequest,
  BacktestResultDto,
  GenerateBacktestFromPortfolioRequest,
  SaveBacktestResultRequest,
} from './model'

export const listBacktests = (data: BacktestListRequest) =>
  postJson<PageResult<BacktestResultDto>, BacktestListRequest>(endpoints.backtest.list, data)

export const getBacktest = (bizId: string) =>
  postJson<BacktestResultDto, BizIdRequest>(endpoints.backtest.detail, { bizId })

export const saveBacktest = (data: SaveBacktestResultRequest) =>
  postJson<BacktestResultDto, SaveBacktestResultRequest>(endpoints.backtest.save, data)

export const generateBacktestFromPortfolio = (data: GenerateBacktestFromPortfolioRequest) =>
  postJson<BacktestResultDto, GenerateBacktestFromPortfolioRequest>(endpoints.backtest.generateFromPortfolio, data)
