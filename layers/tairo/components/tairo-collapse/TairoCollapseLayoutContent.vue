<script setup lang="ts">
const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <div
    class="w-full bg-muted-50 dark:bg-muted-900 transition-[width,margin] duration-200"
    :class="[
      isCollapsed ? 'xl:w-[calc(100%-var(--tairo-collapse-width-collapsed))] xl:ms-[var(--tairo-collapse-width-collapsed)]' : 'xl:w-[calc(100%-var(--tairo-collapse-width-open))] xl:ms-[var(--tairo-collapse-width-open)]',
    ]"
  >
    <slot />
  </div>
</template>
