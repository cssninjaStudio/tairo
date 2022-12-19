<script setup lang="ts">
const { primary, info, success } = useTailwindColors()

/**
 * Use `defineAsyncComponent` to lazy load the component only when needed
 * This improves the initial load time of the page when the component is not needed
 * 
 * Using a ref to track when the component is loaded is not necessary, but it's
 * a good practice to be able to show a loading state while the component is loading.
 */
const apexLoaded = ref(false)
const LazyVueApexCharts = defineAsyncComponent({
  loader: () => import('vue3-apexcharts').then((module) => {
    nextTick(() => {
      apexLoaded.value = true
    })
    return module.default
  }),
})

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 * 
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const completionOptions = {
  series: [
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
  ],
  chart: {
    height: 295,
    type: 'area',
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
} as const
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>Completion</span>
      </BaseHeading>
      <RouterLink to="/" class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300">Reports</RouterLink>
    </div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts 
        v-show="apexLoaded"
        :height="completionOptions.chart.height"
        :type="completionOptions.chart.type"
        :options="completionOptions"
        :series="completionOptions.series"
      />
    </ClientOnly>
  </div>
</template>