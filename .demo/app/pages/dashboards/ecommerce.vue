<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Ecommerce',
  preview: {
    title: 'Ecommerce dashboard',
    description: 'For sales and online stores',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-ecommerce.png',
    srcDark: '/img/screens/dashboards-ecommerce-dark.png',
    order: 21,
  },
})

// Datepicker
const date = ref(new Date())

const sparkLineOne = reactive(useSparkLineOne())
const sparkLineTwo = reactive(useSparkLineTwo())
const sparkLineThree = reactive(useSparkLineThree())
const sparkLineFour = reactive(useSparkLineFour())
const areaCustomers = reactive(useAreaCustomers())
const radialSalesRevenue = reactive(useRadialSalesRevenue())
const radialSmallOne = reactive(useRadialSmallOne())
const radialSmallTwo = reactive(useRadialSmallTwo())
const radialSmallThree = reactive(useRadialSmallThree())
const gaugePersonal = reactive(useGaugePersonal())
const barOrders = reactive(useBarOrders())

function useSparkLineOne() {
  const series = shallowRef([
    {
      name: 'Sales',
      data: [2565, 6126, 4271, 5249, 2245, 4424, 1752, 3996, 976, 2157],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline1',
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      grid: {
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2],
      },
      markers: {
        size: 0,
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
    },
  })
}

function useSparkLineTwo() {
  const series = shallowRef([
    {
      name: 'Income',
      data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline2',
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      grid: {
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2],
      },
      markers: {
        size: 0,
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
        y: {
          formatter: value => `${formatPrice(value)}k`,
        },
      },
      colors: ['var(--color-success-500)'],
    },
  })
}

function useSparkLineThree() {
  const series = shallowRef([
    {
      name: 'New Orders',
      data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline3',
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      grid: {
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2],
      },
      markers: {
        size: 0,
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
      },
      colors: ['var(--color-info-500)'],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
    },
  })
}

function useSparkLineFour() {
  const series = shallowRef([
    {
      name: 'Abandonned',
      data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline4',
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      grid: {
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2],
      },
      markers: {
        size: 0,
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
      },
      colors: ['var(--color-destructive-500)'],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
    },
  })
}

function useAreaCustomers() {
  const series = shallowRef([
    {
      name: 'Returning',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Newcomers',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Abandonned',
      data: [78, 53, 36, 10, 14, 5, 2],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-500)', 'var(--color-primary-400)'],
      title: {
        // show: false,
        text: undefined,
        align: 'left',
      },
      legend: {
        show: false,
        position: 'top',
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-09-19T00:00:00.000Z',
          '2020-09-20T01:30:00.000Z',
          '2020-09-21T02:30:00.000Z',
          '2020-09-22T03:30:00.000Z',
          '2020-09-23T04:30:00.000Z',
          '2020-09-24T05:30:00.000Z',
          '2020-09-25T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  })
}

function useRadialSalesRevenue() {
  const series = shallowRef([65])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 155,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
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
              show: false,
              fontSize: '12px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              offsetY: 5,
            },
            value: {
              show: true,
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              offsetY: 5,
            },
          },
        },
      },
      labels: ['Progress'],
    },
  })
}

function useRadialSmallOne() {
  const series = shallowRef([31])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 75,
    series,
    options: {
      chart: {
        offsetY: -10,
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: [''],
    },
  })
}

function useRadialSmallTwo() {
  const series = shallowRef([53])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 75,
    series,
    options: {
      chart: {
        offsetY: -10,
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-success-500)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: [''],
    },
  })
}

function useRadialSmallThree() {
  const series = shallowRef([84])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 75,
    series,
    options: {
      chart: {
        offsetY: -10,
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-destructive-500)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: [''],
    },
  })
}

function useGaugePersonal() {
  const { primary } = useTailwindColors()
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
      labels: ['Average Results'],
    },
  })
}

