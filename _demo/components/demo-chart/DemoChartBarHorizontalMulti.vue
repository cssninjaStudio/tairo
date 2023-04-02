<script setup lang="ts">
const demoBarHorizontalMulti = reactive(useDemoBarHorizontalMulti())

function useDemoBarHorizontalMulti() {
  const { primary, info } = useTailwindColors()
  const type = 'bar'
  const height = 280

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, info.value],
    title: {
      text: '',
      align: 'left',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
  }

  const series = ref([
    {
      name: 'Completed',
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: 'Pending',
      data: [53, 32, 33, 52, 13, 44, 32],
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
          <span>Horizontal Multiple</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoBarHorizontalMulti" />
    </BaseCard>
  </div>
</template>
