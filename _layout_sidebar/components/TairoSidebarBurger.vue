<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

const sidebar = reactive(useSidebar())
</script>

<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center"
    @click="sidebar.toggle"
  >
    <div class="relative h-5 w-5" :class="sidebar.isOpen ? 'scale-90' : ''">
      <span
        class="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
        :class="sidebar.isOpen ? '-rotate-45 max-w-[75%] top-1' : 'top-0.5'"
      ></span>
      <span
        class="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"
        :class="sidebar.isOpen ? 'opacity-0 translate-x-4' : ''"
      ></span>
      <span
        class="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
        :class="sidebar.isOpen ? 'rotate-45 max-w-[75%] bottom-1' : 'bottom-0'"
      ></span>
    </div>
  </button>
</template>
