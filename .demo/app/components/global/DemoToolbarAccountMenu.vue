<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group relative z-20 inline-flex items-center justify-center text-end">
    <DropdownMenuRoot>
      <DropdownMenuTrigger class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
        <div
          class="relative inline-flex size-9 items-center justify-center rounded-full"
        >
          <img
            src="/img/avatars/2.svg"
            class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
            alt=""
          >
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          side="bottom"
          class="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none origin-top-right starting:scale-95 starting:opacity-0 transition-all duration-100"
        >
          <div class="p-6 text-center">
            <div
              class="relative mx-auto flex size-20 items-center justify-center rounded-full"
            >
              <img
                src="/img/avatars/2.svg"
                class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                alt=""
              >
            </div>
            <div class="mt-3">
              <h6
                class="font-heading text-muted-800 text-sm font-medium dark:text-white"
              >
                Maya Rosselini
              </h6>
              <p class="text-muted-400 mb-4 font-sans text-xs">
                maya@tairo.io
              </p>
              <DropdownMenuItem as-child>
                <BaseButton
                  to="/layouts/profile-edit"
                  rounded="lg"
                  class="w-full"
                >
                  Manage Account
                </BaseButton>
              </DropdownMenuItem>
            </div>
          </div>
          <div class="px-6 py-1.5">
            <DropdownMenuItem
              v-for="user in [
                {
                  avatar: '/img/avatars/3.svg',
                  name: 'Mike Miller',
                  email: 'mike@tairo.io',
                },
                {
                  avatar: '/img/avatars/9.svg',
                  name: 'Claire Baker',
                  email: 'claire@tairo.io',
                },
                {
                  avatar: '/img/avatars/14.svg',
                  name: 'Alan Baxter',
                  email: 'alan@tairo.io',
                },
              ]"
              :key="user.email"
              as="div"
            >
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 in-data-highlighted:bg-muted-100 in-data-highlighted:dark:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-500"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    :src="user.avatar"
                    class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                    alt=""
                  >
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    {{ user.name }}
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    {{ user.email }}
                  </p>
                </div>
              </NuxtLink>
            </DropdownMenuItem>
          </div>

          <div class="p-6">
            <DropdownMenuItem as-child>
              <BaseButton
                rounded="lg"
                class="w-full"
              >
                Logout
              </BaseButton>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>
