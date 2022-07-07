<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Lists
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-bullets-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">List view V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-bullets-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">List view V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-bullets-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">List view V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-bullets-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">List view V4</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Flex lists
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-checks-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Flex list V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-checks-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Flex list V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:list-checks-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Flex list V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Form layouts
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V5</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Placeloads
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V4</span>
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
      class="my-4 h-px w-full border-t border-muted-200 dark:border-muted-700"
    ></li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Card grids
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:circles-four-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Card grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:circles-four-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Card grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:circles-four-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Card grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:circles-four-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Card grid V4</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Tile grids
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:selection-foreground-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Tile grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:selection-foreground-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Tile grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:selection-foreground-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Tile grid V3</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              User grids
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:users-three-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">User grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:users-three-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">User grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:users-three-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">User grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:users-three-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">User grid V4</span>
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
      class="my-4 h-px w-full border-t border-muted-200 dark:border-muted-700"
    ></li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Projects
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:note-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Project details</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:squares-four-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Kanban board</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Auth
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:magic-wand-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Signup V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:magic-wand-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Signup V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:magic-wand-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Signup flow</span>
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
      class="my-4 h-px w-full border-t border-muted-200 dark:border-muted-700"
    ></li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Subpages
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:user-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Profile</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:user-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Edit profile</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:notification-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Notifications</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:gear-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Settings</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:magnifying-glass-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Search results</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:magnifying-glass-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Empty search</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:credit-card-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">SaaS billing</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:lightning-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Action page v1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:lightning-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Action page v2</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Utility
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:square-logo-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Confirm account</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:circle-wavy-check-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Promotion</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:note-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Invoice</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:notification-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Service status</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Onboarding
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:hand-waving-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Onboarding V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:hand-waving-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Onboarding V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:hand-waving-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Onboarding V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:hand-waving-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Onboarding V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon
                      name="ph:hand-waving-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Onboarding V5</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Error
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="py-2 pl-5">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <BaseIcon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V5</span>
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
