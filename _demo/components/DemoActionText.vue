<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    text: string
    label: string
    to: string
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)
</script>

<template>
  <div
    class="bg-muted-200 dark:bg-muted-800 p-6"
    :class="[
      props.shape === 'rounded' ? 'rounded-md' : '',
      props.shape === 'curved' ? 'rounded-xl' : '',
    ]"
  >
    <!-- Title -->
    <div class="mb-6">
      <BaseHeading
        as="h3"
        size="md"
        weight="light"
        lead="tight"
        class="text-muted-800 mb-2 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs">
        <span class="text-muted-500">
          {{ props.text }}
        </span>
      </BaseParagraph>
    </div>
    <!-- Action -->
    <BaseButton
      :to="props.to"
      :shape="props.shape"
      color="primary"
      class="w-full"
    >
      {{ props.label }}
    </BaseButton>
  </div>
</template>
