<script setup lang="ts">
const barProfit = reactive(useBarProfit())

function useBarProfit() {
  const series = shallowRef([
    {
      name: 'Expenses',
      data: [200.31, 309.12, 427.89, 438.82, 354.62, 339.29, 257.38, 231.21, 218.29, 231.21, 259.29, 279.21],
    },
  ])

  return defineApexchartsProps({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '80%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: value => `${value} %`,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: [
          'Jan 2024',
          'Feb 2024',
          'Mar 2024',
          'Apr 2024',
          'May 2024',
          'Jun 2024',
          'Jul 2024',
          'Aug 2024',
          'Sep 2024',
          'Oct 2024',
          'Nov 2024',
          'Dec 2024',
        ],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: value => formatPrice(value),
        },
      },
      colors: ['var(--color-chart-base)'],
      title: {
        text: '',
        align: 'left',
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="barProfit" />
</template>
