import type { PageQuery } from '@/shared/api/types'
import type { QualityLevel } from '@/entities/data-source/model'

export type InvestmentAnalysisStatus = 'SUCCEEDED' | 'FAILED' | string
export type ReportAllowedAction =
  | 'VIEW_REPORT'
  | 'SHOW_DATA_GAP'
  | 'GENERATE_PROMPT'
  | 'MOCK_TRADE'
  | string

export interface DataQualityGateDto {
  passed?: boolean
  qualityLevel?: QualityLevel
  confidenceLevel?: string
  dataQualityScore?: number
  snapshotCount?: number
  newsCount?: number
  fallbackNewsRatio?: number
  reasons?: string[]
  displayMessage?: string
  missingReasons?: string[]
  allowedActions?: ReportAllowedAction[]
}

export interface InvestmentSummaryPayload {
  marketScope?: string
  themeCode?: string
  sampleCount?: number
  newsCount?: number
  averageReturn?: number
  averageMomentum?: number
  averageHeat?: number
  dataQualityScore?: number
  dataQualityLevel?: string
  confidenceLevel?: string
  dataQualityPassed?: boolean
  dataGapReasons?: string[]
  latestSnapshotTime?: string
  recentNews?: Array<{
    title?: string
    summary?: string
    publishTime?: string
    sourceCode?: string
  }>
}

export interface TrendPayload {
  direction?: string
  averageReturn?: number
  averageMomentum?: number
  newsHeat?: number
  weightedHeatScore?: number
  dataQualityScore?: number
  confidenceLevel?: string
  dataQualityPassed?: boolean
  lookbackDays?: number
}

export interface InvestmentPlanPayload {
  planType?: string
  suggestedAction?: string
  referenceAllocationRate?: number
  referenceAllocationAmount?: number
  allocationRate?: number
  amount?: number
  dataQualityLevel?: string
  confidenceLevel?: string
  dataGapReasons?: string[]
  rebalanceRule?: string
  riskNotice?: string
}

export interface SimulatedReturnPayload {
  initialCapital?: number
  principal?: number
  allocationRate?: number
  simulatedPrincipal?: number
  estimatedProfit?: number
  estimatedFinalCapital?: number
  returnRate?: number
  stressLoss?: number
  optimisticProfit?: number
  confidenceLevel?: string
  dataQualityPassed?: boolean
  assumption?: string
}

export interface ReportChartPoint {
  time: string
  snapshotType?: string
  returnRate?: number
  momentumScore?: number
  heatScore?: number
}

export interface ReportNewsPoint {
  time: string
  title: string
  sourceCode?: string
}

export interface ReportChartPayload {
  series: ReportChartPoint[]
  news: ReportNewsPoint[]
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
