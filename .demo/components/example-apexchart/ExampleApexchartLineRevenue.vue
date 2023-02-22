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
const type = 'line'
const height = 250

const options = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return '$' + val
      },
    },
  },
} as const

const series = ref([
  {
    name: 'Revenue',
    data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
  },
])
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
