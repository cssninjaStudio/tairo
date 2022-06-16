<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import SidebarMenuDashboardsVue from './SidebarMenuDashboards.vue'

const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['close', 'open', 'search'])
const activeSidebarMenu = ref('dashboards')
</script>

<template>
  <div
    class="flex fixed top-0 left-0 h-full z-[60] xl:z-10 pointer-events-none"
  >
    <!-- Icon sidebar -->
    <div
      class="relative flex flex-col w-[80px] h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 z-20 transition-all duration-300 pointer-events-auto"
      :class="props.active ? '' : '-translate-x-full xl:translate-x-0'"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center w-full h-16">
        <NuxtLink to="/" class="flex items-center justify-center">
          <img
            class="block h-10"
            src="/img/logos/logo/logo.svg"
            alt="Tairo logo"
          />
        </NuxtLink>
      </div>
      <!-- Top Menu -->
      <div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
            :class="
              activeSidebarMenu === 'dashboards'
                ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
                : 'text-gray-400'
            "
            @click=";(activeSidebarMenu = 'dashboards'), emit('open')"
          >
            <i class="i-ph-heartbeat-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
            :class="
              activeSidebarMenu === 'layouts'
                ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
                : 'text-gray-400'
            "
            @click=";(activeSidebarMenu = 'layouts'), emit('open')"
          >
            <i class="i-ph-grid-four-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
            :class="
              activeSidebarMenu === 'elements'
                ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
                : 'text-gray-400'
            "
            @click=";(activeSidebarMenu = 'elements'), emit('open')"
          >
            <i class="i-ph-nut-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
            :class="
              activeSidebarMenu === 'components'
                ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
                : 'text-gray-400'
            "
            @click=";(activeSidebarMenu = 'components'), emit('open')"
          >
            <i class="i-ph-app-window-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NuxtLink
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-chat-circle-duotone w-5 h-5"></i>
          </NuxtLink>
        </div>
      </div>
      <!-- Bottom Menu -->
      <div class="mt-auto">
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-square-half-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
            @click="emit('search')"
          >
            <i class="i-ph-magnifying-glass-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NuxtLink
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-gear-six-duotone w-5 h-5"></i>
          </NuxtLink>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NavigationSidebarAccountMenu />
        </div>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      class="relative w-60 h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 z-10 transition-all duration-300 pointer-events-auto"
      :class="props.active ? '' : '-translate-x-[calc(100%_-_80px)]'"
    >
      <!-- Header -->
      <div class="flex items-center h-16 w-full px-5">
        <h2
          class="font-main text-lg font-semibold text-gray-700 dark:text-white capitalize"
        >
          {{ activeSidebarMenu }}
        </h2>
        <button
          class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
          @click="emit('close')"
        >
          <i class="i-feather-chevron-left w-6 h-6"></i>
        </button>
      </div>
      <!-- Body -->
      <div class="relative h-[calc(100%_-_64px)] w-full overflow-y-auto px-5">
        <!-- Menu list (Dashboards) -->
        <NavigationSidebarMenuDashboards
          v-if="activeSidebarMenu === 'dashboards'"
        />

        <!-- Menu list (Layouts) -->
        <NavigationSidebarMenuLayouts
          v-else-if="activeSidebarMenu === 'layouts'"
        />

        <!-- Menu list (Elements) -->
        <NavigationSidebarMenuElements
          v-else-if="activeSidebarMenu === 'elements'"
        />

        <!-- Menu list (Components) -->
        <NavigationSidebarMenuComponents
          v-else-if="activeSidebarMenu === 'components'"
        />
      </div>
    </div>
  </div>
</template>
