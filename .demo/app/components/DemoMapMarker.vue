<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    logo?: string
    name?: string
    description?: string
    openingCount?: string
  }>(),
  {
    logo: undefined,
    name: undefined,
    description: undefined,
    openingCount: undefined,
  },
)
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="relative">
      <div class="flex items-center gap-2">
        <BaseAvatar size="xs" :src="props.logo" />
        <div class="font-sans">
          <h4
            class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"
          >
            {{ props.name }}
          </h4>
          <p class="text-muted-400 text-xs">
            Open until {{ props.openingCount }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-muted-500 dark:text-muted-400 font-sans text-xs">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
