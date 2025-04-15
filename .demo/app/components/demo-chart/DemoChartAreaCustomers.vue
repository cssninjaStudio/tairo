<script setup lang="ts">
const areaCustomers = reactive(useAreaCustomers())

function useAreaCustomers() {
  const series = shallowRef([
    {
      name: 'Returning',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Newcomers',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Abandonned',
      data: [78, 53, 36, 10, 14, 5, 2],
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
        animations: {
          enabled: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-500)', 'var(--color-primary-400)'],
      title: {
        // show: false,
        text: undefined,
        align: 'left',
      },
      legend: {
        show: false,
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
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-09-19T00:00:00.000Z',
          '2020-09-20T01:30:00.000Z',
          '2020-09-21T02:30:00.000Z',
          '2020-09-22T03:30:00.000Z',
          '2020-09-23T04:30:00.000Z',
          '2020-09-24T05:30:00.000Z',
          '2020-09-25T06:30:00.000Z',
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
  <LazyAddonApexcharts v-bind="areaCustomers" />
</template>
