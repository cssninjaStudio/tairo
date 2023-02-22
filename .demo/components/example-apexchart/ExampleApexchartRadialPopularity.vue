<script setup lang="ts">
const { primary, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/radialbar-gauge/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'radialBar'
const height = 225

const options = {
  title: {
    text: '',
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--color-muted-400)',
          offsetY: 80,
        },
        value: {
          offsetY: 40,
          fontSize: '18px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
          color: undefined,
          formatter: function (val: number) {
            return val + '%'
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ['(30 days)'],
} as const

const series = ref([67])
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
      />
    </ClientOnly>
  </div>
</template>
