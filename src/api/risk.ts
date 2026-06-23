import request from './request'
import type { PageResult, RiskCheck, RiskCheckQuery } from './types'

export const getRiskChecks = (data: RiskCheckQuery) =>
  request.post<never, PageResult<RiskCheck>>('/api/risk/checks/list', data)
