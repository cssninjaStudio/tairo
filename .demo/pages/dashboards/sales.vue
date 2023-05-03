<script setup lang="ts">
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Sales',
  preview: {
    title: 'Sales dashboard',
    description: 'For sales and marketing',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-sales.png',
    srcDark: '/img/screens/dashboards-sales-dark.png',
    order: 6,
  },
})

const sparkSalesOne = reactive(useSparkSalesOne())
const sparkSalesTwo = reactive(useSparkSalesTwo())
const sparkSalesThree = reactive(useSparkSalesThree())
const sparkSalesFour = reactive(useSparkSalesFour())
const areaCustomers = reactive(useAreaCustomers())
const radialSalesRevenue = reactive(useRadialSalesRevenue())
const radialSmallOne = reactive(useRadialSmallOne())
const radialSmallTwo = reactive(useRadialSmallTwo())
const radialSmallThree = reactive(useRadialSmallThree())
const gaugePersonal = reactive(useGaugePersonal())
const barOrders = reactive(useBarOrders())

function useSparkSalesOne() {
  const { primary, title, subtitle } = useTailwindColors()
  const type = 'area'
  const height = 130

  const options = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary.value],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Total Sales',
      offsetX: 5,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: subtitle.value,
        cssClass: 'apexcharts-spark-title',
      },
    },
    subtitle: {
      text: '9,374',
      offsetX: 5,
      offsetY: 15,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        fontWeight: '500',
        color: title.value,
        cssClass: 'apexcharts-spark-subtitle',
      },
    },
  }

  const series = ref([
    {
      name: 'Total Sales',
      data: randomizeArray([
        472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415,
        358, 271, 932, 534, 615, 278, 546, 435, 192, 465,
      ]),
    },
  ])

  let timeout: any

  onMounted(() => {
    radomizeTimeout()
  })
  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })

  function radomizeTimeout() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      series.value[0].data.push(randomNumber(200, 600))
      series.value[0].data.shift()
      radomizeTimeout()
    }, 2000)
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomizeArray(arg: number[]) {
    const array = arg.slice()
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return {
    type,
    height,
    options,
    series,
  }
}

function useSparkSalesTwo() {
  const { success, title, subtitle } = useTailwindColors()

  const type = 'area'
  const height = 130

  const options = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      sparkline: {
        enabled: true,
      },
    },
    colors: [success.value],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Total Profit',
      offsetX: 5,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: subtitle.value,
        cssClass: 'apexcharts-spark-title',
      },
    },
    subtitle: {
      text: '$24,273.31',
      offsetX: 5,
      offsetY: 15,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        fontWeight: '500',
        color: title.value,
        cssClass: 'apexcharts-spark-subtitle',
      },
    },
  }

  const series = ref([
    {
      name: 'Total Profit',
      data: randomizeArray([
        472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415,
        358, 271, 932, 534, 615, 278, 546, 435, 192, 465,
      ]),
    },
  ])

  let timeout: any

  onMounted(() => {
    radomizeTimeout()
  })
  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })

  function radomizeTimeout() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      series.value[0].data.push(randomNumber(200, 600))
      series.value[0].data.shift()
      radomizeTimeout()
    }, 2000)
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomizeArray(arg: number[]) {
    const array = arg.slice()
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return {
    type,
    height,
    options,
    series,
  }
}

function useSparkSalesThree() {
  const { yellow, title, subtitle } = useTailwindColors()
  const type = 'area'
  const height = 130

  const options = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      sparkline: {
        enabled: true,
      },
    },
    colors: [yellow.value],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Total Orders',
      offsetX: 5,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: subtitle.value,
        cssClass: 'apexcharts-spark-title',
      },
    },
    subtitle: {
      text: '3912',
      offsetX: 5,
      offsetY: 15,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        fontWeight: '500',
        color: title.value,
        cssClass: 'apexcharts-spark-subtitle',
      },
    },
  }

  const series = ref([
    {
      name: 'Total Orders',
      data: randomizeArray([
        472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415,
        358, 271, 932, 534, 615, 278, 546, 435, 192, 465,
      ]),
    },
  ])

  let timeout: any

  onMounted(() => {
    radomizeTimeout()
  })
  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })

  function radomizeTimeout() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      series.value[0].data.push(randomNumber(200, 600))
      series.value[0].data.shift()
      radomizeTimeout()
    }, 2000)
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomizeArray(arg: number[]) {
    const array = arg.slice()
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return {
    type,
    height,
    options,
    series,
  }
}

