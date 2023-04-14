<script setup lang="ts">
const demoLineMulti = reactive(useDemoLineMulti())

function useDemoLineMulti() {
  const { primary, info, success } = useTailwindColors()
  const type = 'line'
  const height = 280

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value],
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
      tooltipHoverFormatter: function (val: string, opts: any) {
        return (
          val +
          ' - ' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ''
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
            formatter: asMinutes,
          },
        },
        {
          title: {
            formatter: perSession,
          },
        },
        {
          title: {
            formatter: (value: any) => `${value}`,
          },
        },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  }

  const series = [
    {
      name: 'Session Duration',
      data: ref([45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]),
    },
    {
      name: 'Page Views',
      data: ref([35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]),
    },
    {
      name: 'Total Visits',
      data: ref([87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]),
    },
  ]

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
          <span>Line Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoLineMulti" />
    </BaseCard>
  </div>
</template>
