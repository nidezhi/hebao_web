import request from './request'
import type {
  AiPromptPreview,
  AiPromptPreviewPayload,
  AiPromptQuery,
  AiPromptTemplate,
  PageResult,
  PromptStatus,
} from './types'

export const getAiPrompts = (data: AiPromptQuery) =>
  request.post<never, PageResult<AiPromptTemplate>>('/api/ai/prompts/list', data)

export const getAiPrompt = (bizId: string) =>
  request.post<never, AiPromptTemplate>('/api/ai/prompts/detail', { bizId })

export const previewAiPrompt = (data: AiPromptPreviewPayload) =>
  request.post<never, AiPromptPreview>('/api/ai/prompts/preview', data)

export const updateAiPromptStatus = (bizId: string, status: PromptStatus) =>
  request.post<never, AiPromptTemplate>('/api/ai/prompts/status', { bizId, status })
