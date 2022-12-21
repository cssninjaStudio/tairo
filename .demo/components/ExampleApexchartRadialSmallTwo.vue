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
 const radialSmallOptions = {
  series: [53],
  chart: {
    height: 100,
    type: 'radialBar',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [success.value],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '35%',
      },
      dataLabels: {
        show: false,
      },
    },
  },
  labels: [''],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-24 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="radialSmallOptions.chart.height"
        :type="radialSmallOptions.chart.type"
        :options="radialSmallOptions"
        :series="radialSmallOptions.series"
      />
    </ClientOnly>
  </div>
</template>
