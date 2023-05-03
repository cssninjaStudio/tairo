<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div class="group relative">
    <div
      class="from-primary-600 absolute -inset-1 rounded-lg bg-gradient-to-r to-indigo-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 motion-reduce:hidden"
    ></div>
    <div
      class="items-top ring-muted-900/5 dark:bg-muted-950 relative flex justify-start space-x-6 rounded-xl bg-white p-5 leading-none ring-1"
    >
      <Icon :name="props.icon" class="text-primary-600 h-8 w-8 shrink-0" />
      <div class="space-y-1">
        <BaseHeading as="h3" size="md" weight="light" lead="tight">
          {{ props.title }}
        </BaseHeading>
        <BaseParagraph
          size="sm"
          lead="tight"
          class="text-muted-500 dark:text-muted-400"
        >
          <slot></slot>
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
