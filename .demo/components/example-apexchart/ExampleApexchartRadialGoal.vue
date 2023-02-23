<script setup lang="ts">
const { primary, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */

const type = 'radialBar'
const height = 220

const options = {
  chart: {
    offsetY: -10,
  },
  colors: [primary.value, success.value],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      inverseOrder: true,
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '14px',
          fontWeight: 500,
          offsetY: -10,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontSize: '16px',
          offsetY: -5,
        },
        total: {
          show: true,
          fontSize: '14px',
          fontWeight: 500,
        },
      },
      hollow: {
        margin: 15,
        size: '75%',
      },
      track: {
        strokeWidth: '100%',
      },
    },
  },

  stroke: {
    lineCap: 'round',
  },
  labels: ['Efficiency', 'Productivity'],
} as const

const series = ref([57, 86])
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
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
