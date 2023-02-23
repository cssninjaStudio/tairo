<script setup lang="ts">
const barSocialChannels = reactive(useBarSocialChannels())

function useBarSocialChannels() {
  const { primary, subtitle, success } = useTailwindColors()
  const type = 'bar'
  const height = 235

  const options = {
    chart: {
      toolbar: {
        show: false,
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
    colors: [success.value, primary.value, subtitle.value],
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
  } as const

  const series = ref([
    {
      name: 'New Users',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Renewals',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
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
              Facebook
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
              Twitter
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
              Linkedin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto w-full">
      <TairoApexcharts v-bind="barSocialChannels" />
    </div>
  </div>
</template>
