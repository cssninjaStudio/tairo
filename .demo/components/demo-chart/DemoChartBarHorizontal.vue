<script setup lang="ts">
const demoBarHorizontal = reactive(useDemoBarHorizontal())

function useDemoBarHorizontal() {
  const { primary } = useTailwindColors()
  const type = 'bar'
  const height = 280

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    title: {
      text: '',
      align: 'left',
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  }

  const series = ref([
    {
      name: 'Spaceships',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
          <span>Horizontal Bar</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoBarHorizontal" />
    </BaseCard>
  </div>
</template>
