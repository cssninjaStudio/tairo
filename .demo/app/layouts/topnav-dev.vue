<script setup lang="ts">
import { BaseParagraph } from '#components'

const isSearchOpen = useState('search-open', () => false)
const isSwitcherOpen = useState('switcher-open', () => false)
</script>

<template>
  <TairoTopnavLayout>
    <TairoTopnavNavbar class="px-4 md:px-6 lg:px-8 xl:px-10">
      <TairoTopnavHeader>
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-3">
            <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
          </NuxtLink>
          <TairoTopnavWorkspace />
        </div>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
            @click="
              () => {
                const isOpen = useState('switcher-open', () => false)
                isOpen.value = true
              }
            "
          >
            <Icon
              name="solar:palette-round-linear"
              class="text-muted-400 size-5"
            />
          </button>
          <div
            role="button"
            class="cursor-pointer h-8 w-36 hidden md:flex items-center justify-between bg-white dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
            @click="isSearchOpen = true"
          >
            <div class="pointer-events-none">
              <span class="font-sans text-sm">
                Search...
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
            @click="isSearchOpen = true"
          >
            <Icon
              name="lucide:search"
              class="size-5 text-muted-400 dark:text-muted-300"
            />
          </BaseButton>
          <div class="ms-auto scale-[0.8]">
            <BaseThemeSwitch />
          </div>
          <div class="relative z-10">
            <BaseDropdown
              variant="default"
              :bindings="{
                content: {
                  align: 'end',
                  sideOffset: 10,
                },
              }"
            >
              <template #button>
                <button
                  type="button"
                >
                  <BaseChip size="sm" color="custom" :offset="3" class="text-success-500">
                    <img
                      src="/img/avatars/10.svg"
                      class="size-8 rounded-full object-cover"
                    >
                  </BaseChip>
                </button>
              </template>
              <BaseDropdownItem>Leads</BaseDropdownItem>
              <BaseDropdownItem>Projects</BaseDropdownItem>
              <BaseDropdownItem>Team</BaseDropdownItem>
              <BaseDropdownItem>Reports</BaseDropdownItem>
              <BaseDropdownItem>
                Settings
                <template #end>
                  <BaseKbd size="sm">
                    <span class="text-xs font-mono">⌘</span>
                  </BaseKbd>
                  <BaseKbd size="sm">
                    <span class="text-xs font-mono px-0.5">P</span>
                  </BaseKbd>
                </template>
              </BaseDropdownItem>
            </BaseDropdown>
          </div>
        </div>
      </TairoTopnavHeader>
      <TairoTopnavMenu>
        <TairoTopnavMenuList>
          <TairoTopnavMenuItem>
            <TairoTopnavMenuTrigger>
              <span>Featured</span>
              <Icon
                name="lucide:chevron-down"
                class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              />
            </TairoTopnavMenuTrigger>
            <TairoTopnavMenuContent>
              <TairoTopnavMenuListItems
                class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px]"
              >
                <li class="row-span-3 grid">
                  <div
                    class="grid sm:grid-cols-5 gap-4"
                    @select.prevent
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
                      <TairoTopnavMenuLink
                        to="/"
                      >
                        <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                          Design System
                        </BaseHeading>
                        <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                          Create your design system with a set of consistent design patterns.
                        </BaseParagraph>
                      </TairoTopnavMenuLink>
                      <TairoTopnavMenuLink
                        to="/"
                      >
                        <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                          Amazing UI
                        </BaseHeading>
                        <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                          Build high-quality, accessible design systems and web apps.
                        </BaseParagraph>
                      </TairoTopnavMenuLink>
                      <TairoTopnavMenuLink
                        to="/"
                      >
                        <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                          Amazing UI
                        </BaseHeading>
                        <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                          Build high-quality, accessible design systems and web apps.
                        </BaseParagraph>
                      </TairoTopnavMenuLink>
                    </div>
                  </div>
                </li>
              </TairoTopnavMenuListItems>
            </TairoTopnavMenuContent>
          </TairoTopnavMenuItem>

          <TairoTopnavMenuItem>
            <TairoTopnavMenuTrigger>
              <span>Business</span>
              <Icon
                name="lucide:chevron-down"
                class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              />
            </TairoTopnavMenuTrigger>
            <TairoTopnavMenuContent>
              <TairoTopnavMenuListItems
                class="m-0 list-none p-4 sm:w-[300px] flex flex-col"
              >
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
              </TairoTopnavMenuListItems>
            </TairoTopnavMenuContent>
          </TairoTopnavMenuItem>

          <TairoTopnavMenuItem>
            <TairoTopnavMenuTrigger>
              <span>Overview</span>
              <Icon
                name="lucide:chevron-down"
                class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              />
            </TairoTopnavMenuTrigger>
            <TairoTopnavMenuContent>
              <TairoTopnavMenuListItems
                class="m-0 grid list-none gap-x-4 p-4 sm:w-[600px] sm:grid-cols-2"
              >
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
                <TairoTopnavMenuLink
                  to="/"
                >
                  <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white">
                    Amazing UI
                  </BaseHeading>
                  <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                    Build high-quality, accessible design systems and web apps.
                  </BaseParagraph>
                </TairoTopnavMenuLink>
              </TairoTopnavMenuListItems>
            </TairoTopnavMenuContent>
          </TairoTopnavMenuItem>
          <TairoTopnavMenuItem>
            <TairoTopnavMenuLink
              to="/"
            >
              Finance
            </TairoTopnavMenuLink>
          </TairoTopnavMenuItem>
          <TairoTopnavMenuItem>
            <TairoTopnavMenuLink
              to="/"
            >
              Reports
            </TairoTopnavMenuLink>
          </TairoTopnavMenuItem>
          <TairoTopnavMenuItem>
            <TairoTopnavMenuLink
              to="/"
            >
              Preferences
            </TairoTopnavMenuLink>
          </TairoTopnavMenuItem>
          <TairoTopnavMenuIndicator />
        </TairoTopnavMenuList>

        <div
          class="perspective-[2000px] absolute top-full left-0 flex w-full mt-[10px]"
        >
          <div class="relative w-full">
            <TairoTopnavMenuViewport />
          </div>
        </div>
      </TairoTopnavMenu>
    </TairoTopnavNavbar>
    <TairoTopnavLayoutContent class="pt-32">
      <slot />
    </TairoTopnavLayoutContent>
  </TairoTopnavLayout>
</template>
