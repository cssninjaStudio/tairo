<script setup lang="ts">
const radialSalesRevenue = reactive(useRadialSalesRevenue())

function useRadialSalesRevenue() {
  const series = shallowRef([65])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 155,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
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
              show: false,
              fontSize: '12px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              offsetY: 5,
            },
            value: {
              show: true,
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              offsetY: 5,
            },
          },
        },
      },
      labels: ['Progress'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialSalesRevenue" />
</template>
