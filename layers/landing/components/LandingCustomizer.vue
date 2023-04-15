<script setup lang="ts"></script>

<template>
  <div class="dark:bg-muted-900 overflow-hidden bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Customize</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Shuriken UI
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>
      <div
        class="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row"
      >
        <!-- Left -->
        <div class="relative w-full sm:w-1/2">
          <div class="absolute inset-x-0 z-0 -mt-2 py-24">
            <div
              class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-3xl"
            >
              <div
                class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
              ></div>
              <div
                class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
              ></div>
            </div>
          </div>
          <div
            class="gridlines relative z-10 flex min-h-[480px] w-full items-center justify-center"
          >
            <BaseCard
              shape="curved"
              class="!border-primary-600 relative mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="curved" color="primary" shadow="flat"
                  >Member</BaseTag
                >
                <BaseButtonClose shape="full" color="muted" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/24.svg"
                badge-src="/img/stacks/html5.svg"
                class="mx-auto !flex !transition-all !duration-200"
                shape="full"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Belen Lopez</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Fullstack Developer</BaseText
                >
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar size="xs" src="/img/stacks/js.svg" shape="full" />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/python.svg"
                  shape="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/reactjs.svg"
                  shape="full"
                />
              </div>
              <div>
                <BaseButton class="!h-12 w-full" shape="curved">
                  <Icon name="lucide:bell" class="h-4 w-4" />
                  <span>Follow Belen</span>
                </BaseButton>
                <NuxtLink
                  to="#"
                  class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
                >
                  View profile
                </NuxtLink>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Right -->
        <div class="relative w-full sm:w-1/2">
          <!-- buttons -->
          <div class="mx-auto grid max-w-sm grid-cols-2 gap-4 p-6">
            <div>
              <button
                type="button"
                class="border-muted-200 dark:border-muted-800 mx-auto flex h-32 w-32 flex-col items-center justify-center border"
              >
                <Icon name="uit:window-maximize" class="mb-2 h-10 w-10" />
                <span>Relaxed</span>
              </button>
            </div>
            <div>
              <button
                type="button"
                class="border-muted-200 dark:border-muted-800 mx-auto flex h-32 w-32 flex-col items-center justify-center border"
              >
                <Icon name="uit:window-maximize" class="mb-2 h-10 w-10" />
                <span>Relaxed</span>
              </button>
            </div>
            <div>
              <button
                type="button"
                class="border-muted-200 dark:border-muted-800 mx-auto flex h-32 w-32 flex-col items-center justify-center border"
              >
                <Icon name="uit:window-maximize" class="mb-2 h-10 w-10" />
                <span>Relaxed</span>
              </button>
            </div>
            <div>
              <button
                type="button"
                class="border-muted-200 dark:border-muted-800 mx-auto flex h-32 w-32 flex-col items-center justify-center border"
              >
                <Icon name="uit:window-maximize" class="mb-2 h-10 w-10" />
                <span>Relaxed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}
</style>
