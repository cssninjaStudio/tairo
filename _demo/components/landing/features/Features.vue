<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Nuxt Layers</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Cool features
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>
      <div class="ltablet:grid-cols-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <LandingFeaturesTile title="Nuxt 3" icon="simple-icons:nuxtdotjs">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="Tailwind CSS"
          icon="simple-icons:tailwindcss"
        >
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Typescript" icon="file-icons:typescript">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Vite" icon="simple-icons:vite">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Node 18 LTS" icon="teenyicons:nodejs-solid">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Pnpm" icon="file-icons:pnpm">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Eslint" icon="file-icons:eslint">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Prettier" icon="simple-icons:prettier">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Icones.js" icon="simple-icons:iconify">
          Node 18 is one of the latest versions of Node.js, a powerful
          javascript server engine.
        </LandingFeaturesTile>
      </div>

      <div class="mt-16 flex items-center justify-center">
        <BaseButton shape="curved" color="primary" flavor="outline"
          >Read Documentation</BaseButton
        >
      </div>
    </div>
  </div>
</template>
