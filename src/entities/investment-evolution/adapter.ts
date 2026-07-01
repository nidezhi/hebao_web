import { formatDateTime } from '@/shared/utils/format'
import type {
  EvolutionMetricDto,
  InvestmentEvolutionSummaryDto,
  RecentRunDto,
  VariantPerformanceDto,
} from './model'

export interface InvestmentEvolutionSummaryView extends InvestmentEvolutionSummaryDto {
  sampleStatusText: string
  generatedAtText: string
  metricCards: Array<{ label: string; value: string; hint?: string; status: string }>
  variantRows: VariantPerformanceView[]
  recentRunRows: RecentRunView[]
}

export interface VariantPerformanceView extends VariantPerformanceDto {
  successRateText: string
  averageDurationText: string
}

export interface RecentRunView extends RecentRunDto {
  qualityScoreText: string
  startedAtText: string
}

export const normalizeInvestmentEvolutionSummary = (
  item: InvestmentEvolutionSummaryDto,
): InvestmentEvolutionSummaryView => ({
  ...item,
  sampleStatusText: sampleStatusText(item.sampleStatus),
  generatedAtText: formatDateTime(item.generatedAt),
  metricCards: (item.kpis || []).map(metricCard),
  variantRows: (item.variants || []).map(variantRow),
  recentRunRows: (item.recentRuns || []).map(recentRunRow),
})

export const percentText = (value?: number) => {
  if (value == null) return '-'
  return `${(value * 100).toFixed(2)}%`
}

export const numberText = (value?: number, digits = 0) => {
  if (value == null) return '-'
  return value.toFixed(digits)
}

export const statusColor = (status?: string) => {
  if (status === 'GOOD') return 'green'
  if (status === 'WARN') return 'gold'
  if (status === 'BAD') return 'red'
  return 'default'
}

const metricCard = (metric: EvolutionMetricDto) => ({
  label: metric.label,
  value: metric.value,
  hint: metric.hint,
  status: metric.status,
})

const variantRow = (item: VariantPerformanceDto): VariantPerformanceView => ({
  ...item,
  successRateText: percentText(item.successRate),
  averageDurationText: item.averageDurationMs == null ? '-' : `${numberText(item.averageDurationMs, 0)} ms`,
})

const recentRunRow = (item: RecentRunDto): RecentRunView => ({
  ...item,
  qualityScoreText: item.qualityScore == null ? '-' : item.qualityScore.toFixed(4),
  startedAtText: formatDateTime(item.startedAt),
})

const sampleStatusText = (status?: string) => {
  if (status === 'ENOUGH_FOR_TREND') return '趋势样本充足'
  if (status === 'EARLY_SIGNAL') return '早期信号'
  if (status === 'INSUFFICIENT_SAMPLE') return '样本不足'
  return status || '-'
}
