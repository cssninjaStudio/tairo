<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const recentItems = [
  {
    name: 'Nitro Inc.',
    img: '/img/icons/logos/nitro.svg',
    to: '/',
  },
  {
    name: 'Okano Llc.',
    img: '/img/icons/logos/okano.svg',
    to: '/',
  },
  {
    name: 'Flashlite Llc.',
    img: '/img/icons/logos/flashlite.svg',
    to: '/',
  },
  {
    name: 'John Karlo',
    img: '/img/avatars/3.svg',
    to: '/',
  },
  {
    name: 'Hermann Mayer',
    img: '/img/avatars/16.svg',
    to: '/',
  },
  {
    name: 'Melany Smith',
    img: '/img/avatars/25.svg',
    to: '/',
  },
]
</script>

<template>
  <li tag="li" class="!overflow-visible">
    <Disclosure v-slot="{ open }" default-open>
      <div class="flex">
        <DisclosureButton
          type="button"
          class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
        >
          <span class="relative line-clamp-1 text-sm"> Recent</span>
          <Icon
            name="lucide:chevron-down"
            class="relative ms-auto size-4 shrink-0 transition-transform duration-200"
            :class="open ? 'rotate-180' : ''"
          />
        </DisclosureButton>
      </div>
      <transition
        enter-active-class="transition-all duration-500 overflow-hidden"
        enter-from-class="transform max-h-0"
        enter-to-class="transform max-h-[9999px]"
        leave-active-class="transition-all duration-500 overflow-hidden"
        leave-from-class="transform max-h-[9999px]"
        leave-to-class="transform max-h-0"
      >
        <DisclosurePanel as="ul" class="relative">
          <li
            v-for="item in recentItems"
            :key="item.name"
            class="!overflow-visible"
          >
            <div class="relative flex">
              <NuxtLink
                :to="item.to"
                class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
              >
                <img
                  :src="item.img"
                  class="relative size-5 shrink-0 rounded-full"
                  :alt="item.name"
                >
                <span class="relative line-clamp-1 text-sm"> {{ item.name }}</span>
              </NuxtLink>
            </div>
          </li>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </li>
</template>
