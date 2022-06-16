<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const props = defineProps<{
  toggled: boolean
}>()

const emit = defineEmits(['toggled', 'language', 'activity'])

const route = useRoute()
</script>

<template>
  <div class="relative flex items-center gap-2 h-16 mb-5 z-50">
    <NavigationBurger :open="props.toggled" @triggered="emit('toggled')" />

    <h2
      class="hidden md:block font-main text-2xl font-semibold text-slate-800 dark:text-white"
    >
      {{ route.meta.title }}
    </h2>

    <BaseThemeToggle class="ml-auto" />

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
