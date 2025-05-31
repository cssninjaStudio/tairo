<script setup lang="ts">
const demoBarRange = reactive(useDemoBarRange())

function useDemoBarRange() {
  const series = shallowRef([
    {
      name: 'Corporate',
      data: [
        {
          x: 'Team A',
          y: [1, 5],
        },
        {
          x: 'Team B',
          y: [4, 6],
        },
        {
          x: 'Team C',
          y: [5, 8],
        },
        {
          x: 'Team D',
          y: [3, 11],
        },
      ],
    },
    {
      name: 'Service',
      data: [
        {
          x: 'Team A',
          y: [2, 6],
        },
        {
          x: 'Team B',
          y: [1, 3],
        },
        {
          x: 'Team C',
          y: [7, 8],
        },
        {
          x: 'Team D',
          y: [5, 9],
        },
      ],
    },
  ])

  return defineApexchartsProps({
    type: 'rangeBar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-amber-400)'],
      title: {
        text: '',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      dataLabels: {
        enabled: true,
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoBarRange" />
</template>
