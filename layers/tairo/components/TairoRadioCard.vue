<script lang="ts">
import type { BaseCardProps } from '@shuriken-ui/nuxt/components/Card.vue.d.ts'
import type { RadioGroupItemProps } from 'reka-ui'
import { RadioGroupIndicator, RadioGroupItem } from 'reka-ui'
import { useForwardPropsEmits } from '~/utils/bundle/reka-ui'
import { reactiveOmit } from '~/utils/bundle/vueuse'

export interface TairoRadioCardProps extends RadioGroupItemProps {
  icon?: string
  label?: string
  subtitle?: string
  variant?: BaseCardProps['variant']
  rounded?: BaseCardProps['rounded']
}
export interface TairoRadioCardEmits /* extends RadioGroupItemEmits */ {
  select: [event: any]
}
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<TairoRadioCardProps>(), {
  variant: 'default',
  rounded: 'sm',
})
const emits = defineEmits<TairoRadioCardEmits>()
const attrs = useAttrs()
const id = useNuiId(() => props.id)
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'variant', 'rounded', 'icon', 'label', 'subtitle']), emits)
</script>

<template>
  <RadioGroupItem
    :id
    v-bind="{ ...forward, ...attrs }"
    as-child
  >
    <BaseCard
      :rounded="props.rounded"
      :variant="props.variant"
      class="group focus-visible:nui-focus ring-primary-500! relative flex items-center justify-center shrink-0 cursor-pointer disabled:pointer-events-none disabled:opacity-50 text-muted-400 data-[state=checked]:bg-white dark:data-[state=checked]:bg-muted-950 data-[state=checked]:border-primary-500 relative border px-2 py-4 flex w-full flex-col items-center gap-2 text-center"
    >
      <slot>
        <Icon
          v-if="props.icon"
          :name="props.icon"
          class="group-data-[state=checked]:text-primary-500 mx-auto size-6"
        />

        <div>
          <BaseHeading
            v-if="props.label"
            as="h4"
            size="sm"
            weight="medium"
            lead="none"
          >
            {{ props.label }}
          </BaseHeading>

          <BaseText
            v-if="props.subtitle"
            size="xs"
            class="text-muted-400"
          >
            {{ props.subtitle }}
          </BaseText>
        </div>
      </slot>

      <RadioGroupIndicator
        force-mount
        class="data-[state=checked]:text-primary-500 text-muted-300 absolute end-2 top-2 ms-auto"
      >
        <slot name="indicator">
          <div
            class="size-2 rounded-full bg-current"
          />
        </slot>
      </RadioGroupIndicator>
    </BaseCard>
  </RadioGroupItem>
</template>
