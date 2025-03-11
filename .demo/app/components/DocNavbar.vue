<script setup lang="ts">
const searchOpen = useState('search-open', () => false)
const isMobileOpen = useState('doc-navbar-mobile-open', () => false)
const { y } = useNuiWindowScroll()
</script>

<template>
  <header
    class="sticky start-0 top-0 z-40 w-full border-b border-muted-200 dark:border-muted-800/80 px-4 transition-all duration-300 md:px-6"
    :class="[
      y > 60 ? 'bg-white/95 dark:bg-muted-950' : '',
      isMobileOpen ? 'bg-white/95! dark:bg-muted-950!' : '',
    ]"
  >
    <div class="mx-auto max-w-[1536px]">
      <div class="flex h-14 items-center gap-x-3">
        <!-- Menu -->
        <div class="lg:hidden">
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
        <!-- Logo -->
        <div class="shrink-0 lg:me-12 flex items-center gap-x-2">
          <NuxtLink
            to="/"
            class="block"
          >
            <TairoLogoText
              class="h-7 w-auto hidden md:block text-primary-500 px-3"
            />
            <TairoLogo
              class="size-7 block md:hidden w-auto text-primary-500"
            />
          </NuxtLink>
        </div>
        <!-- Links -->
        <div class="hidden lg:flex items-center gap-x-8">
          <NuxtLink
            to="/demos"
            class="text-sm text-muted-900 dark:text-white"
          >
            Prebuilt pages
          </NuxtLink>
          <NuxtLink
            to="/documentation"
            class="text-sm text-muted-900 dark:text-white"
          >
            Documentation
          </NuxtLink>
        </div>
        <!-- Actions -->
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
      </div>
    </div>
  </header>
</template>
