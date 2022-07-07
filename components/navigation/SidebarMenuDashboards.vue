<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Personal
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:coffee-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Personal V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:chart-pie-slice-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Personal V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:cactus-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Personal V3</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Finance
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:gauge-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Analytics dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:coins-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Stocks dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:shopping-cart-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Sales dashboard</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Banking
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:bank-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Banking V1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:bank-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Banking V2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:bank-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Banking V3</span>
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
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Business
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:airplane-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Flights booking</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:buildings-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Company board</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:users-four-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">HR board</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:graduation-cap-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Course dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:briefcase-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Jobs dashboard</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Lifestyle
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:crown-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Influencer</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:confetti-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Hobbies</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:pill-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Health</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:pen-nib-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Writer</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:video-camera-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Video</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:soccer-ball-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Soccer</span>
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
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Ecommerce
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:storefront-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Ecommerce V1</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Apps
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:cookie-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Food delivery</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:map-pin-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Maps v1</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:map-pin-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Maps v2</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:envelope-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Inbox</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:chat-circle-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Messaging</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu divider -->
    <li
      class="h-px w-full border-t border-muted-200 dark:border-muted-700 my-3"
    ></li>
    <!-- Menu item -->
    <li class="flex items-center min-h-[2rem] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-sans text-sm">Wizard</span>
      </NuxtLink>
    </li>
    <!-- Menu divider -->
    <li
      class="h-px w-full border-t border-muted-200 dark:border-muted-700 my-3"
    ></li>
    <!-- Menu item -->
    <li class="group min-h-[2rem] mb-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Charts
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:chart-pie-slice-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Apex Charts</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Widgets
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:square-half-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">UI Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:square-half-bottom-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Creative Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:square-half-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">List Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:square-half-bottom-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Stat Widgets</span>
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
              class="font-sans text-sm text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
            >
              Starters
            </span>
            <BaseIcon
              name="feather:chevron-down"
              class="block w-4 h-4 text-muted-400 ml-auto transition-transform duration-300"
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
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Regular sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Curved sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Colored sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">
                      Curved Colored sidebar
                    </span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon name="ph:sidebar-duotone" class="w-5 h-5 mr-2" />
                    <span class="font-sans text-xs">Hover labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:sidebar-simple-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Regular sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:sidebar-simple-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Curved sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:sidebar-simple-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">Colored sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex items-center h-8">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    <BaseIcon
                      name="ph:sidebar-simple-duotone"
                      class="w-5 h-5 mr-2"
                    />
                    <span class="font-sans text-xs">
                      Curved Colored sideblock
                    </span>
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
