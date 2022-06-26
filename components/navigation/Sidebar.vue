<script setup lang="ts">
const { activeSidebar, sidebars, isSidebarOpened, toggleActiveSidebar } =
  useSidebar()

const startSidebars = sidebars.filter(
  (sidebar) => !sidebar.position || sidebar.position === 'start'
)
const endSidebars = sidebars.filter((sidebar) => sidebar.position === 'end')
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
      <slot></slot>

      <!-- Top Menu -->
      <div>
        <NavigationSidebarItem
          v-for="sidebar in startSidebars"
          :key="sidebar.name"
          :sidebar="sidebar"
        />
      </div>
      <!-- Bottom Menu -->
      <div class="mt-auto">
        <NavigationSidebarItem
          v-for="sidebar in endSidebars"
          :key="sidebar.name"
          :sidebar="sidebar"
        />

        <slot name="end"></slot>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      v-if="activeSidebar"
      class="relative w-[220px] h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 z-10 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-translate-x-[calc(100%_-_80px)]'"
    >
      <slot
        name="subnav"
        v-bind="{
          activeSidebar,
          sidebars,
          isSidebarOpened,
          toggleActiveSidebar,
        }"
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
      </slot>
    </div>
  </div>
</template>
