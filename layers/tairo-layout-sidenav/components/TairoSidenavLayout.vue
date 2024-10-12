<script setup lang="ts">
import { useSidenav } from '../composables/sidenav'

const props = withDefaults(
  defineProps<{
    collapse?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    condensed?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    collapse: true,
    toolbar: true,
    circularMenu: true,
  },
)

const app = useAppConfig()
const { isOpen, isMobileOpen, toggle } = useSidenav()

const sidenavEnabled = computed(() => {
  return (
    (app.tairo?.sidenav?.navigation?.enabled as boolean) !== false
    && props.collapse !== false
  )
})
const toolbarEnabled = computed(() => {
  return (
    app.tairo?.sidenav?.toolbar?.enabled as boolean !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.tairo?.sidenav?.circularMenu?.enabled as boolean !== false
    && props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.condensed) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!sidenavEnabled.value) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (isOpen.value) {
    list.push('lg:max-w-[calc(100%_-_260px)] lg:ms-[260px]')
  }
  else {
    list.push('lg:max-w-full lg:ms-0')
  }

  if (props.horizontalScroll) {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 pb-20">
    <slot name="navigation">
      <TairoSidenavNavigation v-if="sidenavEnabled" />
      <div
        role="button"
        tabindex="0"
        class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[49] block size-full transition-opacity duration-300 lg:hidden"
        :class="
          isMobileOpen
            ? 'opacity-50 dark:opacity-75'
            : 'opacity-0 pointer-events-none'
        "
        @click="toggle"
      />
    </slot>

    <div :class="mainClass">
      <div
        :class="[
          props.condensed && !props.horizontalScroll && 'w-full',
          !props.condensed && props.horizontalScroll && 'mx-auto w-full',
          !props.condensed
            && !props.horizontalScroll
            && 'mx-auto w-full max-w-7xl',
        ]"
      >
        <slot name="toolbar">
          <TairoSidenavToolbar
            v-if="toolbarEnabled"
            :collapse="props.collapse"
            :horizontal-scroll="props.horizontalScroll"
          >
            <template #title>
              <slot name="toolbar-title" />
            </template>
          </TairoSidenavToolbar>
        </slot>

        <main class="relative z-0">
          <slot />
        </main>
      </div>
    </div>

    <TairoPanels />

    <TairoSidenavCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
