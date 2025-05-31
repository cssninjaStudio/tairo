<script lang="ts">
import type {
  CheckboxRootEmits,
  CheckboxRootProps,
} from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

import { useForwardExpose, useForwardPropsEmits } from '~/utils/bundle/reka-ui'
import { reactiveOmit } from '~/utils/bundle/vueuse'

export interface TairoCheckboxAnimatedProps extends CheckboxRootProps {
  /**
   * The color of the checkbox.
   *
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'destructive'
    | 'muted'
    | 'light'
    | 'dark'
    | 'black'
    | 'custom'
}
export interface TairoCheckboxAnimatedEmits extends CheckboxRootEmits {}

const variants = {
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  destructive: 'text-destructive-500',
  light: 'text-muted-100 dark:text-muted-900',
  muted: 'text-muted-400',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  custom: '',
} as const
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TairoCheckboxAnimatedProps>(), {
  variant: 'primary',
})
const emits = defineEmits<TairoCheckboxAnimatedEmits>()

const attrs = useAttrs()
const id = useNuiId(() => props.id)

const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'variant']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <CheckboxRoot
    :id
    :ref="forwardRef"
    v-bind="{ ...attrs, ...forward }"
    class="focus-within:nui-focus block focus-within:outline-current size-8 rounded-full relative data-[state=checked]:ring-current"
    :class="[
      props.variant && variants[props.variant],
    ]"
  >
    <CheckboxIndicator
      force-mount
      class="relative size-8 block group"
    >
      <div
        class="absolute top-0 start-0 h-full w-full rounded-full border border-muted-300 dark:border-muted-800 transition-all duration-200 z-0 group-data-[state=checked]:opacity-0"
      />
      <svg aria-hidden="true" viewBox="0 0 52 52" class="size-8 rounded-full block">
        <circle cx="26" cy="26" r="25" fill="none" stroke="currentColor" stroke-dasharray="166" stroke-dashoffset="166" stroke-width="2" stroke-miterlimit="10" />
        <path fill="none" stroke="currentColor" d="m14.1 27.2 7.1 7.2 16.7-16.8" stroke-dasharray="48" stroke-dashoffset="48" class="origin-center" />
      </svg>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<style scoped>
[data-state='checked'] circle {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) both;
}

[data-state='checked'] path {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s both;
}

[data-state='unchecked'] circle {
  animation: reverseCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s both;
}

[data-state='unchecked'] path {
  animation: reverseCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.1s both;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes reverseCircle {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 166;
  }
}

@keyframes reverseCheck {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 48;
  }
}
</style>
