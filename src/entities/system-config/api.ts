import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { SaveSystemConfigRequest, SystemConfigDto, SystemConfigListRequest } from './model'

export const listSystemConfigs = (data: SystemConfigListRequest) =>
  postJson<PageResult<SystemConfigDto>, SystemConfigListRequest>(endpoints.systemConfig.list, data)

export const saveSystemConfig = (data: SaveSystemConfigRequest) =>
  postJson<SystemConfigDto, SaveSystemConfigRequest>(endpoints.systemConfig.save, data)
