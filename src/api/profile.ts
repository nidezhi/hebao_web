import request from './request'
import type { Preference, UpdateContactPayload, User } from './types'

export const updateMyContact = (data: UpdateContactPayload) =>
  request.post<never, User>('/api/users/me/update', data)

export const changeMyPassword = (data: { currentPassword: string; newPassword: string }) =>
  request.post<never, void>('/api/users/me/password', data)

export const getMyPreferences = () =>
  request.post<never, Preference[]>('/api/users/me/preferences/list')

export const saveMyPreference = (key: string, value: unknown) =>
  request.post<never, Preference>('/api/users/me/preferences/set', { key, value })

export const deleteMyPreference = (key: string) =>
  request.post<never, void>('/api/users/me/preferences/delete', { key })
