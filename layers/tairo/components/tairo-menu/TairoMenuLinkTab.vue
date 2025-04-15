<script lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import { NavigationMenuLink } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'

export interface TairoMenuLinkTabProps extends NavigationMenuLinkProps {}
export interface TairoMenuLinkTabEmits extends NavigationMenuLinkEmits {}
</script>

<script setup lang="ts">
const props = defineProps<TairoMenuLinkTabProps>()
const emits = defineEmits<TairoMenuLinkTabEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forward"
    class="text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300"
    exact-active-class="border-primary-500! text-muted-800! dark:text-muted-100!"
  >
    <BaseText size="sm">
      <slot />
    </BaseText>
  </NavigationMenuLink>
</template>
