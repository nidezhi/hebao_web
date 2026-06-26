import type { RiskCheckDto } from './model'
import { safeParseJson } from '@/shared/utils/format'

export const riskCheckBlocked = (check: RiskCheckDto) =>
  ['REJECT', 'WARN'].includes(check.checkResult || '')

export interface RiskCheckView extends RiskCheckDto {
  targetTypeView?: string
  targetBizIdView?: string
  checkedAtView?: string
  detailView?: Record<string, unknown>
}

export const normalizeRiskCheck = (check: RiskCheckDto): RiskCheckView => ({
  ...check,
  targetTypeView: check.businessType || check.targetType,
  targetBizIdView: check.businessBizId || check.targetBizId,
  checkedAtView: check.checkedAt || check.createdAt,
  detailView: safeParseJson<Record<string, unknown>>(check.detail),
})
