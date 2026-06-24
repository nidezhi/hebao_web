import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type {
  AdminCreateUserRequest,
  AdminUserListRequest,
  PreferenceDto,
  UpdateUserRequest,
  UserDto,
} from './model'

export const listUsers = (data: AdminUserListRequest) =>
  postJson<PageResult<UserDto>, AdminUserListRequest>(endpoints.user.list, data)

export const getUserDetail = (bizId: string) =>
  postJson<UserDto, BizIdRequest>(endpoints.user.detail, { bizId })

export const createUser = (data: AdminCreateUserRequest) =>
  postJson<UserDto, AdminCreateUserRequest>(endpoints.user.create, data)

export const updateUser = (data: UpdateUserRequest & { bizId: string }) =>
  postJson<UserDto, UpdateUserRequest & { bizId: string }>(endpoints.user.update, data)

export const updateMe = (data: UpdateUserRequest) =>
  postJson<UserDto, UpdateUserRequest>(endpoints.user.updateMe, data)

export const changeMyPassword = (data: { currentPassword: string; newPassword: string }) =>
  postJson<void, { currentPassword: string; newPassword: string }>(endpoints.user.changeMyPassword, data)

export const listMyPreferences = () =>
  postJson<PreferenceDto[]>(endpoints.user.preferences, {})

export const setMyPreference = (data: PreferenceDto) =>
  postJson<PreferenceDto, PreferenceDto>(endpoints.user.setPreference, data)

export const deleteMyPreference = (key: string) =>
  postJson<void, { key: string }>(endpoints.user.deletePreference, { key })

export const deleteUser = (bizId: string) =>
  postJson<void, BizIdRequest>(endpoints.user.delete, { bizId })

export const updateUserStatus = (data: { bizId: string; status: string }) =>
  postJson<UserDto, { bizId: string; status: string }>(endpoints.user.status, data)

export const updateUserKycStatus = (data: { bizId: string; kycStatus: string }) =>
  postJson<UserDto, { bizId: string; kycStatus: string }>(endpoints.user.kycStatus, data)

export const updateUserRiskLevel = (data: { bizId: string; riskLevel: number }) =>
  postJson<UserDto, { bizId: string; riskLevel: number }>(endpoints.user.riskLevel, data)
