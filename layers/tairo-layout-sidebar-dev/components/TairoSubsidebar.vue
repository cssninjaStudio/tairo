<script setup lang="ts">
import { useLayoutSidebarContext } from '../composables/sidebar'

const props = defineProps<{
  value: string
}>()

const { currentSubsidebarId } = useLayoutSidebarContext()
</script>

<template>
  <div v-if="props.value === currentSubsidebarId" class="flex flex-col w-(--subsidebar-width) h-full bg-white dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
    <slot />
  </div>
</template>
