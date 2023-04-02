<script setup lang="ts">
definePageMeta({
  title: 'Cryptocurrency',
})

const activePeriod = ref('week')

const areaBtcPrice = reactive(useAreaBtcPrice())
const radialEvolution = reactive(useRadialEvolution())
const radialPopularity = reactive(useRadialPopularity())

function useAreaBtcPrice() {
  const { primary, info, success } = useTailwindColors()

  const type = 'area'
  const height = 350

  const options = shallowRef({
    chart: {
      foreColor: '#999',
      stacked: true,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
    },
    colors: [success.value, primary.value, info.value],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    title: {
      text: '',
      align: 'left',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      strokeColor: '#fff',
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: -5,
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      show: true,
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
      y: {
        formatter: function (val: number) {
          return val + '%'
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    fill: {
      type: 'solid',
      fillOpacity: 0.7,
    },
  })

  const series = ref([
    {
      name: 'Expected',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Real',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ])

  function generateDayWiseTimeSeries(s: number, count: number) {
    const values = [
      [
        0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7,
        0.2, 0.7, 0.5,
      ],
      [
        0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5,
        0.2, 0.6, 2,
      ],
    ]
    let i = 0
    const series = []
    let x = new Date('11 Nov 2022').getTime()
    while (i < count) {
      series.push([x, values[s][i]])
      x += 86400000
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

function useRadialEvolution() {
  const { primary, info, success } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const series = ref([54])

  const options = {
    colors: [primary.value, success.value, info.value],
    title: {
      text: '',
      align: 'left',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 15,
            fontSize: '13px',
            fontFamily: 'Roboto, sans-serif',
            color: 'var(--color-muted-400)',
            formatter: function () {
              return ['(30 days)']
            },
          },
          value: {
            color: 'var(--color-muted-400)',
            offsetY: -20,
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
          },
        },
      },
    },
    labels: ['Median Ratio'],
  }

  return {
    type,
    height,
    series,
    options,
  }
}

function useRadialPopularity() {
  const { primary, success } = useTailwindColors()
  const type = 'radialBar'
  const height = 225

  const options = {
    title: {
      text: '',
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '13px',
            fontWeight: '600',
            color: 'var(--color-muted-400)',
            offsetY: 80,
          },
          value: {
            offsetY: 40,
            fontSize: '18px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: undefined,
            formatter: function (val: number) {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['(30 days)'],
  }

  const series = ref([67])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 mb-6"
    >
      <div>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Latest Bitcoin (BTC) Price Chart
        </BaseParagraph>
        <BaseHeading
          size="3xl"
          weight="bold"
          class="text-muted-800 dark:text-white"
        >
          <span
            class="after:content-['+3.4%'] after:relative after:-top-3 after:-end-2 after:text-sm after:text-success-500"
          >
            {{ formatPrice(10584.3) }}
          </span>
        </BaseHeading>
      </div>
      <div class="flex sm:justify-end gap-2">
        <BaseButtonAction
          :color="activePeriod === 'hour' ? 'primary' : 'default'"
          @click="activePeriod = 'hour'"
        >
          Hour
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'day' ? 'primary' : 'default'"
          @click="activePeriod = 'day'"
        >
          Day
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'week' ? 'primary' : 'default'"
          @click="activePeriod = 'week'"
        >
          Week
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'month' ? 'primary' : 'default'"
          @click="activePeriod = 'month'"
        >
          Month
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'year' ? 'primary' : 'default'"
          @click="activePeriod = 'year'"
        >
          Year
        </BaseButtonAction>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8 gap-4">
        <div class="flex flex-col gap-4">
          <!-- Tile grid -->
          <div class="grid sm:grid-cols-3 gap-4">
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Market Cap
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ formatPrice(129992260090) }}</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Volume 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ formatPrice(453178) }}K</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Low/high 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  <span>
                    {{ formatPrice(10212) }} - {{ formatPrice(10584) }}
                  </span>
                </BaseHeading>
              </BaseCard>
            </div>
          </div>
          <!-- Chart -->
          <BaseCard class="relative p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>BTC Price Chart</span>
              </BaseHeading>
            </div>

            <AddonApexcharts v-bind="areaBtcPrice" />
          </BaseCard>
          <!-- Subgrid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-6">
                <div class="flex items-center justify-between mb-6">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>BTC Evolution</span>
                  </BaseHeading>
                  <NuxtLink
                    to="#"
                    class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                  >
                    Buy BTC
                  </NuxtLink>
                </div>
                <AddonApexcharts v-bind="radialEvolution" />
              </BaseCard>
            </div>
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-6">
                <div class="flex items-center justify-between mb-6">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>BTC Popularity</span>
                  </BaseHeading>
                  <NuxtLink
                    to="#"
                    class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                  >
                    Buy BTC
                  </NuxtLink>
                </div>
                <AddonApexcharts v-bind="radialPopularity" />
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="flex flex-col gap-4">
          <!-- Currency -->
          <div class="relative">
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-6">
                <Icon
                  name="cryptocurrency:btc"
                  class="h-9 w-9 text-orange-400"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="snug"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Bitcoin</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    weight="semibold"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    BTC
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseButtonAction
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Currencies
                  </BaseButtonAction>
                </div>
              </div>
              <div>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Bitcoin is a cryptocurrency invented in 2008 by an unknown
                  person or group of people using the name Satoshi Nakamoto. It
                  was launched anonymously, with no central bank or single
                  administrator, and is peer-to-peer. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-2 mt-6">
                <BaseButton color="default" class="w-full">
                  <span>Compare</span>
                </BaseButton>
                <BaseButton color="primary" class="w-full">
                  <span>Buy BTC</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="p-6">
              <!-- Title -->
              <div class="flex items-center justify-between mb-8">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>My Team</span>
                </BaseHeading>
                <NuxtLink
                  to="#"
                  class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >
                  View All
                </NuxtLink>
              </div>
              <DemoTeamListCompact actions />
            </BaseCard>
          </div>
          <!--Grid item-->
          <div class="relative">
            <BaseCard class="p-6">
              <!-- Title -->
              <div class="flex items-center justify-between mb-8">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Popular Coins</span>
                </BaseHeading>
                <NuxtLink
                  to="#"
                  class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >
                  View All
                </NuxtLink>
              </div>
              <DemoPopularCryptos />
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
