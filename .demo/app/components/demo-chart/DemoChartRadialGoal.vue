<script setup lang="ts">
const radialGoal = reactive(useRadialGoal())

function useRadialGoal() {
  const series = shallowRef([57, 86])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 220,
    series,
    options: {
      chart: {
        offsetY: -10,
        fontFamily: 'var(--font-sans)',
        animations: {
          enabled: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-500)'],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          inverseOrder: true,
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 500,
              offsetY: -10,
            },
            value: {
              show: true,
              fontWeight: 600,
              fontSize: '16px',
              offsetY: -5,
            },
            total: {
              show: true,
              fontSize: '14px',
              fontWeight: 500,
            },
          },
          hollow: {
            margin: 15,
            size: '75%',
          },
          track: {
            strokeWidth: '100%',
          },
        },
      },

      stroke: {
        lineCap: 'round',
      },
      labels: ['Efficiency', 'Productivity'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialGoal" />
</template>
