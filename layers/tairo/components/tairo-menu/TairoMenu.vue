<script lang="ts">
import type { NavigationMenuRootEmits, NavigationMenuRootProps } from 'reka-ui'
import { NavigationMenuRoot } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'

export interface TairoMenuProps extends NavigationMenuRootProps {}
export interface TairoMenuEmits extends NavigationMenuRootEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuProps>()
const emits = defineEmits<TairoMenuEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuRoot v-bind="forward" class="relative z-[1] flex">
    <slot />
  </NavigationMenuRoot>
</template>
