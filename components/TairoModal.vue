<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * Whether the modal is open.
     */
    open?: boolean

    /**
     * The size of the modal.
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

    /**
     * The shape of the modal.
     */
    shape?: 'straight' | 'rounded' | 'curved'

    /**
     * The alignment of the footer content.
     */
    footerAlign?: 'start' | 'end' | 'center' | 'between'
  }>(),
  {
    size: 'md',
    shape: 'rounded',
    footerAlign: 'end',
  },
)

const emit = defineEmits(['close'])
</script>

<template>
  <TransitionRoot appear :show="props.open" as="template">
    <div class="fixed inset-0 z-[9999] flex items-center justify-center">
      <Dialog class="relative z-[9999]" as="div" @close="emit('close')">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"></div>
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="dark:bg-muted-800 w-full overflow-hidden bg-white text-left align-middle shadow-xl transition-all"
                :class="[
                  props.shape === 'rounded' && 'rounded-lg',
                  props.shape === 'curved' && 'rounded-xl',
                  props.size === 'sm' && 'max-w-sm',
                  props.size === 'md' && 'max-w-md',
                  props.size === 'lg' && 'max-w-xl',
                  props.size === 'xl' && 'max-w-2xl',
                  props.size === '2xl' && 'max-w-3xl',
                  props.size === '3xl' && 'max-w-5xl',
                ]"
              >
                <slot name="header"></slot>

                <slot></slot>

                <div
                  v-if="'footer' in $slots"
                  class="flex w-full items-center gap-x-2"
                  :class="[
                    props.footerAlign === 'center' && 'justify-center',
                    props.footerAlign === 'end' && 'justify-end',
                    props.footerAlign === 'between' && 'justify-between',
                  ]"
                >
                  <slot name="footer"></slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </div>
  </TransitionRoot>
</template>
