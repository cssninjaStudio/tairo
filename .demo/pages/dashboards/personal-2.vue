<script setup lang="ts">
definePageMeta({
  title: 'My Projects',
  preview: {
    title: 'Personal dashboard v2',
    description: 'For personal usage and reports',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-2.png',
    srcDark: '/img/screens/dashboards-personal-2-dark.png',
    order: 2,
  },
})

const areaTaskCompletion = reactive(useAreaTaskCompletion())
const barTeamEfficiency = reactive(useBarTeamEfficiency())

function useAreaTaskCompletion() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 295

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [success.value, info.value, primary.value],
    legend: {
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
      name: 'Pending',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Completed',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Blocked',
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

function useBarTeamEfficiency() {
  const { primary, info, success } = useTailwindColors()
  const type = 'bar'
  const height = 250

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [success.value, info.value, primary.value],
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
          return val + 'hrs'
        },
      },
    },
  }

  const series = ref([
    {
      name: 'Design',
      data: [-26, -15, -13, -14, -9, -12, -7, -10, -4],
    },
    {
      name: 'Development',
      data: [6, 15, 31, 28, 17, 35, 21, 44, 24],
    },
    {
      name: 'Management',
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
  <div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!--Grid column-->
      <div class="col-span-12">
        <!-- Header -->
        <BaseCard class="p-5">
          <div class="flex flex-col items-center md:flex-row">
            <div
              class="ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:flex-row lg:items-center"
            >
              <BaseAvatar
                src="/img/avatars/2.svg"
                size="xl"
                badge-src="/img/icons/flags/united-states-of-america.svg"
              />
              <div class="text-center md:text-left">
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
                  <span class="text-muted-400">It's nice to see you again</span>
                </BaseParagraph>
              </div>
            </div>

            <div
              class="ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-left lg:flex-row lg:items-center"
            >
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="3xl"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>
                    31
                    <small class="text-base font-medium">Tasks</small>
                  </span>
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-muted-400 text-sm">
                    Are currently pending
                  </span>
                </BaseParagraph>
              </div>
              <BaseCard
                class="from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl"
              >
                <div class="relative z-20 flex flex-col gap-3">
                  <BaseParagraph size="sm">
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
                  class="absolute bottom-0 end-2 z-10 flex h-14 w-14 items-center justify-center"
                >
                  <Icon
                    name="ph:crown-duotone"
                    class="text-primary-900/50 h-10 w-10"
                  ></Icon>
                </div>
              </BaseCard>
            </div>
          </div>
        </BaseCard>
      </div>
      <!--Grid column-->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <!-- Inner grid -->
        <div class="flex flex-col gap-6">
          <!-- Project list widget -->
          <BaseCard class="p-6">
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Current Projects</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                View All
              </NuxtLink>
            </div>
            <DemoProjectListCompact />
          </BaseCard>
          <!-- Chart -->
          <BaseCard class="p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Completion</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                Reports
              </NuxtLink>
            </div>
            <AddonApexcharts v-bind="areaTaskCompletion" />
          </BaseCard>
          <!-- Chart -->
          <BaseCard class="p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Team Efficiency</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                Reports
              </NuxtLink>
            </div>
            <AddonApexcharts v-bind="barTeamEfficiency" />
          </BaseCard>
        </div>
      </div>
      <!--Grid column-->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <!-- Inner grid -->
        <div class="ptablet:grid-cols-2 grid gap-6 lg:flex lg:flex-col">
          <!-- Widget -->
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
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
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                View All
              </NuxtLink>
            </div>
            <DemoTeamListCompact actions />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Todo Today</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                View All
              </NuxtLink>
            </div>
            <DemoTodoListCompact />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6">
            <DemoPlaceholderCompact>
              <template #image>
                <img
                  src="/img/illustrations/placeholders/flat/chart-guy.svg"
                  class="block w-full dark:hidden"
                  width="225"
                  height="150"
                  alt="Placeholder illustration"
                />
                <img
                  src="/img/illustrations/placeholders/flat/chart-guy-dark.svg"
                  class="hidden w-full dark:block"
                  width="225"
                  height="150"
                  alt="Placeholder illustration"
                />
              </template>
              <BaseHeading
                as="h4"
                size="lg"
                weight="light"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                <span>Pro Freatures</span>
              </BaseHeading>
              <BaseParagraph size="sm">
                <span class="text-muted-400">
                  Unlock more features and business tools by subscribing to a
                  premium plan
                </span>
              </BaseParagraph>
              <template #action>
                <BaseButton color="primary" shape="rounded" class="w-full">
                  <span>Upgrade to Pro</span>
                </BaseButton>
              </template>
            </DemoPlaceholderCompact>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
