<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const props = defineProps<{
  horizontal?: boolean
}>()
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative h-10 w-10 text-left" v-slot="{ close }">
      <MenuButton as="template">
        <button
          type="button"
          class="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
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
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 origin-bottom-right rounded-md border bg-white text-left shadow-lg focus:outline-none"
          :class="props.horizontal ? 'top-10 end-0' : 'bottom-0 -end-64'"
        >
          <div class="bg-muted-50 dark:bg-muted-700/40 p-6">
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
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-medium dark:text-white"
                >
                  Maya Rosselini
                </h6>
                <p class="text-muted-400 font-sans text-xs">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/profile"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:user-circle-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Profile
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    View your profile
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/projects"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:briefcase-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Projects
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    All my projects
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/user-grid-4"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:users-three-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Team
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">Manage my team</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/profile-edit"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Settings
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Account settings
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
