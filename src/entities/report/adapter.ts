import type {
  DataQualityGateDto,
  InvestmentAnalysisReportDto,
  InvestmentPlanPayload,
  ReportChatSnapshot,
  InvestmentSummaryPayload,
  ReportAllowedAction,
  ReportChartPayload,
  ReportChartPoint,
  ReportNewsPoint,
  SimulatedReturnPayload,
  TrendPayload,
} from './model'
import { safeParseJson, toNumber } from '@/shared/utils/format'

export interface ReportView extends InvestmentAnalysisReportDto {
  normalizedQualityScore?: number
  dataQualityGateView?: DataQualityGateDto
  investmentSummaryView?: InvestmentSummaryPayload
  trendView?: TrendPayload
  investmentPlanView?: InvestmentPlanPayload
  simulatedReturnView?: SimulatedReturnPayload
  chartPayloadView: ReportChartPayload
  promptSnapshotView?: Record<string, unknown>
  chatSnapshotView?: ReportChatSnapshot
  allowedActions: ReportAllowedAction[]
  seriesCount: number
  newsCount: number
}

const toRecord = <T extends Record<string, unknown>>(value: unknown): T | undefined =>
  safeParseJson<T>(value)

const toStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).filter(Boolean)
  if (typeof value === 'string' && value.trim()) return value.split(',').map((item) => item.trim()).filter(Boolean)
  return []
}

const normalizeGate = (report: InvestmentAnalysisReportDto): DataQualityGateDto | undefined => {
  const gate = toRecord<DataQualityGateDto & Record<string, unknown>>(report.dataQualityGate)
  if (!gate) return undefined
  return {
    ...gate,
    dataQualityScore: toNumber(gate.dataQualityScore),
    snapshotCount: toNumber(gate.snapshotCount),
    newsCount: toNumber(gate.newsCount),
    fallbackNewsRatio: toNumber(gate.fallbackNewsRatio),
    reasons: toStringArray(gate.reasons),
    missingReasons: toStringArray(gate.missingReasons),
    allowedActions: toStringArray(gate.allowedActions),
  }
}

const normalizeNumberFields = <T extends Record<string, unknown>>(value: T | undefined, fields: Array<keyof T>): T | undefined => {
  if (!value) return undefined
  const next = { ...value }
  fields.forEach((field) => {
    const parsed = toNumber(next[field])
    if (typeof parsed === 'number') next[field] = parsed as T[keyof T]
  })
  return next
}

const normalizeChartPoint = (value: unknown): ReportChartPoint | undefined => {
  const point = toRecord<Record<string, unknown>>(value)
  if (!point?.time) return undefined
  return {
    time: String(point.time),
    snapshotType: point.snapshotType ? String(point.snapshotType) : undefined,
    returnRate: toNumber(point.returnRate),
    momentumScore: toNumber(point.momentumScore),
    heatScore: toNumber(point.heatScore),
  }
}

const normalizeNewsPoint = (value: unknown): ReportNewsPoint | undefined => {
  const point = toRecord<Record<string, unknown>>(value)
  if (!point?.time || !point?.title) return undefined
  return {
    time: String(point.time),
    title: String(point.title),
    sourceCode: point.sourceCode ? String(point.sourceCode) : undefined,
  }
}

const normalizeChartPayload = (value: unknown): ReportChartPayload => {
  const chart = toRecord<Record<string, unknown>>(value)
  const series = Array.isArray(chart?.series) ? chart.series.map(normalizeChartPoint).filter(Boolean) as ReportChartPoint[] : []
  const news = Array.isArray(chart?.news) ? chart.news.map(normalizeNewsPoint).filter(Boolean) as ReportNewsPoint[] : []
  return { series, news }
}

