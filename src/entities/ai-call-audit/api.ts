import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { AiModelCallAuditDto, AiModelCallAuditListRequest } from './model'

export const listAiModelCallAudits = (data: AiModelCallAuditListRequest) =>
  postJson<PageResult<AiModelCallAuditDto>, AiModelCallAuditListRequest>(endpoints.aiModelCallAudit.list, data)

export const detailAiModelCallAudit = (bizId: string) =>
  postJson<AiModelCallAuditDto, { bizId: string }>(endpoints.aiModelCallAudit.detail, { bizId })
