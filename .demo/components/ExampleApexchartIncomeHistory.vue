<script setup lang="ts">
const { primary, info, success } = useTailwindColors()

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
 const incomeOptions = {
  series: [
    {
      name: 'Expenses',
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45],
    },
    {
      name: 'Earnings',
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511],
    },
  ],
  chart: {
    height: 290,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value, info.value],
  title: {
    text: '',
    align: 'left',
  },
  legend: {
    position: 'top',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2022-10-19T00:00:00.000Z',
      '2022-10-20T01:30:00.000Z',
      '2022-10-21T02:30:00.000Z',
      '2022-10-22T03:30:00.000Z',
      '2022-10-23T04:30:00.000Z',
      '2022-10-24T05:30:00.000Z',
      '2022-10-25T06:30:00.000Z',
      '2022-10-26T06:30:00.000Z',
      '2022-10-27T06:30:00.000Z',
      '2022-10-28T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
    y: {
      formatter: function (val: number) {
        return '$' + val
      },
    },
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="incomeOptions.chart.height"
        :type="incomeOptions.chart.type"
        :options="incomeOptions"
        :series="incomeOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
