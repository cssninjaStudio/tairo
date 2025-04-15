<script setup lang="ts">
const radialSmallTwo = reactive(useRadialSmallTwo())

function useRadialSmallTwo() {
  const series = shallowRef([53])

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
      colors: ['var(--color-success-500)'],
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
  <LazyAddonApexcharts v-bind="radialSmallTwo" />
</template>
