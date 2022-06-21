<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

export type DropdownFlavors = 'button' | 'context' | 'text'
export type DropdownShapes = 'straight' | 'rounded' | 'curved'
export type DropdownOrientation = 'start' | 'end'

export interface DropdownProps {
  flavor?: DropdownFlavors
  shape?: DropdownShapes
  orientation?: DropdownOrientation
  loading?: boolean
  disabled?: boolean
  label?: string
  headerLabel?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  flavor: 'button',
  shape: 'rounded',
  orientation: 'start',
  label: 'Dropdown',
  headerLabel: undefined,
})
</script>

<template>
  <div class="group text-right inline-flex justify-center items-center">
    <Menu
      v-slot="{ open }"
      as="div"
      class="relative text-left"
      :class="props.flavor === 'context' && 'w-9 h-9'"
    >
      <MenuButton as="template">
        <div>
          <BaseButton
            v-if="props.flavor === 'button'"
            color="default"
            :shape="props.shape"
            class="!pr-3 !pl-4"
          >
            <span>{{ props.label }}</span>
            <i
              class="i-lucide-chevron-down w-4 h-4 text-slate-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            ></i>
          </BaseButton>
          <button
            v-else-if="props.flavor === 'context'"
            class="w-9 h-9 rounded-full ring-1 ring-transparent group-hover:ring-offset-4 group-hover:ring-primary-500 dark:ring-offset-slate-900 inline-flex items-center justify-center transition-all duration-300"
          >
            <span
              class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <i
                class="i-lucide-more-horizontal w-5 h-5 text-slate-400 transition-transform duration-300"
                :class="open && 'rotate-90'"
              ></i>
            </span>
          </button>
          <button
            v-else-if="props.flavor === 'text'"
            class="flex items-center space-x-1"
          >
            <span class="font-text text-slate-400">{{ props.label }}</span>
            <i
              class="i-lucide-chevron-down w-4 h-4 text-slate-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            ></i>
          </button>
        </div>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute mt-2 w-72 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg focus:outline-none"
          :class="[
            props.orientation === 'start'
              ? 'left-0 origin-top-left'
              : 'right-0 origin-top-right',
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
          ]"
        >
          <div v-if="props.headerLabel" class="px-4 pt-5">
            <div class="flex justify-between items-center relative">
              <h4
                class="font-main uppercase text-xs text-slate-500 dark:text-slate-200"
              >
                {{ props.headerLabel }}
              </h4>
            </div>
          </div>
          <div class="p-2">
            <slot></slot>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
