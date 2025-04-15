<script setup lang="ts">
const demoLineStep = reactive(useDemoLineStep())

function useDemoLineStep() {
  const series = shallowRef([
    {
      name: 'New members',
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
    },
  ])

  return defineApexchartsProps({
    type: 'line',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'stepline',
      },
      colors: ['var(--color-chart-base)'],
      dataLabels: {
        enabled: false,
      },
      title: {
        text: '',
        align: 'left',
      },
      markers: {
        hover: {
          sizeOffset: 4,
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
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoLineStep" />
</template>
