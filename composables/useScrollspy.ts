/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 */
export const useScrollspy = (
  options?: IntersectionObserverInit,
  selectors?: string[]
) => {
  const observer = shallowRef<IntersectionObserver>()
  const intersectingIds = shallowRef<string[]>([])
  const activeIds = shallowRef<string[]>([])
  const route = useRoute()
  let timer: any

  const observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      const id = entry.target.id

      if (entry.isIntersecting) {
        intersectingIds.value.push(id)
      } else {
        intersectingIds.value = intersectingIds.value.filter((t) => t !== id)
      }
    })

  const updateElements = (elements: Element[]) =>
    elements.forEach((el) => {
      observer.value!.observe(el)
    })

  watch(intersectingIds, (val, oldVal) => {
    if (val.length === 0) {
      activeIds.value = oldVal
    } else {
      activeIds.value = val
    }
  })

  // Create intersection observer
  onBeforeMount(() => {
    observer.value = new IntersectionObserver(observerCallback, options)
  })

  // Watch for selectors
  watch(
    () => route.fullPath,
    () => {
      if (process.client && selectors) {
        if (timer) {
          clearTimeout(timer)
        }

        timer = setTimeout(() => {
          updateElements([...document.querySelectorAll(selectors.join(', '))])
        }, 300)
      }
    },
    {
      immediate: true,
    }
  )

  // Destroy it
  onBeforeUnmount(() => {
    if (timer) {
      clearTimeout(timer)
    }

    observer.value?.disconnect()
  })

  return {
    visibleIds: intersectingIds,
    activeIds,
    updateElements,
  }
}
