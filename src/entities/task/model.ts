import type { PageQuery } from '@/shared/api/types'

export type TaskExecutionStatus = 'RUNNING' | 'SUCCEEDED' | 'FAILED' | string

export interface InvestmentTaskDefinitionDto {
  code: string
  type: string
  cron: string
  zone: string
  enabled: boolean
  parameters: Record<string, unknown>
  description?: string
}

export interface ScheduledTaskExecutionDto {
  bizId: string
  taskCode: string
  taskType: string
  triggerSource: string
  status: TaskExecutionStatus
  eventId?: string
  resultSummary?: string
  failureReason?: string
  startedAt?: string
  completedAt?: string
  createdAt?: string
}

export interface TaskExecutionListRequest extends PageQuery {
  taskCode?: string
  taskType?: string
  status?: TaskExecutionStatus
  startedFrom?: string
  startedTo?: string
}

export interface TriggerInvestmentTaskRequest {
  taskCode: string
  parameters?: Record<string, unknown>
}

export interface InvestmentTaskTriggerResultDto {
  eventId: string
  taskCode: string
  taskType: string
  triggerSource: string
  triggeredAt: string
}
