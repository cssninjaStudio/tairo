<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { MenuItem } from '@headlessui/vue'

export interface DropdownItemProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string

  title?: string
  text?: string
}

const props = defineProps<DropdownItemProps>()
const { is, attributes } = useButton(props)
</script>

<template>
  <MenuItem v-slot="{ active }">
    <component
      :is="is"
      v-bind="attributes"
      class="group flex w-full items-center text-left justify-start rounded-md py-2 px-3 text-sm transition-colors duration-300"
      :class="[
        active
          ? 'bg-slate-100 dark:bg-slate-700 text-primary-500'
          : 'text-slate-500',
      ]"
    >
      <slot name="start"></slot>
      <div class="grow">
        <div
          class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
        >
          <slot>{{ props.title }}</slot>
        </div>
        <p
          v-if="'text' in $slots || props.text"
          class="font-text text-xs text-slate-400"
        >
          <slot name="text">{{ props.text }}</slot>
        </p>
      </div>
      <slot name="end"></slot>
    </component>
  </MenuItem>
</template>
