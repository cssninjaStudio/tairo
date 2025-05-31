<script lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import { NavigationMenuLink } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'

export interface TairoMenuLinkProps extends NavigationMenuLinkProps {
  variant?: 'default' | 'tab'
}
export interface TairoMenuLinkEmits extends NavigationMenuLinkEmits {}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<TairoMenuLinkProps>(), {
  variant: 'default',
})
const emits = defineEmits<TairoMenuLinkEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forward"
    class="focus-visible:nui-focus block select-none rounded-md py-2 text-[15px] font-sans leading-none no-underline outline-none"
    :class="[
      props.variant === 'default' ? 'px-3 text-muted-700 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 data-active:text-primary-500 hover:bg-muted-100 dark:hover:bg-muted-900 ' : '',
      props.variant === 'tab' ? 'relative text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 data-active:text-primary-500 mx-3 after:content-[\'\'] after:absolute after:-bottom-3 after:start-0 after:h-0.5 after:w-full after:bg-transparent data-active:after:bg-primary-500 data-active:text-muted-800 dark:data-active:text-muted-100' : '',
    ]"
  >
    <slot />
  </NavigationMenuLink>
</template>
