import type { PageQuery } from '@/shared/api/types'

export type ClosedLoopRunStatus = 'RUNNING' | 'SUCCEEDED' | 'PARTIAL' | 'BLOCKED' | 'FAILED' | string
export type ClosedLoopStepStatus = 'SUCCEEDED' | 'SKIPPED' | 'BLOCKED' | 'FAILED' | string
export type ClosedLoopGateResult = 'PENDING' | 'PASS' | 'BLOCK' | string

export interface ClosedLoopStepDto {
  bizId: string
  stepCode: string
  stepName: string
  stepOrder: number
  stepStatus: ClosedLoopStepStatus
  inputSummary?: string
  outputSummary?: string
  failureReason?: string
  startedAt?: string
  completedAt?: string
}

export interface ClosedLoopRunDto {
  bizId: string
  runNo: string
  taskCode: string
  triggerSource?: string
  runStatus: ClosedLoopRunStatus
  automationLevel?: string
  marketScope?: string
  themeCode?: string
  mockUserBizId?: string
  portfolioBizId?: string
  reportBizId?: string
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  backtestBizId?: string
  qualityScore?: number
  gateResult?: ClosedLoopGateResult
  summary?: string
  failureReason?: string
  startedAt?: string
  completedAt?: string
  steps?: ClosedLoopStepDto[]
}

export interface ClosedLoopRunListRequest extends PageQuery {
  taskCode?: string
  runStatus?: ClosedLoopRunStatus
  automationLevel?: string
  marketScope?: string
  themeCode?: string
  mockUserBizId?: string
  startedFrom?: string
  startedTo?: string
}

export interface ClosedLoopRunDetailRequest {
  bizId: string
}
