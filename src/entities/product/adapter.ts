import type { ProductDto } from './model'

export const isProductMockTradable = (product: ProductDto) =>
  product.investmentProfile?.mockTradable === true

export const productMockGateText = (product: ProductDto) =>
  isProductMockTradable(product)
    ? '产品画像允许 Mock 交易'
    : product.investmentProfile?.tradingNotes || '产品不可 Mock，可能由于数据质量不足、画像缺失或交易限制'

export const summarizeProducts = (items: ProductDto[]) => {
  const qualityScores = items
    .map((item) => item.investmentProfile?.dataQualityScore ?? item.dataQualityScore)
    .filter((score): score is number => typeof score === 'number')

  return {
    total: items.length,
    tradable: items.filter((item) => item.tradeStatus === 'TRADABLE').length,
    mockTradable: items.filter(isProductMockTradable).length,
    highRisk: items.filter((item) => Number(item.riskLevel || 0) >= 4).length,
    averageQuality: qualityScores.length
      ? qualityScores.reduce((sum, score) => sum + score, 0) / qualityScores.length
      : undefined,
  }
}
