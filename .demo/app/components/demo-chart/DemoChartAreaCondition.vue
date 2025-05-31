<script setup lang="ts">
const areaCondition = reactive(useAreaCondition())

function useAreaCondition() {
  const series = shallowRef([
    {
      name: 'Condition (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
    series,
    options: {
      chart: {
        offsetX: 20,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      colors: ['var(--color-chart-base)'],
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="areaCondition" />
</template>
