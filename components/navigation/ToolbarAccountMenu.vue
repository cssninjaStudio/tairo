<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group text-right inline-flex justify-center items-center">
    <Menu as="div" class="relative w-9 h-9 text-left">
      <MenuButton as="template">
        <button
          class="w-9 h-9 rounded-full ring-1 ring-transparent group-hover:ring-offset-4 group-hover:ring-primary-500 dark:ring-offset-slate-900 inline-flex items-center justify-center transition-all duration-300"
        >
          <div
            class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
          >
            <img
              src="/img/avatars/2.svg"
              class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
              alt="Avatar image"
            />
          </div>
        </button>
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 dark:divide-slate-700 rounded-md bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg focus:outline-none"
        >
          <div class="text-center p-6">
            <div
              class="flex justify-center items-center relative w-20 h-20 mx-auto rounded-full"
            >
              <img
                src="/img/avatars/2.svg"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt="Avatar image"
              />
            </div>
            <div class="mt-3">
              <h6
                class="font-main font-semibold text-sm text-slate-800 dark:text-white"
              >
                Maya Rosselini
              </h6>
              <p class="font-text text-xs text-slate-400 mb-4">maya@tairo.io</p>
              <button
                class="font-sub inline-flex items-center justify-center rounded-lg px-4 py-2 w-full bg-white border border-gray-200 hover:shadow-md hover:shadow-gray-600/10 focus:shadow-md focus:shadow-gray-600/20 text-slate-800 transition-all duration-300"
              >
                <span class="text-sm">Manage Account</span>
              </button>
            </div>
          </div>
          <div class="py-1.5 px-6">
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
                    src="/img/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-none text-slate-800 dark:text-white"
                  >
                    Mike Miller
                  </h6>
                  <p class="font-text text-xs text-slate-400">mike@tairo.io</p>
                </div>
              </NuxtLink>
            </MenuItem>
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
                    src="/img/avatars/9.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-none text-slate-800 dark:text-white"
                  >
                    Claire Baker
                  </h6>
                  <p class="font-text text-xs text-slate-400">
                    claire@tairo.io
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
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
                    src="/img/avatars/14.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-main font-semibold text-xs leading-none text-slate-800 dark:text-white"
                  >
                    Alan Baxter
                  </h6>
                  <p class="font-text text-xs text-slate-400">alan@tairo.io</p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="p-6">
            <button
              class="font-sub inline-flex items-center justify-center rounded-lg px-4 py-2 w-full bg-white border border-gray-200 hover:shadow-md hover:shadow-gray-600/10 focus:shadow-md focus:shadow-gray-600/20 text-slate-800 transition-all duration-300"
            >
              <span class="text-sm">Logout from all</span>
            </button>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
