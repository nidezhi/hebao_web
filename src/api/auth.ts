import request from './request'
import type { User } from './types'

export interface LoginPayload {
  account: string
  password: string
}

export interface RegisterPayload {
  username: string
  password: string
  email?: string
  phone?: string
  nickname?: string
}

export const login = (data: LoginPayload) => request.post<never, User>('/api/auth/login', data)
export const logout = () => request.post<never, void>('/api/auth/logout')
export const getCurrentUser = () => request.post<never, User>('/api/auth/me')
export const register = (data: RegisterPayload) =>
  request.post<never, User>('/api/auth/register', data)
