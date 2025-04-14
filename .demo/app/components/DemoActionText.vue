<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    text: string
    label: string
    to: string
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: 'sm',
  },
)
</script>

<template>
  <div
    class="bg-muted-200 dark:bg-muted-950/60 p-4 md:p-6"
    :class="[
      props.rounded === 'sm' ? 'rounded-md' : '',
      props.rounded === 'md' ? 'rounded-lg' : '',
      props.rounded === 'lg' ? 'rounded-xl' : '',
    ]"
  >
    <!-- Title -->
    <div class="mb-6">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="text-muted-900 mb-2 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="sm">
        <span class="text-muted-600 dark:text-muted-400">
          {{ props.text }}
        </span>
      </BaseParagraph>
    </div>
    <!-- Action -->
    <BaseButton
      :to="props.to"
      :rounded="props.rounded"
      vairant="primary"
      class="w-full"
    >
      {{ props.label }}
    </BaseButton>
  </div>
</template>
