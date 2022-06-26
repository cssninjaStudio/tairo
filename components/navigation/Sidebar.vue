<script setup lang="ts">
const { activeSidebar, sidebars, isSidebarOpened, toggleActiveSidebar } =
  useSidebar()
</script>

<template>
  <div
    class="flex fixed top-0 left-0 h-full z-[60] xl:z-10 pointer-events-none"
  >
    <!-- Icon sidebar -->
    <div
      class="relative flex flex-col w-[80px] h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 z-20 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-translate-x-full xl:translate-x-0'"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center w-full h-16">
        <NuxtLink to="/" class="flex items-center justify-center">
          <img
            class="block h-10"
            src="/img/logos/logo/logo.svg"
            alt="Tairo logo"
          />
        </NuxtLink>
      </div>
      <!-- Top Menu -->
      <div>
        <div
          v-for="sidebar of sidebars"
          :key="sidebar.name"
          class="flex items-center justify-center w-full h-16"
        >
          <NuxtLink
            v-if="sidebar.to"
            :to="sidebar.to"
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <component :is="sidebar.icon" />
          </NuxtLink>

          <button
            v-else
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
            :class="
              activeSidebar?.name === sidebar.name
                ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
                : 'text-gray-400'
            "
            @click="() => toggleActiveSidebar(sidebar)"
          >
            <component :is="sidebar.icon" />
          </button>
        </div>
      </div>
      <!-- Bottom Menu -->
      <div class="mt-auto">
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-square-half-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <button
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-magnifying-glass-duotone w-5 h-5"></i>
          </button>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NuxtLink
            to="/"
            class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
          >
            <i class="i-ph-gear-six-duotone w-5 h-5"></i>
          </NuxtLink>
        </div>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NavigationSidebarAccountMenu />
        </div>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      v-if="activeSidebar"
      class="relative w-[220px] h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 z-10 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-translate-x-[calc(100%_-_80px)]'"
    >
      <!-- Header -->
      <div class="flex items-center h-16 w-full px-6">
        <h2
          class="font-main text-lg font-semibold text-gray-700 dark:text-white capitalize"
        >
          {{ activeSidebar.name }}
        </h2>
        <button
          class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
          @click="isSidebarOpened = false"
        >
          <i class="i-feather-chevron-left w-6 h-6"></i>
        </button>
      </div>
      <!-- Body -->
      <div
        class="relative h-[calc(100%_-_64px)] w-full overflow-y-auto slimscroll px-6"
      >
        <component
          :is="activeSidebar.subnav"
          v-if="activeSidebar?.subnav"
        ></component>
      </div>
    </div>
  </div>
</template>
