<script setup lang="ts">
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Analytics',
  preview: {
    title: 'Analytics dashboard',
    description: 'For heavy stats and kpis',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-analytics.png',
    srcDark: '/img/screens/dashboards-analytics-dark.png',
    order: 4,
  },
})

const lineRevenue = reactive(useLineRevenue())
const radialGoal = reactive(useRadialGoal())
const radialGrowth = reactive(useRadialGrowth())
const barSalesProfit = reactive(useBarSalesProfit())

function useLineRevenue() {
  const { primary } = useTailwindColors()
  const type = 'line'
  const height = 250

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return '$' + val
        },
      },
    },
  }

  const series = ref([
    {
      name: 'Revenue',
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialGoal() {
  const { primary, success } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    chart: {
      offsetY: -10,
    },
    colors: [primary.value, success.value],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        inverseOrder: true,
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
            offsetY: -10,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontSize: '16px',
            offsetY: -5,
          },
          total: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
          },
        },
        hollow: {
          margin: 15,
          size: '75%',
        },
        track: {
          strokeWidth: '100%',
        },
      },
    },

    stroke: {
      lineCap: 'round',
    },
    labels: ['Efficiency', 'Productivity'],
  }

  const series = ref([57, 86])

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialGrowth() {
  const { success } = useTailwindColors()
  const height = 180
  const type = 'radialBar'

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [success.value],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%',
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '0.7rem',
            fontFamily: 'Roboto',
            fontWeight: 400,
            offsetY: -10,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontSize: '16px',
            fontFamily: 'Roboto',
            offsetY: -5,
          },
        },
      },
    },
    labels: ['Growth'],
  }

  const series = ref([65])

  return {
    type,
    height,
    options,
    series,
  }
}

function useBarSalesProfit() {
  const { primary, info, success } = useTailwindColors()
  const type = 'bar'
  const height = 250

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, info.value, success.value],
    legend: {
      position: 'top',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      labels: {
        formatter: function (val: string) {
          return val + 70
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return val + 70
        },
      },
    },
  }

  const series = ref([
    {
      name: 'Net Profit',
      data: [-26, -15, -13, -14, -9, -12, -7, -10, -4],
    },
    {
      name: 'Revenue',
      data: [6, 15, 31, 28, 17, 35, 21, 44, 24],
    },
    {
      name: 'Free Cash Flow',
      data: [-35, -29, -34, -44, -25, -22, -18, -17, -29],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <!-- Grid column -->
    <div class="ltablet:col-span-9 col-span-12 lg:col-span-9">
      <!-- Inner grid -->
      <div class="grid grid-cols-12 gap-4">
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="mb-1 flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-500 dark:text-muted-400"
              >
                <span>Transactions</span>
              </BaseHeading>
              <BaseIconBox
                size="xs"
                class="bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2"
                shape="full"
              >
                <Icon name="ph:sketch-logo-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>7,549</span>
              </BaseHeading>
            </div>
            <div
              class="text-success-500 flex items-center gap-1 font-sans text-sm"
            >
              <span>+7.8%</span>
              <Icon name="lucide:trending-up" class="h-5 w-5" />
              <span class="text-muted-400 text-xs">since last month</span>
            </div>
          </BaseCard>
        </div>
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="mb-1 flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-500 dark:text-muted-400"
              >
                <span>Subscriptions</span>
              </BaseHeading>
              <BaseIconBox
                size="xs"
                class="bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400"
                shape="full"
              >
                <Icon name="ph:rocket-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>1,611</span>
              </BaseHeading>
            </div>
            <div
              class="text-danger-500 flex items-center gap-1 font-sans text-sm"
            >
              <span>-2.7%</span>
              <Icon name="lucide:trending-down" class="h-5 w-5" />
              <span class="text-muted-400 text-xs">going down</span>
            </div>
          </BaseCard>
        </div>
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="mb-1 flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-500 dark:text-muted-400"
              >
                <span>Referals</span>
              </BaseHeading>
              <BaseIconBox
                size="xs"
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                shape="full"
              >
                <Icon name="ph:megaphone-simple-duotone" class="h-5 w-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>862</span>
              </BaseHeading>
            </div>
            <div
              class="text-success-500 flex items-center gap-1 font-sans text-sm"
            >
              <span>+4.5%</span>
              <Icon name="lucide:trending-up" class="h-5 w-5" />
              <span class="text-muted-400 text-xs">going up</span>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-8">
          <BaseCard class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Revenue</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                Details
              </NuxtLink>
            </div>
            <div class="flex gap-8">
              <div>
                <span class="text-muted-400 font-sans text-xs">This month</span>
                <p class="text-primary-500 font-sans text-lg font-medium">
                  $75,689
                </p>
              </div>
              <div>
                <span class="text-muted-400 font-sans text-xs">Last month</span>
                <p
                  class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
                >
                  $59,724
                </p>
              </div>
            </div>
            <AddonApexcharts v-bind="lineRevenue" />
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="flex h-full flex-col p-6">
            <div class="mb-10 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Goal Overview</span>
              </BaseHeading>
            </div>
            <div class="mb-6">
              <AddonApexcharts v-bind="radialGoal" />
            </div>
            <div class="mt-auto">
              <div
                class="border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center"
              >
                <div
                  class="border-muted-200 dark:border-muted-700 flex-1 border-r px-2"
                >
                  <span class="text-muted-400 font-sans text-xs">
                    Completed
                  </span>
                  <p
                    class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
                  >
                    1431
                  </p>
                </div>
                <div class="flex-1 px-2">
                  <span class="text-muted-400 font-sans text-xs">
                    In Progress
                  </span>
                  <p
                    class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
                  >
                    219
                  </p>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="flex h-full flex-col p-6">
            <div class="mb-5 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Sales Growth</span>
              </BaseHeading>
            </div>
            <div class="mb-6">
              <AddonApexcharts v-bind="radialGrowth" />
            </div>
            <div class="mt-auto">
              <div class="flex justify-center gap-2">
                <Icon name="logos:shopify" class="h-8 w-8" />
                <div>
                  <BaseHeading
                    as="h5"
                    size="sm"
                    weight="light"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Shopify</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">Best selling channel</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-8">
          <BaseCard class="relative p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Profit</span>
              </BaseHeading>
            </div>
            <AddonApexcharts v-bind="barSalesProfit" />
          </BaseCard>
        </div>
      </div>
    </div>
    <!-- Grid column -->
    <div class="ltablet:col-span-3 col-span-12 lg:col-span-3">
      <!--Inner column -->
      <div
        class="ptablet:grid-cols-2 ltablet:flex ltablet:flex-col grid gap-4 lg:flex lg:flex-col"
      >
        <!-- Vcard -->
        <BaseCard class="p-6">
          <DemoVcardRight />
        </BaseCard>
        <!-- Calendar -->
        <BaseCard class="p-2">
          <Calendar
            :attributes="[
              {
                key: 'today',
                dot: true,
                dates: new Date(),
              },
            ]"
            title-position="left"
            expanded
            borderless
            transparent
            trim-weeks
            class="max-w-full rounded-md"
          />
        </BaseCard>
        <!-- Followers -->
        <BaseCard class="p-6">
          <DemoFollowersCompact />
        </BaseCard>
        <!-- Notifications -->
        <BaseCard class="p-6">
          <DemoNotificationsCompact />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
