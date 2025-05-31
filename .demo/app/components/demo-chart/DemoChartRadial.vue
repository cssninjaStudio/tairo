<script setup lang="ts">
const demoRadial = reactive(useDemoRadial())

function useDemoRadial() {
  const series = shallowRef([70])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 265,
    series,
    options: {
      title: {
        text: '',
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
          dataLabels: {
            value: {
              fontSize: '16px',
              offsetY: 5,
            },
          },
        },
      },
      labels: ['Power'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoRadial" />
</template>
