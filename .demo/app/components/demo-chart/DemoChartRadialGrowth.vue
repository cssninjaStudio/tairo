<script setup lang="ts">
const radialGrowth = reactive(useRadialGrowth())

function useRadialGrowth() {
  const series = shallowRef([65])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 180,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        fontFamily: 'var(--font-sans)',
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '75%',
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '0.7rem',
              fontWeight: 400,
              offsetY: -10,
            },
            value: {
              show: true,
              fontWeight: 600,
              fontSize: '16px',
              offsetY: -5,
            },
          },
        },
      },
      labels: ['Growth'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialGrowth" />
</template>
