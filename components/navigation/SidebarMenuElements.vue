<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Elements Hub</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="flex items-center min-h-[2rem] mt-4 mb-1">
      <span class="font-text text-[.7rem] font-medium uppercase text-slate-500">
        Styling
      </span>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/overview"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Overview</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/content"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Content</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/icons"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Icons</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="flex items-center min-h-[2rem] mt-4 mb-1">
      <span class="font-text text-[.7rem] font-medium uppercase text-slate-500">
        Interaction
      </span>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Buttons
            </span>
            <BaseIcon
              name="feather:chevron-down" class="block w-4 h-4 text-slate-400 ml-auto transition-transform duration-300"
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
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/button"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Button</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/action"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Action</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/iconbutton"
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
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Forms
            </span>
            <BaseIcon
              name="feather:chevron-down" class="block w-4 h-4 text-slate-400 ml-auto transition-transform duration-300"
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
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/input"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Input</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/select"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Select</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/textarea"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Textarea</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/checkbox"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Checkbox</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/radio"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Radio</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/file"
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
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Switches
            </span>
            <BaseIcon
              name="feather:chevron-down" class="block w-4 h-4 text-slate-400 ml-auto transition-transform duration-300"
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
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/animated-checkbox"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">
                      Animated checkbox
                    </span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/switch"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Switch blocks</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/dropdown"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Dropdown</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/placeload"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Placeload</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/message"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Message</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/modal"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Modal</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/progress"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Progress</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/elements/tooltip"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Tooltip</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-text text-sm text-slate-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Addons
            </span>
            <BaseIcon
              name="feather:chevron-down" class="block w-4 h-4 text-slate-400 ml-auto transition-transform duration-300"
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
              <ul class="pl-5 py-2">
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/autocomplete"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Autocomplete</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/combobox"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Combo box</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/carousel"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Carousel</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/popover"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Popover</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/slider"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Range slider</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/elements/form/editor"
                    class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <span class="font-text text-[.85rem]">Rich text</span>
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
