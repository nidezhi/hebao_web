import type { PageQuery } from '@/shared/api/types'

export type AiCallStatus = 'STARTED' | 'SUCCEEDED' | 'FAILED' | 'BLOCKED' | string

export interface AiModelCallAuditDto {
  bizId: string
  callId: string
  operationCode: string
  callStatus: AiCallStatus
  providerCode: string
  modelCode: string
  modelVersion: string
  remoteModel?: string
  endpoint?: string
  httpMethod?: string
  httpStatus?: number
  durationMs?: number
  systemPromptHash?: string
  userPromptHash?: string
  responseHash?: string
  requestPreview?: string
  responsePreview?: string
  inputSummary?: string
  outputSummary?: string
  modelDisplay?: string
  businessDisplay?: string
  promptDisplay?: string
  skillDisplay?: string
  durationDisplay?: string
  failureDisplay?: string
  businessType?: string
  businessBizId?: string
  businessLabel?: string
  taskCode?: string
  eventId?: string
  runBizId?: string
  runNo?: string
  reportBizId?: string
  promptBizId?: string
  promptCode?: string
  promptVersion?: string
  skillBizId?: string
  skillCode?: string
  skillVersion?: string
  modelSkillBindingBizId?: string
  scenarioCode?: string
  environment?: string
  errorCode?: string
  errorMessage?: string
  createdAt?: string
  updatedAt?: string
}

export interface AiModelCallAuditListRequest extends PageQuery {
  operationCode?: string
  callStatus?: AiCallStatus
  providerCode?: string
  modelCode?: string
  modelVersion?: string
  businessType?: string
  businessBizId?: string
  taskCode?: string
  eventId?: string
  runBizId?: string
  runNo?: string
  reportBizId?: string
  promptCode?: string
  skillCode?: string
  scenarioCode?: string
  environment?: string
}
