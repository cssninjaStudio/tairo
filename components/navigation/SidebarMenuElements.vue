<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/elements"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Elements Hub</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="min-h-[36px] mt-4 mb-1">
      <span class="font-sub text-xs uppercase text-slate-500">Interaction</span>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Dropdown</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Placeload</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/components/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Message</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/components/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Modal</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/components/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Progress</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/components/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Tooltip</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Buttons
            </span>
            <i
              class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            ></i>
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class=" opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Button</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Action</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Icon button</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Forms
            </span>
            <i
              class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            ></i>
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class=" opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Input</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Select</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Textarea</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Checkbox</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Radio</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">File input</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[36px] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Switches
            </span>
            <i
              class="i-feather-chevron-down block w-4 h-4 text-gray-400 ml-auto transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            ></i>
          </a>
        </DisclosureButton>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class=" opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-out"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div v-show="open">
            <DisclosurePanel static>
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">
                      Animated checkbox
                    </span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Switch block</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Switch segment</span>
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
