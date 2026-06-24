import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type { ProductDto, ProductListRequest } from './model'

export const listProducts = (data: ProductListRequest) =>
  postJson<PageResult<ProductDto>, ProductListRequest>(endpoints.product.list, data)

export const getProductDetail = (bizId: string) =>
  postJson<ProductDto, BizIdRequest>(endpoints.product.detail, { bizId })

export const createProduct = (data: Record<string, unknown>) =>
  postJson<ProductDto, Record<string, unknown>>(endpoints.product.create, data)

export const updateProduct = (data: Record<string, unknown>) =>
  postJson<ProductDto, Record<string, unknown>>(endpoints.product.update, data)

export const deleteProduct = (bizId: string) =>
  postJson<void, BizIdRequest>(endpoints.product.delete, { bizId })

export const updateProductStatus = (data: Record<string, unknown>) =>
  postJson<ProductDto, Record<string, unknown>>(endpoints.product.status, data)

export const saveProductAttribute = (data: Record<string, unknown>) =>
  postJson<ProductDto, Record<string, unknown>>(endpoints.product.saveAttribute, data)

export const saveProductInvestmentProfile = (data: Record<string, unknown>) =>
  postJson<ProductDto, Record<string, unknown>>(endpoints.product.saveInvestmentProfile, data)

export const listProductQuoteHistory = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>[], Record<string, unknown>>(endpoints.marketQuote.history, data)

export const getLatestProductQuote = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.marketQuote.latest, data)

export const saveProductQuote = (data: Record<string, unknown>) =>
  postJson<Record<string, unknown>, Record<string, unknown>>(endpoints.marketQuote.save, data)
