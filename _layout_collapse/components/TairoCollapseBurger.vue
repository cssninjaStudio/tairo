<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

const collapse = reactive(useCollapse())
const { lg } = useTailwindBreakpoints()
</script>

<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center"
    @click="collapse.toggle"
  >
    <div
      class="relative h-5 w-5"
      :class="[
        collapse.isOpen && lg ? 'scale-90' : '',
        collapse.isMobileOpen && !lg ? 'scale-90' : '',
      ]"
    >
      <span
        class="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
        :class="[
          collapse.isOpen && lg ? 'top-1 max-w-[75%] -rotate-45' : 'top-0.5',
          collapse.isMobileOpen && !lg
            ? 'top-1 max-w-[75%] -rotate-45'
            : 'top-0.5',
        ]"
      ></span>
      <span
        class="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"
        :class="[
          collapse.isOpen && lg ? 'translate-x-4 opacity-0' : '',
          collapse.isMobileOpen && !lg ? 'translate-x-4 opacity-0' : '',
        ]"
      ></span>
      <span
        class="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
        :class="[
          collapse.isOpen && lg ? 'bottom-1 max-w-[75%] rotate-45' : 'bottom-0',
          collapse.isMobileOpen && !lg
            ? 'bottom-1 max-w-[75%] rotate-45'
            : 'bottom-0',
        ]"
      ></span>
    </div>
  </button>
</template>
