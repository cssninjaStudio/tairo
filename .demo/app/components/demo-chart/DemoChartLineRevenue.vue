<script setup lang="ts">
const lineRevenue = reactive(useLineRevenue())

function useLineRevenue() {
  const series = shallowRef([
    {
      name: 'Revenue',
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 250,
    series,
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        fontFamily: 'var(--font-sans)',
      },
      colors: ['var(--color-chart-base)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      tooltip: {
        y: {
          formatter: value => formatPrice(value),
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="lineRevenue" />
</template>
