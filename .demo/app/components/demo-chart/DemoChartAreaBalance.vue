<script setup lang="ts">
const demoAreaBalance = reactive(useDemoAreaBalance())

function useDemoAreaBalance() {
  const series = shallowRef([
    {
      name: 'Balance',
      data: [3143.16, 4298.49, 2876.54, 5183.76, 4232.87, 10876.56, 9543.12],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 250,
    series,
    options: {
      chart: {
        animations: {
          enabled: false,
        },
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
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
      },
      colors: ['var(--color-chart-base)'],
      legend: {
        show: false,
        position: 'top',
      },
      grid: {
        show: false,
        padding: {
          left: -10,
          right: 0,
          bottom: 10,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-09-19T00:00:00.000Z',
          '2022-09-20T01:30:00.000Z',
          '2022-09-21T02:30:00.000Z',
          '2022-09-22T03:30:00.000Z',
          '2022-09-23T04:30:00.000Z',
          '2022-09-24T05:30:00.000Z',
          '2022-09-25T06:30:00.000Z',
        ],
      },
      yaxis: {
        labels: {
          show: false,
          offsetX: -15,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
        y: {
          formatter: value => formatPrice(value),
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.75,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoAreaBalance" />
</template>
