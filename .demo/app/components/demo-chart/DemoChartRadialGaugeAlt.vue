<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

const demoRadialGaugeAlt = reactive(useDemoRadialGaugeAlt())

function useDemoRadialGaugeAlt() {
  const series = shallowRef([76])

  return defineApexchartsProps({
    type: 'radialBar',
    height: 295,
    series,
    options: {
      title: {
        text: '',
      },
      chart: {
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['var(--color-chart-base)'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: 2,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      labels: ['Average Results'],
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
          <span>Gauge Chart</span>
        </BaseHeading>
      </div>
      <LazyAddonApexcharts v-bind="demoRadialGaugeAlt" />
    </BaseCard>
  </div>
</template>
