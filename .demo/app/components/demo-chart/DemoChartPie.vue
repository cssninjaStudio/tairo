<script setup lang="ts">
const demoPie = reactive(useDemoPie())

function useDemoPie() {
  const series = shallowRef([44, 55, 13, 43, 22])

  return defineApexchartsProps({
    type: 'pie',
    height: 335,
    series,
    options: {
      dataLabels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)', 'var(--color-indigo-400)', 'var(--color-teal-400)'],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 315,
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
      legend: {
        position: 'right',
        horizontalAlign: 'center',
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoPie" />
</template>
