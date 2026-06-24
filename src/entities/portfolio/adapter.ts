import type { MockPortfolioDto } from './model'

export const portfolioStatusText = (status?: number) => {
  if (status === 1) return '正常'
  if (status === 2) return '冻结'
  if (status === 0) return '关闭'
  return '-'
}

export const portfolioIsActive = (portfolio: MockPortfolioDto) =>
  portfolio.status === 1
