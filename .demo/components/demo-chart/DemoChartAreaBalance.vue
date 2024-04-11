<script setup lang="ts">
const demoAreaBalance = reactive(useDemoAreaBalance())

function useDemoAreaBalance() {
  const { primary } = useTailwindColors()
  const type = 'area'
  const height = 250

  const options = {
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
    colors: [primary.value],
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
        formatter: (val: number) => `$${val}`,
      },
    },
  }

  const series = ref([
    {
      name: 'Balance',
      data: [3143.16, 4298.49, 2876.54, 5183.76, 4232.87, 10876.56, 9543.12],
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
  <AddonApexcharts v-bind="demoAreaBalance" />
</template>
