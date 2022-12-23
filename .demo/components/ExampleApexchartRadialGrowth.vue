<script setup lang="ts">
const { success } = useTailwindColors()

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
const growthOptions = {
  series: [65],
  chart: {
    height: 180,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [success.value],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '75%',
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '0.7rem',
          fontFamily: 'Roboto',
          fontWeight: 400,
          offsetY: -10,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontSize: '16px',
          fontFamily: 'Roboto',
          offsetY: -5,
        },
      },
    },
  },
  labels: ['Growth'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="growthOptions.chart.height"
        :type="growthOptions.chart.type"
        :options="growthOptions"
        :series="growthOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
