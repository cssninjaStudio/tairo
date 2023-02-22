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
      class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6"
      :class="props.reverse && 'sm:flex-row-reverse'"
    >
      <div class="w-full sm:w-auto flex items-center gap-4">
        <slot name="left"></slot>
      </div>
      <div class="w-full sm:w-auto flex items-center justify-end gap-4">
        <slot name="right"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
