<script setup lang="ts">
const areaInterviews = reactive(useAreaInterviews())

function useAreaInterviews() {
  const series = shallowRef([
    {
      name: 'Interviews',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return defineApexchartsProps({
    type: 'area',
    height: 280,
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
      colors: ['var(--color-chart-base)'],
      title: {
        text: undefined,
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
  <LazyAddonApexcharts v-bind="areaInterviews" />
</template>
