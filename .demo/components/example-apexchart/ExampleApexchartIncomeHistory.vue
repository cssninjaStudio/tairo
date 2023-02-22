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
const type = 'area'
const height = 290

const options = {
  chart: {
    height: 290,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value, info.value],
  title: {
    text: '',
    align: 'left',
  },
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
      '2022-10-19T00:00:00.000Z',
      '2022-10-20T01:30:00.000Z',
      '2022-10-21T02:30:00.000Z',
      '2022-10-22T03:30:00.000Z',
      '2022-10-23T04:30:00.000Z',
      '2022-10-24T05:30:00.000Z',
      '2022-10-25T06:30:00.000Z',
      '2022-10-26T06:30:00.000Z',
      '2022-10-27T06:30:00.000Z',
      '2022-10-28T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
    y: {
      formatter: function (val: number) {
        return '$' + val
      },
    },
  },
} as const

const series = ref([
  {
    name: 'Expenses',
    data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45],
  },
  {
    name: 'Earnings',
    data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511],
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
