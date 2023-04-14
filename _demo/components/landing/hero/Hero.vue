<script setup lang="ts">
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
    class="dark:to-muted-900 border-muted-100 dark:border-muted-800/50 relative min-h-screen overflow-hidden border-b bg-gradient-to-b from-transparent to-white"
  >
    <div class="gridlines absolute inset-x-0 z-10 -mt-8 py-20"></div>
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        aria-hidden="true"
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl"
      >
        <div
          class="from-primary-200 h-40 bg-gradient-to-br to-purple-400 blur-3xl dark:from-blue-700"
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
          beautiful and responsive Nuxt 3 dashboards in no time, with the power
          of Shuriken UI and Tailwind CSS.
        </BaseParagraph>
        <div class="flex items-center justify-center">
          <BaseButton
            shape="curved"
            color="primary"
            to="/"
            shadow="hover"
            class="!h-12 w-44"
          >
            Buy Tairo Now
          </BaseButton>
        </div>
      </div>
      <!-- Components -->
      <div class="relative z-30 mt-12">
        <div
          class="ltablet:grid-cols-4 ltablet:gap-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          <!-- Col -->
          <div class="ltablet:mt-24 ptablet:mt-24 flex flex-col gap-6 lg:mt-24">
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
              <div class="py-16">
                <AddonApexcharts v-bind="gaugePersonal" class="-mt-14" />
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
          <div class="flex flex-col gap-6">
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
            class="ltablet:flex ltablet:mt-16 ptablet:mt-16 flex flex-col gap-6 sm:hidden lg:mt-16 lg:flex"
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
          <div class="ltablet:mt-10 ptablet:mt-10 flex flex-col gap-6 lg:mt-10">
            <!-- Widget -->
            <BaseCard shape="curved" elevated class="p-6">
              <DemoProgressCircle
                image="/img/avatars/6.svg"
                :title="`${78}% completed!`"
                text="Congrats, your efforts have been rewarded. Keep up like this!"
                :value="78"
              />
            </BaseCard>
            <!-- Widget -->
            <BaseCard shape="curved" elevated class="p-6">
              <DemoFollowersCompact />
            </BaseCard>
          </div>
        </div>
      </div>
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
