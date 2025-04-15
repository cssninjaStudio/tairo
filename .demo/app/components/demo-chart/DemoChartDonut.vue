<script setup lang="ts">
const demoDonut = reactive(useDemoDonut())

function useDemoDonut() {
  const series = shallowRef([44, 55, 41, 17, 15])

  return defineApexchartsProps({
    type: 'donut',
    height: 290,
    series,
    options: {
      title: {
        text: '',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)', 'var(--color-indigo-400)', 'var(--color-teal-400)'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
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
  <LazyAddonApexcharts v-bind="demoDonut" />
</template>
