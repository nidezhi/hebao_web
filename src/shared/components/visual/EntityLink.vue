<template>
  <router-link v-if="to && bizId" :to="to" class="entity-link">
    {{ label || short }}
  </router-link>
  <span v-else class="entity-link entity-link--muted">{{ label || short }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { shortId } from '@/shared/utils/format'

const props = defineProps<{
  bizId?: string
  label?: string
  route?: string
}>()

const short = computed(() => shortId(props.bizId))
const to = computed(() => props.route || '')
</script>
