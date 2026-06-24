import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type { AiPromptListRequest, AiPromptPreviewDto, AiPromptPreviewRequest, AiPromptTemplateDto, PromptStatus } from './model'

export const listAiPrompts = (data: AiPromptListRequest) =>
  postJson<PageResult<AiPromptTemplateDto>, AiPromptListRequest>(endpoints.prompt.list, data)

export const getAiPrompt = (bizId: string) =>
  postJson<AiPromptTemplateDto, BizIdRequest>(endpoints.prompt.detail, { bizId })

export const previewAiPrompt = (data: AiPromptPreviewRequest) =>
  postJson<AiPromptPreviewDto, AiPromptPreviewRequest>(endpoints.prompt.preview, data)

export const updateAiPromptStatus = (bizId: string, status: PromptStatus) =>
  postJson<AiPromptTemplateDto, { bizId: string; status: PromptStatus }>(endpoints.prompt.status, { bizId, status })
