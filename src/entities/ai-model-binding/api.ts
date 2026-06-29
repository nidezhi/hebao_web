import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { AiModelBindingDto, AiModelBindingListRequest, SaveAiModelBindingRequest } from './model'

export const listAiModelBindings = (data: AiModelBindingListRequest) =>
  postJson<PageResult<AiModelBindingDto>, AiModelBindingListRequest>(endpoints.aiModelBinding.list, data)

export const getAiModelBindingDetail = (data: { scenarioCode: string; environment?: string }) =>
  postJson<AiModelBindingDto, { scenarioCode: string; environment?: string }>(endpoints.aiModelBinding.detail, data)

export const saveAiModelBinding = (data: SaveAiModelBindingRequest) =>
  postJson<AiModelBindingDto, SaveAiModelBindingRequest>(endpoints.aiModelBinding.save, data)
