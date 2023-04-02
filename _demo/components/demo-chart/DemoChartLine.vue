<script setup lang="ts">
const demoLine = reactive(useDemoLine())

function useDemoLine() {
  const { primary } = useTailwindColors()
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
    colors: [primary.value],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
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
      ],
    },
  }

  const series = ref([
    {
      name: 'Sales',
      data: [105, 414, 357, 511, 497, 621, 695, 912, 748],
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
          <span>Line Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoLine" />
    </BaseCard>
  </div>
</template>
