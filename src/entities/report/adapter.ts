import type { InvestmentAnalysisReportDto } from './model'

export const reportQualityGatePassed = (report: InvestmentAnalysisReportDto) =>
  report.dataQualityGate?.passed !== false && report.confidenceLevel !== 'UNUSABLE'

export const reportGateMessage = (report: InvestmentAnalysisReportDto) =>
  report.dataQualityGate?.displayMessage || report.failureReason || '数据质量不足，请查看缺口并补数'

export const summarizeReports = (items: InvestmentAnalysisReportDto[]) => ({
  total: items.length,
  succeeded: items.filter((item) => item.status === 'SUCCEEDED').length,
  blocked: items.filter((item) => !reportQualityGatePassed(item)).length,
  unusable: items.filter((item) => item.confidenceLevel === 'UNUSABLE').length,
})
