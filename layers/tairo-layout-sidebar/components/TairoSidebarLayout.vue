<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

const props = withDefaults(
  defineProps<{
    sidebar?: boolean
    subsidebar?: boolean
    toolbar?: boolean
    circularMenu?: boolean
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
const { setup, currentName, isOpen, toggle } = useSidebar()
setup()

const sidebarEnabled = computed(() => {
  return (
    app.tairo?.sidebar?.navigation?.enabled as boolean !== false && props.sidebar !== false
  )
})
const toolbarEnabled = computed(() => {
  return (
    app.tairo?.sidebar?.toolbar?.enabled as boolean !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.tairo?.sidebar?.circularMenu?.enabled as boolean !== false
    && props.circularMenu !== false
  )
})

const wrapperClass = computed(() => {
  if (!sidebarEnabled.value) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (isOpen.value) {
    list.push('xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]')
  }
  else {
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
          v-if="app.tairo?.sidebar?.navigation?.logo?.component"
          class="flex h-16 w-full items-center justify-center"
        >
          <slot name="logo">
            <NuxtLink to="/" class="flex items-center justify-center">
              <component
                :is="
                  resolveComponentOrNative(
                    app.tairo?.sidebar?.navigation.logo.component,
                  )
                "
                v-bind="app.tairo?.sidebar?.navigation.logo.props"
              />
            </NuxtLink>
          </slot>
        </div>
      </TairoSidebarNavigation>
      <div
        role="button"
        tabindex="0"
        class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
        :class="
          isOpen
            ? 'opacity-50 dark:opacity-75'
            : 'opacity-0 pointer-events-none'
        "
        @click="toggle"
      />
    </slot>

    <div :class="wrapperClass">
      <div
        :class="[
          props.horizontalScroll && 'mx-auto w-full',
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
            <template #title>
              <slot name="toolbar-title" />
            </template>
          </TairoSidebarToolbar>
        </slot>

        <main>
          <slot />
        </main>
      </div>
    </div>

    <TairoPanels />
    <TairoSidebarCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
