import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { ConfigureRolePermissionsRequest, CreateRoleRequest, PermissionCatalogDto, RoleDto } from './model'

export const listRoles = () =>
  postJson<RoleDto[]>(endpoints.role.list, {})

export const listPermissionCatalog = () =>
  postJson<PermissionCatalogDto[]>(endpoints.role.permissionCatalog, {})

export const createRole = (data: CreateRoleRequest) =>
  postJson<RoleDto, CreateRoleRequest>(endpoints.role.create, data)

export const configureRolePermissions = (data: ConfigureRolePermissionsRequest) =>
  postJson<RoleDto, ConfigureRolePermissionsRequest>(endpoints.role.configurePermissions, data)

export const updateRole = (data: Record<string, unknown>) =>
  postJson<RoleDto, Record<string, unknown>>(endpoints.role.update, data)

export const updateRoleStatus = (data: Record<string, unknown>) =>
  postJson<RoleDto, Record<string, unknown>>(endpoints.role.status, data)

export const assignUserRole = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.role.assignUser, data)

export const revokeUserRole = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.role.revokeUser, data)
