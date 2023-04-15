<template>
  <div
    class="ltablet:gap-y-0 relative z-30 mt-32 grid grid-cols-12 gap-y-8 overflow-hidden sm:w-full sm:gap-x-16 lg:gap-y-0"
  >
    <div class="ltablet:col-span-5 col-span-12 lg:col-span-4">
      <div class="flex h-full flex-col justify-center">
        <div class="ptablet:text-center">
          <BaseText
            class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
            >Nuxt Ready</BaseText
          >
          <BaseHeading
            as="h2"
            size="4xl"
            weight="light"
            lead="tight"
            class="text-muted-800 ptablet:max-w-md ptablet:mx-auto mb-4 max-w-2xl dark:text-white"
          >
            An advanced Nuxt 3 application setup
          </BaseHeading>
          <BaseParagraph
            size="lg"
            class="text-muted-500 dark:text-muted-100 ptablet:max-w-lg ptablet:mx-auto mb-4 max-w-2xl"
          >
            Tairo is the ultimate solution for developers and businesses looking
            to build beautiful and responsive dashboards in no time.
          </BaseParagraph>
          <div
            class="ptablet:max-w-md ptablet:mx-auto mt-6 grid scale-90 grid-cols-3"
          >
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-success-100 to-success-500 dark:from-success-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:nuxtdotjs"
                    class="text-success-500 relative -top-0.5 h-7 w-7"
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
                  class="animate-spin-slow [animation-delay: 0.3s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-sky-100 to-sky-500 blur-sm transition-all duration-200 dark:from-sky-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:tailwindcss"
                    class="h-8 w-8 text-sky-500"
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
                  class="animate-spin-slow [animation-delay: 0.6s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-100 to-indigo-500 blur-sm transition-all duration-200 dark:from-indigo-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="nonicons:typescript-16"
                    class="h-6 w-6 text-indigo-500"
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
    <div class="ltablet:col-span-7 col-span-12 lg:col-span-8">
      <img
        class="shadow-muted-300/30 border-muted-200 block max-w-full rounded-t-lg border border-b-0 shadow-xl dark:hidden"
        src="/img/apps/tairo-screen-full.png"
        alt="Tairo dashboard"
      />
      <img
        class="shadow-muted-800/30 border-muted-700 hidden max-w-full rounded-t-lg border border-b-0 shadow-xl dark:block"
        src="/img/apps/tairo-screen-full-dark.png"
        alt="Tairo dashboard"
      />
    </div>
  </div>
</template>
