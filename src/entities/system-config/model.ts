import type { PageQuery } from '@/shared/api/types'

export type SystemConfigValueType = 'STRING' | 'NUMBER' | 'BOOLEAN' | 'JSON'
export type SystemConfigStatus = 'ENABLED' | 'DISABLED'

export interface SystemConfigDto {
  bizId: string
  configGroup: string
  configKey: string
  environment: string
  valueType: SystemConfigValueType
  configValue: string
  displayValue: string
  description?: string
  status: SystemConfigStatus
  version?: number
  createdAt?: string
  updatedAt?: string
}

export interface SystemConfigListRequest extends PageQuery {
  configGroup?: string
  keyword?: string
  environment?: string
  status?: SystemConfigStatus
}

export interface SaveSystemConfigRequest {
  configGroup: string
  configKey: string
  environment?: string
  valueType: SystemConfigValueType
  configValue: string | number | boolean | Record<string, unknown> | unknown[]
  description?: string
  status?: SystemConfigStatus
}
