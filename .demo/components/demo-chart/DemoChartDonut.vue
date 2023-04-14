<script setup lang="ts">
const demoDonut = reactive(useDemoDonut())

function useDemoDonut() {
  const { primary, info, success, danger } = useTailwindColors()
  const height = 290
  const type = 'donut'

  const options = {
    title: {
      text: '',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: [primary.value, success.value, info.value, danger.value],
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

  const series = ref([44, 55, 41, 17, 15])

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
      <AddonApexcharts v-bind="demoDonut" />
    </BaseCard>
  </div>
</template>
