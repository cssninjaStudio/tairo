<script setup lang="ts">
const demoRadialGauge = reactive(useDemoRadialGauge())

function useDemoRadialGauge() {
  const height = 370
  const type = 'radialBar'

  const options = {
    title: {
      text: '',
    },
    chart: {
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: ['var(--color-chart-base)'],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '14px',
            color: undefined,
          },
          value: {
            offsetY: 10,
            fontSize: '18px',
            color: undefined,
            formatter: asPercent,
          },
        },
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['Median Ratio'],
  }

  const series = shallowRef([67])

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
          <span>Radial Gauge</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoRadialGauge" />
    </BaseCard>
  </div>
</template>
