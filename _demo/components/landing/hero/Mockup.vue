<template>
  <div class="relative z-30 mt-32 grid grid-cols-12">
    <div class="col-span-4">
      <div class="flex h-full flex-col justify-center">
        <div>
          <BaseText
            class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
            >Nuxt Ready</BaseText
          >
          <BaseHeading
            as="h2"
            size="4xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mx-auto mb-4 max-w-2xl dark:text-white"
          >
            An advanced Nuxt 3 application setup
          </BaseHeading>
          <BaseParagraph
            size="lg"
            class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
          >
            Tairo is the ultimate solution for developers and businesses looking
            to build beautiful and responsive dashboards in no time.
          </BaseParagraph>
          <div class="mt-6 grid grid-cols-3">
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:nuxtdotjs"
                    class="text-primary-500 relative -top-0.5 h-7 w-7"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Nuxt 3</BaseText
              >
            </div>
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:tailwindcss"
                    class="text-primary-500 h-8 w-8"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Tailwind CSS</BaseText
              >
            </div>
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="nonicons:typescript-16"
                    class="text-primary-500 h-6 w-6"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Typescript</BaseText
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-8">
      <div class="bg-muted-200 relative -right-32 aspect-[4/3] w-full"></div>
    </div>
  </div>
</template>
