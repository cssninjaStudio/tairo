<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
  prefix?: string
  icon?: string
  search?: string
}>()
</script>

<template>
  <div
    class="focus-visible:nui-focus in-data-highlighted:nui-focus in-data-highlighted:bg-muted-50 hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:in-data-highlighted:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded-md p-3"
  >
    <div class="flex grow flex-col">
      <span class="flex gap-1 items-center">
        <span
          v-if="props.prefix"
          :title="props.prefix"
          class="text-muted-500 dark:text-muted-600 text-sm line-clamp-1 max-w-[40%]"
        >
          {{ props.prefix }} >
        </span>
        <span
          v-if="props.title"
          :title="props.title"
          class="text-muted-700 line-clamp-1 dark:text-muted-500 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm"
        >
          {{ props.title }}
        </span>
      </span>
      <span
        v-if="props.subtitle"
        class="text-muted-400 dark:text-muted-500 line-clamp-1 text-sm"
      >
        {{ props.subtitle }}
      </span>
    </div>
    <div v-if="props.icon" class="shrink-0">
      <Icon
        :name="props.icon"
        class="size-5 text-primary-500"
      />
    </div>
  </div>
</template>
