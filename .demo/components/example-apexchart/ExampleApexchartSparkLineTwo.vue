<script setup lang="ts">
const { success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'line'
const height = 60

const options = {
  chart: {
    id: 'sparkline2',
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
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right',
    },
    x: {
      show: false,
    },
    y: {
      formatter: asKDollar,
    },
  },
  colors: [success.value],
} as const

const series = ref([
  {
    name: 'Income',
    data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7],
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
