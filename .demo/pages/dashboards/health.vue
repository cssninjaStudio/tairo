<script setup lang="ts">
definePageMeta({
  title: 'Health',
})

const areaCondition = reactive(useAreaCondition())
const scatterEnergy = reactive(useScatterEnergy())
const barOxygen = reactive(useBarOxygen())
const areaProgress = reactive(useAreaProgress())
const gaugePersonal = reactive(useGaugePersonal())

function useAreaCondition() {
  const { primary } = useTailwindColors()
  const type = 'area'
  const height = 280

  const options = {
    chart: {
      offsetX: 20,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
    },
    colors: [primary.value],
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  }

  const series = ref([
    {
      name: 'Condition (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}

function useScatterEnergy() {
  const { primary, info, success } = useTailwindColors()
  const height = 280
  const type = 'scatter'

  const options = {
    chart: {
      height: 280,
      type: 'scatter',
      zoom: {
        type: 'xy',
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value],
    dataLabels: {
      enabled: false,
      show: false,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      show: false,
      type: 'datetime',
    },
    yaxis: {
      show: false,
      max: 70,
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'center',
    },
  }

  const series = ref([
    {
      name: 'Tonic',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Tantra',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Vital',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        },
      ),
    },
  ])

  function generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: number; max: number },
  ) {
    let i = 0
    const series = []
    while (i < count) {
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      series.push([baseval, y])
      baseval += 86400000
      i++
    }
    return series
  }

  return {
    type,
    height,
    options,
    series,
  }
}

function useBarOxygen() {
  const { primary } = useTailwindColors()
  const height = 280
  const type = 'bar'

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: asPercent,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: asPercent,
      },
    },
    colors: [primary.value],
  }

  const series = ref([
    {
      name: 'Variation (pt)',
      data: [23, 26, 10, 7, 11, 18, 16],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}

function useAreaProgress() {
  const { primary } = useTailwindColors()
  const type = 'area'
  const height = 280

  const options = {
    chart: {
      offsetX: 20,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    colors: [primary.value],
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  } as const

  const series = ref([
    {
      name: 'Progress (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}

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
  <div class="relative">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Header -->
      <div class="col-span-12">
        <div
          class="flex flex-col sm:flex-row items-center p-4 rounded-2xl bg-primary-800"
        >
          <div class="relative shrink-0 h-[168px] w-[280px]">
            <img
              class="absolute -top-20 -left-6 sm:-left-10 pointer-events-none"
              src="/img/illustrations/dashboards/health/doctor.svg"
              alt="Doctor illustration"
            />
          </div>
          <div class="grow mt-6 sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Today's Summary</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-70">
                <span>
                  Monitor your activity and keep improving your weak points.
                </span>
              </BaseParagraph>
              <div
                class="flex flex-wrap gap-y-6 sm:gap-x-8 text-center sm:text-left mt-6 sm:mt-4 pb-4 sm:pb-0"
              >
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>900 kcal</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Burnt today</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>2300 kcal</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Eaten today</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>2%</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Fat burnt</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>11,424</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Steps walked</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0 ptablet:hidden">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>8.4km</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Distance today</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <BaseIconBox size="md" class="bg-primary-500/10">
              <Icon name="ph:drop-duotone" class="w-5 h-5 text-primary-500" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                114/90
              </span>
              <span class="text-sm text-muted-400">Min/Max</span>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Blood quality</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
                videtur.
              </span>
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <BaseIconBox size="md" class="bg-primary-500/10">
              <Icon
                name="ph:heartbeat-duotone"
                class="w-5 h-5 text-primary-500"
              />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                112
              </span>
              <span class="text-sm text-muted-400">Bpm</span>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Heart rate</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
                videtur.
              </span>
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <BaseIconBox size="md" class="bg-primary-500/10">
              <Icon
                name="ph:drop-half-bottom-duotone"
                class="w-5 h-5 text-primary-500"
              />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                12/14
              </span>
              <span class="text-sm text-muted-400">Units</span>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Blood pressure</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
                videtur.
              </span>
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-3">
            <BaseIconBox size="md" class="bg-primary-500/10">
              <Icon name="ph:gauge-duotone" class="w-5 h-5 text-primary-500" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                60.4
              </span>
              <span class="text-sm text-muted-400">Lbs</span>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Weight</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
                videtur.
              </span>
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-6">
          <!-- Inner column -->
          <div class="col-span-12 ltablet:col-span-9 lg:col-span-9">
            <!-- Chart subgrid -->
            <div class="grid grid-cols-12 gap-6">
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard shape="curved" class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Overall Condition</span>
                    </BaseHeading>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="max-w-[240px] text-muted-400"
                    >
                      <Icon name="ph:question-duotone" class="w-4 h-4" />
                      <span>
                        Your overall condition is very good. Make it even
                        better.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <AddonApexcharts
                    v-bind="areaCondition"
                    class="relative -left-5"
                  />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard shape="curved" class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Energy Level</span>
                    </BaseHeading>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="max-w-[240px] text-muted-400"
                    >
                      <Icon name="ph:question-duotone" class="w-4 h-4" />
                      <span>
                        Your energy seems a bit unstable. You can improve it.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <AddonApexcharts v-bind="scatterEnergy" />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard shape="curved" class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Oxygenation</span>
                    </BaseHeading>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="max-w-[240px] text-muted-400"
                    >
                      <Icon name="ph:question-duotone" class="w-4 h-4" />
                      <span>
                        Your oxygen seems a bit unstable. You can improve it.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <AddonApexcharts
                    v-bind="barOxygen"
                    class="relative -left-5"
                  />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard shape="curved" class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Overall Progress</span>
                    </BaseHeading>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="max-w-[240px] text-muted-400"
                    >
                      <Icon name="ph:question-duotone" class="w-4 h-4" />
                      <span>
                        Your overall progress is very good. Make it even better.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <AddonApexcharts
                    v-bind="areaProgress"
                    class="relative -left-5"
                  />
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Inner column -->
          <div class="col-span-12 ltablet:col-span-3 lg:col-span-3">
            <div class="flex flex-col gap-6">
              <!-- Widget -->
              <BaseCard class="p-6" shape="curved">
                <div class="w-full flex items-center justify-between">
                  <DemoSearchCompact shape="curved" />
                </div>
              </BaseCard>
              <!-- Widget -->
              <BaseCard class="p-6" shape="curved">
                <DemoDatepicker expanded />
              </BaseCard>
              <!-- Widget -->
              <BaseCard class="h-full flex flex-col p-6">
                <div class="flex items-center justify-between mb-6">
                  <BaseHeading
                    as="h3"
                    size="md"
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
                <div class="text-center mt-auto">
                  <BaseParagraph size="sm">
                    <span class="text-muted-400">
                      Your score has been calculated based on the latest metrics
                    </span>
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
