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

export const safeParseJson = <T = unknown>(value?: string | null | unknown): T | undefined => {
  if (value == null) return undefined
  if (typeof value !== 'string') return value as T
  if (!value.trim()) return undefined
  return parseJsonSafely<T>(value)
}

export const toNumber = (value: unknown): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : undefined
  }
  return undefined
}

export const shortId = (value?: string, size = 8) =>
  value ? `${value.slice(0, size)}${value.length > size ? '…' : ''}` : '-'
