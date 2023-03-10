<script setup lang="ts">
const areaSubscriptions = reactive(useAreaSubscriptions())

function useAreaSubscriptions() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 180

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary.value, success.value, info.value],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: 'smooth',
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: [
      {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        labels: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
        },
      },
    ],
    tooltip: {
      x: {
        show: false,
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

  const series = ref([
    {
      name: 'New Users',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Renewals',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Resigns',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ])

  return { type, height, options, series }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div
      class="text-center mb-6 p-6 border-b border-muted-200 dark:border-muted-700"
    >
      <div
        class="w-full flex items-center divide-x divide-muted-200 dark:divide-muted-700"
      >
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              314
            </h4>
            <p
              class="font-sansfont-semibold text-[0.65rem] uppercase text-muted-400"
            >
              New
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              611
            </h4>
            <p
              class="font-sans font-semibold text-[0.65rem] uppercase text-muted-400"
            >
              Renewals
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
            >
              49
            </h4>
            <p
              class="font-sansfont-semibold text-[0.65rem] uppercase text-muted-400"
            >
              Resigns
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto w-full">
      <AddonApexcharts v-bind="areaSubscriptions" />
    </div>
  </div>
</template>
