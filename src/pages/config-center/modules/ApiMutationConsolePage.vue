<template>
  <BusinessPageShell
    title="Operation Actions 业务操作管理"
    description="跨业务操作按报告、Mock、回测、反馈分组为表单化动作。高风险动作仍二次确认。"
    :endpoints="operationMutationActions.map((action) => action.endpoint)"
    :icon="ThunderboltOutlined"
    status-text="OPERATIONS"
  >
    <a-alert class="mb-12" type="info" show-icon message="这里只承载跨业务动作；基础配置请使用各配置管理页的列表、抽屉和行操作。" />
    <ApiMutationWorkbench title="业务动作表单" :actions="operationMutationActions" />
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { ThunderboltOutlined } from '@ant-design/icons-vue'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import ApiMutationWorkbench from '@/shared/components/business/ApiMutationWorkbench.vue'
import { operationMutationActions } from '../mutationActions'
</script>
