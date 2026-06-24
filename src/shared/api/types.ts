export type SortDirection = 'asc' | 'desc' | 'ASC' | 'DESC'

export interface ApiResult<T> {
  code: number
  message: string
  data: T
}

export interface PageResult<T> {
  items: T[]
  total: number
  page: number
  size: number
  totalPages: number
}

export interface PageQuery {
  page?: number
  size?: number
  sort?: string
  direction?: SortDirection
}

export interface BizIdRequest {
  bizId: string
}
