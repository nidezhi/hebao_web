import { message } from 'ant-design-vue'

export class ApiClientError extends Error {
  readonly status?: number
  readonly code?: number
  readonly raw?: unknown

  constructor(messageText: string, options?: { status?: number; code?: number; raw?: unknown }) {
    super(messageText)
    this.name = 'ApiClientError'
    this.status = options?.status
    this.code = options?.code
    this.raw = options?.raw
  }
}

export const httpStatusMessage = (status?: number) => {
  const messages: Record<number, string> = {
    400: '请求参数不合法，请检查筛选条件或表单内容',
    401: '登录状态已失效，请重新登录',
    403: '当前记录不可见或已无权限访问',
    404: '资源不存在或已被删除',
    409: '当前数据状态冲突，请刷新后重试',
    500: '系统错误，请稍后重试',
  }
  return status ? messages[status] : undefined
}

export const notifyApiError = (error: unknown) => {
  if (error instanceof ApiClientError) {
    message.error(error.message)
    return
  }
  message.error('请求失败，请稍后重试')
}
