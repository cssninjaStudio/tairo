<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-main text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
            >
              Personal
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
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ion-ios-analytics-outline w-6 h-6 mr-2"></i>
                    <span class="font-text text-xs">Personal V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ion-ios-analytics-outline w-6 h-6 mr-2"></i>
                    <span class="font-text text-xs">Personal V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ion-ios-analytics-outline w-6 h-6 mr-2"></i>
                    <span class="font-text text-xs">Personal V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
  </ul>
</template>
