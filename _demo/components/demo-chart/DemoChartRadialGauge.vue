<script setup lang="ts">
const demoRadialGauge = reactive(useDemoRadialGauge())

function useDemoRadialGauge() {
  const { primary } = useTailwindColors()
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
    colors: [primary.value],
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
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['Median Ratio'],
  }

  const series = ref([67])

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
