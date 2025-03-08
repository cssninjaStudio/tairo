<script setup lang="ts">
const demoDonut = reactive(useDemoDonut())

function useDemoDonut() {
  const height = 290
  const type = 'donut'

  const options = {
    title: {
      text: '',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['var(--color-chart-base)', 'var(--color-primary-300)', 'var(--color-amber-400)', 'var(--color-indigo-400)', 'var(--color-teal-400)'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
            toolbar: {
              show: false,
            },
          },
          legend: {
            position: 'top',
          },
        },
      },
    ],
    legend: {
      position: 'right',
      horizontalAlign: 'center',
    },
  }

  const series = shallowRef([44, 55, 41, 17, 15])

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
          <span>Donut Chart</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoDonut" />
    </BaseCard>
  </div>
</template>
