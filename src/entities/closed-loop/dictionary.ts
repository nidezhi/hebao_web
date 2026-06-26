export const closedLoopRunStatusOptions = [
  { label: '运行中', value: 'RUNNING', color: 'processing' },
  { label: '已完成', value: 'SUCCEEDED', color: 'success' },
  { label: '部分完成', value: 'PARTIAL', color: 'warning' },
  { label: '已阻断', value: 'BLOCKED', color: 'error' },
  { label: '系统失败', value: 'FAILED', color: 'error' },
] as const

export const closedLoopStepStatusOptions = [
  { label: '成功', value: 'SUCCEEDED', color: 'success' },
  { label: '跳过', value: 'SKIPPED', color: 'default' },
  { label: '阻断', value: 'BLOCKED', color: 'error' },
  { label: '失败', value: 'FAILED', color: 'error' },
] as const

export const closedLoopStepNameMap: Record<string, string> = {
  SAFETY_GUARD: '自动化安全边界',
  DATA_COLLECTION: '真实数据采集',
  REPORT_GENERATION: '自动报告生成',
  QUALITY_GATE: '数据质量门禁',
  PROMPT_CANDIDATE: 'Prompt 候选',
  MODEL_CANDIDATE: '模型候选',
  MOCK_TRADE: '自动 Mock 交易',
  BACKTEST_FEEDBACK: '回测与反馈',
  PROMPT_ACTIVATION_GUARD: 'Prompt 启用闸门',
  MODEL_ACTIVATION_GUARD: '模型启用闸门',
  REAL_TRADE_GUARD: '真实交易闸门',
  UNEXPECTED_FAILURE: '异常兜底',
}
