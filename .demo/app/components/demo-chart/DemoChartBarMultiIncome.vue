<script setup lang="ts">
const demoBarMulti = reactive(useDemoBarMulti())

function useDemoBarMulti() {
  const series = ref([
    {
      name: 'Net Profit',
      data: [2134, 1932, 2141, 3455, 1242, 4212, 2342, 1983, 2421],
    },
    {
      name: 'Revenue',
      data: [8231, 7232, 9233, 8320, 7313, 8923, 9331, 8912, 9218],
    },
    {
      name: 'Free Cash Flow',
      data: [1523, 932, 2189, 1732, 1632, 1874, 1947, 2420, 2312],
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
      colors: ['var(--color-chart-base)', 'var(--color-violet-200)', 'var(--color-violet-800)'],
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
          text: 'Amount',
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
          formatter: value => formatPrice(value),
        },
      },
    },
  })
}
</script>

<template>
  <div class="relative">
    <LazyAddonApexcharts v-bind="demoBarMulti" />
  </div>
</template>
