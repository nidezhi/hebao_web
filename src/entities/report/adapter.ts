import type { InvestmentAnalysisReportDto } from './model'
import { safeParseJson, toNumber } from '@/shared/utils/format'

export interface ReportView extends InvestmentAnalysisReportDto {
  normalizedQualityScore?: number
  dataQualityGateView?: Record<string, unknown>
  investmentSummaryView?: Record<string, unknown>
  trendView?: Record<string, unknown>
  investmentPlanView?: Record<string, unknown>
  simulatedReturnView?: Record<string, unknown>
  chartPayloadView?: Record<string, unknown>
  promptSnapshotView?: Record<string, unknown>
}

export const normalizeReport = (report: InvestmentAnalysisReportDto): ReportView => ({
  ...report,
  normalizedQualityScore: toNumber(report.dataQualityScore ?? report.qualityScore),
  dataQualityGateView: safeParseJson<Record<string, unknown>>(report.dataQualityGate),
  investmentSummaryView: safeParseJson<Record<string, unknown>>(report.investmentSummary),
  trendView: safeParseJson<Record<string, unknown>>(report.trend),
  investmentPlanView: safeParseJson<Record<string, unknown>>(report.investmentPlan),
  simulatedReturnView: safeParseJson<Record<string, unknown>>(report.simulatedReturn),
  chartPayloadView: safeParseJson<Record<string, unknown>>(report.chartPayload),
  promptSnapshotView: safeParseJson<Record<string, unknown>>(report.promptSnapshot),
})

export const reportQualityGatePassed = (report: InvestmentAnalysisReportDto) =>
  safeParseJson<Record<string, unknown>>(report.dataQualityGate)?.passed !== false && report.confidenceLevel !== 'UNUSABLE'

export const reportGateMessage = (report: InvestmentAnalysisReportDto) =>
  String(
    safeParseJson<Record<string, unknown>>(report.dataQualityGate)?.displayMessage
      || report.failureReason
      || '数据质量不足，请查看缺口并补数',
  )

export const summarizeReports = (items: InvestmentAnalysisReportDto[]) => ({
  total: items.length,
  succeeded: items.filter((item) => item.status === 'SUCCEEDED').length,
  blocked: items.filter((item) => !reportQualityGatePassed(item)).length,
  unusable: items.filter((item) => item.confidenceLevel === 'UNUSABLE').length,
})
