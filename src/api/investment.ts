import request from './request'
import type {
  GenerateInvestmentAnalysisPayload,
  ArticleRelation,
  ArticleRelationQuery,
  InvestmentAnalysisReport,
  InvestmentAnalysisReportQuery,
  InvestmentTaskDefinition,
  InvestmentTaskTriggerResult,
  InvestmentThemeSnapshot,
  InvestmentThemeSnapshotQuery,
  NewsArticle,
  NewsArticleQuery,
  PageResult,
  SaveInvestmentTaskDefinitionPayload,
  ScheduledTaskExecution,
  TaskExecutionQuery,
  TriggerInvestmentTaskPayload,
} from './types'

export const getNewsArticles = (data: NewsArticleQuery) =>
  request.post<never, PageResult<NewsArticle>>('/api/investment/tasks/articles/list', data)

export const getArticleRelations = (data: ArticleRelationQuery) =>
  request.post<never, PageResult<ArticleRelation>>(
    '/api/investment/tasks/article-relations/list',
    data,
  )

export const getInvestmentTaskDefinitions = () =>
  request.post<never, InvestmentTaskDefinition[]>('/api/investment/tasks/definitions')

export const saveInvestmentTaskDefinition = (data: SaveInvestmentTaskDefinitionPayload) =>
  request.post<never, InvestmentTaskDefinition>('/api/investment/tasks/definitions/save', data)

export const generateInvestmentAnalysis = (data: GenerateInvestmentAnalysisPayload) =>
  request.post<never, InvestmentAnalysisReport>('/api/investment/analysis/generate', data)

export const getInvestmentAnalysisReports = (data: InvestmentAnalysisReportQuery) =>
  request.post<never, PageResult<InvestmentAnalysisReport>>(
    '/api/investment/analysis/reports/list',
    data,
  )

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
