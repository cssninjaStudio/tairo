<script setup lang="ts">
const { primary, title, subtitle } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */
const type = 'area'
const height = 130

const options = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
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

const series = ref([
  {
    name: 'Total Sales',
    data: randomizeArray([
      472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358,
      271, 932, 534, 615, 278, 546, 435, 192, 465,
    ]),
  },
])

let timeout: any

onMounted(() => {
  radomizeTimeout()
})
onBeforeUnmount(() => {
  clearTimeout(timeout)
})

function radomizeTimeout() {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    series.value[0].data.push(randomNumber(200, 600))
    series.value[0].data.shift()
    radomizeTimeout()
  }, 2000)
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomizeArray (arg: number[]) {
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
</script>

<template>
  <div>
    <BasePlaceload class="w-[calc(100%-32px)] m-4" v-if="!isLoaded" :style="{ height: `${height - 32}px` }" />
    <ClientOnly>
      <LazyApexCharts
        v-show="isLoaded"
        v-bind="{
          height,
          type,
          options,
          series,
        }"
      />
    </ClientOnly>
  </div>
</template>
