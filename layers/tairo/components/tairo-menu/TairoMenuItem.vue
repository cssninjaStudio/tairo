<script lang="ts">
import type { NavigationMenuItemProps } from 'reka-ui'
import { NavigationMenuItem } from 'reka-ui'
import { useForwardProps } from '~/utils/bundle/reka-ui'

export interface TairoMenuContentProps extends NavigationMenuItemProps {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuContentProps>()

const forward = useForwardProps(props)
</script>

<template>
  <NavigationMenuItem v-bind="forward">
    <slot />
  </NavigationMenuItem>
</template>
