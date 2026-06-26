export const skillTypeOptions = [
  { label: '数据源发现', value: 'DATA_SOURCE_DISCOVERY', color: 'blue' },
  { label: 'Prompt 治理', value: 'PROMPT_GOVERNANCE', color: 'purple' },
  { label: '报告分析', value: 'REPORT_ANALYSIS', color: 'geekblue' },
  { label: '质量审计', value: 'QUALITY_AUDIT', color: 'cyan' },
  { label: '模型反馈', value: 'MODEL_FEEDBACK', color: 'orange' },
] as const

export const skillStatusOptions = [
  { label: '草稿', value: 'DRAFT', color: 'default' },
  { label: '校验中', value: 'VALIDATING', color: 'processing' },
  { label: '生效', value: 'ACTIVE', color: 'success' },
  { label: '退役', value: 'RETIRED', color: 'warning' },
  { label: '归档', value: 'ARCHIVED', color: 'default' },
] as const

export const scenarioCodeOptions = [
  { label: '数据源发现', value: 'DATA_SOURCE_DISCOVERY', color: 'blue' },
  { label: 'Prompt 治理', value: 'PROMPT_GOVERNANCE', color: 'purple' },
  { label: '自动报告生成', value: 'AUTO_REPORT_GENERATION', color: 'geekblue' },
  { label: '自动闭环编排', value: 'AUTO_CLOSED_LOOP_ORCHESTRATION', color: 'cyan' },
] as const

export const collectionDirectionOptions = [
  { label: '多源综合', value: 'MULTI_SOURCE' },
  { label: '官方披露', value: 'OFFICIAL_DISCLOSURE' },
  { label: '产品与净值', value: 'PRODUCT_NAV' },
  { label: '市场行情', value: 'MARKET_QUOTE' },
  { label: '资讯研报', value: 'NEWS_RESEARCH' },
  { label: '监管数据', value: 'REGULATORY' },
] as const

export const dataCollectionSkillCodeOptions = [
  { label: '多源综合采集 Skill', value: 'DATA_COLLECTION_MULTI_SOURCE' },
  { label: '官方披露采集 Skill', value: 'DATA_COLLECTION_OFFICIAL_DISCLOSURE' },
  { label: '产品与净值采集 Skill', value: 'DATA_COLLECTION_PRODUCT_NAV' },
  { label: '市场行情采集 Skill', value: 'DATA_COLLECTION_MARKET_QUOTE' },
  { label: '资讯研报采集 Skill', value: 'DATA_COLLECTION_NEWS_RESEARCH' },
  { label: '监管数据采集 Skill', value: 'DATA_COLLECTION_REGULATORY' },
] as const

export const directionTaskCodeOptions = [
  { label: '多源综合', value: 'llm-data-collection-multi-source' },
  { label: '官方披露', value: 'llm-official-disclosure-collection' },
  { label: '产品与净值', value: 'llm-product-nav-collection' },
  { label: '市场行情', value: 'llm-market-quote-collection' },
  { label: '资讯研报', value: 'llm-news-research-collection' },
  { label: '监管数据', value: 'llm-regulatory-collection' },
] as const

export const collectionDirectionDefaults: Record<string, {
  taskCode: string
  skillCode: string
  assetClass: string
  dataTypes: string
  topicKeywords: string
  preferredTrustLevels: string
}> = {
  MULTI_SOURCE: {
    taskCode: 'llm-data-collection-multi-source',
    skillCode: 'DATA_COLLECTION_MULTI_SOURCE',
    assetClass: 'MULTI_ASSET',
    dataTypes: 'MARKET_QUOTE,NEWS,ANNOUNCEMENT,RESEARCH,REGULATORY',
    topicKeywords: '理财产品,基金净值,ETF净值,监管披露,财经资讯',
    preferredTrustLevels: 'L1,L2,L3,L4',
  },
  OFFICIAL_DISCLOSURE: {
    taskCode: 'llm-official-disclosure-collection',
    skillCode: 'DATA_COLLECTION_OFFICIAL_DISCLOSURE',
    assetClass: 'MULTI_ASSET',
    dataTypes: 'ANNOUNCEMENT,REGULATORY',
    topicKeywords: '官方披露,公告,产品说明书,定期报告',
    preferredTrustLevels: 'L1,L2',
  },
  PRODUCT_NAV: {
    taskCode: 'llm-product-nav-collection',
    skillCode: 'DATA_COLLECTION_PRODUCT_NAV',
    assetClass: 'BANK_WMP,FUND,ETF',
    dataTypes: 'MARKET_QUOTE',
    topicKeywords: '理财产品,基金净值,ETF净值,产品风险等级',
    preferredTrustLevels: 'L1,L2,L3',
  },
  MARKET_QUOTE: {
    taskCode: 'llm-market-quote-collection',
    skillCode: 'DATA_COLLECTION_MARKET_QUOTE',
    assetClass: 'FUND,ETF,STOCK',
    dataTypes: 'MARKET_QUOTE',
    topicKeywords: '市场行情,价格,成交,估值',
    preferredTrustLevels: 'L1,L2,L3',
  },
  NEWS_RESEARCH: {
    taskCode: 'llm-news-research-collection',
    skillCode: 'DATA_COLLECTION_NEWS_RESEARCH',
    assetClass: 'MULTI_ASSET',
    dataTypes: 'NEWS,RESEARCH',
    topicKeywords: '财经资讯,研报,主题热度,市场观点',
    preferredTrustLevels: 'L3,L4',
  },
  REGULATORY: {
    taskCode: 'llm-regulatory-collection',
    skillCode: 'DATA_COLLECTION_REGULATORY',
    assetClass: 'MULTI_ASSET',
    dataTypes: 'REGULATORY',
    topicKeywords: '监管,处罚,政策,披露规则',
    preferredTrustLevels: 'L1,L2',
  },
}
