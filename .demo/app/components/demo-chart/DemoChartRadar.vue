<script setup lang="ts">
const demoRadar = reactive(useDemoRadar())

function useDemoRadar() {
  const series = shallowRef([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ])

  return defineApexchartsProps({
    type: 'radar',
    height: 350,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-success-500)', 'var(--color-info-500)', 'var(--color-destructive-500)'],
      title: {
        text: '',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
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
          <span>Radar Chart</span>
        </BaseHeading>
      </div>
      <LazyAddonApexcharts v-bind="demoRadar" />
    </BaseCard>
  </div>
</template>
