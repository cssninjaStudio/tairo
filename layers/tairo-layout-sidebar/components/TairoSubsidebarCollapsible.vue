<script setup lang="ts">
const props = defineProps<{
  icon?: string
  label?: string
  children?: any
}>()
</script>

<template>
  <CollapsibleRoot class="group w-full">
    <slot name="trigger">
      <TairoSubsidebarCollapsibleTrigger
        :icon="props.icon"
        :label="props.label"
      />
    </slot>
    <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-1.5 transition-all">
      <slot>
        <TairoSubsidebarCollapsibleLink
          v-for="child in children"
          :key="child.label"
          :to="child.to"
        >
          {{ child.label }}
        </TairoSubsidebarCollapsibleLink>
      </slot>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
