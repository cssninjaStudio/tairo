<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="px-1 text-muted-900 font-medium underline-offset-4 hover:underline dark:text-white"
  >
    <slot />
  </NuxtLink>
</template>
