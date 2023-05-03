<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Made for developers</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          A layered experience
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is built on top on the Nuxt Layers concept. Layers can be seen
          as groups of components and composables that are related to each
          other. They help create a consistent experience and a maintainable
          codebase.
        </BaseParagraph>
      </div>
      <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="Starter App"
          icon="ph:rocket-duotone"
          to="/documentation/setup"
          color="indigo"
        >
          Tairo ships with a clean starter project where you can start writing
          your own code and content, also making it easier by providing app
          configuration files.
        </LandingLayersBox>
        <LandingLayersBox
          title="Customization"
          icon="ph:sparkle-duotone"
          to="/documentation/tailwindcss"
          color="purple"
        >
          Tairo is built with Tailwind CSS and Shuriken UI. You can customize
          every single component to fit with your branding styles, shapes and
          colors.
        </LandingLayersBox>
        <LandingLayersBox
          title="Component reference"
          icon="ph:notification-duotone"
          to="/documentation/reference"
        >
          Tairo ships with a lot of UI components, from the smallest parts
          required to build a web application to more complex organisms with
          their own logic.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
