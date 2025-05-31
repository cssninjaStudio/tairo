<script setup lang="ts">
const { isCollapsed, isMobileOpen } = useLayoutCollapseContext()
</script>

<template>
  <div
    class="fixed start-0 top-0 z-50 flex flex-col h-full bg-white dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800 transition-all duration-200"
    :class="[
      isCollapsed ? 'w-[var(--tairo-collapse-width-collapsed)]' : 'w-[var(--tairo-collapse-width-open)]',
      isMobileOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full xl:translate-x-0',
    ]"
  >
    <slot />
  </div>
</template>
