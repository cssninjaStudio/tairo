<script setup lang="ts">
const { primary } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'radialBar'
const height = 155

const series = ref([65])

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '75%',
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          offsetY: 5,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          offsetY: 5,
        },
      },
    },
  },
  labels: ['Progress'],
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
