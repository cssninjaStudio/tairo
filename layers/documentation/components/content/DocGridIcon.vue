<script setup lang="ts">
const props = defineProps<{
  name?: string
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  to?: string
}>()

const isExternal = computed(() => {
  return props.to?.startsWith('http')
})
</script>

<template>
  <BaseCard rounded="lg" class="group/grid-icon flex items-center p-3">
    <BaseIconBox
      v-if="props.name"
      size="md"
      rounded="none"
      mask="blob"
      :color="props.color"
      variant="pastel"
    >
      <Icon :name="props.name" class="h-6 w-6" />
    </BaseIconBox>
    <div class="ms-3">
      <BaseHeading
        v-if="'default' in $slots"
        as="span"
        size="sm"
        weight="semibold"
        class="text-muted-800 dark:text-white"
      >
        <ContentSlot unwrap="p" :use="$slots.default" />
      </BaseHeading>
      <BaseText
        v-if="'description' in $slots"
        size="xs"
        class="text-muted-400"
      >
        <ContentSlot unwrap="p" :use="$slots.description" />
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
        rounded="lg"
        muted
        class="scale-75"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </BaseButtonIcon>
    </div>
  </BaseCard>
</template>
