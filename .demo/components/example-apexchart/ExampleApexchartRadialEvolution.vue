<script setup lang="ts">
const { primary, success, info } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/radialbar-gauge/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'radialBar'
const height = 220

const series = ref([54])

const options = {
  colors: [primary.value, success.value, info.value],
  title: {
    text: '',
    align: 'left',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: '13px',
          fontFamily: 'Roboto, sans-serif',
          color: 'var(--color-muted-400)',
          formatter: function () {
            return ['(30 days)']
          },
        },
        value: {
          color: 'var(--color-muted-400)',
          offsetY: -20,
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        },
      },
    },
  },
  labels: ['Median Ratio'],
} as const
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
