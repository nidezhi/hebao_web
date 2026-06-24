import axios, { type AxiosResponse } from 'axios'
import { ApiClientError, httpStatusMessage } from './errors'
import type { ApiResult } from './types'

export const httpClient = axios.create({
  baseURL: '',
  timeout: 10_000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.response.use(
  (response: AxiosResponse<ApiResult<unknown>>) => {
    const result = response.data

    if (typeof result?.code === 'number' && result.code !== 0 && result.code !== 200) {
      throw new ApiClientError(result.message || '请求处理失败', {
        status: response.status,
        code: result.code,
        raw: result,
      })
    }

    return result?.data as AxiosResponse
  },
  (error) => {
    const status = error.response?.status as number | undefined
    if (status === 401 && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('dzcom:unauthorized'))
    }
    const serverMessage = error.response?.data?.message as string | undefined
    throw new ApiClientError(serverMessage || httpStatusMessage(status) || '请求失败，请稍后重试', {
      status,
      raw: error,
    })
  },
)

export const postJson = <Response, Request extends object = Record<string, never>>(
  url: string,
  data: Request,
) => httpClient.post<never, Response>(url, data)

export const postForm = <Response, Request extends object = Record<string, never>>(
  url: string,
  data: Request,
) => httpClient.post<never, Response>(url, data, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
