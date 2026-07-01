export type EvolutionSampleStatus = 'INSUFFICIENT_SAMPLE' | 'EARLY_SIGNAL' | 'ENOUGH_FOR_TREND' | string
export type EvolutionMetricStatus = 'GOOD' | 'WARN' | 'BAD' | 'UNKNOWN' | string

export interface InvestmentEvolutionSummaryRequest {
  sampleSize?: number
}

export interface EvolutionMetricDto {
  code: string
  label: string
  value: string
  status: EvolutionMetricStatus
  hint?: string
}

export interface ClosedLoopMetricsDto {
  sampleCount: number
  successCount: number
  failedCount: number
  runningCount: number
  blockedCount: number
  successRate?: number
  averageQualityScore?: number
  gatePassCount: number
}

export interface PortfolioMetricsDto {
  portfolioCount: number
  valuationPointCount: number
  latestReturnRate?: number
  maxDrawdown?: number
  orderEventCount: number
  filledOrderEventCount: number
  turnoverProxy?: number
}

export interface ReasonCountDto {
  reasonCode: string
  count: number
}

export interface RiskMetricsDto {
  sampleCount: number
  passCount: number
  reviewCount: number
  rejectCount: number
  topRejectReasons: ReasonCountDto[]
}

export interface ModelMetricsDto {
  sampleCount: number
  successCount: number
  failedCount: number
  successRate?: number
  averageDurationMs?: number
}

export interface FeedbackMetricsDto {
  feedbackCount: number
  positiveFeedbackCount: number
  negativeFeedbackCount: number
  backtestCount: number
  completedBacktestCount: number
}

export interface VariantPerformanceDto {
  variantKey: string
  modelDisplay: string
  promptDisplay: string
  skillDisplay: string
  sampleCount: number
  successRate?: number
  averageDurationMs?: number
  latestBusinessLabel?: string
}

export interface RecentRunDto {
  runBizId: string
  runNo: string
  runStatus: string
  reportBizId?: string
  portfolioBizId?: string
  promptDisplay?: string
  qualityScore?: number
  gateResult?: string
  startedAt?: string
}

export interface InvestmentEvolutionSummaryDto {
  generatedAt?: string
  sampleStatus: EvolutionSampleStatus
  sampleWindowSize: number
  kpis: EvolutionMetricDto[]
  closedLoop: ClosedLoopMetricsDto
  portfolio: PortfolioMetricsDto
  risk: RiskMetricsDto
  model: ModelMetricsDto
  feedback: FeedbackMetricsDto
  variants: VariantPerformanceDto[]
  recentRuns: RecentRunDto[]
  limitations: string[]
}
