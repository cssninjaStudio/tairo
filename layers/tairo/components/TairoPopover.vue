<script setup lang="ts">
import { Float } from '@headlessui-float/vue'
import { FocusTrap, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The radius of the popover.
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'

    /**
     * The size of the popover.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The orientation of the popover.
     *
     * @deprecated use placement instead
     */
    orientation?: 'start' | 'end'
    /**
     * Used a fixed strategy to float the component
     */
    fixed?: boolean

    /**
     * The placement of the dropdown via floating-ui.
     */
    placement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'right'
      | 'right-start'
      | 'right-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
  }>(),
  {
    rounded: 'sm',
    size: 'md',
    orientation: 'start',
    placement: undefined,
    fixed: false,
  },
)

/**
 * fallback placement with old orientation value
 * @todo remove this on next major version
 */
const placementValue = computed(() => {
  if (props.placement) {
    return props.placement
  }

  return props.orientation === 'end' ? 'bottom-end' : 'bottom-start'
})
</script>

<template>
  <Popover>
    <Float
      enter="transition-all duration-200 ease-out"
      enter-from="translate-y-1 opacity-0"
      enter-to="translate-y-0 opacity-100"
      leave="transition duration-150 ease-in"
      leave-from="translate-y-0 opacity-100"
      leave-to="translate-y-1 opacity-0"
      tailwindcss-origin-class
      :offset="10"
      :strategy="props.fixed ? 'fixed' : 'absolute'"
      :placement="placementValue"
      :adaptive-width="props.fixed"
      :z-index="20"
    >
      <PopoverButton
        class="group inline-flex cursor-pointer font-sans focus:outline-none"
        as="div"
      >
        <slot />
      </PopoverButton>

      <PopoverPanel
        class="absolute z-10 mt-3 w-screen"
        :class="[
          props.size === 'sm' && 'max-w-[240px]',
          props.size === 'md' && 'max-w-xs',
          props.orientation === 'start' && '-start-3',
          props.orientation === 'end' && '-end-3',
        ]"
      >
        <FocusTrap>
          <div
            class="border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']"
            :class="[
              props.orientation === 'start' && 'after:start-6',
              props.orientation === 'end' && 'after:end-6',
            ]"
          >
            <slot name="content" />
          </div>
        </FocusTrap>
      </PopoverPanel>
    </Float>
  </Popover>
</template>
