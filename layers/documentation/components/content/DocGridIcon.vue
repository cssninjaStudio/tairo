<script setup lang="ts">
const props = defineProps<{
  name?: string
  color?: 'success' | 'primary' | 'yellow' | 'sky' | 'pink' | 'orange' | 'lime'
  to?: string
}>()

const iconColor = computed(() => {
  switch (props.color) {
    case 'success':
      return 'bg-success-100 text-success-500'
    case 'primary':
      return 'bg-primary-100 text-primary-500'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-500'
    case 'orange':
      return 'bg-orange-100 text-orange-500'
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

const isExternal = computed(() => {
  return props.to?.startsWith('http')
})
</script>

<template>
  <BaseCard shape="curved" class="group/grid-icon flex items-center p-3">
    <BaseIconBox v-if="props.name" size="md" :class="iconColor">
      <Icon :name="props.name" class="h-6 w-6" />
    </BaseIconBox>
    <div class="ms-3">
      <BaseHeading
        as="span"
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
    <div
      v-if="props.to"
      class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within/grid-icon:translate-x-0 group-focus-within/grid-icon:opacity-100 group-hover/grid-icon:translate-x-0 group-hover/grid-icon:opacity-100"
    >
      <BaseButtonIcon
        :to="props.to"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener' : undefined"
        shape="curved"
        muted
        class="scale-75"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </BaseButtonIcon>
    </div>
  </BaseCard>
</template>
