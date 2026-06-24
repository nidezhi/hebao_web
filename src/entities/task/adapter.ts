import type { ScheduledTaskExecutionDto } from './model'

export const taskExecutionFailed = (execution: ScheduledTaskExecutionDto) =>
  execution.status === 'FAILED'

export const summarizeExecutions = (items: ScheduledTaskExecutionDto[]) => ({
  total: items.length,
  running: items.filter((item) => item.status === 'RUNNING').length,
  succeeded: items.filter((item) => item.status === 'SUCCEEDED').length,
  failed: items.filter(taskExecutionFailed).length,
})
