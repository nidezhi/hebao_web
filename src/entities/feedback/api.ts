import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  AiPromptEvaluationBizIdRequest,
  AiPromptEvaluationDto,
  AiPromptEvaluationListRequest,
  InvestmentFeedbackDto,
  InvestmentFeedbackBizIdRequest,
  InvestmentFeedbackListRequest,
  SaveAiPromptEvaluationRequest,
  SaveInvestmentFeedbackRequest,
} from './model'

export const listInvestmentFeedback = (data: InvestmentFeedbackListRequest) =>
  postJson<PageResult<InvestmentFeedbackDto>, InvestmentFeedbackListRequest>(endpoints.feedback.list, data)

export const listPromptEvaluations = (data: AiPromptEvaluationListRequest) =>
  postJson<PageResult<AiPromptEvaluationDto>, AiPromptEvaluationListRequest>(
    endpoints.promptEvaluation.list,
    data,
  )

export const getInvestmentFeedback = (data: InvestmentFeedbackBizIdRequest) =>
  postJson<InvestmentFeedbackDto, InvestmentFeedbackBizIdRequest>(endpoints.feedback.detail, data)

export const saveInvestmentFeedback = (data: SaveInvestmentFeedbackRequest) =>
  postJson<InvestmentFeedbackDto, SaveInvestmentFeedbackRequest>(endpoints.feedback.save, data)

export const getPromptEvaluation = (data: AiPromptEvaluationBizIdRequest) =>
  postJson<AiPromptEvaluationDto, AiPromptEvaluationBizIdRequest>(endpoints.promptEvaluation.detail, data)

export const savePromptEvaluation = (data: SaveAiPromptEvaluationRequest) =>
  postJson<AiPromptEvaluationDto, SaveAiPromptEvaluationRequest>(endpoints.promptEvaluation.save, data)
