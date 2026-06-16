import request from './request'
import type {
  ConfigureRolePermissionsPayload,
  CreateRolePayload,
  Role,
  RoleStatusPayload,
  UpdateRolePayload,
  UserRolePayload,
} from './types'

export const getRoles = () => request.post<never, Role[]>('/api/admin/roles/list')

export const createRole = (data: CreateRolePayload) =>
  request.post<never, Role>('/api/admin/roles/create', data)

export const updateRole = (data: UpdateRolePayload) =>
  request.post<never, Role>('/api/admin/roles/update', data)

export const updateRoleStatus = (data: RoleStatusPayload) =>
  request.post<never, Role>('/api/admin/roles/status', data)

export const configureRolePermissions = (data: ConfigureRolePermissionsPayload) =>
  request.post<never, Role>('/api/admin/roles/permissions/configure', data)

export const assignUserRole = (data: UserRolePayload) =>
  request.post<never, void>('/api/admin/roles/users/assign', data)

export const revokeUserRole = (data: UserRolePayload) =>
  request.post<never, void>('/api/admin/roles/users/revoke', data)
