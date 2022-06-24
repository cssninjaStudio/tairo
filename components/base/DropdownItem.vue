<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { MenuItem } from '@headlessui/vue'

export interface DropdownItemProps {
  to?: RouteLocationRaw
  title?: string
  text?: string
}

const NuxtLink = defineNuxtLink({})
const props = defineProps<DropdownItemProps>()
</script>

<template>
  <MenuItem v-slot="{ active }">
    <component
      :is="props.to ? NuxtLink : 'a'"
      :to="props.to"
      class="group flex w-full items-center rounded-md py-2 px-3 text-sm transition-colors duration-300"
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
