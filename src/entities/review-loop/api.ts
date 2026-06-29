import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { ReviewLoopMetadataDto } from './model'

export const getReviewLoopMetadata = () =>
  postJson<ReviewLoopMetadataDto, { scene: string }>(endpoints.reviewLoop.metadata, { scene: 'review-loop' })
