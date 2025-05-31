<script setup lang="ts">
const incomeHistory = reactive(useAreaIncomeHistory())

function useAreaIncomeHistory() {
  const series = shallowRef([
    {
      name: 'Expenses',
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45],
    },
    {
      name: 'Earnings',
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 380,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-indigo-600)', 'var(--color-amber-600)'],
      title: {
        text: '',
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
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-10-19T00:00:00.000Z',
          '2022-10-20T01:30:00.000Z',
          '2022-10-21T02:30:00.000Z',
          '2022-10-22T03:30:00.000Z',
          '2022-10-23T04:30:00.000Z',
          '2022-10-24T05:30:00.000Z',
          '2022-10-25T06:30:00.000Z',
          '2022-10-26T06:30:00.000Z',
          '2022-10-27T06:30:00.000Z',
          '2022-10-28T06:30:00.000Z',
        ],
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
          opacityTo: 0.1,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="incomeHistory" />
</template>
