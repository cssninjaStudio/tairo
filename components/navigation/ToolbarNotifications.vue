<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group text-right inline-flex justify-center items-center">
    <Menu as="div" class="relative w-9 h-9 text-left">
      <MenuButton as="template">
        <button
          type="button"
          class="w-9 h-9 rounded-full ring-1 ring-transparent group-hover:ring-offset-4 group-hover:ring-primary-500 dark:ring-offset-slate-900 inline-flex items-center justify-center transition-all duration-300"
        >
          <span
            class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <BaseIcon name="ph:bell-duotone" class="w-5 h-5 text-slate-400" />
          </span>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-slate-100 dark:divide-slate-700 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg focus:outline-none"
        >
          <div class="p-4">
            <div class="flex justify-between items-center relative">
              <h4
                class="font-main uppercase text-xs text-slate-500 dark:text-slate-200"
              >
                Notifications
              </h4>
              <NuxtLink
                to="/"
                class="font-sub text-sm font-semibold text-primary-500"
              >
                View All
              </NuxtLink>
            </div>
          </div>
          <div class="p-4">
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700 text-primary-500'
                    : 'text-slate-500',
                ]"
              >
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="/img/avatars/12.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
                  >
                    Helen Mariakis
                    <span
                      class="text-slate-500 dark:text-slate-400 font-normal"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-text text-xs text-slate-400">1 hour ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700  text-primary-500'
                    : 'text-slate-500',
                ]"
              >
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="/img/avatars/19.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
                  >
                    Clarissa Perez
                    <span
                      class="text-slate-500 dark:text-slate-400 font-normal"
                    >
                      uploaded a file
                    </span>
                  </h6>
                  <p class="font-text text-xs text-slate-400">2 hours ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700  text-primary-500'
                    : 'text-slate-500',
                ]"
              >
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
                  >
                    Mike Miller
                    <span
                      class="text-slate-500 dark:text-slate-400 font-normal"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-text text-xs text-slate-400">3 hours ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700  text-primary-500'
                    : 'text-slate-500',
                ]"
              >
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="/img/avatars/4.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
                  >
                    Lana Henriks
                    <span
                      class="text-slate-500 dark:text-slate-400 font-normal"
                    >
                      sent you a message
                    </span>
                  </h6>
                  <p class="font-text text-xs text-slate-400">Yesterday</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700  text-primary-500'
                    : 'text-slate-500',
                ]"
              >
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="/img/avatars/8.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-tight text-slate-800 dark:text-white"
                  >
                    Dan Walker
                    <span
                      class="text-slate-500 dark:text-slate-400 font-normal"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-text text-xs text-slate-400">Yesterday</p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
