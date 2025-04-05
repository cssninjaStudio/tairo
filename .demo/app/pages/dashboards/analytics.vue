<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

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
  const series = shallowRef([
    {
      name: 'Revenue',
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 250,
    series,
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        fontFamily: 'var(--font-sans)',
      },
      colors: ['var(--color-chart-base)'],
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
          formatter: value => formatPrice(value),
        },
      },
    },
  })
}

function useRadialGoal() {
  const series = shallowRef([57, 86])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 220,
    series,
    options: {
      chart: {
        offsetY: -10,
        fontFamily: 'var(--font-sans)',
        animations: {
          enabled: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-500)'],
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
    },
  })
}

function useRadialGrowth() {
  const series = shallowRef([65])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 180,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        fontFamily: 'var(--font-sans)',
      },
      colors: ['var(--color-chart-base)'],
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
              fontWeight: 400,
              offsetY: -10,
            },
            value: {
              show: true,
              fontWeight: 600,
              fontSize: '16px',
              offsetY: -5,
            },
          },
        },
      },
      labels: ['Growth'],
    },
  })
}

function useBarSalesProfit() {
  const series = shallowRef([
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

  return defineApexchartsProps({
    type: 'bar',
    height: 250,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-200)', 'var(--color-primary-800)'],
      legend: {
        position: 'top',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          // endingShape: 'rounded',
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
      fill: {
        opacity: 1,
      },
    },
  })
}

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-4">
      <!-- Grid column -->
      <div class="col-span-12 2xl:landscape:col-span-9">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
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
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:chart-square-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>7,549</span>
                </BaseHeading>
              </div>
              <div
                class="text-success-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>+7.8%</span>
                <Icon name="lucide:trending-up" class="size-5" />
                <span class="text-muted-400 text-xs">since last month</span>
              </div>
            </BaseCard>
          </div>
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
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
                  class="bg-primary-100 text-primary-500 dark:border-2 dark:border-primary-500 dark:bg-primary-500/20 dark:text-primary-400"
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:gamepad-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>1,611</span>
                </BaseHeading>
              </div>
              <div
                class="text-destructive-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>-2.7%</span>
                <Icon name="lucide:trending-down" class="size-5" />
                <span class="text-muted-400 text-xs">going down</span>
              </div>
            </BaseCard>
          </div>
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
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
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:home-smile-angle-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>862</span>
                </BaseHeading>
              </div>
              <div
                class="text-success-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>+4.5%</span>
                <Icon name="lucide:trending-up" class="size-5" />
                <span class="text-muted-400 text-xs">going up</span>
              </div>
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-8">
            <BaseCard rounded="md" class="p-6">
              <div class="mb-2 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Revenue</span>
                </BaseHeading>
                <BaseButton
                  size="sm"
                  rounded="md"
                >
                  Details
                </BaseButton>
              </div>
              <div class="flex gap-8">
                <div>
                  <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">This month</span>
                  <p class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium">
                    $75,689
                  </p>
                </div>
                <div>
                  <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">Last month</span>
                  <p
                    class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
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
            <BaseCard rounded="md" class="flex h-full flex-col p-6">
              <div class="mb-10 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
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
                      class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
                    >
                      1431
                    </p>
                  </div>
                  <div class="flex-1 px-2">
                    <span class="text-muted-400 font-sans text-xs">
                      In Progress
                    </span>
                    <p
                      class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
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
            <BaseCard rounded="md" class="flex h-full flex-col p-6">
              <div class="mb-5 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Sales Growth</span>
                </BaseHeading>
              </div>
              <div class="mb-6">
                <AddonApexcharts v-bind="radialGrowth" />
              </div>
              <div class="mt-auto">
                <div class="flex justify-center gap-2">
                  <Icon name="logos:shopify" class="size-8" />
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Shopify</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-600 dark:text-muted-400">Best selling channel</span>
                    </BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-8">
            <BaseCard rounded="md" class="relative p-6">
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
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
      <div class="col-span-12 2xl:landscape:col-span-3">
        <!-- Inner column -->
        <div
          class="lg:portrait:grid-cols-2 lg:landscape:grid-cols-2 grid gap-4 2xl:landscape:flex 2xl:landscape:flex-col"
        >
          <!-- Vcard -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoVcardRight />
          </BaseCard>
          <!-- Calendar -->
          <BaseCard rounded="md" class="p-4">
            <AddonDatepicker v-model="date" locale="en" label="Start date" />
          </BaseCard>
          <!-- Followers -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoFollowersCompact />
          </BaseCard>
          <!-- Notifications -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoNotificationsCompact />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
