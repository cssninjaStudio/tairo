<script setup lang="ts">
const demoPie = reactive(useDemoPie())

function useDemoPie() {
  const { primary, info, success, warning, danger } = useTailwindColors()
  const height = 335
  const type = 'pie'

  const options = {
    dataLabels: {
      style: {
        fontSize: '12px',
        weight: 500,
      },
    },
    colors: [primary.value, success.value, info.value, danger.value],
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 315,
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

  const series = ref([44, 55, 13, 43, 22])

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
      <AddonApexcharts v-bind="demoPie" />
    </BaseCard>
  </div>
</template>
