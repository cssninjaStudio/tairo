<script setup lang="ts">
const route = useRoute()
const toc = useToc()

watch(
  () => route.path,
  () => {
    console.log('watch?')
    toc.toc.value = []
  },
  {
    immediate: true,
    flush: 'pre',
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
