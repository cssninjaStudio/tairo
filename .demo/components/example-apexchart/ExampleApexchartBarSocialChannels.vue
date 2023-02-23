<script setup lang="ts">
const { primary, subtitle, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'bar'
const height = 235

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      borderRadiusApplication: 'end',
      columnWidth: '60%',
      colors: {
        backgroundBarOpacity: 0.75,
      },
    },
  },
  colors: [success.value, primary.value, subtitle.value],
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
} as const

const series = ref([
  {
    name: 'New Users',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Renewals',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
])
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
