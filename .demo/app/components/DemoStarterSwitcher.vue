<script setup lang="ts">
const starters = [
  {
    label: 'Sidebar',
    description: 'Double sidebar navigation',
    to: '/starters/sidebar',
    img: '/img/illustrations/switcher/layout-sidebar-default.svg',
    imgDark: '/img/illustrations/switcher/layout-sidebar-default-dark.svg',
  },
  {
    label: 'Collapse',
    description: 'Collapsible sidebar navigation',
    to: '/starters/collapse',
    img: '/img/illustrations/switcher/layout-collapse-default.svg',
    imgDark: '/img/illustrations/switcher/layout-collapse-default-dark.svg',
  },
  {
    label: 'Sidenav',
    description: 'Single sidebar navigation',
    to: '/starters/sidenav',
    img: '/img/illustrations/switcher/layout-collapse-default.svg',
    imgDark: '/img/illustrations/switcher/layout-collapse-default-dark.svg',
  },
  {
    label: 'Topnav navigation',
    description: 'Navbar dropdowns and links',
    to: '/starters/topnav',
    img: '/img/illustrations/switcher/layout-topnav-default.svg',
    imgDark: '/img/illustrations/switcher/layout-topnav-default-dark.svg',
  },
  {
    label: 'Topnav slim navigation',
    description: 'Top navigation with tabs',
    to: '/starters/topnav-slim',
    img: '/img/illustrations/switcher/layout-topnav-default.svg',
    imgDark: '/img/illustrations/switcher/layout-topnav-default-dark.svg',
  },
] as const
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 py-20">
    <div class="max-w-3xl mx-auto">
      <div class="bg-muted-200/60 dark:bg-muted-800 rounded-xl p-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        <NuxtLink v-for="starter in starters" :key="starter.to" :to="starter.to" class="relative block bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800 p-4 rounded-xl cursor-pointer" exact-active-class="border-primary-500! [&>svg]:block! [&>div>img]:opacity:100!">
          <Icon name="solar:check-circle-bold-duotone" class="absolute top-3 end-3 size-6 text-primary-500 dark:text-primary-400 hidden" />
          <div class="flex flex-col items-center justify-center">
            <img
              :src="starter.img"
              alt="Illustration"
              class="w-28 mb-2 block dark:hidden opacity-60"
            >
            <img
              :src="starter.imgDark"
              alt="Illustration"
              class="w-28 mb-2 hidden dark:block opacity-60"
            >
            <BaseHeading as="h4" size="sm" class="text-center text-muted-900 dark:text-muted-100">
              {{ starter.label }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-center text-muted-600 dark:text-muted-400">
              {{ starter.description }}
            </BaseParagraph>
          </div>
        </nuxtlink>
      </div>
    </div>
  </div>
</template>
