<script setup lang="ts">
const demoAreaMulti = reactive(useDemoAreaMulti())

function useDemoAreaMulti() {
  const series = shallowRef([
    {
      name: 'Completed',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Pending',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-amber-300)'],
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        position: 'top',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)', 'var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.75,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoAreaMulti" />
</template>
