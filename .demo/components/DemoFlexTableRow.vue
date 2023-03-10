<script setup lang="ts">
const props = defineProps<{
  shape?: 'straight' | 'rounded' | 'curved'
  spaced?: boolean
  condensed?: boolean
}>()
</script>

<template>
  <BaseCard
    :shape="props.shape"
    class="relative"
    :class="[
      props.spaced ? 'py-6 sm:py-4 px-2' : 'py-6 sm:py-2',
      props.condensed
        ? 'first:rounded-t-lg last:rounded-b-lg top-px [&:not(:first-child)]:border-t-0'
        : '',
    ]"
  >
    <slot></slot>
    <div class="w-full flex flex-col sm:flex-row sm:items-center">
      <slot name="start"></slot>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2">
        <slot name="end"></slot>
      </div>
    </div>
  </BaseCard>
</template>
