<script setup lang="ts">
const sparkLineFour = reactive(useLineSparkFour())

function useLineSparkFour() {
  const series = shallowRef([
    {
      name: 'Abandonned',
      data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline4',
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
      tooltip: {
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
      },
      colors: ['var(--color-destructive-500)'],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
        labels: {
          minWidth: 100,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="sparkLineFour" />
</template>
