<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative h-10 w-10 text-left">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-800"
        >
          <div
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-full"
          >
            <img
              src="/img/avatars/2.svg"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
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
          class="absolute bottom-0 -right-64 mt-2 w-60 origin-bottom-right divide-y divide-muted-100 rounded-md border border-muted-200 bg-white text-left shadow-lg focus:outline-none dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800"
        >
          <div class="p-6">
            <div class="flex items-center">
              <div
                class="relative inline-flex h-14 w-14 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/2.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
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
                <BaseIcon name="ph:user-circle-duotone" class="h-5 w-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading text-xs font-semibold leading-none text-muted-800 dark:text-white"
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
                <BaseIcon name="ph:briefcase-duotone" class="h-5 w-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading text-xs font-semibold leading-none text-muted-800 dark:text-white"
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
                <BaseIcon name="ph:users-three-duotone" class="h-5 w-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading text-xs font-semibold leading-none text-muted-800 dark:text-white"
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
                <BaseIcon name="ph:gear-six-duotone" class="h-5 w-5" />
                <div class="ml-3">
                  <h6
                    class="font-heading text-xs font-semibold leading-none text-muted-800 dark:text-white"
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
