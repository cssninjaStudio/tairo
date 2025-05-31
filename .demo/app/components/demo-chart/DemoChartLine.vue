<script setup lang="ts">
const demoLine = reactive(useDemoLine())

function useDemoLine() {
  const series = shallowRef([
    {
      name: 'Sales',
      data: [105, 414, 357, 511, 497, 621, 695, 912, 748],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 290,
    series,
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoLine" />
</template>
