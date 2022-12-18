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
  loader: () => import('vue3-apexcharts').then((module) => {
    nextTick(() => {
      apexLoaded.value = true
    })
    return module.default
  }),
})

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/bar-chart/
 * 
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const profitBarOptions = {
  series: [
    {
      name: 'Ratio',
      data: [2.3, 3.1, 4.0, 10.1, 4.0],
    },
  ],
  chart: {
    height: 255,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: string) {
        return val + '%'
      },
    },
  },
  colors: [primary.value],
  title: {
    text: undefined,
    align: 'left',
  },
} as const
</script>

<template>
  <BaseCard class="relative">
    <div class="mb-6">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>Profit Evolution</span>
      </BaseHeading>
    </div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="profitBarOptions.chart.height"
        :type="profitBarOptions.chart.type"
        :options="profitBarOptions"
        :series="profitBarOptions.series"
      />
    </ClientOnly>
  </BaseCard>
</template>