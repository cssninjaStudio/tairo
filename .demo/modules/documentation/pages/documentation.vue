<script setup lang="ts">
// definePageMeta({
//   breadcrumb: {
//     label: 'Components Hub',
//   },
// })

const route = useRoute()
const toc = useToc()

watch(
  () => route.path,
  () => {
    toc.toc.value = []

    if (process.client) {
      document.documentElement.scrollTo({
        top: 0,
      })
    }
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
