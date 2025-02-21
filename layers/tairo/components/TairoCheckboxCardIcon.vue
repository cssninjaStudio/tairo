<script lang="ts">
import type {
  CheckboxRootEmits,
  CheckboxRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'

export interface TairoCheckboxCardProps extends CheckboxRootProps {
  icon?: string
}
export interface TairoCheckboxCardEmits extends CheckboxRootEmits {}
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = defineProps<TairoCheckboxCardProps>()
const emits = defineEmits<TairoCheckboxCardEmits>()
const id = useNuiId(() => props.id)

const attrs = useAttrs()

const forward = useForwardPropsEmits(reactiveOmit(props, ['icon']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <CheckboxRoot
    :id
    :ref="forwardRef"
    v-bind="{ ...attrs, ...forward }"
  >
    <CheckboxIndicator
      force-mount
      class="group"
    >
      <BaseCard
        rounded="lg"
        class="text-muted-300 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 p-4"
      >
        <div class="flex flex-col items-center gap-1">
          <slot>
            <Icon v-if="props.icon" :name="props.icon" class="size-5" />
          </slot>
        </div>
      </BaseCard>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
