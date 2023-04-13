<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="dark:bg-muted-900 bg-white">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row"
    >
      <a href="#">
        <TairoLogoText class="text-muted-300 h-7 transition-all duration-200" />
      </a>

      <div
        class="mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"
      >
        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Overview
        </a>

        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Features
        </a>

        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Careers
        </a>

        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Help
        </a>

        <a
          href="#"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Privacy
        </a>
      </div>

      <p class="text-muted-500 dark:text-muted-400 mt-6 text-sm lg:mt-0">
        © Css Ninja 2018-{{ year }}.
      </p>
    </div>
  </footer>
</template>
