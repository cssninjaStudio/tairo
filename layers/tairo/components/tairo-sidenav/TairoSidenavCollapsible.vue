<script lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'reka-ui'
import { CollapsibleContent, CollapsibleRoot } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'

export interface TairoSidenavCollapsibleProps extends CollapsibleRootProps {}
export interface TairoSidenavCollapsibleEmits extends CollapsibleRootEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoSidenavCollapsibleProps>()
const emits = defineEmits<TairoSidenavCollapsibleEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <CollapsibleRoot v-bind="forward" class="group w-full">
    <slot name="trigger" />
    <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-4 transition-all">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
