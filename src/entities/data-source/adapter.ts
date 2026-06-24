import type { DataSourceDto } from './model'

export interface DataSourceHealthSummary {
  total: number
  enabled: number
  degraded: number
  averageQuality?: number
}

export const summarizeDataSources = (items: DataSourceDto[]): DataSourceHealthSummary => {
  const scores = items
    .map((item) => item.latestQuality?.qualityScore)
    .filter((score): score is number => typeof score === 'number')

  return {
    total: items.length,
    enabled: items.filter((item) => item.enabled).length,
    degraded: items.filter((item) => ['LOW', 'DEMO_ONLY'].includes(item.qualityLevel || '')).length,
    averageQuality: scores.length
      ? scores.reduce((sum, score) => sum + score, 0) / scores.length
      : undefined,
  }
}
