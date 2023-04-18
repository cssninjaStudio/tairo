<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

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

const sidebar = reactive(useSidebar())

const startSidebars = computed(() =>
  sidebar.sidebars?.filter(
    (sidebar) => !sidebar.position || sidebar.position === 'start',
  ),
)
const endSidebars = computed(() =>
  sidebar.sidebars?.filter((sidebar) => sidebar.position === 'end'),
)

const subsidebarEnabled = computed(() => {
  return Boolean(
    props.subsidebar !== false && sidebar.current?.subsidebar?.component,
  )
})
</script>

<template>
  <div
    class="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10"
  >
    <!-- Icon sidebar -->
    <div
      class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300"
      :class="sidebar.isOpen ? '' : '-translate-x-full xl:translate-x-0'"
    >
      <slot></slot>

      <!-- Top Menu -->
      <div>
        <slot name="top"></slot>

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

        <slot name="end"></slot>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      v-if="subsidebarEnabled"
      class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300"
      :class="
        sidebar.isOpen
          ? ''
          : 'rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]'
      "
    >
      <slot name="subnav">
        <KeepAlive>
          <component
            :is="resolveComponent(sidebar.current.subsidebar?.component)"
            :key="sidebar.current?.subsidebar?.component"
            v-if="sidebar.current?.subsidebar?.component"
          ></component>
        </KeepAlive>
      </slot>
    </div>
  </div>
</template>
