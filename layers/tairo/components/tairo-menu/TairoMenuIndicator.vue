<script lang="ts">
import type { NavigationMenuIndicatorProps } from 'reka-ui'
import { NavigationMenuIndicator } from 'reka-ui'
import { useForwardProps } from '~/utils/bundle/reka-ui'

export interface TairoMenuIndicatorProps extends NavigationMenuIndicatorProps {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuIndicatorProps>()

const forward = useForwardProps(props)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forward"
    class="absolute w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) top-full z-[91] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform] duration-300 "
  >
    <slot>
      <div
        class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-muted-200 dark:bg-muted-800"
      />
    </slot>
  </NavigationMenuIndicator>
</template>
