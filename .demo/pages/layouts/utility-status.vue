<script setup lang="ts">
definePageMeta({
  title: 'Status',
  layout: 'empty',
  preview: {
    title: 'Service status',
    description: 'For company service status',
    categories: ['layouts'],
    src: '/img/screens/layouts-utility-status.png',
    srcDark: '/img/screens/layouts-utility-status-dark.png',
    order: 91,
  },
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen overflow-hidden px-4">
    <div class="mx-auto max-w-3xl">
      <div
        class="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4"
      >
        <NuxtLink
          to="/"
          class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <TairoLogoText class="h-7" />
        </NuxtLink>
        <div class="flex items-center gap-4">
          <BaseThemeToggle />
        </div>
      </div>

      <div class="mx-auto max-w-4xl space-y-12 py-12">
        <div>
          <div class="flex flex-col gap-4 pb-16 text-center">
            <Icon
              name="ph:check-circle-duotone"
              class="text-success-500 mx-auto h-8 w-8"
            />
            <div>
              <BaseHeading
                as="h3"
                size="3xl"
                weight="medium"
                lead="none"
                class="mb-1"
              >
                All services online
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                As of March 14, 2023 at 11:08 PM GMT
              </BaseParagraph>
            </div>
          </div>
          <div class="px-8 py-5">
            <div class="flex gap-16">
              <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                >Service</BaseText
              >
              <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                >Uptime during the last 90 days</BaseText
              >
            </div>
          </div>
          <BaseCard shape="curved" class="px-8">
            <div>
              <!-- Item -->
              <div
                class="border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="mb-1 flex items-center gap-2">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-success-500 h-4 w-4"
                    />
                    <BaseText size="sm">tairo.cssninja.io</BaseText>
                  </div>
                  <div>
                    <BaseText
                      size="sm"
                      class="text-success-600 dark:text-success-400"
                      >99.989% uptime</BaseText
                    >
                  </div>
                </div>

                <div class="flex w-full items-center">
                  <div
                    v-for="index in 90"
                    :key="index"
                    class="dark:border-muted-800 group relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 transition-colors duration-300 hover:bg-orange-500',
                      index === 54 &&
                        'bg-red-500 transition-colors duration-300 hover:bg-red-300',
                    ]"
                  >
                    <!-- Popup -->
                    <div
                      class="absolute -top-24 start-1/2 w-40 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      <BaseCard shape="curved" elevated>
                        <div
                          class="border-muted-200 dark:border-muted-700 flex items-center gap-1 border-b p-3"
                        >
                          <Icon
                            name="ph:check-circle-duotone"
                            class="text-success-500 h-4 w-4"
                          />
                          <BaseText
                            size="sm"
                            class="text-muted-600 dark:text-muted-100"
                            >Operational</BaseText
                          >
                        </div>
                        <div class="text-muted-400 p-2 text-center">
                          <BaseText size="xs">March 23, 2023</BaseText>
                        </div>
                      </BaseCard>
                    </div>
                  </div>
                </div>
                <div
                  class="text-muted-400 mt-1 flex items-center justify-between gap-4"
                >
                  <div>
                    <BaseText size="xs" weight="medium">90 days ago</BaseText>
                  </div>
                  <div>
                    <BaseText size="xs" weight="medium">Today</BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div
                class="border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="mb-1 flex items-center gap-2">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-success-500 h-4 w-4"
                    />
                    <BaseText size="sm">api.tairo.cssninja.io</BaseText>
                  </div>
                  <div>
                    <BaseText
                      size="sm"
                      class="text-success-600 dark:text-success-400"
                      >99.989% uptime</BaseText
                    >
                  </div>
                </div>

                <div class="flex w-full items-center">
                  <div
                    v-for="index in 90"
                    :key="index"
                    class="dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 transition-colors duration-300 hover:bg-orange-500',
                      index === 54 &&
                        'bg-red-500 transition-colors duration-300 hover:bg-red-300',
                    ]"
                  ></div>
                </div>
                <div
                  class="text-muted-400 mt-1 flex items-center justify-between gap-4"
                >
                  <div>
                    <BaseText size="xs" weight="medium">90 days ago</BaseText>
                  </div>
                  <div>
                    <BaseText size="xs" weight="medium">Today</BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div
                class="border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="mb-1 flex items-center gap-2">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="text-success-500 h-4 w-4"
                    />
                    <BaseText size="sm">hooks.tairo.cssninja.io</BaseText>
                  </div>
                  <div>
                    <BaseText
                      size="sm"
                      class="text-success-600 dark:text-success-400"
                      >99.989% uptime</BaseText
                    >
                  </div>
                </div>

                <div class="flex w-full items-center">
                  <div
                    v-for="index in 90"
                    :key="index"
                    class="dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 transition-colors duration-300 hover:bg-orange-500',
                      index === 54 &&
                        'bg-red-500 transition-colors duration-300 hover:bg-red-300',
                    ]"
                  ></div>
                </div>
                <div
                  class="text-muted-400 mt-1 flex items-center justify-between gap-4"
                >
                  <div>
                    <BaseText size="xs" weight="medium">90 days ago</BaseText>
                  </div>
                  <div>
                    <BaseText size="xs" weight="medium">Today</BaseText>
                  </div>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <BaseCard shape="curved" class="mt-12">
          <div
            class="border-muted-200 dark:border-muted-700 flex items-center gap-3 border-b p-6"
          >
            <Icon name="fa6-brands:twitter" class="h-6 w-6 text-sky-500" />
            <BaseHeading size="sm" weight="medium">
              @cssninjaStudio
            </BaseHeading>
            <div class="ms-auto">
              <NuxtLink
                to="#"
                class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                >View on Twitter</NuxtLink
              >
            </div>
          </div>
          <div class="space-y-8 px-6 py-8">
            <div class="flex gap-4">
              <BaseAvatar src="/img/logos/brands/hanzo.svg" size="sm" />
              <div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-400 dark:text-muted-300 mb-1"
                >
                  March 14 at 5:39pm
                </BaseText>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400 max-w-md"
                >
                  We're experiencing higher than normal load on our batch
                  infrastructure. Webhooks are about an hour delayed. API calls
                  are not impacted
                </BaseParagraph>
              </div>
            </div>
            <div class="flex gap-4">
              <BaseAvatar src="/img/logos/brands/hanzo.svg" size="sm" />
              <div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-400 dark:text-muted-300 mb-1"
                >
                  Dec 11 at 8:48am
                </BaseText>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400 max-w-md"
                >
                  Sorry about that! Our systems are showing everything as caught
                  up now. Let us know if you're still seeing problems!
                </BaseParagraph>
              </div>
            </div>
          </div>
        </BaseCard>
        <div
          class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 pb-24 pt-12"
        >
          <div class="flex items-center gap-8">
            <BaseThemeToggle />
            <NuxtLink
              to="#"
              class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
              >Legal</NuxtLink
            >
            <NuxtLink
              to="#"
              class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
              >About</NuxtLink
            >
            <NuxtLink
              to="#"
              class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
              >Jobs</NuxtLink
            >
          </div>
          <span class="text-muted-400 font-sans text-sm"
            >&copy; 2018-{{ new Date().getFullYear() }} @cssninjaStudio</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
