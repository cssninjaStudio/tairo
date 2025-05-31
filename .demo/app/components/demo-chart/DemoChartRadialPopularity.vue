<script setup lang="ts">
const radialPopularity = reactive(useRadialPopularity())

function useRadialPopularity() {
  const series = shallowRef([67])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 225,
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
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--color-muted-400)',
              offsetY: 80,
            },
            value: {
              offsetY: 40,
              fontSize: '18px',
              fontFamily: 'var(--font-sans)',
              fontWeight: '500',
              color: undefined,
              formatter: value => `${value} %`,
            },
          },
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ['(30 days)'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialPopularity" />
</template>
