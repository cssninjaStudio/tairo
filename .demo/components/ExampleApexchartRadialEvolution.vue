<script setup lang="ts">
const { primary, success, info } = useTailwindColors()

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
 * @see https://apexcharts.com/docs/chart-types/radialbar-gauge/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const evolutionRadialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: 'radialBar',
  },
  colors: [primary.value, success.value, info.value],
  title: {
    text: '',
    align: 'left',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: '13px',
          fontFamily: 'Roboto, sans-serif',
          color: 'var(--color-muted-400)',
          formatter: function () {
            return ['(30 days)']
          },
        },
        value: {
          color: 'var(--color-muted-400)',
          offsetY: -20,
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        },
      },
    },
  },
  labels: ['Median Ratio'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-32 mt-36 mb-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="evolutionRadialOptions.chart.height"
        :type="evolutionRadialOptions.chart.type"
        :options="evolutionRadialOptions"
        :series="evolutionRadialOptions.series"
      />
    </ClientOnly>
  </div>
</template>
