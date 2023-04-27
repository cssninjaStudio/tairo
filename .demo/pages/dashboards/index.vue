<script setup lang="ts">
definePageMeta({
  title: 'Activity',
  preview: {
    title: 'Personal dashboard v1',
    description: 'For personal usage and reports',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-1.png',
    srcDark: '/img/screens/dashboards-personal-1-dark.png',
    order: 1,
  },
})

const areaCustomers = reactive(useAreaCustomers())
const radialBarTeam = reactive(useRadialBarTeam())
const barProfit = reactive(useBarProfit())

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

function useRadialBarTeam() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 455

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
          size: '40%',
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
    grid: {
      padding: {
        top: 80,
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

function useBarProfit() {
  const { primary } = useTailwindColors()
  const type = 'bar'
  const height = 255

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
      formatter: function (val: string) {
        return val + '%'
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
        formatter: function (val: string) {
          return val + '%'
        },
      },
    },
    colors: [primary.value],
    title: {
      text: undefined,
      align: 'left',
    },
  }

  const series = ref([
    {
      name: 'Ratio',
      data: [2.3, 3.1, 4.0, 10.1, 4.0],
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
          <span>Manage Store</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Quick stats -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard class="p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Your Quick Stats</span>
            </BaseHeading>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                shape="full"
              >
                <Icon name="ph:nut-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>2,870</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Sales this month
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
                shape="full"
              >
                <Icon name="ph:handshake-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>159</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    New users
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400"
                shape="full"
              >
                <Icon name="ph:sketch-logo-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$429.18</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Earned today
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
                shape="full"
              >
                <Icon name="ph:bank-duotone" class="h-5 w-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$6816.32</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Total balance
                  </span>
                </BaseParagraph>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Area Chart card -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard class="p-6">
          <!-- Title -->
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Customers</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="areaCustomers" class="-ms-4" />
        </BaseCard>
      </div>
      <!-- CTA card -->
      <div
        class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"
      >
        <BaseCard
          class="from-primary-600 to-primary-700 relative flex h-full items-center justify-center bg-gradient-to-br p-6"
        >
          <div class="relative z-20 flex flex-col gap-3 py-10 text-center">
            <BaseHeading
              as="h4"
              size="lg"
              weight="semibold"
              lead="tight"
              class="text-white"
            >
              <span>Hey Maya, you're doing great.</span>
            </BaseHeading>
            <BaseParagraph size="md" class="mx-auto max-w-[280px]">
              <span class="text-white/80">
                Start using our team and project management tools
              </span>
            </BaseParagraph>
            <NuxtLink
              class="font-sans text-white underline-offset-4 hover:underline"
              to="#"
            >
              Learn More
            </NuxtLink>
          </div>
          <div
            class="absolute bottom-4 end-4 z-10 flex h-14 w-14 items-center justify-center"
          >
            <Icon
              name="ph:crown-duotone"
              class="text-primary-900/50 h-14 w-14"
            ></Icon>
          </div>
        </BaseCard>
      </div>
      <!-- Radial Bar card -->
      <div
        class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"
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
              <span>Team Efficiency</span>
            </BaseHeading>
          </div>
          <div
            class="absolute inset-x-0 top-24 flex items-center justify-center gap-4"
          >
            <BaseAvatar src="/img/avatars/4.svg" />
            <BaseAvatar
              text="H"
              class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
            />
            <BaseAvatar src="/img/avatars/3.svg" />
          </div>
          <AddonApexcharts v-bind="radialBarTeam" />
        </BaseCard>
      </div>
      <!-- Bar chart card -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <BaseCard class="relative p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Profit Evolution</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="barProfit" />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
