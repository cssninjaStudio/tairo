<script setup lang="ts">
const { isSidebarOpened } = useSidebar()
const { activePanel, panelTransitionFrom, closePanel } = usePanels()
</script>

<template>
  <div class="bg-slate-100 dark:bg-slate-900">
    <NavigationSidebar>
      <!-- Logo -->
      <div class="flex items-center justify-center w-full h-16">
        <NuxtLink to="/" class="flex items-center justify-center">
          <IconLogo class="h-10 text-primary-500" />
        </NuxtLink>
      </div>

      <template #end>
        <!-- Menu item -->
        <div class="flex items-center justify-center w-full h-16">
          <NavigationSidebarAccountMenu />
        </div>
      </template>
    </NavigationSidebar>

    <div
      class="relative px-4 xl:px-16 min-h-screen w-full bg-slate-100 dark:bg-slate-900 transition-all duration-300"
      :class="
        isSidebarOpened
          ? 'xl:max-w-[calc(100%_-_300px)] xl:ml-[300px]'
          : 'xl:max-w-[calc(100%_-_80px)] xl:ml-[80px]'
      "
    >
      <div class="w-full max-w-6xl mx-auto">
        <NavigationToolbar />
        <slot></slot>
      </div>
    </div>

    <!-- Active Panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      :enter-from-class="
        panelTransitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
      leave-active-class="transition-transform duration-300 ease-in"
      :leave-to-class="
        panelTransitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
    >
      <component
        :is="activePanel.component"
        v-if="activePanel?.component"
        class="fixed top-0 h-full w-96 z-[100]"
        :class="[activePanel.position === 'left' ? 'left-0' : 'right-0']"
      />
    </Transition>

    <!-- Overlay -->
    <div
      class="fixed top-0 left-0 w-full h-full bg-slate-800/60 transition-opacity duration-300 z-[99] cursor-pointer"
      :class="
        activePanel
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="closePanel"
    ></div>

    <NavigationCircularMenu />
  </div>
</template>
