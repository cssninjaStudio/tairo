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
  <div class="mb-10 border-b border-muted-200 py-6 dark:border-muted-800">
    <div class="mb-4 flex items-center">
      <BaseHeading
        as="h2"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
        v-if="props.title || 'title' in $slots"
      >
        <TairoTocAnchor>
          <slot name="title">{{ props.title }}</slot>
        </TairoTocAnchor>
      </BaseHeading>
      <div
        v-if="props.tag"
        class="ml-3 hidden flex-none rounded-md bg-muted-200 px-2 py-1.5 text-xs font-semibold tracking-wide text-muted-600 dark:bg-muted-800 dark:text-muted-500 lg:block"
      >
        {{ props.tag }}
      </div>

      <slot name="action"></slot>
    </div>

    <slot></slot>
  </div>
</template>
