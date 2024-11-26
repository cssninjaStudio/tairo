<script setup lang="ts">
const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <button
    type="button"
    class="inline-flex size-9 items-center justify-center rounded-full transition-all duration-300"
    @click="isSearchOpen = true"
  >
    <span
      class="bg-primary-700 flex size-9 items-center justify-center rounded-full"
    >
      <Icon name="lucide:search" class="size-4 text-white" />
    </span>
  </button>
</template>
