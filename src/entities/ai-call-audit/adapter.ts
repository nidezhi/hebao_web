import type { AiModelCallAuditDto } from './model'

export interface AiModelCallAuditSummaryEntry {
  label: string
  value: string
}

export interface AiModelCallAuditView extends AiModelCallAuditDto {
  inputSummaryView?: Record<string, unknown>
  outputSummaryView?: Record<string, unknown>
  requestPreviewView?: Record<string, unknown>
  responsePreviewView?: Record<string, unknown>
  inputSummaryEntries: AiModelCallAuditSummaryEntry[]
  outputSummaryEntries: AiModelCallAuditSummaryEntry[]
  modelDisplay: string
  skillDisplay: string
  promptDisplay: string
  businessDisplay: string
  durationDisplay: string
  failureDisplay: string
}

export const normalizeAiModelCallAudit = (item: AiModelCallAuditDto): AiModelCallAuditView => ({
  ...item,
  inputSummaryView: parseObject(item.inputSummary),
  outputSummaryView: parseObject(item.outputSummary),
  requestPreviewView: parseObject(item.requestPreview),
  responsePreviewView: parseObject(item.responsePreview),
  inputSummaryEntries: summaryEntries(parseObject(item.inputSummary)),
  outputSummaryEntries: summaryEntries(parseObject(item.outputSummary)),
  modelDisplay: item.modelDisplay || `${item.modelCode || '-'}@${item.modelVersion || '-'}`,
  skillDisplay: item.skillDisplay || (item.skillCode ? `${item.skillCode}@${item.skillVersion || '-'}` : '-'),
  promptDisplay: item.promptDisplay || (item.promptCode ? `${item.promptCode}@${item.promptVersion || '-'}` : '-'),
  businessDisplay: item.businessDisplay || item.businessLabel || [item.businessType, item.businessBizId].filter(Boolean).join(' · ') || '-',
  durationDisplay: item.durationDisplay || (item.durationMs ? `${item.durationMs} ms` : '-'),
  failureDisplay: item.failureDisplay || item.errorMessage || item.errorCode || '-',
})

const parseObject = (value?: string) => {
  if (!value) return undefined
  try {
    const parsed = JSON.parse(value)
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? parsed as Record<string, unknown>
      : { value: parsed }
  } catch {
    return undefined
  }
}

const summaryEntries = (value?: Record<string, unknown>): AiModelCallAuditSummaryEntry[] => {
  if (!value) return []
  return Object.entries(value)
    .filter(([, entryValue]) => entryValue != null && typeof entryValue !== 'object')
    .slice(0, 8)
    .map(([key, entryValue]) => ({
      label: key,
      value: String(entryValue),
    }))
}
