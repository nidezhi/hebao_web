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
