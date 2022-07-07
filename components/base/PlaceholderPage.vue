<script setup lang="ts">
export interface PlaceholderPageProps {
  title: string
  subtitle?: string
}

const props = withDefaults(defineProps<PlaceholderPageProps>(), {
  subtitle: undefined,
})
</script>

<template>
  <div class="flex min-h-[400px] items-center justify-center">
    <div class="mx-auto w-full max-w-sm text-center">
      <div v-if="'image' in $slots" class="mx-auto max-w-xs">
        <slot name="image"></slot>
      </div>
      <BaseHeading
        as="h4"
        weight="semibold"
        size="xl"
        class="mt-4 text-muted-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>
      <p v-if="props.subtitle" class="font-alt text-muted-400">
        {{ props.subtitle }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
