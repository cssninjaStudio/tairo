<script setup lang="ts">
const props = defineProps<{
  icon: string
  label: string
  to?: string
}>()
</script>

<template>
  <BaseTag as-child variant="muted" class="inline-flex items-center ps-1 gap-2 pe-3 me-2 my-2 hover:ring-primary-500">
    <NuxtLink :to="props.to" target="_blank">
      <span class="flex items-center justify-center bg-white dark:bg-muted-950 rounded-full p-1">
        <Icon :name="props.icon" class="size-4" />
      </span>
      <span>{{ props.label }}</span>
    </NuxtLink>
  </BaseTag>
</template>
