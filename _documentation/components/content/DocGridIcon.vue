<script setup lang="ts">
const props = defineProps<{
  name?: string
  color?: 'success' | 'primary' | 'yellow' | 'sky' | 'pink' | 'lime'
}>()

const iconColor = computed(() => {
  switch (props.color) {
    case 'success':
      return 'bg-success-100 text-success-500'
    case 'primary':
      return 'bg-primary-100 text-primary-500'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-500'
    case 'sky':
      return 'bg-sky-100 text-sky-500'
    case 'pink':
      return 'bg-pink-100 text-pink-500'
    case 'lime':
      return 'bg-lime-100 text-lime-500'
    default:
      return 'bg-muted-100 text-muted-500'
  }
})
</script>

<template>
  <BaseCard shape="curved" class="flex items-center p-3">
    <BaseIconBox v-if="props.name" size="md" :class="iconColor">
      <Icon :name="props.name" class="h-6 w-6" />
    </BaseIconBox>
    <div class="ml-3">
      <BaseHeading
        as="h4"
        size="sm"
        weight="semibold"
        v-if="'default' in $slots"
        class="text-muted-800 dark:text-white"
      >
        <ContentSlot unwrap="p" :use="$slots.default"></ContentSlot>
      </BaseHeading>
      <BaseText v-if="'description' in $slots" size="xs" class="text-muted-400">
        <ContentSlot unwrap="p" :use="$slots.description"></ContentSlot>
      </BaseText>
    </div>
  </BaseCard>
</template>
