<script lang="ts">
import type { ApexOptions } from 'apexcharts'
import { useIntersectionObserver } from '@vueuse/core'
import { hydrateOnVisible } from 'vue'
import '~/assets/apexcharts.css'

export interface AddonApexchartsProps {
  type: NonNullable<ApexOptions['chart']>['type']
  height: NonNullable<ApexOptions['chart']>['height']
  width?: NonNullable<ApexOptions['chart']>['width']
  series: MaybeRefOrGetter<ApexOptions['series']>
  /**
   * ApexCharts options - Without `series`, `chart.type` / `chart.height` / `chart.width`  properties
   * @see https://apexcharts.com/docs/options/
   */
  options?: Omit<ApexOptions, 'series' | 'chart'> & { chart?: Omit<NonNullable<ApexOptions['chart']>, 'type' | 'height' | 'width'> }
}

const useIsLoaded = () => useState('apex-loaded', () => false)

/**
 * Use `defineAsyncComponent` to lazy load the component only when needed
 * This improves the initial load time of the page when the component is not needed
 *
 * Using a ref to track when the component is loaded is not necessary, but it's
 * a good practice to be able to show a loading state while the component is loading.
 */
const LazyApexCharts = defineAsyncComponent({
  suspensible: false,
  hydrate: hydrateOnVisible(),
  loader: () => {
    return import('vue3-apexcharts').then((module) => {
      nextTick(() => {
        useIsLoaded().value = true
      })
      return module.default
    })
  },
})
</script>

<script setup lang="ts">
const props = defineProps<AddonApexchartsProps>()
const target = ref(null)
const isLoaded = useIsLoaded()
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
      :style="{ height: `${Number(height) - 32}px` }"
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
        :style="{ height: `${Number(height) - 32}px` }"
      >
        <DevOnly>Failed to load chart...</DevOnly>
      </div>
    </ClientOnly>
  </div>
</template>
