import type { PageQuery } from '@/shared/api/types'

export type AiSkillType =
  | 'DATA_SOURCE_DISCOVERY'
  | 'PROMPT_GOVERNANCE'
  | 'REPORT_ANALYSIS'
  | 'QUALITY_AUDIT'
  | 'MODEL_FEEDBACK'
  | string

export type AiSkillStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'RETIRED' | 'ARCHIVED' | string

export interface AiSkillDto {
  bizId: string
  skillCode: string
  skillVersion: string
  skillName: string
  skillType: AiSkillType
  status?: AiSkillStatus
  instructionContent: string
  inputSchema?: string
  outputSchema?: string
  evaluationPolicy?: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export interface AiSkillListRequest extends PageQuery {
  skillCode?: string
  skillType?: AiSkillType
  status?: AiSkillStatus
  keyword?: string
}

export interface SaveAiSkillRequest {
  skillCode: string
  skillVersion: string
  skillName: string
  skillType: AiSkillType
  status?: AiSkillStatus
  instructionContent: string
  inputSchema?: string
  outputSchema?: string
  evaluationPolicy?: string
  description?: string
}
