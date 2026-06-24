import type { PageQuery } from '@/shared/api/types'

export type FeedbackAction = 'ADOPT' | 'REJECT' | 'WATCH' | 'IGNORE'

export interface InvestmentFeedbackDto {
  bizId: string
  userBizId?: string
  targetType?: string
  targetBizId?: string
  reportBizId?: string
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  backtestBizId?: string
  feedbackAction?: FeedbackAction
  reasonCode?: string
  commentText?: string
  metadata?: string
  createdAt?: string
}

export interface InvestmentFeedbackListRequest extends PageQuery {
  targetType?: string
  targetBizId?: string
  reportBizId?: string
  promptCode?: string
  promptVersion?: string
  backtestBizId?: string
  feedbackAction?: FeedbackAction
}

export interface AiPromptEvaluationDto {
  bizId: string
  promptBizId?: string
  promptCode: string
  promptVersion: string
  scenario?: string
  score?: number
  reviewStatus?: string
  backtestBizId?: string
  feedbackBizId?: string
  metrics?: string
  createdAt?: string
}

export interface AiPromptEvaluationListRequest extends PageQuery {
  promptCode?: string
  promptVersion?: string
  scenario?: string
  reviewStatus?: string
}
