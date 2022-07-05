<script setup lang="ts">
const { activeSidebar, isSidebarOpened } = useSidebar()
</script>

<template>
  <div class="flex items-center h-16 w-full px-6">
    <h2
      v-if="activeSidebar"
      class="font-main text-lg font-semibold text-slate-700 dark:text-white capitalize"
    >
      {{ activeSidebar.name }}
    </h2>
    <button
      type="button"
      class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
      @click="isSidebarOpened = false"
    >
      <BaseIcon name="feather:chevron-left" class="w-6 h-6" />
    </button>
  </div>
</template>
