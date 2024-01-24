<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="bg-primary-700 flex size-9 items-center justify-center rounded-full transition-all duration-300"
    @click="open('language')"
  >
    <img
      class="size-7 rounded-full"
      src="/img/icons/flags/united-states-of-america.svg"
      alt="flag icon"
    >
  </button>
</template>
