<script setup lang="ts">
const props = defineProps<{
  shape?: 'straight' | 'rounded' | 'curved'
}>()
</script>

<template>
  <div class="w-full">
    <div class="relative w-full flex items-center gap-2">
      <BaseInput
        icon="lucide:search"
        placeholder="Search"
        :shape="props.shape"
        :classes="{
          wrapper: 'w-full',
          input: 'pr-24 bg-muted-100 focus:bg-white dark:focus:bg-muted-900',
        }"
      />
      <button
        type="button"
        class="absolute top-1 right-1 h-8 inline-flex items-center justify-center px-4 font-sans text-sm text-white bg-primary-500"
        :class="[
          props.shape === 'rounded' ? 'rounded' : '',
          props.shape === 'curved' ? 'rounded-lg' : '',
        ]"
      >
        <span>Go</span>
      </button>
    </div>
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        class="font-sans font-medium text-xs inline-flex justify-center items-center h-6 px-3 rounded-full text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40"
      >
        #Europe
      </span>
      <span
        class="font-sans font-medium text-xs inline-flex justify-center items-center h-6 px-3 rounded-full text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40"
      >
        #Asia
      </span>
      <span
        class="font-sans font-medium text-xs inline-flex justify-center items-center h-6 px-3 rounded-full text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40"
      >
        #America
      </span>
    </div>
  </div>
</template>
