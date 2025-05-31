<script setup lang="ts">
const { to, icon, label } = defineProps<{
  to: string
  icon?: string
  label?: string
}>()
</script>

<template>
  <div class="relative flex">
    <NuxtLink
      :to="to"
      class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
      exact-active-class="text-muted-900 dark:text-white before:bg-muted-100 dark:before:bg-muted-800"
    >
      <span class="relative mx-[9.5px] h-full w-px">
        <span
          class="bg-muted-400 group-hover:bg-muted-700 dark:bg-muted-500 dark:group-hover:bg-muted-200 absolute start-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </span>
      <span class="relative line-clamp-1 text-sm"> {{ label }}</span>
    </NuxtLink>
  </div>
</template>
