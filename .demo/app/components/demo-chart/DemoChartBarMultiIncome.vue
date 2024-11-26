<script setup lang="ts">
const demoBarMulti = reactive(useDemoBarMulti())

function useDemoBarMulti() {
  const { primary, info, success, warning } = useTailwindColors()
  const type = 'bar'
  const height = 280

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    colors: [primary.value, success.value, info.value, warning.value],
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
        formatter: asDollar,
      },
    },
  }

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

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="relative">
    <AddonApexcharts v-bind="demoBarMulti" />
  </div>
</template>