function useSparkSalesFour() {
  const { info, title, subtitle } = useTailwindColors()

  const type = 'area'
  const height = 130

  const options = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      sparkline: {
        enabled: true,
      },
    },
    colors: [info.value],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Consolidated',
      offsetX: 5,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: subtitle.value,
        cssClass: 'apexcharts-spark-title',
      },
    },
    subtitle: {
      text: '$17,865.29',
      offsetX: 5,
      offsetY: 15,
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        fontWeight: '500',
        color: title.value,
        cssClass: 'apexcharts-spark-subtitle',
      },
    },
  }

  const series = ref([
    {
      name: 'Consolidated',
      data: randomizeArray([
        472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415,
        358, 271, 932, 534, 615, 278, 546, 435, 192, 465,
      ]),
    },
  ])

  let timeout: any

  onMounted(() => {
    radomizeTimeout()
  })
  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })

  function radomizeTimeout() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      series.value[0].data.push(randomNumber(200, 600))
      series.value[0].data.shift()
      radomizeTimeout()
    }, 2000)
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomizeArray(arg: number[]) {
    const array = arg.slice()
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return {
    type,
    height,
    options,
    series,
  }
}

function useAreaCustomers() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 258

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, info.value, success.value],
    title: {
      show: false,
      text: undefined,
      align: 'left',
    },
    legend: {
      show: true,
      position: 'top',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
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
  }

  const series = ref([
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

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialSalesRevenue() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 155

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
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
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            offsetY: 5,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            offsetY: 5,
          },
        },
      },
    },
    labels: ['Progress'],
  }

  const series = ref([65])

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialSmallOne() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 100

  const options = {
    chart: {
      height: 100,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  }

  const series = ref([31])

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialSmallTwo() {
  const { success } = useTailwindColors()
  const type = 'radialBar'
  const height = 100

  const options = {
    chart: {
      height: 100,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [success.value],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  }

  const series = ref([53])

  return {
    type,
    height,
    options,
    series,
  }
}

function useRadialSmallThree() {
  const { danger } = useTailwindColors()
  const type = 'radialBar'
  const height = 100

  const options = {
    chart: {
      height: 100,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [danger.value],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  }

  const series = ref([84])

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

function useBarOrders() {
  const { primary, success } = useTailwindColors()
  const type = 'bar'
  const height = 210

  const series = ref<any[]>([])

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value],
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
  }

  // delay the data loading
  let timeout: any
  let timeout2: any

  onMounted(() => {
    const { series } = useBarOrders()

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
    }, 1000)

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
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Welcome back, Maya</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButton>
          <span>View Reports</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Transactions</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Sparkline -->
      <div
        class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <AddonApexcharts v-bind="sparkSalesOne" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <AddonApexcharts v-bind="sparkSalesTwo" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <AddonApexcharts v-bind="sparkSalesThree" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <AddonApexcharts v-bind="sparkSalesFour" />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative col-span-12 md:col-span-7">
        <BaseCard class="p-6">
          <div class="mb-2 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Revenue Overview</span>
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
            <div>
              <span class="text-muted-400 font-sans text-xs">Average</span>
              <p
                class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
              >
                $66,561
              </p>
            </div>
          </div>
          <AddonApexcharts v-bind="areaCustomers" />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-5">
        <div class="flex h-full flex-col gap-6">
          <!-- Chart -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-center">
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 mb-4 dark:text-white"
                >
                  <span>Sales Revenue</span>
                </BaseHeading>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mb-2 dark:text-white"
                >
                  <span>$8,641.26</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-400">
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
          <BaseCard class="flex-1 p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Additional Stats</span>
              </BaseHeading>
            </div>
            <div class="flex justify-between gap-2">
              <div class="flex flex-1 flex-col gap-2 text-center">
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
                    <span class="text-muted-400">New Deals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-1 flex-col gap-2 text-center">
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
                    <span class="text-muted-400">Proposals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-1 flex-col gap-2 text-center">
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
                    <span class="text-muted-400">Closed deals</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <div
        class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
        <BaseCard class="flex flex-col p-6">
          <div class="mb-6 flex items-center justify-between">
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
          <div class="mt-auto text-center">
            <BaseParagraph size="sm">
              <span class="text-muted-400">
                Your score has been calculated based on the latest metrics
              </span>
            </BaseParagraph>
          </div>
        </BaseCard>
      </div>
      <!-- Column -->
      <div
        class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-6"
      >
        <BaseCard class="relative p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Orders Summary</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="barOrders" />
        </BaseCard>
      </div>
      <!-- Column -->
      <div
        class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3"
      >
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
      </div>
    </div>
  </div>
</template>
