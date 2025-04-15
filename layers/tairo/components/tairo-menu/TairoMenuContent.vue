<script lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from 'reka-ui'
import { NavigationMenuContent } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'

export interface TairoMenuContentProps extends NavigationMenuContentProps {}
export interface TairoMenuContentEmits extends NavigationMenuContentEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuContentProps>()
const emits = defineEmits<TairoMenuContentEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forward"
    class="absolute top-0 start-0 w-full sm:w-auto"
  >
    <slot />
  </NavigationMenuContent>
</template>
