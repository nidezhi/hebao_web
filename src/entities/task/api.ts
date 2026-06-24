import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type {
  InvestmentTaskDefinitionDto,
  InvestmentTaskTriggerResultDto,
  ScheduledTaskExecutionDto,
  TaskExecutionListRequest,
  TriggerInvestmentTaskRequest,
} from './model'

export const listTaskDefinitions = () =>
  postJson<InvestmentTaskDefinitionDto[]>(endpoints.task.definitions, {})

export const listTaskExecutions = (data: TaskExecutionListRequest) =>
  postJson<PageResult<ScheduledTaskExecutionDto>, TaskExecutionListRequest>(endpoints.task.executions, data)

export const triggerInvestmentTask = (data: TriggerInvestmentTaskRequest) =>
  postJson<InvestmentTaskTriggerResultDto, TriggerInvestmentTaskRequest>(endpoints.task.trigger, data)

export const saveTaskDefinition = (data: Record<string, unknown>) =>
  postJson<InvestmentTaskDefinitionDto, Record<string, unknown>>(endpoints.task.saveDefinition, data)

export const listTaskArticles = (data: Record<string, unknown>) =>
  postJson<PageResult<Record<string, unknown>>, Record<string, unknown>>(endpoints.task.articles, data)

export const listTaskArticleRelations = (data: Record<string, unknown>) =>
  postJson<PageResult<Record<string, unknown>>, Record<string, unknown>>(endpoints.task.articleRelations, data)

export const listTaskSnapshots = (data: Record<string, unknown>) =>
  postJson<PageResult<Record<string, unknown>>, Record<string, unknown>>(endpoints.task.snapshots, data)
