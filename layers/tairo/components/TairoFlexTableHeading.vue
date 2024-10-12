<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The type of the heading.
     */
    type?: 'grow' | 'shrink' | 'stable'
  }>(),
  {
    type: 'stable',
  },
)
</script>

<template>
  <div
    class="text-muted-400 p-4 font-sans text-xs font-medium uppercase"
    :class="[
      props.type === 'grow' && 'md:grow',
      props.type === 'shrink' && 'md:shrink',
      props.type === 'stable'
        && 'sm:w-[90px] md:line-clamp-1 md:w-[110px] md:shrink-0',
    ]"
  >
    <slot />
  </div>
</template>
