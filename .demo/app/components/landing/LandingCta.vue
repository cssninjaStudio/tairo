<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mx-auto w-full max-w-6xl">
        <div
          class="bg-primary-900 dark:bg-primary-900/40 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"
        >
          <div
            class="flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pe-0 xl:px-20"
          >
            <div class="font-sans lg:self-center">
              <h2 class="text-3xl font-medium text-white sm:text-4xl">
                <span class="block">Ready to dive in?</span>
                <span class="block">Explore all available components.</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-white">
                We built a great documentation to help you get started. Each
                component has a demo page and code snippets showing how to use
                them.
              </p>
              <div class="mt-8 flex items-center gap-2">
                <BaseButton
                  to="/documentation"
                  rounded="lg"
                  class="h-11!"
                >
                  Open Documentation
                </BaseButton>
              </div>
            </div>
          </div>
          <div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">
            <img
              class="block translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 dark:hidden"
              src="/img/apps/tairo-screen-full.png"
              alt="Tairo demo screenshot lightmode"
              format="webp"
              width="568"
              height="532"
              loading="lazy"
              decoding="async"
            >
            <img
              class="hidden translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 dark:block"
              src="/img/apps/tairo-screen-full-dark.png"
              alt="Tairo demo screenshot darkmode"
              format="webp"
              width="568"
              height="532"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
