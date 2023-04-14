<script setup lang="ts">
const demoBubble = reactive(useDemoBubble())

function useDemoBubble() {
  const { primary, info, success, danger } = useTailwindColors()
  const type = 'bubble'
  const height = 280

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value, danger.value],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    title: {
      text: '',
    },
    xaxis: {
      tickAmount: 12,
      type: 'category',
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
      name: 'Bubble1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ])

  function generateData(
    baseval: number,
    count: number,
    yrange: { min: number; max: number },
  ) {
    let i = 0
    const _series = []
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

      _series.push([x, y, z])
      baseval += 86400000
      i++
    }
    return _series
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
          <span>Bubble Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoBubble" />
    </BaseCard>
  </div>
</template>
