<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-12 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          There's more
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Developer friendly
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is a cutting edge dashboard system that uses the latest
          javascript and technologies and remains truthfull to the best coding
          practices, making it and ideal choice for your next headless
          application.
        </BaseParagraph>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <LandingFeaturesTile title="Nuxt" icon="simple-icons:nuxtdotjs">
          Nuxt is the latest version of the Nuxt.js framework, a powerful SSR
          vue framework.
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="Tailwind CSS"
          icon="simple-icons:tailwindcss"
        >
          Tailwind CSS is a utility-first CSS framework for rapidly building
          custom user interfaces.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Typescript" icon="file-icons:typescript">
          Typescript is a typed superset of javascript that compiles to plain
          JS.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Vite" icon="simple-icons:vite">
          Vite is a next gen frontend tooling that significantly improves
          frontend development.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Node LTS" icon="teenyicons:nodejs-solid">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Pnpm" icon="file-icons:pnpm">
          Pnpm is a fast, disk space efficient package manager for the npm and
          Yarn registries.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Eslint" icon="file-icons:eslint">
          Eslint is a tool for identifying and reporting on patterns found in
          JavaScript code.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Prettier" icon="simple-icons:prettier">
          Prettier is an opinionated code formatter. It enforces a consistent
          code style.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Icones.js" icon="ph:lightning-duotone">
          Icones.js is a library that allows you to use any icon from any icon
          library.
        </LandingFeaturesTile>
      </div>

      <div class="mt-16 flex items-center justify-center">
        <BaseButton
          to="https://go.cssninja.io/buy-tairo"
          rounded="lg"
          variant="primary"
        >
          Get Tairo Dashboard System
        </BaseButton>
      </div>
    </div>
  </div>
</template>
