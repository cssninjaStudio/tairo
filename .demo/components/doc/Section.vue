<script setup lang="ts">
export interface DocSectionProps {
  title: string
  tag?: string
}

const props = withDefaults(defineProps<DocSectionProps>(), {
  tag: undefined,
})
</script>

<template>
  <section class="mb-10 border-b border-muted-200 py-6 dark:border-muted-800">
    <div v-once class="mb-4 flex items-center">
      <BaseHeading
        as="h2"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        <BaseTocAnchor>{{ props.title }}</BaseTocAnchor>
      </BaseHeading>
      <span
        v-if="props.tag"
        class="ml-3 hidden flex-none rounded-md bg-muted-200 px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-600 dark:bg-muted-800 dark:text-muted-500 lg:block"
      >
        {{ props.tag }}
      </span>
    </div>

    <slot></slot>
  </section>
</template>
