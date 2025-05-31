<script setup lang="ts">
/**
 * Generates sample data for the Lightweight Charts™ example
 * @param  {boolean} ohlc Whether generated dat should include open, high, low, and close values
 * @returns {Array} sample data
 */
function generateSampleData(ohlc: boolean) {
  const randomFactor = 25 + Math.random() * 25
  function samplePoint(i: number) {
    return (
      i
      * (0.5
        + Math.sin(i / 10) * 0.2
        + Math.sin(i / 20) * 0.4
        + Math.sin(i / randomFactor) * 0.8
        + Math.sin(i / 500) * 0.5)
      + 200
    )
  }

  const res = []
  const date = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0))
  const numberOfPoints = ohlc ? 100 : 500
  for (let i = 0; i < numberOfPoints; ++i) {
    const time = date.getTime() / 1000
    const value = samplePoint(i)
    if (ohlc) {
      const randomRanges = [
        -1 * Math.random(),
        Math.random(),
        Math.random(),
      ].map(i => i * 10)
      const sign = Math.sin(Math.random() - 0.5)
      res.push({
        time,
        low: value + randomRanges[0]!,
        high: value + randomRanges[1]!,
        open: value + sign * randomRanges[2]!,
        close: samplePoint(i + 1),
      })
    }
    else {
      res.push({
        time,
        value,
      })
    }

    date.setUTCDate(date.getUTCDate() + 1)
  }

  return res
}

const chartOptions = shallowRef<any>({})

const colorMode = useColorMode()
watch(() => colorMode.preference, (preference) => {
  if (preference === 'dark') {
    chartOptions.value = {
      layout: {
        fontFamily: `'Inter', sans-serif`,
        background: { color: '#101828' }, // muted-900
        textColor: '#99a1af', // muted-400
      },
      grid: {
        vertLines: { color: '#364153' }, // muted-700
        horzLines: { color: '#364153' }, // muted-700
      },
      crosshair: {
        vertLine: {
          width: 1,
          color: '#8e51ff', // muted-700/50
          labelBackgroundColor: '#8e51ff', // #8e51ff - primary-500
        },
        horzLine: {
          width: 1,
          color: '#8e51ff', // muted-700/50
          labelBackgroundColor: '#8e51ff', // #8e51ff - primary-500
        },
      },
    }
  }
  else {
    chartOptions.value = {
      layout: {
        fontFamily: `'Inter', sans-serif`,
        background: { color: '#FFF' },
        textColor: '#364153', // muted-700
      },
      grid: {
        vertLines: { color: '#cad5e2' }, // muted-300
        horzLines: { color: '#cad5e2' }, // muted-300
      },
      crosshair: {
        vertLine: {
          width: 1,
          color: '#8e51ff', // muted-700/50
          labelBackgroundColor: '#8e51ff', // #8e51ff - primary-500
        },
        horzLine: {
          width: 1,
          color: '#8e51ff', // muted-700/50
          labelBackgroundColor: '#8e51ff', // #8e51ff - primary-500
        },
      },
    }
  }
}, { immediate: true })

const data = ref(generateSampleData(false))
const seriesOptions = ref<any>({
  color: '#8e51ff',
})
const chartType = ref<'line' | 'area' | 'bar' | 'candlestick' | 'histogram' | 'baseline'>('line')
const lwChart = useTemplateRef('lwChart')

function changeData() {
  const candlestickTypeData = ['candlestick', 'bar'].includes(chartType.value)
  const newData = generateSampleData(candlestickTypeData)
  data.value = newData
  if (chartType.value === 'baseline') {
    const average = newData.reduce((s, c) => {
      return s + c.value!
    }, 0) / newData.length
    seriesOptions.value = { baseValue: { type: 'price', price: average } }
  }
}

function changeType() {
  const types = [
    'line',
    'area',
    'baseline',
    'histogram',
    'candlestick',
    'bar',
  ].filter(t => t !== chartType.value)
  const randIndex = Math.round(Math.random() * (types.length - 1))
  chartType.value = types[randIndex] as 'line' | 'area' | 'bar' | 'candlestick' | 'histogram' | 'baseline'
  changeData()

  // call a method on the component.
  lwChart.value?.fitContent()
}
</script>

<template>
  <div class="h-[300px] w-full">
    <AddonLightweightCharts
      ref="lwChart"
      :type="chartType"
      :data="data"
      :autosize="true"
      :chart-options="chartOptions"
      :series-options="seriesOptions"
    />
  </div>
  <div class="flex gap-2 mt-4">
    <BaseButton @click="changeType">
      Change Chart Type
    </BaseButton>
    <BaseButton @click="changeData">
      Change Data
    </BaseButton>
  </div>
</template>
