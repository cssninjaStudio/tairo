<script lang="ts">
import type { BaseSelectItemProps } from '@shuriken-ui/nuxt/components/SelectItem.vue.d.ts'
import type { AcceptableValue } from 'reka-ui'
import { SelectItemText } from 'reka-ui'
import { useForwardProps } from '~/utils/bundle/reka-ui'
import { reactiveOmit } from '~/utils/bundle/vueuse'

export interface TairoSelectItemProps<T = AcceptableValue> extends Omit<BaseSelectItemProps<T>, 'rawSlot'> {
  media?: string
  icon?: string
  name?: string
  text?: string
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
const props = defineProps<TairoSelectItemProps<T>>()
const forward = useForwardProps(reactiveOmit(props, ['media', 'icon', 'name', 'text'])) as unknown as TairoSelectItemProps<T>
</script>

<template>
  <BaseSelectItem v-bind="forward" raw-slot>
    <span class="flex items-start gap-2 py-2">
      <BaseAvatar :src="props.media" size="xs" class="bg-muted-100 dark:bg-muted-800">
        <Icon v-if="props.icon" :name="props.icon" class="size-4 flex" />
      </BaseAvatar>
      <span class="flex flex-col items-start gap-1">
        <span class="text-xs font-semibold leading-none">{{ props.name }}</span>
        <span class="font-sans text-xs text-muted-500 dark:text-muted-400">
          <SelectItemText>{{ props.text }}</SelectItemText>
        </span>
      </span>
    </span>
  </BaseSelectItem>
</template>
