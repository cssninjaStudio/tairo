<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

export type DropdownFlavors = 'button' | 'context' | 'text'
export type DropdownShapes = 'straight' | 'rounded' | 'curved'
export type DropdownOrientation = 'start' | 'end'

export interface DropdownProps {
  flavor?: DropdownFlavors
  shape?: DropdownShapes
  orientation?: DropdownOrientation
  label?: string
  headerLabel?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  flavor: 'button',
  shape: 'rounded',
  orientation: 'start',
  label: '',
  headerLabel: undefined,
})
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
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
            <slot name="label">
              <span>{{ props.label }}</span>
            </slot>
            <BaseIcon
              name="lucide:chevron-down"
              class="h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            />
          </BaseButton>
          <button
            v-else-if="props.flavor === 'context'"
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-900"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
            >
              <BaseIcon
                name="lucide:more-horizontal"
                class="h-5 w-5 text-muted-400 transition-transform duration-300"
                :class="open && 'rotate-90'"
              />
            </span>
          </button>
          <button
            v-else-if="props.flavor === 'text'"
            type="button"
            class="flex items-center space-x-1"
          >
            <slot name="label">
              <span class="font-sans text-muted-400">{{ props.label }}</span>
            </slot>

            <BaseIcon
              name="lucide:chevron-down"
              class="h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            />
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
          class="absolute mt-2 w-72 border border-muted-200 bg-white shadow-lg focus:outline-none dark:border-muted-700 dark:bg-muted-800"
          :class="[
            props.orientation === 'start'
              ? 'left-0 origin-top-left'
              : 'right-0 origin-top-right',
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
          ]"
        >
          <div v-if="props.headerLabel" class="px-4 pt-5">
            <div class="relative flex items-center justify-between">
              <h4
                class="font-heading text-xs uppercase text-muted-500 dark:text-muted-200"
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
