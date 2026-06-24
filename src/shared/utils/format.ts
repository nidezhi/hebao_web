export const formatDateTime = (value?: string) =>
  value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'

export const formatDate = (value?: string) =>
  value ? new Date(value).toLocaleDateString('zh-CN') : '-'

export const formatPercent = (value?: number, digits = 2) =>
  typeof value === 'number' ? `${(value * 100).toFixed(digits)}%` : '-'

export const formatMoney = (value?: number, currency = 'CNY') =>
  typeof value === 'number' ? `${value.toLocaleString('zh-CN')} ${currency}` : '-'

export const parseJsonSafely = <T = unknown>(value?: string): T | undefined => {
  if (!value) return undefined
  try {
    return JSON.parse(value) as T
  } catch {
    return undefined
  }
}
