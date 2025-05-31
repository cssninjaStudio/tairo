<script setup lang="ts">
const sparkSalesFour = reactive(useAreaSparkSalesFour())
function useAreaSparkSalesFour() {
  const series = ref([
    {
      name: 'Consolidated',
      data: randomizeArray([
        472,
        454,
        547,
        385,
        562,
        247,
        652,
        318,
        379,
        391,
        622,
        515,
        355,
        415,
        358,
        271,
        932,
        534,
        615,
        278,
        546,
        435,
        192,
        465,
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
      series.value[0]!.data.push(randomNumber(200, 600))
      series.value[0]!.data.shift()
      radomizeTimeout()
    }, 2000)
  }

  return defineApexchartsProps({
    type: 'area',
    height: 130,
    series,
    options: {
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
      },
      colors: ['var(--color-info-500)'],
      stroke: {
        width: [2],
        curve: 'straight',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      labels: [...Array.from({ length: 24 }).keys()].map(n => `2020-10-0${n + 1}`),
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
        text: 'Consolidated',
        offsetX: 5,
        style: {
          fontFamily: 'var(--font-alt)',
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--color-chart-title)',
          // cssClass: 'apexcharts-spark-title',
        },
      },
      subtitle: {
        text: '$17,865.29',
        offsetX: 5,
        offsetY: 15,
        style: {
          fontFamily: 'var(--font-alt)',
          fontSize: '22px',
          fontWeight: '500',
          color: 'var(--color-chart-subtitle)',
          // cssClass: 'apexcharts-spark-subtitle',
        },
      },
    },
  })
}
</script>

<template>
  <LazyAddonApexcharts v-bind="sparkSalesFour" />
</template>
