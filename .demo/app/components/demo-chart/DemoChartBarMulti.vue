<script setup lang="ts">
const demoBarMulti = reactive(useDemoBarMulti())

function useDemoBarMulti() {
  const series = shallowRef([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          // endingShape: 'rounded',
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      title: {
        text: '',
        align: 'left',
      },
      tooltip: {
        y: {
          formatter: value => `${formatPrice(value)}k`,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoBarMulti" />
</template>
