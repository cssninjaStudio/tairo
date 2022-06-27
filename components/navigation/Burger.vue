<script setup lang="ts">
const { isSidebarOpened, toggleSidebar } = useSidebar()
</script>

<template>
  <button
    class="w-10 h-10 flex items-center justify-center"
    @click="toggleSidebar"
  >
    <div class="relative w-5 h-5" :class="isSidebarOpened ? 'scale-90' : ''">
      <span
        class="absolute block w-full h-0.5 bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? '-rotate-45 max-w-[75%] top-1' : 'top-0.5'"
      ></span>
      <span
        class="absolute top-1/2 block w-full max-w-[50%] h-0.5 bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? 'opacity-0 translate-x-4' : ''"
      ></span>
      <span
        class="absolute block w-full h-0.5 bg-primary-500 transition-all duration-300"
        :class="isSidebarOpened ? 'rotate-45 max-w-[75%] bottom-1' : 'bottom-0'"
      ></span>
    </div>
  </button>
</template>
