<script setup lang="ts">
import type {
  IChartApi,
} from 'lightweight-charts'
import {
  AreaSeries,
  BarSeries,
  BaselineSeries,
  CandlestickSeries,
  createChart,
  HistogramSeries,
  LineSeries,
} from 'lightweight-charts'

type ChartType = 'line' | 'area' | 'bar' | 'candlestick' | 'histogram' | 'baseline'

const props = withDefaults(defineProps<{
  type?: ChartType
  data: any[]
  autosize?: boolean
  chartOptions?: any
  seriesOptions?: any
  timeScaleOptions?: any
  priceScaleOptions?: any
}>(), {
  type: 'line',
  autosize: true,
})

function getChartSeriesDefinition(type: string) {
  switch (type.toLowerCase()) {
    case 'line':
      return LineSeries
    case 'area':
      return AreaSeries
    case 'bar':
      return BarSeries
    case 'candlestick':
      return CandlestickSeries
    case 'histogram':
      return HistogramSeries
    case 'baseline':
      return BaselineSeries
  }
  return LineSeries
}

// Lightweight Charts™ instances are stored as normal JS variables
// If you need to use a ref then it is recommended that you use `shallowRef` instead
let series: any
let chart: IChartApi | null = null

const chartContainer = useTemplateRef<HTMLElement>('chartContainer')

function fitContent() {
  if (!chart)
    return
  chart.timeScale().fitContent()
}

function getChart() {
  return chart
}

defineExpose({ fitContent, getChart })

// Auto resizes the chart when the browser window is resized.
function resizeHandler() {
  if (!chart || !chartContainer.value)
    return
  const dimensions = chartContainer.value.getBoundingClientRect()
  chart.resize(dimensions.width, dimensions.height)
}

// Creates the chart series and sets the data.
function addSeriesAndData(props: any) {
  if (!chart)
    return
  const seriesDefinition = getChartSeriesDefinition(props.type)
  series = chart.addSeries(seriesDefinition, props.seriesOptions)
  series.setData(props.data)
}

onMounted(() => {
  if (!chartContainer.value)
    return

  // Create the Lightweight Charts Instance using the container ref.
  chart = createChart(chartContainer.value, props.chartOptions)
  addSeriesAndData(props)

  if (props.priceScaleOptions) {
    (chart as any).priceScale().applyOptions(props.priceScaleOptions)
  }

  if (props.timeScaleOptions) {
    chart.timeScale().applyOptions(props.timeScaleOptions)
  }

  chart.timeScale().fitContent()

  if (props.autosize) {
    window.addEventListener('resize', resizeHandler)
  }
})

onUnmounted(() => {
  if (chart) {
    chart.remove()
    chart = null
  }
  if (series) {
    series = null
  }
  window.removeEventListener('resize', resizeHandler)
})

/*
 * Watch for changes to any of the component properties.

 * If an options property is changed then we will apply those options
 * on top of any existing options previously set (since we are using the
 * `applyOptions` method).
 *
 * If there is a change to the chart type, then the existing series is removed
 * and the new series is created, and assigned the data.
 *
 */
watch(
  () => props.autosize,
  (enabled) => {
    if (!enabled) {
      window.removeEventListener('resize', resizeHandler)
      return
    }
    window.addEventListener('resize', resizeHandler)
  },
)

watch(
  () => props.type,
  (newType) => {
    if (series && chart) {
      chart.removeSeries(series)
    }
    addSeriesAndData(props)
  },
)

watch(
  () => props.data,
  (newData) => {
    if (!series)
      return

    series.setData(newData)
  },
  {
    flush: 'post',
  },
)

watch(
  () => props.chartOptions,
  (newOptions) => {
    if (!chart || !newOptions)
      return
    chart.applyOptions(newOptions)
  },
)

watch(
  () => props.seriesOptions,
  (newOptions) => {
    if (!series || !newOptions)
      return
    series.applyOptions(newOptions)
  },
)

watch(
  () => props.priceScaleOptions,
  (newOptions) => {
    if (!chart || !newOptions)
      return
    (chart as any).priceScale().applyOptions(newOptions)
  },
)

watch(
  () => props.timeScaleOptions,
  (newOptions) => {
    if (!chart || !newOptions)
      return
    chart.timeScale().applyOptions(newOptions)
  },
)
</script>

<template>
  <div ref="chartContainer" class="h-full" />
</template>
