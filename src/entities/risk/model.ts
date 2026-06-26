import type { PageQuery } from '@/shared/api/types'

export type RiskCheckResult = 'PASS' | 'WARN' | 'REJECT' | string

export interface RiskCheckDto {
  bizId: string
  userBizId?: string
  targetType?: string
  targetBizId?: string
  businessType?: string
  businessBizId?: string
  ruleCode?: string
  checkResult?: RiskCheckResult
  riskLevel?: string
  reasonCode?: string
  reasonMessage?: string
  detail?: string
  checkedAt?: string
  createdAt?: string
}

export interface RiskCheckListRequest extends PageQuery {
  targetType?: string
  targetBizId?: string
  businessType?: string
  businessBizId?: string
  userBizId?: string
  checkResult?: string
  riskLevel?: string
  reasonCode?: string
}
