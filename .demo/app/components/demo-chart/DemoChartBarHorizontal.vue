<script setup lang="ts">
const demoBarHorizontal = reactive(useDemoBarHorizontal())

function useDemoBarHorizontal() {
  const series = shallowRef([
    {
      name: 'Spaceships',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ])

  return defineApexchartsProps({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
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
    },
  })
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
      <LazyAddonApexcharts v-bind="demoBarHorizontal" />
    </BaseCard>
  </div>
</template>
