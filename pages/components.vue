<script setup lang="ts">
definePageMeta({
  layout: 'sidebar',
})

const isSidebarOpened = useSidebarOpened()
onMounted(() => {
  isSidebarOpened.value = true
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
