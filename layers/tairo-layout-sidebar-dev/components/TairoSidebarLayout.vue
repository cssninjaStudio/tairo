<script setup lang="ts">
import { createLayoutSidebarContext, useLayoutSidebarContext } from '../composables/sidebar'

const { isOpen } = createLayoutSidebarContext()
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <slot />
    <div
      role="button"
      tabindex="0"
      class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-40 block size-full transition-opacity duration-300 xl:hidden"
      :class="
        isOpen
          ? 'opacity-50 dark:opacity-75'
          : 'opacity-0 pointer-events-none'
      "
      @click="isOpen = false"
    />
  </div>
</template>

<style>
:root {
  --icon-sidebar-width: 3.5rem;
  --subsidebar-width: 15rem;
  --content-width: calc(100% - (var(--icon-sidebar-width) + var(--subsidebar-width)));
  --content-offset: calc(var(--icon-sidebar-width) + var(--subsidebar-width));
}
</style>
