<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { usePageTitle } from '@/stores/usePageTitle'

const props = defineProps<{
  toggled: boolean
}>()

const emit = defineEmits(['toggled', 'language', 'activity'])

const pageTitle = usePageTitle()
const { toggleDark } = useDarkmode()
const isChecked = ref(false)
</script>

<template>
  <div class="relative flex items-center gap-2 h-16 mb-5 z-50">
    <NavigationBurger :open="props.toggled" @triggered="emit('toggled')" />

    <h2
      class="hidden md:block font-main text-2xl font-semibold text-slate-800 dark:text-white"
    >
      {{ pageTitle.pageTitle }}
    </h2>

    <label
      class="block w-9 h-9 overflow-hidden relative ml-auto rounded-full ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 dark:ring-offset-slate-900 transition-all duration-300"
    >
      <input
        v-model="isChecked"
        type="checkbox"
        class="absolute top-0 left-0 z-[2] w-full h-full opacity-0 cursor-pointer"
        @change="() => toggleDark()"
      />
      <span
        class="block relative w-9 h-9 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
          :class="[
            !isChecked
              ? 'opacity-100 -translate-x-[50%] -translate-y-1/2'
              : 'opacity-0  -translate-x-[50%] -translate-y-[150%]',
          ]"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" class="stroke-2">
            <circle cx="12" cy="12" r="5" class="fill-current" />
            <path class="fill-current" d="M12 1v2" />
            <path class="fill-current" d="M12 21v2" />
            <path class="fill-current" d="M4.22 4.22l1.42 1.42" />
            <path class="fill-current" d="M18.36 18.36l1.42 1.42" />
            <path class="fill-current" d="M1 12h2" />
            <path class="fill-current" d="M21 12h2" />
            <path class="fill-current" d="M4.22 19.78l1.42-1.42" />
            <path class="fill-current" d="M18.36 5.64l1.42-1.42" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
          :class="[
            !isChecked
              ? 'opacity-0 -translate-x-[45%] -translate-y-[150%]'
              : 'opacity-100 -translate-x-[45%] -translate-y-1/2',
          ]"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" class="stroke-2">
            <path
              class="fill-current"
              d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
            />
          </g>
        </svg>
      </span>
    </label>

    <button
      class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 dark:ring-offset-slate-900 transition-all duration-300"
      @click="emit('language')"
    >
      <img
        class="h-7 w-7 rounded-full"
        src="/img/icons/flags/united-states-of-america.svg"
        alt="flag icon"
      />
    </button>

    <NavigationToolbarNotifications />

    <button
      class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 dark:ring-offset-slate-900 transition-all duration-300"
      @click="emit('activity')"
    >
      <i class="i-ph-circles-four-duotone w-5 h-5 text-slate-400"></i>
    </button>

    <NavigationToolbarAccountMenu />
  </div>
</template>
