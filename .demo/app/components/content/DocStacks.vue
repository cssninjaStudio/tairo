<template>
  <div
    class="dark:border-muted-800 -mt-6 mb-10 grid gap-4 border-b border-muted-200 pb-10 md:grid-cols-1"
  >
    <div>
      <BaseCard rounded="md" class="p-6 md:p-8">
        <div
          class="text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300"
        >
          <TairoLogoText class="h-8 transition-colors duration-300" />
        </div>
        <BaseParagraph
          size="sm"
          class="text-muted-600 dark:text-muted-400 mb-4"
        >
          Tairo is a powerful Nuxt / Tailwind CSS v4 Admin and Webapp UI Kit, built
          with Shuriken UI and TypeScript. It provides a very robust foundation for your next project, including a modern design system and a set of reusable components.
        </BaseParagraph>
        <BaseText size="sm" class="text-muted-500 dark:text-muted-400">
          Tairo provides everything you need to build a modern web app or admin
          application. All basic components are built with Tailwind CSS v4 and
          powered by Nuxt.
        </BaseText>

        <NuxtLink
          to="/documentation/setup/new-project"
          class="text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
        >
          <span class="me-1">Installation guide</span>
          <Icon
            name="lucide:arrow-right"
            class="size-4 transition-transform duration-300 group-hover:translate-x-2"
          />
        </NuxtLink>
      </BaseCard>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <NuxtLink
        to="https://nuxt.com/docs"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          rounded="md"
          class="group-hover:border-primary-500 flex h-full items-center text-center sm:justify-center px-4 py-8"
        >
          <Icon name="logos:nuxt" class="block h-8 w-24 mx-auto" />
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
          rounded="sm"
          class="group-hover:border-primary-500 flex h-full items-center text-center sm:justify-center px-4 py-8"
        >
          <Icon name="logos:tailwindcss" class="block h-10 w-40 mx-auto" />
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
        to="https://v4.shuriken-ui.com"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-full flex-col"
      >
        <BaseCard
          rounded="sm"
          class="group-hover:border-primary-500 flex h-full items-center text-center sm:justify-center px-4 py-8"
        >
          <img
            src="/img/logos/brands/shuriken-gradient-light.svg"
            class="block h-8 mx-auto dark:hidden"
            alt="Shuriken UI logo"
          >
          <img
            src="/img/logos/brands/shuriken-gradient-dark.svg"
            class="hidden h-8 mx-auto dark:block"
            alt="Shuriken UI logo"
          >
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
          rounded="sm"
          class="group-hover:border-primary-500 flex h-full items-center text-center sm:justify-center px-4 py-8"
        >
          <img
            src="/img/logos/brands/typescript-text.svg"
            class="block h-7 mx-auto"
            alt="Typescript logo"
          >
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
