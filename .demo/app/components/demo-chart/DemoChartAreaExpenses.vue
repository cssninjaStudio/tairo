<script setup lang="ts">
const areaExpenses = reactive(useAreaExpenses())

function useAreaExpenses() {
  const series = shallowRef([
    {
      name: 'Cash Expenses',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Card Expenses',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ])

  function generateDayWiseTimeSeries(s: number, count: number) {
    const values = [
      [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
    ]
    let i = 0
    const series = []
    let x = new Date('11 Nov 2024').getTime()
    while (i < count) {
      series.push([x, values[s]![i]!])
      x += 86400000
      i++
    }
    return series
  }

  return defineApexchartsProps({
    type: 'area',
    height: 250,
    series,
    options: {
      chart: {
        foreColor: '#999',
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-info-500)', 'var(--color-success-500)'],
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      title: {
        text: '',
        align: 'left',
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        strokeColors: '#fff',
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6,
        },
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          offsetX: 0,
          offsetY: -5,
        },
        tooltip: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        padding: {
          left: -5,
          right: 5,
        },
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      fill: {
        type: 'solid',
        opacity: 0.7,
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="areaExpenses" />
</template>
