<script setup lang="ts">
const radialEvolution = reactive(useRadialEvolution())

function useRadialEvolution() {
  const series = shallowRef([54])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 220,
    series,
    options: {
      colors: ['var(--color-chart-base)'],
      title: {
        text: '',
        align: 'left',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              offsetY: 15,
              fontSize: '13px',
              fontFamily: 'var(--font-alt)',
              color: 'var(--color-muted-400)',
            },
            value: {
              color: 'var(--color-muted-400)',
              offsetY: -20,
              fontSize: '16px',
              fontFamily: 'var(--font-sans)',
              fontWeight: '500',
            },
            total: {
              formatter: () => '(30 days)',
            },
          },
        },
      },
      labels: ['Median Ratio'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="radialEvolution" />
</template>
