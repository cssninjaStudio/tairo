<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

export type PopoverShapes = 'straight' | 'rounded' | 'curved'
export type PopoverSizes = 'sm' | 'md' | 'lg'
export type PopoverOrientation = 'start' | 'end'

export interface PopoverProps {
  shape?: PopoverShapes
  size?: PopoverSizes
  orientation?: PopoverOrientation
}

const props = withDefaults(defineProps<PopoverProps>(), {
  shape: 'rounded',
  size: 'md',
  orientation: 'start',
})
</script>

<template>
  <div class="relative">
    <Popover class="relative">
      <PopoverButton
        class="group inline-flex font-sans focus:outline-none cursor-pointer"
        as="div"
      >
        <slot></slot>
      </PopoverButton>

      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="tranmuted-y-1 opacity-0"
        enter-to-class="tranmuted-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="tranmuted-y-0 opacity-100"
        leave-to-class="tranmuted-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute z-10 mt-3 w-screen"
          :class="[
            props.size === 'sm' && 'max-w-[240px]',
            props.size === 'md' && 'max-w-xs',
            props.orientation === 'start' && '-left-3',
            props.orientation === 'end' && '-right-3',
          ]"
        >
          <div
            class="relative w-full rounded-lg shadow-lg bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:absolute after:-top-2 after:content-[''] after:w-4 after:h-4 after:rotate-[-135deg] after:bg-white dark:after:bg-muted-700 after:border-r after:border-b after:border-muted-200 dark:after:border-muted-600"
            :class="[
              props.orientation === 'start' && 'after:left-6',
              props.orientation === 'end' && 'after:right-6',
            ]"
          >
            <slot name="content"></slot>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>
