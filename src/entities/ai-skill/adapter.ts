import type { AiSkillDto } from './model'

export const isActiveDataSourceDiscoverySkill = (skill: AiSkillDto) =>
  skill.skillType === 'DATA_SOURCE_DISCOVERY' && skill.status === 'ACTIVE'

export const nextSkillVersion = (version?: string) => {
  const match = String(version || 'v1').match(/^v(\d+)$/i)
  return match ? `v${Number(match[1]) + 1}` : `${version || 'v1'}-copy`
}
