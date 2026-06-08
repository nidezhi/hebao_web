import request from './request'
import type {
  CreateUserPayload,
  KycStatus,
  PageResult,
  UpdateContactPayload,
  User,
  UserQuery,
  UserStatus,
} from './types'

export const getUsers = (params: UserQuery) =>
  request.get<never, PageResult<User>>('/api/admin/users', { params })

export const getUser = (bizId: string) =>
  request.get<never, User>(`/api/admin/users/${bizId}`)

export const createUser = (data: CreateUserPayload) =>
  request.post<never, User>('/api/admin/users', data)

export const deleteUser = (bizId: string) =>
  request.delete<never, void>(`/api/admin/users/${bizId}`)

export const updateUserContact = (bizId: string, data: UpdateContactPayload) =>
  request.patch<never, User>(`/api/admin/users/${bizId}`, data)

export const updateUserStatus = (bizId: string, status: UserStatus) =>
  request.patch<never, User>(`/api/admin/users/${bizId}/status`, { status })

export const updateUserKycStatus = (bizId: string, kycStatus: KycStatus) =>
  request.patch<never, User>(`/api/admin/users/${bizId}/kyc-status`, { kycStatus })

export const updateUserRiskLevel = (bizId: string, riskLevel?: number) =>
  request.patch<never, User>(`/api/admin/users/${bizId}/risk-level`, { riskLevel })
