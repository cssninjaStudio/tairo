<script setup lang="ts">
const { title, to } = defineProps<{
  title: string
  to: string
}>()
</script>

<template>
  <NavigationMenuListItem
    :title="title"
    :href="to"
  >
    <slot />
  </NavigationMenuListItem>
</template>
