<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

import 'v-calendar/dist/style.css'

definePageMeta({
  title: 'Health',
  preview: {
    title: 'Health dashboard',
    description: 'For health and fitness',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-health.png',
    srcDark: '/img/screens/dashboards-health-dark.png',
    order: 17,
  },
})

// Datepicker
const date = ref(new Date())

const areaCondition = reactive(useAreaCondition())
const scatterEnergy = reactive(useScatterEnergy())
const barOxygen = reactive(useBarOxygen())
const areaProgress = reactive(useAreaProgress())
const gaugePersonal = reactive(useGaugePersonal())

function useAreaCondition() {
  const series = shallowRef([
    {
      name: 'Condition (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
    series,
    options: {
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
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      colors: ['var(--color-chart-base)'],
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  })
}

function useScatterEnergy() {
  const series = shallowRef([
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
    yrange: { min: number, max: number },
  ) {
    let i = 0
    const series = []
    while (i < count) {
      const y
        = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      series.push([baseval, y])
      baseval += 86400000
      i++
    }
    return series
  }

  return defineApexchartsProps({
    type: 'scatter',
    height: 280,
    series,
    options: {
      chart: {
        zoom: {
          type: 'xy',
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-200)', 'var(--color-primary-400)'],
      dataLabels: {
        enabled: false,
        // show: false,
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
        // show: false,
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
    },
  })
}

function useBarOxygen() {
  const series = shallowRef([
    {
      name: 'Variation (pt)',
      data: [23, 26, 10, 7, 11, 18, 16],
    },
  ])

  return defineApexchartsProps({
    type: 'bar',
    height: 280,
    series,
    options: {
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
        formatter: value => `${value} %`,
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
          formatter: value => `${value} %`,
        },
      },
      colors: ['var(--color-chart-base)'],
    },
  })
}

function useAreaProgress() {
  const series = shallowRef([
    {
      name: 'Progress (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
    series,
    options: {
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
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      colors: ['var(--color-chart-base)'],
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  })
}

function useGaugePersonal() {
  const series = shallowRef([76])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 220,
    series,
    options: {
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
      colors: ['var(--color-chart-base)'],
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
      labels: ['Average Results'],
    },
  })
}
</script>

<template>
  <div class="relative px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Header -->
      <div class="col-span-12">
        <div
          class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
        >
          <div class="relative h-[168px] w-[280px] shrink-0">
            <img
              class="pointer-events-none absolute -start-6 -top-20 sm:-start-10"
              src="/img/illustrations/dashboards/health/doctor.svg"
              alt="Doctor illustration"
            >
          </div>
          <div class="mt-6 grow sm:mt-0">
            <div class="text-center sm:text-start">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Today's Summary</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-70">
                <span>
                  Monitor your activity and keep improving your weak points.
                </span>
              </BaseParagraph>
              <div
                class="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-start"
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
                <div class="min-w-[33.3%] sm:min-w-0">
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
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:waterdrop-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                114/90
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Min/Max
              </BaseText>
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
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:heart-pulse-2-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                112
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Bpm
              </BaseText>
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
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:hearts-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                12/14
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Units
              </BaseText>
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
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:dumbbell-large-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                60.4
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Lbs
              </BaseText>
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
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Inner column -->
          <div class="xl:col-span-8 col-span-12 2xl:col-span-9">
            <!-- Chart subgrid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Overall Condition</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
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
                    class="relative -start-5"
                  />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Energy Level</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
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
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Oxygenation</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
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
                    class="relative -start-5"
                  />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Overall Progress</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
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
                    class="relative -start-5"
                  />
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Inner column -->
          <div class="xl:col-span-4 col-span-12 2xl:col-span-3">
            <div class="flex flex-col gap-4">
              <!-- Widget -->
              <BaseCard class="p-4 md:p-6" rounded="lg">
                <div class="flex w-full items-center justify-between">
                  <DemoSearchCompact rounded="lg" />
                </div>
              </BaseCard>
              <!-- Widget -->
              <BaseCard rounded="lg" class="p-2">
                <AddonDatepicker v-model="date" locale="en" label="Start date" />
              </BaseCard>
              <!-- Widget -->
              <BaseCard rounded="lg" class="flex h-full flex-col p-4 md:p-6">
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Personal Score</span>
                  </BaseHeading>
                </div>
                <div class="py-16">
                  <AddonApexcharts v-bind="gaugePersonal" class="-mt-14" />
                </div>
                <div class="mt-auto text-center">
                  <BaseParagraph size="sm">
                    <span class="text-muted-600 dark:text-muted-400">
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
