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
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <LandingLayersBox title="UI Layer" icon="ph:mouse-duotone" to="/">
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </LandingLayersBox>
        <LandingLayersBox title="Layout Layer" icon="ph:sidebar-duotone" to="/">
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </LandingLayersBox>
        <LandingLayersBox
          title="App Layer"
          icon="ph:notification-duotone"
          to="/"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
