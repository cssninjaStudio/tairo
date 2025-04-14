<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    icon?: string
    image: string
    value?: number
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    value: 0,
    icon: undefined,
    title: undefined,
    text: undefined,
    rounded: 'sm',
  },
)
</script>

<template>
  <div class="group relative">
    <div
      v-if="props.icon"
      class="absolute -start-2 -top-2 flex items-center justify-center"
    >
      <Icon :name="props.icon" class="text-muted-400 size-6" />
    </div>
    <div class="absolute -top-2 end-0 flex items-center justify-center">
      <BaseHeading
        as="h4"
        size="lg"
        weight="semibold"
        lead="loose"
        class="text-muted-800 dark:text-white"
      >
        <span>$799</span>
      </BaseHeading>
    </div>
    <div class="py-6">
      <div class="relative">
        <img
          class="relative z-10 mx-auto max-w-[100px]"
          :src="props.image"
          :alt="props.title"
        >
        <div
          class="bg-primary-500/10 absolute start-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:scale-150"
        />
      </div>
    </div>
    <div class="text-center">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="text-muted-900 mb-1 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs">
        <span class="text-muted-600 dark:text-muted-400">{{ props.text }}</span>
      </BaseParagraph>
    </div>
    <div class="mt-4">
      <BaseButton
        class="w-full"
        variant="primary"
        :rounded="props.rounded"
      >
        <Icon name="solar:cart-large-minimalistic-linear" class="size-4" />
        <span>Add to Cart</span>
      </BaseButton>
    </div>
  </div>
</template>
