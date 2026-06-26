import type { PageQuery } from '@/shared/api/types'
import type { AiModelSkillBindingDto } from '@/entities/ai-model-skill/model'

export type AiModelStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED' | string

export interface AiModelDto {
  bizId: string
  modelCode: string
  modelVersion: string
  modelName: string
  modelType: string
  provider?: string
  artifactUri?: string
  modelConfig?: string
  metrics?: string
  skills?: AiModelSkillBindingDto[]
  status?: AiModelStatus
  activatedAt?: string
  retiredAt?: string
  createdAt?: string
  updatedAt?: string
}

export interface AiModelListRequest extends PageQuery {
  modelCode?: string
  modelType?: string
  provider?: string
  status?: AiModelStatus
}
