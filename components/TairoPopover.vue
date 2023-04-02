<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The shape of the popover.
     */
    shape?: 'straight' | 'rounded' | 'curved'

    /**
     * The size of the popover.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The orientation of the popover.
     */
    orientation?: 'start' | 'end'
  }>(),
  {
    shape: 'rounded',
    size: 'md',
    orientation: 'start',
  },
)
</script>

<template>
  <div class="relative">
    <Popover class="relative">
      <PopoverButton
        class="group inline-flex cursor-pointer font-sans focus:outline-none"
        as="div"
      >
        <slot></slot>
      </PopoverButton>

      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute z-10 mt-3 w-screen"
          :class="[
            props.size === 'sm' && 'max-w-[240px]',
            props.size === 'md' && 'max-w-xs',
            props.orientation === 'start' && '-start-3',
            props.orientation === 'end' && '-end-3',
          ]"
        >
          <div
            class="border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']"
            :class="[
              props.orientation === 'start' && 'after:start-6',
              props.orientation === 'end' && 'after:end-6',
            ]"
          >
            <slot name="content"></slot>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>
