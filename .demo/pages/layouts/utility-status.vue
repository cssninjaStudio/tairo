<script setup lang="ts">
definePageMeta({
  title: 'Status',
  layout: 'empty',
})
</script>

<template>
  <div class="min-h-screen bg-muted-100 dark:bg-muted-900 px-4 overflow-hidden">
    <div class="max-w-3xl mx-auto">
      <div
        class="h-16 w-full max-w-4xl mx-auto px-4 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <TairoLogo class="w-10 h-10" />
        </NuxtLink>
        <!-- div class="flex items-center gap-8">
          <BaseButton shape="curved" condensed color="muted">Status</BaseButton>
          <BaseButton shape="curved" condensed color="none"
            >Maintenance</BaseButton
          >
          <BaseButton shape="curved" condensed color="none"
            >Incidents</BaseButton
          >
        </div -->
        <div class="flex items-center gap-4">
          <BaseThemeToggle />
        </div>
      </div>

      <div class="max-w-4xl mx-auto py-12 space-y-12">
        <div>
          <div class="flex flex-col text-center gap-4 pb-16">
            <Icon
              name="ph:check-circle-duotone"
              class="w-8 h-8 mx-auto text-success-500"
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
                class="[&:not(:last-child)]:border-b py-8 border-muted-200 dark:border-muted-700"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mb-1">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="w-4 h-4 text-success-500"
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

                <div class="w-full flex items-center">
                  <div
                    v-for="index in 90"
                    class="group relative h-8 flex-1 shrink-0 rounded-[2px] border-l border-r border-white dark:border-muted-800 cursor-pointer"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 hover:bg-orange-500 transition-colors duration-300',
                      index === 54 &&
                        'bg-red-500 hover:bg-red-300 transition-colors duration-300',
                    ]"
                  >
                    <!-- Popup -->
                    <div
                      class="absolute -top-24 left-1/2 -translate-x-1/2 w-40 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <BaseCard shape="curved" elevated>
                        <div
                          class="flex items-center gap-1 p-3 border-b border-muted-200 dark:border-muted-700"
                        >
                          <Icon
                            name="ph:check-circle-duotone"
                            class="w-4 h-4 text-success-500"
                          />
                          <BaseText
                            size="sm"
                            class="text-muted-600 dark:text-muted-100"
                            >Operational</BaseText
                          >
                        </div>
                        <div class="p-2 text-center text-muted-400">
                          <BaseText size="xs">March 23, 2023</BaseText>
                        </div>
                      </BaseCard>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-between gap-4 mt-1 text-muted-400"
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
                class="[&:not(:last-child)]:border-b py-8 border-muted-200 dark:border-muted-700"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mb-1">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="w-4 h-4 text-success-500"
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

                <div class="w-full flex items-center">
                  <div
                    v-for="index in 90"
                    class="relative h-8 flex-1 shrink-0 rounded-[2px] border-l border-r border-white dark:border-muted-800 cursor-pointer"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 hover:bg-orange-500 transition-colors duration-300',
                      index === 54 &&
                        'bg-red-500 hover:bg-red-300 transition-colors duration-300',
                    ]"
                  ></div>
                </div>
                <div
                  class="flex items-center justify-between gap-4 mt-1 text-muted-400"
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
                class="[&:not(:last-child)]:border-b py-8 border-muted-200 dark:border-muted-700"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mb-1">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="w-4 h-4 text-success-500"
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

                <div class="w-full flex items-center">
                  <div
                    v-for="index in 90"
                    class="relative h-8 flex-1 shrink-0 rounded-[2px] border-l border-r border-white dark:border-muted-800 cursor-pointer"
                    :class="[
                      index !== 35 &&
                        index !== 54 &&
                        'bg-success-500 hover:bg-success-300 transition-colors duration-300',
                      index === 35 &&
                        'bg-orange-300 hover:bg-orange-500 transition-colors duration-300',
                      index === 54 &&
                        'bg-red-500 hover:bg-red-300 transition-colors duration-300',
                    ]"
                  ></div>
                </div>
                <div
                  class="flex items-center justify-between gap-4 mt-1 text-muted-400"
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
            class="flex items-center gap-3 p-6 border-b border-muted-200 dark:border-muted-700"
          >
            <Icon name="fa6-brands:twitter" class="w-6 h-6 text-sky-500" />
            <BaseHeading size="sm" weight="medium">
              @cssninjaStudio
            </BaseHeading>
            <div class="ml-auto">
              <NuxtLink
                to="#"
                class="font-sans text-sm text-primary-500 underline-offset-4 hover:underline"
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
                  class="mb-1 text-muted-400 dark:text-muted-300"
                >
                  March 14 at 5:39pm
                </BaseText>
                <BaseParagraph
                  size="sm"
                  class="max-w-md text-muted-500 dark:text-muted-400"
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
                  class="mb-1 text-muted-400 dark:text-muted-300"
                >
                  Dec 11 at 8:48am
                </BaseText>
                <BaseParagraph
                  size="sm"
                  class="max-w-md text-muted-500 dark:text-muted-400"
                >
                  Sorry about that! Our systems are showing everything as caught
                  up now. Let us know if you're still seeing problems!
                </BaseParagraph>
              </div>
            </div>
          </div>
        </BaseCard>
        <div
          class="h-16 w-full max-w-6xl mx-auto px-4 pt-12 pb-24 flex items-center justify-between"
        >
          <div class="flex items-center gap-8">
            <BaseThemeToggle />
            <NuxtLink
              to="#"
              class="font-sans text-sm text-muted-400 hover:text-primary-500 hover:underline underline-offset-4"
              >Legal</NuxtLink
            >
            <NuxtLink
              to="#"
              class="font-sans text-sm text-muted-400 hover:text-primary-500 hover:underline underline-offset-4"
              >About</NuxtLink
            >
            <NuxtLink
              to="#"
              class="font-sans text-sm text-muted-400 hover:text-primary-500 hover:underline underline-offset-4"
              >Jobs</NuxtLink
            >
          </div>
          <span class="font-sans text-sm text-muted-400"
            >&copy; 2018-{{ new Date().getFullYear() }} @cssninjaStudio</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
