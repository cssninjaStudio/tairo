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
          to="https://docs.cssninja.io/tairo"
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
    <div class="grid grid-cols-2 gap-2 xl:gap-6">
      <NuxtLink to="https://nuxt.com/docs" class="group">
        <BaseCard shape="rounded" class="p-8 text-center">
          <Icon
            name="simple-icons:nuxtdotjs"
            class="text-muted-400 group-hover:text-primary-500 mx-auto mb-2 block h-10 w-10 transition-colors duration-300"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            Nuxt
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink to="https://tailwindcss.com/docs/installation" class="group">
        <BaseCard shape="rounded" class="p-8 text-center">
          <Icon
            name="simple-icons:tailwindcss"
            class="text-muted-400 group-hover:text-primary-500 mx-auto mb-2 block h-10 w-10 transition-colors duration-300"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            Tailwind CSS
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink to="https://github.com/shuriken-ui" class="group">
        <BaseCard shape="rounded" class="p-8 text-center">
          <Icon
            name="carbon:tropical-storm-tracks"
            class="text-muted-400 group-hover:text-primary-500 mx-auto mb-2 block h-10 w-10 rotate-45 scale-95 transition-colors duration-300"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            Shuriken UI
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
      <NuxtLink to="https://www.typescriptlang.org/" class="group">
        <BaseCard shape="rounded" class="p-8 text-center">
          <Icon
            name="bxl:typescript"
            class="text-muted-400 group-hover:text-primary-500 mx-auto mb-2 block h-10 w-10 transition-colors duration-300"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            Typescript
          </BaseHeading>
        </BaseCard>
      </NuxtLink>
    </div>
  </div>
</template>
