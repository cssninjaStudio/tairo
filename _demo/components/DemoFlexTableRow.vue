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
      props.spaced ? 'px-2 py-6 sm:py-4' : 'py-6 sm:py-2',
      props.condensed
        ? 'top-px first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0'
        : '',
    ]"
  >
    <slot></slot>
    <div class="flex w-full flex-col sm:flex-row sm:items-center">
      <slot name="start"></slot>
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
        <slot name="end"></slot>
      </div>
    </div>
  </BaseCard>
</template>
