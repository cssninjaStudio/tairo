<script lang="ts">
import type {
  CheckboxRootEmits,
  CheckboxRootProps,
} from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

import { useForwardExpose, useForwardPropsEmits } from '~/utils/bundle/reka-ui'
import { reactiveOmit } from '~/utils/bundle/vueuse'

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

const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'icon']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <CheckboxRoot
    :id
    :ref="forwardRef"
    v-bind="{ ...attrs, ...forward }"
    class="outline-none focus-visible:nui-focus rounded-md"
  >
    <CheckboxIndicator
      force-mount
      class="group"
    >
      <BaseCard
        rounded="md"
        class="text-muted-300 group-data-[state=checked]:bg-primary-500/10 group-data-[state=checked]:text-primary-500 size-8 flex items-center justify-center"
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
