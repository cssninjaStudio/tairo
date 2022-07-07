<script setup lang="ts">
export interface DocSectionProps {
  id: string
  title: string
  tag?: string
}

const props = withDefaults(defineProps<DocSectionProps>(), {
  tag: undefined,
})
</script>

<template>
  <section
    :id="props.id"
    class="py-6 mb-10 border-b border-muted-200 dark:border-muted-800"
  >
    <div class="flex items-center mb-4">
      <BaseHeading
        as="h2"
        size="xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>
      <span
        v-if="props.tag"
        class="hidden lg:block flex-none uppercase bg-muted-200 dark:bg-muted-800 text-muted-600 dark:text-muted-500 text-xs tracking-wide font-semibold px-2 py-1.5 rounded-md ml-3"
      >
        {{ props.tag }}
      </span>
    </div>

    <slot></slot>
  </section>
</template>
