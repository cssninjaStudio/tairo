<script setup lang="ts">
const { close } = usePanels()

const props = defineProps<{
  task: () => {}
}>()
</script>

<template>
  <div
    class="border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        Task Details
      </h2>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="h-6 w-6" />
      </button>
    </div>

    <div class="relative h-[calc(100%_-_64px)] w-full px-10 py-5">
      <div>
        <h4
          class="mb-4 font-sans text-xs font-semibold uppercase text-muted-400"
        >
          Overview
        </h4>
      </div>
    </div>
  </div>
</template>
