<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text: string
    icon: string
    indicator?: boolean
  }>(),
  {
    title: undefined,
  },
)
</script>

<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="sm"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <div class="relative">
        <Icon :name="props.icon" class="text-muted-400 size-4" />
        <div v-if="indicator" class="absolute -end-0.5 -top-0.5">
          <span class="relative flex size-2">
            <span
              class="bg-primary-400 absolute inline-flex size-full animate-ping rounded-full opacity-75"
            />
            <span
              class="bg-primary-500 relative inline-flex size-2 rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
    <div>
      <BaseParagraph size="xs">
        <span class="text-muted-600 dark:text-muted-400">
          {{ props.text }}
        </span>
      </BaseParagraph>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
