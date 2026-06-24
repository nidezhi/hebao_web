import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { ConfigureRolePermissionsRequest, CreateRoleRequest, RoleDto } from './model'

export const listRoles = () =>
  postJson<RoleDto[]>(endpoints.role.list, {})

export const createRole = (data: CreateRoleRequest) =>
  postJson<RoleDto, CreateRoleRequest>(endpoints.role.create, data)

export const configureRolePermissions = (data: ConfigureRolePermissionsRequest) =>
  postJson<RoleDto, ConfigureRolePermissionsRequest>(endpoints.role.configurePermissions, data)
