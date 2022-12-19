<script setup lang="ts">
const { isSidebarOpened, toggleSidebar } = useSidebar()
</script>

<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center"
    @click="toggleSidebar"
  >
    <div class="relative h-5 w-5" :class="isSidebarOpened ? 'scale-90' : ''">
      <span
        class="absolute block h-0.5 w-full bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? '-rotate-45 max-w-[75%] top-1' : 'top-0.5'"
      ></span>
      <span
        class="absolute top-1/2 block h-0.5 w-full max-w-[50%] bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? 'opacity-0 translate-x-4' : ''"
      ></span>
      <span
        class="absolute block h-0.5 w-full bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? 'rotate-45 max-w-[75%] bottom-1' : 'bottom-0'"
      ></span>
    </div>
  </button>
</template>
