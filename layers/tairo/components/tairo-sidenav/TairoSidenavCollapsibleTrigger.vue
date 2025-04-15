<script setup lang="ts">
import { CollapsibleTrigger } from 'reka-ui'

const { icon, label } = defineProps<{
  icon?: string
  label?: string
}>()
</script>

<template>
  <CollapsibleTrigger
    class="cursor-pointer text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="text-muted-400 group-hover:text-muted-700 dark:text-muted-500 dark:group-hover:text-muted-200 relative size-5 shrink-0"
    />
    <span class="relative line-clamp-1 text-sm"> {{ label }}</span>
    <Icon
      name="lucide:chevron-down"
      class="relative ms-auto size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200"
    />
  </CollapsibleTrigger>
</template>
