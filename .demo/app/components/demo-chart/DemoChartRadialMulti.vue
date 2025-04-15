<script setup lang="ts">
const demoRadialMulti = reactive(useDemoRadialMulti())

function useDemoRadialMulti() {
  const series = shallowRef([44, 55, 67, 83])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 295,
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
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)', 'var(--color-indigo-400)'],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
              offsetY: 5,
            },
            total: {
              show: true,
              label: 'Total',
              formatter: (/* value: string */) => {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return '249'
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoRadialMulti" />
</template>
