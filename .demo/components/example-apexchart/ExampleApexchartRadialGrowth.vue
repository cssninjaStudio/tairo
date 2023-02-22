<script setup lang="ts">
const { success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const height = 180
const type = 'radialBar'

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: [success.value],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '75%',
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '0.7rem',
          fontFamily: 'Roboto',
          fontWeight: 400,
          offsetY: -10,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontSize: '16px',
          fontFamily: 'Roboto',
          offsetY: -5,
        },
      },
    },
  },
  labels: ['Growth'],
} as const

const series = ref([65])
</script>

<template>
  <div>
    <BasePlaceload class="w-[calc(100%-32px)] m-4" v-if="!isLoaded" :style="{ height: `${height - 32}px` }" />
    <ClientOnly>
      <LazyApexCharts
        v-show="isLoaded"
        v-bind="{
          height,
          type,
          options,
          series,
        }"
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
