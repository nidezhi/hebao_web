import type { PageQuery } from '@/shared/api/types'

export interface AiModelBindingDto {
  bizId: string
  scenarioCode: string
  scenarioName: string
  modelCode: string
  providerCode?: string
  environment?: string
  enabled?: boolean
  config?: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export interface AiModelBindingListRequest extends PageQuery {
  scenarioCode?: string
  modelCode?: string
  providerCode?: string
  environment?: string
  enabled?: boolean
}

export interface SaveAiModelBindingRequest {
  scenarioCode: string
  scenarioName: string
  modelCode: string
  providerCode?: string
  environment?: string
  enabled?: boolean
  config?: string
  description?: string
}
