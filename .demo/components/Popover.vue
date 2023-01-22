<script setup lang="ts">
import Popper from 'vue3-popper'

interface PopoverProps {
  openDelay?: number
  closeDelay?: number
  placement?: 'top' | 'bottom' | 'left' | 'right'
  offsetDistance?: string
  offsetSkid?: string
  hover?: boolean
  disabled?: boolean
  arrow?: boolean
  interactive?: boolean
  locked?: boolean
}

const props = withDefaults(defineProps<PopoverProps>(), {
  openDelay: 0,
  closeDelay: 0,
  placement: 'top',
  offsetDistance: '12',
  offsetSkid: '0',
  hover: false,
  disabled: false,
  interactive: true,
  locked: false,
})
</script>

<template>
  <Popper
    v-bind="$attrs"
    :hover="props.hover"
    :openDelay="props.openDelay"
    :closeDelay="props.closeDelay"
    :placement="props.placement"
    :offsetDistance="props.offsetDistance"
    :offsetSkid="props.offsetSkid"
    :disabled="props.disabled"
    :arrow="props.arrow"
    :interactive="props.interactive"
    :locked="props.locked"
  >
    <slot />
    <template #content="props">
      <slot name="content" v-bind="props" />
    </template>
  </Popper>
</template>
