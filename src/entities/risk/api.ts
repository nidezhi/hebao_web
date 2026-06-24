import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { RiskCheckDto, RiskCheckListRequest } from './model'

export const listRiskChecks = (data: RiskCheckListRequest) =>
  postJson<PageResult<RiskCheckDto>, RiskCheckListRequest>(endpoints.risk.checks, data)
