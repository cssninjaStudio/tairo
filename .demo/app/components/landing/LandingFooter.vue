<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white"
  >
    <NuxtLink
      to="https://cssninja.io"
      class="dark:bg-muted-900 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center bg-white"
    >
      <img
        class="size-7"
        src="/img/logos/cssninja-logo-icon.svg"
        alt="Css Ninja logo"
        height="28"
        width="28"
        loading="lazy"
        decoding="async"
      >
    </NuxtLink>
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row"
    >
      <NuxtLink
        to="/"
        aria-label="Go to Tairo homepage"
        class="block w-full lg:w-1/5"
      >
        <TairoLogoText
          class="text-muted-300 mx-auto h-6 transition-all duration-200 lg:mx-0"
        />
      </NuxtLink>
      <div
        class="mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"
      >
        <NuxtLink
          to="/demos"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Demo pages
        </NuxtLink>

        <NuxtLink
          to="/documentation"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Documentation
        </NuxtLink>
        <NuxtLink
          to="https://github.com/shuriken-ui"
          target="_blank"
          rel="noopener"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Shuriken UI
        </NuxtLink>
        <NuxtLink
          to="https://cssninja.io/faq/support"
          target="_blank"
          rel="noopener"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          Support
        </NuxtLink>
      </div>
      <div
        class="text-muted-500 dark:text-muted-400 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"
      >
        <span>
          ©
          <NuxtLink
            to="https://cssninja.io"
            target="_blank"
            rel="noopener"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            Css Ninja
          </NuxtLink>
          2018-{{ year }}.
        </span>
      </div>
    </div>
  </footer>
</template>
