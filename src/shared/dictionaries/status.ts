export interface DictionaryOption<T extends string = string> {
  label: string
  value: T
  color?: string
}

export const optionLabel = <T extends string>(options: readonly DictionaryOption<T>[], value?: string) =>
  options.find((option) => option.value === value)?.label || value || '-'

export const optionColor = <T extends string>(options: readonly DictionaryOption<T>[], value?: string) =>
  options.find((option) => option.value === value)?.color || 'default'

export const qualityLevelOptions = [
  { label: '高质量', value: 'HIGH', color: 'success' },
  { label: '可用', value: 'MEDIUM', color: 'processing' },
  { label: '低质量', value: 'LOW', color: 'warning' },
  { label: '仅演示', value: 'DEMO_ONLY', color: 'default' },
] as const satisfies readonly DictionaryOption[]

export const promptStatusOptions = [
  { label: '草稿', value: 'DRAFT', color: 'default' },
  { label: '校验中', value: 'VALIDATING', color: 'processing' },
  { label: '生效', value: 'ACTIVE', color: 'success' },
  { label: '退役', value: 'RETIRED', color: 'default' },
] as const satisfies readonly DictionaryOption[]

export const riskCheckResultOptions = [
  { label: '通过', value: 'PASS', color: 'success' },
  { label: '预警', value: 'WARN', color: 'warning' },
  { label: '拒绝', value: 'REJECT', color: 'error' },
] as const satisfies readonly DictionaryOption[]

export const backtestStatusOptions = [
  { label: '待运行', value: 'PENDING', color: 'default' },
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
  { label: '已取消', value: 'CANCELLED', color: 'default' },
] as const satisfies readonly DictionaryOption[]

export const feedbackActionOptions = [
  { label: '采纳', value: 'ADOPT', color: 'success' },
  { label: '拒绝', value: 'REJECT', color: 'error' },
  { label: '观察', value: 'WATCH', color: 'warning' },
  { label: '忽略', value: 'IGNORE', color: 'default' },
] as const satisfies readonly DictionaryOption[]
