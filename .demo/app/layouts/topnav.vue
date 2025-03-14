<script setup lang="ts">
const isMobileOpen = ref(false)
</script>

<template>
  <TairoTopnavLayout>
    <!-- Mobile -->
    <TairoTopnavNavbar class="md:hidden">
      <TairoTopnavHeader hide="scroll-down" class="px-4 md:px-6 lg:px-8 xl:px-10 z-10">
        <div class="flex-1 flex md:hidden">
          <button
            type="button"
            class="flex items-center"
            @click="isMobileOpen = !isMobileOpen"
          >
            <span class="flex flex-col gap-1.5">
              <span class="block w-4 h-0.5 bg-muted-500" />
              <span class="block w-5 h-0.5 bg-muted-500" />
            </span>
          </button>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-3">
            <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
          </NuxtLink>
        </div>
        <DemoToolbarTopnav class="flex-1" />
      </TairoTopnavHeader>
    </TairoTopnavNavbar>

    <!-- Desktop -->
    <TairoTopnavNavbar class="hidden md:flex">
      <TairoTopnavHeader hide="scroll" class="px-4 md:px-6 lg:px-8 xl:px-10 z-10">
        <div class="flex items-center gap-3 flex-1">
          <NuxtLink to="/" class="flex items-center gap-3">
            <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
          </NuxtLink>
          <DemoWorkspaceDropdown class="ms-auto max-w-[170px] md:ms-0 me-4 md:me-0 md:max-w-[240px]" />
        </div>
        <DemoToolbarTopnav />
      </TairoTopnavHeader>

      <TairoTopnavHeader hide="scroll" class="px-4 md:px-6 lg:px-8 xl:px-10">
        <TairoMenu>
          <TairoMenuList>
            <TairoMenuItem>
              <TairoMenuTrigger>
                <span>Featured</span>
                <Icon
                  name="lucide:chevron-down"
                  class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                />
              </TairoMenuTrigger>
              <TairoMenuContent>
                <TairoMenuListItems
                  class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px]"
                >
                  <li class="row-span-3 grid">
                    <div
                      class="grid sm:grid-cols-5 gap-4"
                    >
                      <div class="hidden sm:block sm:col-span-2">
                        <div class="flex flex-col justify-end h-full w-full bg-primary-950 rounded-xl p-4">
                          <div>
                            <TairoLogo class="size-10 text-white mb-3" />
                            <BaseHeading class="text-white mb-2">
                              Amazing UI
                            </BaseHeading>
                            <BaseParagraph size="xs" class="max-w-[260px] text-white">
                              Build high-quality, accessible design systems and web apps.
                            </BaseParagraph>
                          </div>
                        </div>
                      </div>
                      <div class="sm:col-span-3 flex flex-col justify-between">
                        <TairoMenuLink as-child>
                          <NuxtLink to="/layouts">
                            <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                              Design System
                            </BaseHeading>
                            <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                              Create your design system with a set of consistent design patterns.
                            </BaseParagraph>
                          </NuxtLink>
                        </TairoMenuLink>
                        <TairoMenuLink>
                          <NuxtLink to="/layouts/projects">
                            <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                              Amazing UI
                            </BaseHeading>
                            <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                              Build high-quality, accessible design systems and web apps.
                            </BaseParagraph>
                          </NuxtLink>
                        </TairoMenuLink>
                        <TairoMenuLink as-child>
                          <NuxtLink to="#">
                            <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                              Amazing UI
                            </BaseHeading>
                            <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                              Build high-quality, accessible design systems and web apps.
                            </BaseParagraph>
                          </NuxtLink>
                        </TairoMenuLink>
                      </div>
                    </div>
                  </li>
                </TairoMenuListItems>
              </TairoMenuContent>
            </TairoMenuItem>

            <TairoMenuItem>
              <TairoMenuTrigger>
                <span>Business</span>
                <Icon
                  name="lucide:chevron-down"
                  class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                />
              </TairoMenuTrigger>
              <TairoMenuContent>
                <TairoMenuListItems
                  class="m-0 list-none p-4 sm:w-[300px] sm:max-w-[300px] flex flex-col"
                >
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                </TairoMenuListItems>
              </TairoMenuContent>
            </TairoMenuItem>

            <TairoMenuItem>
              <TairoMenuTrigger>
                <span>Overview</span>
                <Icon
                  name="lucide:chevron-down"
                  class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                />
              </TairoMenuTrigger>
              <TairoMenuContent>
                <TairoMenuListItems
                  class="m-0 grid list-none gap-x-4 p-4 sm:w-[600px] sm:grid-cols-2"
                >
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                </TairoMenuListItems>
              </TairoMenuContent>
            </TairoMenuItem>
            <TairoMenuItem>
              <TairoMenuLink as-child :active="$route.path === '/layouts/form-4'">
                <NuxtLink to="/layouts/form-4">
                  Finance
                </NuxtLink>
              </TairoMenuLink>
            </TairoMenuItem>
            <TairoMenuItem>
              <TairoMenuLink as-child :active="$route.path === '/layouts'">
                <NuxtLink to="/layouts">
                  Reports
                </NuxtLink>
              </TairoMenuLink>
            </TairoMenuItem>
            <TairoMenuItem>
              <TairoMenuLink as-child :active="$route.path === '/dashboards'">
                <NuxtLink to="/dashboards">
                  Preferences
                </NuxtLink>
              </TairoMenuLink>
            </TairoMenuItem>
            <TairoMenuIndicator />
          </TairoMenuList>

          <div
            class="absolute top-full start-0 flex w-full mt-[10px]"
          >
            <TairoMenuViewport />
          </div>
        </TairoMenu>
      </TairoTopnavHeader>
    </TairoTopnavNavbar>

    <TairoTopnavContent class="pt-20 md:pt-32 min-h-screen">
      <slot />
    </TairoTopnavContent>

    <TairoMobileDrawer v-model="isMobileOpen">
      <DemoWorkspaceDropdown class="my-4" />

      <div v-for="i in 6" :key="i" class="space-y-3 mb-10">
        <BaseHeading size="xl" weight="semibold">
          Menu
        </BaseHeading>
        <div>
          <ul class="font-sans text-lg space-y-2">
            <li v-for="item in 6" :key="item">
              <NuxtLink
                to="#"
                class="text-muted-600 dark:text-muted-400 underline-offset-8"
                exact-active-class="underline font-medium text-muted-900! dark:text-white!"
              >
                Amazing UI
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </TairoMobileDrawer>
  </TairoTopnavLayout>
</template>
