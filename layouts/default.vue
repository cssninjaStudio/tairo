<script setup lang="ts">
const app = useAppConfig()
const sidebar = reactive(useSidebar())
const panels = reactive(usePanels())

const mainClass = computed(() => {
  if ((app.tairo.sidebar as any).enabled === false) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (sidebar.isOpen) {
    list.push('xl:max-w-[calc(100%_-_300px)] xl:ml-[300px]')
  } else {
    list.push('xl:max-w-[calc(100%_-_80px)] xl:ml-[80px]')
  }

  return list
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 pb-20">
    <TairoNavigationSidebar v-if="(app.tairo.sidebar as any).enabled !== false">
      <div
        v-if="app.tairo.sidebar.logo.component"
        class="flex h-16 w-full items-center justify-center"
      >
        <NuxtLink to="/" class="flex items-center justify-center">
          <component
            :is="resolveComponent(app.tairo.sidebar.logo.component)"
            v-bind="app.tairo.sidebar.logo.props"
          ></component>
        </NuxtLink>
      </div>
    </TairoNavigationSidebar>

    <div :class="mainClass">
      <div class="mx-auto w-full max-w-7xl">
        <TairoNavigationToolbar
          v-if="(app.tairo.toolbar as any).enabled !== false"
        />
        <slot />
      </div>
    </div>

    <!-- Active Panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      :enter-from-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
      leave-active-class="transition-transform duration-300 ease-in"
      :leave-to-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
    >
      <component
        :is="resolveComponent(panels.current.component)"
        v-bind="panels.currentProps"
        v-if="panels.current?.component"
        class="fixed top-0 z-[100] h-full w-96"
        :class="[panels.current.position === 'left' ? 'left-0' : 'right-0']"
      />
    </Transition>

    <!-- Overlay -->
    <div
      class="bg-muted-800/60 fixed top-0 left-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300"
      :class="
        panels.current && panels.showOverlay
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="panels.close"
    />

    <TairoNavigationCircularMenu
      v-if="(app.tairo.circularMenu as any).enabled !== false"
    />
  </div>
</template>
