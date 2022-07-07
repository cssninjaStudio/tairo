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
  <div class="flex justify-center items-center min-h-[400px]">
    <div class="w-full max-w-sm mx-auto text-center">
      <div v-if="'image' in $slots" class="max-w-xs mx-auto">
        <slot name="image"></slot>
      </div>
      <BaseHeading
        as="h4"
        weight="semibold"
        size="xl"
        class="text-muted-800 dark:text-white mt-4"
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
