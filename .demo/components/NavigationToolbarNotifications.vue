<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative h-9 w-9 text-left">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-muted-200 dark:group-hover:ring-muted-700 group-hover:ring-offset-4 dark:ring-offset-muted-900"
        >
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
          >
            <Icon name="ph:bell-duotone" class="h-5 w-5 text-muted-400" />
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
          class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-muted-100 rounded-md border border-muted-200 bg-white shadow-lg focus:outline-none dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800"
        >
          <div class="p-4">
            <div class="relative flex items-center justify-between">
              <h4
                class="font-heading text-xs uppercase text-muted-500 dark:text-muted-200"
              >
                Notifications
              </h4>
              <NuxtLink
                to="/"
                class="font-alt text-sm font-semibold text-primary-500"
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
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <NuxtImg
                    src="/img/avatars/12.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white"
                  >
                    Helen Mariakis
                    <span
                      class="font-normal text-muted-500 dark:text-muted-400"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-sans text-xs text-muted-400">1 hour ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700  text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <NuxtImg
                    src="/img/avatars/19.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white"
                  >
                    Clarissa Perez
                    <span
                      class="font-normal text-muted-500 dark:text-muted-400"
                    >
                      uploaded a file
                    </span>
                  </h6>
                  <p class="font-sans text-xs text-muted-400">2 hours ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700  text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <NuxtImg
                    src="/img/avatars/3.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white"
                  >
                    Mike Miller
                    <span
                      class="font-normal text-muted-500 dark:text-muted-400"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-sans text-xs text-muted-400">3 hours ago</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700  text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <NuxtImg
                    src="/img/avatars/4.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white"
                  >
                    Lana Henriks
                    <span
                      class="font-normal text-muted-500 dark:text-muted-400"
                    >
                      sent you a message
                    </span>
                  </h6>
                  <p class="font-sans text-xs text-muted-400">Yesterday</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink
                to="/"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700  text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <NuxtImg
                    src="/img/avatars/8.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  <h6
                    class="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white"
                  >
                    Dan Walker
                    <span
                      class="font-normal text-muted-500 dark:text-muted-400"
                    >
                      left a comment
                    </span>
                  </h6>
                  <p class="font-sans text-xs text-muted-400">Yesterday</p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
