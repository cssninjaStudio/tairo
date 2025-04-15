<script setup lang="ts">
const sparkLineOne = reactive(useLineSparkOne())

function useLineSparkOne() {
  const series = shallowRef([
    {
      name: 'Sales',
      data: [2565, 6126, 4271, 5249, 2245, 4424, 1752, 3996, 976, 2157],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 60,
    series,
    options: {
      chart: {
        id: 'sparkline1',
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
      },
      colors: ['var(--color-chart-base)'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="sparkLineOne" />
</template>
