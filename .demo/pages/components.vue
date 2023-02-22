<script setup lang="ts">
definePageMeta({
  layout: 'sidebar',
  breadcrumb: {
    label: 'Components Hub',
  },
})

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
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
