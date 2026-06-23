import request from './request'
import type {
  DataQualitySnapshot,
  DataQualitySnapshotQuery,
  DataSource,
  DataSourceQuery,
  PageResult,
} from './types'

export const getDataSources = (data: DataSourceQuery) =>
  request.post<never, PageResult<DataSource>>('/api/admin/data-sources/list', data)

export const getDataQualitySnapshots = (data: DataQualitySnapshotQuery) =>
  request.post<never, DataQualitySnapshot[]>('/api/admin/data-sources/quality/list', data)
