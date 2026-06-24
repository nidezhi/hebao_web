import type { RiskCheckDto } from './model'

export const riskCheckBlocked = (check: RiskCheckDto) =>
  ['REJECT', 'WARN'].includes(check.checkResult || '')
