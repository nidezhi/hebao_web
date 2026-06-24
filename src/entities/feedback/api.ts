import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  AiPromptEvaluationDto,
  AiPromptEvaluationListRequest,
  InvestmentFeedbackDto,
  InvestmentFeedbackListRequest,
} from './model'

export const listInvestmentFeedback = (data: InvestmentFeedbackListRequest) =>
  postJson<PageResult<InvestmentFeedbackDto>, InvestmentFeedbackListRequest>(endpoints.feedback.list, data)

export const listPromptEvaluations = (data: AiPromptEvaluationListRequest) =>
  postJson<PageResult<AiPromptEvaluationDto>, AiPromptEvaluationListRequest>(
    endpoints.promptEvaluation.list,
    data,
  )

export const getInvestmentFeedback = (data: Record<string, unknown>) =>
  postJson<InvestmentFeedbackDto, Record<string, unknown>>(endpoints.feedback.detail, data)

export const saveInvestmentFeedback = (data: Record<string, unknown>) =>
  postJson<InvestmentFeedbackDto, Record<string, unknown>>(endpoints.feedback.save, data)

export const getPromptEvaluation = (data: Record<string, unknown>) =>
  postJson<AiPromptEvaluationDto, Record<string, unknown>>(endpoints.promptEvaluation.detail, data)

export const savePromptEvaluation = (data: Record<string, unknown>) =>
  postJson<AiPromptEvaluationDto, Record<string, unknown>>(endpoints.promptEvaluation.save, data)
