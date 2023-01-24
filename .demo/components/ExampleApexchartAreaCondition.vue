<script setup lang="ts">
const { primary } = useTailwindColors()

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
const conditionOptions = {
  series: [
    {
      name: 'Condition (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: 'area',
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
  },
  colors: [primary.value],
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: 'left',
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="conditionOptions.chart.height"
        :type="conditionOptions.chart.type"
        :options="conditionOptions"
        :series="conditionOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
