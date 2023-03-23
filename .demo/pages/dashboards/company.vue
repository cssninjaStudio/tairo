<script setup lang="ts">
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Company',
})

const gaugePersonal = reactive(useGaugePersonal())
const barSalesProfit = reactive(useBarSalesProfit())

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

const team = [
  {
    id: '0',
    src: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: '1',
    src: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: '2',
    src: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: '3',
    src: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    expertise: 'Project',
    rate: 69,
    status: 'New',
  },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="flex flex-col gap-6">
      <!-- Header -->
      <BaseCard class="p-6">
        <div
          class="w-full flex flex-col sm:flex-row items-center xs:divide-y sm:divide-x divide-muted-200 dark:divide-muted-700"
        >
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:users-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                162
              </h4>
              <p class="font-sans text-sm text-muted-400">New Users</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:coins-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                $8,579
              </h4>
              <p class="font-sans text-sm text-muted-400">Daily Income</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:briefcase-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                192
              </h4>
              <p class="font-sans text-sm text-muted-400">Completed Projects</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:ticket-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                32
              </h4>
              <p class="font-sans text-sm text-muted-400">Active Tickets</p>
            </div>
          </div>
        </div>
      </BaseCard>
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-6">
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-6">
          <BaseCard class="p-6 h-full">
            <DemoCompanyOverview />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-6">
          <BaseCard class="relative h-full">
            <DemoChartAreaStats />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-12">
          <BaseCard class="relative h-full">
            <DemoChartBarSocialChannels />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <TairoTable shape="rounded">
            <template #header>
              <TairoTableHeading uppercase class="px-4 py-6">
                <div class="flex items-center">
                  <BaseCheckbox
                    name="table-1-main"
                    shape="rounded"
                    class="text-primary-500"
                  />
                </div>
              </TairoTableHeading>
              <TairoTableHeading uppercase>Collaborator</TairoTableHeading>
              <TairoTableHeading uppercase>Expertise</TairoTableHeading>
              <TairoTableHeading uppercase>Rate</TairoTableHeading>
              <TairoTableHeading uppercase>Status</TairoTableHeading>
              <TairoTableHeading uppercase class="px-4 py-6">
                <span class="sr-only">View</span>
              </TairoTableHeading>
            </template>

            <TairoTableRow v-for="member in team" :key="member.id">
              <TairoTableCell class="p-4">
                <div class="flex items-center">
                  <BaseCheckbox
                    :name="member.id"
                    shape="rounded"
                    class="text-primary-500"
                  />
                </div>
              </TairoTableCell>
              <TairoTableCell>
                <div class="flex items-center">
                  <BaseAvatar :src="member.src" size="sm" />
                  <div class="ml-3 leading-none">
                    <h4 class="font-heading text-sm font-semibold">
                      {{ member.name }}
                    </h4>
                    <p class="font-sans text-xs text-muted-400">
                      {{ member.role }}
                    </p>
                  </div>
                </div>
              </TairoTableCell>
              <TairoTableCell light>
                {{ member.expertise }}
              </TairoTableCell>
              <TairoTableCell>${{ member.rate }}/hour</TairoTableCell>
              <TairoTableCell>
                <BaseTag
                  v-if="member.status === 'Available'"
                  color="success"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
                <BaseTag
                  v-else-if="member.status === 'New'"
                  color="info"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
                <BaseTag
                  v-else-if="member.status === 'Hired'"
                  color="warning"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
              </TairoTableCell>
              <TairoTableCell>
                <a
                  href="#"
                  class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                >
                  View
                </a>
              </TairoTableCell>
            </TairoTableRow>
          </TairoTable>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-3 ptablet:col-span-6">
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
        <!-- Chart -->
        <div class="col-span-12 sm:col-span-6 ptablet:col-span-6">
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
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-3 ptablet:hidden">
          <BaseCard class="h-full flex flex-col">
            <Calendar
              :attributes="[
                {
                  key: 'today',
                  dot: true,
                  dates: new Date(),
                },
              ]"
              expanded
              borderless
              transparent
              trim-weeks
              class="max-w-full rounded-md"
            />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="flex items-center justify-between mb-10">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Pending tickets</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
              >
                View All
              </NuxtLink>
            </div>
            <DemoPendingTickets />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
