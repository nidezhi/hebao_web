import type { AiPromptTemplateDto } from './model'

export const promptCanBeDefaultCandidate = (prompt: AiPromptTemplateDto) =>
  prompt.status === 'ACTIVE'
