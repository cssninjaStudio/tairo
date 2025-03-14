<script lang="ts">
import type { BaseSelectEmits, BaseSelectProps } from '@shuriken-ui/nuxt'
import type { AcceptableValue } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'

export interface TairoSelectProps<T = AcceptableValue> extends BaseSelectProps<T> {
  icon?: string
}
export interface TairoSelectEmits<T = AcceptableValue> extends BaseSelectEmits<T> {}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<TairoSelectProps<T>>(), {
  variant: 'default',
  rounded: 'md',
})
const emits = defineEmits<TairoSelectEmits<T>>()

const attrs = useAttrs()
const forward = useForwardPropsEmits(reactiveOmit(props, ['icon']), emits) as any
const { forwardRef } = useForwardExpose()

const ctx = tryUseNuiField()
const hasError = computed(() => toValue(ctx?.state) === 'error' || ('aria-invalid' in attrs && attrs['aria-invalid'] === 'true'))
</script>

<template>
  <div
    class="focus-within:nui-focus rounded-lg flex *:rounded-none *:not-nth-last-2:border-e-0 *:nth-last-2:border-s-0"
    :class="[
      hasError ? 'ring-destructive-base!' : '',
      props.rounded === 'sm' ? 'rounded-sm *:first:rounded-s-sm *:nth-last-2:rounded-e-sm' : '',
      props.rounded === 'md' ? 'rounded-md *:first:rounded-s-md *:nth-last-2:rounded-e-md' : '',
      props.rounded === 'lg' ? 'rounded-lg *:first:rounded-s-lg *:nth-last-2:rounded-e-lg' : '',
      props.rounded === 'full' ? 'rounded-full *:first:rounded-s-full *:nth-last-2:rounded-e-full' : '',
    ]"
  >
    <div
      class="ps-3 border flex items-center justify-center"
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
    <BaseSelect
      :ref="forwardRef"
      class="ring-0!"
      v-bind="{
        ...forward,
        ...attrs,
      }"
    >
      <slot />
    </BaseSelect>
  </div>
</template>
