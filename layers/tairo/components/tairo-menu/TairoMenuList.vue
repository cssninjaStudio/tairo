<script lang="ts">
import type { NavigationMenuListProps } from 'reka-ui'
import { useForwardProps } from '#layers/@cssninja/tairo/utils/bundle/reka-ui'
import { NavigationMenuList } from 'reka-ui'

export interface TairoMenuLinkTabProps extends NavigationMenuListProps {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuLinkTabProps>()

const forward = useForwardProps(props)
</script>

<template>
  <NavigationMenuList
    v-bind="forward"
    class="flex list-none"
  >
    <slot />
  </NavigationMenuList>
</template>
