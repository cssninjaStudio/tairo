<script lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

export interface TairoSubsidebarCollapsibleProps extends CollapsibleRootProps {
  icon?: string
  label?: string
  children?: {
    to: string
    label: string
  }[]
}
export interface TairoSubsidebarCollapsibleEmits extends CollapsibleRootEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoSubsidebarCollapsibleProps>()
const emits = defineEmits<TairoSubsidebarCollapsibleEmits>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['icon', 'label', 'children']), emits)
</script>

<template>
  <CollapsibleRoot v-bind="forward" class="group w-full">
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
