<script setup lang="ts">
const barTeamEfficiency = reactive(useBarTeamEfficiency())

function useBarTeamEfficiency() {
  const series = shallowRef([
    {
      name: 'Design',
      data: [-26, -15, -13, -14, -9, -12, -7, -10, -4],
    },
    {
      name: 'Development',
      data: [6, 15, 31, 28, 17, 35, 21, 44, 24],
    },
    {
      name: 'Management',
      data: [-35, -29, -34, -44, -25, -22, -18, -17, -29],
    },
  ])

  return defineApexchartsProps({
    type: 'bar',
    height: 380,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-400)', 'var(--color-indigo-500)'],
      legend: {
        show: false,
        position: 'top',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          // endingShape: 'rounded',
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
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
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: value => `${value} hours`,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="barTeamEfficiency" />
</template>
