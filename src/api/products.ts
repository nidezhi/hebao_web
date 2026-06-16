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
  request.post<never, PageResult<Product>>('/api/products/list', params)

export const getProduct = (bizId: string) =>
  request.post<never, Product>('/api/products/detail', { bizId })

export const createProduct = (data: CreateProductPayload) =>
  request.post<never, Product>('/api/admin/products/create', data)

export const updateProduct = (bizId: string, data: UpdateProductPayload) =>
  request.post<never, Product>('/api/admin/products/update', { bizId, ...data })

export const deleteProduct = (bizId: string) =>
  request.post<never, void>('/api/admin/products/delete', { bizId })

export const updateProductStatus = (bizId: string, status: TradeStatus) =>
  request.post<never, Product>('/api/admin/products/status', { bizId, tradeStatus: status })

export const saveProductAttribute = (bizId: string, data: ProductAttribute) =>
  request.post<never, Product>('/api/admin/products/attributes/save', { bizId, ...data })

export const saveMarketQuote = (bizId: string, data: SaveQuotePayload) =>
  request.post<never, MarketQuote>('/api/admin/products/quotes/save', { productBizId: bizId, ...data })

export const getMarketQuotes = (bizId: string, params: QuoteQuery) =>
  request.post<never, MarketQuote[]>('/api/products/quotes/history', { productBizId: bizId, ...params })

export const getLatestMarketQuote = (
  bizId: string,
  params?: Pick<QuoteQuery, 'interval' | 'sourceCode'>,
) => request.post<never, MarketQuote>('/api/products/quotes/latest', { productBizId: bizId, ...params })
