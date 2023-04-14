<script setup lang="ts">
const demoBarRange = reactive(useDemoBarRange())

function useDemoBarRange() {
  const { primary, info, success, warning } = useTailwindColors()
  const type = 'rangeBar'
  const height = 280

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value, warning.value],
    title: {
      text: '',
      align: 'left',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    dataLabels: {
      enabled: true,
    },
  }

  const series = ref([
    {
      name: 'Corporate',
      data: [
        {
          x: 'Team A',
          y: [1, 5],
        },
        {
          x: 'Team B',
          y: [4, 6],
        },
        {
          x: 'Team C',
          y: [5, 8],
        },
        {
          x: 'Team D',
          y: [3, 11],
        },
      ],
    },
    {
      name: 'Service',
      data: [
        {
          x: 'Team A',
          y: [2, 6],
        },
        {
          x: 'Team B',
          y: [1, 3],
        },
        {
          x: 'Team C',
          y: [7, 8],
        },
        {
          x: 'Team D',
          y: [5, 9],
        },
      ],
    },
  ])

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
          <span>Range Column</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoBarRange" />
    </BaseCard>
  </div>
</template>
