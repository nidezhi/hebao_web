import type { PageQuery } from '@/shared/api/types'
import type { AiSkillDto } from '@/entities/ai-skill/model'

export type AiScenarioCode =
  | 'DATA_SOURCE_DISCOVERY'
  | 'PROMPT_GOVERNANCE'
  | 'AUTO_REPORT_GENERATION'
  | 'AUTO_CLOSED_LOOP_ORCHESTRATION'
  | string

export interface AiModelSkillBindingDto {
  bizId: string
  modelBizId: string
  modelCode: string
  modelVersion: string
  skillBizId: string
  skillCode: string
  skillVersion: string
  scenarioCode: AiScenarioCode
  priority?: number
  enabled?: boolean
  config?: string
  description?: string
  createdAt?: string
  updatedAt?: string
  skill?: AiSkillDto
}

export interface AiModelSkillBindingListRequest extends PageQuery {
  modelBizId?: string
  modelCode?: string
  skillCode?: string
  scenarioCode?: AiScenarioCode
  enabled?: boolean
}

export interface SaveAiModelSkillBindingRequest {
  modelBizId: string
  skillBizId: string
  scenarioCode: AiScenarioCode
  priority?: number
  enabled?: boolean
  config?: string
  description?: string
}
