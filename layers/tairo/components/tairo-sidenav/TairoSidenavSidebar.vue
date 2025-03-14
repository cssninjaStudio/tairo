<script setup lang="ts">
const { isMobileOpen } = useLayoutSidenavContext()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 fixed start-0 top-0 z-50 flex h-svh w-[var(--tairo-sidenav-sidebar-width)] flex-col border-b bg-white transition-transform duration-300 xl:z-0 xl:border-b-0 xl:border-e transition-all duration-200 pointer-events-auto"
    :class="isMobileOpen ? 'translate-x-0 xl:translate-x-0' : '-translate-x-full xl:translate-x-0'"
  >
    <slot />
  </div>
</template>
