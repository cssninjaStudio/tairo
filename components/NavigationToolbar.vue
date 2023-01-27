<script setup lang="ts">
const { open } = usePanels()

const route = useRoute()
</script>

<template>
  <div class="relative z-50 mb-5 flex h-16 items-center gap-2">
    <NavigationBurger class="-ml-3" />

    <BaseHeading
      as="h1"
      size="2xl"
      weight="light"
      class="text-muted-800 hidden dark:text-white md:block"
    >
      {{ route.meta.title }}
    </BaseHeading>

    <BaseThemeToggle class="ml-auto" />

    <button
      type="button"
      class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
      @click="open('language')"
    >
      <NuxtImg
        class="h-7 w-7 rounded-full"
        src="/img/icons/flags/united-states-of-america.svg"
        alt="flag icon"
      />
    </button>

    <NavigationToolbarNotifications />

    <button
      type="button"
      class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
      @click="open('activity')"
    >
      <Icon name="ph:circles-four-duotone" class="text-muted-400 h-5 w-5" />
    </button>

    <NavigationToolbarAccountMenu />
  </div>
</template>
