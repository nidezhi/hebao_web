import { parseJsonSafely } from '@/shared/utils/format'
import type { BacktestResultDto } from './model'

export const parseBacktestMetrics = (backtest: BacktestResultDto) =>
  parseJsonSafely<Record<string, unknown>>(backtest.metrics)

export const parseBacktestParameters = (backtest: BacktestResultDto) =>
  parseJsonSafely<Record<string, unknown>>(backtest.parameters)
