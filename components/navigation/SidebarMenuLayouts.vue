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
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Lists
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
                    <i class="i-ph-list-bullets-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">List view V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-list-bullets-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">List view V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-list-bullets-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">List view V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-list-bullets-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">List view V4</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Flex lists
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
                    <i class="i-ph-list-checks-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Flex list V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-list-checks-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Flex list V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-list-checks-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Flex list V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Form layouts
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
                    <i class="i-ph-article-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Form layout V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-article-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Form layout V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-article-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Form layout V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-article-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Form layout V4</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-article-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Form layout V5</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Placeloads
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
                    <i class="i-ph-timer-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Placeload V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-timer-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Placeload V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-timer-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Placeload V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-timer-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Placeload V4</span>
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
      class="h-px w-full border-t border-gray-200 dark:border-slate-700 my-4"
    ></li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Card grids
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
                    <i class="i-ph-circles-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Card grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-circles-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Card grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-circles-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Card grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-circles-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Card grid V4</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Tile grids
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
                    <i
                      class="i-ph-selection-foreground-duotone w-5 h-5 mr-2"
                    ></i>
                    <span class="font-text text-xs">Tile grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i
                      class="i-ph-selection-foreground-duotone w-5 h-5 mr-2"
                    ></i>
                    <span class="font-text text-xs">Tile grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i
                      class="i-ph-selection-foreground-duotone w-5 h-5 mr-2"
                    ></i>
                    <span class="font-text text-xs">Tile grid V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              User grids
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
                    <i class="i-ph-users-three-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">User grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-users-three-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">User grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-users-three-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">User grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-users-three-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">User grid V4</span>
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
      class="h-px w-full border-t border-gray-200 dark:border-slate-700 my-4"
    ></li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Projects
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
                    <i class="i-ph-leaf-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Projects V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-leaf-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Projects V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-leaf-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Projects V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-note-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Project details</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-squares-four-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Kanban board</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Auth
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
                    <i class="i-ph-lock-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Login V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-lock-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Login V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-lock-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Login V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-magic-wand-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Signup V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-magic-wand-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Signup V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-magic-wand-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Signup flow</span>
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
      class="h-px w-full border-t border-gray-200 dark:border-slate-700 my-4"
    ></li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Subpages
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
                    <i class="i-ph-user-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Profile</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-user-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Edit profile</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-notification-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Notifications</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-gear-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Settings</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-magnifying-glass-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Search results</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-magnifying-glass-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Empty search</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-credit-card-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">SaaS billing</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-lightning-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Action page v1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-lightning-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Action page v2</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Utility
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
                    <i class="i-ph-square-logo-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Confirm account</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-circle-wavy-check-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Promotion</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-note-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Invoice</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-notification-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Service status</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Onboarding
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
                    <i class="i-ph-hand-waving-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Onboarding V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-hand-waving-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Onboarding V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-hand-waving-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Onboarding V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-hand-waving-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Onboarding V4</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-hand-waving-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Onboarding V5</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Error
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
                    <i class="i-ph-skull-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Error V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-skull-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Error V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-skull-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Error V3</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-skull-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Error V4</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <i class="i-ph-skull-duotone w-5 h-5 mr-2"></i>
                    <span class="font-text text-xs">Error V5</span>
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
