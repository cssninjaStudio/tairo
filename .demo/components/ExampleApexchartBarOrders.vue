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
let barData = [
  {
    x: 'Jan',
    y: 322,
  },
  {
    x: 'Feb',
    y: 459,
  },
  {
    x: 'Mar',
    y: 212,
  },
  {
    x: 'Apr',
    y: 345,
  },
  {
    x: 'May',
    y: 111,
  },
  {
    x: 'Jun',
    y: 189,
  },
  {
    x: 'Jul',
    y: 498,
  },
  {
    x: 'Aug',
    y: 612,
  },
  {
    x: 'Sep',
    y: 451,
  },
  {
    x: 'Oct',
    y: 248,
  },
  {
    x: 'Nov',
    y: 306,
  },
  {
    x: 'Dec',
    y: 366,
  },
]

let barData2 = [
  {
    x: 'Jan',
    y: 25,
  },
  {
    x: 'Feb',
    y: 49,
  },
  {
    x: 'Mar',
    y: 36,
  },
  {
    x: 'Apr',
    y: 84,
  },
  {
    x: 'May',
    y: 64,
  },
  {
    x: 'Jun',
    y: 131,
  },
  {
    x: 'Jul',
    y: 48,
  },
  {
    x: 'Aug',
    y: 144,
  },
  {
    x: 'Sep',
    y: 96,
  },
  {
    x: 'Oct',
    y: 11,
  },
  {
    x: 'Nov',
    y: 31,
  },
  {
    x: 'Dec',
    y: 8,
  },
]

const salesBarOptions = reactive<any>({
  series: [],
  chart: {
    height: 210,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value],
  dataLabels: {
    enabled: false,
  },
  noData: {
    text: 'Loading...',
  },
  xaxis: {
    type: 'category',
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      rotateAlways: true,
    },
  },
})

onMounted(() => {
  setTimeout(() => {
    salesBarOptions.series = [
      {
        name: 'Orders',
        data: barData,
      },
    ]
  }, 1000)

  setTimeout(() => {
    salesBarOptions.series = [
      ...salesBarOptions.series,
      {
        name: 'Abandonned',
        data: barData2,
      },
    ]
  }, 2500)
})
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="salesBarOptions.chart.height"
        :type="salesBarOptions.chart.type"
        :options="salesBarOptions"
        :series="salesBarOptions.series"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
