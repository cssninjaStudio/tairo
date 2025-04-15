<script setup lang="ts">
const demoRadialGauge = reactive(useDemoRadialGauge())

function useDemoRadialGauge() {
  const series = shallowRef([67])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 370,
    series,
    options: {
      title: {
        text: '',
      },
      chart: {
        offsetY: -10,
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '14px',
              color: undefined,
            },
            value: {
              offsetY: 10,
              fontSize: '18px',
              color: undefined,
              formatter: value => `${value} %`,
            },
          },
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ['Median Ratio'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoRadialGauge" />
</template>
