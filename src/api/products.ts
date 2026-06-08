import request from './request'
import type {
  CreateProductPayload,
  MarketQuote,
  PageResult,
  Product,
  ProductAttribute,
  ProductQuery,
  QuoteQuery,
  SaveQuotePayload,
  TradeStatus,
  UpdateProductPayload,
} from './types'

export const getProducts = (params: ProductQuery) =>
  request.get<never, PageResult<Product>>('/api/products', { params })

export const getProduct = (bizId: string) =>
  request.get<never, Product>(`/api/products/${bizId}`)

export const createProduct = (data: CreateProductPayload) =>
  request.post<never, Product>('/api/admin/products', data)

export const updateProduct = (bizId: string, data: UpdateProductPayload) =>
  request.put<never, Product>(`/api/admin/products/${bizId}`, data)

export const deleteProduct = (bizId: string) =>
  request.delete<never, void>(`/api/admin/products/${bizId}`)

export const updateProductStatus = (bizId: string, status: TradeStatus) =>
  request.patch<never, Product>(`/api/admin/products/${bizId}/status`, { status })

export const saveProductAttribute = (bizId: string, data: ProductAttribute) =>
  request.put<never, Product>(`/api/admin/products/${bizId}/attributes`, data)

export const saveMarketQuote = (bizId: string, data: SaveQuotePayload) =>
  request.post<never, MarketQuote>(`/api/admin/products/${bizId}/quotes`, data)

export const getMarketQuotes = (bizId: string, params: QuoteQuery) =>
  request.get<never, MarketQuote[]>(`/api/products/${bizId}/quotes`, { params })

export const getLatestMarketQuote = (
  bizId: string,
  params?: Pick<QuoteQuery, 'interval' | 'sourceCode'>,
) => request.get<never, MarketQuote>(`/api/products/${bizId}/quotes/latest`, { params })
