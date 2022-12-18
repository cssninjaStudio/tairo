<script setup lang="ts">
const route = useRoute()
const toc = useToc()

watch(
  () => route.path,
  () => {
    toc.toc.value = []
  },
  {
    immediate: true,
  },
)

definePageMeta({
  layout: 'sidebar',
  breadcrumb: {
    label: 'Components Hub',
  },
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
