import type { PageQuery } from '@/shared/api/types'

export type QualityLevel = 'HIGH' | 'MEDIUM' | 'LOW' | 'DEMO_ONLY' | string

export interface DataQualitySnapshotDto {
  bizId: string
  sourceCode: string
  dataType: string
  qualityScore?: number
  missingRate?: number
  duplicateRate?: number
  freshnessScore?: number
  sampleCount?: number
  snapshotTime?: string
  detail?: string
}

export interface DataSourceHealthDto {
  sourceCode: string
  lastSuccessAt?: string
  lastFailureAt?: string
  successRate?: number
  avgLatencyMs?: number
  failureReason?: string
  sampleCount?: number
  updatedAt?: string
}

export interface DataSourceDto {
  bizId: string
  sourceCode: string
  sourceName: string
  sourceType: string
  trustLevel: string
  baseUrl?: string
  enabled: boolean
  fetchFrequency?: string
  owner?: string
  description?: string
  health?: DataSourceHealthDto
  latestQuality?: DataQualitySnapshotDto
  qualityLevel?: QualityLevel
  displayMessage?: string
  createdAt?: string
  updatedAt?: string
}

export interface DataSourceListRequest extends PageQuery {
  keyword?: string
  sourceType?: string
  trustLevel?: string
  enabled?: boolean
}

export interface DataQualitySnapshotListRequest {
  sourceCode: string
  dataType?: string
  limit?: number
}

export interface DiscoverDataSourcesRequest {
  marketScope?: string
  assetClass?: string
  dataTypes?: string
  topicKeywords?: string
  collectionDirection?: string
  skillCode?: string
  preferredTrustLevels?: string
  candidateLimit?: number
  environment?: string
  includeDisabledCandidates?: boolean
}

export interface DataSourceDiscoveryCandidateDto {
  sourceCode: string
  sourceName: string
  sourceType: string
  trustLevel: string
  baseUrl?: string
  fetchFrequency?: string
  owner?: string
  description?: string
  recommendedTaskType?: string
  suggestedParameters?: Record<string, unknown>
  fieldMappings?: Record<string, unknown>
  collectionPlan?: string
  qualityPolicy?: string
  confidence?: number
  reasons?: string[]
  requiresReview?: boolean
}

export interface DataSourceDiscoveryDto {
  scenarioCode?: string
  collectionDirection?: string
  modelCode?: string
  providerCode?: string
  environment?: string
  marketScope?: string
  assetClass?: string
  dataTypes?: string
  topicKeywords?: string
  modelBindingConfig?: Record<string, unknown>
  skillCode?: string
  skillVersion?: string
  skillInstruction?: string
  candidates?: DataSourceDiscoveryCandidateDto[]
  reviewPolicy?: string
  promptPreview?: string
}
