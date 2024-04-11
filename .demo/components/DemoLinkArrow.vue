<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    to: string
  }>(),
  {
    label: '',
  },
)
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="text-primary-500 hover:text-primary-400 group inline-flex items-center gap-2 transition-colors duration-300"
  >
    <span
      class="font-sans text-sm font-medium underline-offset-4 group-hover:underline"
    ><slot>{{ props.label }}</slot></span>
    <Icon
      name="lucide:arrow-right"
      class="size-4 transition-transform duration-300 group-hover:translate-x-1"
    />
  </NuxtLink>
</template>
