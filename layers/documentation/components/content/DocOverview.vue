<template>
  <div
    class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"
  >
    <div>
      <BaseCard shape="rounded" class="p-8">
        <div
          class="text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300"
        >
          <TairoLogoText class="h-8 transition-colors duration-300" />
        </div>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 mb-4"
        >
          Tairo is a powerful Nuxt / Tailwind CSS Admin and Webapp UI Kit, built
          with Vue 3 and TypeScript.
        </BaseParagraph>
        <BaseText size="sm" class="text-muted-400 dark:text-muted-400">
          Tairo provides everything you need to build a modern web app or admin
          application. All basic components are built with Tailwind CSS and
          powered by Nuxt.
        </BaseText>

        <NuxtLink
          to="/documentation/setup"
          class="text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
        >
          <span class="me-1">Quick start guide</span>
          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
          />
        </NuxtLink>
      </BaseCard>
    </div>
    <div class="grid gap-2 sm:grid-cols-2 xl:gap-6">
      <NuxtLink
        to="https://nuxt.com/docs"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          shape="rounded"
          class="group-hover:border-success-500 flex h-full items-center p-8 text-center sm:justify-center sm:p-2"
        >
          <img
            src="/img/logos/brands/nuxt-light.svg"
            class="block h-6 dark:hidden sm:mx-auto"
            alt="Nuxt logo"
          />
          <img
            src="/img/logos/brands/nuxt-dark.svg"
            class="hidden h-6 dark:block sm:mx-auto"
            alt="Nuxt logo"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 sr-only dark:text-white"
          >
            Nuxt
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink
        to="https://tailwindcss.com/docs/installation"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          shape="rounded"
          class="flex h-full items-center p-8 text-center group-hover:border-sky-500 sm:justify-center sm:p-2"
        >
          <img
            src="/img/logos/brands/tailwindcss-light.svg"
            class="block h-7 dark:hidden sm:mx-auto"
            alt="Tailwind CSS logo"
          />
          <img
            src="/img/logos/brands/tailwindcss-dark.svg"
            class="hidden h-7 dark:block sm:mx-auto"
            alt="Tailwind CSS logo"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 sr-only dark:text-white"
          >
            Tailwind CSS
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/shuriken-ui"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          shape="rounded"
          class="flex h-full items-center p-8 text-center group-hover:border-violet-500 sm:justify-center sm:p-2"
        >
          <img
            src="/img/logos/brands/shuriken-light.svg"
            class="block h-8 dark:hidden sm:mx-auto"
            alt="Shuriken UI logo"
          />
          <img
            src="/img/logos/brands/shuriken-dark.svg"
            class="hidden h-8 dark:block sm:mx-auto"
            alt="Shuriken UI logo"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 sr-only dark:text-white"
          >
            Shuriken UI
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink
        to="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          shape="rounded"
          class="flex h-full items-center p-8 text-center group-hover:border-blue-500 sm:justify-center sm:p-2"
        >
          <img
            src="/img/logos/brands/typescript-text.svg"
            class="block h-7 sm:mx-auto"
            alt="Typescript logo"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 sr-only dark:text-white"
          >
            Typescript
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
    </div>
  </div>
</template>
