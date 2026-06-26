import { endpoints } from '@/shared/api/endpoints'
import { postForm, postJson } from '@/shared/api/httpClient'
import type { AuthUserDto, LoginRequest, RegisterRequest } from './model'

export const login = (data: LoginRequest) =>
  postJson<AuthUserDto, LoginRequest>(endpoints.auth.login, data)

export const logout = () =>
  postForm<void>(endpoints.auth.logout, {})

export const getCurrentUser = () =>
  postJson<AuthUserDto>(endpoints.auth.me, {})

export const register = (data: RegisterRequest) =>
  postJson<AuthUserDto, RegisterRequest>(endpoints.auth.register, data)
