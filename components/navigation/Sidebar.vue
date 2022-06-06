<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['close', 'search'])
</script>

<template>
  <div
    class="flex fixed top-0 left-0 h-full z-[60] xl:z-10 pointer-events-none"
  >
    <!-- Icon sidebar -->
    <div
      class="relative flex flex-col w-[80px] h-full bg-white border-r border-gray-200 z-20 transition-all duration-300 pointer-events-auto"
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
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 bg-primary-100 text-primary-500 dark:bg-primary-500/10"
          >
            <i class="i-ph-heartbeat-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-grid-four-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-nut-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-app-window-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-chat-circle-duotone w-5 h-5"></i>
          </button>
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
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-gear-six-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NavigationSidebarAccountMenu />
        </div>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      class="relative w-60 h-full bg-white border-r border-gray-200 z-10 transition-all duration-300 pointer-events-auto"
      :class="props.active ? '' : '-translate-x-[calc(100%_-_80px)]'"
    >
      <!-- Header -->
      <div class="flex items-center h-16 w-full px-5">
        <h2 class="font-main text-lg font-semibold text-gray-700">
          Dashboards
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
        <!-- Menu list -->
        <ul class="py-2.5">
          <!-- Menu item -->
          <li class="min-h-[36px] mb-1">
            <Disclosure v-slot="{ open }">
              <DisclosureButton class="w-full">
                <a class="flex items-center">
                  <span class="font-main text-sm text-gray-500">Personal</span>
                  <i
                    class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
                    :class="open ? 'rotate-180' : ''"
                  ></i>
                </a>
              </DisclosureButton>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-5"
                enter-to-class=" opacity-100 translate-y-0"
                leave-active-class="transition-all duration-300 ease-out"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-5"
              >
                <div v-show="open">
                  <DisclosurePanel static>
                    <ul class="pl-5 py-2">
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">Personal V1</span>
                        </NuxtLink>
                      </li>
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">Personal V2</span>
                        </NuxtLink>
                      </li>
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">Personal V3</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </div>
              </transition>
            </Disclosure>
          </li>
          <!-- Menu item -->
          <li class="min-h-[36px] mb-1">
            <Disclosure v-slot="{ open }">
              <DisclosureButton class="w-full">
                <a class="flex items-center">
                  <span class="font-main text-sm text-slate-500">Finance</span>
                  <i
                    class="i-feather-chevron-down block w-4 h-4 text-slate-400 ml-auto transition-transform duration-300"
                    :class="open ? 'rotate-180' : ''"
                  ></i>
                </a>
              </DisclosureButton>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-5"
                enter-to-class=" opacity-100 translate-y-0"
                leave-active-class="transition-all duration-300 ease-out"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-5"
              >
                <div v-show="open">
                  <DisclosurePanel static>
                    <ul class="pl-5 py-2">
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">
                            Analytics Dashboard
                          </span>
                        </NuxtLink>
                      </li>
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">
                            Stocks Dashboard
                          </span>
                        </NuxtLink>
                      </li>
                      <li class="flex items-center h-8">
                        <NuxtLink
                          to="/"
                          class="flex items-center text-slate-400"
                        >
                          <i
                            class="i-ion-ios-analytics-outline w-6 h-6 mr-2"
                          ></i>
                          <span class="font-text text-xs">Sales Dashboard</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </div>
              </transition>
            </Disclosure>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
