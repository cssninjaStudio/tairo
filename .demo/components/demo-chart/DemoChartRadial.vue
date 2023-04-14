<script setup lang="ts">
const demoRadial = reactive(useDemoRadial())

function useDemoRadial() {
  const { primary } = useTailwindColors()
  const height = 265
  const type = 'radialBar'

  const options = {
    title: {
      text: '',
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
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
  }

  const series = ref([70])

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
          <span>Radial Bar</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoRadial" />
    </BaseCard>
  </div>
</template>
