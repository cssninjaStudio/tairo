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

function generateDayWiseTimeSeries(s: number, count: number) {
  const values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
  ]
  let i = 0
  const series = []
  let x = new Date('11 Nov 2020').getTime()
  while (i < count) {
    series.push([x, values[s][i]])
    x += 86400000
    i++
  }
  return series
}

const expensesOptions = {
  chart: {
    type: 'area',
    height: 250,
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
      name: 'Cash Expenses',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Card Expenses',
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
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
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
        :height="expensesOptions.chart.height"
        :type="expensesOptions.chart.type"
        :options="expensesOptions"
        :series="expensesOptions.series"
      />
    </ClientOnly>
  </div>
</template>
