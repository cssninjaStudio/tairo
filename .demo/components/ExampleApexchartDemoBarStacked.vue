<script setup lang="ts">
const { primary, info, success, danger } = useTailwindColors()

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
const demoChartOptions = {
  series: [
    {
      name: 'Desktops',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Phones',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'Tablets',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'Hybrid',
      data: [21, 7, 25, 13, 22, 8],
    },
  ],
  chart: {
    type: 'bar',
    height: 280,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    style: {
      colors: ['#fff'],
      fontWeight: 300,
    },
  },
  colors: [primary.value, success.value, info.value, danger.value],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'top',
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
    ],
  },
  title: {
    text: '',
    align: 'left',
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  fill: {
    opacity: 1,
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="demoChartOptions.chart.height"
        :type="demoChartOptions.chart.type"
        :options="demoChartOptions"
        :series="demoChartOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
