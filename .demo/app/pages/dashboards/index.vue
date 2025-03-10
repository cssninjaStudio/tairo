<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

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
  const series = shallowRef([
    {
      name: 'Returning',
      data: [31, 40, 28, 51, 42, 176, 100],
    },
    {
      name: 'Newcomers',
      data: [11, 32, 45, 32, 31, 121, 41],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 310,
    series,
    options: {
      chart: {
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-600)', 'var(--color-indigo-600)'],
      title: {
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

function useRadialBarTeam() {
  const series = shallowRef([76])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 455,
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
            strokeWidth: '97%',
            margin: 0, // margin is in pixels
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
      labels: ['Average Results'],
    },
  })
}
function useBarProfit() {
  const series = shallowRef([
    {
      name: 'Expenses',
      data: [200.31, 309.12, 427.89, 438.82, 354.62, 339.29, 257.38, 231.21, 218.29, 231.21, 259.29, 279.21],
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
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '80%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: value => `${value} %`,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: [
          'Jan 2024',
          'Feb 2024',
          'Mar 2024',
          'Apr 2024',
          'May 2024',
          'Jun 2024',
          'Jul 2024',
          'Aug 2024',
          'Sep 2024',
          'Oct 2024',
          'Nov 2024',
          'Dec 2024',
        ],
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
          formatter: value => formatPrice(value),
        },
      },
      colors: ['var(--color-chart-base)'],
      title: {
        text: '',
        align: 'left',
      },
    },
  })
}
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="lg:landscape:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
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
          <BaseParagraph>
            <span class="text-muted-600 dark:text-muted-400">
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
        <BaseButton variant="primary">
          <span>Manage Store</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Area Chart card -->
      <div class="lg:landscape:col-span-6 col-span-12 2xl:landscape:col-span-5">
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
              <span>New / returning customers</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="areaCustomers" class="-ms-4" />
        </BaseCard>
      </div>
      <!-- Quick stats -->
      <div class="lg:landscape:col-span-6 col-span-12 2xl:landscape:col-span-4">
        <BaseCard rounded="md" class="p-6 h-full flex flex-col">
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
          <div class="grid gap-4 grid-cols-2 mt-auto">
            <div class="col-span-2">
              <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                We've selected some of your most important stats to keep you updated. You can always view more in the
                <BaseLink to="/dashboards" class="text-primary-600 dark:text-primary-400">
                  reports section.
                </BaseLink>
              </BaseParagraph>
            </div>
            <!-- Grid item -->
            <div
              class="ring-muted-900/5 dark:ring-muted-800 ring-1 flex flex-col items-center text-center shadow-sm gap-2 rounded-md p-4"
            >
              <BaseIconBox
                size="sm"
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                rounded="full"
                variant="none"
              >
                <Icon name="ph:nut-duotone" class="size-5" />
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
              class="ring-muted-900/5 dark:ring-muted-800 ring-1 flex flex-col items-center text-center shadow-sm gap-2 rounded-md p-4"
            >
              <BaseIconBox
                size="sm"
                class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
                rounded="full"
                variant="none"
              >
                <Icon name="ph:handshake-duotone" class="size-5" />
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
              class="ring-muted-900/5 dark:ring-muted-800 ring-1 flex flex-col items-center text-center shadow-sm gap-2 rounded-md p-4"
            >
              <BaseIconBox
                size="sm"
                class="bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400"
                rounded="full"
                variant="none"
              >
                <Icon name="ph:sketch-logo-duotone" class="size-5" />
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
              class="ring-muted-900/5 dark:ring-muted-800 ring-1 flex flex-col items-center text-center shadow-sm gap-2 rounded-md p-4"
            >
              <BaseIconBox
                size="sm"
                class="bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
                rounded="full"
                variant="none"
              >
                <Icon name="ph:bank-duotone" class="size-5" />
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
      <!-- Grid item -->
      <div class="lg:landscape:col-span-6 col-span-12 2xl:landscape:col-span-3">
        <BaseCard rounded="md" class="p-6 h-full">
          <DemoInfoBadges
            class="h-full"
            image="/img/illustrations/widgets/1.svg"
            badge-small="/img/illustrations/widgets/3.svg"
            badge-medium="/img/illustrations/widgets/2.svg"
          >
            <div class="text-start">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                <span>You've unlocked 2 new Achievements</span>
              </BaseHeading>
              <BaseParagraph size="sm">
                <span class="text-muted-600 dark:text-muted-400">Congrats, your efforts have been rewarded. Keep up like this!</span>
              </BaseParagraph>
              <div class="mt-4">
                <BaseButton rounded="md" class="w-full">
                  <span>View Achievements</span>
                </BaseButton>
              </div>
            </div>
          </DemoInfoBadges>
        </BaseCard>
      </div>
      <!-- CTA card -->
      <div
        class="lg:portrait:col-span-6 lg:landscape:col-span-6 col-span-12 2xl:landscape:col-span-3"
      >
        <BaseCard
          variant="none"
          rounded="md"
          class="from-primary-900 to-primary-800 relative flex h-full items-center justify-center bg-gradient-to-br p-6"
        >
          <div class="relative z-20 flex flex-col gap-3 py-10 text-center">
            <BaseHeading
              as="h4"
              size="lg"
              weight="semibold"
              lead="tight"
              class="text-white"
            >
              <span>You're doing great!</span>
            </BaseHeading>
            <BaseParagraph size="md" class="mx-auto max-w-[280px]">
              <span class="text-white/80">
                Start using our team and project management tools
              </span>
            </BaseParagraph>
            <NuxtLink
              class="font-sans text-sm text-white underline-offset-4 hover:underline"
              to="#"
            >
              Learn More
            </NuxtLink>
          </div>
          <div
            class="absolute bottom-4 end-4 z-10 flex size-14 items-center justify-center"
          >
            <Icon
              name="ph:crown-duotone"
              class="text-primary-600/50 size-14"
            />
          </div>
        </BaseCard>
      </div>
      <!-- Radial Bar card -->
      <div
        class="lg:portrait:col-span-6 lg:landscape:col-span-5 col-span-12 2xl:landscape:col-span-4"
      >
        <BaseCard rounded="md" class="relative flex flex-col h-full p-6">
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
              :classes="{
                root: 'bg-yellow-400/10 dark:bg-yellow-400/20',
                fallback: 'text-yellow-600',
              }"
            />
            <BaseAvatar src="/img/avatars/3.svg" />
          </div>
          <div class="mt-auto">
            <AddonApexcharts v-bind="radialBarTeam" />
          </div>
        </BaseCard>
      </div>
      <!-- Bar chart card -->
      <div class="lg:landscape:col-span-7 col-span-12 2xl:landscape:col-span-5">
        <BaseCard rounded="md" class="flex flex-col h-full p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Global expense report</span>
            </BaseHeading>
          </div>
          <div class="mt-auto">
            <AddonApexcharts v-bind="barProfit" />
          </div>
        </BaseCard>
      </div>
      <div class="col-span-12 md:col-span-12">
        <!-- Transactions widget -->
        <DemoWidgetTransactionSummary />
      </div>
    </div>
  </div>
</template>
