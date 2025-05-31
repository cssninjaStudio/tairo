<script setup lang="ts">
const radialSmallOne = reactive(useRadialSmallOne())

function useRadialSmallOne() {
  const series = shallowRef([31])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 75,
    series,
    options: {
      chart: {
        offsetY: -10,
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
            size: '50%',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: [''],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialSmallOne" />
</template>
