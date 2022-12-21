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
 * @see https://apexcharts.com/docs/chart-types/radialbar-gauge/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const gaugeOptions = {
  series: [76],
  title: {
    text: undefined,
  },
  chart: {
    height: 220,
    type: 'radialBar',
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2,
        },
      },
      hollow: {
        margin: 0,
        size: '35%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ['Average Results'],
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-56 mt-36 mb-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="gaugeOptions.chart.height"
        :type="gaugeOptions.chart.type"
        :options="gaugeOptions"
        :series="gaugeOptions.series"
        class="-mt-14"
      />
    </ClientOnly>
  </div>
</template>
