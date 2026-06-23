import request from './request'
import type {
  AiPromptEvaluation,
  AiPromptEvaluationQuery,
  BacktestQuery,
  BacktestResult,
  InvestmentFeedback,
  InvestmentFeedbackQuery,
  PageResult,
} from './types'

export const getBacktests = (data: BacktestQuery) =>
  request.post<never, PageResult<BacktestResult>>('/api/backtests/list', data)

export const getInvestmentFeedback = (data: InvestmentFeedbackQuery) =>
  request.post<never, PageResult<InvestmentFeedback>>('/api/ai/feedback/list', data)

export const getPromptEvaluations = (data: AiPromptEvaluationQuery) =>
  request.post<never, PageResult<AiPromptEvaluation>>('/api/ai/prompt-evaluations/list', data)
