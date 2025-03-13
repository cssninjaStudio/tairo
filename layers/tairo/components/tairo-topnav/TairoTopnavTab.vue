<script setup lang="ts">
const { to, label } = defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300"
    exact-active-class="!border-primary-500 !text-muted-800 dark:!text-muted-100"
  >
    <BaseText size="sm">
      {{ label }}
    </BaseText>
  </NuxtLink>
</template>
