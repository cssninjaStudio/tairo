<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
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
                    <i class="i-ph-coffee-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Personal V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-chart-pie-slice-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Personal V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-cactus-duotone w-5 h-5 mr-2"></i>
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
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Finance
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
                    <i class="i-ph-gauge-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Analytics dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-coins-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Stocks dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-shopping-cart-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Sales dashboard</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Banking
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
                    <i class="i-ph-bank-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Banking V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-bank-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Banking V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-bank-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Banking V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Business
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
                    <i class="i-ph-airplane-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Flights booking</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-buildings-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Company board</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-users-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">HR board</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-graduation-cap-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Course dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-briefcase-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Jobs dashboard</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Lifestyle
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
                    <i class="i-ph-crown-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Influencer</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-confetti-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Hobbies</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-pill-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Health</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-pen-nib-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Writer</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-video-camera-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Video</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-soccer-ball-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Soccer</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Ecommerce
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
                    <i class="i-ph-storefront-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Ecommerce V1</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Apps
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
                    <i class="i-ph-cookie-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Food delivery</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-map-pin-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Maps v1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-map-pin-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Maps v2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-envelope-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Inbox</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-chat-circle-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Messaging</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu divider -->
    <li
      class="h-px w-full border-t border-gray-200 dark:border-slate-700 my-3"
    ></li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Wizard</span>
      </NuxtLink>
    </li>
    <!-- Menu divider -->
    <li
      class="h-px w-full border-t border-gray-200 dark:border-slate-700 my-3"
    ></li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Charts
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
                    <i class="i-ph-chart-pie-slice-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Apex Charts</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Widgets
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
                    <i class="i-ph-square-half-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">UI Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-square-half-bottom-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Creative Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-square-half-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">List Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-square-half-bottom-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Stat Widgets</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Starters
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
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Regular sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Curved sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Colored sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">
                      Curved Colored sidebar
                    </span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Hover labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-simple-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Regular sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-simple-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Curved sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-simple-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Colored sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-sidebar-simple-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">
                      Curved Colored sideblock
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
  </ul>
</template>
