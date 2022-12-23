<script setup lang="ts">
const { primary, success } = useTailwindColors()

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
const goalOptions = {
  series: [57, 86],
  chart: {
    height: 220,
    type: 'radialBar',
    offsetY: -10,
  },
  colors: [primary.value, success.value],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      inverseOrder: true,
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '14px',
          fontWeight: 500,
          offsetY: -10,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontSize: '16px',
          offsetY: -5,
        },
        total: {
          show: true,
          fontSize: '14px',
          fontWeight: 500,
        },
      },
      hollow: {
        margin: 15,
        size: '75%',
      },
      track: {
        strokeWidth: '100%',
      },
    },
  },

  stroke: {
    lineCap: 'round',
  },
  labels: ['Efficiency', 'Productivity'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="goalOptions.chart.height"
        :type="goalOptions.chart.type"
        :options="goalOptions"
        :series="goalOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
