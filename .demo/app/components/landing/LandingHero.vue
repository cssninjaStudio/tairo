<script setup lang="ts">
const { y } = useNuiWindowScroll()
</script>

<template>
  <div
    class="dark:to-muted-900 relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-white"
  >
    <div class="gridlines absolute inset-x-0 z-10 -mt-8 py-20" />
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 2xl:mx-auto 2xl:max-w-6xl dark:opacity-50"
      >
        <div
          class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
        />
        <div
          class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
        />
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="relative z-30 pt-32 text-center">
        <BaseHeading
          as="h1"
          size="5xl"
          weight="light"
          lead="tight"
          class="text-muted-800 xs:text-4xl! mx-auto mb-4 max-w-2xl dark:text-white"
        >
          The dashboard system that makes you say
          <span
            class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
          >wow</span>
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
        >
          Tairo is the ultimate solution for developers looking to build
          beautiful Nuxt dashboards in no time, with the power of Shuriken UI
          and Tailwind v4.
        </BaseParagraph>
        <div class="flex items-center justify-center">
          <BaseButton
            rounded="lg"
            variant="primary"
            to="https://go.cssninja.io/buy-tairo"
            class="h-12! w-44"
          >
            Buy Tairo Now
          </BaseButton>
        </div>
      </div>
      <!-- Components -->
      <fieldset
        disabled
        class="min-h-[2075px] w-full sm:min-h-[760px] lg:min-h-[750px]"
        aria-hidden="true"
      >
        <div
          class="group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-800 relative z-30 mt-12 overflow-hidden border group-[&.scrolled]/landing:rounded-xl group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:pb-6 group-[&.scrolled]/landing:pe-6 group-[&.scrolled]/landing:ps-6 group-[&.scrolled]/landing:pt-20 motion-safe:transition-all motion-safe:duration-300 group-[&.scrolled]/landing:lg:ps-28"
        >
          <!-- Fake sidebar -->
          <div
            class="dark:bg-muted-800 absolute start-0 top-0 hidden h-full w-20 flex-col bg-white group-[&.scrolled]/landing:translate-x-0 group-[&:not(.scrolled)]/landing:-translate-x-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:flex"
          >
            <div class="flex h-20 w-full items-center justify-center">
              <TairoLogo class="text-primary-500 size-8" />
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob bg-primary-500/10 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:house-duotone"
                  class="text-primary-500 size-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:grid-four-duotone"
                  class="text-muted-400 size-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:users-duotone" class="text-muted-400 size-5" />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:chat-circle-duotone"
                  class="text-muted-400 size-5"
                />
              </div>
            </div>
            <div class="mt-auto flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:gear-six-duotone"
                  class="text-muted-400 size-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex size-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  rounded="none"
                  size="sm"
                  src="/img/avatars/24.svg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <!-- Fake navbar -->
          <div
            class="absolute start-0 top-0 flex h-20 w-full items-center justify-between pe-6 ps-6 group-[&.scrolled]/landing:translate-y-0 group-[&:not(.scrolled)]/landing:-translate-y-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:ps-28"
          >
            <div class="flex h-full items-center gap-4">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex size-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="lucide:menu" class="text-muted-400 size-5" />
              </div>
              <BaseText class="hidden sm:inline-block">
                My Dashboard
              </BaseText>
            </div>
            <div class="flex h-full items-center justify-end gap-1">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex size-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:bell-duotone" class="text-muted-400 size-5" />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex size-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:circles-four-duotone"
                  class="text-muted-400 size-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex size-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:translate-duotone"
                  class="text-muted-400 size-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex size-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  rounded="none"
                  size="xs"
                  src="/img/avatars/24.svg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4"
          >
            <!-- Col -->
            <div
              class="flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-24"
            >
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="flex flex-col p-6"
              >
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Personal Score</span>
                  </BaseHeading>
                </div>
                <div class="flex justify-center py-16">
                  <DemoChartRadialGaugeAlt
                    class="-mt-14 motion-safe:transition-all motion-safe:duration-200"
                  />
                </div>
                <div class="mt-auto text-center">
                  <BaseParagraph size="sm">
                    <span class="text-muted-400">
                      Your score has been calculated based on the latest metrics
                    </span>
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
            <!-- Col -->
            <div class="flex flex-col gap-6 sm:gap-3 lg:gap-4">
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-6"
              >
                <DemoInboxMessage
                  picture="/img/avatars/10.svg"
                  name="Kendra W."
                  title="Design Project"
                  text="Where are we in terms of design? We need to review the new screens."
                  time="28 minutes"
                  rounded="lg"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-6"
              >
                <DemoInfoBadges
                  image="/img/illustrations/widgets/1.svg"
                  badge-small="/img/illustrations/widgets/3.svg"
                  badge-medium="/img/illustrations/widgets/2.svg"
                  title="You've unlocked 2 new Achievements"
                  text="Congrats, your efforts have been rewarded. Keep up like this!"
                />
              </BaseCard>
            </div>
            <!-- Col -->
            <div
              class="flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-16"
            >
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-4"
              >
                <DemoTeamSearchCompact rounded="lg" />
              </BaseCard>
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-3"
              >
                <DemoVideoCompact rounded="lg" />
              </BaseCard>
            </div>
            <!-- Col -->
            <div
              class="flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-10"
            >
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-6"
              >
                <DemoProgressCircle
                  image="/img/avatars/6.svg"
                  :title="`${y < 500 ? Math.trunc(y / 5) : 100}% completed!`"
                  text="Congrats, your efforts have been rewarded. Keep up like this!"
                  :value="y < 500 ? Math.trunc(y / 5) : 100"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard
                rounded="lg"
                elevated
                class="p-6"
              >
                <DemoFollowersCompact />
              </BaseCard>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Components -->
      <LandingHeroMockup />
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-dark.svg);
}
</style>
