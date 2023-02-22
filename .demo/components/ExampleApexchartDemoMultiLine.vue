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
  series: [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  chart: {
    height: 280,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value, info.value],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
    dashArray: [0, 8, 5],
  },
  title: {
    text: '',
    align: 'left',
  },
  legend: {
    tooltipHoverFormatter: function (val: string, opts: any) {
      return (
        val +
        ' - ' +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ''
      )
    },
    position: 'top',
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: asMinutes,
        },
      },
      {
        title: {
          formatter: perSession,
        },
      },
      {
        title: {
          formatter: toString,
        },
      },
    ],
  },
  grid: {
    borderColor: '#f1f1f1',
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
