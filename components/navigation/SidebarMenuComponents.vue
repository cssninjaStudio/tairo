<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const route = useRoute()
</script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Components Hub</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="flex items-center min-h-[2rem] mt-4 mb-1">
      <span class="font-text text-[.7rem] font-medium uppercase text-slate-500">
        Display
      </span>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure
        v-slot="{ open }"
        :default-open="route.path.startsWith('/components/avatar')"
      >
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Avatars
            </span>
            <i
              class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            ></i>
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class=" opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="pl-4 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/components/avatar"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Avatar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/components/avatar-group"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Avatar group</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/icon-box"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Icon box</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/snack"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Snack</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/tag"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Tag</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="min-h-[2rem] mt-4 mb-1">
      <span class="font-text text-[.7rem] font-medium uppercase text-slate-500">
        Layout
      </span>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/breadcrumb"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Breadcrumb</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure
        v-slot="{ open }"
        :default-open="route.path.startsWith('/components/tabs')"
      >
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Tabs
            </span>
            <i
              class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            ></i>
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class=" opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="pl-4 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/components/tabs"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Nav Tabs</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/components/tabs-slider"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Slider tabs</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/table"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Table</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/flex-table"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Flex Table</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/pagination"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Pagination</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/accordion"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Accordion</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/card"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Card</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/components/placeholder"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Placeholder</span>
      </NuxtLink>
    </li>
  </ul>
</template>
