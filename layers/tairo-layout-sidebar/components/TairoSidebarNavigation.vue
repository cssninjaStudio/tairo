<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    subsidebar?: boolean
    expanded?: boolean
  }>(),
  {
    subsidebar: true,
    expanded: false,
  },
)
const { isOpen, sidebars } = useSidebar()

const startSidebars = computed(
  () =>
    sidebars.value?.filter(
      sidebar => !sidebar.position || sidebar.position === 'start',
    ),
)
const endSidebars = computed(
  () => sidebars.value?.filter(sidebar => sidebar.position === 'end'),
)
</script>

<template>
  <div
    class="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10"
  >
    <!-- Icon sidebar -->
    <div
      class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300"
      :class="
        isOpen
          ? ''
          : '-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0'
      "
    >
      <slot />

      <!-- Top Menu -->
      <div>
        <slot name="top" />

        <TairoSidebarNavigationItem
          v-for="item in startSidebars"
          :key="item.title"
          :sidebar="item"
        />
      </div>
      <!-- Bottom Menu -->
      <div class="mt-auto">
        <TairoSidebarNavigationItem
          v-for="item in endSidebars"
          :key="item.title"
          :sidebar="item"
        />

        <slot name="end" />
      </div>
    </div>

    <TairoSidebarNavigationPanel :subsidebar="props.subsidebar" />
  </div>
</template>
