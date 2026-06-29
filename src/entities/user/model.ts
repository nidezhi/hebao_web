import type { PageQuery } from '@/shared/api/types'

export type UserStatus = 'DISABLED' | 'ACTIVE' | 'LOCKED' | string
export type KycStatus = 'UNVERIFIED' | 'VERIFIED' | 'REVIEWING' | 'REJECTED' | string

export interface UserDto {
  bizId: string
  userNo?: string
  username: string
  email?: string
  phone?: string
  nickname?: string
  avatarUrl?: string
  status?: UserStatus
  kycStatus?: KycStatus
  riskLevel?: number
  roles?: string[]
  permissions?: string[]
  registeredAt?: string
  lastLoginAt?: string
}

export interface AdminUserListRequest extends PageQuery {
  keyword?: string
  status?: UserStatus
  kycStatus?: KycStatus
  riskLevel?: number
}

export interface AdminCreateUserRequest {
  username: string
  password: string
  email?: string
  phone?: string
  nickname?: string
  status?: UserStatus
}

export interface UpdateUserRequest {
  bizId?: string
  email?: string
  phone?: string
  nickname?: string
}

export interface PreferenceDto {
  key: string
  valueType?: 'BOOLEAN' | 'NUMBER' | 'STRING' | 'JSON' | string
  value: unknown
  updatedAt?: string
}
