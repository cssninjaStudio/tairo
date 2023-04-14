<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

const props = withDefaults(
  defineProps<{
    sidebar?: boolean
    subsidebar?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    condensed?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    sidebar: true,
    subsidebar: true,
    toolbar: true,
    circularMenu: true,
  },
)

const app = useAppConfig()
const sidebar = reactive(useSidebar())
// const panels = reactive(usePanels())

const sidebarEnabled = computed(() => {
  return app.tairo.sidebar?.enabled !== false && props.sidebar !== false
})
const toolbarEnabled = computed(() => {
  return app.tairo.toolbar?.enabled !== false && props.toolbar !== false
})
const circularMenuEnabled = computed(() => {
  return (
    app.tairo.circularMenu?.enabled !== false && props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.condensed) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!sidebarEnabled.value) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (sidebar.isOpen) {
    list.push('xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]')
  } else {
    list.push('xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]')
  }

  if (props.horizontalScroll) {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 pb-20">
    <slot name="sidebar">
      <TairoSidebarNavigation
        v-if="sidebarEnabled"
        :subsidebar="props.subsidebar"
      >
        <div
          v-if="app.tairo.sidebar?.logo?.component"
          class="flex h-16 w-full items-center justify-center"
        >
          <slot name="logo">
            <NuxtLink to="/" class="flex items-center justify-center">
              <component
                :is="
                  app.tairo.sidebar.logo.resolve === false
                    ? app.tairo.sidebar.logo.component
                    : resolveComponent(app.tairo.sidebar.logo.component)
                "
                v-bind="app.tairo.sidebar.logo.props"
              ></component>
            </NuxtLink>
          </slot>
        </div>
      </TairoSidebarNavigation>
    </slot>

    <div :class="mainClass">
      <div
        :class="[
          props.condensed && !props.horizontalScroll && 'w-full',
          !props.condensed && props.horizontalScroll && 'mx-auto w-full',
          !props.condensed &&
            !props.horizontalScroll &&
            'mx-auto w-full max-w-7xl',
        ]"
      >
        <slot name="toolbar">
          <TairoSidebarToolbar
            v-if="toolbarEnabled"
            :sidebar="props.sidebar"
            :horizontal-scroll="props.horizontalScroll"
          >
            <template #title><slot name="toolbar-title"></slot></template>
          </TairoSidebarToolbar>
        </slot>

        <slot />
      </div>
    </div>

    <TairoPanels />
    <TairoSidebarCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
