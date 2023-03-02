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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-bullets-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">List view V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/list-view-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-bullets-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">List view V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/list-view-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-bullets-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">List view V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/list-view-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-bullets-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/flex-list-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-checks-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Flex list V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/flex-list-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-checks-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Flex list V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/flex-list-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:list-checks-duotone" class="mr-2 h-5 w-5" />
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
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Table lists
            </span>
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/table-list-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:table-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Table list V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/table-list-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:table-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Table list V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/table-list-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:table-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Table list V3</span>
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/form-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/form-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/form-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/form-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:article-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Form layout V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/form-5"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:article-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/placeload-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/placeload-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/placeload-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Placeload V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/placeload-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:timer-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/card-grid-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:circles-four-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Card grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/card-grid-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:circles-four-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Card grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/card-grid-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:circles-four-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Card grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/card-grid-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:circles-four-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/tile-grid-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:selection-foreground-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Tile grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/tile-grid-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:selection-foreground-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Tile grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/tile-grid-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/user-grid-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:users-three-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">User grid V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/user-grid-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:users-three-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">User grid V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/user-grid-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:users-three-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">User grid V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/user-grid-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:users-three-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/project-list-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/project-list-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/project-list-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:leaf-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Projects V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/project-details"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:note-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Project details</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/project-board"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:squares-four-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/login-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/login-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:lock-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Login V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/signup-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:magic-wand-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Signup V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/signup-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:magic-wand-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Signup V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/auth/signup-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:magic-wand-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/profile"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:user-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Profile</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/profile-edit"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:user-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Edit profile</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/profile-notifications"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:notification-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Notifications</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/profile-settings"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:gear-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Settings</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/search-results"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:magnifying-glass-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Search results</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/search-empty"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:magnifying-glass-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Empty search</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-billing"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:credit-card-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">SaaS billing</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-action-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:lightning-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Action page v1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-action-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:lightning-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-confirm"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:square-logo-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Confirm account</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-promotion"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:circle-wavy-check-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Promotion</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-invoice"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:note-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Invoice</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-status"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:notification-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Service status</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/utility-roadmap"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:notification-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Roadmap</span>
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/onboarding-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:hand-waving-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Onboarding V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/onboarding-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:hand-waving-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Onboarding V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/onboarding-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:hand-waving-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Onboarding V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/onboarding-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:hand-waving-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Onboarding V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/onboarding-5"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:hand-waving-duotone" class="mr-2 h-5 w-5" />
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
            <Icon
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/error-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/error-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/error-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V3</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/error-4"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Error V4</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/layouts/error-5"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:skull-duotone" class="mr-2 h-5 w-5" />
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
