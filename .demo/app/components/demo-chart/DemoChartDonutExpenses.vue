<script setup lang="ts">
const demoDonut = reactive(useDemoDonut())

function useDemoDonut() {
  const series = ref([1228, 423, 892, 629, 142])

  return defineApexchartsProps({
    type: 'donut',
    height: 290,
    series,
    options: {
      title: {
        text: '',
      },
      labels: ['Bills', 'Health', 'Education', 'Food', 'Other'],
      colors: ['var(--color-chart-base)', 'var(--color-violet-600)', 'var(--color-violet-700)', 'var(--color-violet-800)', 'var(--color-violet-900)'],
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
          formatter: value => formatPrice(value),
        },
      },
    },
  })
}
</script>

<template>
  <div class="relative">
    <LazyAddonApexcharts v-bind="demoDonut" />
  </div>
</template>
