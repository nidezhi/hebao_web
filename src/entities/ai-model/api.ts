import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { AiModelDto, AiModelListRequest } from './model'

export const listAiModels = (data: AiModelListRequest) =>
  postJson<PageResult<AiModelDto>, AiModelListRequest>(endpoints.aiModel.list, data)
