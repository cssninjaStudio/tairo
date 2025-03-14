<script lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

export interface TairoMenuLinkProps extends NavigationMenuLinkProps {}
export interface TairoMenuLinkEmits extends NavigationMenuLinkEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuLinkProps>()
const emits = defineEmits<TairoMenuLinkEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forward"
    class="text-muted-700 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-900 focus-visible:nui-focus block select-none rounded-md px-3 py-2 text-[15px] font-sans leading-none no-underline outline-none"
  >
    <slot />
  </NavigationMenuLink>
</template>
