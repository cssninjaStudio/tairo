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
          Layer based structure
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is built on top on the Nuxt Layers concept. Layers can be seen
          as groups of components and composables that are related to each
          other. They are designed to be used together and can be easily swapped
          out.
        </BaseParagraph>
      </div>
      <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="UI Layer"
          icon="ph:mouse-duotone"
          to="/documentation/layers"
          color="indigo"
        >
          The UI Layer is the foundation of your app. It provides all basic
          elements and is mostly handled by Shuriken UI and some Tairo specific
          components.
        </LandingLayersBox>
        <LandingLayersBox
          title="Layout Layer"
          icon="ph:sidebar-duotone"
          to="/documentation/layers"
          color="purple"
        >
          The layout layer determines the overall structure of your app. It
          provides a content area and some navigation options such as a sidebar
          or a navbar.
        </LandingLayersBox>
        <LandingLayersBox
          title="App Layer"
          icon="ph:notification-duotone"
          to="/documentation/layers"
        >
          The app layer is where you write your own code and content. Tairo
          makes it even more easy providing you with app configuration files.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
