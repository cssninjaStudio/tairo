const useApexChartLoaded = () => useState('apex-loaded', () => false)

/**
 * Use `defineAsyncComponent` to lazy load the component only when needed
 * This improves the initial load time of the page when the component is not needed
 *
 * Using a ref to track when the component is loaded is not necessary, but it's
 * a good practice to be able to show a loading state while the component is loading.
 */
const LazyApexCharts = defineAsyncComponent({
  suspensible: false,
  loader: () =>
    import('vue3-apexcharts').then((module) => {
      nextTick(() => {
        useApexChartLoaded().value = true
      })
      return module.default
    }),
})

export function useLazyApexCharts() {
  const isLoaded = useApexChartLoaded()

  return {
    LazyApexCharts,
    isLoaded,
  }
}
