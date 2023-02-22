<script setup lang="ts">
import dayjs from 'dayjs'
const { primary, info, success, warning, danger } = useTailwindColors()

/**
 * Use `defineAsyncComponent` to lazy load the component only when needed
 * This improves the initial load time of the page when the component is not needed
 *
 * Using a ref to track when the component is loaded is not necessary, but it's
 * a good practice to be able to show a loading state while the component is loading.
 */
const apexLoaded = ref(false)
const LazyVueApexCharts = defineAsyncComponent({
  loader: () =>
    import('vue3-apexcharts').then((module) => {
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
const demoChartOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    height: 335,
    type: 'pie',
  },
  dataLabels: {
    style: {
      fontSize: '12px',
      weight: 500,
    },
  },
  colors: [primary.value, success.value, info.value, danger.value],
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 315,
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: 'top',
        },
      },
    },
  ],
  legend: {
    position: 'right',
    horizontalAlign: 'center',
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="demoChartOptions.chart.height"
        :type="demoChartOptions.chart.type"
        :options="demoChartOptions"
        :series="demoChartOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
