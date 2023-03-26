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
        <div class="flex items-center gap-8">
          <BaseButton shape="curved" condensed color="muted">Status</BaseButton>
          <BaseButton shape="curved" condensed color="none"
            >Maintenance</BaseButton
          >
          <BaseButton shape="curved" condensed color="none"
            >Incidents</BaseButton
          >
        </div>
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
          <div
            class="px-8 py-5 border-b border-muted-200 dark:border-muted-700"
          >
            <div class="flex gap-16">
              <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                >Service</BaseText
              >
              <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                >Uptime during the last 60 days</BaseText
              >
            </div>
          </div>
          <BaseCard shape="curved" class="p-8">
            <div class="space-y-8">
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/lightbulb.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="w-full flex items-center">
                    <div
                      v-for="index in 35"
                      class="h-8 flex-1 shrink-0 rounded-[2px] border-l border-r border-white dark:border-muted-800"
                      :class="
                        index <= 63
                          ? 'bg-success-500 hover:bg-success-300 transition-colors duration-300'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/image.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 20
                          ? 'bg-success-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      CDN Assets</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      100% availability
                    </BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/search.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 16
                          ? 'bg-warning-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      Search indexes</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      80% availability
                    </BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/diamond.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 9
                          ? 'bg-danger-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      Integrations</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      45% availability
                    </BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/chart.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 20
                          ? 'bg-success-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      Load balancing</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      100% availability
                    </BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/rocket.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 20
                          ? 'bg-success-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      Load booster</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      100% availability
                    </BaseText>
                  </div>
                </div>
              </div>
              <!-- Item -->
              <div class="flex items-center gap-16">
                <div>
                  <img
                    class="w-14 h-14"
                    src="/img/icons/animated/check.gif"
                    alt="Animated icon"
                  />
                </div>
                <div class="grow flex items-center justify-between">
                  <div class="flex items-center gap-1">
                    <div
                      v-for="index in 20"
                      class="h-8 w-2"
                      :class="
                        index <= 20
                          ? 'bg-success-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></div>
                  </div>
                  <div class="text-right">
                    <BaseText
                      size="sm"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      Security</BaseText
                    >
                  </div>
                  <div class="text-right">
                    <BaseText size="xs" class="text-muted-400">
                      100% availability
                    </BaseText>
                  </div>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <BaseCard class="mt-12">
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
