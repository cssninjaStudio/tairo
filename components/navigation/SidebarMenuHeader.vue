<script setup lang="ts">
const { activeSidebar, isSidebarOpened } = useSidebar()
</script>

<template>
  <div class="flex h-16 w-full items-center px-6">
    <div
      v-if="activeSidebar"
      class="font-heading text-lg font-semibold capitalize text-muted-700 dark:text-white"
    >
      {{ activeSidebar.name }}
    </div>
    <button
      type="button"
      class="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 xl:hidden"
      @click="isSidebarOpened = false"
    >
      <Icon name="feather:chevron-left" class="h-6 w-6" />
    </button>
  </div>
</template>
