import type { PageQuery } from '@/shared/api/types'
import type { QualityLevel } from '@/entities/data-source/model'

export type InvestmentAnalysisStatus = 'SUCCEEDED' | 'FAILED' | string

export interface DataQualityGateDto {
  passed?: boolean
  qualityLevel?: QualityLevel
  displayMessage?: string
  missingReasons?: string[]
}

export interface InvestmentAnalysisReportDto {
  bizId: string
  requestId: string
  providerCode: string
  modelCode: string
  marketScope: string
  themeCode?: string
  themeName?: string
  status: InvestmentAnalysisStatus
  confidenceLevel?: string
  dataQualityScore?: number
  qualityScore?: number
  dataQualityGate?: DataQualityGateDto | string
  investmentSummary?: string
  trend?: string
  investmentPlan?: string
  simulatedReturn?: string
  chartPayload?: string
  promptSnapshot?: string
  failureReason?: string
  generatedAt?: string
  createdAt?: string
}

export interface InvestmentAnalysisReportListRequest extends PageQuery {
  marketScope?: string
  themeCode?: string
  providerCode?: string
  status?: InvestmentAnalysisStatus
}

export interface GenerateInvestmentAnalysisRequest {
  providerCode?: string
  modelCode?: string
  marketScope?: string
  themeCode?: string
  lookbackDays?: number
  initialCapital?: number
}
