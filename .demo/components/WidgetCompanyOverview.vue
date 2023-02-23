<template>
  <div class="h-full flex flex-col">
    <div class="relative w-20 h-20 mx-auto mb-4">
      <BaseAvatar size="xl" src="/img/icons/logos/slicer.svg" />
      <div class="absolute bottom-0 right-0">
        <BaseButtonIcon shape="full" small>
          <Icon name="ph:camera-duotone" />
        </BaseButtonIcon>
      </div>
    </div>
    <div class="text-center">
      <BaseHeading
        size="md"
        weight="medium"
        class="text-muted-800 dark:text-muted-100"
      >
        <span>Slicer Learning</span>
      </BaseHeading>
      <BaseParagraph size="xs" class="text-muted-400 mb-2">
        <span>Online courses</span>
      </BaseParagraph>
      <BaseParagraph
        size="sm"
        class="max-w-[320px] mx-auto text-muted-500 dark:text-muted-400"
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista
          esse non inportuna.
        </span>
      </BaseParagraph>
    </div>
    <div
      class="text-center mt-auto pt-6 border-t border-muted-200 dark:border-muted-700"
    >
      <div
        class="w-full flex items-center divide-x divide-muted-200 dark:divide-muted-700"
      >
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              864
            </h4>
            <p
              class="font-sansfont-semibold text-[0.65rem] uppercase text-muted-400"
            >
              Posts
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              247
            </h4>
            <p
              class="font-sans font-semibold text-[0.65rem] uppercase text-muted-400"
            >
              Projects
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              19k
            </h4>
            <p
              class="font-sansfont-semibold text-[0.65rem] uppercase text-muted-400"
            >
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