const normalizeChatSnapshot = (value: unknown): ReportChatSnapshot | undefined => {
  const snapshot = toRecord<ReportChatSnapshot & Record<string, unknown>>(value)
  if (!snapshot) return undefined
  return {
    ...snapshot,
    httpStatus: toNumber(snapshot.httpStatus),
    durationMs: toNumber(snapshot.durationMs),
    temperature: toNumber(snapshot.temperature),
    maxTokens: toNumber(snapshot.maxTokens),
    requestMessages: Array.isArray(snapshot.requestMessages)
      ? snapshot.requestMessages.map((item) => ({
        role: String(item.role || 'unknown'),
        contentPreview: item.contentPreview ? String(item.contentPreview) : undefined,
        contentLength: toNumber(item.contentLength),
      }))
      : [],
    responseMessage: snapshot.responseMessage
      ? {
        role: String(snapshot.responseMessage.role || 'assistant'),
        contentPreview: snapshot.responseMessage.contentPreview ? String(snapshot.responseMessage.contentPreview) : undefined,
        contentLength: toNumber(snapshot.responseMessage.contentLength),
      }
      : undefined,
  }
}

export const normalizeReport = (report: InvestmentAnalysisReportDto): ReportView => {
  const dataQualityGateView = normalizeGate(report)
  const investmentSummaryView = normalizeNumberFields(
    toRecord<InvestmentSummaryPayload & Record<string, unknown>>(report.investmentSummary),
    ['sampleCount', 'newsCount', 'averageReturn', 'averageMomentum', 'averageHeat', 'dataQualityScore'],
  )
  const trendView = normalizeNumberFields(
    toRecord<TrendPayload & Record<string, unknown>>(report.trend),
    ['averageReturn', 'averageMomentum', 'newsHeat', 'weightedHeatScore', 'dataQualityScore', 'lookbackDays'],
  )
  const investmentPlanView = normalizeNumberFields(
    toRecord<InvestmentPlanPayload & Record<string, unknown>>(report.investmentPlan),
    ['referenceAllocationRate', 'referenceAllocationAmount', 'allocationRate', 'amount'],
  )
  const simulatedReturnView = normalizeNumberFields(
    toRecord<SimulatedReturnPayload & Record<string, unknown>>(report.simulatedReturn),
    ['initialCapital', 'principal', 'allocationRate', 'simulatedPrincipal', 'estimatedProfit', 'estimatedFinalCapital', 'returnRate', 'stressLoss', 'optimisticProfit'],
  )
  const chartPayloadView = normalizeChartPayload(report.chartPayload)

  return {
    ...report,
    normalizedQualityScore: toNumber(report.dataQualityScore ?? report.qualityScore ?? dataQualityGateView?.dataQualityScore),
    dataQualityGateView,
    investmentSummaryView,
    trendView,
    investmentPlanView,
    simulatedReturnView,
    chartPayloadView,
    promptSnapshotView: safeParseJson<Record<string, unknown>>(report.promptSnapshot),
    chatSnapshotView: normalizeChatSnapshot(report.chatSnapshot),
    allowedActions: dataQualityGateView?.allowedActions || [],
    seriesCount: chartPayloadView.series.length,
    newsCount: chartPayloadView.news.length,
  }
}

export const reportQualityGatePassed = (report: InvestmentAnalysisReportDto) =>
  normalizeGate(report)?.passed !== false && report.confidenceLevel !== 'UNUSABLE'

export const reportGateMessage = (report: InvestmentAnalysisReportDto) =>
  String(
    normalizeGate(report)?.displayMessage
      || report.failureReason
      || '数据质量不足，请查看缺口并补数',
  )

export const reportActionAllowed = (report: InvestmentAnalysisReportDto, action: ReportAllowedAction) => {
  if (report.status !== 'SUCCEEDED') return false
  const gate = normalizeGate(report)
  if (gate?.allowedActions?.length) return gate.allowedActions.includes(action)
  return reportQualityGatePassed(report)
}

export const summarizeReports = (items: InvestmentAnalysisReportDto[]) => ({
  total: items.length,
  succeeded: items.filter((item) => item.status === 'SUCCEEDED').length,
  blocked: items.filter((item) => !reportQualityGatePassed(item)).length,
  unusable: items.filter((item) => item.confidenceLevel === 'UNUSABLE').length,
})
