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
    <div class="flex items-center justify-between mb-4">
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
        <Icon :name="props.icon" class="w-4 h-4 text-muted-400" />
        <div v-if="indicator" class="absolute top-0.5 -right-0.5">
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"
            ></span>
          </span>
        </div>
      </div>
    </div>
    <div>
      <BaseParagraph size="xs">
        <span class="text-muted-400">
          {{ props.text }}
        </span>
      </BaseParagraph>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
