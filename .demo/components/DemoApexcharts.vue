<script setup lang="ts">
const { LazyApexCharts, isLoaded } = useLazyApexCharts()
const props = defineProps<{
  type: string
  height: number
  width?: number
  series: any[]
  /**
   * ApexCharts options - Without `series`, `chart.type` / `chart.height` / `chart.width`  properties
   * @see https://apexcharts.com/docs/options/
   */
  options?: Record<string, any>
}>()
</script>

<template>
  <div>
    <BasePlaceload
      class="w-[calc(100%-32px)] m-4"
      v-if="!isLoaded"
      :style="{ height: `${height - 32}px` }"
    />
    <ClientOnly>
      <LazyApexCharts v-show="isLoaded" v-bind="props" />
    </ClientOnly>
  </div>
</template>
