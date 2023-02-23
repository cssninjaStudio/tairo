<script setup lang="ts">
const { primary, info, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'bar'
const height = 250

const series = ref([
  {
    name: 'Design',
    data: [-26, -15, -13, -14, -9, -12, -7, -10, -4],
  },
  {
    name: 'Development',
    data: [6, 15, 31, 28, 17, 35, 21, 44, 24],
  },
  {
    name: 'Management',
    data: [-35, -29, -34, -44, -25, -22, -18, -17, -29],
  },
])

const options = {
  chart: {
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
} as const
</script>

<template>
  <div>
    <BasePlaceload
      class="w-[calc(100%-32px)] m-4"
      v-if="!isLoaded"
      :style="{ height: `${height - 32}px` }"
    />
    <ClientOnly>
      <LazyApexCharts
        v-show="isLoaded"
        v-bind="{
          height,
          type,
          options,
          series,
        }"
      />
    </ClientOnly>
  </div>
</template>
