import type { UserDto } from '@/entities/user/model'

export interface LoginRequest {
  account: string
  password: string
}

export interface RegisterRequest {
  username: string
  password: string
  email?: string
  phone?: string
  nickname?: string
}

export type AuthUserDto = UserDto
