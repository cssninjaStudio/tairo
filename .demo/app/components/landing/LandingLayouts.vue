<script setup lang="ts">
const layouts = [
  {
    name: 'sidebar',
    title: 'Sidebar layout',
    description: 'Tairo default layout',
    text: 'The sidebar layout is a double sided navigation layout. It has a sidebar with a list of menu icons and a subsidebar with a list of menu and submenu links',
    img: '/img/illustrations/ui/sidebar-layout-master.png',
    imgDark: '/img/illustrations/ui/sidebar-layout-master-dark.png',
    icon: 'ph:sidebar-duotone',
  },
  {
    name: 'collapse',
    title: 'Collapse layout',
    description: 'Collapse sidebar layout',
    text: 'The collapse layout focuses on a single sidebar with a list of menu and submenu links, ideal for smaller apps when you don\'t have much content.',
    img: '/img/illustrations/ui/collapse-layout-master.png',
    imgDark: '/img/illustrations/ui/collapse-layout-master-dark.png',
    icon: 'ph:sidebar-simple-duotone',
  },
  {
    name: 'sidenav',
    title: 'Sidenav layout',
    description: 'Side navigation layout',
    text: 'The sidenav layout focuses on a single compact sidebar with a list of menu and submenu links, as well as an additional custom content area.',
    img: '/img/illustrations/ui/sidenav-layout-master.png',
    imgDark: '/img/illustrations/ui/sidenav-layout-master-dark.png',
    icon: 'ph:sidebar-duotone',
  },
  {
    name: 'topnav',
    title: 'Topnav layout',
    description: 'Top navigation layout',
    text: 'The topnav layout focuses on a single navbar that offers a smart way to navigate through your pages. It is probably more adapted for smaller apps.',
    img: '/img/illustrations/ui/topnav-layout-master.png',
    imgDark: '/img/illustrations/ui/topnav-layout-master-dark.png',
    icon: 'ph:app-window-duotone',
  },
  {
    name: 'iconnav',
    title: 'Iconnav layout',
    description: 'Icon navigation layout',
    text: 'The icon nav layout focuses on a double navbar that offers a smart way to navigate through your pages. It is probably more adapted for bigger apps.',
    img: '/img/illustrations/ui/iconnav-layout-master.png',
    imgDark: '/img/illustrations/ui/iconnav-layout-master-dark.png',
    icon: 'ph:app-window-duotone',
  },
]

const activeLayout = ref('sidebar')
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          Multiple Layouts
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Master layout options
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Using the Nuxt Layers concept, we have been able to create three
          different layouts that you can use in your project. Each one has its
          own layer and a set of components and composables.
        </BaseParagraph>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 flex h-full md:col-span-5">
          <div class="w-full space-y-2 sm:max-w-xs">
            <button
              v-for="(layout, index) in layouts"
              :key="index"
              type="button"
              class="flex w-full items-center gap-3 rounded-xl p-4 text-start"
              :class="
                activeLayout === layout.name
                  ? 'bg-muted-50 dark:bg-muted-950/50'
                  : ''
              "
              @click="activeLayout = layout.name"
            >
              <Icon
                :name="layout.icon"
                class="size-6"
                :class="
                  activeLayout === layout.name
                    ? 'text-primary-500'
                    : 'text-muted-400'
                "
              />
              <span class="block">
                <BaseParagraph size="md" lead="tight">{{ layout.title }}</BaseParagraph>
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >{{ layout.description }}</BaseParagraph>
              </span>
            </button>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7">
          <BaseCard
            v-for="(layout, index) in layouts"
            v-show="activeLayout === layout.name"
            :key="index"
            rounded="lg"
            class="relative flex flex-col overflow-hidden rounded-xl text-start"
          >
            <div class="bg-muted-100 dark:bg-muted-900/40 relative">
              <img
                :src="layout.img"
                class="block w-full dark:hidden"
                :alt="layout.title"
                width="717"
                height="384"
                loading="lazy"
                decoding="async"
              >
              <img
                :src="layout.imgDark"
                class="hidden w-full dark:block"
                :alt="layout.title"
                width="717"
                height="384"
                loading="lazy"
                decoding="async"
              >
              <NuxtLink
                to="/documentation/setup/add-a-layout"
                class="border-muted-200 text-muted-600 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 hover:border-primary-500 dark:bg-muted-950 dark:border-muted-800 dark:hover:border-primary-500 absolute start-6 top-6 inline-flex items-center gap-1 rounded-full border bg-white px-5 py-2 transition-colors duration-300"
              >
                <span class="font-sans text-sm">How to use</span>
                <Icon name="lucide:arrow-right" class="size-3" />
              </NuxtLink>
            </div>
            <div class="relative flex grow flex-col px-8 pb-8 pt-4">
              <div class="mt-auto space-y-2">
                <BaseHeading weight="light">
                  {{ layout.title }}
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ layout.text }}
                </BaseParagraph>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
