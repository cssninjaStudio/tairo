<script setup lang="ts">
const sparkLineTwo = reactive(useLineSparkTwo())

function useLineSparkTwo() {
  const series = shallowRef([
    {
      name: 'Income',
      data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline2',
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      grid: {
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2],
      },
      markers: {
        size: 0,
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
        y: {
          formatter: value => `${formatPrice(value)}k`,
        },
      },
      colors: ['var(--color-success-500)'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="sparkLineTwo" />
</template>
