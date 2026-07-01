import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { InvestmentEvolutionSummaryDto, InvestmentEvolutionSummaryRequest } from './model'

export const getInvestmentEvolutionSummary = (data: InvestmentEvolutionSummaryRequest = {}) =>
  postJson<InvestmentEvolutionSummaryDto, InvestmentEvolutionSummaryRequest>(endpoints.analytics.investmentEvolutionSummary, data)
