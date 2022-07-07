<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group text-right inline-flex justify-center items-center">
    <Menu as="div" class="relative w-10 h-10 text-left">
      <MenuButton as="template">
        <button
          type="button"
          class="w-10 h-10 rounded-full ring-1 ring-transparent group-hover:ring-offset-4 group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex items-center justify-center transition-all duration-300"
        >
          <div
            class="inline-flex justify-center items-center relative w-10 h-10 rounded-full"
          >
            <img
              src="/img/avatars/2.svg"
              class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
              alt=""
            />
          </div>
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
          class="absolute bottom-0 -right-64 text-left mt-2 w-60 origin-bottom-right divide-y divide-muted-100 dark:divide-muted-700 rounded-md bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 shadow-lg focus:outline-none"
        >
          <div class="p-6">
            <div class="flex items-center">
              <div
                class="inline-flex justify-center items-center relative w-14 h-14 rounded-full"
              >
                <img
                  src="/img/avatars/2.svg"
                  class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Maya Rosselini
                </h6>
                <p class="font-sans text-xs text-muted-400">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="p-1.5">
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
                <BaseIcon name="ph:user-circle-duotone" class="w-5 h-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading font-semibold text-xs leading-none text-muted-800 dark:text-white"
                  >
                    Profile
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    View your profile
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
          <div class="p-1.5">
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
                <BaseIcon name="ph:briefcase-duotone" class="w-5 h-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading font-semibold text-xs leading-none text-muted-800 dark:text-white"
                  >
                    Projects
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    All my projects
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
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
              >
                <BaseIcon name="ph:users-three-duotone" class="w-5 h-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading font-semibold text-xs leading-none text-muted-800 dark:text-white"
                  >
                    Team
                  </h6>
                  <p class="font-sans text-xs text-muted-400">Manage my team</p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="p-1.5">
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
                <BaseIcon name="ph:gear-six-duotone" class="w-5 h-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading font-semibold text-xs leading-none text-muted-800 dark:text-white"
                  >
                    Settings
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    Account settings
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="p-1.5">
            <BaseButton
              color="primary"
              shape="curved"
              icon="ph:lock-duotone"
              class="w-full"
            >
              <span>Logout</span>
            </BaseButton>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
