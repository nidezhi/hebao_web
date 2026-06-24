import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  GenerateInvestmentAnalysisRequest,
  InvestmentAnalysisReportDto,
  InvestmentAnalysisReportListRequest,
} from './model'

export const listInvestmentReports = (data: InvestmentAnalysisReportListRequest) =>
  postJson<PageResult<InvestmentAnalysisReportDto>, InvestmentAnalysisReportListRequest>(endpoints.report.list, data)

export const generateInvestmentReport = (data: GenerateInvestmentAnalysisRequest) =>
  postJson<InvestmentAnalysisReportDto, GenerateInvestmentAnalysisRequest>(endpoints.report.generate, data)
