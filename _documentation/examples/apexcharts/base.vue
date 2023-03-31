<template>
  <div class="w-full">
    <BaseCard class="relative p-6">
      <div class="mb-6">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>BTC Price Chart</span>
        </BaseHeading>
      </div>

      <AddonApexcharts v-bind="areaBtcPrice" />
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
const areaBtcPrice = reactive(useAreaBtcPrice())

// You can create your own composable function to handle the logic of your chart
function useAreaBtcPrice() {
  const { primary, info, success } = useTailwindColors()

  const type = 'area'
  const height = 350

  const options = shallowRef({
    chart: {
      foreColor: '#999',
      stacked: true,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
    },
    colors: [success.value, primary.value, info.value],
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
      strokeColor: '#fff',
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
      show: true,
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
      y: {
        formatter: function (val: number) {
          return val + '%'
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    fill: {
      type: 'solid',
      fillOpacity: 0.7,
    },
  })

  const series = ref([
    {
      name: 'Expected',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Real',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ])

  function generateDayWiseTimeSeries(s: number, count: number) {
    const values = [
      [0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7, 0.2, 0.7, 0.5],
      [0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5, 0.2, 0.6, 2],
    ]
    let i = 0
    const series = []
    let x = new Date('11 Nov 2022').getTime()
    while (i < count) {
      series.push([x, values[s][i]])
      x += 86400000
      i++
    }
    return series
  }

  return {
    type,
    height,
    options,
    series,
  }
}
</script>
