<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import '~/assets/css/apexcharts.css'

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
const { LazyApexCharts, isLoaded } = useLazyApexCharts()
const target = ref(null)
const targetIsVisible = ref(false)

// When the target is visible on viewport, load the chart
const { stop } = useIntersectionObserver(target, ([entry]) => {
  if (entry?.isIntersecting) {
    targetIsVisible.value = entry.isIntersecting
    stop()
  }
})
</script>

<template>
  <div ref="target">
    <div
      v-if="!isLoaded && !targetIsVisible"
      class="m-4 w-[calc(100%-32px)] flex items-center justify-center"
      :style="{ height: `${height - 32}px` }"
    >
      <div class="flex items-center justify-center">
        <Icon
          name="nui-icon:spiner"
          class="text-2xl size-8 text-current"
        />
      </div>
    </div>
    <ClientOnly>
      <LazyApexCharts
        v-if="targetIsVisible"
        v-show="isLoaded"
        v-bind="props"
      />
      <div
        v-else
        class="m-4 w-[calc(100%-32px)] text-center"
        :style="{ height: `${height - 32}px` }"
      >
        Failed to load chart...
      </div>
    </ClientOnly>
  </div>
</template>
