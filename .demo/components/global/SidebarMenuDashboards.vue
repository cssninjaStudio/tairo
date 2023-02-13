<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <ul>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Personal
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:coffee-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Personal V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/personal-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:chart-pie-slice-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Personal V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/personal-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:cactus-duotone" class="mr-2 h-5 w-5" />
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Finance
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/analytics"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:gauge-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Analytics dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/stocks"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:coins-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Stocks dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/sales"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:shopping-cart-duotone"
                      class="mr-2 h-5 w-5"
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Banking
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/banking-1"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:bank-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Banking V1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/banking-2"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:bank-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Banking V2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/banking-3"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:bank-duotone" class="mr-2 h-5 w-5" />
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Business
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/flights"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:airplane-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Flights booking</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/company"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:buildings-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Company board</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/human-resources"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:users-four-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">HR board</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/course"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:graduation-cap-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Course dashboard</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/jobs"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:briefcase-duotone" class="mr-2 h-5 w-5" />
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Lifestyle
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/influencer"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:crown-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Influencer</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/hobbies"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:confetti-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Hobbies</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/health"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:pill-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Health</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/writer"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:pen-nib-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Writer</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/video"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:video-camera-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Video</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/soccer"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:soccer-ball-duotone" class="mr-2 h-5 w-5" />
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Ecommerce
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/ecommerce"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:storefront-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Ecommerce</span>
                  </NuxtLink>
                </li>
              </ul>
            </DisclosurePanel>
          </div>
        </Transition>
      </Disclosure>
    </li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Apps
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/delivery"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:cookie-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Food delivery</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/map-left"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:map-pin-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Maps v1</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/map-right"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:map-pin-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Maps v2</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/inbox"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:envelope-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Inbox</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/dashboards/messaging"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:chat-circle-duotone" class="mr-2 h-5 w-5" />
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
      class="my-3 h-px w-full border-t border-muted-200 dark:border-muted-700"
    ></li>
    <!-- Menu item -->
    <li class="mb-1 flex min-h-[2rem] items-center">
      <NuxtLink
        to="/wizard"
        class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
      >
        <span class="font-sans text-sm">Wizard</span>
      </NuxtLink>
    </li>
    <!-- Menu divider -->
    <li
      class="my-3 h-px w-full border-t border-muted-200 dark:border-muted-700"
    ></li>
    <!-- Menu item -->
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Charts
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/widgets/charts"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:chart-pie-slice-duotone"
                      class="mr-2 h-5 w-5"
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Widgets
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/widgets"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:square-half-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">UI Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/widgets/creative"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:square-half-bottom-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Creative Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/widgets/list"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:square-half-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">List Widgets</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/widgets/stats"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:square-half-bottom-duotone"
                      class="mr-2 h-5 w-5"
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
    <li class="group mb-1 min-h-[2rem]">
      <Disclosure v-slot="{ open }">
        <DisclosureButton class="w-full">
          <a class="relative top-0.5 flex items-center">
            <span
              class="font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
            >
              Starters
            </span>
            <Icon
              name="feather:chevron-down"
              class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
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
              <ul class="py-2 pl-3">
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Regular sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Curved sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Colored sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">
                      Curved Colored sidebar
                    </span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon name="ph:sidebar-duotone" class="mr-2 h-5 w-5" />
                    <span class="font-sans text-xs">Hover labels sidebar</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:sidebar-simple-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Regular sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:sidebar-simple-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Curved sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:sidebar-simple-duotone"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="font-sans text-xs">Colored sideblock</span>
                  </NuxtLink>
                </li>
                <li class="flex h-8 items-center">
                  <NuxtLink
                    to="/"
                    class="flex items-center text-muted-400 transition-colors duration-300 hover:text-primary-500"
                  >
                    <Icon
                      name="ph:sidebar-simple-duotone"
                      class="mr-2 h-5 w-5"
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
