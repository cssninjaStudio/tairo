<script setup lang="ts">
const sparkLineThree = reactive(useLineSparkThree())

function useLineSparkThree() {
  const series = shallowRef([
    {
      name: 'New Orders',
      data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline3',
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
      colors: ['var(--color-info-500)'],
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
  <LazyAddonApexcharts v-bind="sparkLineThree" />
</template>
