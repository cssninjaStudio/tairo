<script setup lang="ts">
const { isMobileOpen } = useLayoutSidenavContext()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 fixed start-0 top-0 z-50 flex h-full w-[var(--tairo-sidenav-sidebar-width)] flex-col border-b bg-white transition-transform duration-300 lg:z-0 lg:border-b-0 lg:border-e transition-all duration-200"
    :class="isMobileOpen ? 'translate-x-0 lg:translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <slot />
  </div>
</template>
