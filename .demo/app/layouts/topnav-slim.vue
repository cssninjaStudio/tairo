<script setup lang="ts">
const isMobileOpen = ref(false)

const menu = [
  {
    title: 'Home',
    link: '/starters/topnav-slim',
  },
  {
    title: 'Projects',
    link: '/dashboards/widgets',
  },
  {
    title: 'Team',
    link: '/dashboards',
  },
  {
    title: 'Reports',
    link: '/layouts',
  },
  {
    title: 'Settings',
    link: '/layouts/preferences',
  },
]
</script>

<template>
  <TairoTopnavLayout class="[--tairo-topnav-content-width:72rem]">
    <TairoTopnavNavbar>
      <TairoTopnavHeader hide="scroll-down" class="justify-center">
        <TairoTopnavContent class="flex items-center justify-bettween px-4 md:px-6 lg:px-8 xl:px-10">
          <TairoMenu class="flex-1 hidden md:flex shrink-0">
            <TairoMenuList>
              <TairoMenuItem v-for="item in menu" :key="item.title">
                <TairoMenuLink variant="tab" :active="$route.path === item.link" as-child>
                  <NuxtLink :to="item.link">
                    {{ item.title }}
                  </NuxtLink>
                </TairoMenuLink>
              </TairoMenuItem>
            </TairoMenuList>
          </TairoMenu>
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
        </TairoTopnavContent>
      </TairoTopnavHeader>
    </TairoTopnavNavbar>

    <TairoTopnavContent class="pt-20 min-h-screen">
      <slot />
    </TairoTopnavContent>

    <TairoMobileDrawer v-model="isMobileOpen">
      <div class="space-y-3">
        <div>
          <ul class="font-sans text-lg space-y-2">
            <li
              v-for="item in menu"
              :key="item.link"
            >
              <NuxtLink
                :to="item.link"
                class="text-muted-600 dark:text-muted-400 underline-offset-8"
                exact-active-class="underline font-medium text-muted-900! dark:text-white!"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </TairoMobileDrawer>
  </TairoTopnavLayout>
</template>
