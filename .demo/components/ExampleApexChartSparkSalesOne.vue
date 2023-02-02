<script setup lang="ts">
const { primary, title, subtitle } = useTailwindColors()

/**
 * Use `defineAsyncComponent` to lazy load the component only when needed
 * This improves the initial load time of the page when the component is not needed
 *
 * Using a ref to track when the component is loaded is not necessary, but it's
 * a good practice to be able to show a loading state while the component is loading.
 */
const apexLoaded = ref(false)
const LazyVueApexCharts = defineAsyncComponent({
  loader: () =>
    import('vue3-apexcharts').then((module) => {
      nextTick(() => {
        apexLoaded.value = true
      })
      return module.default
    }),
})

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */

const randomizeArray = function (arg: number[]) {
  const array = arg.slice()
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const sparklineData = [
  472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358,
  271, 932, 534, 615, 278, 546, 435, 192, 465,
]

const spark = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [primary.value],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'Total Sales',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: 'Total Sales',
    offsetX: 5,
    style: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: '500',
      color: subtitle.value,
      cssClass: 'apexcharts-spark-title',
    },
  },
  subtitle: {
    text: '9,374',
    offsetX: 5,
    offsetY: 15,
    style: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '22px',
      fontWeight: '500',
      color: title.value,
      cssClass: 'apexcharts-spark-subtitle',
    },
  },
} as const
</script>

<template>
  <div>
    <BasePlaceload class="w-[90%] mx-auto h-32 my-4" v-if="!apexLoaded" />
    <ClientOnly>
      <LazyVueApexCharts
        v-show="apexLoaded"
        :height="spark.chart.height"
        :type="spark.chart.type"
        :options="spark"
        :series="spark.series"
      />
    </ClientOnly>
  </div>
</template>
