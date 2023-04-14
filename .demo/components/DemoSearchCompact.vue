<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)

const search = ref('')
</script>

<template>
  <div class="w-full">
    <div class="relative flex w-full items-center gap-2">
      <BaseInput
        v-model="search"
        icon="lucide:search"
        placeholder="Search"
        :shape="props.shape"
        :classes="{
          wrapper: 'w-full',
          input:
            'pe-24 !bg-muted-100 dark:!bg-muted-700 focus:!bg-white dark:focus:!bg-muted-900',
        }"
      />
      <button
        type="button"
        class="bg-primary-500 absolute end-1 top-1 inline-flex h-8 items-center justify-center px-4 font-sans text-sm text-white"
        :class="[
          props.shape === 'rounded' ? 'rounded' : '',
          props.shape === 'curved' ? 'rounded-lg' : '',
        ]"
      >
        <span>Go</span>
      </button>
    </div>
    <div class="mt-2 flex flex-wrap gap-2">
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #Europe
      </span>
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #Asia
      </span>
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #America
      </span>
    </div>
  </div>
</template>
