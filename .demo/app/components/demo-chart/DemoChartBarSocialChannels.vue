<script setup lang="ts">
const barSocialChannels = reactive(useBarSocialChannels())

function useBarSocialChannels() {
  const series = shallowRef([
    {
      name: 'New Users',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Renewals',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ])

  return defineApexchartsProps({
    type: 'bar',
    height: 235,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: 'end',
          columnWidth: '60%',
          colors: {
            backgroundBarOpacity: 0.75,
          },
        },
      },
      colors: ['var(--color-chart-base)', 'var(--color-primary-400)'],
      dataLabels: {
        enabled: false,
      },
      noData: {
        text: 'Loading...',
      },
      xaxis: {
        type: 'category',
        tickPlacement: 'on',
        labels: {
          rotate: -45,
          rotateAlways: true,
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
              Facebook
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
              Twitter
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
              Linkedin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto w-full">
      <LazyAddonApexcharts v-bind="barSocialChannels" />
    </div>
  </div>
</template>
