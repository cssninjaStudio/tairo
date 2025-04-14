<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const { currentSubsidebarId } = useLayoutSidebarContext()
</script>

<template>
  <div v-if="props.value === currentSubsidebarId" class="relative z-0 flex flex-col w-(--tairo-sidebar-subsidebar-width) h-full bg-white dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
    <slot />
  </div>
</template>
