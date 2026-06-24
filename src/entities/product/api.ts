import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type { ProductDto, ProductListRequest } from './model'

export const listProducts = (data: ProductListRequest) =>
  postJson<PageResult<ProductDto>, ProductListRequest>(endpoints.product.list, data)

export const getProductDetail = (bizId: string) =>
  postJson<ProductDto, BizIdRequest>(endpoints.product.detail, { bizId })
