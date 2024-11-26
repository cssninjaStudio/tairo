<script setup lang="ts">
const demoDonut = reactive(useDemoDonut())

function useDemoDonut() {
  const { primary, info, success, warning, danger } = useTailwindColors()
  const height = 290
  const type = 'donut'

  const options = {
    title: {
      text: '',
    },
    labels: ['Bills', 'Health', 'Education', 'Food', 'Other'],
    colors: [
      primary.value,
      success.value,
      info.value,
      danger.value,
      warning.value,
    ],
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
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toFixed(2)}`,
      },
    },
  }

  const series = ref([1228, 423, 892, 629, 142])

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
    <AddonApexcharts v-bind="demoDonut" />
  </div>
</template>
