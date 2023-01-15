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
 * @see https://apexcharts.com/docs/chart-types/radialbar-gauge/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const popularityGaugeOptions = {
  series: [67],
  title: {
    text: '',
  },
  chart: {
    height: 225,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--color-muted-400)',
          offsetY: 80,
        },
        value: {
          offsetY: 40,
          fontSize: '18px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
          color: undefined,
          formatter: function (val: number) {
            return val + '%'
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ['(30 days)'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-32 mt-36 mb-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="popularityGaugeOptions.chart.height"
        :type="popularityGaugeOptions.chart.type"
        :options="popularityGaugeOptions"
        :series="popularityGaugeOptions.series"
      />
    </ClientOnly>
  </div>
</template>
