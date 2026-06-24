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
