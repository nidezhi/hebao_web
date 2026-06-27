export const taskExecutionStatusOptions = [
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '失败', value: 'FAILED', color: 'error' },
  { label: '已阻断', value: 'BLOCKED', color: 'warning' },
] as const

export const ingestionTaskTypeOptions = [
  { label: '真实产品池同步', value: 'REAL_PRODUCT_UNIVERSE_SYNC' },
  { label: '真实行情同步', value: 'REAL_MARKET_QUOTE_SYNC' },
  { label: '真实新闻同步', value: 'REAL_NEWS_SYNC' },
  { label: '真实披露同步', value: 'REAL_DISCLOSURE_SYNC' },
  { label: '真实数据质量快照', value: 'REAL_DATA_QUALITY_SNAPSHOT' },
  { label: 'AI 数据源发现', value: 'AI_DATA_SOURCE_DISCOVERY' },
  { label: '监管披露采集', value: 'REGULATORY_DISCLOSURE_COLLECTION' },
  { label: '交易所公告采集', value: 'EXCHANGE_ANNOUNCEMENT_COLLECTION' },
  { label: '理财净值刷新', value: 'WEALTH_PRODUCT_NAV_REFRESH' },
  { label: '主题动量扫描', value: 'MARKET_MOMENTUM_SCAN' },
  { label: '热门主题收益', value: 'HOT_THEME_RETURN' },
  { label: '资讯热度聚合', value: 'NEWS_HEAT_AGGREGATION' },
  { label: '自动投资报告', value: 'AUTO_INVESTMENT_REPORT_GENERATION' },
  { label: '自动 Prompt 治理', value: 'AUTO_PROMPT_GOVERNANCE' },
  { label: '自动闭环总编排', value: 'AUTO_INVESTMENT_CLOSED_LOOP_ORCHESTRATION' },
] as const
