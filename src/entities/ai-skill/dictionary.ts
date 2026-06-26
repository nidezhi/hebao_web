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
