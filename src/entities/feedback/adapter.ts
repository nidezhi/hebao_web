import type { AiPromptEvaluationDto, InvestmentFeedbackDto } from './model'

export const summarizeFeedbackActions = (items: InvestmentFeedbackDto[]) =>
  items.reduce<Record<string, number>>((result, item) => {
    const key = item.feedbackAction || 'UNKNOWN'
    result[key] = (result[key] || 0) + 1
    return result
  }, {})

export const averagePromptScore = (items: AiPromptEvaluationDto[]) => {
  const scores = items
    .map((item) => item.score)
    .filter((score): score is number => typeof score === 'number')
  if (!scores.length) return undefined
  return scores.reduce((sum, score) => sum + score, 0) / scores.length
}
