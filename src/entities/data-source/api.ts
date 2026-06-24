import { endpoints } from '@/shared/api/endpoints'
import { postJson } from '@/shared/api/httpClient'
import type { PageResult } from '@/shared/api/types'
import type { DataQualitySnapshotDto, DataQualitySnapshotListRequest, DataSourceDto, DataSourceListRequest } from './model'

export const listDataSources = (data: DataSourceListRequest) =>
  postJson<PageResult<DataSourceDto>, DataSourceListRequest>(endpoints.dataSource.list, data)

export const listDataQualitySnapshots = (data: DataQualitySnapshotListRequest) =>
  postJson<DataQualitySnapshotDto[], DataQualitySnapshotListRequest>(endpoints.dataSource.qualityList, data)
