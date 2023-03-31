<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    icon?: string
    image: string
    value?: number
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    value: 0,
    icon: undefined,
    title: undefined,
    text: undefined,
    shape: 'rounded',
  },
)
</script>

<template>
  <div class="relative group">
    <div
      v-if="props.icon"
      class="absolute -top-2 -left-2 flex items-center justify-center"
    >
      <Icon :name="props.icon" class="w-6 h-6 text-muted-400" />
    </div>
    <div class="absolute -top-2 right-0 flex items-center justify-center">
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
          class="relative max-w-[100px] mx-auto z-10"
          :src="props.image"
          :alt="props.title"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 rounded-full group-hover:scale-150 bg-primary-500/10 transition-transform duration-300"
        ></div>
      </div>
    </div>
    <div class="text-center">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="mb-1 text-muted-800 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs">
        <span class="text-muted-400">{{ props.text }}</span>
      </BaseParagraph>
    </div>
    <div class="mt-4">
      <BaseButton
        class="w-full"
        color="primary"
        icon="lucide:shopping-cart"
        :shape="props.shape"
      >
        <span>Add to Cart</span>
      </BaseButton>
    </div>
  </div>
</template>
