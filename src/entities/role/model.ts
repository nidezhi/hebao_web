export interface RoleDto {
  roleCode: string
  roleName: string
  description?: string
  roleType?: string
  enabled?: boolean
  permissions?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface CreateRoleRequest {
  roleCode: string
  roleName: string
  description?: string
}

export interface ConfigureRolePermissionsRequest {
  roleCode: string
  permissions: string[]
}
