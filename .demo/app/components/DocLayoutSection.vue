<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    tag?: string
  }>(),
  {
    title: undefined,
    tag: undefined,
  },
)
</script>

<template>
  <div class="border-muted-200 dark:border-muted-800 mb-10 border-b py-6">
    <div class="mb-4 flex items-center">
      <BaseHeading
        v-if="props.title"
        as="h2"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>
      <div
        v-if="props.tag"
        class="bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-500 ms-3 hidden flex-none rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide lg:block"
      >
        {{ props.tag }}
      </div>

      <slot name="action" />
    </div>

    <slot />
  </div>
</template>
