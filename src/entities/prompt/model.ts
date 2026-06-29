import type { PageQuery } from '@/shared/api/types'

export type PromptStatus = 'DRAFT' | 'VALIDATING' | 'ACTIVE' | 'RETIRED'

export interface AiPromptVariableDto {
  bizId?: string
  promptBizId?: string
  variableName: string
  sourcePath?: string
  required?: boolean
  description?: string
  previewValueType?: 'text' | 'textarea' | 'json'
  previewDefaultValue?: string
  previewExampleValue?: string
  createdAt?: string
}

export interface AiPromptOutputSchemaDto {
  bizId?: string
  promptBizId?: string
  schemaVersion: string
  schemaJson: string
  createdAt?: string
}

export interface AiPromptTemplateDto {
  bizId: string
  promptCode: string
  promptVersion: string
  scenario: string
  templateName: string
  templateContent: string
  status: PromptStatus
  description?: string
  variables: AiPromptVariableDto[]
  outputSchemas: AiPromptOutputSchemaDto[]
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export interface AiPromptListRequest extends PageQuery {
  promptCode?: string
  scenario?: string
  status?: PromptStatus
}

export interface AiPromptPreviewRequest {
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  variables?: Record<string, string>
}

export interface AiPromptPreviewDto {
  promptBizId: string
  promptCode: string
  promptVersion: string
  scenario?: string
  renderedPrompt: string
  missingVariables?: string[]
  readyForModel?: boolean
  displayMessage?: string
}
