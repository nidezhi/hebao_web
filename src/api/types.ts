export type { ApiResult as ApiResponse, BizIdRequest, PageQuery, PageResult, SortDirection } from '@/shared/api/types'

export interface FrameworkPageMeta {
  title: string
  section: 'deck' | 'framework' | 'standby' | 'error'
}
