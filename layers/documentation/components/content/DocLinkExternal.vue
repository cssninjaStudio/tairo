<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string
    text?: string
    label?: string
    to?: string
  }>(),
  {
    icon: 'lucide:external-link',
    text: '',
    label: '',
    to: '',
  },
)
</script>

<template>
  <div class="flex items-center gap-4">
    <div>
      <BaseButtonAction
        rounded="full"
        :to="props.to"
        target="_blank"
        rel="noopener"
        class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
      >
        <Icon :name="props.icon" class="size-3" />
        <span>{{ props.label }}</span>
      </BaseButtonAction>
    </div>
    <div class="hidden sm:block">
      <BaseText size="xs" class="text-muted-400">
        <ContentSlot :use="$slots.default" />
      </BaseText>
    </div>
  </div>
</template>
