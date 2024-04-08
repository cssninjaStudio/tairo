<script setup lang="ts">
const props = defineProps<{
  step?: number
  vertical?: boolean
}>()
</script>

<template>
  <div
    class="dark:before:highlight-white/5 before:text-muted-700 before:ring-muted-900/5 after:bg-muted-200 dark:before:bg-muted-950 dark:before:text-muted-200 dark:after:bg-muted-700 relative ms-1 grid grid-cols-6 gap-4 pl-9 before:absolute before:left-0 before:flex before:size-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:shadow-sm before:ring-1 before:content-[counter(step)] after:absolute after:bottom-0 after:left-[0.6875rem] after:top-[calc(1.875rem+1px)] after:w-px dark:before:shadow-none dark:before:ring-0 [&::marker]:opacity-0"
    :style="`counter-increment: step ${props.step ?? 1};`"
    :class="[props.vertical ? '' : 'pb-8']"
  >
    <div :class="[props.vertical ? 'col-span-6' : 'col-span-6 mb-6 md:col-span-2 xl:mb-0']">
      <!-- eslint-disable-next-line vuejs-accessibility/heading-has-content -->
      <h3 class="text-muted-900 dark:text-muted-200 mb-2 mt-0 text-sm font-semibold leading-6">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="text-sm">
        <p>
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
    </div>
    <div class="relative z-10 -ml-10" :class="[props.vertical ? 'col-span-6' : 'col-span-6 md:col-span-4 xl:ml-0']">
      <div class="-mt-6">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </div>
</template>
