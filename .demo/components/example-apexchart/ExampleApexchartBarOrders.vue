<script setup lang="ts">
const { primary, success } = useTailwindColors()
const { LazyApexCharts, isLoaded } = useLazyApexCharts()

/**
 * This is example data for the area chart
 * @see https://apexcharts.com/docs/chart-types/area-chart/
 *
 * @note the `as const` is to make sure the type is inlined in the compiled code
 * instead of being a reference to the object in memory.
 */

const type = 'bar'
const height = 210

const series = ref<any[]>([])

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: [primary.value, success.value],
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

// delay the data loading
let timeout: any
let timeout2: any

onMounted(() => {
  timeout = setTimeout(() => {
    series.value.push({
      name: 'Orders',
      data: [
        {
          x: 'Jan',
          y: 322,
        },
        {
          x: 'Feb',
          y: 459,
        },
        {
          x: 'Mar',
          y: 212,
        },
        {
          x: 'Apr',
          y: 345,
        },
        {
          x: 'May',
          y: 111,
        },
        {
          x: 'Jun',
          y: 189,
        },
        {
          x: 'Jul',
          y: 498,
        },
        {
          x: 'Aug',
          y: 612,
        },
        {
          x: 'Sep',
          y: 451,
        },
        {
          x: 'Oct',
          y: 248,
        },
        {
          x: 'Nov',
          y: 306,
        },
        {
          x: 'Dec',
          y: 366,
        },
      ],
    })
  }, 1000)

  timeout2 = setTimeout(() => {
    series.value.push({
      name: 'Abandonned',
      data: [
        {
          x: 'Jan',
          y: 25,
        },
        {
          x: 'Feb',
          y: 49,
        },
        {
          x: 'Mar',
          y: 36,
        },
        {
          x: 'Apr',
          y: 84,
        },
        {
          x: 'May',
          y: 64,
        },
        {
          x: 'Jun',
          y: 131,
        },
        {
          x: 'Jul',
          y: 48,
        },
        {
          x: 'Aug',
          y: 144,
        },
        {
          x: 'Sep',
          y: 96,
        },
        {
          x: 'Oct',
          y: 11,
        },
        {
          x: 'Nov',
          y: 31,
        },
        {
          x: 'Dec',
          y: 8,
        },
      ],
    })
  }, 2500)
})
onBeforeUnmount(() => {
  clearTimeout(timeout)
  clearTimeout(timeout2)
})
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
        class="-ml-3"
      />
    </ClientOnly>
  </div>
</template>
