<script setup lang="ts">
const props = defineProps<{
  alt: string
  src: string
  srcDark?: string
  to?: string
}>()
</script>

<template>
  <div class="w-full">
    <NuxtLink :to="props.to" class="hover:[&>img]:!border-primary-500">
      <img
        class="border-muted-200 hover:shadow-muted-300/30 block w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:hidden"
        :src="props.src"
        :alt="props.alt"
      />

      <img
        class="border-muted-700 hover:shadow-muted-800/30 hidden w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:block"
        :src="props.srcDark || props.src"
        :alt="props.alt"
      />
    </NuxtLink>
  </div>
</template>
