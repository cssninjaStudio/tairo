<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'

export interface DropdownItemProps {
  to: string
  title: string
  text: string
}

const props = defineProps<DropdownItemProps>()
</script>

<template>
  <MenuItem v-slot="{ active }">
    <NuxtLink
      to="/"
      class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
      :class="[
        active
          ? 'bg-slate-100 dark:bg-slate-700 text-primary-500'
          : 'text-slate-500',
      ]"
    >
      <slot name="media"></slot>
      <slot name="content">
        <div>
          <h6
            class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
          >
            {{ props.title }}
          </h6>
          <p class="font-text text-xs text-slate-400">{{ props.text }}</p>
        </div>
      </slot>
    </NuxtLink>
  </MenuItem>
</template>
