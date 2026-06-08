import axios, { type AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

const request = axios.create({
  baseURL: '',
  timeout: 10_000,
  withCredentials: true,
})

request.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<unknown>>) => {
    const result = response.data

    if (result.code !== 0 && result.code !== 200) {
      message.error(result.message || '请求处理失败')
      return Promise.reject(new Error(result.message || '请求处理失败'))
    }

    // Axios 的调用泛型声明由各 API 方法指定，运行时统一解包业务 data。
    return result.data as AxiosResponse
  },
  (error) => {
    if (error.response?.status !== 401) {
      message.error(error.response?.data?.message || '请求失败，请稍后重试')
    }
    return Promise.reject(error)
  },
)

export default request
