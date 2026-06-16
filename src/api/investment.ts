import request from './request'
import type {
  InvestmentTaskDefinition,
  InvestmentTaskTriggerResult,
  InvestmentThemeSnapshot,
  InvestmentThemeSnapshotQuery,
  NewsArticle,
  NewsArticleQuery,
  PageResult,
  ScheduledTaskExecution,
  TaskExecutionQuery,
  TriggerInvestmentTaskPayload,
} from './types'

export const getNewsArticles = (data: NewsArticleQuery) =>
  request.post<never, PageResult<NewsArticle>>('/api/investment/tasks/articles/list', data)

export const getInvestmentTaskDefinitions = () =>
  request.post<never, InvestmentTaskDefinition[]>('/api/investment/tasks/definitions')

export const getTaskExecutions = (data: TaskExecutionQuery) =>
  request.post<never, PageResult<ScheduledTaskExecution>>(
    '/api/investment/tasks/executions/list',
    data,
  )

export const getInvestmentThemeSnapshots = (data: InvestmentThemeSnapshotQuery) =>
  request.post<never, PageResult<InvestmentThemeSnapshot>>(
    '/api/investment/tasks/snapshots/list',
    data,
  )

export const triggerInvestmentTask = (data: TriggerInvestmentTaskPayload) =>
  request.post<never, InvestmentTaskTriggerResult>('/api/investment/tasks/trigger', data)
