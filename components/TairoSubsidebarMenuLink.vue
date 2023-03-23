<script setup lang="ts">
const props = defineProps<{
  name: string
  to: string
}>()
</script>

<template>
  <li class="mb-1 flex min-h-[2rem] items-center">
    <NuxtLink
      :to="props.to"
      class="flex nui-focus w-full items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
    >
      <span class="font-sans text-sm">{{ props.name }}</span>
    </NuxtLink>
  </li>
</template>
