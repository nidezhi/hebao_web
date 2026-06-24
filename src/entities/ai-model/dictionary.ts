export const aiModelStatusOptions = [
  { label: '草稿', value: 'DRAFT', color: 'default' },
  { label: '校验中', value: 'VALIDATING', color: 'processing' },
  { label: '生效', value: 'ACTIVE', color: 'success' },
  { label: '停用', value: 'INACTIVE', color: 'warning' },
  { label: '归档', value: 'ARCHIVED', color: 'default' },
] as const
