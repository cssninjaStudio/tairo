<script setup lang="ts">
const barOrders = reactive(useBarOrders())

function useBarOrders() {
  const series = ref<any[]>([])

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
    }, 1500)

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

  return defineApexchartsProps({
    type: 'bar',
    height: 210,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['var(--color-success-500)', 'var(--color-warning-500)'],
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
  <LazyAddonApexcharts v-bind="barOrders" />
</template>
