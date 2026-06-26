import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { ClosedLoopRunDetailRequest, ClosedLoopRunDto, ClosedLoopRunListRequest } from './model'

export const listClosedLoopRuns = (data: ClosedLoopRunListRequest) =>
  postJson<PageResult<ClosedLoopRunDto>, ClosedLoopRunListRequest>(endpoints.closedLoop.runs, data)

export const getClosedLoopRunDetail = (data: ClosedLoopRunDetailRequest) =>
  postJson<ClosedLoopRunDto, ClosedLoopRunDetailRequest>(endpoints.closedLoop.detail, data)
