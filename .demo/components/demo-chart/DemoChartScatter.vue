<script setup lang="ts">
const demoScatter = reactive(useDemoScatter())

function useDemoScatter() {
  const { primary, info, success, danger } = useTailwindColors()
  const type = 'scatter'
  const height = 280

  const options = {
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
    colors: [primary.value, success.value, info.value, danger.value],
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
  }

  const series = ref([
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
    {
      name: 'Team 5',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
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
    yrange: { min: number; max: number },
  ) {
    let i = 0
    const series = []
    while (i < count) {
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      series.push([baseval, y])
      baseval += 86400000
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
          <span>Scatter Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoScatter" />
    </BaseCard>
  </div>
</template>
