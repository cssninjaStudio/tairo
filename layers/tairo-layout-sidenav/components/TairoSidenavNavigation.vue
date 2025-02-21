<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useSidenav } from '../composables/sidenav'

const { toggle, isMobileOpen, menuItems } = useSidenav()
const app = useAppConfig()
const route = useRoute()

const startMenuItems = computed(
  () =>
    menuItems.value?.filter(
      sidenav => !sidenav.position || sidenav.position === 'start',
    ),
)
const endMenuItems = computed(
  () => menuItems.value?.filter(sidenav => sidenav.position === 'end'),
)

const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 fixed start-0 top-0 z-50 flex size-full max-w-[260px] flex-col items-stretch border-b bg-white transition-transform duration-300 lg:z-0 lg:border-b-0 lg:border-r"
    :class="isMobileOpen ? 'translate-x-0 lg:translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <div class="mb-4 flex h-16 min-w-0 shrink-0 items-center gap-x-4 px-4">
      <div class="flex min-w-0 flex-1 items-center justify-between gap-x-1.5">
        <div class="flex min-w-0 flex-1 items-center gap-1.5">
          <slot name="header">
            <component
              :is="
                resolveComponentOrNative(
                  app.tairo?.sidenav?.navigation?.header?.component,
                )
              "
              v-if="app.tairo?.sidenav?.navigation?.header?.component"
            />
          </slot>
          <div class="ltablet:block ms-auto lg:hidden">
            <BaseButton
              size="icon-sm"
              rounded="lg"
              class="mt-0.5 scale-90"
              @click="toggle"
            >
              <Icon name="lucide:x" class="size-4" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex w-full flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 grow flex-col gap-y-2 py-2">
        <div class="flex w-full flex-col px-4">
          <BaseInput
            icon="lucide:search"
            contrast="default-contrast"
            size="sm"
            rounded="md"
            placeholder="Search"
            color-focus
            readonly
            :classes="{
              input: 'cursor-pointer',
            }"
            @click="isSearchOpen = true"
          >
            <template #action>
              <div class="absolute end-1 top-1 flex gap-1">
                <BaseKbd
                  size="xs"
                  rounded="md"
                >
                  Ctrl
                </BaseKbd>
                <BaseKbd
                  size="xs"
                  rounded="md"
                  class="px-2!"
                >
                  K
                </BaseKbd>
              </div>
            </template>
          </BaseInput>
        </div>
        <div class="nui-slimscroll flex flex-1 flex-col gap-y-2 overflow-y-auto px-4">
          <!-- Menu -->
          <ul class="relative min-h-[auto]! min-w-[auto]!">
            <template v-for="item in startMenuItems" :key="item.name">
              <li v-if="!item.children" class="overflow-visible!">
                <div class="flex">
                  <NuxtLink
                    v-if="item.to"
                    :to="item.to"
                    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                    exact-active-class="text-muted-900 dark:text-white before:bg-muted-100 dark:before:bg-muted-800"
                  >
                    <Icon
                      :name="item.icon?.name"
                      class="relative size-5 shrink-0"
                      :class="item.to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
                    />
                    <span class="relative truncate text-sm">{{ item.name }}</span>
                    <span
                      v-if="item.count"
                      class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    >{{ item.count }}
                    </span>
                  </NuxtLink>
                  <button
                    v-else
                    type="button"
                    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                  >
                    <Icon
                      :name="item.icon?.name"
                      class="relative size-5 shrink-0"
                      :class="item.to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
                    />
                    <span class="relative truncate text-sm">{{ item.name }}</span>
                    <span
                      v-if="item.count"
                      class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    >{{ item.count }}
                    </span>
                  </button>
                </div>
              </li>
              <li v-else class="overflow-visible!">
                <Disclosure v-slot="{ open }">
                  <div class="flex">
                    <DisclosureButton
                      type="button"
                      class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                    >
                      <Icon
                        v-if="item.icon"
                        :name="item.icon?.name"
                        class="text-muted-400 group-hover:text-muted-700 dark:text-muted-500 dark:group-hover:text-muted-200 relative size-5 shrink-0"
                      />
                      <span class="relative line-clamp-1 text-sm"> {{ item.name }}</span>
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
                        v-for="subitem in item.children"
                        :key="subitem.name"
                        class="overflow-visible!"
                      >
                        <div class="relative flex">
                          <NuxtLink
                            :to="subitem.to"
                            class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                            exact-active-class="text-muted-900 dark:text-white before:bg-muted-100 dark:before:bg-muted-800"
                          >
                            <span class="relative mx-[9.5px] h-full w-px">
                              <span
                                class="bg-muted-400 group-hover:bg-muted-700 dark:bg-muted-500 dark:group-hover:bg-muted-200 absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
                              />
                            </span>
                            <span class="relative line-clamp-1 text-sm"> {{ subitem.name }}</span>
                          </NuxtLink>
                        </div>
                      </li>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </li>
            </template>
          </ul>
          <!-- Divider -->
          <div class="align-center flex w-full flex-row items-center text-center">
            <div class="border-muted-200 dark:border-muted-800 flex w-full border-t" />
          </div>
          <!-- Recent -->
          <ul class="relative min-h-[auto]! min-w-[auto]!">
            <slot name="center">
              <component
                :is="
                  resolveComponentOrNative(
                    app.tairo?.sidenav?.navigation?.center?.component,
                  )
                "
                v-if="app.tairo?.sidenav?.navigation?.center?.component"
              />
            </slot>
          </ul>
          <!-- Spacer -->
          <div class="flex-1" />
          <!-- End Menu -->
          <ul class="relative min-h-[auto]! min-w-[auto]!">
            <template v-for="item in endMenuItems" :key="item.name">
              <li v-if="!item.children" class="overflow-visible!">
                <div class="flex">
                  <NuxtLink
                    v-if="item.to"
                    :to="item.to"
                    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                    exact-active-class="text-muted-900 dark:text-white before:bg-muted-100 dark:before:bg-muted-800"
                  >
                    <Icon
                      :name="item.icon?.name"
                      class="relative size-5 shrink-0"
                      :class="item.to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
                    />
                    <span class="relative truncate text-sm">{{ item.name }}</span>
                    <span
                      v-if="item.count"
                      class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    >{{ item.count }}
                    </span>
                  </NuxtLink>
                  <button
                    v-else
                    type="button"
                    class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                    @click="item.click"
                  >
                    <Icon
                      :name="item.icon?.name"
                      class="relative size-5 shrink-0"
                      :class="item.to === route.fullPath ? 'text-muted-900 dark:text-white' : 'text-muted-400 dark:text-muted-500 group-hover:text-muted-700 dark:group-hover:text-muted-200'"
                    />
                    <span class="relative truncate text-sm">{{ item.name }}</span>
                    <span
                      v-if="item.count"
                      class="bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    >{{ item.count }}
                    </span>
                  </button>
                </div>
              </li>
              <li v-else class="overflow-visible!">
                <Disclosure v-slot="{ open }">
                  <div class="flex">
                    <DisclosureButton
                      type="button"
                      class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                    >
                      <Icon
                        v-if="item.icon"
                        :name="item.icon?.name"
                        class="text-muted-400 group-hover:text-muted-700 dark:text-muted-500 dark:group-hover:text-muted-200 relative size-5 shrink-0"
                      />
                      <span class="relative line-clamp-1 text-sm"> {{ item.name }}</span>
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
                        v-for="subitem in item.children"
                        :key="subitem.name"
                        class="overflow-visible!"
                      >
                        <div class="relative flex">
                          <NuxtLink
                            :to="subitem.to"
                            class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
                          >
                            <span class="relative mx-[9.5px] h-full w-px">
                              <span
                                class="bg-muted-400 group-hover:bg-muted-700 dark:bg-muted-500 dark:group-hover:bg-muted-200 absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
                              />
                            </span>
                            <span class="relative line-clamp-1 text-sm"> {{ subitem.name }}</span>
                          </NuxtLink>
                        </div>
                      </li>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </li>
            </template>
          </ul>
          <!-- Divider -->
          <div class="align-center sticky bottom-0 flex w-full flex-row items-center text-center">
            <div class="border-muted-200 dark:border-muted-800 flex w-full border-t" />
          </div>
        </div>
        <!-- Account -->
        <div class="flex shrink-0 items-center justify-between gap-x-1.5 px-4">
          <slot name="footer">
            <component
              :is="
                resolveComponentOrNative(
                  app.tairo?.sidenav?.navigation?.footer?.component,
                )
              "
              v-if="app.tairo?.sidenav?.navigation?.footer?.component"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
