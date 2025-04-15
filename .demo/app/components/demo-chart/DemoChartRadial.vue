<script setup lang="ts">
const demoRadial = reactive(useDemoRadial())

function useDemoRadial() {
  const series = shallowRef([70])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 265,
    series,
    options: {
      title: {
        text: '',
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
          dataLabels: {
            value: {
              fontSize: '16px',
              offsetY: 5,
            },
          },
        },
      },
      labels: ['Power'],
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
          <span>Radial Bar</span>
        </BaseHeading>
      </div>
      <LazyAddonApexcharts v-bind="demoRadial" />
    </BaseCard>
  </div>
</template>
