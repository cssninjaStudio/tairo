<script lang="ts">
import type { NavigationMenuViewportProps } from 'reka-ui'
import { NavigationMenuViewport } from 'reka-ui'
import { useForwardProps } from '~/utils/bundle/reka-ui'

export interface TairoMenuViewportProps extends NavigationMenuViewportProps {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuViewportProps>()

const forward = useForwardProps(props)
</script>

<template>
  <NavigationMenuViewport
    v-bind="forward"
    class="absolute top-0 h-[var(--reka-navigation-menu-viewport-height)] origin-[top_center] w-full overflow-hidden border border-muted-200 dark:border-muted-800 rounded-xl shadow-md shadow-muted-300/20 dark:shadow-muted-800/20 bg-white dark:bg-muted-950 transition-[width,_height,_left] duration-300 sm:w-[var(--reka-navigation-menu-viewport-width)] start-[var(--reka-navigation-menu-viewport-left)]"
  />
</template>
