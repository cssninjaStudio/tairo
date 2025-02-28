<script setup lang="ts">
const props = defineProps<{
  icon?: string
  label?: string
  children?: any
}>()
</script>

<template>
  <CollapsibleRoot class="group w-full ">
    <slot name="trigger" />
    <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-4 transition-all">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
