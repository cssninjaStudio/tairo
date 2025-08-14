<script lang="ts">
import type { NavigationMenuItemProps } from 'reka-ui'
import { useForwardProps } from '#layers/@cssninja/tairo/utils/bundle/reka-ui'
import { NavigationMenuItem } from 'reka-ui'

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
