<script setup lang="ts">
const { isMobileOpen } = useLayoutSidebarContext()
</script>

<template>
  <div
    class="fixed z-50 top-0 start-0 h-full w-auto shrink-0 flex transition-transform duration-300 ease-in-out"
    :class="[
      isMobileOpen ? 'translate-x-0' : '-translate-x-full xl:-translate-x-0',
    ]"
  >
    <slot />
  </div>
</template>
