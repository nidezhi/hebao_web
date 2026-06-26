<template>
  <a-card class="page-card" :bordered="false" title="待处理队列">
    <a-list :data-source="items" size="small">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :title="item.title" :description="item.description" />
          <a-tag :color="item.color">{{ item.level }}</a-tag>
        </a-list-item>
      </template>
      <template #empty>
        <EmptyEvidence description="暂无待处理事项；没有补造提醒。" />
      </template>
    </a-list>
  </a-card>
</template>

<script setup lang="ts">
import EmptyEvidence from '@/shared/components/visual/EmptyEvidence.vue'

defineProps<{
  items: Array<{
    title: string
    description: string
    level: string
    color: string
  }>
}>()
</script>
