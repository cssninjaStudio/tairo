<script setup lang="ts">
const { primary, info, success } = useTailwindColors()

/**
 * Define props for component only when needed
 * This improves the chart rendering options
 */

const props = defineProps<{
  legend?: boolean
}>()

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
function generateDayWiseTimeSeries(s: number, count: number) {
  const values = [
    [
      0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7,
      0.2, 0.7, 0.5,
    ],
    [
      0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5,
      0.2, 0.6, 2,
    ],
  ]
  let i = 0
  const series = []
  let x = new Date('11 Nov 2022').getTime()
  while (i < count) {
    series.push([x, values[s][i]])
    x += 86400000
    i++
  }
  return series
}

const bitcoinChartOptions = {
  chart: {
    type: 'area',
    height: 350,
    foreColor: '#999',
    stacked: true,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: [success.value, primary.value, info.value],
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: '',
    align: 'left',
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: 'Expected',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Real',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ],
  markers: {
    size: 0,
    strokeColor: '#fff',
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -5,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
    y: {
      formatter: function (val: number) {
        return val + '%'
      },
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  fill: {
    type: 'solid',
    fillOpacity: 0.7,
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="bitcoinChartOptions.chart.height"
        :type="bitcoinChartOptions.chart.type"
        :options="bitcoinChartOptions"
        :series="bitcoinChartOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
