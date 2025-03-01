<script setup lang="ts">
const props = defineProps<{
  to?: any
  icon?: string
  label?: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="z-10 flex h-10 w-full items-center rounded-lg pe-4 ps-2 text-muted-500 dark:text-muted-400 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900/50 gap-2 text-sm outline-none focus-visible:nui-focus focus-visible:ring-inset"
    exact-active-class="bg-muted-100 text-muted-900 dark:text-white dark:bg-muted-900/50"
  >
    <slot>
      <Icon
        v-if="props.icon"
        :name="props.icon"
        class="size-4 text-muted-500 dark:text-muted-400"
      />
      <span>{{ props.label }}</span>
    </slot>
  </NuxtLink>
</template>
