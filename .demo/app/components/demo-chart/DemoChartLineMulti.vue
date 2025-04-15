<script setup lang="ts">
const demoLineMulti = reactive(useDemoLineMulti())

function useDemoLineMulti() {
  const type = 'line'
  const height = 280

  const series = shallowRef([
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ])

  return defineApexchartsProps({
    type,
    height,
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
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        tooltipHoverFormatter(val: string, opts: any) {
          return (
            `${val
            } - ${
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
            }`
          )
        },
        position: 'top',
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: value => `${value} (mins)`,
            },
          },
          {
            title: {
              formatter: value => `${value} per session`,
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoLineMulti" />
</template>
