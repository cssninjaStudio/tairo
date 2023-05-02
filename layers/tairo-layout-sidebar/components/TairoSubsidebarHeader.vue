<script setup lang="ts">
const { current, isOpen } = useSidebar()
</script>

<template>
  <div class="flex h-16 w-full items-center px-6">
    <div
      v-if="current"
      class="font-heading text-muted-700 text-lg font-light capitalize dark:text-white"
    >
      {{ current.title }}
    </div>
    <button
      type="button"
      class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden"
      @click="isOpen = false"
    >
      <Icon name="feather:chevron-left" class="h-6 w-6" />
    </button>
  </div>
</template>
