<script setup lang="ts">
const { y } = useNinjaWindowScroll()

const gaugePersonal = reactive(useGaugePersonal())

function useGaugePersonal() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    title: {
      text: undefined,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          margin: 0,
          size: '35%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }

  const series = ref([76])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div
    class="dark:to-muted-900 relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-white"
  >
    <div class="gridlines absolute inset-x-0 z-10 -mt-8 py-20"></div>
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl"
      >
        <div
          class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
        ></div>
        <div
          class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
        ></div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="relative z-30 pt-32 text-center">
        <BaseHeading
          as="h1"
          size="5xl"
          weight="light"
          lead="tight"
          class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
        >
          The dashboard system that makes you say
          <span
            class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
            >wow</span
          >
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
        >
          Tairo is the ultimate solution for developers looking to build
          beautiful Nuxt dashboards in no time, with the power of Shuriken UI
          and Tailwind CSS.
        </BaseParagraph>
        <div class="flex items-center justify-center">
          <BaseButton
            shape="curved"
            color="primary"
            to="https://go.cssninja.io/buy-tairo"
            shadow="hover"
            class="!h-12 w-44"
          >
            Buy Tairo Now
          </BaseButton>
        </div>
      </div>
      <!-- Components -->
      <fieldset
        disabled
        class="ltablet:min-h-[760px] min-h-[2075px] w-full sm:min-h-[760px] lg:min-h-[750px]"
        aria-hidden="true"
      >
        <div
          class="group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:ltablet:ps-24 relative z-30 mt-12 overflow-hidden border group-[&.scrolled]/landing:rounded-xl group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:pb-6 group-[&.scrolled]/landing:pe-6 group-[&.scrolled]/landing:ps-6 group-[&.scrolled]/landing:pt-20 motion-safe:transition-all motion-safe:duration-300 group-[&.scrolled]/landing:lg:ps-28"
        >
          <!-- Fake sidebar -->
          <div
            class="ltablet:w-16 ltablet:flex dark:bg-muted-800 absolute left-0 top-0 hidden h-full w-20 flex-col bg-white group-[&.scrolled]/landing:translate-x-0 group-[&:not(.scrolled)]/landing:-translate-x-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:flex"
          >
            <div class="flex h-20 w-full items-center justify-center">
              <TairoLogo class="text-primary-500 h-8 w-8" />
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob bg-primary-500/10 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:house-duotone"
                  class="text-primary-500 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:grid-four-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:users-duotone" class="text-muted-400 h-5 w-5" />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:chat-circle-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="mt-auto flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:gear-six-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  shape="straight"
                  size="sm"
                  src="/img/avatars/24.svg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <!-- Fake navbar -->
          <div
            class="ltablet:ps-24 absolute left-0 top-0 flex h-20 w-full items-center justify-between pe-6 ps-6 group-[&.scrolled]/landing:translate-y-0 group-[&:not(.scrolled)]/landing:-translate-y-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:ps-28"
          >
            <div class="flex h-full items-center gap-4">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="lucide:menu" class="text-muted-400 h-5 w-5" />
              </div>
              <BaseText class="hidden sm:inline-block">My Dashboard</BaseText>
            </div>
            <div class="flex h-full items-center justify-end gap-1">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:bell-duotone" class="text-muted-400 h-5 w-5" />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:circles-four-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:translate-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  shape="straight"
                  size="xs"
                  src="/img/avatars/24.svg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <div
            class="ltablet:grid-cols-3 ltablet:gap-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4"
          >
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-24 group-[&:not(.scrolled)]/landing:ptablet:mt-24 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-24"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="flex flex-col p-6">
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
                  <AddonApexcharts
                    v-bind="gaugePersonal"
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
            <div class="ltablet:gap-6 flex flex-col gap-6 sm:gap-3 lg:gap-4">
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoInboxMessage
                  picture="/img/avatars/10.svg"
                  name="Kendra W."
                  title="Design Project"
                  text="Where are we in terms of design? We need to review the new screens."
                  time="28 minutes"
                  shape="curved"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
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
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-16 group-[&:not(.scrolled)]/landing:ptablet:mt-16 flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-16"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-4">
                <DemoTeamSearchCompact shape="curved" />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-3">
                <DemoVideoCompact shape="curved" />
              </BaseCard>
            </div>
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-10 group-[&:not(.scrolled)]/landing:ptablet:mt-10 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-10"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoProgressCircle
                  image="/img/avatars/6.svg"
                  :title="`${y < 500 ? Math.trunc(y / 5) : 100}% completed!`"
                  text="Congrats, your efforts have been rewarded. Keep up like this!"
                  :value="y < 500 ? Math.trunc(y / 5) : 100"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
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
