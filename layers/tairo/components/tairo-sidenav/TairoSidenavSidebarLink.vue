<script setup lang="ts">
const { to, icon, label, count } = defineProps<{
  to?: string
  icon?: string
  label?: string
  count?: string | number
}>()

const route = useRoute()
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
    exact-active-class="text-muted-900 dark:text-white before:bg-muted-100 dark:before:bg-muted-800"
  >
    <slot>
      <Icon
        v-if="icon"
        :name="icon"
        class="relative size-5 shrink-0"
        :class="to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
      />
      <span class="relative truncate text-sm">{{ label }}</span>
      <span
        v-if="count"
        class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
      >{{ count }}
      </span>
    </slot>
  </NuxtLink>
  <button
    v-else
    type="button"
    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
  >
    <slot>
      <Icon
        v-if="icon"
        :name="icon"
        class="relative size-5 shrink-0"
        :class="to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
      />
      <span class="relative truncate text-sm">{{ label }}</span>
      <span
        v-if="count"
        class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
      >{{ count }}
      </span>
    </slot>
  </button>
</template>
