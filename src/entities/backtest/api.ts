import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type { BacktestListRequest, BacktestResultDto } from './model'

export const listBacktests = (data: BacktestListRequest) =>
  postJson<PageResult<BacktestResultDto>, BacktestListRequest>(endpoints.backtest.list, data)

export const getBacktest = (bizId: string) =>
  postJson<BacktestResultDto, BizIdRequest>(endpoints.backtest.detail, { bizId })

export const saveBacktest = (data: Record<string, unknown>) =>
  postJson<BacktestResultDto, Record<string, unknown>>(endpoints.backtest.save, data)

export const generateBacktestFromPortfolio = (data: Record<string, unknown>) =>
  postJson<BacktestResultDto, Record<string, unknown>>(endpoints.backtest.generateFromPortfolio, data)
