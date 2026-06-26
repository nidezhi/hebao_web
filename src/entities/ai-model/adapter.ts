import { safeParseJson } from '@/shared/utils/format'
import type { AiModelDto } from './model'

export interface AiModelView extends AiModelDto {
  modelConfigView?: Record<string, unknown>
  metricsView?: Record<string, unknown>
  isClosedLoopCandidate: boolean
}

export const normalizeAiModel = (model: AiModelDto): AiModelView => ({
  ...model,
  modelConfigView: safeParseJson<Record<string, unknown>>(model.modelConfig),
  metricsView: safeParseJson<Record<string, unknown>>(model.metrics),
  isClosedLoopCandidate: Boolean(model.artifactUri?.startsWith('closed-loop://') || model.status === 'DRAFT'),
})
