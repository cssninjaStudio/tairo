<script setup lang="ts">
const demoTimeline = reactive(useDemoTimeline())

function useDemoTimeline() {
  const { primary, info, success, warning, danger } = useTailwindColors()
  const type = 'rangeBar'
  const height = 280

  const options = {
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
      primary.value,
      info.value,
      success.value,
      warning.value,
      danger.value,
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
      formatter: function (val: string, opts: any) {
        const label = opts.w.globals.labels[opts.dataPointIndex]
        const a = val[0]
        const b = val[1]
        const diff = 0
        return label + ': ' + diff + (diff > 1 ? 'D' : 'd')
      },
      style: {
        colors: ['#f3f4f5', '#fff'],
        weight: 400,
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
  }

  const series = ref([
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime(),
          ],
          fillColor: primary.value,
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: info.value,
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime(),
          ],
          fillColor: success.value,
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
          fillColor: warning.value,
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime(),
          ],
          fillColor: danger.value,
        },
      ],
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
    <BaseCard class="p-6">
      <!-- Title -->
      <div class="mb-6">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Timeline Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoTimeline" />
    </BaseCard>
  </div>
</template>
