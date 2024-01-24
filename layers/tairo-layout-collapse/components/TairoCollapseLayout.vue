<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

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
const { isOpen, isMobileOpen, toggle } = useCollapse()

const collapseEnabled = computed(() => {
  return (
    (app.tairo?.collapse?.navigation?.enabled as boolean) !== false
    && props.collapse !== false
  )
})
const toolbarEnabled = computed(() => {
  return (
    app.tairo?.collapse?.toolbar?.enabled as boolean !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.tairo?.collapse?.circularMenu?.enabled as boolean !== false
    && props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.condensed) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!collapseEnabled.value) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (isOpen.value) {
    list.push('lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]')
  }
  else {
    list.push('lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]')
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
      <TairoCollapseNavigation v-if="collapseEnabled" />
      <div
        role="button"
        tabindex="0"
        class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
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
          !props.condensed &&
            !props.horizontalScroll &&
            'mx-auto w-full max-w-7xl',
        ]"
      >
        <slot name="toolbar">
          <TairoCollapseToolbar
            v-if="toolbarEnabled"
            :collapse="props.collapse"
            :horizontal-scroll="props.horizontalScroll"
          >
            <template #title>
              <slot name="toolbar-title" />
            </template>
          </TairoCollapseToolbar>
        </slot>

        <slot />
      </div>
    </div>

    <TairoPanels />

    <TairoCollapseCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
