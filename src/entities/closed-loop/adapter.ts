import { safeParseJson } from '@/shared/utils/format'
import type { ClosedLoopRunDto, ClosedLoopStepDto } from './model'
import { closedLoopStepNameMap } from './dictionary'

export interface ClosedLoopStepView extends ClosedLoopStepDto {
  inputJson?: unknown
  outputJson?: unknown
  displayName: string
}

export interface ClosedLoopRunView extends ClosedLoopRunDto {
  summaryJson?: unknown
  stepsView: ClosedLoopStepView[]
}

export const normalizeClosedLoopStep = (step: ClosedLoopStepDto): ClosedLoopStepView => ({
  ...step,
  displayName: step.stepName || closedLoopStepNameMap[step.stepCode] || step.stepCode,
  inputJson: safeParseJson(step.inputSummary),
  outputJson: safeParseJson(step.outputSummary),
})

export const normalizeClosedLoopRun = (run: ClosedLoopRunDto): ClosedLoopRunView => ({
  ...run,
  summaryJson: safeParseJson(run.summary),
  stepsView: [...(run.steps || [])]
    .sort((a, b) => (a.stepOrder || 0) - (b.stepOrder || 0))
    .map(normalizeClosedLoopStep),
})

export const summarizeClosedLoopRuns = (runs: ClosedLoopRunDto[]) => {
  const finished = runs.filter((run) => run.runStatus !== 'RUNNING')
  const blocked = runs.filter((run) => ['BLOCKED', 'FAILED', 'PARTIAL'].includes(run.runStatus))
  const succeeded = runs.filter((run) => run.runStatus === 'SUCCEEDED')
  const qualityScores = runs
    .map((run) => run.qualityScore)
    .filter((value): value is number => typeof value === 'number')

  return {
    total: runs.length,
    running: runs.filter((run) => run.runStatus === 'RUNNING').length,
    succeeded: succeeded.length,
    blocked: blocked.length,
    successRate: finished.length ? succeeded.length / finished.length : undefined,
    blockedRate: runs.length ? blocked.length / runs.length : undefined,
    averageQuality: qualityScores.length
      ? qualityScores.reduce((sum, value) => sum + value, 0) / qualityScores.length
      : undefined,
  }
}
