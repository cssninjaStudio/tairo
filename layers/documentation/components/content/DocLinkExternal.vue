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
  <div class="flex items-center justify-between">
    <div>
      <BaseText size="xs" class="text-muted-400">
        <ContentSlot :use="$slots.default"></ContentSlot>
      </BaseText>
    </div>
    <div>
      <BaseButtonAction
        shape="curved"
        :to="props.to"
        target="_blank"
        rel="noopener"
        class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
      >
        <Icon :name="props.icon" class="h-4 w-4" />
        <span>{{ props.label }}</span>
      </BaseButtonAction>
    </div>
  </div>
</template>
