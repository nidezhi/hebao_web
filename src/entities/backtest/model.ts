import type { PageQuery } from '@/shared/api/types'

export type BacktestStatus = 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED'

export interface BacktestResultDto {
  bizId: string
  strategyCode?: string
  strategyVersion?: string
  portfolioBizId?: string
  startDate?: string
  endDate?: string
  parameters?: string
  metrics?: string
  status?: BacktestStatus
  createdAt?: string
  updatedAt?: string
}

export interface BacktestListRequest extends PageQuery {
  strategyCode?: string
  strategyVersion?: string
  status?: BacktestStatus
}

export interface SaveBacktestResultRequest {
  bizId?: string
  strategyCode: string
  strategyVersion: string
  startDate: string
  endDate: string
  initialCapital: number
  benchmarkCode?: string
  parameters: string
  metrics?: string
  resultUri?: string
  status?: BacktestStatus
  failureReason?: string
  startedAt?: string
  completedAt?: string
}

export interface GenerateBacktestFromPortfolioRequest {
  portfolioBizId: string
  strategyCode: string
  strategyVersion: string
  benchmarkCode?: string
  parameters?: string
  limit?: number
}
