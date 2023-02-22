<script setup lang="ts">
const { primary, info, success } = useTailwindColors()

/**
 * Define props for component only when needed
 * This improves the chart rendering options
 */

const props = defineProps<{
  legend?: boolean
}>()

const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'area'
const height = 258

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, info.value, success.value],
  title: {
    show: false,
    text: undefined,
    align: 'left',
  },
  legend: {
    show: props.legend,
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

const series = ref([
  {
    name: 'Returning',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Newcomers',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: 'Abandonned',
    data: [78, 53, 36, 10, 14, 5, 2],
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
