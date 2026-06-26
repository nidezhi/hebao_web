import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { AiSkillDto, AiSkillListRequest, AiSkillStatus, SaveAiSkillRequest } from './model'

export const listAiSkills = (data: AiSkillListRequest) =>
  postJson<PageResult<AiSkillDto>, AiSkillListRequest>(endpoints.aiSkill.list, data)

export const getAiSkillDetail = (bizId: string) =>
  postJson<AiSkillDto, { bizId: string }>(endpoints.aiSkill.detail, { bizId })

export const saveAiSkill = (data: SaveAiSkillRequest) =>
  postJson<AiSkillDto, SaveAiSkillRequest>(endpoints.aiSkill.save, data)

export const updateAiSkillStatus = (data: { bizId: string; status: AiSkillStatus }) =>
  postJson<AiSkillDto, { bizId: string; status: AiSkillStatus }>(endpoints.aiSkill.status, data)
