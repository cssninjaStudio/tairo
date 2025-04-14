<script setup lang="ts">
const searchOpen = useSearchOpen()
const isMobileOpen = useMobileNavOpen()

const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/documentation')?.children || [],
})
</script>

<template>
  <TairoTopnavLayout class="bg-white! dark:bg-black!">
    <TairoTopnavNavbar>
      <TairoTopnavHeader>
        <TairoTopnavContent class="[--tairo-topnav-content-width:1536px] flex items-center">
          <div class="px-4 lg:hidden">
            <BaseButton
              size="icon-sm"
              variant="ghost"
              rounded="md"
              @click="isMobileOpen = !isMobileOpen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="!size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </BaseButton>
          </div>

          <div class="shrink-0 lg:me-12 flex items-center gap-x-2">
            <NuxtLink
              to="/"
              class="block"
            >
              <TairoLogoText
                class="h-6 w-auto hidden md:block text-primary-500 px-3"
              />
              <TairoLogo
                class="size-7 block md:hidden w-auto text-primary-500"
              />
            </NuxtLink>
          </div>

          <TairoMenu class="hidden lg:flex">
            <TairoMenuList>
              <TairoMenuItem>
                <TairoMenuLink as-child>
                  <NuxtLink to="/demos" active-class="text-primary-500">
                    Prebuilt pages
                  </NuxtLink>
                </TairoMenuLink>
              </TairoMenuItem>
              <TairoMenuItem>
                <TairoMenuLink as-child>
                  <NuxtLink to="/documentation" active-class="text-primary-500">
                    Documentation
                  </NuxtLink>
                </TairoMenuLink>
              </TairoMenuItem>
            </TairoMenuList>
          </TairoMenu>

          <div class="ms-auto flex items-center justify-end gap-x-3">
            <div
              role="button"
              class="cursor-pointer h-8 w-48 hidden md:flex items-center justify-between bg-muted-50 dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
              @click="searchOpen = !searchOpen"
            >
              <div class="pointer-events-none">
                <span class="font-sans text-sm">
                  Search docs...
                </span>
              </div>
              <div class="flex gap-1">
                <BaseKbd
                  size="sm"
                  variant="default"
                  class="!font-semibold h-6!"
                >
                  Ctrl
                </BaseKbd>
                <BaseKbd
                  size="sm"
                  variant="default"
                  class="!px-2 !font-semibold h-6!"
                >
                  K
                </BaseKbd>
              </div>
            </div>
            <BaseButton
              size="icon-sm"
              variant="ghost"
              rounded="md"
              class="md:hidden"
              @click="searchOpen = !searchOpen"
            >
              <Icon
                name="lucide:search"
                class="size-4 text-muted-700 dark:text-muted-300"
              />
            </BaseButton>
            <div class="scale-75 -ms-2">
              <BaseThemeSwitch />
            </div>
          </div>
        </TairoTopnavContent>
      </TairoTopnavHeader>
    </TairoTopnavNavbar>

    <TairoTopnavContent class="min-h-screen">
      <div class="relative z-10 mx-auto w-full max-w-[1536px] grow flex">
        <!-- Start -->
        <div class="relative hidden lg:flex flex-col w-60 shrink-0 bg-white dark:bg-black border-e border-muted-200 dark:border-muted-800">
          <ul class="fixed top-14 w-60 max-h-[calc(100dvh_-_3.5rem)] pt-10 pb-16 pe-4 overflow-y-auto nui-slimscroll">
            <li
              v-for="item in navigation"
              :key="item.path"
            >
              <div v-if="item.children">
                <BaseHeading
                  size="xs"
                  weight="semibold"
                  class="uppercase tracking-wide mt-10 ms-2.5 mb-2 text-muted-600 dark:text-muted-400"
                >
                  <span>{{ item.title }}</span>
                </BaseHeading>
                <div>
                  <ul>
                    <li
                      v-for="link in item.children"
                      :key="link.path"
                      class="relative mt-1"
                    >
                      <div v-if="link.children" class="mt-6">
                        <BaseHeading
                          size="xs"
                          weight="semibold"
                          class="uppercase tracking-wide mt-2.5 ms-2.5 mb-2 text-muted-600 dark:text-muted-400"
                        >
                          <span>{{ link.title }}</span>
                        </BaseHeading>
                        <ul>
                          <li
                            v-for="sublink in link.children"
                            :key="sublink.path"
                            class="relative mt-1"
                          >
                            <NuxtLink
                              :to="sublink.path"
                              class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                              exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
                            >
                              {{ sublink.title }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <NuxtLink
                        v-else
                        :to="link.path"
                        class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                        exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
                      >
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                v-else
                class="mt-1"
              >
                <NuxtLink
                  :to="item.path"
                  class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                  exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
        <!-- Content -->
        <div class="grow px-4 md:px-6 xl:px-8 overflow-hidden">
          <div class="w-full max-w-2xl mx-auto pt-20 xl:px-6">
            <slot />
          </div>
          <div class="w-full max-w-2xl mx-auto pt-10 pb-20 xl:px-6">
            <DocSurround />
          </div>
        </div>
        <!-- End -->
        <div class="relative hidden xl:flex flex-col w-72 bg-white dark:bg-black pe-6 py-6">
          <div class="fixed top-20">
            <DocToc />
          </div>
        </div>
      </div>
    </TairoTopnavContent>

    <LandingMobileNav />
  </TairoTopnavLayout>
</template>
