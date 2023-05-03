<template>
  <BasePagination
    :item-per-page="8"
    :total-items="512"
    :current-page="currentPage"
    :max-links-displayed="5"
    shape="rounded"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch {}
  return 1
})
</script>
