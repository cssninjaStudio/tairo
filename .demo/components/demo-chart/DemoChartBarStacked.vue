<script setup lang="ts">
const demoBarStacked = reactive(useDemoBarStacked())

function useDemoBarStacked() {
  const { primary, info, success, danger } = useTailwindColors()
  const type = 'bar'
  const height = 280

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      style: {
        colors: ['#fff'],
        fontWeight: 300,
      },
    },
    colors: [primary.value, success.value, info.value, danger.value],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'top',
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
      ],
    },
    title: {
      text: '',
      align: 'left',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    fill: {
      opacity: 1,
    },
  }

  const series = ref([
    {
      name: 'Desktops',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Phones',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'Tablets',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'Hybrid',
      data: [21, 7, 25, 13, 22, 8],
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
          <span>Stacked Bars</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoBarStacked" />
    </BaseCard>
  </div>
</template>
