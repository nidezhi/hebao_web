import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  AiModelSkillBindingDto,
  AiModelSkillBindingListRequest,
  SaveAiModelSkillBindingRequest,
} from './model'

export const listAiModelSkillBindings = (data: AiModelSkillBindingListRequest) =>
  postJson<PageResult<AiModelSkillBindingDto>, AiModelSkillBindingListRequest>(endpoints.aiModelSkill.list, data)

export const getAiModelSkillBindingDetail = (bizId: string) =>
  postJson<AiModelSkillBindingDto, { bizId: string }>(endpoints.aiModelSkill.detail, { bizId })

export const listAiModelSkillBindingsByModel = (modelBizId: string) =>
  postJson<AiModelSkillBindingDto[], { modelBizId: string }>(endpoints.aiModelSkill.byModel, { modelBizId })

export const saveAiModelSkillBinding = (data: SaveAiModelSkillBindingRequest) =>
  postJson<AiModelSkillBindingDto, SaveAiModelSkillBindingRequest>(endpoints.aiModelSkill.save, data)