function useBarOrders() {
  const series = shallowRef<any[]>([])

  // delay the data loading
  let timeout: any
  let timeout2: any

  onMounted(() => {
    timeout = setTimeout(() => {
      series.value.push({
        name: 'Orders',
        data: [
          {
            x: 'Jan',
            y: 322,
          },
          {
            x: 'Feb',
            y: 459,
          },
          {
            x: 'Mar',
            y: 212,
          },
          {
            x: 'Apr',
            y: 345,
          },
          {
            x: 'May',
            y: 111,
          },
          {
            x: 'Jun',
            y: 189,
          },
          {
            x: 'Jul',
            y: 498,
          },
          {
            x: 'Aug',
            y: 612,
          },
          {
            x: 'Sep',
            y: 451,
          },
          {
            x: 'Oct',
            y: 248,
          },
          {
            x: 'Nov',
            y: 306,
          },
          {
            x: 'Dec',
            y: 366,
          },
        ],
      })
    }, 1500)

    timeout2 = setTimeout(() => {
      series.value.push({
        name: 'Abandonned',
        data: [
          {
            x: 'Jan',
            y: 25,
          },
          {
            x: 'Feb',
            y: 49,
          },
          {
            x: 'Mar',
            y: 36,
          },
          {
            x: 'Apr',
            y: 84,
          },
          {
            x: 'May',
            y: 64,
          },
          {
            x: 'Jun',
            y: 131,
          },
          {
            x: 'Jul',
            y: 48,
          },
          {
            x: 'Aug',
            y: 144,
          },
          {
            x: 'Sep',
            y: 96,
          },
          {
            x: 'Oct',
            y: 11,
          },
          {
            x: 'Nov',
            y: 31,
          },
          {
            x: 'Dec',
            y: 8,
          },
        ],
      })
    }, 2500)
  })
  onBeforeUnmount(() => {
    clearTimeout(timeout)
    clearTimeout(timeout2)
  })

  return defineApexchartsProps({
    type: 'bar',
    height: 210,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-500)'],
      dataLabels: {
        enabled: false,
      },
      noData: {
        text: 'Loading...',
      },
      xaxis: {
        type: 'category',
        tickPlacement: 'on',
        labels: {
          rotate: -45,
          rotateAlways: true,
        },
      },
    },
  })
}
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 overflow-hidden">
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/10.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>Welcome back, Kendra</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-600 dark:text-muted-400">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButton rounded="md">
          <span>View Reports</span>
        </BaseButton>
        <BaseButton rounded="md" variant="primary">
          <span>Manage Store</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Tile -->
      <div class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3">
        <BaseCard rounded="md" class="p-4">
          <div class="flex items-center justify-between">
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-600 dark:text-muted-400"
              >
                <span>Sales</span>
              </BaseHeading>
              <BaseText
                size="xl"
                weight="semibold"
                class="text-muted-900 dark:text-muted-100"
              >
                641.4k
              </BaseText>
            </div>
            <Icon
              name="solar:cart-large-2-bold-duotone"
              class="text-primary-500 size-8"
            />
          </div>
          <div class="pt-4">
            <AddonApexcharts v-bind="sparkLineOne" />
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3">
        <BaseCard rounded="md" class="p-4">
          <div class="flex items-center justify-between">
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-600 dark:text-muted-400"
              >
                <span>Income</span>
              </BaseHeading>
              <BaseText
                size="xl"
                weight="semibold"
                class="text-muted-900 dark:text-muted-100"
              >
                $389.9k
              </BaseText>
            </div>
            <Icon
              name="solar:banknote-bold-duotone"
              class="text-success-500 size-8"
            />
          </div>
          <div class="pt-4">
            <AddonApexcharts v-bind="sparkLineTwo" />
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3">
        <BaseCard rounded="md" class="p-4">
          <div class="flex items-center justify-between">
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-600 dark:text-muted-400"
              >
                <span>Orders</span>
              </BaseHeading>
              <BaseText
                size="xl"
                weight="semibold"
                class="text-muted-900 dark:text-muted-100"
              >
                981
              </BaseText>
            </div>
            <Icon
              name="solar:box-bold-duotone"
              class="text-info-500 size-8"
            />
          </div>
          <div class="pt-4">
            <AddonApexcharts v-bind="sparkLineThree" />
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3">
        <BaseCard rounded="md" class="p-4">
          <div class="flex items-center justify-between">
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-600 dark:text-muted-400"
              >
                <span>Abandonned</span>
              </BaseHeading>
              <BaseText
                size="xl"
                weight="semibold"
                class="text-muted-900 dark:text-muted-100"
              >
                43
              </BaseText>
            </div>
            <Icon
              name="solar:cart-cross-bold-duotone"
              class="text-destructive-500 size-8"
            />
          </div>
          <div class="pt-4">
            <AddonApexcharts v-bind="sparkLineFour" />
          </div>
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative col-span-12 xl:landscape:col-span-6 2xl:landscape:col-span-7">
        <BaseCard rounded="md" class="p-4 md:p-6 flex flex-col h-full">
          <div class="mb-2 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Revenue Overview</span>
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
            <div>
              <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">Average</span>
              <p
                class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
              >
                $66,561
              </p>
            </div>
          </div>
          <div class="mt-auto">
            <AddonApexcharts v-bind="areaCustomers" />
          </div>
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 xl:landscape:col-span-6 2xl:landscape:col-span-5">
        <div class="flex h-full flex-col gap-4">
          <!-- Chart -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-center">
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-4 dark:text-white"
                >
                  <span>Sales Revenue</span>
                </BaseHeading>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  <span>$8,641.26</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-600 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bonum integritas corporis.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex-1">
                <AddonApexcharts v-bind="radialSalesRevenue" />
              </div>
            </div>
          </BaseCard>
          <!-- Charts -->
          <BaseCard rounded="md" class="flex-1 p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Additional Stats</span>
              </BaseHeading>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col gap-2 text-center w-1/3">
                <AddonApexcharts v-bind="radialSmallOne" />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>278</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">New Deals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-col gap-2 text-center w-1/3">
                <AddonApexcharts v-bind="radialSmallTwo" />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>1,519</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">Proposals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-col gap-2 text-center w-1/3">
                <AddonApexcharts v-bind="radialSmallThree" />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>3,214</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">Closed deals</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <div
        class="lg:landscape:col-span-4 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <BaseCard rounded="md" class="flex flex-col p-4 md:p-6">
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
              <span class="text-muted-500 dark:text-muted-400">
                Your score has been calculated based on the latest metrics
              </span>
            </BaseParagraph>
          </div>
        </BaseCard>
      </div>
      <!-- Column -->
      <div
        class="lg:landscape:col-span-4 relative col-span-12 md:col-span-6 2xl:landscape:col-span-6"
      >
        <BaseCard rounded="md" class="relative p-4 md:p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Orders Summary</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="barOrders" />
        </BaseCard>
      </div>
      <!-- Column -->
      <div
        class="lg:landscape:col-span-4 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <!-- Calendar -->
        <BaseCard rounded="md" class="p-2">
          <AddonDatepicker v-model="date" locale="en" label="Start date" />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
