<script setup lang="ts">
const props = defineProps<{
  to?: any
  label?: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="relative mt-1 flex gap-x-3 h-8 w-full items-center rounded-lg px-3 text-muted-500 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900 outline-none focus-visible:nui-focus focus-visible:ring-inset"
    exact-active-class="text-muted-900 dark:text-white underline underline-offset-3 decoration-muted-400 dark:decoration-muted-600"
  >
    <span class="block size-1 rounded-full bg-muted-300 dark:bg-muted-800" />
    <span class="text-[0.8rem]">
      <slot>
        {{ props.label }}
      </slot>
    </span>
  </NuxtLink>
</template>
