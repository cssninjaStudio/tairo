<script setup lang="ts">
definePageMeta({
  title: 'Sales',
  layout: 'sidebar',
})

const sparkSalesOne = reactive(useSparkSalesOne())
const sparkSalesTwo = reactive(useSparkSalesTwo())
const sparkSalesThree = reactive(useSparkSalesThree())
const sparkSalesFour = reactive(useSparkSalesFour())

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
  } as const

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
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
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
  } as const

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
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
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
  } as const

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
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
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
  } as const

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
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
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
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
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
        class="flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0"
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
        class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <TairoApexcharts v-bind="sparkSalesOne" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <TairoApexcharts v-bind="sparkSalesTwo" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <TairoApexcharts v-bind="sparkSalesThree" />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3"
      >
        <BaseCard class="pt-4">
          <TairoApexcharts v-bind="sparkSalesFour" />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative col-span-12 md:col-span-7">
        <BaseCard class="p-6">
          <div class="flex items-center justify-between mb-2">
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
              to="#/"
              class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
            >
              Details
            </NuxtLink>
          </div>
          <div class="flex gap-8">
            <div>
              <span class="font-sans text-xs text-muted-400">This month</span>
              <p class="font-sans font-medium text-lg text-primary-500">
                $75,689
              </p>
            </div>
            <div>
              <span class="font-sans text-xs text-muted-400">Last month</span>
              <p
                class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100"
              >
                $59,724
              </p>
            </div>
            <div>
              <span class="font-sans text-xs text-muted-400">Average</span>
              <p
                class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100"
              >
                $66,561
              </p>
            </div>
          </div>
          <ExampleApexchartAreaCustomer />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-5">
        <div class="flex flex-col gap-6 h-full">
          <!-- Chart -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-center">
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white mb-4"
                >
                  <span>Sales Revenue</span>
                </BaseHeading>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 dark:text-white mb-2"
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
                <ExampleApexchartRadialSalesRevenue />
              </div>
            </div>
          </BaseCard>
          <!-- Charts -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-between mb-6">
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
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallOne />
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
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallTwo />
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
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallThree />
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
        class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-3"
      >
        <BaseCard class="flex flex-col p-6">
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
            <ExampleApexchartGaugePersonal />
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
      <!-- Column -->
      <div
        class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-6"
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
          <ExampleApexchartBarOrders />
        </BaseCard>
      </div>
      <!-- Column -->
      <div
        class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-3"
      >
        <!-- Calendar -->
        <BaseCard class="p-6">
          <WidgetDatepicker />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
