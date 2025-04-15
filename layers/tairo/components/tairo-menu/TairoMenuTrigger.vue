<script lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { NavigationMenuTrigger } from 'reka-ui'
import { useForwardProps } from '~/utils/bundle/reka-ui'

export interface TairoMenuTriggerProps extends NavigationMenuTriggerProps {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuTriggerProps>()

const forward = useForwardProps(props)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forward"
    class="text-muted-700 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-800 focus-visible:nui-focus group flex select-none items-center justify-between gap-1 rounded-md px-3 py-2 text-[15px] font-sans leading-none outline-none"
  >
    <slot />
  </NavigationMenuTrigger>
</template>
