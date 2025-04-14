<script setup lang="ts">
const props = defineProps<{
  name?: string
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'yellow'
    | 'sky'
    | 'pink'
    | 'orange'
    | 'lime'
    | 'blue'
  to?: string
}>()

defineSlots<{
  default: () => any
  description: () => any
}>()

const isExternal = computed(() => {
  return props.to?.startsWith('http')
})

const iconColor = computed(() => {
  switch (props.color) {
    case 'success':
      return 'bg-success-500/10 text-success-500'
    case 'primary':
      return 'bg-primary-500/10 text-primary-500'
    case 'info':
      return 'bg-info-500/10 text-info-500'
    case 'warning':
      return 'bg-warning-500/10 text-warning-500'
    case 'danger':
      return 'bg-destructive-500/10 text-destructive-500'
    case 'yellow':
      return 'bg-yellow-500/10 text-yellow-500'
    case 'orange':
      return 'bg-orange-500/10 text-orange-500'
    case 'sky':
      return 'bg-sky-500/10 text-sky-500'
    case 'pink':
      return 'bg-pink-500/10 text-pink-500'
    case 'lime':
      return 'bg-lime-500/10 text-lime-500'
    case 'blue':
      return 'bg-blue-500/10 text-blue-500'
    default:
      return 'bg-muted-500/10 text-muted-500'
  }
})
</script>

<template>
  <BaseCard rounded="md" class="group/grid-icon flex items-center p-3">
    <BaseIconBox
      v-if="props.name"
      size="sm"
      rounded="none"
      mask="blob"
      variant="muted"
    >
      <Icon :name="props.name" class="size-5" />
    </BaseIconBox>
    <div class="ms-3">
      <BaseHeading
        v-if="'default' in $slots"
        as="span"
        size="sm"
        weight="medium"
        class="text-muted-900 dark:text-white"
      >
        <slot mdc-unwrap="p" />
      </BaseHeading>
      <BaseParagraph
        v-if="'description' in $slots"
        size="xs"
        class="text-muted-600 dark:text-muted-400"
      >
        <slot name="description" mdc-unwrap="p" />
      </BaseParagraph>
    </div>
    <div
      v-if="props.to"
      class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within/grid-icon:translate-x-0 group-focus-within/grid-icon:opacity-100 group-hover/grid-icon:translate-x-0 group-hover/grid-icon:opacity-100"
    >
      <BaseButton
        :to="props.to"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener' : undefined"
        rounded="lg"
        variant="muted"
        size="icon-md"
        class="scale-75"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </BaseButton>
    </div>
  </BaseCard>
</template>
