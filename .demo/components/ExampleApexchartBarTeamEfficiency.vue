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
  loader: () => import('vue3-apexcharts').then((module) => {
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
 const series = [
  {
    name: 'Design',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Development',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Management',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
].map((s) => {
  return {
    name: s.name,
    data: s.data.map((d) => {
      return d - 70
    }),
  }
})

const barOptions = {
  chart: {
    height: 250,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [success.value, info.value, primary.value],
  legend: {
    position: 'top',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  series: series,
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    labels: {
      formatter: function (val: string) {
        return val + 70
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return val + 'hrs'
      },
    },
  },
}  as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-64 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts 
        v-show="apexLoaded"
        :height="barOptions.chart.height"
        :type="barOptions.chart.type"
        :options="barOptions"
        :series="barOptions.series"
      />
    </ClientOnly>
  </div>
</template>