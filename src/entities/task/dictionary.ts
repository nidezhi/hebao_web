export const taskExecutionStatusOptions = [
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
] as const

export const ingestionTaskTypeOptions = [
  { label: '监管披露采集', value: 'REGULATORY_DISCLOSURE_COLLECTION' },
  { label: '交易所公告采集', value: 'EXCHANGE_ANNOUNCEMENT_COLLECTION' },
  { label: '理财净值刷新', value: 'WEALTH_PRODUCT_NAV_REFRESH' },
  { label: '自动投资报告', value: 'AUTO_INVESTMENT_REPORT_GENERATION' },
] as const
