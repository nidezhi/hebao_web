import request from './request'
import type { Preference, UpdateContactPayload, User } from './types'

export const updateMyContact = (data: UpdateContactPayload) =>
  request.patch<never, User>('/api/users/me', data)

export const changeMyPassword = (data: { currentPassword: string; newPassword: string }) =>
  request.put<never, void>('/api/users/me/password', data)

export const getMyPreferences = () =>
  request.get<never, Preference[]>('/api/users/me/preferences')

export const saveMyPreference = (key: string, value: unknown) =>
  request.put<never, Preference>(`/api/users/me/preferences/${encodeURIComponent(key)}`, {
    value,
  })

export const deleteMyPreference = (key: string) =>
  request.delete<never, void>(`/api/users/me/preferences/${encodeURIComponent(key)}`)
