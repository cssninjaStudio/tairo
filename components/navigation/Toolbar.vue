<script setup lang="ts">
const { openPanel } = usePanels()

const route = useRoute()
</script>

<template>
  <div class="relative flex items-center gap-2 h-16 mb-5 z-50">
    <NavigationBurger class="-ml-3" />

    <h2
      class="hidden md:block font-heading text-2xl font-semibold text-muted-800 dark:text-white"
    >
      {{ route.meta.title }}
    </h2>

    <BaseThemeToggle class="ml-auto" />

    <button
      type="button"
      class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 dark:ring-offset-muted-900 transition-all duration-300"
      @click="openPanel('language')"
    >
      <img
        class="h-7 w-7 rounded-full"
        src="/img/icons/flags/united-states-of-america.svg"
        alt="flag icon"
      />
    </button>

    <NavigationToolbarNotifications />

    <button
      type="button"
      class="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 dark:ring-offset-muted-900 transition-all duration-300"
      @click="openPanel('activity')"
    >
      <BaseIcon name="ph:circles-four-duotone" class="w-5 h-5 text-muted-400" />
    </button>

    <NavigationToolbarAccountMenu />
  </div>
</template>
