export const userStatusOptions = [
  { label: '启用', value: 'ACTIVE', color: 'success' },
  { label: '禁用', value: 'DISABLED', color: 'default' },
  { label: '锁定', value: 'LOCKED', color: 'error' },
] as const

export const kycStatusOptions = [
  { label: '未认证', value: 'UNVERIFIED', color: 'default' },
  { label: '已认证', value: 'VERIFIED', color: 'success' },
  { label: '审核中', value: 'REVIEWING', color: 'processing' },
  { label: '已拒绝', value: 'REJECTED', color: 'error' },
] as const
