<script setup lang="ts">
const demoTimeline = reactive(useDemoTimeline())

function useDemoTimeline() {
  const series = shallowRef([
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime(),
          ],
          fillColor: 'var(--color-chart-base)',
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: 'var(--color-primary-300)',
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime(),
          ],
          fillColor: 'var(--color-amber-400)',
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
          fillColor: 'var(--color-indigo-400)',
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime(),
          ],
          fillColor: 'var(--color-teal-400)',
        },
      ],
    },
  ])

  return defineApexchartsProps({
    type: 'rangeBar',
    height: 280,
    series,
    options: {
      title: {
        text: '',
        align: 'left',
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [
        'var(--color-chart-base)',
        'var(--color-primary-300)',
        'var(--color-amber-400)',
        'var(--color-indigo-400)',
        'var(--color-teal-400)',
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter(val: string, opts: any) {
          const label = opts.w.globals.labels[opts.dataPointIndex]
          const a = Number(val[0])
          const b = Number(val[1])
          const diff = b - a
          return `${label}: ${diff}${diff > 1 ? 'D' : 'd'}`
        },
        style: {
          colors: ['#f3f4f5', '#fff'],
          fontWeight: 400,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        show: false,
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 1,
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="demoTimeline" />
</template>
