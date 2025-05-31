<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    reverse?: boolean
  }>(),
  {
    reverse: false,
  },
)
</script>

<template>
  <div>
    <div
      v-if="'left' in $slots || 'right' in $slots"
      class="mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row"
      :class="props.reverse && 'sm:flex-row-reverse'"
    >
      <div class="flex w-full items-center gap-4 sm:w-auto">
        <slot name="left" />
      </div>
      <div class="flex w-full items-center justify-end gap-4 sm:w-auto">
        <slot name="right" />
      </div>
    </div>
    <slot />
  </div>
</template>
