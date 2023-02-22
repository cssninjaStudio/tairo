<script setup lang="ts">
const { primary, info, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const height = 280
const type = 'scatter'

const options = {
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

const series = ref([
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
])

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
</script>

<template>
  <div>
    <BasePlaceload class="w-[calc(100%-32px)] m-4" v-if="!isLoaded" :style="{ height: `${height - 32}px` }" />
    <ClientOnly>
      <LazyApexCharts
        v-show="isLoaded"
        v-bind="{
          height,
          type,
          options,
          series,
        }"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
