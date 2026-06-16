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
  request.post<never, PageResult<User>>('/api/admin/users/list', params)

export const getUser = (bizId: string) =>
  request.post<never, User>('/api/admin/users/detail', { bizId })

export const createUser = (data: CreateUserPayload) =>
  request.post<never, User>('/api/admin/users/create', data)

export const deleteUser = (bizId: string) =>
  request.post<never, void>('/api/admin/users/delete', { bizId })

export const updateUserContact = (bizId: string, data: UpdateContactPayload) =>
  request.post<never, User>('/api/admin/users/update', { bizId, ...data })

export const updateUserStatus = (bizId: string, status: UserStatus) =>
  request.post<never, User>('/api/admin/users/status', { bizId, status })

export const updateUserKycStatus = (bizId: string, kycStatus: KycStatus) =>
  request.post<never, User>('/api/admin/users/kyc-status', { bizId, kycStatus })

export const updateUserRiskLevel = (bizId: string, riskLevel?: number) =>
  request.post<never, User>('/api/admin/users/risk-level', { bizId, riskLevel })
