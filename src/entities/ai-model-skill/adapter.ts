import type { AiModelSkillBindingDto } from './model'

export const activeModelSkillBindings = (items: AiModelSkillBindingDto[]) =>
  items.filter((item) => item.enabled)

export const modelSkillBindingLabel = (item: AiModelSkillBindingDto) =>
  `${item.modelCode || item.modelBizId} → ${item.skillCode || item.skillBizId}`
