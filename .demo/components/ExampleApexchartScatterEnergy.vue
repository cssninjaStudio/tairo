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
function generateDayWiseTimeSeries(
  baseval: number,
  count: number,
  yrange: { min: number; max: number },
) {
  let i = 0
  const series = []
  while (i < count) {
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([baseval, y])
    baseval += 86400000
    i++
  }
  return series
}

const energyOptions = {
  series: [
    {
      name: 'Tonic',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Tantra',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Vital',
      data: generateDayWiseTimeSeries(
        new Date('Oct 11 2020 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        },
      ),
    },
  ],
  chart: {
    height: 280,
    type: 'scatter',
    zoom: {
      type: 'xy',
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value, info.value],
  dataLabels: {
    enabled: false,
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    show: false,
    type: 'datetime',
  },
  yaxis: {
    show: false,
    max: 70,
  },
  legend: {
    show: false,
    position: 'top',
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
        :height="energyOptions.chart.height"
        :type="energyOptions.chart.type"
        :options="energyOptions"
        :series="energyOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
