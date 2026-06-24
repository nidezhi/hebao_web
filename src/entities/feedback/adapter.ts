import type { InvestmentFeedbackDto } from './model'

export const feedbackHasPromptSnapshot = (feedback: InvestmentFeedbackDto) =>
  Boolean(feedback.promptCode && feedback.promptVersion)
