<script setup lang="ts">
const props = withDefaults(defineProps<{
  series?: any[]
}>(), {
  series: () => [],
})

const series = toRef(props, 'series')

const areaStockPrice = reactive(useAreaStockPrice())

function useAreaStockPrice() {
  return defineApexchartsProps({
    type: 'area',
    height: 390,
    series,
    options: {
      chart: {
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
          '2023-01-01T00:00:00.000Z',
          '2023-02-01T00:00:00.000Z',
          '2023-03-01T00:00:00.000Z',
          '2023-04-01T00:00:00.000Z',
          '2023-05-01T00:00:00.000Z',
          '2023-06-01T00:00:00.000Z',
          '2023-07-01T00:00:00.000Z',
          '2023-08-01T00:00:00.000Z',
          '2023-09-01T00:00:00.000Z',
          '2023-10-01T00:00:00.000Z',
          '2023-11-01T00:00:00.000Z',
          '2023-12-01T00:00:00.000Z',
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
  <LazyAddonApexcharts v-bind="areaStockPrice" />
</template>
