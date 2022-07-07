<script setup lang="ts">
const { activeSidebar, isSidebarOpened } = useSidebar()
</script>

<template>
  <div class="flex items-center h-16 w-full px-6">
    <h2
      v-if="activeSidebar"
      class="font-heading text-lg font-semibold text-muted-700 dark:text-white capitalize"
    >
      {{ activeSidebar.name }}
    </h2>
    <button
      type="button"
      class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-muted-400 hover:text-muted-600 hover:bg-muted-100 transition-colors duration-300"
      @click="isSidebarOpened = false"
    >
      <BaseIcon name="feather:chevron-left" class="w-6 h-6" />
    </button>
  </div>
</template>
