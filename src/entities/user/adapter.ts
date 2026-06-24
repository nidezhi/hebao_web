import type { UserDto } from './model'

export const summarizeUsers = (items: UserDto[]) => ({
  total: items.length,
  active: items.filter((item) => item.status === 'ACTIVE').length,
  locked: items.filter((item) => item.status === 'LOCKED').length,
  verified: items.filter((item) => item.kycStatus === 'VERIFIED').length,
  highRisk: items.filter((item) => Number(item.riskLevel || 0) >= 4).length,
})
