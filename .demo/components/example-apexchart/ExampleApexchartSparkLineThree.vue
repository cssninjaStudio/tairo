<script setup lang="ts">
const { info } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const height = 60
const type = 'line'

const options = {
  chart: {
    id: 'sparkline3',
    sparkline: {
      enabled: true,
    },
    group: 'sparklines',
  },
  grid: {
    padding: {
      top: 10,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  stroke: {
    curve: 'smooth',
    width: [2],
  },
  markers: {
    size: 0,
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right',
    },
    x: {
      show: false,
    },
  },
  colors: [info.value],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
} as const

const series = ref([
  {
    name: 'New Orders',
    data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579],
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
      />
    </ClientOnly>
  </div>
</template>
