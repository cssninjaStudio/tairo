<script setup lang="ts">
const { primary } = useTailwindColors()

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
 const salesRevenuesRadialOptions = {
  series: [65],
  chart: {
    height: 155,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '75%',
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          offsetY: 5,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          offsetY: 5,
        },
      },
    },
  },
  labels: ['Progress'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-40 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="salesRevenuesRadialOptions.chart.height"
        :type="salesRevenuesRadialOptions.chart.type"
        :options="salesRevenuesRadialOptions"
        :series="salesRevenuesRadialOptions.series"
      />
    </ClientOnly>
  </div>
</template>
