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
