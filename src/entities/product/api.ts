import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { BizIdRequest, PageResult } from '@/shared/api/types'
import type {
  LatestMarketQuoteRequest,
  MarketQuoteDto,
  MarketQuoteHistoryRequest,
  ProductDto,
  ProductListRequest,
  SaveMarketQuoteRequest,
} from './model'

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

export const listProductQuoteHistory = (data: MarketQuoteHistoryRequest) =>
  postJson<MarketQuoteDto[], MarketQuoteHistoryRequest>(endpoints.marketQuote.history, data)

export const getLatestProductQuote = (data: LatestMarketQuoteRequest) =>
  postJson<MarketQuoteDto, LatestMarketQuoteRequest>(endpoints.marketQuote.latest, data)

export const saveProductQuote = (data: SaveMarketQuoteRequest) =>
  postJson<MarketQuoteDto, SaveMarketQuoteRequest>(endpoints.marketQuote.save, data)
