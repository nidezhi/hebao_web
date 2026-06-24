import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { AiModelDto, AiModelListRequest } from './model'

export const listAiModels = (data: AiModelListRequest) =>
  postJson<PageResult<AiModelDto>, AiModelListRequest>(endpoints.aiModel.list, data)

export const getAiModel = (bizId: string) =>
  postJson<AiModelDto, { bizId: string }>(endpoints.aiModel.detail, { bizId })

export const saveAiModel = (data: Record<string, unknown>) =>
  postJson<AiModelDto, Record<string, unknown>>(endpoints.aiModel.save, data)

export const updateAiModelStatus = (data: { bizId: string; status: string }) =>
  postJson<AiModelDto, { bizId: string; status: string }>(endpoints.aiModel.status, data)

export const archiveAiModel = (bizId: string) =>
  postJson<AiModelDto, { bizId: string }>(endpoints.aiModel.archive, { bizId })
