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
  <div
    :id="props.id"
    class="py-6 mb-10 border-b border-slate-200 dark:border-slate-800"
  >
    <div class="flex items-center mb-4">
      <BaseHeading
        tag="h2"
        size="xl"
        weight="medium"
        class="text-slate-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>
      <span
        v-if="props.tag"
        class="hidden lg:block flex-none uppercase bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500 text-xs tracking-wide font-semibold px-2 py-1.5 rounded-md ml-3"
      >
        {{ props.tag }}
      </span>
    </div>

    <slot></slot>
  </div>
</template>
