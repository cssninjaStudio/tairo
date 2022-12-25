<script setup lang="ts">
const sidebar = reactive(useSidebar())

const startSidebars = computed(() =>
  sidebar.sidebars?.filter(
    (sidebar) => !sidebar.position || sidebar.position === 'start',
  ),
)
const endSidebars = computed(() =>
  sidebar.sidebars?.filter((sidebar) => sidebar.position === 'end'),
)
</script>

<template>
  <div
    class="pointer-events-none fixed top-0 left-0 z-[60] flex h-full xl:z-10"
  >
    <!-- Icon sidebar -->
    <div
      class="pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r border-muted-200 bg-white transition-all duration-300 dark:border-muted-700 dark:bg-muted-800"
      :class="sidebar.isOpen ? '' : '-translate-x-full xl:translate-x-0'"
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
      v-if="sidebar.current && sidebar.current?.component"
      class="pointer-events-auto relative z-10 h-full w-[220px] border-r border-muted-200 bg-white transition-all duration-300 dark:border-muted-700 dark:bg-muted-800"
      :class="sidebar.isOpen ? '' : 'translate-x-[calc(-100%_-_80px)]'"
    >
      <slot name="subnav">
        <div class="flex h-screen flex-col">
          <component
            :is="resolveComponent(sidebar.current.componentHeader)"
            v-if="sidebar.current.componentHeader"
          ></component>

          <!-- Body -->
          <div class="slimscroll relative h-full w-full overflow-y-auto">
            <div class="px-6 pb-8">
              <component
                :is="resolveComponent(sidebar.current.component)"
              ></component>
            </div>

            <div
              class="pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent dark:from-muted-800"
            ></div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/* Router Link */
.slimscroll :deep(.router-link-exact-active) {
  @apply text-primary-500;
}
</style>
