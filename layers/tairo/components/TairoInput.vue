<script lang="ts">
import type { BaseInputProps } from '@shuriken-ui/nuxt/components/Input.vue.d.ts'

import { useForwardExpose, useForwardProps } from '~/utils/bundle/reka-ui'
import { reactiveOmit } from '~/utils/bundle/vueuse'

export interface TairoInputProps extends BaseInputProps {
  icon?: string
}
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<TairoInputProps>(), {
  variant: 'default',
  rounded: 'md',
})

const attrs = useAttrs()
const forward = useForwardProps(reactiveOmit(props, ['icon']))
const { forwardRef } = useForwardExpose()

const ctx = tryUseNuiField()
const hasError = computed(() => toValue(ctx?.state) === 'error' || ('aria-invalid' in attrs && attrs['aria-invalid'] === 'true'))
</script>

<template>
  <div
    class="focus-within:nui-focus flex *:rounded-none *:not-last:border-e-0 *:last:border-s-0 group"
    :class="[
      hasError ? 'ring-destructive-base!' : '',
      props.rounded === 'sm' ? 'rounded-sm *:first:rounded-s-sm *:last:rounded-e-sm' : '',
      props.rounded === 'md' ? 'rounded-md *:first:rounded-s-md *:last:rounded-e-md' : '',
      props.rounded === 'lg' ? 'rounded-lg *:first:rounded-s-lg *:last:rounded-e-lg' : '',
      props.rounded === 'full' ? 'rounded-full *:first:rounded-s-full *:last:rounded-e-full' : '',
    ]"
  >
    <div
      class="ps-3 border flex items-center justify-center group-has-disabled:opacity-50"
      :class="[
        props.variant === 'default'
          ? 'bg-input-default-bg text-input-default-text/60'
          : 'bg-input-muted-bg text-input-muted-text/60',

        hasError
          ? 'border-destructive-base'
          : props.variant === 'default'
            ? 'border-input-default-border'
            : 'border-input-muted-border',
      ]"
    >
      <Icon v-if="props.icon" :name="props.icon" class="size-4" />
    </div>
    <BaseInput
      :ref="forwardRef"
      class="ring-0! focus-visible:ring-0!"
      v-bind="{
        ...forward,
        ...attrs,
      }"
    />
  </div>
</template>
