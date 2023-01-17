<script setup lang="ts">
const sidebar = reactive(useSidebar())
const panels = reactive(usePanels())
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 pb-20">
    <NavigationSidebar>
      <!-- Logo: @todo: use app config -->
      <div class="flex h-16 w-full items-center justify-center">
        <NuxtLink to="/" class="flex items-center justify-center">
          <IconLogo class="text-primary-600 h-10" />
        </NuxtLink>
      </div>

      <template #end>
        <!-- Menu item -->
        <div class="flex h-16 w-full items-center justify-center">
          <NavigationSidebarAccountMenu />
        </div>
      </template>
    </NavigationSidebar>

    <div
      class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full px-4 transition-all duration-300 xl:px-10"
      :class="
        sidebar.isOpen
          ? 'xl:max-w-[calc(100%_-_300px)] xl:ml-[300px]'
          : 'xl:max-w-[calc(100%_-_80px)] xl:ml-[80px]'
      "
    >
      <div class="mx-auto w-full max-w-7xl">
        <NavigationToolbar />
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
        v-if="panels.current?.component"
        class="fixed top-0 z-[100] h-full w-96"
        :class="[panels.current.position === 'left' ? 'left-0' : 'right-0']"
      />
    </Transition>

    <!-- Overlay -->
    <div
      class="bg-muted-800/60 fixed top-0 left-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300"
      :class="
        panels.current
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="panels.close"
    />

    <NavigationCircularMenu />
  </div>
</template>
