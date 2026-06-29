export interface ReviewLoopOptionDto {
  value: string
  label: string
  description?: string
}

export interface ReviewLoopStrategyOptionDto {
  strategyCode: string
  strategyVersion: string
  displayName: string
  description?: string
  defaultBenchmarkCode?: string
  defaultLimit?: number
  defaultInitialCapital?: number
}

export type ReviewLoopFieldType = 'text' | 'textarea' | 'number' | 'date'

export interface ReviewLoopFieldSchemaDto {
  fieldKey: string
  label: string
  valueType: ReviewLoopFieldType
  required?: boolean
  defaultValue?: string
  description?: string
}

export interface ReviewLoopMetadataDto {
  strategies: ReviewLoopStrategyOptionDto[]
  benchmarkOptions: ReviewLoopOptionDto[]
  feedbackReasonOptions: ReviewLoopOptionDto[]
  evaluationScenarioOptions: ReviewLoopOptionDto[]
  generateParameterFields: ReviewLoopFieldSchemaDto[]
  backtestParameterFields: ReviewLoopFieldSchemaDto[]
  backtestMetricFields: ReviewLoopFieldSchemaDto[]
  feedbackMetadataFields: ReviewLoopFieldSchemaDto[]
  evaluationMetricFields: ReviewLoopFieldSchemaDto[]
}
