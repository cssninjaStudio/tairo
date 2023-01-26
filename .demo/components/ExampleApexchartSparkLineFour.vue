<script setup lang="ts">
const { danger } = useTailwindColors()

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

const spark = {
  chart: {
    id: 'sparkline4',
    type: 'line',
    height: 60,
    sparkline: {
      enabled: true,
    },
    group: 'sparklines',
  },
  series: [
    {
      name: 'Abandonned',
      data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651],
    },
  ],
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
  colors: [danger.value],
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
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-24 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="spark.chart.height"
        :type="spark.chart.type"
        :options="spark"
        :series="spark.series"
      />
    </ClientOnly>
  </div>
</template>
