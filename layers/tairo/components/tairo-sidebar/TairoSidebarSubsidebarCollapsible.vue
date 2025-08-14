<script lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'reka-ui'
import { useForwardPropsEmits } from '#layers/@cssninja/tairo/utils/bundle/reka-ui'
import { reactiveOmit } from '#layers/@cssninja/tairo/utils/bundle/vueuse'
import { CollapsibleContent, CollapsibleRoot } from 'reka-ui'

export interface TairoSidebarSubsidebarCollapsibleProps extends CollapsibleRootProps {
  icon?: string
  label?: string
  children?: {
    to: string
    label: string
  }[]
}
export interface TairoSidebarSubsidebarCollapsibleEmits extends CollapsibleRootEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoSidebarSubsidebarCollapsibleProps>()
const emits = defineEmits<TairoSidebarSubsidebarCollapsibleEmits>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['icon', 'label', 'children']), emits)
</script>

<template>
  <CollapsibleRoot v-bind="forward" class="group w-full">
    <slot name="trigger">
      <TairoSidebarSubsidebarCollapsibleTrigger
        :icon="props.icon"
        :label="props.label"
      />
    </slot>
    <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-1.5 transition-all">
      <slot>
        <TairoSidebarSubsidebarCollapsibleLink
          v-for="child in children"
          :key="child.label"
          :to="child.to"
        >
          {{ child.label }}
        </TairoSidebarSubsidebarCollapsibleLink>
      </slot>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
