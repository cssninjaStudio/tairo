<script setup lang="ts">
const radialSmallThree = reactive(useRadialSmallThree())

function useRadialSmallThree() {
  const series = shallowRef([84])

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
      colors: ['var(--color-destructive-500)'],
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
  <LazyAddonApexcharts v-bind="radialSmallThree" />
</template>
