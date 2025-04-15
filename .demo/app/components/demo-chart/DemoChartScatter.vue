<script setup lang="ts">
const demoScatter = reactive(useDemoScatter())

function useDemoScatter() {
  const series = shallowRef([
    {
      name: 'Team 1',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Team 2',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Team 3',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        },
      ),
    },
    {
      name: 'Team 4',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        10,
        {
          min: 10,
          max: 60,
        },
      ),
    },
  ])

  function generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: number, max: number },
  ) {
    let i = 0
    const series = []
    while (i < count) {
      const y
        = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      series.push([baseval, y])
      baseval += 86400000
      i++
    }
    return series
  }

  return defineApexchartsProps({
    type: 'scatter',
    height: 280,
    series,
    options: {
      title: {
        text: '',
      },
      chart: {
        zoom: {
          type: 'xy',
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)', 'var(--color-indigo-400)'],
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        max: 70,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoScatter" />
</template>
