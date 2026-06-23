export const userStatusOptions = [
  { label: '正常', value: 'ACTIVE', color: 'green' },
  { label: '禁用', value: 'DISABLED', color: 'default' },
  { label: '锁定', value: 'LOCKED', color: 'red' },
] as const

export const kycStatusOptions = [
  { label: '未认证', value: 'UNVERIFIED', color: 'default' },
  { label: '审核中', value: 'REVIEWING', color: 'processing' },
  { label: '已认证', value: 'VERIFIED', color: 'success' },
  { label: '已拒绝', value: 'REJECTED', color: 'error' },
] as const

export const productTypeOptions = [
  { label: '股票', value: 'STOCK' },
  { label: '基金', value: 'FUND' },
  { label: '债券', value: 'BOND' },
  { label: 'ETF', value: 'ETF' },
  { label: '银行理财', value: 'BANK_WMP' },
  { label: '黄金', value: 'GOLD' },
  { label: 'REIT', value: 'REIT' },
] as const

export const tradeStatusOptions = [
  { label: '可交易', value: 'TRADABLE', color: 'success' },
  { label: '暂停交易', value: 'SUSPENDED', color: 'warning' },
  { label: '已禁用', value: 'DISABLED', color: 'default' },
] as const

export const quoteStatusOptions = [
  { label: '有效', value: 'VALID' },
  { label: '已修正', value: 'CORRECTED' },
  { label: '无效', value: 'INVALID' },
] as const

export const taskExecutionStatusOptions = [
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
] as const

export const qualityLevelOptions = [
  { label: '高质量', value: 'HIGH', color: 'success' },
  { label: '可用', value: 'MEDIUM', color: 'processing' },
  { label: '低质量', value: 'LOW', color: 'warning' },
  { label: '仅演示', value: 'DEMO_ONLY', color: 'default' },
] as const

export const promptStatusOptions = [
  { label: '草稿', value: 'DRAFT', color: 'default' },
  { label: '校验中', value: 'VALIDATING', color: 'processing' },
  { label: '生效', value: 'ACTIVE', color: 'success' },
  { label: '退役', value: 'RETIRED', color: 'default' },
] as const

export const riskCheckResultOptions = [
  { label: '通过', value: 'PASS', color: 'success' },
  { label: '预警', value: 'WARN', color: 'warning' },
  { label: '拒绝', value: 'REJECT', color: 'error' },
] as const

export const backtestStatusOptions = [
  { label: '待运行', value: 'PENDING', color: 'default' },
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
  { label: '已取消', value: 'CANCELLED', color: 'default' },
] as const

export const feedbackActionOptions = [
  { label: '采纳', value: 'ADOPT', color: 'success' },
  { label: '拒绝', value: 'REJECT', color: 'error' },
  { label: '观察', value: 'WATCH', color: 'warning' },
  { label: '忽略', value: 'IGNORE', color: 'default' },
] as const

export const snapshotTypeOptions = [
  { label: '收益', value: 'RETURN', color: 'success' },
  { label: '动量', value: 'MOMENTUM', color: 'processing' },
  { label: '热度', value: 'HEAT', color: 'warning' },
  { label: '资讯热度', value: 'NEWS_HEAT', color: 'warning' },
] as const

export const optionLabel = <T extends readonly { label: string; value: string }[]>(
  options: T,
  value?: string,
) => options.find((item) => item.value === value)?.label || value || '-'

export const optionColor = <
  T extends readonly { value: string; color: string }[],
>(
  options: T,
  value?: string,
) => options.find((item) => item.value === value)?.color || 'default'
