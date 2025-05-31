<script setup lang="ts">
const areaSubscriptions = reactive(useAreaSubscriptions())

function useAreaSubscriptions() {
  const series = shallowRef([
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

  return defineApexchartsProps({
    type: 'area',
    height: 240,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ['var(--chart-color-base)', 'var(--color-indigo-500)', 'var(--color-primary-400)'],
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
        // lines: {
        //   show: false,
        // },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: [
        {
          // y: 0,
          // offsetX: 0,
          // offsetY: 0,
          labels: {
            show: false,
          },
          // padding: {
          //   left: 0,
          //   right: 0,
          // },
        },
      ],
      tooltip: {
        x: {
          show: false,
          format: 'dd/MM/yy HH:mm',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.75,
        },
      },
    },
  })
}
</script>

<template>
  <div class="flex h-full flex-col">
    <div
      class="border-muted-300 dark:border-muted-800 mb-6 border-b p-6 text-center"
    >
      <div
        class="divide-muted-200 dark:divide-muted-800 flex w-full items-center divide-x"
      >
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
            >
              314
            </h4>
            <p
              class="font-sans font-semibold text-muted-400 text-[0.65rem] uppercase"
            >
              New
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
            >
              611
            </h4>
            <p
              class="font-sans font-semibold text-muted-400 text-[0.65rem] uppercase"
            >
              Renewals
            </p>
          </div>
        </div>
        <!-- Item -->
        <div class="flex-1">
          <div class="flex flex-col px-4 text-center">
            <h4
              class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
            >
              49
            </h4>
            <p
              class="font-sans font-semibold text-muted-400 text-[0.65rem] uppercase"
            >
              Resigns
            </p>
          </div>
        </div>
      </div>
    </div>
    <LazyAddonApexcharts v-bind="areaSubscriptions" class="mt-auto w-full" />
  </div>
</template>
