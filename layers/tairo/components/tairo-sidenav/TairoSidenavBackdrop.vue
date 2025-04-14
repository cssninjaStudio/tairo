<script setup lang="ts">
const { isMobileOpen } = useLayoutSidenavContext()
</script>

<template>
  <div
    role="button"
    tabindex="0"
    class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-40 block size-full transition-opacity duration-300 xl:hidden"
    :class="
      isMobileOpen
        ? 'opacity-50 dark:opacity-75 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    "
    @click="isMobileOpen = false"
  />
</template>
