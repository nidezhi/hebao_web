import request from './request'
import type {
  AiModel,
  AiModelBizIdPayload,
  AiModelQuery,
  AiModelStatusPayload,
  PageResult,
  SaveAiModelPayload,
} from './types'

export const getAiModels = (data: AiModelQuery) =>
  request.post<never, PageResult<AiModel>>('/api/ai/models/list', data)

export const getAiModelDetail = (data: AiModelBizIdPayload) =>
  request.post<never, AiModel>('/api/ai/models/detail', data)

export const saveAiModel = (data: SaveAiModelPayload) =>
  request.post<never, AiModel>('/api/ai/models/save', data)

export const changeAiModelStatus = (data: AiModelStatusPayload) =>
  request.post<never, AiModel>('/api/ai/models/status', data)

export const archiveAiModel = (data: AiModelBizIdPayload) =>
  request.post<never, AiModel>('/api/ai/models/archive', data)
